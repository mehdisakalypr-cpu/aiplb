import { cookies } from "next/headers";
import crypto from "node:crypto";
import { supabaseService } from "./supabase-server";

const COOKIE_NAME = "aici_session";
const TOKEN_TTL_MIN = 30; // magic link
const SESSION_TTL_DAYS = 30;

function secret() {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 16) throw new Error("AUTH_SECRET missing or too short");
  return s;
}

function sign(payload: string) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex");
}

export function makeMagicToken(email: string) {
  const exp = Date.now() + TOKEN_TTL_MIN * 60_000;
  const body = `${email.toLowerCase()}|${exp}`;
  const sig = sign(body);
  return Buffer.from(`${body}|${sig}`).toString("base64url");
}

export function verifyMagicToken(token: string): string | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [email, expStr, sig] = decoded.split("|");
    if (!email || !expStr || !sig) return null;
    const expected = sign(`${email}|${expStr}`);
    if (expected !== sig) return null;
    if (Date.now() > Number(expStr)) return null;
    return email;
  } catch {
    return null;
  }
}

export function makeSessionToken(userId: string) {
  const exp = Date.now() + SESSION_TTL_DAYS * 86_400_000;
  const body = `${userId}|${exp}`;
  const sig = sign(body);
  return Buffer.from(`${body}|${sig}`).toString("base64url");
}

export function verifySessionToken(
  token: string
): { userId: string } | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [userId, expStr, sig] = decoded.split("|");
    if (!userId || !expStr || !sig) return null;
    const expected = sign(`${userId}|${expStr}`);
    if (expected !== sig) return null;
    if (Date.now() > Number(expStr)) return null;
    return { userId };
  } catch {
    return null;
  }
}

export async function setSessionCookie(userId: string) {
  const token = makeSessionToken(userId);
  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_DAYS * 86_400,
  });
}

export async function clearSessionCookie() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}

export async function getSessionUser(): Promise<{
  id: string;
  email: string;
} | null> {
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  if (!token) return null;
  const v = verifySessionToken(token);
  if (!v) return null;
  const { data } = await supabaseService()
    .from("clients")
    .select("id,email")
    .eq("id", v.userId)
    .maybeSingle();
  return data ?? null;
}

export async function upsertClientByEmail(email: string) {
  const lower = email.toLowerCase();
  const sb = supabaseService();
  const { data: existing } = await sb
    .from("clients")
    .select("id,email")
    .eq("email", lower)
    .maybeSingle();
  if (existing) return existing;
  const { data, error } = await sb
    .from("clients")
    .insert({ email: lower, plan: "trial" })
    .select("id,email")
    .single();
  if (error) throw error;
  return data;
}

export const COOKIE = COOKIE_NAME;

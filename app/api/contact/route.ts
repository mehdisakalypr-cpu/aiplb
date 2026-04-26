import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

const ALLOWED_REASONS = new Set([
  "sales",
  "support",
  "partnership",
  "press",
  "other",
]);

function hashIp(ip: string | null): string | null {
  if (!ip) return null;
  const salt = process.env.AUTH_SECRET || "aici";
  return crypto.createHash("sha256").update(ip + salt).digest("hex").slice(0, 32);
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  const reason = String(body.reason || "other").trim().toLowerCase();
  const message = String(body.message || "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }
  if (message.length > 1000) {
    return NextResponse.json(
      { error: "Message too long (max 1000 chars)" },
      { status: 400 }
    );
  }
  const safeReason = ALLOWED_REASONS.has(reason) ? reason : "other";

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;
  const ua = req.headers.get("user-agent") || null;

  try {
    const sb = supabaseService();
    const { error } = await sb.from("contact_messages").insert({
      email,
      reason: safeReason,
      message,
      ip_hash: hashIp(ip),
      user_agent: ua?.slice(0, 200) || null,
    });
    if (error) {
      console.error("[contact] insert error", error);
      return NextResponse.json(
        { error: "Could not save message" },
        { status: 500 }
      );
    }
  } catch (e: any) {
    console.error("[contact] exception", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  // Best-effort notification via Resend
  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.RESEND_FROM || "AIPLB <noreply@aiplb.app>";
      await resend.emails.send({
        from,
        to: ["mehdi.sakalypr@gmail.com"],
        subject: `[AIPLB contact · ${safeReason}] ${email}`,
        text: `Reason: ${safeReason}\nFrom: ${email}\n\n${message}`,
      });
    }
  } catch (e) {
    console.warn("[contact] resend send failed (non-fatal)", e);
  }

  return NextResponse.json({ ok: true });
}

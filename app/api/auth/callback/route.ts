import { NextResponse } from "next/server";
import {
  setSessionCookie,
  upsertClientByEmail,
  verifyMagicToken,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  if (!token) return NextResponse.redirect(new URL("/auth/login?err=missing", req.url));
  const email = verifyMagicToken(token);
  if (!email) return NextResponse.redirect(new URL("/auth/login?err=invalid", req.url));

  const client = await upsertClientByEmail(email);
  await setSessionCookie(client.id);

  return NextResponse.redirect(new URL("/dashboard", req.url));
}

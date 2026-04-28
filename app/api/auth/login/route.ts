import { NextResponse } from "next/server";
import { setSessionCookie, verifyClientPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    if (!email || !password) {
      return NextResponse.json({ error: "email_and_password_required" }, { status: 400 });
    }
    const client = await verifyClientPassword(email, password);
    if (!client) {
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }
    await setSessionCookie(client.id);
    return NextResponse.json({ ok: true, redirect: "/mon-compte" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import {
  hashPassword,
  setSessionCookie,
  upsertClientByEmail,
  clientHasPassword,
} from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    if (!email || !password) {
      return NextResponse.json({ error: "email_and_password_required" }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "password_too_short" }, { status: 400 });
    }

    if (await clientHasPassword(email)) {
      return NextResponse.json(
        { error: "account_exists", redirect: "/auth/login" },
        { status: 409 },
      );
    }

    const client = await upsertClientByEmail(email);
    const hash = await hashPassword(password);
    const { error: upErr } = await supabaseService()
      .from("clients")
      .update({ password_hash: hash, password_set_at: new Date().toISOString() })
      .eq("id", client.id);
    if (upErr) throw upErr;

    await setSessionCookie(client.id);
    return NextResponse.json({ ok: true, redirect: "/mon-compte" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

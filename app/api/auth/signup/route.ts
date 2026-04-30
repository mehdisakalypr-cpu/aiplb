import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  hashPassword,
  setSessionCookie,
  upsertClientByEmail,
  clientHasPassword,
} from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";
import {
  clientIp,
  rateLimitSignup,
  rateLimitResponse,
} from "@/lib/auth-rate-limit";
import { requireSameOrigin } from "@/lib/auth-csrf";

export const runtime = "nodejs";

/**
 * Anti-enumeration signup. Always returns 200 with the same body shape
 * regardless of whether the email already has a registered account. The
 * difference is internal:
 *   - new email     → create row + set password + set session cookie
 *   - existing      → no DB change + no session cookie + fire-and-forget
 *                     "someone tried to register your email" notice via Resend
 *
 * Residual signal: the Set-Cookie header is only present in the new-email
 * branch. Acceptable v1 trade-off — eliminating it would require setting a
 * dummy cookie on the existing branch, complicating /mon-compte gating.
 */
export async function POST(req: Request) {
  try {
    const csrf = requireSameOrigin(req);
    if (csrf) return csrf;

    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    if (!email || !password) {
      return NextResponse.json({ error: "email_and_password_required" }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "password_too_short" }, { status: 400 });
    }

    const rl = rateLimitSignup(clientIp(req));
    if (!rl.allowed) return rateLimitResponse(rl);

    if (await clientHasPassword(email)) {
      // Fire-and-forget — never block the response.
      void notifyAlreadyRegistered(email, req);
      return NextResponse.json({ ok: true, redirect: "/mon-compte" });
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

async function notifyAlreadyRegistered(email: string, req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return;
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "IP Licensing Bot <noreply@aiplb.app>";
    const appUrl =
      process.env.APP_URL ||
      (req.headers.get("x-forwarded-host")
        ? `https://${req.headers.get("x-forwarded-host")}`
        : "http://localhost:3000");
    await resend.emails.send({
      from,
      to: email,
      subject: "Un compte existe déjà avec cette adresse",
      html: `<div style="font-family:system-ui,sans-serif;max-width:480px">
        <p>Quelqu'un (peut-être vous) a tenté de créer un compte IP Licensing Bot avec cette adresse.</p>
        <p>Un compte existe déjà. Vous pouvez vous connecter ici :</p>
        <p><a href="${appUrl}/auth/login" style="display:inline-block;padding:10px 16px;background:#7C3AED;color:#fff;border-radius:6px;text-decoration:none">Se connecter</a></p>
        <p>Si vous avez oublié votre mot de passe :</p>
        <p><a href="${appUrl}/auth/forgot-password">Mot de passe oublié ?</a></p>
        <p style="color:#888;font-size:11px">Si ce n'était pas vous, ignorez ce mail. Aucune action n'est requise.</p>
      </div>`,
    });
  } catch {
    // Swallow — anti-enum requires consistent timing/response
  }
}

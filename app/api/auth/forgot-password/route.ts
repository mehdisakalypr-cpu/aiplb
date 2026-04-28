import { NextResponse } from "next/server";
import { Resend } from "resend";
import { makeMagicToken } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "email_required" }, { status: 400 });
    }

    const sb = supabaseService();
    const { data: client } = await sb
      .from("clients")
      .select("id, email")
      .eq("email", email)
      .maybeSingle();

    if (client) {
      const token = makeMagicToken(email);
      const appUrl =
        process.env.APP_URL ||
        (req.headers.get("x-forwarded-host")
          ? `https://${req.headers.get("x-forwarded-host")}`
          : "http://localhost:3000");
      const link = `${appUrl}/api/auth/callback?token=${encodeURIComponent(token)}&next=${encodeURIComponent("/mon-compte?reset=1")}`;
      const apiKey = process.env.RESEND_API_KEY;
      const from = process.env.RESEND_FROM || "IP Licensing Bot <noreply@aiplb.app>";

      if (apiKey) {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from,
          to: email,
          subject: "Réinitialiser votre mot de passe IP Licensing Bot",
          html: `<div style="font-family:system-ui,sans-serif;max-width:480px">
            <p>Vous avez demandé un lien de connexion pour modifier votre mot de passe.</p>
            <p><a href="${link}" style="display:inline-block;padding:10px 16px;background:#10B981;color:#fff;border-radius:6px;text-decoration:none">Se connecter et modifier mon mot de passe</a></p>
            <p style="color:#666;font-size:12px">Lien valable 30 minutes. Si vous n&apos;avez pas fait cette demande, ignorez ce mail.</p>
            <p style="color:#888;font-size:11px;word-break:break-all">${link}</p>
          </div>`,
        });
      } else {
        console.log("[dev] forgot-password link:", link);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

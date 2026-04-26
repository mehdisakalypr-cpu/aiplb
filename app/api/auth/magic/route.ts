import { NextResponse } from "next/server";
import { Resend } from "resend";
import { makeMagicToken, upsertClientByEmail } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }

    // ensure client row exists
    await upsertClientByEmail(email);

    const token = makeMagicToken(email);
    const appUrl =
      process.env.APP_URL ||
      (req.headers.get("x-forwarded-host")
        ? `https://${req.headers.get("x-forwarded-host")}`
        : "http://localhost:3000");
    const link = `${appUrl}/api/auth/callback?token=${encodeURIComponent(token)}`;

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM || "AIPLB <noreply@aiplb.app>";

    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: email,
        subject: "Your AIPLB sign-in link",
        html: `<p>Click to sign in to AIPLB:</p>
        <p><a href="${link}" style="display:inline-block;padding:10px 16px;background:#111;color:#fff;border-radius:6px;text-decoration:none">Sign in</a></p>
        <p>Or paste this link: ${link}</p>
        <p style="color:#888;font-size:12px">Expires in 30 minutes.</p>`,
      });
    } else {
      console.log("[dev] magic link:", link);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { error: e?.message || "Internal error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { setSessionCookie, verifyClientPassword } from "@/lib/auth";
import { autoLinkLegacyUser } from "@/lib/legacy-link";
import {
  clientIp,
  rateLimitLogin,
  rateLimitResponse,
} from "@/lib/auth-rate-limit";
import { requireSameOrigin } from "@/lib/auth-csrf";

export const runtime = "nodejs";

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

    const rl = rateLimitLogin(clientIp(req), email);
    if (!rl.allowed) return rateLimitResponse(rl);

    const client = await verifyClientPassword(email, password);
    if (!client) {
      // Generic message — don't leak whether the email exists.
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }
    await setSessionCookie(client.id);
    // Fire-and-forget link to hub_users if the user has a Gapup hub account.
    // Failures don't block login.
    void autoLinkLegacyUser(client.id, client.email);
    return NextResponse.json({ ok: true, redirect: "/mon-compte" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

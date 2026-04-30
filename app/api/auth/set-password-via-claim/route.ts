import { NextResponse } from "next/server";
import {
  getResetClaim,
  clearResetClaimCookie,
  setSessionCookie,
  setClientPassword,
} from "@/lib/auth";
import { requireSameOrigin } from "@/lib/auth-csrf";

export const runtime = "nodejs";

/**
 * Final step of the forgot-password flow. The user arrives here from
 * /auth/set-password after clicking the magic link in the recovery email.
 * They have a short-lived `aici_pwd_reset` claim cookie (15 min, scoped to
 * this flow only — no /service or /mon-compte access).
 *
 * On success: password is set + claim is cleared + full 30d session cookie set.
 */
export async function POST(req: Request) {
  try {
    const csrf = requireSameOrigin(req);
    if (csrf) return csrf;

    const claim = await getResetClaim();
    if (!claim) {
      return NextResponse.json(
        { error: "claim_missing_or_expired" },
        { status: 401 },
      );
    }

    const body = await req.json().catch(() => null);
    const password = typeof body?.password === "string" ? body.password : "";
    if (password.length < 8) {
      return NextResponse.json({ error: "password_too_short" }, { status: 400 });
    }

    await setClientPassword(claim.userId, password);
    await clearResetClaimCookie();
    await setSessionCookie(claim.userId);

    return NextResponse.json({ ok: true, redirect: "/mon-compte" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

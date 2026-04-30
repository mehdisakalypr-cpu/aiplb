import { NextResponse } from "next/server";
import {
  getSessionUser,
  setClientPassword,
  verifyClientPassword,
  clientHasPassword,
} from "@/lib/auth";
import { requireSameOrigin } from "@/lib/auth-csrf";

export const runtime = "nodejs";

/**
 * Change-password — used both by:
 *   - logged-in users updating their password from /mon-compte
 *   - users arriving via the forgot-password magic link (no current password
 *     known yet — they're authed by the magic cookie). We accept current=""
 *     in that case ONLY when the account has never set a password.
 */
export async function POST(req: Request) {
  try {
    const csrf = requireSameOrigin(req);
    if (csrf) return csrf;

    const me = await getSessionUser();
    if (!me) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

    const body = await req.json().catch(() => null);
    const newPwd = typeof body?.password === "string" ? body.password : "";
    const currentPwd = typeof body?.current === "string" ? body.current : "";

    if (newPwd.length < 8) {
      return NextResponse.json({ error: "password_too_short" }, { status: 400 });
    }

    const hadPwd = await clientHasPassword(me.email);

    // If the account already has a password, require the current one (or magic
    // session token, which we already validated via getSessionUser — but we
    // still want a guardrail against session hijack: require current pwd).
    if (hadPwd) {
      if (!currentPwd) {
        return NextResponse.json({ error: "current_password_required" }, { status: 400 });
      }
      const ok = await verifyClientPassword(me.email, currentPwd);
      if (!ok) {
        return NextResponse.json({ error: "current_password_invalid" }, { status: 401 });
      }
    }

    await setClientPassword(me.id, newPwd);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

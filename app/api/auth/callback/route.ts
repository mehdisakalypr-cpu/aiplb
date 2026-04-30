import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  setSessionCookie,
  setResetClaimCookie,
  upsertClientByEmail,
  verifyMagicToken,
  clientHasPassword,
} from "@/lib/auth";
import { isAdmin } from "@/lib/admin";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

const COOKIE_SUB = "aici_sub_active";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const next = searchParams.get("next");
  if (!token) return NextResponse.redirect(new URL("/auth/login?err=missing", req.url));
  const email = verifyMagicToken(token);
  if (!email) return NextResponse.redirect(new URL("/auth/login?err=invalid", req.url));

  const client = await upsertClientByEmail(email);

  // Detect password-reset flow: forgot-password sends next=/mon-compte?reset=1
  const isResetFlow = !!next && /(?:^|[?&])reset=1(?:&|$)/.test(next);

  // Per security policy: a magic link must NEVER grant a 30-day full session
  // when the account already has a password — that would bypass the password
  // entirely (compromise victim's email once → 30 days of access). Instead, set
  // a short-lived password-reset claim and force the user through /auth/set-password.
  const hasPwd = await clientHasPassword(email);

  if (isResetFlow || hasPwd) {
    await setResetClaimCookie(client.id, email);
    return NextResponse.redirect(new URL("/auth/set-password", req.url));
  }

  // Passwordless first-time login (account has no password set yet) — magic
  // link IS the only credential, so granting full session is acceptable here.
  await setSessionCookie(client.id);

  // Only allow same-origin internal redirects via `next` to prevent open-redirect.
  const safeNext = next && next.startsWith("/") && !next.startsWith("//") ? next : null;

  if (await isAdmin(email)) {
    await supabaseService()
      .from("clients")
      .update({ plan: "free", status: "inactive", updated_at: new Date().toISOString() })
      .eq("id", client.id);
    const c = await cookies();
    c.delete(COOKIE_SUB);
    return NextResponse.redirect(new URL(safeNext ?? "/?welcome=admin", req.url));
  }

  return NextResponse.redirect(new URL(safeNext ?? "/dashboard", req.url));
}

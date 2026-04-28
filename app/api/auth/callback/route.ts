import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  setSessionCookie,
  upsertClientByEmail,
  verifyMagicToken,
} from "@/lib/auth";
import { isAdmin } from "@/lib/admin";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

const COOKIE_SUB = "aiplb_sub_active";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const next = searchParams.get("next");
  if (!token) return NextResponse.redirect(new URL("/auth/login?err=missing", req.url));
  const email = verifyMagicToken(token);
  if (!email) return NextResponse.redirect(new URL("/auth/login?err=invalid", req.url));

  const client = await upsertClientByEmail(email);
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

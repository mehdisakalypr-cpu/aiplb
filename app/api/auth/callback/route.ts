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
  if (!token) return NextResponse.redirect(new URL("/auth/login?err=missing", req.url));
  const email = verifyMagicToken(token);
  if (!email) return NextResponse.redirect(new URL("/auth/login?err=invalid", req.url));

  const client = await upsertClientByEmail(email);
  await setSessionCookie(client.id);

  // Admin login policy: every admin starts every session in Free.
  // Tier is opt-in via /admin (impersonate). This guarantees gates are tested
  // honestly and the founder doesn't unintentionally stay on a paid plan.
  if (await isAdmin(email)) {
    await supabaseService()
      .from("clients")
      .update({ plan: "free", status: "inactive", updated_at: new Date().toISOString() })
      .eq("id", client.id);
    const c = await cookies();
    c.delete(COOKIE_SUB);
    return NextResponse.redirect(new URL("/?welcome=admin", req.url));
  }

  return NextResponse.redirect(new URL("/dashboard", req.url));
}

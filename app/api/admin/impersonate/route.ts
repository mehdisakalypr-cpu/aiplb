import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { requireAdmin } from "@/lib/admin";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_SUB = "aiplb_sub_active";
const VALID_TIERS = new Set(["free", "starter", "pro", "scale"]);

export async function POST(req: Request) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  let body: { tier?: unknown };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad json" }, { status: 400 }); }
  const tier = String(body.tier ?? "").toLowerCase();
  if (!VALID_TIERS.has(tier)) return NextResponse.json({ error: "invalid tier" }, { status: 400 });

  const sb = supabaseService();
  await sb.from("clients").update({
    plan: tier,
    status: tier === "free" ? "inactive" : "active",
    updated_at: new Date().toISOString(),
  }).eq("id", user.id);

  const c = await cookies();
  if (tier === "free") {
    c.delete(COOKIE_SUB);
  } else {
    c.set(COOKIE_SUB, "1", {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400 * 30,
    });
  }

  return NextResponse.json({ ok: true, tier, user_id: user.id });
}

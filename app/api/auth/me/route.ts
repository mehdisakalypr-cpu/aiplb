import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ user: null }, { status: 401 });
  const is_admin = await isAdmin(user.email);
  const { data } = await supabaseService()
    .from("clients")
    .select("plan,status")
    .eq("id", user.id)
    .maybeSingle();
  const plan = data?.plan ?? "free";
  const status = data?.status ?? "inactive";
  return NextResponse.json({ user, is_admin, plan, status });
}

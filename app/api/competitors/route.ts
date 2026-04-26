import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";
import { PLANS, type PlanKey } from "@/lib/stripe";

export const runtime = "nodejs";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });
  const { data, error } = await supabaseService()
    .from("competitors")
    .select("id,name,url,enabled,last_snapshot_at")
    .eq("client_id", user.id)
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data || [] });
}

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });
  const { name, url } = await req.json();
  if (!name || !url) {
    return NextResponse.json({ error: "name + url required" }, { status: 400 });
  }
  try {
    new URL(url);
  } catch {
    return NextResponse.json({ error: "invalid url" }, { status: 400 });
  }

  const sb = supabaseService();

  // Enforce plan limits
  const { data: client } = await sb
    .from("clients")
    .select("plan")
    .eq("id", user.id)
    .single();
  const plan = (client?.plan as PlanKey) || "starter";
  const max = PLANS[plan]?.max_competitors ?? 5;

  const { count } = await sb
    .from("competitors")
    .select("id", { count: "exact", head: true })
    .eq("client_id", user.id);
  if ((count ?? 0) >= max) {
    return NextResponse.json(
      { error: `Plan limit reached (${max}). Upgrade to add more.` },
      { status: 402 }
    );
  }

  const { data, error } = await sb
    .from("competitors")
    .insert({
      client_id: user.id,
      name,
      url,
      enabled: true,
    })
    .select("id,name,url,enabled,last_snapshot_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ competitor: data });
}

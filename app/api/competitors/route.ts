import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";
import { getTierLimits, nextTier } from "@/lib/tier-limits";

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
  try { new URL(url); } catch { return NextResponse.json({ error: "invalid url" }, { status: 400 }); }

  const sb = supabaseService();
  const { data: client } = await sb.from("clients").select("plan").eq("id", user.id).single();
  const plan = client?.plan ?? "free";
  const limits = getTierLimits(plan);
  const max = limits.items_max;

  const { count } = await sb.from("competitors")
    .select("id", { count: "exact", head: true })
    .eq("client_id", user.id);

  if ((count ?? 0) >= max) {
    const up = nextTier(plan);
    const upgradeMsg = max === 0
      ? "Choisissez une offre pour commencer."
      : up
      ? `Limite ${plan} atteinte (${max}). Passez en ${up} pour suivre plus de concurrents.`
      : `Limite atteinte (${max}). Vous êtes déjà sur le plan le plus élevé.`;
    return NextResponse.json(
      { error: upgradeMsg, current: count, max, upgrade_to: up },
      { status: 402 },
    );
  }

  const { data, error } = await sb.from("competitors")
    .insert({ client_id: user.id, name, url, enabled: true })
    .select("id,name,url,enabled,last_snapshot_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ competitor: data });
}

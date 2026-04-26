import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });
  const { id } = await ctx.params;
  const sb = supabaseService();

  const { data: comp } = await sb
    .from("competitors")
    .select("id,name,url,enabled,client_id")
    .eq("id", id)
    .maybeSingle();
  if (!comp || comp.client_id !== user.id) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const { data: snapshots } = await sb
    .from("snapshots")
    .select("id,captured_at,hash,bytes,status")
    .eq("competitor_id", id)
    .order("captured_at", { ascending: false })
    .limit(30);

  const { data: diffs } = await sb
    .from("diffs")
    .select("id,created_at,summary,added_chars,removed_chars")
    .eq("competitor_id", id)
    .order("created_at", { ascending: false })
    .limit(30);

  return NextResponse.json({
    competitor: {
      id: comp.id,
      name: comp.name,
      url: comp.url,
      enabled: comp.enabled,
    },
    snapshots: snapshots || [],
    diffs: diffs || [],
  });
}

export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });
  const { id } = await ctx.params;
  const sb = supabaseService();
  const { data: comp } = await sb
    .from("competitors")
    .select("id,client_id")
    .eq("id", id)
    .maybeSingle();
  if (!comp || comp.client_id !== user.id) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  await sb.from("competitors").delete().eq("id", id);
  return NextResponse.json({ ok: true });
}

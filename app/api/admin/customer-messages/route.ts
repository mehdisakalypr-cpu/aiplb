import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

const VALID_STATUSES = ["pending", "draft_ready", "approved", "sent", "ignored"] as const;
type DraftStatus = typeof VALID_STATUSES[number];

export async function GET(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");
  const status = searchParams.get("status");
  const limit = Math.min(Number(searchParams.get("limit") ?? 100), 500);

  let q = supabaseService()
    .schema("public" as any).from("customer_messages")
    .select("id, product_slug, type, name, email, company, subject, message, ai_draft, ai_classification, ai_confidence, draft_status, received_at, sent_at, replied_at")
    .order("received_at", { ascending: false })
    .limit(limit);

  if (folder) q = q.eq("product_slug", folder);
  if (status) q = q.eq("draft_status", status);

  const { data, error } = await q;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data: folders } = await supabaseService()
    .schema("public" as any).from("customer_messages")
    .select("product_slug")
    .order("product_slug");

  const folderCounts = (folders ?? []).reduce<Record<string, number>>((acc, row) => {
    const slug = (row as any).product_slug ?? "unknown";
    acc[slug] = (acc[slug] ?? 0) + 1;
    return acc;
  }, {});

  return NextResponse.json({ messages: data ?? [], folders: folderCounts });
}

export async function PATCH(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const body = (await req.json().catch(() => null)) as
    | { ids?: string[]; ai_draft?: string; draft_status?: DraftStatus }
    | null;
  if (!body || !Array.isArray(body.ids) || body.ids.length === 0) {
    return NextResponse.json({ error: "ids required" }, { status: 400 });
  }

  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (typeof body.ai_draft === "string") update.ai_draft = body.ai_draft;
  if (body.draft_status && VALID_STATUSES.includes(body.draft_status)) {
    update.draft_status = body.draft_status;
    if (body.draft_status === "approved") update.approved_by = admin.email;
  }

  const { error } = await supabaseService()
    .schema("public" as any).from("customer_messages")
    .update(update)
    .in("id", body.ids);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, count: body.ids.length });
}

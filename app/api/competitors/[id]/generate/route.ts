import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSessionUser } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";
import { snapshotCompetitor } from "@/lib/snapshot";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * On-demand report generation for a single competitor.
 *
 * Behaviour matches the founder's promise: paying clients must get the report
 * the moment they click "Go". If the snapshot fails for technical reasons we
 * enqueue a pending_reports row and surface a friendly message; a cron will
 * retry and email the user when it succeeds. We never silently fail.
 */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });

  const sb = supabaseService();
  const { data: comp } = await sb
    .from("competitors")
    .select("id, name, url, client_id")
    .eq("id", id)
    .maybeSingle();
  if (!comp || comp.client_id !== user.id) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const result = await snapshotCompetitor(id);
    return NextResponse.json({
      ok: true,
      status: "ready",
      hash: result.hash,
      competitor_id: id,
      message: `Rapport prêt pour ${comp.name}.`,
    });
  } catch (e: unknown) {
    const errMsg = e instanceof Error ? e.message : String(e);
    // Enqueue for retry + send the founder's promised message.
    await sb.from("pending_reports").insert({
      client_id: user.id,
      competitor_id: id,
      attempts: 1,
      last_attempt_at: new Date().toISOString(),
      last_error: errMsg.slice(0, 500),
    });
    return NextResponse.json(
      {
        ok: false,
        status: "queued",
        message:
          "Nous paramétrons votre compte et lançons l'étude. Vous recevrez un email dès que l'étude sera prête.",
      },
      { status: 202 },
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseService } from "@/lib/supabase-server";
import { snapshotCompetitor } from "@/lib/snapshot";

export const runtime = "nodejs";
export const maxDuration = 300;

const MAX_ATTEMPTS = 5;

export async function GET(req: Request) { return run(req); }
export async function POST(req: Request) { return run(req); }

async function run(req: Request) {
  // Auth gate: Vercel Cron header or CRON_SECRET (matches existing snapshot-all).
  const url = new URL(req.url);
  const auth = req.headers.get("authorization");
  const isVercelCron = req.headers.get("x-vercel-cron") === "1";
  const qSecret = url.searchParams.get("secret");
  const secret = process.env.CRON_SECRET;
  if (
    !isVercelCron &&
    (!secret || (auth !== `Bearer ${secret}` && qSecret !== secret))
  ) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const sb = supabaseService();
  const { data: pending } = await sb
    .from("pending_reports")
    .select("id, client_id, competitor_id, attempts")
    .is("served_at", null)
    .lt("attempts", MAX_ATTEMPTS)
    .order("requested_at", { ascending: true })
    .limit(50);

  const results: Array<{ id: string; status: string; error?: string }> = [];
  for (const row of pending ?? []) {
    try {
      if (!row.competitor_id) {
        await sb.from("pending_reports").update({
          served_at: new Date().toISOString(),
          last_error: "no competitor_id",
        }).eq("id", row.id);
        results.push({ id: row.id, status: "skipped" });
        continue;
      }
      await snapshotCompetitor(row.competitor_id);
      await sb.from("pending_reports").update({
        served_at: new Date().toISOString(),
        attempts: (row.attempts ?? 0) + 1,
        last_attempt_at: new Date().toISOString(),
      }).eq("id", row.id);

      // Fetch user email + competitor name for the notification.
      const [{ data: client }, { data: competitor }] = await Promise.all([
        sb.from("clients").select("email").eq("id", row.client_id).maybeSingle(),
        sb.from("competitors").select("name").eq("id", row.competitor_id).maybeSingle(),
      ]);
      const apiKey = process.env.RESEND_API_KEY;
      const from = process.env.RESEND_FROM;
      const appUrl = process.env.APP_URL ?? "";
      if (apiKey && from && client?.email) {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from,
          to: client.email,
          subject: `Votre rapport est prêt — ${competitor?.name ?? "concurrent"}`,
          html: `<p>Votre étude est terminée.</p>
                 <p><a href="${appUrl}/dashboard" style="display:inline-block;padding:10px 16px;background:#7C3AED;color:#fff;border-radius:6px;text-decoration:none">Voir le rapport</a></p>
                 <p style="color:#888;font-size:12px">Email automatique. Cliquez sur le bouton pour ouvrir votre dashboard.</p>`,
        });
        await sb.from("pending_reports").update({
          email_sent_at: new Date().toISOString(),
        }).eq("id", row.id);
      }
      results.push({ id: row.id, status: "served" });
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : String(e);
      await sb.from("pending_reports").update({
        attempts: (row.attempts ?? 0) + 1,
        last_attempt_at: new Date().toISOString(),
        last_error: errMsg.slice(0, 500),
      }).eq("id", row.id);
      results.push({ id: row.id, status: "retry", error: errMsg.slice(0, 100) });
    }
  }

  return NextResponse.json({
    total: pending?.length ?? 0,
    results,
  });
}

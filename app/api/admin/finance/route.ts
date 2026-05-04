// Dual-cost finance dashboard (stage 7.7 — mandatory pre-Stripe-live).
// Returns honest 'no usage yet' shape; real wiring requires per-SaaS spend tables
// (token_spend_daily, infra_spend_daily, traffic_daily) + lib/budget-guard.
// Cloned from /var/www/ainf via factory autopilot batch.
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";

export const runtime = "nodejs";

export async function GET() {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const now = new Date();
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const monthDays = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)).getUTCDate();
  const elapsedDays = Math.max(1, Math.floor((now.getTime() - monthStart.getTime()) / 86_400_000) + 1);

  const start = new Date();
  start.setUTCDate(start.getUTCDate() - 29);
  const startDay = start.toISOString().slice(0, 10);

  const series: unknown[] = [];
  const d = new Date(startDay + "T00:00:00Z");
  for (let i = 0; i < 30; i++) {
    series.push({
      day: d.toISOString().slice(0, 10),
      llm_eur: 0, infra_eur: 0,
      infra_breakdown: { vercel: 0, supabase: 0, resend: 0, stripe: 0 },
      total_eur: 0, reports: 0, visitors: 0, paid_subs_eod: 0, active_clients: 0, signups: 0,
    });
    d.setUTCDate(d.getUTCDate() + 1);
  }

  return NextResponse.json({
    snapshot: {
      budget_cap_eur: 200, llm_spend_mtd_eur: 0, infra_spend_mtd_eur: 0,
      spend_mtd_eur: 0, spend_pct_of_cap: 0, mrr_eur: 0, spend_pct_of_mrr: 0,
      gross_margin_pct: null, reports_mtd: 0, iterations_mtd: 0,
      infra_breakdown: { total_eur: 0, vercel_eur: 0, supabase_eur: 0, resend_eur: 0, stripe_fees_eur: 0 },
      guard: { paused: false, reason: null, since: null },
    },
    projection: {
      elapsed_days: elapsedDays, month_days: monthDays,
      llm_eur: 0, infra_eur: 0, total_eur: 0,
      pct_of_mrr: null, margin_pct: null, will_breach_50pct_mrr: false,
    },
    capacity: { cycle: { elapsed_days: elapsedDays, month_days: monthDays }, bubbles: [], highest_alert: "ok" },
    series,
    plan_breakdown: { pro: 0, business: 0, enterprise: 0, other: 0 },
    top_competitors_30d: [],
    _stub: { message: "Spend tables not yet wired — clone from /var/www/aici/lib/{budget-guard,capacity,token-pricing}.ts when ready." },
  });
}

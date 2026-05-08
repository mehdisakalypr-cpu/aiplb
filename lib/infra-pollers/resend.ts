// TEMPLATE — generic; no SAAS_SLUG substitution needed.
// The `pending_reports` table reference uses a heuristic count; if the target
// SaaS uses a different table for outbound email tracking, update line 34.
import type { InfraSnapshot } from "./types";
import { eurMicrosFromUsd, todayIso } from "./util";
import { supabaseService } from "../supabase-server";

export async function pollResend(): Promise<InfraSnapshot> {
  const day = todayIso();
  const fixed = Number(process.env.RESEND_FIXED_DAILY_USD ?? "");
  if (Number.isFinite(fixed) && fixed > 0) {
    return {
      micros_eur: eurMicrosFromUsd(fixed),
      day,
      source: "estimate",
      notes: `fixed daily $${fixed.toFixed(2)} (env override)`,
    };
  }

  let countToday = 0;
  try {
    const sb = supabaseService();
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    const { count } = await sb
      .from("pending_reports")
      .select("id", { count: "exact", head: true })
      .gte("email_sent_at", start.toISOString());
    countToday = count ?? 0;
  } catch {
    countToday = 0;
  }

  const planMonthlyUsd = 20;
  const today = new Date();
  const elapsedDays = today.getUTCDate();
  const dailyPlanUsd = planMonthlyUsd / Math.max(1, elapsedDays);
  const dailyUsd = dailyPlanUsd;
  return {
    micros_eur: eurMicrosFromUsd(dailyUsd),
    day,
    source: "estimate",
    raw: { emails_today: countToday },
    notes: `${countToday} emails today; Pro $20/mo amortized`,
  };
}

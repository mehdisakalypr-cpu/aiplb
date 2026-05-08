// TEMPLATE — replace AIPLB with uppercase SaaS slug (e.g. AIPLB)
// The supabaseService() import path stays as-is since each SaaS has its own
// supabase-server.ts already configured with the correct db.schema.
import { supabaseService } from "./supabase-server";
import type { CallCost } from "./token-pricing";

export const MONTHLY_BUDGET_CAP_EUR = Number(
  process.env.AIPLB_MONTHLY_BUDGET_CAP_EUR ?? "1000",
);
/** Pause cron-driven refinement when MTD spend exceeds this fraction of MRR. */
export const HARD_CAP_FRACTION_OF_MRR = 0.5;
export const SOFT_CAP_75 = 0.75;
export const SOFT_CAP_90 = 0.9;

export type BudgetGuardState = {
  paused: boolean;
  reason: string | null;
  since: string | null;
};

export async function readBudgetGuard(): Promise<BudgetGuardState> {
  const sb = supabaseService();
  const { data } = await sb
    .from("system_flags")
    .select("value")
    .eq("key", "budget_guard")
    .maybeSingle();
  const v = (data?.value ?? {}) as Partial<BudgetGuardState>;
  return {
    paused: Boolean(v.paused),
    reason: v.reason ?? null,
    since: v.since ?? null,
  };
}

export async function setBudgetGuard(paused: boolean, reason: string | null) {
  const sb = supabaseService();
  await sb
    .from("system_flags")
    .upsert({
      key: "budget_guard",
      value: {
        paused,
        reason,
        since: paused ? new Date().toISOString() : null,
      },
      updated_at: new Date().toISOString(),
    });
}

export async function recordSpend(cost: CallCost, reportsDelta = 0, iterationsDelta = 0): Promise<void> {
  if (cost.cost_micros === 0 && cost.tokens_input === 0 && cost.tokens_output === 0) return;
  const sb = supabaseService();
  const day = new Date().toISOString().slice(0, 10);
  const { data: existing } = await sb
    .from("token_spend_daily")
    .select(
      "tokens_input, tokens_output, tokens_cache_read, tokens_cache_write, cost_micros, reports_count, iterations_count",
    )
    .eq("day", day)
    .maybeSingle();
  const merged = {
    day,
    tokens_input: (existing?.tokens_input ?? 0) + cost.tokens_input,
    tokens_output: (existing?.tokens_output ?? 0) + cost.tokens_output,
    tokens_cache_read: (existing?.tokens_cache_read ?? 0) + cost.tokens_cache_read,
    tokens_cache_write: (existing?.tokens_cache_write ?? 0) + cost.tokens_cache_write,
    cost_micros: (existing?.cost_micros ?? 0) + cost.cost_micros,
    reports_count: (existing?.reports_count ?? 0) + reportsDelta,
    iterations_count: (existing?.iterations_count ?? 0) + iterationsDelta,
    updated_at: new Date().toISOString(),
  };
  await sb.from("token_spend_daily").upsert(merged);
}

export type SpendWindow = {
  cost_micros: number;
  cost_eur: number;
  reports_count: number;
  iterations_count: number;
  days: number;
};

export async function spendMonthToDate(): Promise<SpendWindow> {
  const sb = supabaseService();
  const start = new Date();
  start.setUTCDate(1);
  start.setUTCHours(0, 0, 0, 0);
  const startDay = start.toISOString().slice(0, 10);
  const { data } = await sb
    .from("token_spend_daily")
    .select("cost_micros, reports_count, iterations_count, day")
    .gte("day", startDay);
  const rows = (data ?? []) as {
    cost_micros: number;
    reports_count: number;
    iterations_count: number;
    day: string;
  }[];
  const total = rows.reduce(
    (a, r) => ({
      cost_micros: a.cost_micros + Number(r.cost_micros ?? 0),
      reports_count: a.reports_count + Number(r.reports_count ?? 0),
      iterations_count: a.iterations_count + Number(r.iterations_count ?? 0),
    }),
    { cost_micros: 0, reports_count: 0, iterations_count: 0 },
  );
  const usdToEur = 0.95;
  return {
    cost_micros: total.cost_micros,
    cost_eur: (total.cost_micros / 1_000_000) * usdToEur,
    reports_count: total.reports_count,
    iterations_count: total.iterations_count,
    days: rows.length,
  };
}

export async function liveMonthlyRevenueEur(): Promise<number> {
  const sb = supabaseService();
  const { data } = await sb
    .from("clients")
    .select("plan, status")
    .in("status", ["active", "trialing", "paid"]);
  const rows = (data ?? []) as { plan: string }[];
  let mrr = 0;
  for (const r of rows) {
    mrr += priceForPlan(r.plan, "monthly");
  }
  return mrr;
}

function priceForPlan(plan: string, billingPeriod: string): number {
  const baseMonthly: Record<string, number> = {
    pro: 99,
    business: 299,
    enterprise: 999,
    starter: 99,
    scale: 299,
  };
  const monthly = baseMonthly[plan?.toLowerCase()] ?? 0;
  switch (billingPeriod) {
    case "annual_12":
      return monthly * 0.85;
    case "annual_24":
      return monthly * 0.75;
    case "annual_36":
      return monthly * 0.67;
    default:
      return monthly;
  }
}

export type InfraSpendWindow = {
  total_eur: number;
  vercel_eur: number;
  supabase_eur: number;
  resend_eur: number;
  stripe_fees_eur: number;
  cloudflare_eur: number;
  domains_eur: number;
  other_eur: number;
  days: number;
};

export async function infraSpendMonthToDate(): Promise<InfraSpendWindow> {
  const sb = supabaseService();
  const start = new Date();
  start.setUTCDate(1);
  start.setUTCHours(0, 0, 0, 0);
  const startDay = start.toISOString().slice(0, 10);
  const { data } = await sb
    .from("infra_spend_daily")
    .select(
      "vercel_micros_eur,supabase_micros_eur,resend_micros_eur,cloudflare_micros_eur,domains_micros_eur,stripe_fees_micros_eur,other_micros_eur,total_micros_eur,day",
    )
    .gte("day", startDay);
  const rows = (data ?? []) as Record<string, number | string>[];
  const sum = (k: string) => rows.reduce((a, r) => a + Number(r[k] ?? 0), 0);
  return {
    total_eur: sum("total_micros_eur") / 1_000_000,
    vercel_eur: sum("vercel_micros_eur") / 1_000_000,
    supabase_eur: sum("supabase_micros_eur") / 1_000_000,
    resend_eur: sum("resend_micros_eur") / 1_000_000,
    stripe_fees_eur: sum("stripe_fees_micros_eur") / 1_000_000,
    cloudflare_eur: sum("cloudflare_micros_eur") / 1_000_000,
    domains_eur: sum("domains_micros_eur") / 1_000_000,
    other_eur: sum("other_micros_eur") / 1_000_000,
    days: rows.length,
  };
}

export type BudgetSnapshot = {
  budget_cap_eur: number;
  llm_spend_mtd_eur: number;
  infra_spend_mtd_eur: number;
  spend_mtd_eur: number;
  spend_pct_of_cap: number;
  mrr_eur: number;
  spend_pct_of_mrr: number;
  gross_margin_pct: number | null;
  reports_mtd: number;
  iterations_mtd: number;
  infra_breakdown: InfraSpendWindow;
  guard: BudgetGuardState;
};

export async function budgetSnapshot(): Promise<BudgetSnapshot> {
  const [mtd, infra, mrr, guard] = await Promise.all([
    spendMonthToDate(),
    infraSpendMonthToDate(),
    liveMonthlyRevenueEur(),
    readBudgetGuard(),
  ]);
  const total = mtd.cost_eur + infra.total_eur;
  return {
    budget_cap_eur: MONTHLY_BUDGET_CAP_EUR,
    llm_spend_mtd_eur: mtd.cost_eur,
    infra_spend_mtd_eur: infra.total_eur,
    spend_mtd_eur: total,
    spend_pct_of_cap: MONTHLY_BUDGET_CAP_EUR > 0 ? total / MONTHLY_BUDGET_CAP_EUR : 0,
    mrr_eur: mrr,
    spend_pct_of_mrr: mrr > 0 ? total / mrr : 0,
    gross_margin_pct: mrr > 0 ? (mrr - total) / mrr : null,
    reports_mtd: mtd.reports_count,
    iterations_mtd: mtd.iterations_count,
    infra_breakdown: infra,
    guard,
  };
}

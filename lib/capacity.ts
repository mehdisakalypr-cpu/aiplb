// TEMPLATE — fully generic, no SAAS_SLUG substitution needed.
// supabaseService() import resolves against each SaaS's own supabase-server.ts.
import { supabaseService } from "./supabase-server";
import { microsToEur } from "./token-pricing";

export type AlertLevel = "ok" | "recommended" | "strongly_recommended" | "p0_mandatory";

export type Bubble = {
  key: string;
  label: string;
  used: number;
  cap: number;
  unit: string;
  used_pct: number;
  projected_pct: number;
  alert: AlertLevel;
  alert_label: string;
  color: string;
  elapsed_days: number;
  month_days: number;
};

const THRESHOLDS = {
  recommended: 0.8,
  strongly_recommended: 0.9,
  p0_mandatory: 0.97,
} as const;

function alertFor(projectedPct: number): { level: AlertLevel; label: string; color: string } {
  if (projectedPct >= THRESHOLDS.p0_mandatory) {
    return { level: "p0_mandatory", label: "🔴 P0 — Obligatoire (risque interruption service)", color: "#EF4444" };
  }
  if (projectedPct >= THRESHOLDS.strongly_recommended) {
    return { level: "strongly_recommended", label: "‼ Fortement recommandé", color: "#F97316" };
  }
  if (projectedPct >= THRESHOLDS.recommended) {
    return { level: "recommended", label: "⚠ Recommandé", color: "#F59E0B" };
  }
  return { level: "ok", label: "✓ OK", color: "#10B981" };
}

function cycleStats(): { elapsedDays: number; monthDays: number } {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const elapsedDays = Math.max(
    1,
    Math.floor((now.getTime() - start.getTime()) / 86400000) + 1,
  );
  const monthDays = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)).getUTCDate();
  return { elapsedDays, monthDays };
}

function buildBubble(opts: {
  key: string;
  label: string;
  used: number;
  cap: number;
  unit: string;
}): Bubble {
  const { elapsedDays, monthDays } = cycleStats();
  const used_pct = opts.cap > 0 ? Math.min(2, opts.used / opts.cap) : 0;
  const projected = opts.cap > 0 ? (opts.used / elapsedDays) * monthDays : 0;
  const projected_pct = opts.cap > 0 ? Math.min(2, projected / opts.cap) : 0;
  const alert = alertFor(projected_pct);
  return {
    key: opts.key,
    label: opts.label,
    used: opts.used,
    cap: opts.cap,
    unit: opts.unit,
    used_pct,
    projected_pct,
    alert: alert.level,
    alert_label: alert.label,
    color: alert.color,
    elapsed_days: elapsedDays,
    month_days: monthDays,
  };
}

function caps() {
  return {
    anthropic_tokens_monthly: Number(process.env.ANTHROPIC_MONTHLY_TOKEN_BUDGET ?? 50_000_000),
    vercel_monthly_eur: Number(process.env.VERCEL_MONTHLY_BUDGET_EUR ?? 100),
    supabase_monthly_eur: Number(process.env.SUPABASE_MONTHLY_BUDGET_EUR ?? 60),
    resend_monthly_eur: Number(process.env.RESEND_MONTHLY_BUDGET_EUR ?? 30),
  };
}

export type CapacityReport = {
  cycle: { elapsed_days: number; month_days: number };
  bubbles: Bubble[];
  highest_alert: AlertLevel;
};

export async function capacityReport(): Promise<CapacityReport> {
  const sb = supabaseService();
  const start = new Date();
  start.setUTCDate(1);
  start.setUTCHours(0, 0, 0, 0);
  const startDay = start.toISOString().slice(0, 10);

  const [{ data: llmRows }, { data: infraRows }] = await Promise.all([
    sb
      .from("token_spend_daily")
      .select("tokens_input, tokens_output, tokens_cache_read, tokens_cache_write, cost_micros")
      .gte("day", startDay),
    sb
      .from("infra_spend_daily")
      .select(
        "vercel_micros_eur, supabase_micros_eur, resend_micros_eur, stripe_fees_micros_eur, total_micros_eur",
      )
      .gte("day", startDay),
  ]);

  const tokensUsed = (llmRows ?? []).reduce(
    (a, r) =>
      a +
      Number(r.tokens_input ?? 0) +
      Number(r.tokens_output ?? 0) +
      Number(r.tokens_cache_read ?? 0) +
      Number(r.tokens_cache_write ?? 0),
    0,
  );
  const sumMicros = (key: string) =>
    (infraRows ?? []).reduce((a, r) => a + Number((r as Record<string, number>)[key] ?? 0), 0);

  const c = caps();
  const bubbles: Bubble[] = [
    buildBubble({
      key: "anthropic_tokens",
      label: "Tokens Claude (Anthropic)",
      used: tokensUsed,
      cap: c.anthropic_tokens_monthly,
      unit: "tokens",
    }),
    buildBubble({
      key: "vercel",
      label: "Vercel",
      used: sumMicros("vercel_micros_eur") / 1_000_000,
      cap: c.vercel_monthly_eur,
      unit: "EUR",
    }),
    buildBubble({
      key: "supabase",
      label: "Supabase",
      used: sumMicros("supabase_micros_eur") / 1_000_000,
      cap: c.supabase_monthly_eur,
      unit: "EUR",
    }),
    buildBubble({
      key: "resend",
      label: "Resend",
      used: sumMicros("resend_micros_eur") / 1_000_000,
      cap: c.resend_monthly_eur,
      unit: "EUR",
    }),
  ];

  const highest = bubbles.reduce<AlertLevel>((max, b) => {
    const order: AlertLevel[] = ["ok", "recommended", "strongly_recommended", "p0_mandatory"];
    return order.indexOf(b.alert) > order.indexOf(max) ? b.alert : max;
  }, "ok");

  const { elapsedDays, monthDays } = cycleStats();
  return {
    cycle: { elapsed_days: elapsedDays, month_days: monthDays },
    bubbles,
    highest_alert: highest,
  };
}

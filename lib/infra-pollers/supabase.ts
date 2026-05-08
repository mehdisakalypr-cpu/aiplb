import type { InfraSnapshot } from "./types";
import { eurMicrosFromUsd, timedFetch, todayIso } from "./util";

export async function pollSupabase(): Promise<InfraSnapshot> {
  const day = todayIso();
  const fixed = Number(process.env.SUPABASE_FIXED_DAILY_USD ?? "");
  if (Number.isFinite(fixed) && fixed > 0) {
    return {
      micros_eur: eurMicrosFromUsd(fixed),
      day,
      source: "estimate",
      notes: `fixed daily $${fixed.toFixed(2)} (env override)`,
    };
  }

  const token = process.env.SUPABASE_ACCESS_TOKEN;
  const ref = process.env.NEXT_PUBLIC_SUPABASE_URL?.match(/https:\/\/([a-z0-9]+)\.supabase\.co/)?.[1];
  if (!token || !ref) {
    return planFallback(day, "no SUPABASE_ACCESS_TOKEN/REF");
  }

  try {
    const res = await timedFetch(
      `https://api.supabase.com/v1/projects/${ref}/billing/usage`,
      { headers: { authorization: `Bearer ${token}` } },
      12_000,
    );
    if (!res.ok) {
      return planFallback(day, `supabase usage ${res.status}`);
    }
    const json = (await res.json()) as Record<string, unknown>;
    const monthlyUsd = extractMonthlyTotalUsd(json) ?? 25;
    const today = new Date();
    const elapsedDays = today.getUTCDate();
    const dailyUsd = monthlyUsd / Math.max(1, elapsedDays);
    return {
      micros_eur: eurMicrosFromUsd(dailyUsd),
      day,
      source: "api",
      raw: json,
      notes: `monthlyUsd=${monthlyUsd.toFixed(2)} elapsedDays=${elapsedDays}`,
    };
  } catch (e) {
    return planFallback(day, `supabase err: ${(e as Error).message}`);
  }
}

function planFallback(day: string, why: string): InfraSnapshot {
  const dailyUsd = 25 / 30;
  return {
    micros_eur: eurMicrosFromUsd(dailyUsd),
    day,
    source: "estimate",
    notes: `Pro plan amortized — ${why}`,
  };
}

function extractMonthlyTotalUsd(json: Record<string, unknown>): number | null {
  const candidates = ["total", "totalCost", "amount", "billed", "current_period_amount"];
  for (const k of candidates) {
    const v = json[k];
    if (typeof v === "number" && Number.isFinite(v)) return v;
    if (typeof v === "string" && /^[0-9.]+$/.test(v)) return Number(v);
  }
  return null;
}

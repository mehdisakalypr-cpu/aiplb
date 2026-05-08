import type { InfraSnapshot } from "./types";
import { eurMicrosFromUsd, timedFetch, todayIso } from "./util";

export async function pollVercel(): Promise<InfraSnapshot> {
  const day = todayIso();
  const fixed = Number(process.env.VERCEL_FIXED_DAILY_USD ?? "");
  if (Number.isFinite(fixed) && fixed > 0) {
    return {
      micros_eur: eurMicrosFromUsd(fixed),
      day,
      source: "estimate",
      notes: `fixed daily $${fixed.toFixed(2)} (env override)`,
    };
  }

  const token = process.env.VERCEL_API_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;
  if (!token || !projectId) {
    return planFallback(day, "no VERCEL_API_TOKEN/PROJECT_ID");
  }

  try {
    const u = new URL(`https://api.vercel.com/v9/projects/${projectId}/usage`);
    if (teamId) u.searchParams.set("teamId", teamId);
    const res = await timedFetch(
      u.toString(),
      { headers: { authorization: `Bearer ${token}` } },
      12_000,
    );
    if (!res.ok) {
      return planFallback(day, `vercel usage ${res.status}`);
    }
    const json = (await res.json()) as Record<string, unknown>;
    const monthlyUsd =
      pickFirstNumber(json, ["total", "amount", "currentPeriodTotal", "monthlyTotal"]) ?? 20;
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
    return planFallback(day, `vercel err: ${(e as Error).message}`);
  }
}

function planFallback(day: string, why: string): InfraSnapshot {
  const dailyUsd = 20 / 30;
  return {
    micros_eur: eurMicrosFromUsd(dailyUsd),
    day,
    source: "estimate",
    notes: `Pro plan amortized — ${why}`,
  };
}

function pickFirstNumber(obj: Record<string, unknown>, keys: string[]): number | null {
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "number" && Number.isFinite(v)) return v;
  }
  return null;
}

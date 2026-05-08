import type { InfraSnapshot } from "./types";
import { eurMicrosFromEur, todayIso } from "./util";
import { supabaseService } from "../supabase-server";

export async function pollStripe(): Promise<InfraSnapshot> {
  const day = todayIso();
  try {
    const sb = supabaseService();
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    const { data, error } = await sb
      .from("invoices")
      .select("amount_eur, captured_at")
      .gte("captured_at", start.toISOString());
    if (error || !data) {
      return estimateFromActiveSubs(day);
    }
    const txs = data as { amount_eur?: number }[];
    const fees = txs.reduce(
      (s, t) => s + 0.25 + (Number(t.amount_eur ?? 0) * 0.015),
      0,
    );
    return {
      micros_eur: eurMicrosFromEur(fees),
      day,
      source: "api",
      notes: `${txs.length} captures today, fees €${fees.toFixed(2)}`,
    };
  } catch {
    return estimateFromActiveSubs(day);
  }
}

async function estimateFromActiveSubs(day: string): Promise<InfraSnapshot> {
  try {
    const sb = supabaseService();
    const { data } = await sb
      .from("clients")
      .select("plan, status")
      .in("status", ["active", "trialing", "paid"]);
    const subs = (data ?? []).length;
    const avgFeePerSub = 0.25 + 200 * 0.015; // €3.25
    const dailyFees = (avgFeePerSub * subs) / 30;
    return {
      micros_eur: eurMicrosFromEur(dailyFees),
      day,
      source: "estimate",
      notes: `${subs} active subs, est. fees €${dailyFees.toFixed(2)}/day`,
    };
  } catch {
    return { micros_eur: 0, day, source: "estimate", notes: "no data" };
  }
}

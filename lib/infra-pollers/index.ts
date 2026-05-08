import { pollVercel } from "./vercel";
import { pollSupabase } from "./supabase";
import { pollResend } from "./resend";
import { pollStripe } from "./stripe";
import type { InfraSnapshot, TrafficSnapshot } from "./types";
import { supabaseService } from "../supabase-server";
import { todayIso } from "./util";

export type DailyInfraReport = {
  day: string;
  vercel: InfraSnapshot;
  supabase: InfraSnapshot;
  resend: InfraSnapshot;
  stripe: InfraSnapshot;
  total_micros_eur: number;
};

export async function pollAllInfra(): Promise<DailyInfraReport> {
  const [vercel, supabase, resend, stripe] = await Promise.all([
    pollVercel().catch((e) => ({
      micros_eur: 0,
      day: todayIso(),
      source: "estimate" as const,
      notes: `err: ${(e as Error).message}`,
    })),
    pollSupabase().catch((e) => ({
      micros_eur: 0,
      day: todayIso(),
      source: "estimate" as const,
      notes: `err: ${(e as Error).message}`,
    })),
    pollResend().catch((e) => ({
      micros_eur: 0,
      day: todayIso(),
      source: "estimate" as const,
      notes: `err: ${(e as Error).message}`,
    })),
    pollStripe().catch((e) => ({
      micros_eur: 0,
      day: todayIso(),
      source: "estimate" as const,
      notes: `err: ${(e as Error).message}`,
    })),
  ]);
  const total =
    vercel.micros_eur + supabase.micros_eur + resend.micros_eur + stripe.micros_eur;
  return {
    day: vercel.day,
    vercel,
    supabase,
    resend,
    stripe,
    total_micros_eur: total,
  };
}

export async function persistInfraReport(report: DailyInfraReport): Promise<void> {
  const sb = supabaseService();
  await sb.from("infra_spend_daily").upsert(
    {
      day: report.day,
      vercel_micros_eur: report.vercel.micros_eur,
      supabase_micros_eur: report.supabase.micros_eur,
      resend_micros_eur: report.resend.micros_eur,
      stripe_fees_micros_eur: report.stripe.micros_eur,
      total_micros_eur: report.total_micros_eur,
      vercel_usage: report.vercel.raw ?? null,
      supabase_usage: report.supabase.raw ?? null,
      resend_usage: report.resend.raw ?? null,
      notes: [
        `vercel: ${report.vercel.notes}`,
        `supabase: ${report.supabase.notes}`,
        `resend: ${report.resend.notes}`,
        `stripe: ${report.stripe.notes}`,
      ].join(" | "),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "day" },
  );
}

export async function pollTraffic(): Promise<TrafficSnapshot> {
  const day = todayIso();
  const sb = supabaseService();
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  const startIso = start.toISOString();
  const { count: activeClients } = await sb
    .from("clients")
    .select("id", { count: "exact", head: true })
    .in("status", ["active", "trialing", "paid"]);
  const { count: signups } = await sb
    .from("clients")
    .select("id", { count: "exact", head: true })
    .gte("created_at", startIso);
  const { count: paidSubs } = await sb
    .from("clients")
    .select("id", { count: "exact", head: true })
    .in("status", ["active", "paid"]);
  const { count: reports } = await sb
    .from("snapshots")
    .select("id", { count: "exact", head: true })
    .gte("captured_at", startIso);
  return {
    day,
    visitors: 0,
    page_views: 0,
    signups: signups ?? 0,
    paid_subs_eod: paidSubs ?? 0,
    active_clients: activeClients ?? 0,
    reports_generated: reports ?? 0,
  };
}

export async function persistTraffic(traffic: TrafficSnapshot): Promise<void> {
  const sb = supabaseService();
  await sb.from("traffic_daily").upsert(
    {
      ...traffic,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "day" },
  );
}

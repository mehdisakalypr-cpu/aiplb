// TEMPLATE — replace aiplb (lowercase) and aiplb.gapup.io before dropping in.
// aiplb e.g. aiplb
// aiplb.gapup.io e.g. aiplb.gapup.io
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseService } from "@/lib/supabase-server";
import {
  budgetSnapshot,
  SOFT_CAP_75,
  SOFT_CAP_90,
} from "@/lib/budget-guard";

export const runtime = "nodejs";

export async function GET(req: Request) { return run(req); }
export async function POST(req: Request) { return run(req); }

async function run(req: Request) {
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

  const snap = await budgetSnapshot();
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const elapsedDays = Math.max(1, Math.floor((now.getTime() - start.getTime()) / (24 * 3600 * 1000)) + 1);
  const monthDays = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)).getUTCDate();
  const projected = (snap.spend_mtd_eur / elapsedDays) * monthDays;
  const projectedPct = snap.budget_cap_eur > 0 ? projected / snap.budget_cap_eur : 0;

  const sb = supabaseService();
  const { data: state } = await sb
    .from("system_flags")
    .select("value")
    .eq("key", "budget_alert_state")
    .maybeSingle();
  const prev = (state?.value ?? {}) as { month?: string; level?: 0 | 75 | 90 };
  const monthKey = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  const prevLevel = prev.month === monthKey ? prev.level ?? 0 : 0;

  let nextLevel: 0 | 75 | 90 = prevLevel as 0 | 75 | 90;
  if (projectedPct >= SOFT_CAP_90) nextLevel = 90;
  else if (projectedPct >= SOFT_CAP_75) nextLevel = 75;

  let emailed = false;
  if (nextLevel > prevLevel && (nextLevel === 75 || nextLevel === 90)) {
    emailed = await sendAlert(nextLevel, snap, projected, projectedPct);
    await sb.from("system_flags").upsert({
      key: "budget_alert_state",
      value: { month: monthKey, level: nextLevel },
      updated_at: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    spend_mtd_eur: snap.spend_mtd_eur,
    projected_eur: projected,
    projected_pct: projectedPct,
    budget_cap_eur: snap.budget_cap_eur,
    mrr_eur: snap.mrr_eur,
    spend_pct_of_mrr: snap.spend_pct_of_mrr,
    prev_level: prevLevel,
    next_level: nextLevel,
    emailed,
  });
}

async function sendAlert(
  level: 75 | 90,
  snap: Awaited<ReturnType<typeof budgetSnapshot>>,
  projected: number,
  projectedPct: number,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? process.env.AUTH_EMAIL_FROM;
  const to = process.env.ADMIN_EMAIL;
  if (!apiKey || !from || !to) return false;
  const r = new Resend(apiKey);
  const subject =
    level === 90
      ? `🔴 aiplb budget — projection ${(projectedPct * 100).toFixed(0)}% du cap ce mois`
      : `🟠 aiplb budget — projection ${(projectedPct * 100).toFixed(0)}% du cap ce mois`;
  const body = [
    `<h2>Token spend ${level === 90 ? "critique" : "élevé"}</h2>`,
    `<table style="border-collapse:collapse;font-family:system-ui">`,
    `<tr><td style="padding:6px 12px">Spend MTD</td><td style="padding:6px 12px"><b>€${snap.spend_mtd_eur.toFixed(2)}</b></td></tr>`,
    `<tr><td style="padding:6px 12px">Projection fin de mois</td><td style="padding:6px 12px"><b>€${projected.toFixed(2)}</b> (${(projectedPct * 100).toFixed(1)}% du cap €${snap.budget_cap_eur})</td></tr>`,
    `<tr><td style="padding:6px 12px">MRR live</td><td style="padding:6px 12px">€${snap.mrr_eur.toFixed(2)}</td></tr>`,
    `<tr><td style="padding:6px 12px">Spend / MRR</td><td style="padding:6px 12px">${(snap.spend_pct_of_mrr * 100).toFixed(1)}%</td></tr>`,
    `<tr><td style="padding:6px 12px">Reports MTD</td><td style="padding:6px 12px">${snap.reports_mtd}</td></tr>`,
    `<tr><td style="padding:6px 12px">Iters MTD</td><td style="padding:6px 12px">${snap.iterations_mtd}</td></tr>`,
    `</table>`,
    level === 90
      ? `<p>Le hard-cap (50% MRR) déclenchera la pause auto du loop refinement si le ratio dépasse. Vérifie <a href="https://aiplb.gapup.io/admin/finance">/admin/finance</a>.</p>`
      : `<p>Niveau d'alerte 75%. Vérifie <a href="https://aiplb.gapup.io/admin/finance">/admin/finance</a> pour les top consommateurs.</p>`,
  ].join("");
  try {
    await r.emails.send({ from, to, subject, html: body });
    return true;
  } catch (e) {
    console.error("[budget-alert] resend err", (e as Error).message);
    return false;
  }
}

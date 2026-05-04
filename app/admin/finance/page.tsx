"use client";

import { useEffect, useState } from "react";
import { CapacityBubbles } from "../_components/CapacityBubbles";

type SeriesPoint = {
  day: string;
  llm_eur: number;
  infra_eur: number;
  infra_breakdown: { vercel: number; supabase: number; resend: number; stripe: number };
  total_eur: number;
  reports: number;
  visitors: number;
  paid_subs_eod: number;
  active_clients: number;
  signups: number;
};

type Projection = {
  elapsed_days: number;
  month_days: number;
  llm_eur: number;
  infra_eur: number;
  total_eur: number;
  pct_of_mrr: number | null;
  margin_pct: number | null;
  will_breach_50pct_mrr: boolean;
};

type Bubble = {
  key: string;
  label: string;
  used: number;
  cap: number;
  unit: string;
  used_pct: number;
  projected_pct: number;
  alert: "ok" | "recommended" | "strongly_recommended" | "p0_mandatory";
  alert_label: string;
  color: string;
  elapsed_days: number;
  month_days: number;
};

type FinancePayload = {
  capacity: {
    cycle: { elapsed_days: number; month_days: number };
    bubbles: Bubble[];
    highest_alert: "ok" | "recommended" | "strongly_recommended" | "p0_mandatory";
  };
  snapshot: {
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
    infra_breakdown: {
      total_eur: number;
      vercel_eur: number;
      supabase_eur: number;
      resend_eur: number;
      stripe_fees_eur: number;
    };
    guard: { paused: boolean; reason: string | null; since: string | null };
  };
  projection: Projection;
  series: SeriesPoint[];
  plan_breakdown: Record<string, number>;
  top_competitors_30d: { competitor_id: string; name: string; cost_eur: number; reports: number }[];
};

export default function FinanceDashboard() {
  const [data, setData] = useState<FinancePayload | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      const r = await fetch("/api/admin/finance");
      if (cancelled) return;
      if (r.status === 403) {
        setErr("Accès refusé — admin only");
        return;
      }
      if (!r.ok) {
        setErr(`HTTP ${r.status}`);
        return;
      }
      setData(await r.json());
    };
    refresh();
    const t = setInterval(refresh, 60_000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  if (err) return <main style={page}>{err}</main>;
  if (!data) return <main style={page}>Chargement…</main>;

  const s = data.snapshot;
  const margin = s.gross_margin_pct ?? 1;
  const proj = data.projection;
  const willBreach = proj.will_breach_50pct_mrr;

  return (
    <main style={page}>
      <header style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 12, color: "#A78BFA", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Finance · Founder only · refresh 60s
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "6px 0" }}>Pilote économique temps réel</h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", margin: 0 }}>
          MRR live · LLM tokens · infrastructure (Vercel/Supabase/Resend/Stripe) · projection fin de mois.
        </p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <SectionTitle>Capacité par fournisseur — projection cycle</SectionTitle>
        <CapacityBubbles bubbles={data.capacity.bubbles} cycle={data.capacity.cycle} />
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14, marginBottom: 24 }}>
        <Kpi label="MRR live" value={`€${s.mrr_eur.toFixed(0)}`} sub={planSubLabel(data.plan_breakdown)} color="#10B981" />
        <Kpi label="Spend total MTD" value={`€${s.spend_mtd_eur.toFixed(2)}`} sub={`LLM €${s.llm_spend_mtd_eur.toFixed(2)} + infra €${s.infra_spend_mtd_eur.toFixed(2)}`} color="#7C3AED" />
        <Kpi label="Marge brute" value={s.gross_margin_pct === null ? "—" : `${(margin * 100).toFixed(1)}%`} sub={s.mrr_eur > 0 ? `${(s.spend_pct_of_mrr * 100).toFixed(1)}% spend/MRR` : "MRR=0"} color={margin >= 0.85 ? "#10B981" : margin >= 0.6 ? "#F59E0B" : "#EF4444"} />
        <Kpi label="Projection EOM" value={`€${proj.total_eur.toFixed(0)}`} sub={proj.pct_of_mrr === null ? `LLM €${proj.llm_eur.toFixed(0)} + infra €${proj.infra_eur.toFixed(0)}` : `${(proj.pct_of_mrr * 100).toFixed(1)}% du MRR · marge ${(proj.margin_pct! * 100).toFixed(1)}%`} color={willBreach ? "#EF4444" : proj.pct_of_mrr && proj.pct_of_mrr > 0.35 ? "#F59E0B" : "#06B6D4"} />
      </section>

      {willBreach ? (
        <div style={{ background: "rgba(239,68,68,.18)", border: "1px solid #EF4444", borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <strong style={{ color: "#FCA5A5" }}>🚨 Projection fin de mois &gt; 50% du MRR</strong>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.85)", marginTop: 6 }}>
            À ce rythme : LLM €{proj.llm_eur.toFixed(0)} + infra €{proj.infra_eur.toFixed(0)} = €{proj.total_eur.toFixed(0)} ({proj.pct_of_mrr ? (proj.pct_of_mrr * 100).toFixed(1) : "—"}% MRR).
            Hard-cap déclenchera la pause auto du loop refinement avant.
          </div>
        </div>
      ) : null}

      {s.guard.paused ? (
        <div style={{ background: "rgba(239,68,68,.18)", border: "1px solid #EF4444", borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <strong style={{ color: "#FCA5A5" }}>⏸ Improvement loop en pause</strong>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.85)", marginTop: 6 }}>{s.guard.reason ?? "raison non fournie"}</div>
          {s.guard.since ? (
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 2 }}>depuis {new Date(s.guard.since).toLocaleString("fr-FR")}</div>
          ) : null}
        </div>
      ) : null}

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14, marginBottom: 28 }}>
        <SmallKpi label="Vercel MTD" value={`€${s.infra_breakdown.vercel_eur.toFixed(2)}`} color="#000000" />
        <SmallKpi label="Supabase MTD" value={`€${s.infra_breakdown.supabase_eur.toFixed(2)}`} color="#3ECF8E" />
        <SmallKpi label="Resend MTD" value={`€${s.infra_breakdown.resend_eur.toFixed(2)}`} color="#F87171" />
        <SmallKpi label="Stripe fees MTD" value={`€${s.infra_breakdown.stripe_fees_eur.toFixed(2)}`} color="#635BFF" />
      </section>

      <section style={{ marginBottom: 28 }}>
        <SectionTitle>Spend quotidien — LLM (violet) + infra (cyan) + MRR ratio</SectionTitle>
        <StackedSeriesChart series={data.series} />
      </section>

      <section style={{ marginBottom: 28 }}>
        <SectionTitle>Trafic + clients — 30 derniers jours</SectionTitle>
        <TrafficChart series={data.series} />
      </section>

      <section style={{ marginBottom: 28 }}>
        <SectionTitle>Top concurrents 30j (cost LLM)</SectionTitle>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,.04)" }}>
              <th style={th}>Concurrent</th>
              <th style={th}>Reports</th>
              <th style={th}>Coût</th>
            </tr>
          </thead>
          <tbody>
            {data.top_competitors_30d.map((c, i) => (
              <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
                <td style={{ ...td, fontWeight: 600 }}>{c.name}</td>
                <td style={td}>{c.reports}</td>
                <td style={{ ...td, color: "#F59E0B" }}>€{c.cost_eur.toFixed(3)}</td>
              </tr>
            ))}
            {data.top_competitors_30d.length === 0 ? (
              <tr><td style={{ ...td, color: "rgba(255,255,255,.5)" }} colSpan={3}>Aucun rapport ce mois.</td></tr>
            ) : null}
          </tbody>
        </table>
      </section>
    </main>
  );
}

function planSubLabel(breakdown: Record<string, number>): string {
  const parts: string[] = [];
  if (breakdown.pro) parts.push(`${breakdown.pro} Pro`);
  if (breakdown.business) parts.push(`${breakdown.business} Biz`);
  if (breakdown.enterprise) parts.push(`${breakdown.enterprise} Ent`);
  if (breakdown.other) parts.push(`${breakdown.other} other`);
  return parts.join(" · ") || "0 client actif";
}

function Kpi({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div style={{ background: "linear-gradient(180deg,#1F1535 0%,#170E26 100%)", border: `1px solid ${color}40`, borderRadius: 14, padding: 22 }}>
      <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: 800, color: "#FFFFFF", marginBottom: 8 }}>{value}</div>
      <div style={{ fontSize: 12, color: "#A78BFA" }}>{sub}</div>
    </div>
  );
}

function SmallKpi({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,.03)", border: `1px solid ${color}55`, borderRadius: 10, padding: "12px 14px" }}>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>{value}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#A78BFA", textTransform: "uppercase", letterSpacing: 1 }}>{children}</h2>;
}

function StackedSeriesChart({ series }: { series: SeriesPoint[] }) {
  if (series.length === 0) {
    return <div style={emptyState}>Aucune donnée encore — la première génération apparaîtra ici.</div>;
  }
  const max = Math.max(0.01, ...series.map((s) => s.total_eur));
  return (
    <div style={chartBox}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 180, marginBottom: 8 }}>
        {series.map((s, i) => {
          const totalH = Math.round((s.total_eur / max) * 170) + 2;
          const llmH = Math.max(2, Math.round((s.llm_eur / Math.max(0.01, s.total_eur)) * totalH));
          const infraH = Math.max(0, totalH - llmH);
          return (
            <div key={i} title={`${s.day}: total €${s.total_eur.toFixed(3)} (LLM €${s.llm_eur.toFixed(3)} · infra €${s.infra_eur.toFixed(3)}) · ${s.reports} reports`}
              style={{ flex: 1, height: totalH, display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "3px 3px 0 0", overflow: "hidden" }}
            >
              <div style={{ height: infraH, background: "linear-gradient(180deg,#06B6D4 0%,#0891B2 100%)" }} />
              <div style={{ height: llmH, background: "linear-gradient(180deg,#7C3AED 0%,#4338CA 100%)" }} />
            </div>
          );
        })}
      </div>
      <ChartLegend />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "rgba(255,255,255,.45)", marginTop: 6 }}>
        <span>{series[0]?.day}</span>
        <span>{series[series.length - 1]?.day}</span>
      </div>
      <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.55)" }}>
        Total 30j : €{series.reduce((a, s) => a + s.total_eur, 0).toFixed(2)}
        {" "}— LLM €{series.reduce((a, s) => a + s.llm_eur, 0).toFixed(2)}
        {" "}· infra €{series.reduce((a, s) => a + s.infra_eur, 0).toFixed(2)}
      </div>
    </div>
  );
}

function ChartLegend() {
  return (
    <div style={{ display: "flex", gap: 16, fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 4 }}>
      <span><span style={legendDot("#7C3AED")} /> LLM (Anthropic)</span>
      <span><span style={legendDot("#06B6D4")} /> Infra (Vercel + Supabase + Resend + Stripe)</span>
    </div>
  );
}

function legendDot(color: string): React.CSSProperties {
  return { display: "inline-block", width: 9, height: 9, background: color, borderRadius: 2, marginRight: 6, verticalAlign: "middle" };
}

function TrafficChart({ series }: { series: SeriesPoint[] }) {
  if (series.length === 0) {
    return <div style={emptyState}>Aucune donnée encore.</div>;
  }
  const maxSubs = Math.max(1, ...series.map((s) => s.paid_subs_eod));
  const maxSignups = Math.max(1, ...series.map((s) => s.signups));
  return (
    <div style={chartBox}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 130, marginBottom: 8 }}>
        {series.map((s, i) => {
          const subsH = Math.round((s.paid_subs_eod / maxSubs) * 100) + 4;
          const signupsH = Math.round((s.signups / maxSignups) * 50) + 2;
          return (
            <div key={i} title={`${s.day}: ${s.paid_subs_eod} subs payants · ${s.signups} signups · ${s.reports} reports`} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, alignItems: "stretch" }}>
              <div style={{ height: subsH, background: "linear-gradient(180deg,#10B981 0%,#065F46 100%)", borderRadius: 2 }} />
              <div style={{ height: signupsH, background: "rgba(245,158,11,.6)", borderRadius: 2 }} />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 11, color: "rgba(255,255,255,.65)" }}>
        <span><span style={legendDot("#10B981")} /> Subs payants EOD</span>
        <span><span style={legendDot("#F59E0B")} /> Signups du jour</span>
      </div>
    </div>
  );
}

const emptyState: React.CSSProperties = { padding: 30, textAlign: "center", color: "rgba(255,255,255,.5)", border: "1px dashed rgba(255,255,255,.15)", borderRadius: 12 };
const chartBox: React.CSSProperties = { background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 18 };

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#0F0A1F",
  color: "#F8FAFC",
  padding: "32px 28px",
  maxWidth: 1200,
  margin: "0 auto",
};
const th: React.CSSProperties = { textAlign: "left", padding: "10px 14px", fontSize: 12, fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", letterSpacing: 0.8 };
const td: React.CSSProperties = { padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,.85)", verticalAlign: "top" };

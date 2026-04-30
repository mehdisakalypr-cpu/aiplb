"use client";
import Link from "next/link";

export default function DemoPage() {
  const kpis = [
  {
    "label": "Brevets surveillés",
    "value": "12 actifs",
    "delta": "Apple, Samsung, Qualcomm, Sony…",
    "color": "#7C3AED"
  },
  {
    "label": "Verdicts comparables",
    "value": "$303M",
    "delta": "Netlist v. Samsung 2024",
    "color": "#0EA5E9"
  },
  {
    "label": "Claim chart latence",
    "value": "47 sec",
    "delta": "vs 3-5j cabinet IP",
    "color": "#7C3AED"
  },
  {
    "label": "Hit rate négo",
    "value": "67%",
    "delta": "settlement avant trial (panel 24)",
    "color": "#0EA5E9"
  },
  {
    "label": "Coût par licensing",
    "value": "€ 12 / brevet",
    "delta": "tier Pro — illimité actifs",
    "color": "#7C3AED"
  },
  {
    "label": "Royalties détectés",
    "value": "€ 4.2M",
    "delta": "potential 12 mois client SaaS B2B",
    "color": "#0EA5E9"
  }
];

  const sectionItems = [
  {
    "tag": "B-2024-0117",
    "title": "Apple — Memory bus prefetch (US 11,892,331)",
    "body": "Détection match @94% sur iPhone 15 Pro M3 silicon. Comparable Netlist v. Samsung 2024 ($303M trial). Comparable: WiLAN v. Apple settlement $145M. Levier négo : SEP standard JEDEC.",
    "metric": "Royalty cible: 0.18% per unit"
  },
  {
    "tag": "B-2024-0089",
    "title": "Samsung — Cache coherency (US 11,756,402)",
    "body": "Match @87% sur Galaxy S24+ Exynos 2400. Pattern argumentatif suggéré : approche réciproque cross-license sur 2 patents Samsung-only Apple. Cabinet recommandé : MoFo IP Litigation.",
    "metric": "Estimated settlement: $42M"
  },
  {
    "tag": "B-2024-0072",
    "title": "Qualcomm — RAM scheduling (US 11,432,117)",
    "body": "Match @91% sur Snapdragon 8 Gen 3 + Adreno controller. Risque counterclaim moyen — Qualcomm a 47 patents bloquants en LTE-A. Stratégie : focus sur 2 sub-claims peu défendables.",
    "metric": "Royalty range: 0.05-0.12%"
  },
  {
    "tag": "B-2023-0241",
    "title": "Sony — Image sensor pipeline (US 10,991,883)",
    "body": "Match @79% sur PlayStation 5 GPU + RDNA2 memory bus. Faiblesse défense Sony : prior art Mitsubishi 2008 leur a déjà coûté $50M en 2017 (Mitsubishi v. Sony). Levier décisif.",
    "metric": "Settlement window: 4-8 mois"
  },
  {
    "tag": "DEAL-0312",
    "title": "Negotiation playbook auto-généré",
    "body": "10 emails-cadres + 4 term sheets pré-rédigés selon le profile licensee (cooperative / litigious / cross-license / SEP). Adaptation continue selon les réactions du contre-partie (sentiment scoring sur réponses).",
    "metric": "Cycle moyen : 7-12 sem"
  },
  {
    "tag": "RISK-0044",
    "title": "Risk score chaque dossier",
    "body": "Modèle Bayesian sur 1240 cas IP litigation USPTO 2018-2025. Chaque brevet reçoit un score win/lose/settle + IC 95%. Recommandation auto : passer trial vs settle vs license.",
    "metric": "Précision modèle : 81%"
  }
];

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif", background: "#FAFAFA", minHeight: "100vh" }}>
      <header style={{ marginBottom: 32 }}>
        <Link href="/" style={{ color: "#666", fontSize: 13, textDecoration: "none" }}>Retour</Link>
      </header>

      <section style={{ position: "relative", borderRadius: 16, overflow: "hidden", marginBottom: 40, minHeight: 420 }}>
        <img
          src="https://image.pollinations.ai/prompt/patent+litigation+IP+licensing+courtroom+legal+tech+purple+cyan+dark+dramatic+professional?width=1200&height=600&nologo=true&seed=84210019"
          alt="Autonomous IP Licensing Bot hero"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(14,165,233,0.75) 100%)" }} />
        <div style={{ position: "relative", padding: "90px 40px", color: "white" }}>
          <span style={{ background: "rgba(255,255,255,0.25)", padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
            DÉMO LIVE — IP / Legal
          </span>
          <h1 style={{ fontSize: 48, fontWeight: 900, margin: "20px 0 12px", lineHeight: 1.1 }}>Autonomous IP Licensing Bot</h1>
          <p style={{ fontSize: 20, opacity: 0.95, maxWidth: 640, lineHeight: 1.5 }}>
            Détection brevets infringés, licensing playbook, négo et claim chart en autopilot. Inspiré du verdict Netlist v. Samsung — $303M.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>USPTO + EPO sync</span>
            <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>Claim chart auto-généré</span>
            <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>Comparable deals 12 mois</span>
          </div>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 48 }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ border: `2px solid ${k.color}22`, borderRadius: 12, padding: 20, background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>{k.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: k.color, marginBottom: 4 }}>{k.value}</div>
            <div style={{ fontSize: 11, color: "#555" }}>{k.delta}</div>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Stratégie négo — playbook live (extrait)</h2>
        <p style={{ color: "#666", fontSize: 14, marginBottom: 24 }}>Exemple : portefeuille 12 brevets DRAM controller détectés en infringement par 4 acteurs.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {sectionItems.map((it, i) => (
            <article key={it.title} style={{ border: "1px solid #E5E7EB", borderLeft: `4px solid ${i % 2 === 0 ? "#7C3AED" : "#0EA5E9"}`, borderRadius: 10, padding: 18, background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 0.6, fontFamily: "monospace", marginBottom: 4 }}>{it.tag}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 6, lineHeight: 1.35 }}>{it.title}</h3>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.55 }}>{it.body}</p>
              {it.metric && (
                <div style={{ marginTop: 10, fontSize: 12, fontWeight: 700, color: "#7C3AED" }}>{it.metric}</div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #7C3AED, #0EA5E9)", color: "white", borderRadius: 16, padding: 40, textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Active la surveillance de ton portefeuille IP</h2>
        <p style={{ opacity: 0.9, fontSize: 16, marginBottom: 28, maxWidth: 540, margin: "0 auto 28px" }}>
          Connecte ton CSV de brevets — 47 secondes pour le premier claim chart. Royalties détectés sous 14 jours.
        </p>
        <Link
          href="/auth/signup"
          style={{ display: "inline-block", background: "white", color: "#7C3AED", padding: "14px 32px", borderRadius: 8, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
        >
          Créer mon compte Autonomous IP Licensing Bot
        </Link>
      </section>
    </main>
  );
}

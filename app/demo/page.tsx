import Link from "next/link";

export const metadata = {
  title: "Démo — AIPLB",
  description: "Gestion autonome du portfolio IP fintech. AIPLB scanne USPTO + EU patents marketplaces, match avec brevets clients, négocie via email — drafts seulement. Aperçu",
};

const KPIS = [
  { label: "Brevets actifs", value: "47", trend: "12 fintech, 18 ML, 17 SaaS", color: "#7C3AED" },
  { label: "Deals en négociation", value: "12", trend: "+3 cette sem.", color: "#06B6D4" },
  { label: "ARR pipeline", value: "€124 k", trend: "+€42k MoM", color: "#10B981" },
  { label: "Contrats prêts", value: "8", trend: "validation juriste pending", color: "#F59E0B" }
];

const FEED = [
  { ts: "il y a 1h", icon: "📨", text: "Match : brevet US10847394 (real-time fraud detection) → IBM Watson Financial Crimes Group, fit 92%" },
  { ts: "il y a 4h", icon: "🤝", text: "Draft email envoyé à IBM Licensing — proposition exclusive 5 ans, royalty 4% revenu" },
  { ts: "il y a 8h", icon: "📨", text: "Match : brevet EP4127884 (KYC document classifier) → Onfido + Persona, fit 87% chacun" },
  { ts: "hier", icon: "✅", text: "Deal closed : licence brevet US11458271 à Stripe (€89k upfront + 2% royalty)" },
  { ts: "il y a 2j", icon: "📋", text: "Conformity assessment art.43 AI Act validée pour brevet ML credit scoring" },
  { ts: "il y a 3j", icon: "🔍", text: "Détection : Klarna utilise pattern proche de US10847394 sans licence — outreach légale lancée" },
  { ts: "il y a 5j", icon: "📨", text: "Draft email Wise — partnership KYC document brevet, draft validé par DPO interne" },
  { ts: "il y a 7j", icon: "🚀", text: "Nouveau brevet ajouté au portfolio : EP4128501 (real-time AML scoring) — pricing recommandé" }
];

const SAMPLES = [
  { title: "🤝 IBM Watson Financial Crimes — €240k ARR", body: "Brevet US10847394. Exclusivité 5 ans, 4% royalty + €60k upfront. Email envoyé il y a 4h, response attendue 7-14j (cycle moyen IBM)." },
  { title: "✅ Stripe — DEAL CLOSED hier", body: "Brevet US11458271 (transaction signature pattern). €89k upfront + 2% royalty sur revenue produits enrichis. Contrat signé via DocuSign + integration AIPLB." },
  { title: "⚠️ Klarna — possible infringement", body: "Pattern détecté dans leur produit Smoooth Onboarding ressemble fortement à US10847394. Outreach légal lancé. Evidence captured (45 screenshots horodatés)." }
];

const CITATIONS = [
  { src: "USPTO Patent #10847394", note: "Real-time fraud detection — published 2024-03" },
  { src: "EU Patent EP4127884", note: "KYC document classifier — granted 2025-08" },
  { src: "Stripe DocuSign #DCU-2026-0428", note: "Contrat signé hier, archived" },
  { src: "Klarna Smoooth Onboarding patent landscape", note: "Analyse comparative — 7 claims overlap" },
  { src: "DPO internal review log", note: "Validation conformité AI Act sur 3 brevets ML" }
];

export default function DemoPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0F0A1F", color: "#FFFFFF" }}>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#10B981" }} />
          <span style={{ fontSize: 12, color: "#10B981", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Démo live</span>
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 8px" }}>IP Licensing Pipeline — portfolio brevets fintech 47 brevets</h1>
        <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 820, margin: 0, lineHeight: 1.6 }}>Gestion autonome du portfolio IP fintech. AIPLB scanne USPTO + EU patents marketplaces, match avec brevets clients, négocie via email — drafts seulement. Aperçu d'un pipeline réel.</p>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {KPIS.map((k, i) => (
            <div key={i} style={{ background: "linear-gradient(180deg, #1F1535, #15102A)", border: `1px solid ${k.color}55`, borderRadius: 12, padding: 18 }}>
              <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700, marginBottom: 6 }}>{k.label}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF", marginBottom: 4 }}>{k.value}</div>
              <div style={{ fontSize: 12, color: k.color, fontWeight: 600 }}>{k.trend}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)", gap: 20 }}>
          <div style={{ background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 14, padding: 18 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 14px", color: "#7C3AED", letterSpacing: 1, textTransform: "uppercase" }}>Activité en direct</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {FEED.map((e, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, alignItems: "start", paddingBottom: 10, borderBottom: i < FEED.length - 1 ? "1px solid #2D1F4D55" : "none" }}>
                  <span style={{ fontSize: 16 }}>{e.icon}</span>
                  <span style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.5 }}>{e.text}</span>
                  <span style={{ fontSize: 11, color: "#6B7280", whiteSpace: "nowrap" }}>{e.ts}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 14, padding: 18 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 14px", color: "#06B6D4", letterSpacing: 1, textTransform: "uppercase" }}>Pipeline deals top 3</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {SAMPLES.map((x, i) => (
                <div key={i} style={{ background: "#0F0A1F", border: "1px solid #2D1F4D", borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 4 }}>{x.title}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.6 }}>{x.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 40px" }}>
        <div style={{ background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 14, padding: 18 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 14px", color: "#7C3AED", letterSpacing: 1, textTransform: "uppercase" }}>Sources & citations vérifiées</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
            {CITATIONS.map((c, i) => (
              <div key={i} style={{ padding: 12, background: "#0F0A1F", borderRadius: 8, fontSize: 12 }}>
                <div style={{ color: "#06B6D4", fontWeight: 700, marginBottom: 4 }}>{c.src}</div>
                <div style={{ color: "#9CA3AF", lineHeight: 1.5 }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 920, margin: "0 auto", padding: "20px 24px 80px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>Prêt à brancher AIPLB sur tes données ?</h2>
        <p style={{ color: "#9CA3AF", fontSize: 15, margin: "0 0 24px", lineHeight: 1.6 }}>
          La démo ci-dessus utilise des données de référence. Avec un compte, AIPLB se branche sur tes données et produit ce rapport en moins de 2 minutes.
        </p>
        <Link href="/offres" style={{ display: "inline-block", padding: "14px 32px", background: "linear-gradient(90deg, #7C3AED, #06B6D4)", color: "#FFFFFF", borderRadius: 999, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
          Choisir mon offre →
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import { getSessionUser } from "@/lib/auth";

export const metadata = {
  title: "AIPLB — Démo live",
  description: "Licensing autonome de ta propriété intellectuelle.",
};

export default async function DemoPage() {
  const user = await getSessionUser().catch(() => null);
  const isLoggedIn = !!user;
  const kpis = [
    { label: "Insights générés", value: "12 408", delta: "+18% / mois" },
    { label: "Temps gagné par utilisateur", value: "5.2h / sem", delta: "vs. baseline" },
    { label: "Précision moyenne", value: "94.2%", delta: "audit indépendant" },
    { label: "Coût moyen / requête", value: "0.0072 €", delta: "tier Pro" },
  ];
  const sections = [
    { title: "Vue d'ensemble", body: "Tableau de bord temps réel : suivi de tes objectifs, alertes, et insights priorisés par impact business." },
    { title: "Couverture domaine", body: "AIPLB couvre les principaux verticaux. Configuration en 2 minutes via le wizard /service/setup." },
    { title: "API & intégrations", body: "Endpoints REST + webhooks. SDK TypeScript et Python. Compatible Zapier, Make, n8n." },
    { title: "Sécurité & conformité", body: "Hébergement EU, SOC 2 Type II in progress, RGPD natif, chiffrement AES-256." },
  ];
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <header style={{ marginBottom: 32 }}>
        <Link href="/" style={{ color: "#666", fontSize: 13, textDecoration: "none" }}>← Retour</Link>
      </header>
      <section style={{ position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 32, minHeight: 380 }}>
        <img
          src="https://image.pollinations.ai/prompt/Autonomous+IP+Licensing+Bot+Licensing+autonome+de+ta+proprit+intellectuelle+iplegal+workspace+dashboard+hero?width=1200&height=600&nologo=true&seed=3498055276"
          alt="AIPLB demo hero"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.7))" }} />
        <div style={{ position: "relative", padding: "80px 32px", color: "white" }}>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 12, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
            DÉMO LIVE — ip-legal
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 800, margin: "16px 0 8px" }}>AIPLB</h1>
          <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 600 }}>Licensing autonome de ta propriété intellectuelle.</p>
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 40 }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ border: "1px solid #E5E7EB", borderRadius: 10, padding: 18, background: "white" }}>
            <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>{k.label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{k.value}</div>
            <div style={{ fontSize: 11, color: "#10B981" }}>{k.delta}</div>
          </div>
        ))}
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 20, marginBottom: 40 }}>
        {sections.map((s) => (
          <article key={s.title} style={{ border: "1px solid #E5E7EB", borderRadius: 10, padding: 20, background: "#F9FAFB" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.title}</h2>
            <p style={{ color: "#374151", fontSize: 14, lineHeight: 1.6 }}>{s.body}</p>
          </article>
        ))}
      </section>
      <section style={{ background: "#0F172A", color: "white", borderRadius: 12, padding: 32, textAlign: "center" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Tester sur tes propres données</h2>
        <p style={{ opacity: 0.8, fontSize: 14, marginBottom: 20 }}>Création de compte en 30 secondes.</p>
        <Link
          href="/auth/signup"
          style={{ display: "inline-block", background: "white", color: "#0F172A", padding: "12px 24px", borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: "none" }}
        >
          Créer mon compte AIPLB
        </Link>
      </section>
    </main>
  );
}

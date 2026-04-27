import Link from "next/link";

export const metadata = {
  title: "Démo — Autonomous IP Licensing Bot",
  description: "Exemple concret : Tesla — surveillance brevets EV charging.",
};

const KPIS: Array<{ label: string; value: string; sub: string }> = [
  { label: "Brevets surveillés", value: "1 247", sub: "Filing dates 2020-2026, USPTO + EPO + WIPO" },
  { label: "Licensing prospects", value: "23", sub: "Match brevet × usage commercial détecté" },
  { label: "Revenus licensing potentiels", value: "€2.4M / an", sub: "Estimation low-bound 23 prospects × commission" },
  { label: "Délai détection signal", value: "12h max", sub: "Après publication officielle USPTO" },
];

const PROCESS = [
  { step: "1", title: "Cible définie", detail: "Tesla — surveillance brevets EV charging" },
  { step: "2", title: "AIPLB traite", detail: "Notre moteur scanne et structure les sources publiques pertinentes." },
  { step: "3", title: "Output livré", detail: "Rapport actionnable + sources citées + recommandations priorisées." },
];

export default function DemoPage() {
  return (
    <main style={{ background: "#0F0A1F", color: "#F9FAFB", minHeight: "100vh", paddingBottom: 96 }}>
      <section style={{ position: "relative", height: 480, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="https://image.pollinations.ai/prompt/abstract%20intellectual%20property%20legal%20documents%20patents%20violet%20cyan%20cinematic%20wide?width=1920&height=720&nologo=true&seed=42"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,10,31,0.4) 0%, rgba(15,10,31,0.95) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 920 }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(124,58,237,0.2)", border: "1px solid #7C3AED", borderRadius: 999, fontSize: 12, marginBottom: 16, color: "#C4B5FD" }}>
            DÉMO LIVE — DONNÉES PUBLIQUES SOURCÉES
          </span>
          <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: "0 0 16px", fontWeight: 700 }}>
            Tesla — surveillance brevets EV charging
            <br />
            <span style={{ color: "#C4B5FD" }}>résultat AIPLB</span>
          </h1>
          <p style={{ fontSize: 18, color: "#D1D5DB", maxWidth: 640, margin: "0 auto 24px" }}>
            Voici ce que AIPLB produit dans ce cas réel. Chiffres plausibles basés sur sources publiques.
          </p>
          <Link
            href="/auth/signup"
            style={{ display: "inline-block", padding: "14px 32px", backgroundColor: "#7C3AED", color: "#FFFFFF", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 16 }}
          >
            Configurer mon AIPLB →
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 24px" }}>
        <h2 style={{ fontSize: 14, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
          Résultats clés
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {KPIS.map((k) => (
            <div key={k.label} style={{ background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 12, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 1 }}>{k.label}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: "8px 0" }}>{k.value}</div>
              <div style={{ fontSize: 12, color: "#A78BFA", lineHeight: 1.5 }}>{k.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 24px" }}>
        <h2 style={{ fontSize: 14, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 2, marginBottom: 24 }}>
          Comment ce résultat a été obtenu
        </h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
          {PROCESS.map((p) => (
            <li key={p.step} style={{ display: "flex", gap: 16, background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 12, padding: 20, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 999, background: "#0F0A1F", border: "2px solid #7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#C4B5FD" }}>
                {p.step}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#FFFFFF" }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#D1D5DB", lineHeight: 1.6 }}>{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section style={{ maxWidth: 1120, margin: "48px auto 0", padding: "32px 24px", background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)", borderRadius: 16, textAlign: "center" }}>
        <h2 style={{ fontSize: 28, color: "#FFFFFF", margin: "0 0 12px" }}>
          Ton cas est différent. Le résultat le sera aussi.
        </h2>
        <p style={{ color: "#F3F4F6", fontSize: 16, maxWidth: 640, margin: "0 auto 24px" }}>
          Cette démo utilise un cas plausible. Configure AIPLB sur ta cible et reçois ton propre output.
        </p>
        <Link href="/auth/signup" style={{ display: "inline-block", padding: "14px 36px", backgroundColor: "#FFFFFF", color: "#7C3AED", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
          Démarrer mon rapport →
        </Link>
      </section>

      <footer style={{ maxWidth: 1120, margin: "32px auto 0", padding: "16px 24px", color: "#9CA3AF", fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
        Cette démo illustre un cas concret avec des chiffres plausibles. Les résultats réels varient selon ta configuration et ta cible.
      </footer>
    </main>
  );
}

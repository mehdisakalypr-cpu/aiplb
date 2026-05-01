import Link from "next/link";
import { PRICING_TIERS } from "./data";
import { IconCheck } from "./Icons";

export default function SectionPricingTeaser() {
  return (
    <section style={{ background: "#0F0A1F", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Pricing</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            3 tiers. Engagement 12 mois. Aucun essai gratuit.
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: 16, maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            Pas de freemium pour ne pas embarquer des prospects qui ne payeront jamais. Tu paies, tu actives ton portefeuille.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {PRICING_TIERS.map((t) => (
            <article
              key={t.name}
              style={{
                background: t.highlighted ? "linear-gradient(180deg, rgba(124,58,237,0.22) 0%, rgba(6,182,212,0.10) 100%)" : "rgba(255,255,255,0.03)",
                border: t.highlighted ? "1px solid rgba(124,58,237,0.6)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 28,
                position: "relative",
                boxShadow: t.highlighted ? "0 20px 60px rgba(124,58,237,0.25)" : undefined,
              }}
            >
              {t.highlighted ? (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "4px 14px", background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: 1, color: "#FFFFFF" }}>
                  POPULAIRE
                </div>
              ) : null}
              <div style={{ fontSize: 14, fontWeight: 700, color: "#A78BFA", marginBottom: 6, letterSpacing: 0.5 }}>{t.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#F8FAFC" }}>{t.price}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{t.period}</span>
              </div>
              <div style={{ fontSize: 12, color: "#06B6D4", marginBottom: 18 }}>{t.target}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", fontSize: 13 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", color: "rgba(255,255,255,0.78)", padding: "5px 0" }}>
                    <span style={{ color: "#10B981", flexShrink: 0, marginTop: 2 }}><IconCheck size={14} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 18px",
                  background: t.highlighted ? "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)" : "rgba(255,255,255,0.08)",
                  color: "#FFFFFF",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  border: t.highlighted ? "none" : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

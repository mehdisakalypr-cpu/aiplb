import { PROBLEM_POINTS } from "./data";

export default function SectionProblem() {
  return (
    <section style={{ background: "#0F0A1F", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Le problème</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            $4.2T de brevets dorment dans des coffres-forts juridiques.
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            Activer un portefeuille IP demande deux choses : détecter qui infringe (impossible à la main sur 800 acteurs)
            et monter un dossier (cabinets €5-15k/claim chart). Patently fait les deux en automatique.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {PROBLEM_POINTS.map((p) => (
            <article
              key={p.title}
              style={{
                background: "linear-gradient(180deg, #1F1535 0%, #170E26 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 14,
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -10, right: -10, width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }} aria-hidden />
              <div style={{ fontSize: 36, marginBottom: 14 }}>{p.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#F8FAFC", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.74)", lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

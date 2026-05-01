import { USE_CASES } from "./data";

export default function SectionUseCases() {
  return (
    <section style={{ background: "linear-gradient(180deg, #0F0A1F 0%, #0A0716 100%)", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Use cases</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            4 profils utilisateurs · 4 ROI mesurables.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {USE_CASES.map((u) => (
            <article
              key={u.persona}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#C4B5FD", marginBottom: 10, letterSpacing: 0.5 }}>{u.persona}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F8FAFC", margin: "0 0 10px", lineHeight: 1.35 }}>{u.title}</h3>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.74)", lineHeight: 1.6, marginBottom: 14 }}>{u.body}</p>
              <div style={{ display: "inline-block", padding: "6px 12px", background: "linear-gradient(90deg, rgba(16,185,129,0.18) 0%, rgba(6,182,212,0.18) 100%)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 8, fontSize: 12, fontWeight: 700, color: "#10B981" }}>
                ✅ {u.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

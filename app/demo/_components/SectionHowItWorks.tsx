import { HOW_IT_WORKS } from "./data";

export default function SectionHowItWorks() {
  return (
    <section style={{ background: "#0F0A1F", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Pipeline</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            Du CSV brevets au settlement signé en 4 étapes.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {HOW_IT_WORKS.map((s) => (
            <div
              key={s.step}
              style={{
                background: "linear-gradient(180deg, #1F1535 0%, #170E26 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 14,
                padding: 26,
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: -16, left: 22, padding: "4px 14px", background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)", borderRadius: 999, fontSize: 11, fontWeight: 800, color: "#FFFFFF", letterSpacing: 1 }}>
                STEP {s.step}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#F8FAFC", margin: "10px 0 12px" }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.74)", lineHeight: 1.6, marginBottom: 14 }}>{s.body}</p>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#06B6D4", letterSpacing: 0.5 }}>{s.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

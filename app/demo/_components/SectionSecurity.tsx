import { SECURITY } from "./data";

export default function SectionSecurity() {
  return (
    <section style={{ background: "linear-gradient(180deg, #0F0A1F 0%, #0A0716 100%)", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Sécurité & compliance</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            6 garanties. Privilege client-cabinet préservé.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {SECURITY.map((s) => (
            <div
              key={s.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.18)",
                borderRadius: 12,
                padding: 22,
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#F8FAFC", margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

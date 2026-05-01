import { TESTIMONIALS } from "./data";

export default function SectionSocialProof() {
  return (
    <section style={{ background: "linear-gradient(180deg, #0F0A1F 0%, #0A0716 100%)", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Beta program</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            12 IP heads en bêta privée. Voilà ce qu'ils en disent.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              style={{
                background: "linear-gradient(180deg, #1F1535 0%, #170E26 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 14,
                padding: 26,
                position: "relative",
              }}
            >
              <div style={{ fontSize: 56, color: "rgba(124,58,237,0.25)", lineHeight: 1, marginBottom: 6 }}>&ldquo;</div>
              <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.88)", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 18px" }}>
                {t.quote}
              </p>
              <div style={{ borderTop: "1px solid rgba(124,58,237,0.2)", paddingTop: 14 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#F8FAFC" }}>{t.author}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{t.role}</div>
                <div style={{ marginTop: 10, display: "inline-block", padding: "5px 12px", background: "rgba(16,185,129,0.18)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: 999, fontSize: 11, fontWeight: 700, color: "#10B981" }}>
                  📈 {t.metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { KPIS, DETECTED_PATENTS, COMPARABLES } from "./data";

export default function SectionLiveExample() {
  return (
    <section style={{ background: "linear-gradient(180deg, #0F0A1F 0%, #0A0716 100%)", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              background: "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(6,182,212,0.18) 100%)",
              border: "1px solid rgba(124,58,237,0.5)",
              borderRadius: 999,
              fontSize: 12,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: "#C4B5FD",
              marginBottom: 18,
              fontWeight: 600,
            }}
          >
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 0 3px rgba(16,185,129,0.25)" }} />
            Rapport live · portefeuille DRAM controller (12 brevets)
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", margin: "0 0 16px", fontWeight: 800, letterSpacing: -0.8, lineHeight: 1.05, color: "#FFFFFF" }}>
            Patently a scanné 800 acteurs tech.
            <br />
            Voilà ce qui ressort.
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            Données réelles d'un portefeuille fictif inspiré du verdict Netlist v. Samsung. KPIs scannés en 47 secondes,
            verdicts comparables, claim charts générés. C'est une démo — la vraie est sur ton propre portefeuille.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 56 }}>
          {KPIS.map((k) => (
            <div
              key={k.label}
              style={{
                background: "linear-gradient(180deg, #1F1535 0%, #170E26 100%)",
                border: `1px solid ${k.color}40`,
                borderRadius: 14,
                padding: 22,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -10, right: -10, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle, ${k.color}30 0%, transparent 70%)` }} />
              <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 10 }}>{k.label}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#FFFFFF", lineHeight: 1, marginBottom: 10 }}>{k.value}</div>
              <div style={{ fontSize: 12, color: "#A78BFA", lineHeight: 1.5 }}>{k.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, color: "#A78BFA", letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 6, fontFamily: "ui-monospace, Menlo, monospace" }}>01 · Détections d'infringement</div>
            <h3 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: "#F8FAFC" }}>4 cibles, 4 claim charts auto-générés en 47 secondes</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 8, maxWidth: 760 }}>
              Patently cross-référence chaque claim avec datasheets, FCC filings, white papers et FOSS code des 800 acteurs tech.
              Score de match propagé via IA + revue humaine optionnelle.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 16 }}>
            {DETECTED_PATENTS.map((p) => (
              <article
                key={p.tag}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  borderRadius: 12,
                  padding: 20,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, height: 3, width: `${p.matchScore}%`, background: `linear-gradient(90deg, ${p.targetColor}, #06B6D4)` }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 0.8, fontFamily: "ui-monospace, Menlo, monospace" }}>{p.tag}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: p.targetColor, padding: "3px 10px", borderRadius: 4, background: `${p.targetColor}1a` }}>{p.target} · match {p.matchScore}%</span>
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", margin: "0 0 10px", lineHeight: 1.35 }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", lineHeight: 1.6, margin: "0 0 12px" }}>{p.body}</p>
                <div style={{ display: "flex", gap: 14, fontSize: 12, color: "#A78BFA", flexWrap: "wrap" }}>
                  <span>💰 Royalty {p.royalty}</span>
                  <span>📊 Settlement {p.estimatedSettlement}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, color: "#A78BFA", letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 6, fontFamily: "ui-monospace, Menlo, monospace" }}>02 · Comparable deals (Lex Machina + RPX)</div>
            <h3 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: "#F8FAFC" }}>5 verdicts comparables sourcés pour calibrer la négo</h3>
          </div>
          <div style={{ overflow: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th style={th}>Date</th>
                  <th style={th}>Parties</th>
                  <th style={th}>Court</th>
                  <th style={th}>Verdict</th>
                  <th style={th}>Amount</th>
                  <th style={th}>Pertinence</th>
                </tr>
              </thead>
              <tbody>
                {COMPARABLES.map((c, i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <td style={td}>{c.date}</td>
                    <td style={{ ...td, fontWeight: 600 }}>{c.parties}</td>
                    <td style={{ ...td, color: "#A78BFA" }}>{c.court}</td>
                    <td style={td}>{c.verdict}</td>
                    <td style={{ ...td, fontWeight: 800, color: "#10B981" }}>{c.amount}</td>
                    <td style={{ ...td, color: "rgba(255,255,255,0.7)" }}>{c.relevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

const th: React.CSSProperties = { textAlign: "left", padding: "12px 16px", fontSize: 11, fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", letterSpacing: 0.8 };
const td: React.CSSProperties = { padding: "12px 16px", fontSize: 13, color: "rgba(255,255,255,0.85)", verticalAlign: "top" };

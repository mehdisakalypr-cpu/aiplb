import { IconDownload, IconDoc } from "./Icons";

export default function SectionSample() {
  return (
    <section id="sample" style={{ background: "#0F0A1F", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Sample output</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            Le claim chart auto, exporté en PDF.
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: 16, maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            Voilà le sample pour le brevet US 11,892,331 (Apple Memory bus prefetch). Format MPEP §608 compatible
            USPTO + EPO. Directement utilisable comme exhibit dans IPR ou litigation.
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(180deg, #1F1535 0%, #170E26 100%)",
            border: "1px solid rgba(124,58,237,0.4)",
            borderRadius: 16,
            padding: 32,
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div
            style={{
              aspectRatio: "210/297",
              background: "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",
              borderRadius: 8,
              border: "1px solid rgba(124,58,237,0.3)",
              padding: 24,
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              fontSize: 9,
              color: "#1F1535",
              fontFamily: "ui-monospace, Menlo, monospace",
              overflow: "hidden",
            }}
            aria-hidden
          >
            <div style={{ fontSize: 11, fontWeight: 800, color: "#7C3AED", marginBottom: 10 }}>CLAIM CHART · US 11,892,331</div>
            <div style={{ fontSize: 8, color: "#666", marginBottom: 14 }}>Patent: Apple — Memory bus prefetch · MPEP §608 compliant</div>
            <div style={{ borderTop: "1px solid #ddd", paddingTop: 8, marginBottom: 8 }}>
              <strong>Claim 1.</strong> A method of memory prefetching comprising...
            </div>
            <div style={{ background: "#f0f0ff", padding: 6, borderRadius: 4, marginBottom: 8 }}>
              <strong>Accused product:</strong> iPhone 15 Pro M3 silicon
            </div>
            <div style={{ marginBottom: 8 }}>
              <strong>Element 1.a</strong> "memory controller" → A17 Pro DRAM controller (datasheet p.42)
            </div>
            <div style={{ marginBottom: 8 }}>
              <strong>Element 1.b</strong> "prefetch buffer" → 8MB L2 cache prefetch (Apple SoC whitepaper §3.2)
            </div>
            <div style={{ marginBottom: 8 }}>
              <strong>Element 1.c</strong> "speculative load" → branch predictor M3 silicon (FCC filing 2023-09)
            </div>
            <div style={{ background: "rgba(16,185,129,0.15)", padding: 6, borderRadius: 4, marginTop: 12, color: "#065F46" }}>
              ✓ Match score: 94% · Confidence interval 88-97%
            </div>
            <div style={{ fontSize: 7, color: "#999", marginTop: 14, fontStyle: "italic" }}>
              Page 1 / 18 — full claim chart 18 pages, comparable analysis 4 pages, settlement playbook 3 pages.
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Inclus dans le sample</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", color: "rgba(255,255,255,0.78)", fontSize: 14 }}>
              <li style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}><IconDoc size={16} /> Claim chart 18 pages MPEP §608</li>
              <li style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}><IconDoc size={16} /> Comparable deals 4 pages (Lex Machina)</li>
              <li style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}><IconDoc size={16} /> Settlement playbook 3 pages</li>
              <li style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}><IconDoc size={16} /> Risk score Bayesian 1 page</li>
              <li style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}><IconDoc size={16} /> Email-cadre 4 templates</li>
            </ul>
            <a
              href="/api/sample/aiplb-claim-chart.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 26px",
                background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)",
                color: "#FFFFFF",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(124,58,237,0.35)",
              }}
            >
              <IconDownload size={16} /> Télécharger le PDF (2.4 Mo)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

// AIPLB deep IP licensing report — Apple foldable display patents demo.
// Sections: Exec, patent portfolio, infringers detected, generated C&D letter,
// licensing terms proposed, revenue projection chart, jurisdictional risk,
// competitor patent landscape, sources.

const POLLI = "https://image.pollinations.ai/prompt";
const HERO = `${POLLI}/${encodeURIComponent("patent enforcement command center, golden green neon, holographic blueprints, isometric 3D, dark theme, cinematic, no text")}?width=1920&height=900&model=flux&nologo=true`;
const PATENT_IMG = `${POLLI}/${encodeURIComponent("patent diagram blueprint, foldable display device, cyan green glow, dark theme, technical, no text")}?width=1280&height=320&model=flux&nologo=true`;

const PORTFOLIO = [
  { id: "US 11,829,200", title: "Foldable display hinge mechanism", filed: "2018-06-11", grant: "2023-11-28", tech: "Hardware" },
  { id: "US 11,941,135", title: "Crease-resistant flexible OLED layer", filed: "2019-09-04", grant: "2024-03-26", tech: "Materials" },
  { id: "US 12,045,318", title: "Adaptive UI for split-screen folding", filed: "2020-04-22", grant: "2024-07-15", tech: "Software" },
  { id: "US 12,089,440", title: "Hinge tension calibration via ML", filed: "2021-01-12", grant: "2024-10-08", tech: "AI/Software" },
  { id: "US 12,156,712", title: "Multi-axis fold detection sensors", filed: "2021-08-30", grant: "2025-01-19", tech: "Hardware" },
];

const INFRINGERS = [
  { entity: "TechFold Co (Shenzhen)", sku: "FoldX Pro 2025", patent: "US 11,829,200", confidence: 96, evidence: "tear-down report (iFixit) shows identical hinge geometry", action: "C&D drafted" },
  { entity: "Phonex Korea", sku: "FlexNote 7", patent: "US 11,941,135", confidence: 89, evidence: "press review mentions 'crease-free OLED' marketing claim", action: "Investigation" },
  { entity: "Aurora Mobile (USA)", sku: "Aurora Fold", patent: "US 12,045,318", confidence: 92, evidence: "App store screenshots show split-fold UI with same logic flow", action: "C&D drafted" },
  { entity: "BendTech (DE)", sku: "BT-Display module", patent: "US 12,156,712", confidence: 78, evidence: "trade show demo at IFA 2025 — 4 sensors visible", action: "Watching" },
  { entity: "OmniFold (CN)", sku: "OF-S Pro", patent: "US 12,089,440", confidence: 84, evidence: "marketing brochure claims 'auto-tension hinge'", action: "C&D drafted" },
  { entity: "FoldKing Mobile (IN)", sku: "FK-MK1", patent: "US 11,829,200", confidence: 71, evidence: "patent search via WIPO shows similar filing in IN", action: "Patent watch" },
];

type RevenueRow = { year: string; royalty: number; settlements: number };
const REVENUE_PROJ: RevenueRow[] = [
  { year: "Y1", royalty: 0.4, settlements: 1.2 },
  { year: "Y2", royalty: 1.8, settlements: 2.4 },
  { year: "Y3", royalty: 3.2, settlements: 1.5 },
  { year: "Y4", royalty: 4.5, settlements: 0.8 },
  { year: "Y5", royalty: 5.8, settlements: 0.4 },
];

const LICENSING_TERMS = [
  { tier: "Standard licence", royalty: "2.5% net revenue", upfront: "$250k", territory: "Worldwide ex-China", best_for: "Mid-market device makers" },
  { tier: "Volume licence", royalty: "1.8% (>1M units)", upfront: "$1.5M", territory: "Worldwide", best_for: "Tier-1 OEMs" },
  { tier: "Cross-licence", royalty: "0% (patent swap)", upfront: "Negotiated", territory: "Mutual", best_for: "Major patent holders" },
  { tier: "Settlement-only", royalty: "Lump-sum", upfront: "$500k-$5M", territory: "Past-use only", best_for: "Already-shipped infringers" },
];

const JURISDICTIONS = [
  { region: "🇺🇸 USA", strength: "Très forte", notes: "ITC injunctions disponibles · USPTO litigation 18-24 mois", score: 9 },
  { region: "🇪🇺 EU", strength: "Forte", notes: "UPC court (Munich/Paris) accélère 12 mois · injonctions transfrontalières", score: 8 },
  { region: "🇰🇷 Corée", strength: "Forte", notes: "Litigation rapide 8-14 mois · Samsung-friendly", score: 8 },
  { region: "🇩🇪 Allemagne", strength: "Très forte", notes: "Bifurcation injonction/validité · prep IFA-style flagships", score: 9 },
  { region: "🇨🇳 Chine", strength: "Moyenne (en hausse)", notes: "Beijing IP Court compétent · damages ↑ 2024-2025", score: 6 },
  { region: "🇮🇳 Inde", strength: "Faible-moyenne", notes: "Lentement amélioré · seuil de preuve élevé", score: 4 },
];

const COMPETITORS = [
  { entity: "Samsung", patents: 2384, focus: "Hardware hinge + OLED", overlap: "67%", note: "Leader incontesté · cross-licence possible" },
  { entity: "Huawei", patents: 1890, focus: "Software UI + AI tension", overlap: "42%", note: "Risque counter-suit en CN/EU" },
  { entity: "Lenovo (Motorola)", patents: 980, focus: "Vertical fold mécanique", overlap: "31%", note: "Niche distincte · pas de conflit" },
  { entity: "BOE Technology", patents: 1450, focus: "Display panels (matériaux)", overlap: "55%", note: "Fournisseur OEM · cross-licence prudente" },
  { entity: "LG Display", patents: 1120, focus: "OLED layers + crease", overlap: "48%", note: "Concurrent direct sur matériaux" },
];

const DETECTION_SOURCES = [
  "USPTO patent grants daily feed",
  "Google Patents semantic search (vector embeddings)",
  "iFixit teardowns (mechanical evidence)",
  "EU Patent Office EP register",
  "WIPO PATENTSCOPE",
  "Marketing brochures + product pages scrape",
  "FCC filings (USA hardware)",
  "Trade show coverage (IFA, MWC, CES)",
];

const SOURCES = [
  { source: "Reuters", title: "Foldable phone shipments hit 26M units in 2025, royalties surge", date: "12 fév. 2026", url: "https://reuters.com" },
  { source: "IAM Magazine", title: "How Apple's foldable patent portfolio became enforcement-ready", date: "08 mar. 2026", url: "https://iam-media.com" },
  { source: "USPTO", title: "US 12,156,712 — Multi-axis fold detection sensors (granted)", date: "19 jan. 2025", url: "https://uspto.gov" },
  { source: "Bloomberg", title: "Apple opens patent licensing program — first non-Samsung deal", date: "22 jan. 2026", url: "https://bloomberg.com" },
  { source: "FOSS Patents", title: "UPC injunctions reshape EU foldable market enforcement", date: "01 avr. 2026", url: "https://fosspatents.com" },
];

function ChartStacked({ data }: { data: RevenueRow[] }) {
  const w = 640, h = 200, pad = 40;
  const max = Math.max(...data.map((d) => d.royalty + d.settlements));
  const xs = data.map((_, i) => pad + (i * (w - 2 * pad)) / (data.length - 1));
  const barW = 36;
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} aria-label="Revenue projection">
      {data.map((d, i) => {
        const yRoyalty = h - pad - (d.royalty / max) * (h - 2 * pad);
        const ySettle = h - pad - ((d.royalty + d.settlements) / max) * (h - 2 * pad);
        const royaltyH = (d.royalty / max) * (h - 2 * pad);
        const settleH = (d.settlements / max) * (h - 2 * pad);
        return (
          <g key={i}>
            <rect x={xs[i] - barW / 2} y={yRoyalty} width={barW} height={royaltyH} fill="#10B981" />
            <rect x={xs[i] - barW / 2} y={ySettle} width={barW} height={settleH} fill="#FBBF24" />
            <text x={xs[i]} y={h - 10} fontSize={10} textAnchor="middle" fill="#9ca3af">{d.year}</text>
            <text x={xs[i]} y={ySettle - 6} fontSize={10} textAnchor="middle" fill="#fafafa">${(d.royalty + d.settlements).toFixed(1)}M</text>
          </g>
        );
      })}
      <g transform={`translate(${pad}, 18)`}>
        <rect width="12" height="12" fill="#10B981" />
        <text x="18" y="10" fontSize={11} fill="#cbd5e1">Royalties récurrentes</text>
        <rect x="160" width="12" height="12" fill="#FBBF24" />
        <text x="178" y="10" fontSize={11} fill="#cbd5e1">Settlements ponctuels</text>
      </g>
    </svg>
  );
}

const sectionH2: React.CSSProperties = { margin: 0, fontSize: "1.5rem", color: "var(--accent)" };
const sectionWrap: React.CSSProperties = { maxWidth: 1080, margin: "0 auto", padding: "2.5rem 1rem" };
const card: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 8, padding: "16px" };
const tdStyle: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid rgba(16,185,129,0.15)", color: "#cbd5e1", fontSize: ".85rem" };
const thStyle: React.CSSProperties = { padding: "10px 12px", textAlign: "left", color: "var(--accent-gold)", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", borderBottom: "1px solid rgba(16,185,129,0.3)" };

export default function DemoPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--foreground)" }}>
      <header style={{ position: "relative", overflow: "hidden", padding: "5rem 1rem 4rem" }}>
        <img src={HERO} alt="AIPLB IP enforcement command center" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,20,14,0.4), rgba(6,20,14,0.95))" }} />
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: ".75rem", letterSpacing: ".25em", textTransform: "uppercase", color: "#FBBF24", marginBottom: 12 }}>Démo AIPLB · Apple foldable patents</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
            Apple — programme d&apos;enforcement IP foldable display
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#cbd5e1", maxWidth: 760, margin: "20px auto 0" }}>
            5 brevets analysés · 6 utilisateurs non-licenciés détectés · Lettres mise en demeure générées · Projection $14M revenu sur 5 ans. Voilà ce que recevront les détenteurs de portefeuilles IP qui s&apos;abonnent.
          </p>
        </div>
      </header>

      {/* EXEC */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Executive summary</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginTop: 16 }}>
          <article style={card}>
            <div style={{ fontSize: ".7rem", color: "var(--accent-gold)", textTransform: "uppercase" }}>Brevets analysés</div>
            <div style={{ fontSize: "2rem", color: "#fafafa", margin: "6px 0" }}>5</div>
            <div style={{ fontSize: ".85rem", color: "#9ca3af" }}>Foldable display · 2018-2025</div>
          </article>
          <article style={card}>
            <div style={{ fontSize: ".7rem", color: "var(--accent-gold)", textTransform: "uppercase" }}>Infringers détectés</div>
            <div style={{ fontSize: "2rem", color: "#fafafa", margin: "6px 0" }}>6</div>
            <div style={{ fontSize: ".85rem", color: "#9ca3af" }}>3 confiance &gt; 90%</div>
          </article>
          <article style={card}>
            <div style={{ fontSize: ".7rem", color: "var(--accent-gold)", textTransform: "uppercase" }}>C&amp;D générées</div>
            <div style={{ fontSize: "2rem", color: "#fafafa", margin: "6px 0" }}>3</div>
            <div style={{ fontSize: ".85rem", color: "#9ca3af" }}>Prêtes à signature legal</div>
          </article>
          <article style={card}>
            <div style={{ fontSize: ".7rem", color: "var(--accent-gold)", textTransform: "uppercase" }}>Revenu projeté 5 ans</div>
            <div style={{ fontSize: "2rem", color: "#fafafa", margin: "6px 0" }}>$22.0M</div>
            <div style={{ fontSize: ".85rem", color: "#9ca3af" }}>Royalties + settlements</div>
          </article>
        </div>
      </section>

      {/* PATENT PORTFOLIO */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Portefeuille analysé</h2>
        <div style={{ ...card, marginTop: 16, padding: 0, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead><tr><th style={thStyle}>Patent ID</th><th style={thStyle}>Titre</th><th style={thStyle}>Filed</th><th style={thStyle}>Grant</th><th style={thStyle}>Tech</th></tr></thead>
            <tbody>
              {PORTFOLIO.map((p) => (
                <tr key={p.id}>
                  <td style={{ ...tdStyle, color: "var(--accent)", fontFamily: "monospace" }}>{p.id}</td>
                  <td style={{ ...tdStyle, color: "#fafafa" }}>{p.title}</td>
                  <td style={tdStyle}>{p.filed}</td>
                  <td style={tdStyle}>{p.grant}</td>
                  <td style={{ ...tdStyle, color: "var(--accent-gold)", fontSize: ".75rem", textTransform: "uppercase" }}>{p.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INFRINGERS */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Détections d&apos;usage non-licencié</h2>
        <div style={{ ...card, marginTop: 16, padding: 0, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 880 }}>
            <thead><tr><th style={thStyle}>Entité</th><th style={thStyle}>Produit</th><th style={thStyle}>Brevet</th><th style={thStyle}>Conf.</th><th style={thStyle}>Preuve</th><th style={thStyle}>Action</th></tr></thead>
            <tbody>
              {INFRINGERS.map((i, idx) => (
                <tr key={idx}>
                  <td style={{ ...tdStyle, color: "#fafafa", fontWeight: 600 }}>{i.entity}</td>
                  <td style={tdStyle}>{i.sku}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace", color: "var(--accent)" }}>{i.patent}</td>
                  <td style={tdStyle}>
                    <span style={{ color: i.confidence >= 90 ? "#34d399" : i.confidence >= 80 ? "#FBBF24" : "#fb7185", fontWeight: 600 }}>{i.confidence}%</span>
                  </td>
                  <td style={{ ...tdStyle, fontSize: ".8rem", maxWidth: 320 }}>{i.evidence}</td>
                  <td style={{ ...tdStyle, fontSize: ".7rem", textTransform: "uppercase", color: "var(--accent-gold)" }}>{i.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* C&D LETTER PREVIEW */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Lettre de mise en demeure générée — preview</h2>
        <div style={{ ...card, marginTop: 16, padding: "20px 24px", fontFamily: "Georgia, serif", color: "#cbd5e1", lineHeight: 1.6, fontSize: ".9rem" }}>
          <div style={{ color: "#fafafa", textAlign: "right", marginBottom: 16, fontSize: ".8rem" }}>22 avril 2026 · Réf. AIPLB-2026-0422-TF</div>
          <p><strong style={{ color: "#fafafa" }}>À l&apos;attention de TechFold Co · Direction juridique</strong></p>
          <p>Madame, Monsieur,</p>
          <p>
            Notre société agit pour le compte d&apos;Apple Inc. dans le cadre de la protection de son portefeuille de brevets relatifs aux dispositifs à écran pliable.
          </p>
          <p>
            Une analyse comparative menée le 22 avril 2026, croisant la documentation technique de votre produit FoldX Pro 2025 avec le brevet US 11,829,200 (« Foldable display hinge mechanism »), révèle une concordance structurelle de <strong style={{ color: "var(--accent)" }}>96%</strong> sur les revendications 1, 4, 7 et 12 dudit brevet.
          </p>
          <p>
            Le rapport de tear-down public iFixit (réf. iFx-2026-198) confirme l&apos;identité géométrique du mécanisme de charnière. La date de mise sur le marché du FoldX Pro 2025 (15 février 2026) est postérieure à la délivrance du brevet (28 novembre 2023).
          </p>
          <p>
            Nous vous mettons en demeure, dans un délai de <strong style={{ color: "var(--accent-gold)" }}>30 jours</strong>, de :
          </p>
          <ul style={{ paddingLeft: 20 }}>
            <li>Soit cesser immédiatement la commercialisation du FoldX Pro 2025</li>
            <li>Soit conclure un accord de licence aux conditions standard (2.5% net revenue + $250k upfront)</li>
            <li>Soit nous transmettre vos contre-arguments documentés</li>
          </ul>
          <p>À défaut, une procédure devant l&apos;ITC (États-Unis) et l&apos;UPC (Union Européenne) sera engagée.</p>
          <p style={{ marginTop: 24, color: "#9ca3af", fontStyle: "italic", fontSize: ".75rem" }}>Lettre générée automatiquement par AIPLB · revue humaine requise avant envoi · contact : legal@sanctuary-ai.services</p>
        </div>
      </section>

      {/* LICENSING TERMS */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Termes de licence proposés</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
          {LICENSING_TERMS.map((t, i) => (
            <article key={i} style={card}>
              <div style={{ fontSize: ".75rem", color: "var(--accent-gold)", textTransform: "uppercase" }}>{t.tier}</div>
              <div style={{ fontSize: "1.3rem", color: "#fafafa", marginTop: 8 }}>{t.royalty}</div>
              <div style={{ fontSize: ".85rem", color: "var(--accent)", marginTop: 4 }}>+ {t.upfront}</div>
              <div style={{ fontSize: ".8rem", color: "#9ca3af", marginTop: 8 }}>📍 {t.territory}</div>
              <div style={{ fontSize: ".8rem", color: "#cbd5e1", marginTop: 8, fontStyle: "italic" }}>Idéal : {t.best_for}</div>
            </article>
          ))}
        </div>
      </section>

      {/* REVENUE PROJECTION */}
      <section style={sectionWrap}>
        <div style={{ position: "relative", borderRadius: 12, overflow: "hidden" }}>
          <img src={PATENT_IMG} alt="patent blueprints" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} />
          <div style={{ position: "relative", padding: "32px 24px", background: "rgba(6,20,14,0.85)" }}>
            <h2 style={sectionH2}>Projection revenus 5 ans</h2>
            <p style={{ color: "#9ca3af", fontSize: ".85rem", marginTop: 8 }}>Hypothèses : 3 settlements signés Y1 + 2-3 nouveaux licenciés/an + montée de royalties.</p>
            <div style={{ marginTop: 20 }}>
              <ChartStacked data={REVENUE_PROJ} />
            </div>
            <div style={{ marginTop: 16, color: "#cbd5e1", fontSize: ".85rem" }}>
              <strong style={{ color: "#fafafa" }}>Total cumulé estimé :</strong> $22.0M sur 5 ans · royalties dominent dès Y3 (modèle récurrent installé).
            </div>
          </div>
        </div>
      </section>

      {/* JURISDICTIONS */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Force juridictionnelle (où litiger)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginTop: 16 }}>
          {JURISDICTIONS.map((j, i) => (
            <article key={i} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ color: "#fafafa", fontWeight: 600 }}>{j.region}</span>
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>{j.score}/10</span>
              </div>
              <div style={{ color: "var(--accent-gold)", fontSize: ".75rem", marginTop: 6, textTransform: "uppercase" }}>{j.strength}</div>
              <div style={{ color: "#cbd5e1", fontSize: ".85rem", marginTop: 8 }}>{j.notes}</div>
            </article>
          ))}
        </div>
      </section>

      {/* COMPETITORS PATENT LANDSCAPE */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Paysage concurrent — risque counter-suit</h2>
        <div style={{ ...card, marginTop: 16, padding: 0, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead><tr><th style={thStyle}>Entité</th><th style={thStyle}>Brevets foldable</th><th style={thStyle}>Focus</th><th style={thStyle}>Recouvrement</th><th style={thStyle}>Note stratégique</th></tr></thead>
            <tbody>
              {COMPETITORS.map((c, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, color: "#fafafa", fontWeight: 600 }}>{c.entity}</td>
                  <td style={{ ...tdStyle, color: "var(--accent)" }}>{c.patents}</td>
                  <td style={tdStyle}>{c.focus}</td>
                  <td style={tdStyle}>{c.overlap}</td>
                  <td style={{ ...tdStyle, fontSize: ".8rem" }}>{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DETECTION SOURCES */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Sources de détection</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 8, marginTop: 16 }}>
          {DETECTION_SOURCES.map((s, i) => (
            <div key={i} style={{ ...card, fontSize: ".85rem", color: "#cbd5e1" }}>{s}</div>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section style={sectionWrap}>
        <h2 style={sectionH2}>Sources citées</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 10, marginTop: 16 }}>
          {SOURCES.map((c, i) => (
            <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...card, display: "block", textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: ".7rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: ".1em" }}>{c.source} · {c.date}</div>
              <div style={{ fontSize: ".95rem", color: "#fafafa", marginTop: 6 }}>{c.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))", padding: "3rem 1rem", textAlign: "center", marginTop: "1rem" }}>
        <h2 style={{ margin: 0, fontSize: "1.75rem", color: "#fff" }}>Recevez ce rapport sur votre portefeuille IP</h2>
        <p style={{ color: "#fff", opacity: 0.85, marginTop: 8, marginBottom: 24 }}>Annulez à tout moment. Remboursement 30 jours.</p>
        <Link href="/contact?from=demo" style={{ display: "inline-block", padding: "14px 32px", background: "#06140E", color: "#fff", borderRadius: 999, textDecoration: "none", fontWeight: 600, fontSize: "1.05rem" }}>
          S&apos;abonner — démarrer l&apos;analyse
        </Link>
      </section>
    </main>
  );
}

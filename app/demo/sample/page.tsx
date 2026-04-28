import { PatentLeverageChart, Timeline36Chart } from "../_components/Charts";

export const metadata = {
  title: "AIPLB · IP Leverage Report — Apple Inc. (échantillon)",
  description:
    "Échantillon imprimable du rapport AIPLB : 12 brevets Apple, 3 leviers négo, comparables sectoriels, lettres types.",
};

const PATENTS = [
  { id: "US20240312456", cpc: "G02B 27/01", subject: "AR optical waveguide stacking", filing: "2024-09-19", status: "Granted", leverage: 88, forwardCitations: 47, familySize: 14, royaltyPotentialEUR: 380000 },
  { id: "US20250012345", cpc: "G06N 3/04", subject: "On-device neural tokenizer cache", filing: "2025-01-08", status: "Pending", leverage: 84, forwardCitations: 32, familySize: 11, royaltyPotentialEUR: 510000 },
  { id: "US20240145678", cpc: "G06N 3/063", subject: "On-device diffusion model token cache", filing: "2024-04-12", status: "Granted", leverage: 81, forwardCitations: 41, familySize: 9, royaltyPotentialEUR: 295000 },
  { id: "US20240456712", cpc: "G06N 3/098", subject: "Privacy-preserving federated fine-tuning", filing: "2024-11-05", status: "Granted", leverage: 79, forwardCitations: 29, familySize: 12, royaltyPotentialEUR: 460000 },
  { id: "US20240289012", cpc: "F28F 21/02", subject: "Heat dissipation lattice for AR glasses", filing: "2024-06-30", status: "Granted", leverage: 72, forwardCitations: 24, familySize: 8, royaltyPotentialEUR: 220000 },
  { id: "US20250067891", cpc: "G06F 3/01", subject: "Eye-tracking gaze prediction (spatial UI)", filing: "2025-02-21", status: "Pending", leverage: 68, forwardCitations: 19, familySize: 7, royaltyPotentialEUR: 180000 },
  { id: "US20240378901", cpc: "H01L 25/16", subject: "Photonic interconnect (neural cores)", filing: "2024-08-14", status: "Granted", leverage: 66, forwardCitations: 22, familySize: 6, royaltyPotentialEUR: 340000 },
  { id: "US20250023456", cpc: "G06F 3/017", subject: "Gesture-to-text low-latency transformer", filing: "2025-01-29", status: "Pending", leverage: 61, forwardCitations: 17, familySize: 8, royaltyPotentialEUR: 165000 },
  { id: "US20240520198", cpc: "G06T 15/04", subject: "Foveated render pipeline (visionOS)", filing: "2024-12-02", status: "Granted", leverage: 58, forwardCitations: 14, familySize: 6, royaltyPotentialEUR: 142000 },
  { id: "US20250108765", cpc: "G10L 19/008", subject: "Spatial audio beam-forming calibration", filing: "2025-03-10", status: "Pending", leverage: 54, forwardCitations: 12, familySize: 5, royaltyPotentialEUR: 98000 },
  { id: "US20250091234", cpc: "H01M 10/65", subject: "Battery thermal envelope (AR headset)", filing: "2025-02-26", status: "Pending", leverage: 49, forwardCitations: 9, familySize: 4, royaltyPotentialEUR: 76000 },
  { id: "US20250134567", cpc: "G06F 12/08", subject: "Cross-device memory coherence", filing: "2025-03-22", status: "Pending", leverage: 44, forwardCitations: 7, familySize: 4, royaltyPotentialEUR: 58000 },
];

const ACTORS = [
  { name: "Magic Leap", vertical: "AR optics", position: "Ouvert au licensing", overlap: 8, comment: "Cite 4× US20240312456 dans ses 6 derniers dépôts. Royalty plausible 380K€/an." },
  { name: "Cerebras", vertical: "Neural inference", position: "Position contestée", overlap: 5, comment: "Architecture wafer-scale contourne US20240145678. Risque litige 18 mois." },
  { name: "Sony Semiconductor", vertical: "Image sensor", position: "Accord exclusif existant", overlap: 3, comment: "Accord cross-licensing existant 2022. Renégociation possible Q3 2026." },
  { name: "Meta Reality Labs", vertical: "Gesture / eye tracking", position: "Position contestée", overlap: 7, comment: "Brevets parallèles déposés EPO. Famille 14 vs Apple 11. Position défensive." },
  { name: "Qualcomm", vertical: "Mobile NPU", position: "Ouvert au licensing", overlap: 6, comment: "Dépendance fab TSMC commune. Cross-license probable sur photonic interconnect." },
  { name: "Samsung Research", vertical: "Memory coherence", position: "Stratégie blocage", overlap: 4, comment: "Pousse standard JEDEC concurrent. Fenêtre négo ~9 mois avant standardisation." },
];

const COMPARABLES = [
  { deal: "Qualcomm × Apple (2019)", scope: "5G modem licensing", value: "$4.5B forfait + $9/device", relevance: "Référence sectorielle pour fab dependent licensing" },
  { deal: "Nokia × Apple (2017)", scope: "WiFi + cellular patent portfolio", value: "$2B upfront + 6.5% royalty", relevance: "Pattern cross-license post-litige, applicable à Cerebras" },
  { deal: "InterDigital × Samsung (2024)", scope: "Standard-essential mobile patents", value: "$650M cumulé 4 ans", relevance: "Calibre royalty modélisé sur memory coherence" },
  { deal: "Magic Leap × Saudi PIF (2023)", scope: "AR optics restructuring", value: "$590M cash injection", relevance: "Capacité de paiement Magic Leap confirmée pour deal 380K€/an" },
];

const TIMELINE = [
  { month: "Mai 23", filings: 6, challenges: 2, deals: 0 },
  { month: "Juin 23", filings: 9, challenges: 1, deals: 1 },
  { month: "Juil 23", filings: 7, challenges: 3, deals: 0 },
  { month: "Août 23", filings: 8, challenges: 2, deals: 0 },
  { month: "Sept 23", filings: 12, challenges: 4, deals: 1 },
  { month: "Oct 23", filings: 10, challenges: 3, deals: 0 },
  { month: "Nov 23", filings: 14, challenges: 5, deals: 1 },
  { month: "Déc 23", filings: 11, challenges: 3, deals: 0 },
  { month: "Jan 24", filings: 13, challenges: 6, deals: 2 },
  { month: "Fév 24", filings: 16, challenges: 4, deals: 1 },
  { month: "Mar 24", filings: 18, challenges: 7, deals: 1 },
  { month: "Avr 24", filings: 15, challenges: 5, deals: 0 },
  { month: "Mai 24", filings: 20, challenges: 8, deals: 2 },
  { month: "Juin 24", filings: 17, challenges: 6, deals: 1 },
  { month: "Juil 24", filings: 22, challenges: 9, deals: 1 },
  { month: "Août 24", filings: 19, challenges: 7, deals: 2 },
  { month: "Sept 24", filings: 24, challenges: 11, deals: 2 },
  { month: "Oct 24", filings: 21, challenges: 8, deals: 1 },
  { month: "Nov 24", filings: 26, challenges: 12, deals: 3 },
  { month: "Déc 24", filings: 23, challenges: 9, deals: 2 },
  { month: "Jan 25", filings: 28, challenges: 13, deals: 2 },
  { month: "Fév 25", filings: 25, challenges: 10, deals: 3 },
  { month: "Mar 25", filings: 30, challenges: 14, deals: 4 },
  { month: "Avr 25", filings: 27, challenges: 12, deals: 2 },
  { month: "Mai 25", filings: 32, challenges: 15, deals: 3 },
  { month: "Juin 25", filings: 29, challenges: 11, deals: 2 },
  { month: "Juil 25", filings: 34, challenges: 16, deals: 4 },
  { month: "Août 25", filings: 31, challenges: 13, deals: 3 },
  { month: "Sept 25", filings: 36, challenges: 17, deals: 4 },
  { month: "Oct 25", filings: 33, challenges: 14, deals: 3 },
  { month: "Nov 25", filings: 38, challenges: 18, deals: 5 },
  { month: "Déc 25", filings: 35, challenges: 16, deals: 4 },
  { month: "Jan 26", filings: 40, challenges: 19, deals: 5 },
  { month: "Fév 26", filings: 37, challenges: 17, deals: 4 },
  { month: "Mar 26", filings: 42, challenges: 20, deals: 6 },
  { month: "Avr 26", filings: 39, challenges: 18, deals: 5 },
];

export default function SamplePage() {
  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 14mm; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; break-after: page; }
        }
        .doc-body * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      `}</style>
      <main
        className="doc-body"
        style={{
          background: "#FFFFFF",
          color: "#1F2937",
          minHeight: "100vh",
          padding: "32px 32px 80px",
          maxWidth: 920,
          margin: "0 auto",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div className="no-print" style={{ marginBottom: 24, padding: 14, background: "#F3F4F6", borderRadius: 8, fontSize: 13, color: "#1F2937", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span>
            Document échantillon imprimable. Utilisez <strong>Ctrl/⌘+P</strong> pour exporter en PDF.
          </span>
          <a href="/demo" style={{ color: "#7C3AED", textDecoration: "underline", fontWeight: 600 }}>← Retour à la démo</a>
        </div>

        {/* Header */}
        <header style={{ borderBottom: "2px solid #7C3AED", paddingBottom: 16, marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: "#7C3AED", letterSpacing: 2, fontWeight: 700, textTransform: "uppercase" }}>
                AIPLB · IP Leverage Report
              </div>
              <h1 style={{ fontSize: 28, margin: "6px 0 4px", letterSpacing: -0.5 }}>Apple Inc. — AR/VR & Neural Processing</h1>
              <div style={{ fontSize: 13, color: "#6B7280" }}>CIK 0000320193 · Période 2023-05 → 2026-04 · 12 brevets prioritaires sur 1 247 analysés</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: "#6B7280" }}>Émis le 28 avril 2026</div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>Référence : AIPLB-2026-04-28-AAPL-AR</div>
            </div>
          </div>
        </header>

        {/* Executive summary */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>1 · Résumé exécutif</h2>
          <p style={{ fontSize: 13, lineHeight: 1.7, margin: "0 0 12px", color: "#1F2937" }}>
            Le portefeuille Apple AR/VR + neural processing 2024-2026 contient <strong>12 brevets prioritaires</strong> avec un
            score leverage moyen de <strong>64/100</strong> (vs benchmark sectoriel 41/100). Royalty potentiel total bas-borné à
            <strong> €2.92M/an</strong>. AIPLB identifie <strong>3 leviers négo actionnables</strong> sous 12 mois :
          </p>
          <ol style={{ fontSize: 13, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
            <li><strong>Magic Leap × US20240312456 (AR waveguide)</strong> — cross-licensing évalué 380K€/an, fenêtre 6 mois.</li>
            <li><strong>Cerebras × US20240145678 (diffusion cache)</strong> — ouverture négociation, royalty 295K€/an, risque litige 18 mois si rien fait.</li>
            <li><strong>Samsung × US20240456712 (federated fine-tune)</strong> — préemption avant standard JEDEC, fenêtre 9 mois.</li>
          </ol>
        </section>

        {/* KPI strip */}
        <section style={{ marginBottom: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { v: "1 247", l: "Brevets Apple analysés" },
            { v: "64/100", l: "Leverage moyen" },
            { v: "€2.92M", l: "Royalty potentiel /an" },
            { v: "12h", l: "Délai détection" },
          ].map((k) => (
            <div key={k.l} style={{ border: "1px solid #E5E7EB", borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#7C3AED" }}>{k.v}</div>
              <div style={{ fontSize: 11, color: "#6B7280" }}>{k.l}</div>
            </div>
          ))}
        </section>

        {/* Patent table */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>2 · Détail des 12 brevets prioritaires</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ background: "#F3F4F6" }}>
                <th style={th}>N°</th>
                <th style={th}>CPC</th>
                <th style={th}>Sujet</th>
                <th style={{ ...th, textAlign: "center" }}>Dépôt</th>
                <th style={{ ...th, textAlign: "center" }}>Statut</th>
                <th style={{ ...th, textAlign: "right" }}>Cit.</th>
                <th style={{ ...th, textAlign: "right" }}>Fam.</th>
                <th style={{ ...th, textAlign: "right" }}>Royalty</th>
                <th style={{ ...th, textAlign: "right" }}>Lev.</th>
              </tr>
            </thead>
            <tbody>
              {PATENTS.map((p) => (
                <tr key={p.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td style={{ ...td, fontFamily: "ui-monospace, monospace", fontSize: 10 }}>{p.id}</td>
                  <td style={{ ...td, fontFamily: "ui-monospace, monospace", fontSize: 10 }}>{p.cpc}</td>
                  <td style={td}>{p.subject}</td>
                  <td style={{ ...td, textAlign: "center" }}>{p.filing}</td>
                  <td style={{ ...td, textAlign: "center" }}>
                    <span style={{ display: "inline-block", padding: "1px 6px", borderRadius: 999, fontSize: 10, fontWeight: 600, background: p.status === "Granted" ? "#D1FAE5" : "#FEF3C7", color: p.status === "Granted" ? "#047857" : "#92400E" }}>
                      {p.status}
                    </span>
                  </td>
                  <td style={{ ...td, textAlign: "right" }}>{p.forwardCitations}</td>
                  <td style={{ ...td, textAlign: "right" }}>{p.familySize}</td>
                  <td style={{ ...td, textAlign: "right" }}>{(p.royaltyPotentialEUR / 1000).toFixed(0)}K€</td>
                  <td style={{ ...td, textAlign: "right", fontWeight: 700, color: p.leverage >= 75 ? "#10B981" : p.leverage >= 50 ? "#F59E0B" : "#9CA3AF" }}>
                    {p.leverage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="page-break" />

        {/* Leverage chart */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>3 · Score leverage par brevet</h2>
          <PatentLeverageChart rows={PATENTS} />
        </section>

        {/* Timeline */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>4 · Activité brevet sur 36 mois</h2>
          <Timeline36Chart data={TIMELINE} />
          <p style={{ fontSize: 12, color: "#6B7280", marginTop: 8, lineHeight: 1.6 }}>
            Apple a accéléré ses dépôts AR/VR + neural de +75 % sur 36 mois. Les challenges concurrents
            suivent avec un décalage de 4 mois. Les deals licensing publics ont triplé sur 2024-2026.
          </p>
        </section>

        {/* Actors */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>5 · Acteurs secondaires détectés</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ background: "#F3F4F6" }}>
                <th style={th}>Acteur</th>
                <th style={th}>Vertical</th>
                <th style={th}>Position</th>
                <th style={{ ...th, textAlign: "center" }}>Overlap</th>
                <th style={th}>Note</th>
              </tr>
            </thead>
            <tbody>
              {ACTORS.map((a) => (
                <tr key={a.name} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td style={{ ...td, fontWeight: 700 }}>{a.name}</td>
                  <td style={td}>{a.vertical}</td>
                  <td style={td}>{a.position}</td>
                  <td style={{ ...td, textAlign: "center" }}>{a.overlap} brevets</td>
                  <td style={td}>{a.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="page-break" />

        {/* Comparables */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>6 · Comparables sectoriels</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ background: "#F3F4F6" }}>
                <th style={th}>Deal</th>
                <th style={th}>Scope</th>
                <th style={th}>Valeur</th>
                <th style={th}>Pertinence</th>
              </tr>
            </thead>
            <tbody>
              {COMPARABLES.map((c) => (
                <tr key={c.deal} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td style={{ ...td, fontWeight: 700 }}>{c.deal}</td>
                  <td style={td}>{c.scope}</td>
                  <td style={td}>{c.value}</td>
                  <td style={td}>{c.relevance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Strategic levers */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>7 · 3 leviers négo actionnables</h2>
          <ol style={{ paddingLeft: 22, margin: 0, fontSize: 12, lineHeight: 1.7 }}>
            <li style={{ marginBottom: 14 }}>
              <strong>Magic Leap × US20240312456 (AR waveguide) — confiance haute.</strong> Magic Leap a cité 4× ce
              brevet dans ses 6 derniers dépôts. Cross-licensing évalué <strong>380K€/an</strong> contre licence sur
              brevets photonique Magic Leap (utiles pour visionOS 3 MVP). Fenêtre tactique : 6 mois avant
              réorganisation rumeur Magic Leap. Action recommandée : envoi du courrier modèle A (Annexe 1) au
              CIPO Magic Leap.
            </li>
            <li style={{ marginBottom: 14 }}>
              <strong>Cerebras × US20240145678 (diffusion cache) — confiance moyenne.</strong> L&apos;architecture
              wafer-scale contourne nominalement le brevet, mais le claim breadth (0.81) suggère couverture
              étendue. Risque litige 18 mois si non-licencié. Recommandation : lettre courtoise d&apos;ouverture
              négociation (Annexe 2), pas de mise en demeure agressive — Cerebras est cotée, l&apos;hostilité
              publique nuirait au branding Apple.
            </li>
            <li>
              <strong>Samsung × US20240456712 (federated fine-tune) — confiance haute.</strong> Samsung pousse un
              standard JEDEC concurrent sur memory coherence pour neural inference. Si standardisé, le brevet
              perd 60 % de sa valeur. Fenêtre <strong>~9 mois</strong> pour pré-licencier les 4 fab clients
              asiatiques majeurs (TSMC, GlobalFoundries, SMIC, UMC) avant la standardisation.
            </li>
          </ol>
        </section>

        <div className="page-break" />

        {/* Annex 1 */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>Annexe 1 · Lettre type FR (Magic Leap)</h2>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, padding: 18, fontSize: 12, lineHeight: 1.7, fontFamily: "ui-serif, Georgia, serif", color: "#1F2937" }}>
            <p style={{ margin: "0 0 10px" }}>Madame, Monsieur,</p>
            <p style={{ margin: "0 0 10px" }}>
              Notre équipe IP a identifié un recouvrement substantiel entre le brevet US20240312456
              (waveguide AR) détenu par Apple Inc. et plusieurs de vos demandes récentes (réf. internes
              disponibles sur demande). Nous souhaitons ouvrir un dialogue confidentiel sur un cadre de
              cross-licensing mutuel, prenant en compte vos brevets photonique d&apos;intérêt pour notre
              roadmap visionOS.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              Cette démarche s&apos;inscrit dans une logique de partenariat industriel et non
              contentieuse. Nous proposons un appel exploratoire sous 14 jours pour calibrer les périmètres
              respectifs et envisager une grille de royalty équilibrée.
            </p>
            <p style={{ margin: "0 0 10px" }}>Cordialement,</p>
            <p style={{ margin: 0, color: "#9CA3AF" }}>[Nom · Chief IP Officer · Apple Inc.]</p>
          </div>
        </section>

        {/* Annex 2 */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: "#7C3AED", margin: "0 0 12px", borderBottom: "1px solid #E5E7EB", paddingBottom: 6 }}>Annexe 2 · Letter template EN (Cerebras)</h2>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, padding: 18, fontSize: 12, lineHeight: 1.7, fontFamily: "ui-serif, Georgia, serif", color: "#1F2937" }}>
            <p style={{ margin: "0 0 10px" }}>Dear Cerebras IP Team,</p>
            <p style={{ margin: "0 0 10px" }}>
              In the course of our routine portfolio review, our team noted potential technical overlap
              between US20240145678 (on-device diffusion model token cache) and certain implementations
              described in your recent technical disclosures around wafer-scale inference acceleration.
            </p>
            <p style={{ margin: "0 0 10px" }}>
              We believe this is best addressed through an open conversation rather than a formal notice.
              We would welcome a confidential, no-obligation technical exchange in the coming weeks to
              clarify the respective scopes and explore whether a mutually-beneficial licensing
              arrangement could be structured.
            </p>
            <p style={{ margin: "0 0 10px" }}>Best regards,</p>
            <p style={{ margin: 0, color: "#9CA3AF" }}>[Name · Chief IP Officer · Apple Inc.]</p>
          </div>
        </section>

        <footer style={{ marginTop: 40, paddingTop: 14, borderTop: "1px solid #E5E7EB", fontSize: 10, color: "#9CA3AF", lineHeight: 1.6 }}>
          AIPLB · IP Leverage Report · Échantillon. Document construit à partir de patterns USPTO publics, à
          des fins illustratives. Numéros de brevets, scores leverage, positions des acteurs sont des
          exemples — pas une divulgation de données clients ni un avis juridique. Apple Inc. et les
          marques mentionnées sont la propriété de leurs détenteurs respectifs et n&apos;ont aucun lien
          commercial avec AIPLB. Ce rapport ne se substitue pas à un avis qualifié sur la freedom-to-operate.
        </footer>
      </main>
    </>
  );
}

const th = {
  textAlign: "left" as const,
  padding: "8px 10px",
  fontSize: 11,
  color: "#1F2937",
  fontWeight: 700,
  borderBottom: "1px solid #E5E7EB",
};

const td = {
  padding: "7px 10px",
  fontSize: 11,
  color: "#1F2937",
  verticalAlign: "top" as const,
};

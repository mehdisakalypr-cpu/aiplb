import Link from "next/link";
import {
  IconRadar,
  IconScan,
  IconChart,
  IconDoc,
  IconCheck,
  IconX,
  IconShield,
  IconLock,
  IconBolt,
  IconBriefcase,
  IconUsers,
  IconScale,
  IconSparkles,
  IconGlobe,
  IconCpu,
} from "./_components/Icons";
import {
  PatentLeverageChart,
  Timeline36Chart,
  LeverageRadar,
  type LeverageRow,
  type TimelinePoint,
} from "./_components/Charts";
import IrisModal from "./_components/IrisModal";
import FAQAccordion from "./_components/FAQAccordion";
import Reveal from "./_components/Reveal";
import SampleDownloadButton from "./_components/SampleDownloadButton";

export const metadata = {
  title: "Démo AIPLB — Apple AR/VR & Neural · 12 brevets, 3 leviers négo",
  description:
    "Rapport AIPLB live sur 12 brevets Apple 2024-2026. Score leverage, opportunités licensing avec Magic Leap, Cerebras, Sony. Avatar IA Iris, dossier négo téléchargeable.",
};

// ─── DATA — APPLE LIVE EXAMPLE ──────────────────────────────────────

const APPLE_LEVERAGE: LeverageRow[] = [
  { id: "US20240312456", cpc: "G02B 27/01 — AR waveguide", leverage: 88, forwardCitations: 47, familySize: 14, royaltyPotentialEUR: 380000 },
  { id: "US20250012345", cpc: "G06N 3/04 — On-device tokenizer", leverage: 84, forwardCitations: 32, familySize: 11, royaltyPotentialEUR: 510000 },
  { id: "US20240145678", cpc: "G06N 3/063 — Diffusion cache", leverage: 81, forwardCitations: 41, familySize: 9, royaltyPotentialEUR: 295000 },
  { id: "US20240456712", cpc: "G06N 3/098 — Federated fine-tune", leverage: 79, forwardCitations: 29, familySize: 12, royaltyPotentialEUR: 460000 },
  { id: "US20240289012", cpc: "F28F 21/02 — AR thermal lattice", leverage: 72, forwardCitations: 24, familySize: 8, royaltyPotentialEUR: 220000 },
  { id: "US20250067891", cpc: "G06F 3/01 — Eye gaze prediction", leverage: 68, forwardCitations: 19, familySize: 7, royaltyPotentialEUR: 180000 },
  { id: "US20240378901", cpc: "H01L 25/16 — Photonic interconnect", leverage: 66, forwardCitations: 22, familySize: 6, royaltyPotentialEUR: 340000 },
  { id: "US20250023456", cpc: "G06F 3/017 — Gesture transformer", leverage: 61, forwardCitations: 17, familySize: 8, royaltyPotentialEUR: 165000 },
  { id: "US20240520198", cpc: "G06T 15/04 — Foveated render", leverage: 58, forwardCitations: 14, familySize: 6, royaltyPotentialEUR: 142000 },
  { id: "US20250108765", cpc: "G10L 19/008 — Spatial audio array", leverage: 54, forwardCitations: 12, familySize: 5, royaltyPotentialEUR: 98000 },
  { id: "US20250091234", cpc: "H01M 10/65 — AR battery envelope", leverage: 49, forwardCitations: 9, familySize: 4, royaltyPotentialEUR: 76000 },
  { id: "US20250134567", cpc: "G06F 12/08 — Memory coherence", leverage: 44, forwardCitations: 7, familySize: 4, royaltyPotentialEUR: 58000 },
];

const APPLE_TIMELINE: TimelinePoint[] = [
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

const ACTORS: Array<{
  name: string;
  vertical: string;
  position: "willing" | "contested" | "exclusive" | "blocking";
  overlap: number;
  comment: string;
}> = [
  { name: "Magic Leap", vertical: "AR optics", position: "willing", overlap: 8, comment: "Cite 4× US20240312456 dans ses 6 derniers dépôts. Royalty plausible 380K€/an." },
  { name: "Cerebras", vertical: "Neural inference", position: "contested", overlap: 5, comment: "Architecture wafer-scale contourne US20240145678. Risque litige 18 mois." },
  { name: "Sony Semiconductor", vertical: "Image sensor", position: "exclusive", overlap: 3, comment: "Accord cross-licensing existant 2022. Renégociation possible Q3 2026." },
  { name: "Meta Reality Labs", vertical: "Gesture / eye tracking", position: "contested", overlap: 7, comment: "Brevets parallèles déposés EPO. Famille 14 vs Apple 11. Position défensive." },
  { name: "Qualcomm", vertical: "Mobile NPU", position: "willing", overlap: 6, comment: "Dépendance fab TSMC commune. Cross-license probable sur photonic interconnect." },
  { name: "Samsung Research", vertical: "Memory coherence", position: "blocking", overlap: 4, comment: "Pousse standard JEDEC concurrent. Fenêtre négo ~9 mois avant standardisation." },
];

const POSITION_STYLE: Record<string, { color: string; label: string }> = {
  willing: { color: "#10B981", label: "Ouvert au licensing" },
  contested: { color: "#F59E0B", label: "Position contestée" },
  exclusive: { color: "#06B6D4", label: "Accord exclusif existant" },
  blocking: { color: "#EF4444", label: "Stratégie blocage" },
};

// ─── PROBLEM STATS ─────────────────────────────────────────────────

const PROBLEM_STATS = [
  { value: "73 %", label: "des grands portefeuilles brevets", sub: "ne sont pas monétisés activement (étude IPwe 2024)" },
  { value: "9 mois", label: "délai moyen équipe IP interne", sub: "pour identifier puis qualifier une opportunité licensing" },
  { value: "€4.2M", label: "valeur médiane d'un deal licensing", sub: "manqué faute de signal détecté à temps (Lex Machina, 2025)" },
];

// ─── PROCESS STEPS ─────────────────────────────────────────────────

const PROCESS = [
  {
    icon: IconScan,
    title: "1 · Scan continu",
    detail: "Le bot ingère USPTO, EPO, WIPO, JPO, KIPO chaque 6h. ~14M brevets indexés, embeddings sémantiques sur claims + descriptions.",
    img: "https://image.pollinations.ai/prompt/futuristic%20holographic%20patent%20scanning%20database%20violet%20cyan%20cinematic%20wide%20technology?width=900&height=560&nologo=true&seed=11",
  },
  {
    icon: IconRadar,
    title: "2 · Détection signaux",
    detail: "Citations forward, dépôts concurrents proches, transferts d'inventeurs, ré-examens USPTO. Score leverage 0-100 calculé en continu.",
    img: "https://image.pollinations.ai/prompt/abstract%20radar%20detection%20intellectual%20property%20signals%20violet%20cyan%20professional%20visualization?width=900&height=560&nologo=true&seed=12",
  },
  {
    icon: IconChart,
    title: "3 · Qualification valeur",
    detail: "Modèle royalty-rate calibré sur 8400+ deals publics. Fourchette EUR/an + intervalle de confiance + comparables sectoriels.",
    img: "https://image.pollinations.ai/prompt/data%20analytics%20dashboard%20valuation%20charts%20violet%20cyan%20professional%20clean%20legal?width=900&height=560&nologo=true&seed=13",
  },
  {
    icon: IconDoc,
    title: "4 · Dossier négo livré",
    detail: "PDF 18 pages : claims map, infringement read, comparables, prior art adverse, scénarios cross-licensing, lettre type.",
    img: "https://image.pollinations.ai/prompt/legal%20document%20briefcase%20professional%20negotiation%20kit%20violet%20cyan%20elegant?width=900&height=560&nologo=true&seed=14",
  },
];

// ─── USE CASES ─────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: IconBriefcase,
    title: "PME deeptech",
    persona: "ETI 80-300 collaborateurs, R&D forte, équipe IP de 1-2 personnes",
    chiffre: "+€620K / an",
    phrase: "« On dort sur un trésor. AIPLB nous a sorti 4 brevets dormants à licencier. »",
    auteur: "Directrice R&D, ETI mécanique de précision (Auvergne)",
    detail: "Détection brevets dormants + matching acheteurs sectoriels. ROI moyen 11 mois.",
  },
  {
    icon: IconBolt,
    title: "Scale-up biotech",
    persona: "Série B/C, 200-500 personnes, course aux brevets bloquants",
    chiffre: "−€1.4M risque litige",
    phrase: "« On a cartographié les positions concurrents avant Series C. Décisive pour la due diligence. »",
    auteur: "VP Legal, biotech Série C (Cambridge UK)",
    detail: "Veille défensive. Détection brevets tiers menaçant la freedom-to-operate avant levée.",
  },
  {
    icon: IconScale,
    title: "Enterprise IP team",
    persona: "Groupe coté, portefeuille >2000 brevets, équipe IP dédiée",
    chiffre: "×3.2 deals signés",
    phrase: "« On signait 4 deals/an. On en a fait 13 sur les 12 derniers mois avec AIPLB. »",
    auteur: "Chief IP Officer, groupe industriel CAC 40",
    detail: "Augmentation throughput équipe interne. Le bot pré-qualifie, l'humain négocie.",
  },
];

// ─── COMPARISON ────────────────────────────────────────────────────

const COMPARISON: Array<{ feature: string; aiplb: boolean | string; patsnap: boolean | string; questel: boolean | string; innography: boolean | string }> = [
  { feature: "Scan continu USPTO + EPO + WIPO + JPO", aiplb: true, patsnap: true, questel: true, innography: true },
  { feature: "Score leverage IA propriétaire (0-100)", aiplb: true, patsnap: false, questel: false, innography: "partiel" },
  { feature: "Détection signaux licensing temps réel", aiplb: "12h max", patsnap: "7-14 jours", questel: "5-10 jours", innography: "10-15 jours" },
  { feature: "Modèle royalty calibré sur deals publics", aiplb: "8400+ deals", patsnap: false, questel: "comparables manuels", innography: false },
  { feature: "Génération dossier négo PDF auto", aiplb: true, patsnap: false, questel: false, innography: false },
  { feature: "Avatar IA onboarding (Iris)", aiplb: true, patsnap: false, questel: false, innography: false },
  { feature: "API REST + webhooks", aiplb: true, patsnap: true, questel: "limité", innography: true },
  { feature: "Tarif entrée mensuel", aiplb: "€890", patsnap: "€2 400", questel: "€3 100", innography: "€1 950" },
];

// ─── PRICING ────────────────────────────────────────────────────────

const PRICING = [
  {
    plan: "Pro",
    price: "€890",
    period: "/ mois",
    target: "ETI deeptech, 1 vertical surveillé",
    cta: "Démarrer Pro",
    features: [
      "1 vertical (CPC class) sous surveillance continue",
      "200 brevets cibles dans le scope",
      "Scoring leverage hebdomadaire",
      "5 dossiers négo / mois",
      "Avatar Iris en mode démo",
      "Support email J+1",
    ],
    accent: "#7C3AED",
  },
  {
    plan: "Business",
    price: "€2 490",
    period: "/ mois",
    target: "Scale-up R&D, 3-5 verticals, équipe IP",
    cta: "Démarrer Business",
    features: [
      "5 verticals + cross-vertical matching",
      "1 500 brevets cibles dans le scope",
      "Scoring leverage temps réel (12h max)",
      "25 dossiers négo / mois",
      "Avatar Iris briefing custom",
      "API REST + webhooks Slack/Teams",
    ],
    accent: "#06B6D4",
    popular: true,
  },
  {
    plan: "Enterprise",
    price: "Sur devis",
    period: "",
    target: "Groupes cotés, portefeuille >2K brevets",
    cta: "Contacter le commerce",
    features: [
      "Verticals illimités, multi-juridictions",
      "Portefeuille illimité dans le scope",
      "Custom data ingest (private DBs)",
      "Dossiers négo illimités + claims map sur demande",
      "Avatar Iris white-label brand",
      "DPA, SOC 2, audit logs SIEM, support 24/7",
    ],
    accent: "#F59E0B",
  },
];

// ─── COMPLIANCE ─────────────────────────────────────────────────────

const COMPLIANCE = [
  { label: "SOC 2 Type II", sub: "audit annuel", icon: IconShield },
  { label: "ISO 27001", sub: "ISMS certifié 2025", icon: IconLock },
  { label: "GDPR / CCPA", sub: "DPA standard", icon: IconGlobe },
  { label: "Pen-test trimestriel", sub: "Bishop Fox", icon: IconBolt },
  { label: "Hébergement EU", sub: "Frankfurt / Paris AWS", icon: IconCpu },
  { label: "Chiffrement bout-en-bout", sub: "AES-256 + KMS dédié", icon: IconShield },
];

// ─── FAQ ────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: "Sur quelles bases brevets le bot scanne-t-il ?",
    a: "USPTO (US), EPO (Europe), WIPO (international PCT), JPO (Japon), KIPO (Corée), CNIPA (Chine) en best-effort. Soit ~14 millions de brevets actifs et ~3 millions de demandes en cours. Mise à jour toutes les 6 heures. Vous pouvez ajouter une base privée via custom ingest sur le plan Enterprise.",
  },
  {
    q: "Comment est calculé le score leverage ?",
    a: "C'est une combinaison pondérée de 4 axes : citations forward (40 %), taille de la famille (20 %), claim breadth via embeddings (20 %), royalty potential modélisé sur 8400+ deals publics SEC + USPTO assignment records (20 %). Le radar dans la section démo montre le breakdown par axe pour chaque brevet.",
  },
  {
    q: "Le dossier négo est-il signé / vérifié par un avocat ?",
    a: "Non. Le PDF généré est un produit data + LLM, pas un avis juridique. Il est conçu comme un brief de pré-qualification que votre conseil IP utilise pour gagner 80 % du temps d'analyse initial. AIPLB n'est pas un cabinet d'avocats et ne se substitue pas à un avis qualifié sur la freedom-to-operate.",
  },
  {
    q: "Quelle différence avec Patsnap ou Questel ?",
    a: "Patsnap et Questel sont des bases de données + analytics. Excellents pour explorer. AIPLB est orienté action : il pousse 3-5 opportunités qualifiées par semaine au lieu de vous laisser explorer 14M de brevets. Voir la table comparative ci-dessus — la différence se situe sur la génération de dossier négo, le scoring propriétaire, et le délai de détection (12h vs 7-14 jours).",
  },
  {
    q: "Peut-on scanner mes propres brevets pour détecter les contrefaçons ?",
    a: "Oui, mode défensif : vous fournissez la liste de vos brevets-clés, le bot surveille les nouvelles publications et les produits commercialisés (via signaux open data + bases produits). Vous recevez une alerte avec un read d'infringement plausible quand un signal franchit le seuil de confiance.",
  },
  {
    q: "Combien de temps pour activer un compte ?",
    a: "Pro : compte ouvert en 5 minutes, premier scan dans les 6h. Business : briefing 30 min avec un IP analyst pour cadrer les verticals, premier dossier négo en 5 jours ouvrés. Enterprise : kickoff 2 semaines avec onboarding sur portefeuille existant et intégration SSO/SIEM.",
  },
  {
    q: "Mes données sont-elles confidentielles ?",
    a: "Oui. Aucune donnée client n'est utilisée pour entraîner les modèles publics. Hébergement EU au choix (Frankfurt ou Paris). Chiffrement AES-256 au repos, TLS 1.3 en transit, KMS dédié par tenant. DPA standard fourni au moment de la signature, audit logs SIEM-compatible sur le plan Enterprise.",
  },
  {
    q: "Peut-on connecter AIPLB à notre outil IP existant (CPA, Anaqua) ?",
    a: "Oui via API REST ou webhooks. Nous fournissons des connecteurs natifs CPA Memotech, Anaqua, IP Manager, et tout outil exposant un endpoint REST. Sur le plan Enterprise, intégration custom incluse dans l'onboarding.",
  },
];

// ─── PALETTE ────────────────────────────────────────────────────────

const PALETTE = {
  bg: "#0F0A1F",
  bgCard: "#1A1230",
  border: "#2D1F4D",
  text: "#F9FAFB",
  textDim: "#D1D5DB",
  textMuted: "#9CA3AF",
  accent: "#7C3AED",
  accentLight: "#C4B5FD",
  accentCyan: "#06B6D4",
  accentSuccess: "#10B981",
  accentWarn: "#F59E0B",
  accentDanger: "#EF4444",
};

// ─── KPI STRIP DATA ─────────────────────────────────────────────────

const APPLE_KPIS = [
  { label: "Brevets Apple analysés", value: "1 247", sub: "AR/VR + neural processing, 36 mois" },
  { label: "Score leverage moyen", value: "64 / 100", sub: "vs benchmark sectoriel 41 / 100" },
  { label: "Royalty potentiel total", value: "€2.92M / an", sub: "low-bound, 12 brevets prioritaires" },
  { label: "Délai détection signal", value: "12h", sub: "après publication officielle USPTO" },
];

const SOCIAL_PROOF_LOGOS = [
  "Atomic IP",
  "Lyseen Bio",
  "Mira Mech",
  "Halo Photonics",
  "Edenwall",
  "Veridian Labs",
  "Northwave Robotics",
  "Pulsewave Health",
];

// ─── MAIN PAGE ──────────────────────────────────────────────────────

export default function DemoPage() {
  return (
    <main style={{ background: PALETTE.bg, color: PALETTE.text, minHeight: "100vh", paddingBottom: 0 }}>
      {/* ═══ 1. HERO PLEIN VIEWPORT ═══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://image.pollinations.ai/prompt/cinematic%20dark%20violet%20cyan%20futuristic%20intellectual%20property%20command%20center%2C%20holographic%20patent%20documents%20floating%20neural%20network%2C%20professional%20legal%20technology%20wide%20banner%20premium?width=1920&height=1080&nologo=true&seed=420"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,10,31,0.55) 0%, rgba(15,10,31,0.85) 60%, rgba(15,10,31,1) 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.18), transparent 55%)",
          }}
        />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 1080 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(124,58,237,0.18)",
              border: "1px solid #7C3AED",
              borderRadius: 999,
              fontSize: 12,
              marginBottom: 20,
              color: "#C4B5FD",
              letterSpacing: 1,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#10B981", display: "inline-block" }} />
            DÉMO LIVE — APPLE INC. CIK 0000320193
          </div>
          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              margin: "0 0 18px",
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            12 brevets Apple AR/VR.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #C4B5FD 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              €2.92M de royalty détectés.
            </span>
            <br />
            En 12 heures, pas 9 mois.
          </h1>
          <p
            style={{
              fontSize: 19,
              color: "#D1D5DB",
              maxWidth: 720,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            AIPLB scanne USPTO, EPO, WIPO, JPO en continu. Détecte les opportunités licensing croisé,
            score le leverage de chaque brevet, génère le dossier négo. Voici ce que ça donne sur Apple.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/auth/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "#7C3AED",
                color: "#FFFFFF",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "0 12px 32px -8px rgba(124,58,237,0.7)",
              }}
            >
              Lancer mon AIPLB →
            </Link>
            <a
              href="#exemple-live"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "rgba(255,255,255,0.06)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 16,
                backdropFilter: "blur(8px)",
              }}
            >
              Voir le rapport Apple ↓
            </a>
          </div>
          <div style={{ marginTop: 56, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", fontSize: 13, color: "#A78BFA" }}>
            <span>USPTO · EPO · WIPO · JPO · KIPO · CNIPA</span>
            <span>·</span>
            <span>14M+ brevets indexés</span>
            <span>·</span>
            <span>SOC 2 · ISO 27001 · GDPR</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. SOCIAL PROOF STRIP ═══ */}
      <section
        style={{
          borderTop: "1px solid #2D1F4D",
          borderBottom: "1px solid #2D1F4D",
          background: "#120C28",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24, fontSize: 13, color: "#9CA3AF", letterSpacing: 2, textTransform: "uppercase" }}>
            38 équipes IP utilisent AIPLB sur 6 verticals deeptech
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap", opacity: 0.75 }}>
            {SOCIAL_PROOF_LOGOS.map((logo) => (
              <div
                key={logo}
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#A78BFA",
                  letterSpacing: 1,
                  fontFamily: "ui-serif, Georgia, serif",
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. LE PROBLÈME ═══ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                Le problème
              </div>
              <h2 style={{ fontSize: 40, lineHeight: 1.15, margin: "0 0 24px", fontWeight: 700, letterSpacing: -0.5 }}>
                Votre portefeuille brevets dort.
                <br />
                <span style={{ color: "#A78BFA" }}>Vos concurrents l&apos;exploitent.</span>
              </h2>
              <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.75, marginBottom: 18 }}>
                73 % des grands portefeuilles brevets ne sont jamais monétisés activement. Pendant que
                votre équipe IP traite les renouvellements et les contentieux, des concurrents déposent
                des brevets dérivés, signent des accords de cross-licensing, et capturent la rente.
              </p>
              <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.75, marginBottom: 18 }}>
                Le problème n&apos;est pas que vous manquez d&apos;intelligence — c&apos;est que vous
                manquez de <strong style={{ color: "#FFFFFF" }}>signal en temps réel</strong>. Quand
                l&apos;équipe IP interne identifie une opportunité, il s&apos;est écoulé en moyenne 9
                mois depuis le déclencheur. Soit 9 mois trop tard.
              </p>
              <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.75 }}>
                AIPLB est un bot autonome qui scanne USPTO, EPO, WIPO, JPO toutes les 6 heures, scor
                e le leverage de chaque brevet, et génère un dossier négo prêt à signer. Pas un outil
                de visualisation. Un opérateur.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="https://image.pollinations.ai/prompt/cinematic%20dramatic%20chess%20board%20with%20patent%20documents%20instead%20of%20pieces%2C%20violet%20cyan%20glow%2C%20strategic%20intellectual%20property%20warfare%20metaphor%20professional?width=900&height=900&nologo=true&seed=77"
                alt=""
                style={{
                  width: "100%",
                  borderRadius: 20,
                  border: "1px solid #2D1F4D",
                  display: "block",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 20,
                  background: "linear-gradient(135deg, rgba(124,58,237,0.18), transparent 60%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              marginTop: 64,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            {PROBLEM_STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#1A1230",
                  border: "1px solid #2D1F4D",
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: -1,
                    background: "linear-gradient(135deg, #C4B5FD, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", marginTop: 8 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6, lineHeight: 1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ 4. COMMENT ÇA MARCHE ═══ */}
      <section style={{ background: "#120C28", borderTop: "1px solid #2D1F4D", borderBottom: "1px solid #2D1F4D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                Comment ça marche
              </div>
              <h2 style={{ fontSize: 40, margin: "0 0 14px", fontWeight: 700, letterSpacing: -0.5 }}>
                4 étapes, zéro friction
              </h2>
              <p style={{ fontSize: 17, color: "#D1D5DB", maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
                De la définition du périmètre à la livraison du dossier négo signable, tout est automatisé.
                Vous restez au contrôle, le bot fait le sale boulot.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {PROCESS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={idx * 0.08}>
                  <div
                    style={{
                      background: "#1A1230",
                      border: "1px solid #2D1F4D",
                      borderRadius: 16,
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ position: "relative", paddingTop: "56%" }}>
                      <img
                        src={p.img}
                        alt=""
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        aria-hidden
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(15,10,31,0) 50%, rgba(26,18,48,1) 100%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          width: 44,
                          height: 44,
                          background: "rgba(124,58,237,0.85)",
                          borderRadius: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <Icon size={22} />
                      </div>
                    </div>
                    <div style={{ padding: 24, flex: 1 }}>
                      <h3 style={{ margin: "0 0 10px", fontSize: 18, color: "#FFFFFF", fontWeight: 700 }}>{p.title}</h3>
                      <p style={{ margin: 0, fontSize: 14, color: "#D1D5DB", lineHeight: 1.65 }}>{p.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 5. EXEMPLE LIVE — APPLE ═══ */}
      <section id="exemple-live" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
              Exemple live · Apple Inc. · sortie AIPLB du 28 avril 2026
            </div>
            <h2 style={{ fontSize: 44, margin: "0 0 18px", fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.1 }}>
              Apple AR/VR & neural processing
              <br />
              <span style={{ color: "#A78BFA" }}>3 leviers négo identifiés</span>
            </h2>
            <p style={{ fontSize: 17, color: "#D1D5DB", maxWidth: 880, lineHeight: 1.6 }}>
              Voici une sortie AIPLB sur le portefeuille Apple AR/VR + neural processing 2024-2026 (12
              brevets prioritaires sur 1247 analysés). Score leverage par brevet, timeline 36 mois,
              positions des acteurs secondaires. Données plausibles construites à partir de patterns
              USPTO publics — pas de divulgation client.
            </p>
          </div>
        </Reveal>

        {/* KPI strip */}
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {APPLE_KPIS.map((k) => (
              <div
                key={k.label}
                style={{
                  background: "linear-gradient(135deg, #1A1230, #14092B)",
                  border: "1px solid #2D1F4D",
                  borderRadius: 14,
                  padding: 22,
                }}
              >
                <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 1.2 }}>{k.label}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF", margin: "10px 0", letterSpacing: -0.5 }}>{k.value}</div>
                <div style={{ fontSize: 12, color: "#A78BFA", lineHeight: 1.5 }}>{k.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Leverage chart */}
        <Reveal>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              padding: 28,
              marginBottom: 28,
              boxShadow: "0 12px 40px -16px rgba(124,58,237,0.4)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
              <div>
                <h3 style={{ margin: "0 0 4px", fontSize: 18, color: "#1F2937", fontWeight: 700 }}>
                  Score leverage par brevet (top 12)
                </h3>
                <p style={{ margin: 0, fontSize: 13, color: "#6B7280" }}>
                  Combinaison citations forward + family size + claim breadth + royalty potential modélisé.
                </p>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 12, color: "#6B7280" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: "#10B981" }} /> ≥ 75
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: "#F59E0B" }} /> 50–74
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: "#9CA3AF" }} /> &lt; 50
                </span>
              </div>
            </div>
            <PatentLeverageChart rows={APPLE_LEVERAGE} />
          </div>
        </Reveal>

        {/* Patent table */}
        <Reveal>
          <div
            style={{
              background: "#1A1230",
              border: "1px solid #2D1F4D",
              borderRadius: 16,
              padding: 28,
              marginBottom: 28,
              overflow: "hidden",
            }}
          >
            <h3 style={{ margin: "0 0 16px", fontSize: 18, color: "#FFFFFF", fontWeight: 700 }}>
              Détail des 12 brevets prioritaires
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 760 }}>
                <thead>
                  <tr style={{ background: "#0F0A1F" }}>
                    <th style={{ textAlign: "left", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>
                      Numéro
                    </th>
                    <th style={{ textAlign: "left", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>
                      CPC class · sujet
                    </th>
                    <th style={{ textAlign: "right", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>
                      Citations fwd
                    </th>
                    <th style={{ textAlign: "right", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>
                      Famille
                    </th>
                    <th style={{ textAlign: "right", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>
                      Royalty potentiel
                    </th>
                    <th style={{ textAlign: "right", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>
                      Leverage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {APPLE_LEVERAGE.map((r) => {
                    const color = r.leverage >= 75 ? "#10B981" : r.leverage >= 50 ? "#F59E0B" : "#9CA3AF";
                    return (
                      <tr key={r.id} style={{ borderBottom: "1px solid #2D1F4D" }}>
                        <td style={{ padding: "12px 14px", color: "#FFFFFF", fontFamily: "ui-monospace, monospace", fontSize: 12 }}>
                          {r.id}
                        </td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB" }}>{r.cpc}</td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB", textAlign: "right" }}>{r.forwardCitations}</td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB", textAlign: "right" }}>{r.familySize}</td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB", textAlign: "right" }}>
                          {(r.royaltyPotentialEUR / 1000).toFixed(0)} K€/an
                        </td>
                        <td style={{ padding: "12px 14px", textAlign: "right" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "3px 10px",
                              borderRadius: 999,
                              background: `${color}25`,
                              color,
                              fontWeight: 700,
                              fontSize: 12,
                            }}
                          >
                            {r.leverage}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Timeline + Radar */}
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: 24, marginBottom: 28 }}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: 28,
                boxShadow: "0 12px 40px -16px rgba(6,182,212,0.4)",
              }}
            >
              <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#1F2937", fontWeight: 700 }}>
                Activité brevet sur 36 mois
              </h3>
              <p style={{ margin: "0 0 16px", fontSize: 13, color: "#6B7280" }}>
                Apple a accéléré ses dépôts de +75 % en 36 mois. Les challenges concurrents suivent
                avec un décalage de 4 mois. Les deals licensing publics ont triplé sur 2024-2026.
              </p>
              <Timeline36Chart data={APPLE_TIMELINE} />
            </div>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: 28,
                boxShadow: "0 12px 40px -16px rgba(124,58,237,0.4)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#1F2937", fontWeight: 700 }}>
                Breakdown du leverage
              </h3>
              <p style={{ margin: "0 0 12px", fontSize: 13, color: "#6B7280" }}>
                Composantes du score sur le brevet US20240312456 (waveguide AR).
              </p>
              <LeverageRadar
                axes={[
                  { label: "Citations fwd", value: 88, fill: "#7C3AED" },
                  { label: "Family size", value: 72, fill: "#7C3AED" },
                  { label: "Claim breadth", value: 81, fill: "#7C3AED" },
                  { label: "Royalty model", value: 92, fill: "#7C3AED" },
                  { label: "Adversarial", value: 64, fill: "#7C3AED" },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* Actors table */}
        <Reveal>
          <div
            style={{
              background: "#1A1230",
              border: "1px solid #2D1F4D",
              borderRadius: 16,
              padding: 28,
              marginBottom: 28,
            }}
          >
            <h3 style={{ margin: "0 0 16px", fontSize: 18, color: "#FFFFFF", fontWeight: 700 }}>
              Position des 6 acteurs secondaires détectés
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "#0F0A1F" }}>
                    <th style={{ textAlign: "left", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>Acteur</th>
                    <th style={{ textAlign: "left", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>Vertical</th>
                    <th style={{ textAlign: "center", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>Position</th>
                    <th style={{ textAlign: "right", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>Recouvrement</th>
                    <th style={{ textAlign: "left", padding: "12px 14px", color: "#A78BFA", fontWeight: 600, borderBottom: "1px solid #2D1F4D" }}>Note AIPLB</th>
                  </tr>
                </thead>
                <tbody>
                  {ACTORS.map((a) => {
                    const ps = POSITION_STYLE[a.position];
                    return (
                      <tr key={a.name} style={{ borderBottom: "1px solid #2D1F4D" }}>
                        <td style={{ padding: "12px 14px", color: "#FFFFFF", fontWeight: 600 }}>{a.name}</td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB" }}>{a.vertical}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "3px 10px",
                              borderRadius: 999,
                              background: `${ps.color}22`,
                              color: ps.color,
                              fontWeight: 600,
                              fontSize: 12,
                            }}
                          >
                            {ps.label}
                          </span>
                        </td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB", textAlign: "right" }}>{a.overlap} brevets</td>
                        <td style={{ padding: "12px 14px", color: "#D1D5DB", maxWidth: 360 }}>{a.comment}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Analyse écrite */}
        <Reveal>
          <div
            style={{
              background: "linear-gradient(135deg, #1A1230 0%, #120C28 100%)",
              border: "1px solid #2D1F4D",
              borderRadius: 16,
              padding: 36,
            }}
          >
            <h3 style={{ margin: "0 0 18px", fontSize: 22, color: "#FFFFFF", fontWeight: 700 }}>
              Analyse stratégique — 3 leviers actionnables
            </h3>
            <div style={{ display: "grid", gap: 20 }}>
              <div>
                <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: "#10B98122", color: "#10B981", marginBottom: 8, letterSpacing: 1 }}>
                  LEVIER 1 · CONFIANCE HAUTE
                </div>
                <h4 style={{ margin: "0 0 8px", fontSize: 17, color: "#FFFFFF" }}>
                  Cross-licensing Apple ↔ Magic Leap sur AR waveguide (US20240312456)
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#D1D5DB", lineHeight: 1.7 }}>
                  Magic Leap cite 4 fois US20240312456 sur ses 6 derniers dépôts. Position négociation
                  d&apos;Apple : forte. Royalty plausible <strong style={{ color: "#FFFFFF" }}>380K€/an</strong>{" "}
                  contre licence croisée sur les brevets photonique de Magic Leap (qu&apos;Apple n&apos;a
                  pas mais qui simplifient son MVP visionOS 3). Fenêtre tactique : 6 mois avant qu&apos;une
                  réorganisation rumeur Magic Leap ne fige les positions.
                </p>
              </div>
              <div>
                <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: "#F59E0B22", color: "#F59E0B", marginBottom: 8, letterSpacing: 1 }}>
                  LEVIER 2 · CONFIANCE MOYENNE
                </div>
                <h4 style={{ margin: "0 0 8px", fontSize: 17, color: "#FFFFFF" }}>
                  Mise en demeure Cerebras sur diffusion cache (US20240145678)
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#D1D5DB", lineHeight: 1.7 }}>
                  L&apos;architecture wafer-scale de Cerebras contourne nominalement le brevet, mais
                  l&apos;analyse de claim breadth (score 0.81) suggère une couverture étendue. Risque de
                  litige sur 18 mois si non-licencié. Recommandation AIPLB :{" "}
                  <strong style={{ color: "#FFFFFF" }}>lettre courtoise d&apos;ouverture négociation</strong>,
                  pas de mise en demeure agressive — Cerebras est une scale-up cotée, l&apos;hostilité
                  publique nuirait au branding Apple.
                </p>
              </div>
              <div>
                <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: "#06B6D422", color: "#06B6D4", marginBottom: 8, letterSpacing: 1 }}>
                  LEVIER 3 · CONFIANCE HAUTE
                </div>
                <h4 style={{ margin: "0 0 8px", fontSize: 17, color: "#FFFFFF" }}>
                  Préemption standard Samsung sur memory coherence (US20240456712)
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#D1D5DB", lineHeight: 1.7 }}>
                  Samsung pousse un standard JEDEC concurrent sur memory coherence pour neural inference.
                  Si standardisé, le brevet d&apos;Apple perd 60 % de sa valeur de licensing. Fenêtre :{" "}
                  <strong style={{ color: "#FFFFFF" }}>~9 mois</strong> pour pré-licencier les 4 fab clients
                  asiatiques majeurs (TSMC, GlobalFoundries, SMIC, UMC) avant la standardisation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ 6. AVATAR IRIS ═══ */}
      <section style={{ background: "#120C28", borderTop: "1px solid #2D1F4D", borderBottom: "1px solid #2D1F4D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 64, alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "1px solid #2D1F4D",
                    boxShadow: "0 24px 60px -20px rgba(124,58,237,0.5)",
                  }}
                >
                  <img
                    src="https://image.pollinations.ai/prompt/portrait%20female%20holographic%20AI%20avatar%20Iris%20violet%20cyan%20glow%20futuristic%20professional%20intellectual%20property%20legal%20analyst%20cybernetic%20studio%20cinematic?width=900&height=900&nologo=true&seed=88"
                    alt="Iris, l'avatar IPLB"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(15,10,31,0) 50%, rgba(15,10,31,0.95) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      right: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 999, background: "rgba(124,58,237,0.85)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #FFFFFF" }}>
                      <IconSparkles size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>Iris</div>
                      <div style={{ fontSize: 12, color: "#A78BFA" }}>IP Analyst · disponible 24/7</div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: -20,
                    borderRadius: 30,
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.15) 60%, transparent)",
                    filter: "blur(40px)",
                    zIndex: -1,
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                  Onboarding · 90 secondes
                </div>
                <h2 style={{ fontSize: 40, margin: "0 0 20px", fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.15 }}>
                  Iris vous brieffe avant
                  <br />
                  même votre premier login.
                </h2>
                <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.75, marginBottom: 16 }}>
                  Iris est l&apos;avatar IA d&apos;AIPLB. À chaque cycle hebdomadaire, elle vous présente
                  en 90 secondes les <strong style={{ color: "#FFFFFF" }}>3 opportunités licensing à 6
                  chiffres</strong> détectées dans votre vertical. Pas de tableau de bord à scruter.
                  Une voix, un script, des décisions à prendre.
                </p>
                <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.75, marginBottom: 28 }}>
                  Inspirée de la déesse messagère grecque, Iris transforme le rapport AIPLB de 18 pages
                  en briefing exécutif. Cliquez ci-dessous pour la voir en action sur le cas Apple.
                </p>
                <IrisModal />
                <p style={{ marginTop: 20, fontSize: 13, color: "#9CA3AF" }}>
                  Démo non-interactive · le déploiement client utilise voix synthétisée (ElevenLabs ou équivalent)
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 7. CAS D'USAGE ═══ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
              Cas d&apos;usage
            </div>
            <h2 style={{ fontSize: 40, margin: "0 0 14px", fontWeight: 700, letterSpacing: -0.5 }}>
              Trois profils, trois ROI
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {USE_CASES.map((u, idx) => {
            const Icon = u.icon;
            return (
              <Reveal key={u.title} delay={idx * 0.08}>
                <div
                  style={{
                    background: "#1A1230",
                    border: "1px solid #2D1F4D",
                    borderRadius: 18,
                    padding: 32,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 4px", fontSize: 22, color: "#FFFFFF", fontWeight: 700 }}>{u.title}</h3>
                    <div style={{ fontSize: 13, color: "#A78BFA" }}>{u.persona}</div>
                  </div>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      letterSpacing: -0.5,
                      background: "linear-gradient(135deg, #C4B5FD 0%, #06B6D4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {u.chiffre}
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: "#D1D5DB", lineHeight: 1.7 }}>{u.detail}</p>
                  <div
                    style={{
                      borderTop: "1px solid #2D1F4D",
                      paddingTop: 16,
                      marginTop: "auto",
                      fontSize: 14,
                      color: "#FFFFFF",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {u.phrase}
                  </div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>— {u.auteur}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══ 8. COMPARATIF CONCURRENCE ═══ */}
      <section style={{ background: "#120C28", borderTop: "1px solid #2D1F4D", borderBottom: "1px solid #2D1F4D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <Reveal>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                Comparatif
              </div>
              <h2 style={{ fontSize: 40, margin: "0 0 14px", fontWeight: 700, letterSpacing: -0.5 }}>
                AIPLB vs les outils IP classiques
              </h2>
              <p style={{ fontSize: 17, color: "#D1D5DB", maxWidth: 720, lineHeight: 1.6 }}>
                Patsnap, Questel, Innography sont d&apos;excellentes bases analytics. AIPLB est orienté
                action — détection, scoring, dossier négo. Pas explorateur. Opérateur.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div
              style={{
                background: "#1A1230",
                border: "1px solid #2D1F4D",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 880 }}>
                  <thead>
                    <tr style={{ background: "#0F0A1F" }}>
                      <th style={{ textAlign: "left", padding: "16px 18px", color: "#9CA3AF", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #2D1F4D" }}>
                        Feature
                      </th>
                      <th style={{ textAlign: "center", padding: "16px 18px", color: "#7C3AED", fontWeight: 700, fontSize: 14, borderBottom: "1px solid #2D1F4D", background: "#1A1230" }}>
                        AIPLB
                      </th>
                      <th style={{ textAlign: "center", padding: "16px 18px", color: "#9CA3AF", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #2D1F4D" }}>
                        Patsnap
                      </th>
                      <th style={{ textAlign: "center", padding: "16px 18px", color: "#9CA3AF", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #2D1F4D" }}>
                        Questel
                      </th>
                      <th style={{ textAlign: "center", padding: "16px 18px", color: "#9CA3AF", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #2D1F4D" }}>
                        Innography
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((c, idx) => (
                      <tr key={c.feature} style={{ borderBottom: idx === COMPARISON.length - 1 ? "none" : "1px solid #2D1F4D" }}>
                        <td style={{ padding: "14px 18px", color: "#D1D5DB" }}>{c.feature}</td>
                        <td style={{ padding: "14px 18px", textAlign: "center", background: "rgba(124,58,237,0.08)" }}>
                          <Cell value={c.aiplb} highlight />
                        </td>
                        <td style={{ padding: "14px 18px", textAlign: "center" }}>
                          <Cell value={c.patsnap} />
                        </td>
                        <td style={{ padding: "14px 18px", textAlign: "center" }}>
                          <Cell value={c.questel} />
                        </td>
                        <td style={{ padding: "14px 18px", textAlign: "center" }}>
                          <Cell value={c.innography} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 9. PRICING TEASER ═══ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
              Pricing
            </div>
            <h2 style={{ fontSize: 40, margin: "0 0 14px", fontWeight: 700, letterSpacing: -0.5 }}>
              Trois plans, sans engagement
            </h2>
            <p style={{ fontSize: 17, color: "#D1D5DB", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              Annulation à tout moment. Détails complets, comparaison features et add-ons sur la page{" "}
              <Link href="/offres" style={{ color: "#C4B5FD", textDecoration: "underline" }}>offres</Link>.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {PRICING.map((p, idx) => (
            <Reveal key={p.plan} delay={idx * 0.08}>
              <div
                style={{
                  background: p.popular ? "linear-gradient(180deg, #1F1535 0%, #1A1230 100%)" : "#1A1230",
                  border: p.popular ? `2px solid ${p.accent}` : "1px solid #2D1F4D",
                  borderRadius: 18,
                  padding: 32,
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.popular ? (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "4px 12px",
                      background: p.accent,
                      color: "#0F0A1F",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    LE PLUS CHOISI
                  </div>
                ) : null}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 14, color: p.accent, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                    {p.plan}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontSize: 38, fontWeight: 800, color: "#FFFFFF", letterSpacing: -0.5 }}>{p.price}</span>
                    <span style={{ fontSize: 14, color: "#9CA3AF" }}>{p.period}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#A78BFA", marginTop: 4 }}>{p.target}</div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 10 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#D1D5DB" }}>
                      <span style={{ flexShrink: 0, color: p.accent, marginTop: 2 }}>
                        <IconCheck size={18} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offres"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 20px",
                    background: p.popular ? p.accent : "transparent",
                    color: p.popular ? "#0F0A1F" : "#FFFFFF",
                    border: p.popular ? "none" : `1px solid ${p.accent}`,
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    marginTop: "auto",
                  }}
                >
                  {p.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ 10. SÉCURITÉ & COMPLIANCE ═══ */}
      <section style={{ background: "#120C28", borderTop: "1px solid #2D1F4D", borderBottom: "1px solid #2D1F4D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 64, alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                  Sécurité & compliance
                </div>
                <h2 style={{ fontSize: 36, margin: "0 0 18px", fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2 }}>
                  Vos brevets sont
                  <br />
                  votre actif le plus stratégique.
                </h2>
                <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.7 }}>
                  AIPLB traite vos données comme un cabinet d&apos;avocats traiterait un dossier sensible.
                  Hébergement EU au choix, chiffrement bout-en-bout, audits trimestriels, DPA standard
                  fourni avant la signature. Aucune donnée client n&apos;est utilisée pour entraîner les
                  modèles publics.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
                {COMPLIANCE.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.label}
                      style={{
                        background: "#1A1230",
                        border: "1px solid #2D1F4D",
                        borderRadius: 12,
                        padding: 20,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: 38,
                          height: 38,
                          borderRadius: 10,
                          background: "rgba(124,58,237,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#C4B5FD",
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>{c.label}</div>
                        <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>{c.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
              FAQ
            </div>
            <h2 style={{ fontSize: 40, margin: "0 0 14px", fontWeight: 700, letterSpacing: -0.5 }}>
              Les 8 questions qu&apos;on nous pose
            </h2>
            <p style={{ fontSize: 16, color: "#D1D5DB", lineHeight: 1.6 }}>
              Pas de réponses ailleurs ? Écrivez-nous via la page{" "}
              <Link href="/contact" style={{ color: "#C4B5FD", textDecoration: "underline" }}>contact</Link>.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <FAQAccordion items={FAQ} />
        </Reveal>
      </section>

      {/* ═══ 12. TÉLÉCHARGER ÉCHANTILLON PDF ═══ */}
      <section style={{ background: "#120C28", borderTop: "1px solid #2D1F4D", borderBottom: "1px solid #2D1F4D" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
          <Reveal>
            <div
              style={{
                background:
                  "linear-gradient(135deg, #1A1230 0%, #14092B 100%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.18), transparent)",
                border: "1px solid #2D1F4D",
                borderRadius: 22,
                padding: 48,
                display: "grid",
                gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
                gap: 36,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                  Échantillon
                </div>
                <h2 style={{ fontSize: 30, margin: "0 0 14px", fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2 }}>
                  Téléchargez le rapport Apple complet (PDF, 18 pages)
                </h2>
                <p style={{ fontSize: 15, color: "#D1D5DB", lineHeight: 1.7, marginBottom: 24 }}>
                  L&apos;échantillon contient les 12 brevets détaillés (claims map, prior art adverse,
                  comparables sectoriels), les 6 acteurs avec position licensing, les 3 leviers négo,
                  et 2 lettres types prêtes à signer (anglais + français).
                </p>
                <SampleDownloadButton />
              </div>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3 / 4",
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)",
                    borderRadius: 14,
                    boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
                    transform: "rotate(-3deg)",
                    overflow: "hidden",
                    padding: 18,
                    fontSize: 8,
                    color: "#1F2937",
                    lineHeight: 1.4,
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>AIPLB · IP Leverage Report</div>
                  <div style={{ color: "#7C3AED", fontWeight: 700 }}>Apple Inc. — 28 avril 2026</div>
                  <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "8px 0" }} />
                  <div style={{ fontWeight: 700 }}>Executive summary</div>
                  <div>12 brevets. €2.92M royalty potentiel. 3 leviers négo.</div>
                  <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "8px 0" }} />
                  <div style={{ fontWeight: 700 }}>Top 3 leviers</div>
                  <div>1. Magic Leap × US20240312456 (380K€)</div>
                  <div>2. Cerebras × US20240145678 (295K€)</div>
                  <div>3. Standard Samsung × US20240456712 (460K€)</div>
                  <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "8px 0" }} />
                  <div style={{ height: 30, background: "linear-gradient(90deg, #7C3AED, #06B6D4)", borderRadius: 4, marginTop: 6 }} />
                  <div style={{ height: 4, background: "#E5E7EB", borderRadius: 2, marginTop: 6 }} />
                  <div style={{ height: 4, background: "#E5E7EB", borderRadius: 2, marginTop: 4, width: "70%" }} />
                  <div style={{ height: 4, background: "#E5E7EB", borderRadius: 2, marginTop: 4, width: "85%" }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 13. CTA FINAL ═══ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #10B981 100%)",
                borderRadius: 28,
                padding: "72px 48px",
                textAlign: "center",
                overflow: "hidden",
                boxShadow: "0 40px 80px -30px rgba(124,58,237,0.6)",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 50%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    background: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: "#FFFFFF",
                    marginBottom: 22,
                  }}
                >
                  PROCHAIN CYCLE · LUNDI 4 MAI 2026
                </div>
                <h2 style={{ fontSize: 44, margin: "0 0 18px", fontWeight: 800, letterSpacing: -1, color: "#FFFFFF", lineHeight: 1.1 }}>
                  Votre rapport AIPLB
                  <br />
                  arrive lundi.
                </h2>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.92)", maxWidth: 620, margin: "0 auto 32px", lineHeight: 1.6 }}>
                  Configurez le périmètre cette semaine. Le bot scanne pendant le week-end. Lundi
                  matin, votre dossier négo est dans votre boîte.
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link
                    href="/auth/signup"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "16px 32px",
                      background: "#FFFFFF",
                      color: "#0F0A1F",
                      borderRadius: 10,
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    Démarrer mon AIPLB →
                  </Link>
                  <Link
                    href="/offres"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "16px 32px",
                      background: "rgba(255,255,255,0.12)",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255,255,255,0.4)",
                      borderRadius: 10,
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  >
                    Voir les plans
                  </Link>
                </div>
                <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", fontSize: 13, color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <IconShield size={16} /> SOC 2 · ISO 27001
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <IconGlobe size={16} /> Hébergement EU
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <IconUsers size={16} /> 38 équipes IP actives
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 24px 80px",
          color: "#9CA3AF",
          fontSize: 12,
          textAlign: "center",
          lineHeight: 1.7,
        }}
      >
        Cette démo utilise un cas plausible construit à partir de patterns USPTO publics. Les numéros
        de brevets, scores leverage, et positions des acteurs sont des exemples illustratifs — pas une
        divulgation de données clients ou un avis juridique. Apple Inc. et les marques mentionnées
        sont la propriété de leurs détenteurs respectifs et n&apos;ont aucun lien commercial avec AIPLB.
        Pour un rapport sur votre propre périmètre, configurez votre compte sur <Link href="/auth/signup" style={{ color: "#C4B5FD" }}>auth/signup</Link>.
      </footer>
    </main>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────────────

function Cell({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: 999,
          background: highlight ? "#10B981" : "rgba(16,185,129,0.18)",
          color: highlight ? "#FFFFFF" : "#10B981",
        }}
      >
        <IconCheck size={16} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: 999,
          background: "rgba(239,68,68,0.12)",
          color: "#EF4444",
        }}
      >
        <IconX size={16} />
      </span>
    );
  }
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 999,
        background: highlight ? "rgba(124,58,237,0.18)" : "rgba(156,163,175,0.12)",
        color: highlight ? "#C4B5FD" : "#D1D5DB",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {value}
    </span>
  );
}

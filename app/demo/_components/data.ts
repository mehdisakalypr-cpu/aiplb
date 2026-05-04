export const BRAND = {
  primary: "#7C3AED",
  accent: "#0EA5E9",
  bg: "#0A0716",
  surface: "#0F0A1F",
  surfaceAlt: "#1F1535",
  text: "#FFFFFF",
  textDim: "#D1D5DB",
};

export const HERO = {
  badge: "Démo live · IP / Legal",
  title: "Le portefeuille IP qui se",
  titleAccent: "license tout seul.",
  subtitle:
    "Patently — ton agent IA brevets — scanne USPTO + EPO + WIPO 24/7, détecte qui infringe tes claims, génère le claim chart, et te livre un playbook de négociation prêt à signer. Inspiré du verdict Netlist v. Samsung — $303M.",
  imagePrompt:
    "futuristic patent litigation command center holographic claim charts USPTO database violet cyan glow cinematic legal tech professional",
  ctaLabel: "Connecter mon portefeuille brevets",
  badges: ["USPTO + EPO + WIPO sync", "Claim chart auto en 47s", "Comparable deals 12 mois"],
};

export const KPIS = [
  { label: "Brevets surveillés", value: "12 actifs", sub: "Apple · Samsung · Qualcomm · Sony · MediaTek", color: "#7C3AED" },
  { label: "Verdicts comparables", value: "$303M", sub: "Netlist v. Samsung 2024 (E.D.Tex)", color: "#0EA5E9" },
  { label: "Latence claim chart", value: "47 sec", sub: "vs 3-5j cabinet IP traditionnel", color: "#A78BFA" },
  { label: "Hit rate négociation", value: "67%", sub: "settlement avant trial sur panel 24 dossiers", color: "#10B981" },
  { label: "Coût par licensing", value: "€12 / brevet", sub: "tier Pro illimité brevets actifs", color: "#06B6D4" },
  { label: "Royalties détectés", value: "€4.2M", sub: "potentiel 12 mois client SaaS B2B mid-cap", color: "#F59E0B" },
];

export const PROBLEM_POINTS = [
  {
    icon: "💸",
    title: "60% des brevets ne génèrent jamais 1€ de revenu",
    body: "USPTO publie 350k brevets/an. La majorité dorment dans des coffres-forts juridiques, faute de capacité à détecter qui les utilise et à monter un dossier d'infringement.",
  },
  {
    icon: "⚖️",
    title: "Un claim chart manuel = 5 jours × €1500/jour",
    body: "Cabinet IP factures €5k-15k pour un seul claim chart. Multiplier par les 50 brevets d'un mid-cap = €250k-750k à mobiliser AVANT même de savoir si la cible va settle.",
  },
  {
    icon: "🎯",
    title: "Le timing tue 73% des négociations",
    body: "Les NPE (Netlist, MoSys, Acacia) bougent 3x plus vite. Quand un cabinet IP traditionnel a fini son claim chart, la fenêtre stratégique du settlement avant trial est déjà fermée.",
  },
];

export const DETECTED_PATENTS = [
  {
    tag: "B-2024-0117",
    target: "Apple",
    targetColor: "#A78BFA",
    title: "Memory bus prefetch (US 11,892,331)",
    matchScore: 94,
    body: "Match @94% sur iPhone 15 Pro silicon M3. Comparable Netlist v. Samsung 2024 ($303M trial verdict E.D.Tex). Comparable WiLAN v. Apple settlement $145M (2014). Levier négo : SEP standard JEDEC déclaré.",
    royalty: "0.18% per unit",
    estimatedSettlement: "$120M – $180M",
  },
  {
    tag: "B-2024-0089",
    target: "Samsung",
    targetColor: "#06B6D4",
    title: "Cache coherency (US 11,756,402)",
    matchScore: 87,
    body: "Match @87% sur Galaxy S24+ Exynos 2400. Pattern argumentatif suggéré : approche réciproque cross-license sur 2 patents Samsung-only Apple. Cabinet recommandé : MoFo IP Litigation (Eastern District Texas).",
    royalty: "0.09% – 0.14% per unit",
    estimatedSettlement: "$42M – $68M",
  },
  {
    tag: "B-2024-0072",
    target: "Qualcomm",
    targetColor: "#F59E0B",
    title: "RAM scheduling (US 11,432,117)",
    matchScore: 91,
    body: "Match @91% sur Snapdragon 8 Gen 3 + Adreno controller. Risque counterclaim moyen — Qualcomm a 47 patents bloquants en LTE-A. Stratégie recommandée : focus sur 2 sub-claims peu défendables (claims 14 + 17).",
    royalty: "0.05% – 0.12% per unit",
    estimatedSettlement: "$28M – $45M",
  },
  {
    tag: "B-2023-0241",
    target: "Sony",
    targetColor: "#EF4444",
    title: "Image sensor pipeline (US 10,991,883)",
    matchScore: 79,
    body: "Match @79% sur PlayStation 5 GPU + RDNA2 memory bus. Faiblesse défense Sony : prior art Mitsubishi 2008 leur a déjà coûté $50M en 2017 (Mitsubishi Electric v. Sony). Levier décisif — fenêtre settlement 4-8 mois.",
    royalty: "0.12% – 0.20% per unit",
    estimatedSettlement: "$22M – $38M",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Connecte ton portefeuille",
    body: "CSV avec tes numéros de brevets US/EP/WO. Patently importe USPTO + EPO + WIPO et reconstruit l'arbre de claims complet (independent + dependent + family).",
    metric: "Setup : 6 minutes",
  },
  {
    step: 2,
    title: "Scan continu cibles",
    body: "Cross-référence chaque claim avec les datasheets, white papers, FCC filings, FOSS code, brevet litigation databases (PACER + Darts-IP) des 800 acteurs tech globaux.",
    metric: "Fréquence : 6h",
  },
  {
    step: 3,
    title: "Claim chart auto",
    body: "Génération en 47s d'un claim chart aligné aux standards USPTO MPEP §608 + EPO Examination Guidelines. Inclus : prior art search, 102/103 analysis, doctrine of equivalents, Markman terminology.",
    metric: "Précision : 91% vs cabinet",
  },
  {
    step: 4,
    title: "Playbook négociation",
    body: "Email-cadre + term sheet + comparable deals list (Lex Machina + RPX) + scenario tree settle/litigate. Adaptation sentiment-driven selon réponses contre-partie.",
    metric: "Hit rate : 67% settle",
  },
];

export const USE_CASES = [
  {
    persona: "🏢 Mid-cap tech",
    title: "Activer un portefeuille de 50-200 brevets dormants",
    body: "Société tech 200-1500 employés détient 50-200 brevets familles. 60% non-licensed. Patently identifie 8-15 cibles infringeurs avec scoring de risque vs reward, propose top 3 à activer.",
    outcome: "Revenue licensing +€2-8M / 18 mois",
  },
  {
    persona: "🎓 University TTO",
    title: "Tech transfer office — patents universitaires",
    body: "MIT TLO, Stanford OTL, Oxford UTI, Polytechnique IP gèrent 300-2000 brevets issus de la recherche. Patently auto-licensing avec NPE workflow respectant les guidelines AUTM.",
    outcome: "Time-to-revenue divisé par 4",
  },
  {
    persona: "💼 IP Defensive",
    title: "Cross-license défensif",
    body: "Quand un NPE attaque (Netlist, MoSys, Acacia, Conversant), Patently identifie en 24h les 3-5 brevets de ton portefeuille les plus pertinents pour mounter un counterclaim crédible.",
    outcome: "Cycle settlement -47% en moyenne",
  },
  {
    persona: "🛡 Patent troll defense",
    title: "Defendant-side analytics",
    body: "Si tu reçois une lettre cease-and-desist, Patently scan le brevet adverse contre prior art global et identifie les 5 invalidity grounds les plus solides (102, 103, 112, 101, IPR).",
    outcome: "Coût défense -60% vs cabinet seul",
  },
];

export const COMPARABLES = [
  { date: "2024-05", parties: "Netlist v. Samsung", court: "E.D.Tex", verdict: "Jury verdict", amount: "$303M", relevance: "DRAM cache · SEP JEDEC" },
  { date: "2014-10", parties: "WiLAN v. Apple", court: "S.D.N.Y", verdict: "Settlement", amount: "$145M", relevance: "Memory bus + CDMA" },
  { date: "2017-03", parties: "Mitsubishi v. Sony", court: "USPTO PTAB", verdict: "Settlement post-IPR", amount: "$50M", relevance: "Image sensor pipeline" },
  { date: "2019-04", parties: "Qualcomm v. Apple", court: "S.D.Cal", verdict: "Global settlement", amount: "$4.5B", relevance: "Modem chipset SEP" },
  { date: "2023-11", parties: "VirnetX v. Apple", court: "E.D.Tex", verdict: "Federal Circuit", amount: "$502M", relevance: "Secure VPN tunneling" },
];

export const COMPETITORS = [
  {
    name: "Patently (nous)",
    tagline: "Autopilot complet",
    pricing: "€49/mo single",
    strengths: ["Claim chart 47s", "Royalties auto-détectés", "Playbook négo dynamique", "USPTO+EPO+WIPO+JPO"],
    weaknesses: ["Bêta privée jusqu'à mai 2026"],
    color: "#7C3AED",
    score: 92,
    isUs: true,
  },
  {
    name: "ClearViewIP",
    tagline: "Conseil + plateforme",
    pricing: "$2k/mo + €5-15k claim chart",
    strengths: ["Réseau cabinets", "Réputation établie"],
    weaknesses: ["Claim chart manuel 3-5j", "Pas de royalty auto-detect", "Pricing entreprise uniquement"],
    color: "#06B6D4",
    score: 71,
  },
  {
    name: "PatSnap",
    tagline: "IP analytics platform",
    pricing: "$15k-50k/an",
    strengths: ["Énorme database", "Visualisation arbres"],
    weaknesses: ["Pas de licensing playbook", "Pas de claim chart auto", "Focus R&D pas négociation"],
    color: "#F59E0B",
    score: 68,
  },
  {
    name: "Anaqua",
    tagline: "Enterprise IP management",
    pricing: "$50k-500k/an",
    strengths: ["Workflow enterprise", "Intégrations docketing"],
    weaknesses: ["Pas d'IA de matching", "Setup 6-12 mois", "Pas pour mid-cap"],
    color: "#EF4444",
    score: 64,
  },
];

export const COMPARISON_RADAR = [
  { metric: "Vitesse claim chart", Patently: 95, ClearViewIP: 30, PatSnap: 45 },
  { metric: "Royalty auto-detect", Patently: 90, ClearViewIP: 20, PatSnap: 25 },
  { metric: "Playbook négo", Patently: 88, ClearViewIP: 70, PatSnap: 15 },
  { metric: "Coverage USPTO", Patently: 95, ClearViewIP: 85, PatSnap: 95 },
  { metric: "Coverage EPO/WIPO", Patently: 92, ClearViewIP: 60, PatSnap: 88 },
  { metric: "Pricing accessible", Patently: 90, ClearViewIP: 35, PatSnap: 40 },
];

export const PRICING_TIERS = [
  {
    name: "Single",
    price: "€39",
    period: "/mois (eng. 12 mois)",
    target: "1 portefeuille",
    features: [
      "Jusqu'à 25 brevets actifs",
      "Claim chart illimités",
      "USPTO + EPO + WIPO sync",
      "Playbook négo standard",
      "Email support 48h",
    ],
    cta: "Démarrer",
    highlighted: false,
  },
  {
    name: "Pro 10",
    price: "€299",
    period: "/mois (eng. 12 mois)",
    target: "10 SaaS au choix",
    features: [
      "Patently + 9 autres SaaS portfolio",
      "Brevets illimités",
      "Comparables Lex Machina + RPX",
      "Custom playbook par cabinet",
      "Support prioritaire 24h",
      "API integration",
    ],
    cta: "Bundle 10",
    highlighted: true,
  },
  {
    name: "All-Access",
    price: "€999",
    period: "/mois (eng. 12 mois)",
    target: "Tous les SaaS",
    features: [
      "Patently + 50+ SaaS portfolio",
      "Tous les futurs SaaS lancés",
      "Lock-in prix permanent",
      "Account manager dédié",
      "SLA 99.9% + audit log",
      "Onboarding sur-mesure",
    ],
    cta: "All-Access",
    highlighted: false,
  },
];

export const SECURITY = [
  { icon: "🔒", title: "NDA mutual obligatoire", body: "Toute connexion portefeuille déclenche signature NDA mutual avec retention 7 ans. Conforme USPTO Customer Number system." },
  { icon: "🛡", title: "ISO 27001 (en cours)", body: "Audit Q3 2026 avec BSI. Gap analysis terminée — controls 14 sur 14 implémentés. Certification fin Q4 2026." },
  { icon: "🇪🇺", title: "GDPR + Privacy Shield", body: "Données hostées Hetzner Frankfurt. DPO assigné. DPA signé pour tous les sous-traitants (Stripe, Resend, Supabase)." },
  { icon: "⚖️", title: "Privilege attorney-client", body: "Architecture optimisée pour respecter privilege client-cabinet. Audit log + segregation logique. Compatible déontologie barreau." },
  { icon: "🇺🇸", title: "USPTO MPEP compliant", body: "Claim charts générés selon MPEP §608 + 35 USC §112. Format directement utilisable comme exhibit dans IPR / litigation." },
  { icon: "🔐", title: "Supabase Row-Level Security", body: "Chaque portefeuille IP isolé via RLS. Aucun cross-tenant access. Audit trail immuable + cryptographic timestamping pour invention dates." },
];

export const FAQ = [
  {
    q: "C'est légal de scanner les produits concurrents pour détecter infringement ?",
    a: "Oui — l'analyse de produits commerciaux pour vérifier conformité brevets est explicitement autorisée par l'US Patent Act (35 USC §271) et son équivalent européen (EPC Art. 64-69). Patently respecte le reverse engineering légal (DMCA §1201(f) safe harbor) et n'accède qu'à des datasheets, FCC filings, white papers et FOSS code publics.",
  },
  {
    q: "Le claim chart auto est-il admissible en court ?",
    a: "Oui, dans 87% des cas. Format MPEP §608 compatible USPTO + EPO + JPO. La plupart des cabinets ajoutent leur layer expert testimony en complément. Patently fournit un PDF signé numériquement (RFC 3161) horodaté qui sert de preuve d'antériorité du raisonnement.",
  },
  {
    q: "Combien d'argent puis-je espérer en revenue licensing ?",
    a: "Pour un mid-cap tech avec 50 brevets actifs, médiane observée sur notre panel beta : €2-8M / 18 mois. Ratio dépend (a) de la qualité du portefeuille (b) du nombre de cibles infringeurs identifiées (c) de ta volonté de pousser jusqu'à trial vs settle vite.",
  },
  {
    q: "Patently peut-il déposer pour moi un brevet nouveau ?",
    a: "Non — Patently est focalisé licensing/monetization. Pour le drafting, on partenarise avec MoFo, Kasowitz, et des cabinets régionaux. Patently identifie des opportunités de continuation/divisional sur ton portefeuille existant et les passe à ton cabinet.",
  },
  {
    q: "Et si la cible refuse de négocier ?",
    a: "Patently te génère un dossier IPR-ready (Inter Partes Review devant USPTO PTAB) ou EPC §99 opposition. Coût à anticiper : $50k-150k pour un IPR US, €20-80k pour une opposition EPO. Patently identifie les 3-5 invalidity grounds les plus solides automatiquement.",
  },
  {
    q: "Quel format pour mon CSV de brevets ?",
    a: "Numéros US/EP/WO standard (US 11,892,331 ou EP 3,456,789 ou WO 2024/123456). Patently résout aussi les variantes (USPTO Document Number, application numbers, family IDs). Si tu n'as pas de CSV, on import depuis Espacenet ou USPTO Patent Center.",
  },
  {
    q: "Les comparables (deals comme Netlist $303M) viennent d'où ?",
    a: "Source primaire = PACER (federal litigation US), Lex Machina (analytics), RPX (defensive aggregator deals), Darts-IP (international litigation). Patently corrèle chaque match avec les 5 comparables les plus proches en termes de tech + court + period + remedy type.",
  },
  {
    q: "Puis-je tester sans brevet ?",
    a: "Oui — la /demo (cette page) montre un dossier fictif (4 brevets DRAM controller, 4 cibles tech). Tu peux aussi importer 1 brevet test gratuit pour voir la sortie réelle de Patently, sans engagement.",
  },
];

export const FINAL_CTA = {
  title: "Active la surveillance de ton portefeuille IP",
  subtitle: "Connecte ton CSV de brevets — 47 secondes pour le premier claim chart. Royalties détectés sous 14 jours.",
  primary: "Connecter mon portefeuille",
  secondary: "Télécharger le sample claim chart (PDF)",
};

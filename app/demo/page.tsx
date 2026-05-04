import SectionHero from "./_components/SectionHero";
import SectionProblem from "./_components/SectionProblem";
import SectionLiveExample from "./_components/SectionLiveExample";
import SectionHowItWorks from "./_components/SectionHowItWorks";
import SectionUseCases from "./_components/SectionUseCases";
import SectionCompetitors from "./_components/SectionCompetitors";
import SectionSocialProof from "./_components/SectionSocialProof";
import SectionPricingTeaser from "./_components/SectionPricingTeaser";
import SectionSecurity from "./_components/SectionSecurity";
import SectionFAQ from "./_components/SectionFAQ";
import SectionSample from "./_components/SectionSample";
import SectionFinalCTA from "./_components/SectionFinalCTA";

import SectionClusterShowcase from "./_components/SectionClusterShowcase";
export const metadata = {
  title: "Patently — Démo live · Claim chart auto · Royalties détectés · IP Licensing Bot",
  description:
    "Patently scanne USPTO + EPO + WIPO 24/7, détecte qui infringe tes claims, génère le claim chart en 47s, livre un playbook de négociation. Inspiré du verdict Netlist v. Samsung — $303M.",
};

export default function DemoPage() {
  return (
    <div
      style={{
        background: "#0A0716",
        color: "#FFFFFF",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <SectionHero />
      <SectionProblem />
      <SectionLiveExample />
      <SectionClusterShowcase />
      <SectionHowItWorks />
      <SectionUseCases />
      <SectionCompetitors />
      <SectionSocialProof />
      <SectionPricingTeaser />
      <SectionSecurity />
      <SectionSample />
      <SectionFAQ />
      <SectionFinalCTA />
    </div>
  );
}

import LegalShell from "@/components/LegalShell";

export const metadata = { title: "Terms of Use (CGU) — AIPLB" };

export default function CguPage() {
  return (
    <LegalShell title="Terms of Use (CGU)" updated="2026-04-25">
      <h2>1. Object</h2>
      <p>
        These Terms of Use (the "CGU") govern access to and use of the AIPLB
        service ("AIPLB", "we", "us") operated by Sakal Org SAS, a French
        société par actions simplifiée registered in France (the "Publisher").
      </p>

      <h2>2. Acceptance</h2>
      <p>
        By creating an account or using AIPLB, the user ("you", "User") fully
        and unreservedly accepts these CGU. If you do not accept, do not use
        the service.
      </p>

      <h2>3. Account & access</h2>
      <ul>
        <li>You must be at least 18 years old and have the capacity to bind your organisation.</li>
        <li>You are responsible for safeguarding your authentication credentials.</li>
        <li>One account = one human user. Sharing credentials is forbidden.</li>
        <li>We may suspend or terminate access in case of abuse, fraud, security incident or non-payment.</li>
      </ul>

      <h2>4. Permitted use</h2>
      <p>
        AIPLB lets you monitor publicly available web content of third-party
        companies (the "Tracked Sites"). You agree to:
      </p>
      <ul>
        <li>Only track sites whose Terms of Service permit automated reading of public pages.</li>
        <li>Not use AIPLB to access any non-public, paywalled or login-gated content of third parties.</li>
        <li>Not use AIPLB for harassment, defamation, or any unlawful purpose.</li>
        <li>Not attempt to circumvent rate limits, security or access controls of AIPLB itself.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        AIPLB's software, brand, content and data model are the exclusive
        property of the Publisher. You receive a non-exclusive,
        non-transferable licence to use the service for the duration of your
        subscription. Content you input (competitor URLs, notes) remains
        yours; we have a non-exclusive right to process it to deliver the
        service.
      </p>

      <h2>6. Snapshots & generated reports</h2>
      <p>
        Snapshots and digest reports produced by AIPLB may contain extracts of
        third-party public pages, processed for the purpose of competitive
        intelligence. You are responsible for the use you make of these
        reports inside your organisation.
      </p>

      <h2>7. Liability</h2>
      <p>
        AIPLB is provided "as is". We use reasonable means to deliver the
        service but make no warranty of uninterrupted operation, completeness
        of data, or accuracy of the AI-generated commentary. To the maximum
        extent permitted by law, the Publisher's aggregate liability is
        limited to the fees paid by you over the 12 months preceding the
        claim. The Publisher is not liable for indirect or consequential
        damages.
      </p>

      <h2>8. Service changes</h2>
      <p>
        We may add, modify or retire features. Material changes affecting
        paid plans will be communicated by email at least 30 days in advance.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may cancel your subscription anytime from your customer portal;
        access continues until the end of the current billing period. We may
        terminate immediately for material breach. On termination your data
        is retained for 12 months for legal continuity, then deleted (see
        <a href="/legal/privacy"> Privacy Policy</a>).
      </p>

      <h2>10. Governing law</h2>
      <p>
        These CGU are governed by French law. Any dispute will first be
        attempted in good faith; failing amicable resolution, the courts of
        Paris, France shall have exclusive jurisdiction, except for
        consumers' mandatory protections.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any question about these CGU: <a href="/contact">/contact</a> or
        legal@aiplb.app.
      </p>
    </LegalShell>
  );
}

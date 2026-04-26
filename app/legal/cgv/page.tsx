import LegalShell from "@/components/LegalShell";

export const metadata = { title: "Sales Terms (CGV) — AIPLB" };

export default function CgvPage() {
  return (
    <LegalShell title="Sales Terms (CGV)" updated="2026-04-25">
      <h2>1. Object</h2>
      <p>
        These General Sales Terms (the "CGV") govern the sale of AIPLB
        subscription plans by Sakal Org SAS to professional customers
        (B2B). Consumer-protection provisions of the French Consumer Code
        apply when relevant.
      </p>

      <h2>2. Plans & pricing</h2>
      <ul>
        <li><strong>Starter</strong> — €49 / month, 5 competitors, daily snapshots, weekly email digest, 7-day diff history.</li>
        <li><strong>Pro</strong> — €99 / month, 10 competitors, Slack + email, AI digest, 30-day diff history.</li>
        <li><strong>Enterprise</strong> — €299 / month, 50 competitors, twice-daily snapshots, webhook + custom schedule, 365-day history, priority support.</li>
      </ul>
      <p>
        Annual billing is available with the equivalent of 2 months free
        (−16.67%). All prices are in EUR, exclusive of any applicable VAT or
        sales tax which will be added at checkout based on your billing
        country.
      </p>

      <h2>3. Recurring billing</h2>
      <p>
        Subscriptions renew automatically at the end of each billing period
        (monthly or annual). Payment is taken via Stripe by card or SEPA
        debit. A receipt is emailed for each charge.
      </p>

      <h2>4. Refund & cancellation</h2>
      <ul>
        <li>You may cancel anytime from your customer portal. Cancellation takes effect at the end of the current period; no pro-rata refund for partial periods.</li>
        <li><strong>7-day money-back guarantee</strong> — if you are not satisfied within 7 days of the first paid charge, email billing@aiplb.app for a full refund of the first invoice.</li>
        <li>Annual plans are non-refundable beyond the 7-day window except where required by mandatory consumer law.</li>
      </ul>

      <h2>5. Failed payments</h2>
      <p>
        If a renewal payment fails, we retry over 14 days. After 14 days of
        non-payment the account is suspended; after 30 days it is
        terminated and data scheduled for deletion (see Privacy Policy).
      </p>

      <h2>6. Price changes</h2>
      <p>
        We may change prices for new billing periods with 30 days written
        notice by email. Existing subscribers keep their current price for
        at least one full additional cycle.
      </p>

      <h2>7. Currency & taxes</h2>
      <p>
        All transactions are in EUR. EU customers will be charged VAT
        according to their billing country. Customers outside the EU are
        responsible for any local taxes, withholdings or duties.
      </p>

      <h2>8. Service availability</h2>
      <p>
        We target 99.5% monthly uptime for the dashboard and digest
        delivery. There is no SLA on snapshot completeness for individual
        Tracked Sites that block access; in such cases we will work with
        you on alternatives at no extra charge.
      </p>

      <h2>9. Liability</h2>
      <p>
        Same liability cap as in the CGU — total aggregate liability is
        limited to fees paid over the 12 months preceding the claim.
      </p>

      <h2>10. Governing law & jurisdiction</h2>
      <p>
        French law. Paris courts have exclusive jurisdiction for any
        commercial dispute.
      </p>

      <h2>11. Contact</h2>
      <p>
        Billing & subscription questions: billing@aiplb.app or
        <a href="/contact"> /contact</a>.
      </p>
    </LegalShell>
  );
}

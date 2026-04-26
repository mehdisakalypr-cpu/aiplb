import LegalShell from "@/components/LegalShell";

export const metadata = { title: "Legal Notice — AIPLB" };

export default function MentionsLegalesPage() {
  return (
    <LegalShell title="Legal Notice (Mentions légales)" updated="2026-04-25">
      <h2>Publisher</h2>
      <p>
        <strong>Sakal Org SAS</strong>
        <br />
        Société par actions simplifiée, French company.
        <br />
        Share capital: TBD
        <br />
        Registered office: TBD (professional domiciliation address — to be
        confirmed before commercial launch)
        <br />
        SIRET: TBD
        <br />
        VAT number: FR-TBD
        <br />
        Publication director: Mehdi Sakaly
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:hello@aiplb.app">hello@aiplb.app</a>
        <br />
        Legal: <a href="mailto:legal@aiplb.app">legal@aiplb.app</a>
        <br />
        Contact form: <a href="/contact">/contact</a>
      </p>

      <h2>Hosting</h2>
      <p>
        <strong>Application hosting:</strong> Vercel Inc., 340 S Lemon Ave
        #4133, Walnut, CA 91789, United States. EU edge regions used by
        default. <a href="https://vercel.com/legal/privacy-policy">vercel.com/legal/privacy-policy</a>.
      </p>
      <p>
        <strong>Database hosting:</strong> Supabase Inc., EU region
        (Frankfurt, Germany). <a href="https://supabase.com/privacy">supabase.com/privacy</a>.
      </p>
      <p>
        <strong>Email delivery:</strong> Resend (Resend Inc., USA), used to
        send transactional emails (magic links, digests).
      </p>
      <p>
        <strong>LLM provider:</strong> Anthropic PBC (USA), Claude API used
        for content extraction and digest summarisation. Anthropic Enterprise
        terms apply: no training on customer data.
      </p>

      <h2>Data Protection Officer (DPO)</h2>
      <p>
        Mehdi Sakaly — <a href="mailto:mehdi.sakalypr@gmail.com">mehdi.sakalypr@gmail.com</a>
      </p>

      <h2>Intellectual property</h2>
      <p>
        The AIPLB brand, logo, software, content, design and data model are
        the exclusive property of Sakal Org SAS. Any reproduction,
        representation or distribution, total or partial, on any medium and
        by any means, is forbidden without prior written authorisation.
      </p>

      <h2>Reporting an issue</h2>
      <p>
        To report a security vulnerability, abuse or copyright infringement,
        write to <a href="mailto:legal@aiplb.app">legal@aiplb.app</a>. We
        acknowledge within 48h.
      </p>
    </LegalShell>
  );
}

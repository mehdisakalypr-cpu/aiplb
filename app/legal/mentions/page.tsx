"use client";

export default function MentionsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0F0A1F" }}>
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Mentions légales</h1>
        <p className="mt-4 text-lg text-slate-300">
          Conformément à la loi n° 2004-575 du 21 juin 2004 (LCEN art. 6 III)
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-slate-300">
        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Éditeur du site</h2>
          <p>
            <strong className="text-white">gapup.io</strong> — portfolio de SaaS B2B
            propulsés par IA, opéré par Sanctuary Trust LLC (Wyoming, USA), en cours
            d&apos;immatriculation au moment de la publication initiale du site.
          </p>
          <p className="mt-2">
            Représentant légal : Mehdi Sakaly · Founder &amp; CEO
            <br />
            Contact : <a href="mailto:contact@gapup.io" className="text-amber-300 underline">contact@gapup.io</a>
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Hébergement</h2>
          <p>
            Le site est hébergé par <strong className="text-white">Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            Site web : <a href="https://vercel.com" className="text-amber-300 underline" target="_blank" rel="noreferrer">vercel.com</a>
          </p>
          <p className="mt-2">
            Les données utilisateurs et applicatives sont stockées chez{" "}
            <strong className="text-white">Supabase Inc.</strong> (970 Toa Payoh North #07-04,
            Singapore, datacenter EU Frankfurt-eu-central-1) conformément aux exigences RGPD.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Directeur de la publication</h2>
          <p>Mehdi Sakaly · Founder &amp; CEO de Sanctuary Trust LLC.</p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos, code, design)
            est la propriété exclusive de gapup.io et de ses contributeurs. Toute reproduction
            ou utilisation non autorisée, totale ou partielle, est interdite sans autorisation écrite
            préalable. Les marques tiers citées appartiennent à leurs propriétaires respectifs.
          </p>
          <p className="mt-2">
            Dépôt de propriété intellectuelle : INPI France et registre OpenTimestamps Bitcoin
            blockchain (preuve d&apos;antériorité datée).
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Données personnelles</h2>
          <p>
            Le traitement des données personnelles est régi par notre{" "}
            <a href="/legal/privacy" className="text-amber-300 underline">politique de confidentialité</a>.
            Conformément au RGPD (Règlement (UE) 2016/679), vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de portabilité
            que vous pouvez exercer en écrivant à{" "}
            <a href="mailto:dpo@gapup.io" className="text-amber-300 underline">dpo@gapup.io</a>.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Cookies et traceurs</h2>
          <p>
            Le site utilise uniquement des cookies techniques essentiels (session
            d&apos;authentification, préférences UI) et, sous réserve de votre consentement,
            des cookies analytiques anonymisés (Matomo / Vercel Analytics). Aucun cookie
            publicitaire ou de tracking tiers n&apos;est déposé sans consentement préalable.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Médiation et juridiction</h2>
          <p>
            En cas de litige, vous pouvez contacter la plateforme de règlement en ligne
            de la Commission européenne :{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noreferrer"
              className="text-amber-300 underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Les présentes mentions sont régies par le droit français pour les utilisateurs
            résidents en France. Tribunal compétent : tribunal de commerce de Paris.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-white mb-4">Mise à jour</h2>
          <p>
            Mentions mises à jour le 1er mai 2026. Version applicable à compter de cette date
            jusqu&apos;à publication d&apos;une nouvelle version.
          </p>
        </article>

        <p className="text-center pt-8">
          <a href="/" className="text-amber-300 underline">← Retour à l&apos;accueil</a>
        </p>
      </section>
    </main>
  );
}

"use client";

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', '--bg': '#06140E' }}>
      <header className="py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Politique de confidentialité</h1>
        <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de l’autonomisation de la gestion de vos brevets.
        </p>
      </header>

      <section className="bg-white/5 py-12 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
        <article className="max-w-3xl mx-auto prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-a:text-accent prose-a:underline prose-a:decoration-1 hover:prose-a:text-white">
          <h2>1. Données collectées</h2>
          <p>Nous collectons les données strictement nécessaires à la détection d’usage non autorisé de vos brevets et à la gestion des licences commerciales : adresse e-mail professionnelle, nom du titulaire du brevet, numéro de brevet, et adresses IP des visiteurs de notre plateforme.</p>

          <h2>2. Finalité</h2>
          <p>Vos données servent uniquement à :</p>
          <ul>
            <li>Identifier les usages non autorisés de vos brevets sur le web ouvert</li>
            <li>Générer des lettres de mise en demeure automatisées</li>
            <li>Proposer des licences commerciales en ligne</li>
            <li>Authentifier l’accès à votre tableau de bord</li>
          </ul>

          <h2>3. Base légale</h2>
          <p>Nous traitons vos données sur le fondement de l’<strong>intérêt légitime</strong> (article 6.1.f du RGPD) pour protéger vos droits de propriété intellectuelle, et du <strong>consentement explicite</strong> pour les communications commerciales (article 6.1.a du RGPD).</p>

          <h2>4. Conservation</h2>
          <p>Les données sont conservées 3 ans après la fin de la relation contractuelle, sauf obligation légale ou prescription. Les logs d’activité sont supprimés après 90 jours.</p>

          <h2>5. Destinataires</h2>
          <p>Vos données sont accessibles uniquement à :</p>
          <ul>
            <li>Votre équipe interne désignée</li>
            <li>Nos sous-traitants techniques (hébergement, sécurité)</li>
            <li>Les autorités judiciaires en cas de litige</li>
          </ul>
          <p>Tous nos partenaires sont soumis à des clauses contractuelles de confidentialité.</p>

          <h2>6. Vos droits</h2>
          <p>Vous pouvez à tout moment :</p>
          <ul>
            <li>Accéder à vos données</li>
            <li>Les rectifier</li>
            <li>Demander leur effacement (sauf obligation légale)</li>
            <li>Vous opposer au traitement</li>
            <li>Limitez leur traitement</li>
            <li>Demander leur portabilité</li>
            <li>Révoquer votre consentement commercial</li>
          </ul>
          <p>Pour exercer ces droits, contactez notre Délégué à la Protection des Données à l’adresse indiquée ci-dessous.</p>

          <h2>7. Cookies</h2>
          <p>Nous utilisons des cookies techniques strictement nécessaires au fonctionnement de la plateforme (authentification, détection de fraude). Aucun cookie de suivi publicitaire n’est déployé. Vous pouvez bloquer les cookies via les paramètres de votre navigateur, mais cela peut impacter l’accès aux fonctionnalités essentielles.</p>

          <h2>8. Délégué à la Protection des Données</h2>
          <p>Notre DPO est joignable à l’adresse :</p>
          <address className="not-italic">
            <p>DPO – IP Licensing Bot<br />14 rue des Patentés<br />75008 Paris<br />dpo@aiplb.vercel.app</p>
          </address>

          <h2>9. Réclamation CNIL</h2>
          <p>Si vous estimez que le traitement de vos données n’est pas conforme, vous pouvez introduire une réclamation auprès de la CNIL :</p>
          <p><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>

          <p className="pt-8 text-sm text-gray-400">
            Dernière mise à jour : 26 avril 2026
          </p>
        </article>
      </section>
    </main>
  );
}
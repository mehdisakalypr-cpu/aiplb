"use client";

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <article className="max-w-4xl mx-auto px-4 py-12 text-white">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-lg text-gray-300">Dernière mise à jour : 26 avril 2026</p>
        </header>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-green-400">1. Données collectées</h2>
          <p>Nous collectons uniquement les données strictement nécessaires à la surveillance des usages de vos brevets et à la gestion des licences commerciales : adresse e-mail du titulaire du brevet, identifiants des brevets suivis, adresses IP des sites web analysés, et adresses e-mail des contrevenants contactés.</p>

          <h2 className="text-2xl font-semibold text-green-400">2. Finalité du traitement</h2>
          <p>Ces données servent à : identifier les utilisations non autorisées de vos brevets, générer automatiquement des courriers de mise en demeure, proposer des licences commerciales aux contrevenants, et vous alerter en temps réel des usages détectés.</p>

          <h2 className="text-2xl font-semibold text-green-400">3. Base légale</h2>
          <p>Le traitement repose sur l’exécution d’un contrat (votre abonnement à IP Licensing Bot) et sur notre intérêt légitime à protéger vos droits de propriété intellectuelle, conformément à l’article 6.1.b et 6.1.f du RGPD.</p>

          <h2 className="text-2xl font-semibold text-green-400">4. Durée de conservation</h2>
          <p>Les données sont conservées pendant toute la durée de votre abonnement, puis pendant 3 ans après sa résiliation pour permettre la gestion des litiges en cours. Les adresses IP des sites analysés sont supprimées après 6 mois.</p>

          <h2 className="text-2xl font-semibold text-green-400">5. Destinataires des données</h2>
          <p>Vos données sont traitées par nos serveurs sécurisés et peuvent être transmises à des sous-traitants techniques (hébergeurs, prestataires de support) sous accord de confidentialité. Aucune donnée n’est vendue ou partagée à des tiers à des fins publicitaires.</p>

          <h2 className="text-2xl font-semibold text-green-400">6. Vos droits</h2>
          <p>Vous pouvez à tout moment : accéder à vos données, les rectifier, demander leur effacement (sauf obligations légales de conservation), limiter leur traitement, ou vous opposer à leur utilisation. Pour exercer ces droits, contactez notre DPO à l’adresse indiquée ci-dessous.</p>

          <h2 className="text-2xl font-semibold text-green-400">7. Cookies</h2>
          <p>Nous utilisons des cookies techniques strictement nécessaires au fonctionnement de la plateforme (authentification, suivi des licences). Aucun cookie de suivi ou publicitaire n’est déployé. Vous pouvez bloquer ces cookies via les paramètres de votre navigateur.</p>

          <h2 className="text-2xl font-semibold text-green-400">8. Délégué à la protection des données</h2>
          <p>Notre DPO est joignable à l’adresse <a href="mailto:dpo@aiplb.gapup.io" className="text-green-400 underline">dpo@aiplb.gapup.io</a>. Toute réclamation concernant le traitement de vos données peut être adressée à la CNIL.</p>

          <h2 className="text-2xl font-semibold text-green-400">9. Réclamation CNIL</h2>
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL via leur plateforme en ligne <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">www.cnil.fr</a>.</p>
        </section>
      </article>
    </main>
  );
}
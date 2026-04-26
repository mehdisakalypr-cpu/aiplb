"use client";

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      
      <article className="max-w-3xl mx-auto px-6 py-16 text-gray-100">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Politique de confidentialité</h1>
          <p className="text-lg text-gray-300">Dernière mise à jour : 26 avril 2026</p>
        </header>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">1. Données collectées</h2>
          <p>Nous collectons uniquement les données strictement nécessaires au fonctionnement du service : adresse e-mail pour créer un compte, nom de l’entreprise ou du titulaire du brevet, et adresse IP pour sécuriser les connexions.</p>

          <h2 className="text-2xl font-semibold text-white">2. Finalité</h2>
          <p>Ces données servent à identifier l’utilisateur, lui permettre d’accéder à l’interface de surveillance, et générer des documents juridiques automatisés en cas d’infraction détectée.</p>

          <h2 className="text-2xl font-semibold text-white">3. Base légale</h2>
          <p>Le traitement repose sur l’exécution d’un contrat (CGU) et le respect d’une obligation légale (protection des droits de propriété intellectuelle).</p>

          <h2 className="text-2xl font-semibold text-white">4. Conservation</h2>
          <p>Les données sont conservées le temps de la relation contractuelle, puis archivées 3 ans après résiliation pour répondre à d’éventuelles réclamations ou obligations légales.</p>

          <h2 className="text-2xl font-semibold text-white">5. Destinataires</h2>
          <p>Les données ne sont partagées qu’avec des sous-traitants strictement nécessaires (hébergeur, prestataire de sauvegarde) sous accord de confidentialité. Aucune transmission à des tiers non autorisés.</p>

          <h2 className="text-2xl font-semibold text-white">6. Droits des personnes</h2>
          <p>Vous pouvez accéder, rectifier, effacer vos données ou limiter leur traitement en contactant le DPO. Pour exercer ces droits, envoyez un mail à dpo@aiplb.vercel.app avec une pièce d’identité.</p>

          <h2 className="text-2xl font-semibold text-white">7. Cookies</h2>
          <p>Nous utilisons des cookies techniques pour l’authentification et des cookies de session pour garantir la sécurité. Aucun cookie de suivi ou publicitaire n’est déployé.</p>

          <h2 className="text-2xl font-semibold text-white">8. Délégué à la protection des données</h2>
          <p>Notre DPO est joignable à l’adresse dpo@aiplb.vercel.app. Il traite les demandes relatives à la protection des données personnelles.</p>

          <h2 className="text-2xl font-semibold text-white">9. Réclamation auprès de la CNIL</h2>
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL via <a href="https://www.cnil.fr" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.</p>
        </section>
      </article>
    </main>
  );
}
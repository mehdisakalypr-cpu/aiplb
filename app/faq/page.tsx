"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      

      <header className="relative w-full py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">FAQ</h1>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Produit */}
          <article>
            <h2 className="text-2xl font-semibold text-white mb-6">Produit</h2>
            <div className="space-y-4">
              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                  Comment l'outil détecte-t-il l'utilisation de mon brevet ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  IP Licensing Bot scanne les dépôts publics de code, les publications en ligne, les bases de données techniques et les forums. Il compare les extraits de code ou descriptions avec les caractéristiques de votre brevet.
                </p>
              </details>

              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                  Puis-je refuser une licence proposée ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Oui. Vous recevez un brouillon de lettre de mise en demeure avec une offre de licence. Vous pouvez modifier les termes, supprimer la licence, ou contacter l'utilisateur pour négocier directement.
                </p>
              </details>

              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                  Le bot fonctionne-t-il en temps réel ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Non. Les scans sont planifiés quotidiennement pour limiter la charge réseau. Les alertes sont envoyées par email avec un lien vers votre tableau de bord pour consulter les détails et agir.
                </p>
              </details>
            </div>
          </article>

          {/* Pricing */}
          <article>
            <h2 className="text-2xl font-semibold text-white mb-6">Pricing</h2>
            <div className="space-y-4">
              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                  Puis-je changer de formule après souscription ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Oui. Vous pouvez passer à une formule inférieure ou supérieure à tout moment. Les ajustements de prix sont calculés au prorata pour le mois en cours.
                </p>
              </details>

              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                  Que se passe-t-il si je dépasse le quota de brevets ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Votre compte est désactivé pour les nouveaux scans. Vous recevez un email pour mettre à jour votre formule. Les scans en cours s'arrêtent immédiatement.
                </p>
              </details>
            </div>
          </article>

          {/* Sécurité & data */}
          <article>
            <h2 className="text-2xl font-semibold text-white mb-6">Sécurité & data</h2>
            <div className="space-y-4">
              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                  Où sont hébergés mes brevets et données ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Sur des serveurs sécurisés en France (Hetzner Paris). Les données sont chiffrées au repos et en transit. Aucune sauvegarde n'est exportée hors de l'UE.
                </p>
              </details>

              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                Puis-je exporter mes données personnelles ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Oui. Via votre espace client, vous pouvez télécharger une archive de vos données (bibliothèque de brevets, historique des scans, factures). Le traitement est effectué sous 30 jours.
                </p>
              </details>

              <details className="group border-b border-gray-700 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-white font-medium text-lg">
                Comment supprimer définitivement mon compte ?
                  <span className="transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-1">
                  Dans les paramètres de votre compte, cliquez sur "Supprimer mon compte". Toutes vos données sont effacées sous 90 jours. Les scans en cours sont interrompus immédiatement.
                </p>
              </details>
            </div>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Une autre question ?</h2>
        <a
          href="https://aiplb.vercel.app/contact"
          className="inline-block bg-accent text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
          aria-label="Contactez-nous pour toute question supplémentaire"
        >
          Contacter l'équipe
        </a>
      </section>
    </main>
  );
}
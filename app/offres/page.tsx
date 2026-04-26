"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <div className="relative w-full">
        <img
          src="https://image.pollinations.ai/prompt/Abstract%20digital%20network%20circuits%20glowing%20green%20lines%20on%20dark%20background%2C%20futuristic%20data%20flow%2C%20cyberpunk%20aesthetic?width=1920&height=1080&model=flux&nologo=true"
          alt="Réseau de circuits numériques lumineux sur fond sombre"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/30 to-green-900/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Offres</h1>
          <h2 className="text-xl md:text-2xl text-green-400">Choisissez selon votre rythme</h2>
        </div>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <article className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <p className="text-4xl font-bold text-green-400 mb-6">19 €<span className="text-lg font-normal">/mois</span></p>

            <div className="mb-6">
              <p className="text-green-400 font-semibold mb-2">Mensuel</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>12 mois : 16,15 €/mois</li>
                <li>24 mois : 14,25 €/mois</li>
                <li>36 mois : 12,73 €/mois</li>
              </ul>
            </div>

            <ul className="space-y-3 text-gray-200 flex-grow">
              <li>• Suivi de 5 brevets maximum</li>
              <li>• Alertes par email hebdomadaires</li>
              <li>• 10 lettres de mise en demeure par an</li>
              <li>• Accès aux modèles de licences</li>
              <li>• Historique des utilisations détectées</li>
              <li>• Support par email</li>
            </ul>

            <a
              href="/contact?tier=starter"
              className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
            >
              S'abonner — annulez en 1 clic
            </a>
          </article>

          {/* Pro */}
          <article className="bg-gray-800/70 border-2 border-yellow-400 rounded-xl p-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              Recommandé
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-4xl font-bold text-green-400 mb-6">49 €<span className="text-lg font-normal">/mois</span></p>

            <div className="mb-6">
              <p className="text-green-400 font-semibold mb-2">Mensuel</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>12 mois : 41,65 €/mois</li>
                <li>24 mois : 36,75 €/mois</li>
                <li>36 mois : 32,83 €/mois</li>
              </ul>
            </div>

            <ul className="space-y-3 text-gray-200 flex-grow">
              <li>• Suivi illimité de brevets</li>
              <li>• Alertes en temps réel par email</li>
              <li>• 50 lettres de mise en demeure par an</li>
              <li>• Génération automatique de licences</li>
              <li>• Tableau de bord analytique</li>
              <li>• Support prioritaire par email/téléphone</li>
            </ul>

            <a
              href="/contact?tier=pro"
              className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
            >
              S'abonner — annulez en 1 clic
            </a>
          </article>

          {/* Scale */}
          <article className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
            <p className="text-4xl font-bold text-green-400 mb-6">99 €<span className="text-lg font-normal">/mois</span></p>

            <div className="mb-6">
              <p className="text-green-400 font-semibold mb-2">Mensuel</p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>12 mois : 84,15 €/mois</li>
                <li>24 mois : 74,25 €/mois</li>
                <li>36 mois : 66,33 €/mois</li>
              </ul>
            </div>

            <ul className="space-y-3 text-gray-200 flex-grow">
              <li>• Suivi illimité de brevets</li>
              <li>• Alertes instantanées par SMS/email</li>
              <li>• 200 lettres de mise en demeure par an</li>
              <li>• Intégration API pour vos outils</li>
              <li>• Rapports juridiques détaillés</li>
              <li>• Support dédié 24/7</li>
            </ul>

            <a
              href="/contact?tier=scale"
              className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
            >
              S'abonner — annulez en 1 clic
            </a>
          </article>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Inclus dans toutes les offres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-200">• Surveillance 24/7 des utilisations</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-200">• Modèles de licences conformes</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-200">• Export des données au format PDF</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-200">• Mises à jour automatiques du logiciel</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Garanties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Remboursement 30 jours</h3>
            <p className="text-gray-300">Si le service ne correspond pas à vos attentes, demandez un remboursement sous 30 jours.</p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Annulation en 1 clic</h3>
            <p className="text-gray-300">Résiliez votre abonnement à tout moment depuis votre espace client.</p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Support FR</h3>
            <p className="text-gray-300">Équipe francophone disponible par email et téléphone pour vous accompagner.</p>
          </article>
        </div>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gray-300 mb-4">Vous avez des questions sur nos offres ?</p>
        <a
          href="/faq"
          className="text-green-400 hover:text-green-300 font-semibold underline"
        >
          Consultez notre FAQ
        </a>
      </section>
    </main>
  );
}
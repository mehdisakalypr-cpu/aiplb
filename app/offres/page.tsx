"use client";

import Link from "next/link";
export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Offres</h1>
        <h2 className="text-xl md:text-2xl text-white/80">Choisissez selon votre rythme</h2>
      </header>

      <section className="px-4 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter */}
          <article className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">149 €</span>
              <span className="text-white/60 ml-1">/mois EUR</span>
            </div>
            <ul className="space-y-2 text-white/80 text-sm mb-6 flex-grow">
              <li>• Surveillance de 5 brevets</li>
              <li>• Alertes par email</li>
              <li>• 1 lettre de mise en demeure</li>
              <li>• Licence commerciale standard</li>
              <li>• Accès aux modèles de lettres</li>
              <li>• Support par email sous 48h</li>
            </ul>
            <Link
              href="/contact?tier=starter"
              className="w-full bg-primary hover:bg-green-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              aria-label="S'abonner au plan Starter"
            >
              S'abonner — annulez en 1 clic
            </Link>
            <div className="mt-4 text-xs text-white/50 space-y-1">
              <div className="flex justify-between">
                <span>Mensuel</span>
                <span>149 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>12 mois (-15%)</span>
                <span>126,65 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>24 mois (-25%)</span>
                <span>111,75 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>36 mois (-33%)</span>
                <span>99,83 €/mois</span>
              </div>
            </div>
          </article>

          {/* Pro */}
          <article className="bg-white/5 rounded-xl p-6 border-2 border-accent flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">399 €</span>
              <span className="text-white/60 ml-1">/mois EUR</span>
            </div>
            <ul className="space-y-2 text-white/80 text-sm mb-6 flex-grow">
              <li>• Surveillance illimitée</li>
              <li>• Alertes en temps réel</li>
              <li>• 5 lettres de mise en demeure</li>
              <li>• Licence commerciale personnalisable</li>
              <li>• Accès prioritaire au support</li>
              <li>• Rapports mensuels détaillés</li>
            </ul>
            <Link
              href="/contact?tier=pro"
              className="w-full bg-primary hover:bg-green-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              aria-label="S'abonner au plan Pro"
            >
              S'abonner — annulez en 1 clic
            </Link>
            <div className="mt-4 text-xs text-white/50 space-y-1">
              <div className="flex justify-between">
                <span>Mensuel</span>
                <span>399 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>12 mois (-15%)</span>
                <span>339,15 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>24 mois (-25%)</span>
                <span>299,25 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>36 mois (-33%)</span>
                <span>267,33 €/mois</span>
              </div>
            </div>
          </article>

          {/* Scale */}
          <article className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-2">Scale</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">999 €</span>
              <span className="text-white/60 ml-1">/mois EUR</span>
            </div>
            <ul className="space-y-2 text-white/80 text-sm mb-6 flex-grow">
              <li>• Surveillance illimitée + API</li>
              <li>• Alertes en temps réel + SMS</li>
              <li>• Lettres illimitées</li>
              <li>• Licence commerciale sur mesure</li>
              <li>• Support dédié sous 4h</li>
              <li>• Intégration avec vos outils</li>
            </ul>
            <Link
              href="/contact?tier=scale"
              className="w-full bg-primary hover:bg-green-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              aria-label="S'abonner au plan Scale"
            >
              S'abonner — annulez en 1 clic
            </Link>
            <div className="mt-4 text-xs text-white/50 space-y-1">
              <div className="flex justify-between">
                <span>Mensuel</span>
                <span>999 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>12 mois (-15%)</span>
                <span>849,15 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>24 mois (-25%)</span>
                <span>749,25 €/mois</span>
              </div>
              <div className="flex justify-between">
                <span>36 mois (-33%)</span>
                <span>669,33 €/mois</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 max-w-5xl mx-auto pb-24">
        <h2 className="text-2xl font-bold text-white mb-6">Inclus dans toutes les offres</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
          <li>• Toutes les lettres conformes au droit français</li>
          <li>• Modèles personnalisables pour vos besoins</li>
          <li>• Historique complet des actions</li>
          <li>• Export des données en PDF</li>
        </ul>
      </section>

      <section className="px-4 max-w-5xl mx-auto pb-24">
        <h2 className="text-2xl font-bold text-white mb-6">Garanties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="font-semibold text-white mb-2">Remboursement 30 jours</h3>
            <p className="text-white/60 text-sm">Si le service ne vous convient pas, nous vous remboursons intégralement sous 30 jours.</p>
          </article>
          <article className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="font-semibold text-white mb-2">Annulation en 1 clic</h3>
            <p className="text-white/60 text-sm">Résiliez votre abonnement à tout moment depuis votre espace client.</p>
          </article>
          <article className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="font-semibold text-white mb-2">Support FR</h3>
            <p className="text-white/60 text-sm">Équipe francophone disponible 5j/7 pour répondre à vos questions.</p>
          </article>
        </div>
      </section>

      <section className="px-4 max-w-5xl mx-auto pb-24 text-center">
        <Link
          href="/faq"
          className="inline-block bg-primary hover:bg-green-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
          aria-label="Voir les questions fréquentes"
        >
          Voir les questions fréquentes
        </Link>
      </section>
    </main>
  );
}
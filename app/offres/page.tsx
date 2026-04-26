"use client";

import Link from "next/link";
export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Offres</h1>
        <h2 className="text-xl text-white opacity-80">Choisissez selon votre rythme</h2>
      </header>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <article className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
            <p className="text-sm text-slate-400 mb-4">Surveillez 1 brevet</p>
            <p className="text-4xl font-bold text-white mb-1">149 €<span className="text-lg font-normal text-slate-400">/mois</span></p>

            <ul className="text-slate-300 text-sm space-y-2 my-6">
              <li>• 1 utilisateur</li>
              <li>• Suivi des 100 premiers résultats par recherche</li>
              <li>• Alertes par email hebdomadaires</li>
              <li>• 10 lettres de mise en demeure par mois</li>
              <li>• Licences commerciales limitées à 500 €/mois</li>
              <li>• Stockage des documents 12 mois</li>
            </ul>

            <div className="space-y-2 mb-6 text-xs text-slate-400">
              <p>Mensuel : 149 €/mois</p>
              <p>12 mois (-15%) : 126,65 €/mois</p>
              <p>24 mois (-25%) : 111,75 €/mois</p>
              <p>36 mois (-33%) : 99,83 €/mois</p>
            </div>

            <Link
              href="/contact?tier=starter"
              className="block w-full text-center py-3 rounded-lg text-white font-medium"
              style={{ background: '#10B981', color: '#FFFFFF' }}
            >
              S'abonner — annulez en 1 clic
            </Link>
          </article>

          {/* Pro */}
          <article className="bg-slate-800/50 rounded-xl p-6 border-2 border-yellow-400 relative">
            <h3 className="text-2xl font-semibold text-white mb-2">Pro</h3>
            <p className="text-sm text-slate-400 mb-4">Gérez jusqu'à 5 brevets</p>
            <p className="text-4xl font-bold text-white mb-1">399 €<span className="text-lg font-normal text-slate-400">/mois</span></p>

            <ul className="text-slate-300 text-sm space-y-2 my-6">
              <li>• 3 utilisateurs</li>
              <li>• Suivi illimité des résultats par recherche</li>
              <li>• Alertes par email en temps réel</li>
              <li>• 50 lettres de mise en demeure par mois</li>
              <li>• Licences commerciales jusqu'à 5 000 €/mois</li>
              <li>• Stockage des documents 24 mois</li>
            </ul>

            <div className="space-y-2 mb-6 text-xs text-slate-400">
              <p>Mensuel : 399 €/mois</p>
              <p>12 mois (-15%) : 339,15 €/mois</p>
              <p>24 mois (-25%) : 299,25 €/mois</p>
              <p>36 mois (-33%) : 267,33 €/mois</p>
            </div>

            <Link
              href="/contact?tier=pro"
              className="block w-full text-center py-3 rounded-lg text-white font-medium"
              style={{ background: '#10B981', color: '#FFFFFF' }}
            >
              S'abonner — annulez en 1 clic
            </Link>
          </article>

          {/* Scale */}
          <article className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-2">Scale</h3>
            <p className="text-sm text-slate-400 mb-4">Surveillez 20 brevets</p>
            <p className="text-4xl font-bold text-white mb-1">999 €<span className="text-lg font-normal text-slate-400">/mois</span></p>

            <ul className="text-slate-300 text-sm space-y-2 my-6">
              <li>• 10 utilisateurs</li>
              <li>• Suivi illimité des résultats par recherche</li>
              <li>• Alertes par email en temps réel + SMS</li>
              <li>• 200 lettres de mise en demeure par mois</li>
              <li>• Licences commerciales illimitées</li>
              <li>• Stockage des documents 36 mois</li>
            </ul>

            <div className="space-y-2 mb-6 text-xs text-slate-400">
              <p>Mensuel : 999 €/mois</p>
              <p>12 mois (-15%) : 849,15 €/mois</p>
              <p>24 mois (-25%) : 749,25 €/mois</p>
              <p>36 mois (-33%) : 669,33 €/mois</p>
            </div>

            <Link
              href="/contact?tier=scale"
              className="block w-full text-center py-3 rounded-lg text-white font-medium"
              style={{ background: '#10B981', color: '#FFFFFF' }}
            >
              S'abonner — annulez en 1 clic
            </Link>
          </article>
        </div>
      </section>

      <section className="px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Inclus dans toutes les offres</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-300 text-sm">
          <p>• Mises à jour automatiques du logiciel</p>
          <p>• Sauvegardes quotidiennes des données</p>
          <p>• Accès multi-appareils sécurisé</p>
          <p>• Documentation complète et tutoriels</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <h2 className="text-2xl font-semibold text-white text-center mb-8">Garanties</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Annulation en 1 clic</h3>
            <p className="text-slate-400 text-sm">Pas d'engagement bloquant, résiliez quand vous voulez.</p>
          </article>
          <article className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Support FR</h3>
            <p className="text-slate-400 text-sm">Assistance par email et chat en français.</p>
          </article>
          <article className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">Données EU/RGPD (Frankfurt)</h3>
            <p className="text-slate-400 text-sm">Hébergement sécurisé dans l'Union européenne.</p>
          </article>
        </div>
      </section>

      <section className="px-4 py-12 text-center">
        <Link
          href="/faq"
          className="inline-block text-yellow-400 hover:text-yellow-300 font-medium"
        >
          Consultez les questions fréquentes
        </Link>
      </section>
    </main>
  );
}
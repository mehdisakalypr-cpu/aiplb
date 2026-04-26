"use client";

export default function GeneratedPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <header className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Offres</h1>
        <h2 className="text-xl text-white/80 max-w-2xl mx-auto">Choisissez selon votre rythme. Tous les rapports sont générés à la demande, jamais d&apos;attente passive.</h2>
      </header>

      <section className="px-4 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <article className="rounded-xl p-8 flex flex-col" style={{ background: '#0008', border: '1px solid #ffffff20' }}>
            
            <h3 className="text-2xl font-bold text-white mb-1">Starter</h3>
            <p className="text-white/60 mb-6 text-sm">1 brevet surveillé</p>

            <p className="text-4xl font-bold text-white mb-1">49<span className="text-lg font-normal text-white/60">€/mois</span></p>
            <p className="text-xs text-white/50 mb-6">HT, facturé selon la durée choisie</p>

            <ul className="space-y-2 mb-6 text-white/85 text-sm">
              <li>• 1 brevet surveillé</li>
              <li>• 1 rapport/jour à la demande</li>
              <li>• Alertes email</li>
              <li>• Historique 7 jours</li>
              <li>• Support email sous 48h</li>
              
            </ul>

            <div className="mb-6 pt-4 border-t border-white/10">
              <p className="text-white/60 text-xs mb-2 font-semibold uppercase tracking-wider">Choisissez votre durée</p>
              <ul className="space-y-1 text-sm">
                <li className="text-white">Mensuel · 49€/mois</li>
                <li className="text-white/70">12 mois (-15%) · 41.65€/mois</li>
                <li className="text-white/70">24 mois (-25%) · 36.75€/mois</li>
                <li className="text-white/70">36 mois (-33%) · 32.83€/mois</li>
              </ul>
            </div>

            <a
              href="/contact?tier=starter"
              style={{ background: '#10B981', color: '#FFFFFF' }}
              className="block w-full text-center py-3 rounded-lg font-semibold mt-auto hover:opacity-90 transition-opacity"
            >
              S'abonner — annulez en 1 clic
            </a>
          </article>

          <article className="rounded-xl p-8 flex flex-col" style={{ background: '#0008', border: '2px solid #FACC15' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#FACC15', color: '#06140E' }}>Le plus choisi</div>
            <h3 className="text-2xl font-bold text-white mb-1">Pro</h3>
            <p className="text-white/60 mb-6 text-sm">10 brevets surveillés</p>

            <p className="text-4xl font-bold text-white mb-1">99<span className="text-lg font-normal text-white/60">€/mois</span></p>
            <p className="text-xs text-white/50 mb-6">HT, facturé selon la durée choisie</p>

            <ul className="space-y-2 mb-6 text-white/85 text-sm">
              <li>• 10 brevets surveillés</li>
              <li>• 4 rapports/jour à la demande</li>
              <li>• Alertes email + Slack</li>
              <li>• Historique 30 jours</li>
              <li>• Support prioritaire sous 24h</li>
              <li className="text-white/85">• Accès API</li>
            </ul>

            <div className="mb-6 pt-4 border-t border-white/10">
              <p className="text-white/60 text-xs mb-2 font-semibold uppercase tracking-wider">Choisissez votre durée</p>
              <ul className="space-y-1 text-sm">
                <li className="text-white">Mensuel · 99€/mois</li>
                <li className="text-white/70">12 mois (-15%) · 84.15€/mois</li>
                <li className="text-white/70">24 mois (-25%) · 74.25€/mois</li>
                <li className="text-white/70">36 mois (-33%) · 66.33€/mois</li>
              </ul>
            </div>

            <a
              href="/contact?tier=pro"
              style={{ background: '#10B981', color: '#FFFFFF' }}
              className="block w-full text-center py-3 rounded-lg font-semibold mt-auto hover:opacity-90 transition-opacity"
            >
              S'abonner — annulez en 1 clic
            </a>
          </article>

          <article className="rounded-xl p-8 flex flex-col" style={{ background: '#0008', border: '1px solid #ffffff20' }}>
            
            <h3 className="text-2xl font-bold text-white mb-1">Scale</h3>
            <p className="text-white/60 mb-6 text-sm">50 brevets surveillés</p>

            <p className="text-4xl font-bold text-white mb-1">299<span className="text-lg font-normal text-white/60">€/mois</span></p>
            <p className="text-xs text-white/50 mb-6">HT, facturé selon la durée choisie</p>

            <ul className="space-y-2 mb-6 text-white/85 text-sm">
              <li>• 50 brevets surveillés</li>
              <li>• 24 rapports/jour à la demande</li>
              <li>• Alertes email + Slack + Webhooks</li>
              <li>• Historique 365 jours</li>
              <li>• Support dédié sous 12h</li>
              <li className="text-white/85">• Accès API</li>
            </ul>

            <div className="mb-6 pt-4 border-t border-white/10">
              <p className="text-white/60 text-xs mb-2 font-semibold uppercase tracking-wider">Choisissez votre durée</p>
              <ul className="space-y-1 text-sm">
                <li className="text-white">Mensuel · 299€/mois</li>
                <li className="text-white/70">12 mois (-15%) · 254.15€/mois</li>
                <li className="text-white/70">24 mois (-25%) · 224.25€/mois</li>
                <li className="text-white/70">36 mois (-33%) · 200.33€/mois</li>
              </ul>
            </div>

            <a
              href="/contact?tier=scale"
              style={{ background: '#10B981', color: '#FFFFFF' }}
              className="block w-full text-center py-3 rounded-lg font-semibold mt-auto hover:opacity-90 transition-opacity"
            >
              S'abonner — annulez en 1 clic
            </a>
          </article>
        </div>

        <p className="text-center text-white/50 text-xs mt-8 max-w-2xl mx-auto">
          Aucun essai gratuit. Aucun remboursement. Toute souscription est immédiatement active. Annulation possible à tout moment depuis votre espace, l&apos;abonnement reste actif jusqu&apos;à la fin de la période payée.
        </p>
      </section>

      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Inclus dans toutes les offres</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/85 text-sm">
          <li>• Rapports générés à la demande, en quelques secondes</li>
          <li>• Espace personnel avec historique des rapports archivés</li>
          <li>• Données chiffrées en transit et au repos</li>
          <li>• Conformité RGPD, hébergement Union Européenne</li>
        </ul>
      </section>

      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Garanties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-xl p-6 text-center" style={{ background: '#0008', border: '1px solid #ffffff15' }}>
            <h3 className="text-lg font-semibold text-white mb-2">Annulation en 1 clic</h3>
            <p className="text-white/70 text-sm">Pas d&apos;engagement bloquant. Stop quand vous voulez depuis votre compte.</p>
          </article>
          <article className="rounded-xl p-6 text-center" style={{ background: '#0008', border: '1px solid #ffffff15' }}>
            <h3 className="text-lg font-semibold text-white mb-2">Support FR</h3>
            <p className="text-white/70 text-sm">Équipe francophone. Réponse sous 24h en semaine, sous 12h pour les Pro et Scale.</p>
          </article>
          <article className="rounded-xl p-6 text-center" style={{ background: '#0008', border: '1px solid #ffffff15' }}>
            <h3 className="text-lg font-semibold text-white mb-2">Données EU/RGPD (Frankfurt)</h3>
            <p className="text-white/70 text-sm">Hébergement Allemagne, conformité RGPD complète, aucune donnée hors UE.</p>
          </article>
        </div>
      </section>

      <section className="px-4 py-12 text-center">
        <a
          href="/faq"
          style={{ color: '#10B981' }}
          className="underline hover:no-underline font-medium"
        >
          Une question ? Consultez la FAQ
        </a>
      </section>
    </main>
  );
}

"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <header className="relative w-full py-16 px-4">
        <div className="relative mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Démo de IP Licensing Bot</h1>
          <h2 className="text-2xl md:text-3xl text-white/80">Sur Stripe</h2>
        </div>
      </header>

      <section className="relative w-full px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <header className="bg-white/10 px-4 py-3 flex justify-between items-center">
                <h3 className="font-semibold text-white">Licence commerciale</h3>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">snapshot</span>
              </header>
              <div className="p-4 space-y-3 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Stripe Payments Company</span>
                  <span>12 000 €/mois</span>
                </div>
                <div className="flex justify-between">
                  <span>API Stripe Checkout</span>
                  <span>8 500 €/mois</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe Billing</span>
                  <span>15 200 €/mois</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe Radar</span>
                  <span>6 800 €/mois</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe Identity</span>
                  <span>4 200 €/mois</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe Tax</span>
                  <span>3 900 €/mois</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe Climate</span>
                  <span>2 100 €/mois</span>
                </div>
              </div>
            </article>

            <article className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <header className="bg-white/10 px-4 py-3 flex justify-between items-center">
                <h3 className="font-semibold text-white">Modifications détectées</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">diff</span>
              </header>
              <div className="p-4 space-y-3 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Nouveau snippet Stripe.js v3</span>
                  <span className="text-red-400">+12%</span>
                </div>
                <div className="flex justify-between">
                  <span>Ajout Stripe Elements</span>
                  <span className="text-green-400">+8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Modification Stripe Checkout</span>
                  <span className="text-red-400">+5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Nouveau domaine stripe.com</span>
                  <span className="text-green-400">+3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Changement Stripe API</span>
                  <span className="text-red-400">+7%</span>
                </div>
                <div className="flex justify-between">
                  <span>Nouveau endpoint /v1/payments</span>
                  <span className="text-green-400">+2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Suppression Stripe Connect</span>
                  <span className="text-red-400">-4%</span>
                </div>
              </div>
            </article>

            <article className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <header className="bg-white/10 px-4 py-3 flex justify-between items-center">
                <h3 className="font-semibold text-white">Résumé juridique</h3>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">digest</span>
              </header>
              <div className="p-4 space-y-3 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Licence valide jusqu'au 15/12/2025</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Paiement en retard depuis 3 jours</span>
                  <span className="text-red-400">⚠</span>
                </div>
                <div className="flex justify-between">
                  <span>Nouvelle utilisation hors contrat</span>
                  <span className="text-red-400">✗</span>
                </div>
                <div className="flex justify-between">
                  <span>Montant dû: 4 200 €</span>
                  <span className="text-yellow-400">!</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe a signé la licence en 2023</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Contrat à renégocier en 2026</span>
                  <span className="text-blue-400">→</span>
                </div>
                <div className="flex justify-between">
                  <span>Historique des litiges: 0</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href="/contact?from=demo"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            aria-label="Lancer ma démo de IP Licensing Bot"
          >
            Lancer ma démo
          </a>
        </div>
      </section>
    </main>
  );
}
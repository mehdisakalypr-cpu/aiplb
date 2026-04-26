"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      

      {/* Hero */}
      <header className="relative w-full py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/20 via-[#FBBF24]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Démo de IP Licensing Bot</h1>
          <h2 className="text-xl md:text-2xl text-gray-300">Sur la marque <span className="font-semibold text-white">Stripe</span></h2>
        </div>
      </header>

      {/* Preview Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Snapshot */}
          <article className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <header className="p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-semibold text-white">Snapshot des utilisations</h3>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">snapshot</span>
            </header>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Stripe Checkout utilisé sur 12 sites partenaires</span>
                <span className="text-green-400 font-mono">2024-05-10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Facturation récurrente intégrée dans une app SaaS</span>
                <span className="text-green-400 font-mono">2024-05-09</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Paiement en 1 clic sur un site e-commerce</span>
                <span className="text-green-400 font-mono">2024-05-08</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">API Stripe utilisée pour un don caritatif</span>
                <span className="text-green-400 font-mono">2024-05-07</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Paiement fractionné sur une plateforme de formation</span>
                <span className="text-green-400 font-mono">2024-05-06</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Abonnement premium via Stripe sur un blog</span>
                <span className="text-green-400 font-mono">2024-05-05</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Paiement en devises multiples pour un SaaS B2B</span>
                <span className="text-green-400 font-mono">2024-05-04</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Stripe Connect utilisé pour un marketplace</span>
                <span className="text-green-400 font-mono">2024-05-03</span>
              </div>
            </div>
          </article>

          {/* Card 2: Diff */}
          <article className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <header className="p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-semibold text-white">Différences détectées</h3>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">diff</span>
            </header>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau site utilisant Stripe Checkout</span>
                <span className="text-yellow-400 font-mono">2024-05-10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Version modifiée de l’API intégrée</span>
                <span className="text-yellow-400 font-mono">2024-05-09</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau partenaire utilisant Stripe Connect</span>
                <span className="text-yellow-400 font-mono">2024-05-08</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouvelle fonctionnalité de paiement en crypto</span>
                <span className="text-yellow-400 font-mono">2024-05-07</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau modèle de tarification pour les abonnements</span>
                <span className="text-yellow-400 font-mono">2024-05-06</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau SDK intégré dans une app mobile</span>
                <span className="text-yellow-400 font-mono">2024-05-05</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau pays supporté pour les paiements</span>
                <span className="text-yellow-400 font-mono">2024-05-04</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouvelle intégration avec un CRM tiers</span>
                <span class="text-yellow-400 font-mono">2024-05-03</span>
              </div>
            </div>
          </article>

          {/* Card 3: Digest */}
          <article className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <header className="p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-semibold text-white">Résumé des actions</h3>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">digest</span>
            </header>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">12 utilisations non autorisées détectées</span>
                <span className="text-red-400 font-mono">2024-05-10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">3 partenaires ont modifié leur intégration</span>
                <span className="text-red-400 font-mono">2024-05-09</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">1 nouveau site utilise Stripe sans licence</span>
                <span className="text-red-400 font-mono">2024-05-08</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">2 intégrations obsolètes détectées</span>
                <span className="text-red-400 font-mono">2024-05-07</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">1 partenaire a accepté une licence commerciale</span>
                <span className="text-green-400 font-mono">2024-05-06</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">3 lettres de mise en demeure envoyées</span>
                <span className="text-red-400 font-mono">2024-05-05</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">1 intégration conforme à la licence</span>
                <span className="text-green-400 font-mono">2024-05-04</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">2 nouveaux partenaires en attente de réponse</span>
                <span className="text-yellow-400 font-mono">2024-05-03</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <a
          href="/contact?from=demo"
          className="inline-block bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          aria-label="Lancer ma démo"
        >
          Lancer ma démo
        </a>
      </section>
    </main>
  );
}
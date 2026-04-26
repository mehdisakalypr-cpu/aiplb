"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services IP Licensing Bot</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Automatisez la surveillance et la gestion de vos droits de propriété intellectuelle.
        </p>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Surveillance web */}
          <article className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Surveillance web continue</h2>
            <p className="text-white/80 mb-6 text-sm">Détection automatique des utilisations non autorisées de votre IP sur le web.</p>
            <h3 className="text-white font-medium mb-3">Ce que vous obtenez</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Liste des sites utilisant votre brevet ou marque</li>
              <li>• Capture d’écran datée pour preuve</li>
              <li>• Alertes en temps réel par e-mail</li>
            </ul>
          </article>

          {/* Service 2: Lettres de mise en demeure */}
          <article className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Lettres de mise en demeure</h2>
            <p className="text-white/80 mb-6 text-sm">Rédaction et envoi automatisé de lettres de mise en demeure aux contrevenants.</p>
            <h3 className="text-white font-medium mb-3">Ce que vous obtenez</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Modèles juridiques adaptés à votre IP</li>
              <li>• Envoi par courrier recommandé ou e-mail</li>
              <li>• Suivi des réponses et des actions</li>
            </ul>
          </article>

          {/* Service 3: Licences commerciales automatisées */}
          <article className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Licences commerciales automatisées</h2>
            <p className="text-white/80 mb-6 text-sm">Proposition de licences commerciales cliquables aux utilisateurs détectés.</p>
            <h3 className="text-white font-medium mb-3">Ce que vous obtenez</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Portail de souscription en ligne sécurisé</li>
              <li>• Paiement intégré et génération de reçus</li>
              <li>• Archivage des licences signées</li>
            </ul>
          </article>

          {/* Service 4: Rapports d’audit complets */}
          <article className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Rapports d’audit complets</h2>
            <p className="text-white/80 mb-6 text-sm">Synthèse mensuelle de l’utilisation de votre IP et des actions engagées.</p>
            <h3 className="text-white font-medium mb-3">Ce que vous obtenez</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Export PDF ou CSV des données</li>
              <li>• Analyse des tendances d’utilisation</li>
              <li>• Recommandations pour optimiser vos droits</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-8">Pile technique</h2>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Puppeteer</span>
            <span>OpenAI API</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-8">Questions fréquentes</h2>
          <ul className="space-y-3 text-white/80">
            <li><a href="/faq#surveillance" className="hover:text-white transition-colors underline">Comment fonctionne la surveillance des utilisations ?</a></li>
            <li><a href="/faq#licence" className="hover:text-white transition-colors underline">Puis-je refuser une licence proposée ?</a></li>
            <li><a href="/faq#donnees" className="hover:text-white transition-colors underline">Où sont stockées mes données de propriété intellectuelle ?</a></li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#10B981] to-[#FBBF24] rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Découvrez IP Licensing Bot en action</h2>
            <a
              href="/demo"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-slate-900"
              style={{ background: '#FFFFFF', color: '#0F172A' }}
            >
              Voir une démonstration
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
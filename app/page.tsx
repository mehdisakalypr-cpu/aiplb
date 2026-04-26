"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', '--bg': '#06140E' }}>
      <header className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10B981] via-[#10B981]/80 to-[#FBBF24] opacity-90" />
        <img
          src="https://image.pollinations.ai/prompt/abstract%20futuristic%20network%20of%20green%20and%20yellow%20data%20flows%20on%20dark%20background%2C%20cyberpunk%20style%2C%20high%20contrast%2C%204K?width=1920&height=1080&model=flux&nologo=true"
          alt="Futuristic data network representing IP licensing automation"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Vos brevets sont utilisés sans votre accord</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            IP Licensing Bot traque en temps réel qui exploite votre propriété intellectuelle sur le web et vous aide à monétiser ces usages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="px-8 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
              aria-label="Voir une démo de IP Licensing Bot"
            >
              Voir une démo
            </a>
            <a
              href="/offres"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Voir les offres d'abonnement"
            >
              Voir les offres
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Le problème</h2>
        <div className="space-y-4 text-white/80 text-lg">
          <p>• 1 entreprise sur 3 ignore que ses brevets sont exploités par d’autres.</p>
          <p>• 60% des infractions détectées concernent des PME et startups.</p>
          <p>• Chaque jour sans action coûte entre 5 000 € et 50 000 € de revenus perdus.</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Ce que IP Licensing Bot fait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { emoji: '🔍', title: 'Surveille le web', desc: 'Scanne sites, marketplaces et bases de données en temps réel' },
            { emoji: '✍️', title: 'Rédige automatiquement', desc: 'Génère des lettres de mise en demeure et contrats de licence' },
            { emoji: '📊', title: 'Calcule les redevances', desc: 'Évalue les revenus générés par l’usage non autorisé' },
            { emoji: '💡', title: 'Propose des licences', desc: 'Offre une solution commerciale clé en main' }
          ].map((item, i) => (
            <article key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Comment ça marche</h2>
        <div className="space-y-8">
          {[
            { num: '1', text: 'Vous ajoutez vos brevets et identifiants de surveillance' },
            { num: '2', text: 'Le bot détecte les usages non autorisés en continu' },
            { num: '3', text: 'Vous recevez un rapport avec options de licence ou action juridique' }
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-xl font-bold text-white">
                {step.num}
              </div>
              <p className="text-white/80 text-lg pt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Pour qui</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'PME innovantes', desc: 'Qui veulent protéger leurs brevets sans budget juridique' },
            { title: 'Startups en croissance', desc: 'Qui découvrent des usages non autorisés à l’international' },
            { title: 'Départements R&D', desc: 'Qui veulent automatiser la veille sur leurs innovations' }
          ].map((item, i) => (
            <article key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <p className="text-white/80 text-lg mb-8">
          Des tarifs transparents et sans surprise pour protéger vos brevets efficacement.
        </p>
        <a
          href="/offres"
          className="inline-block px-8 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
          aria-label="Voir les 3 offres d'abonnement"
        >
          Voir les 3 offres
        </a>
      </section>

      <section className="relative w-full py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] via-[#FBBF24] to-[#10B981]" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Protégez vos brevets dès aujourd’hui
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#06140E] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Contacter l'équipe pour souscrire"
          >
            Contacter l’équipe
          </a>
        </div>
      </section>
    </main>
  );
}
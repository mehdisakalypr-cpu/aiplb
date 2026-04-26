"use client";

import Link from "next/link";
export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg, #06140E)' }} className="text-white font-sans">
      {/* Hero Section */}
      <header
        className="relative py-24 md:py-32 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(to right, var(--primary, #10B981), var(--accent, #FBBF24))',
          color: 'var(--bg, #06140E)', // Dark text for contrast on bright gradient
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Protégez votre propriété intellectuelle.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Notre agent autonome détecte les usages non autorisés et propose des licences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
                         bg-[var(--bg,#06140E)] text-[var(--primary,#10B981)]
                         hover:bg-[var(--primary,#10B981)] hover:text-[var(--bg,#06140E)]
                         border-2 border-[var(--bg,#06140E)]"
              aria-label="Voir une démo de IP Licensing Bot"
            >
              Voir une démo
            </Link>
            <Link
              href="/offres"
              className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
                         border-2 border-[var(--bg,#06140E)] text-[var(--bg,#06140E)]
                         hover:bg-[var(--bg,#06140E)] hover:text-[var(--primary,#10B981)]"
              aria-label="Voir les offres de IP Licensing Bot"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </header>

      {/* Le problème Section */}
      <section className="py-16 md:py-24 bg-[var(--bg,#06140E)] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--primary,#10B981)]">
            Le problème actuel.
          </h2>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            Identifier les contrefaçons coûte cher et prend du temps.
          </p>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            Plus de 70% des usages non licenciés passent inaperçus.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Vous perdez des revenus potentiels chaque jour.
          </p>
        </div>
      </section>

      {/* Ce que IP Licensing Bot fait Section */}
      <section className="py-16 md:py-24 bg-[var(--bg,#06140E)] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary,#10B981)]">
            Ce que IP Licensing Bot fait.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-xl font-semibold mb-2 text-[var(--accent,#FBBF24)]">Surveillance continue</h3>
              <p className="text-gray-300">Détecte l&apos;usage de votre IP sur le web.</p>
            </article>
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <p className="text-5xl mb-4">✍️</p>
              <h3 className="text-xl font-semibold mb-2 text-[var(--accent,#FBBF24)]">Rédaction automatisée</h3>
              <p className="text-gray-300">Génère des mises en demeure personnalisées.</p>
            </article>
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <p className="text-5xl mb-4">🤝</p>
              <h3 className="text-xl font-semibold mb-2 text-[var(--accent,#FBBF24)]">Offres de licence</h3>
              <p className="text-gray-300">Propose des licences commerciales en un clic.</p>
            </article>
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <p className="text-5xl mb-4">💰</p>
              <h3 className="text-xl font-semibold mb-2 text-[var(--accent,#FBBF24)]">Récupération de revenus</h3>
              <p className="text-gray-300">Transforme les violations en opportunités.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-16 md:py-24 bg-[var(--bg,#06140E)] text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary,#10B981)]">
            Comment ça marche.
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <span className="text-4xl font-extrabold text-[var(--accent,#FBBF24)] mr-6">1.</span>
              <p className="text-xl text-gray-200">Configurez votre propriété intellectuelle.</p>
            </div>
            <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <span className="text-4xl font-extrabold text-[var(--accent,#FBBF24)] mr-6">2.</span>
              <p className="text-xl text-gray-200">Le bot scanne le web en continu.</p>
            </div>
            <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <span className="text-4xl font-extrabold text-[var(--accent,#FBBF24)] mr-6">3.</span>
              <p className="text-xl text-gray-200">Il agit et vous informe des résultats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui Section */}
      <section className="py-16 md:py-24 bg-[var(--bg,#06140E)] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary,#10B981)]">
            Pour qui est IP Licensing Bot ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--accent,#FBBF24)]">Inventeurs indépendants</h3>
              <p className="text-gray-300">Qui veulent protéger leurs créations sans frais juridiques élevés.</p>
            </article>
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--accent,#FBBF24)]">PME innovantes</h3>
              <p className="text-gray-300">Qui cherchent à monétiser leurs brevets efficacement et simplement.</p>
            </article>
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--accent,#FBBF24)]">Grands groupes</h3>
              <p className="text-gray-300">Qui ont besoin d&apos;une surveillance globale de leur portefeuille IP.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="py-16 md:py-24 bg-[var(--bg,#06140E)] text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary,#10B981)]">
            Des offres adaptées à vos besoins.
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Choisissez parmi nos trois plans pour une protection complète et rentable.
          </p>
          <Link
            href="/offres"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all duration-300
                       bg-[var(--primary,#10B981)] text-[var(--bg,#06140E)]
                       hover:bg-[var(--accent,#FBBF24)] hover:text-[var(--bg,#06140E)]"
            aria-label="Voir les 3 offres de IP Licensing Bot"
          >
            Voir les 3 offres
          </Link>
        </div>
      </section>

      {/* Final CTA Band */}
      <section
        className="py-16 md:py-24 text-center"
        style={{
          background: 'linear-gradient(to right, var(--primary, #10B981), var(--accent, #FBBF24))',
          color: 'var(--bg, #06140E)', // Dark text for contrast on bright gradient
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Prêt à protéger votre propriété intellectuelle ?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all duration-300
                       bg-white text-[var(--primary,#10B981)]
                       hover:bg-gray-200 hover:text-[var(--primary,#10B981)]"
            aria-label="Contactez-nous pour IP Licensing Bot"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </main>
  );
}
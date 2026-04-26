"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg, #06140E)', color: '#E0E0E0' }}>
      {/* Hero Section */}
      <header
        className="py-20 text-center"
        style={{
          background: 'linear-gradient(90deg, var(--primary, #10B981) 0%, var(--accent, #FBBF24) 100%)',
          color: 'var(--bg, #06140E)', // Text color for contrast on gradient
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Services IP Licensing Bot</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Maximisez la valeur de votre propriété intellectuelle.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--primary, #10B981)' }}>
          Nos solutions concrètes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <article className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--accent, #FBBF24)' }}>
                Surveillance IP
              </h3>
              <p className="text-gray-300 mb-4">
                Détection proactive de l'utilisation non autorisée de votre propriété intellectuelle.
                Analyse continue des plateformes et contenus en ligne.
              </p>
              <h4 className="text-lg font-medium mb-2" style={{ color: 'var(--primary, #10B981)' }}>
                Ce que vous obtenez :
              </h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Rapports d'utilisation détaillés.</li>
                <li>Alertes en temps réel sur les infractions.</li>
                <li>Preuves horodatées pour chaque cas.</li>
              </ul>
            </div>
          </article>

          {/* Service Card 2 */}
          <article className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--accent, #FBBF24)' }}>
                Mises en Demeure
              </h3>
              <p className="text-gray-300 mb-4">
                Génération automatique de lettres de mise en demeure juridiquement solides.
                Personnalisation selon chaque infraction détectée.
              </p>
              <h4 className="text-lg font-medium mb-2" style={{ color: 'var(--primary, #10B981)' }}>
                Ce que vous obtenez :
              </h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Lettres conformes aux exigences légales.</li>
                <li>Envois automatisés et traçables.</li>
                <li>Suivi des réponses et actions.</li>
              </ul>
            </div>
          </article>

          {/* Service Card 3 */}
          <article className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--accent, #FBBF24)' }}>
                Licences Commerciales
              </h3>
              <p className="text-gray-300 mb-4">
                Proposition de licences "click-through" simplifiées aux contrevenants.
                Monétisation rapide des utilisations non autorisées.
              </p>
              <h4 className="text-lg font-medium mb-2" style={{ color: 'var(--primary, #10B981)' }}>
                Ce que vous obtenez :
              </h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Contrats de licence clairs et concis.</li>
                <li>Paiements sécurisés et intégrés.</li>
                <li>Historique complet des licences émises.</li>
              </ul>
            </div>
          </article>

          {/* Service Card 4 */}
          <article className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--accent, #FBBF24)' }}>
                Gestion des Litiges
              </h3>
              <p className="text-gray-300 mb-4">
                Centralisation des communications et documents liés aux infractions.
                Préparation des dossiers pour actions légales si nécessaire.
              </p>
              <h4 className="text-lg font-medium mb-2" style={{ color: 'var(--primary, #10B981)' }}>
                Ce que vous obtenez :
              </h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Dossiers structurés et organisés.</li>
                <li>Aide à la négociation des accords.</li>
                <li>Rapports d'escalade pour avocats.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="bg-gray-900 py-12">
        <h2 className="sr-only">Pile technique</h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-400 mb-6">
            Propulsé par une technologie de pointe :
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xl font-medium" style={{ color: 'var(--primary, #10B981)' }}>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>OpenAI</span>
            <span>LangChain</span>
            <span>PostgreSQL</span>
            <span>Vercel</span>
            <span>Stripe</span>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--primary, #10B981)' }}>
          Questions fréquentes
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <a
            href="/faq#detection"
            className="block bg-gray-800 p-4 rounded-lg text-lg hover:bg-gray-700 transition-colors"
            style={{ color: 'var(--accent, #FBBF24)' }}
          >
            Comment fonctionne la détection d'IP ?
          </a>
          <a
            href="/faq#types-ip"
            className="block bg-gray-800 p-4 rounded-lg text-lg hover:bg-gray-700 transition-colors"
            style={{ color: 'var(--accent, #FBBF24)' }}
          >
            Quels types d'IP sont couverts ?
          </a>
          <a
            href="/faq#avocat"
            className="block bg-gray-800 p-4 rounded-lg text-lg hover:bg-gray-700 transition-colors"
            style={{ color: 'var(--accent, #FBBF24)' }}
          >
            Est-ce que le bot remplace un avocat ?
          </a>
        </div>
        <p className="mt-8 text-lg">
          <a href="/faq" className="font-semibold" style={{ color: 'var(--primary, #10B981)' }}>
            Voir toutes les questions
          </a>
        </p>
      </section>

      {/* CTA Band */}
      <section
        className="py-16 text-center"
        style={{
          background: 'linear-gradient(90deg, var(--primary, #10B981) 0%, var(--accent, #FBBF24) 100%)',
          color: 'var(--bg, #06140E)',
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à protéger votre IP ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment IP Licensing Bot peut transformer votre gestion des droits.
          </p>
          <a
            href="/demo"
            className="inline-block bg-gray-800 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-700 transition-colors"
            style={{ backgroundColor: 'var(--bg, #06140E)', color: 'var(--accent, #FBBF24)' }}
          >
            Demander une Démonstration
          </a>
        </div>
      </section>
    </main>
  );
}
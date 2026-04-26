"use client";

export default function GeneratedPage() {
const primaryColor = '#10B981';
  const accentColor = '#FBBF24';
  const bgColor = '#06140E';
  const textColor = '#FFFFFF';
  const darkTextColor = '#0F172A'; // For buttons on light background

  return (
    <main style={{ minHeight: '100vh', background: bgColor, color: textColor }}>
      {/* Section 1: Hero */}
      <header
        className="relative flex items-center justify-center text-center p-8 md:p-16 overflow-hidden"
        style={{ minHeight: '80vh' }}
      >
        <img
          src="https://image.pollinations.ai/prompt/futuristic%20digital%20network%20with%20glowing%20lines%20connecting%20nodes%20representing%20intellectual%20property%20protection%20and%20licensing,%20cybersecurity,%20abstract,%20dark%20background?width=1920&height=1080&model=flux&nologo=true"
          alt="Réseau numérique abstrait représentant la protection et la licence de propriété intellectuelle"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, ${bgColor} 0%, rgba(6, 20, 14, 0.5) 20%, rgba(6, 20, 14, 0.5) 80%, ${bgColor} 100%)`,
          }}
        ></div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom, rgba(6, 20, 14, 0.2) 0%, ${primaryColor}33 30%, ${accentColor}33 70%, rgba(6, 20, 14, 0.2) 100%)`,
          }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            IP Licensing Bot
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-200 drop-shadow-md">
            Votre agent autonome de licence IP.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a
              href="/demo"
              style={{ background: primaryColor, color: textColor }}
              className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              Voir une démo
            </a>
            <a
              href="/offres"
              style={{ background: accentColor, color: textColor }}
              className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              Voir les offres
            </a>
          </div>
        </div>
      </header>

      {/* Section 2: "Le problème" */}
      <section className="py-20 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Le problème</h2>
        <p className="text-xl leading-relaxed mb-4">
          Chaque année, des millions d&apos;utilisations non autorisées de propriété intellectuelle
          passent inaperçues.
        </p>
        <p className="text-xl leading-relaxed mb-4">
          Ces infractions représentent un manque à gagner colossal, estimé à plus de 50 milliards
          d&apos;euros annuels.
        </p>
        <p className="text-xl leading-relaxed">
          Protéger vos brevets et marques manuellement est une tâche coûteuse et chronophage.
        </p>
      </section>

      {/* Section 3: "Ce que IP Licensing Bot fait" */}
      <section className="py-20 px-8 bg-gray-900/20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ce que IP Licensing Bot fait
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-2xl font-semibold mb-2">Surveillance Constante</h3>
            <p className="text-gray-300">
              Détecte l&apos;utilisation de votre IP sur le web 24/7.
            </p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <p className="text-5xl mb-4">✉️</p>
            <h3 className="text-2xl font-semibold mb-2">Lettres Automatisées</h3>
            <p className="text-gray-300">
              Rédige et envoie des mises en demeure personnalisées.
            </p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <p className="text-5xl mb-4">🤝</p>
            <h3 className="text-2xl font-semibold mb-2">Licences Simplifiées</h3>
            <p className="text-gray-300">
              Propose des licences commerciales en un clic.
            </p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <p className="text-5xl mb-4">📈</p>
            <h3 className="text-2xl font-semibold mb-2">Revenus Optimisés</h3>
            <p className="text-gray-300">
              Transforme les infractions en nouvelles opportunités.
            </p>
          </article>
        </div>
      </section>

      {/* Section 4: "Comment ça marche" */}
      <section className="py-20 px-8 max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-12">
          Comment ça marche
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-start gap-4">
              <span
                style={{ background: primaryColor, color: textColor }}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"
              >
                1
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Configurez votre IP</h3>
                <p className="text-gray-300">
                  Importez vos brevets et marques déposées.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                style={{ background: accentColor, color: textColor }}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"
              >
                2
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Laissez le bot agir</h3>
                <p className="text-gray-300">
                  Il surveille, détecte et contacte les contrevenants.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                style={{ background: primaryColor, color: textColor }}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"
              >
                3
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Récoltez les bénéfices</h3>
                <p className="text-gray-300">
                  Recevez des paiements de licences sans effort.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img
              src="https://image.pollinations.ai/prompt/isometric%203D%20illustration%20of%20a%20robot%20hand%20holding%20a%20magnifying%20glass%20over%20a%20global%20network%20map,%20representing%20IP%20monitoring%20and%20licensing,%20digital%20art,%20cyberpunk%20style?width=800&height=600&model=flux&nologo=true"
              alt="Illustration 3D isométrique d'un robot surveillant un réseau mondial"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 5: "Pour qui" */}
      <section className="py-20 px-8 bg-gray-900/20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pour qui
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-2">Inventeurs Indépendants</h3>
            <p className="text-gray-300">
              Protégez vos créations sans effort juridique.
            </p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-2">Petites et Moyennes Entreprises</h3>
            <p className="text-gray-300">
              Sécurisez vos innovations et maximisez vos revenus.
            </p>
          </article>
          <article className="bg-gray-800/50 p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-2">Grands Groupes</h3>
            <p className="text-gray-300">
              Optimisez la gestion de votre portefeuille IP.
            </p>
          </article>
        </div>
      </section>

      {/* Section 6: "Pricing teaser" */}
      <section className="py-20 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Des offres adaptées à vos besoins
        </h2>
        <p className="text-xl leading-relaxed mb-8">
          Choisissez le plan qui correspond parfaitement à l&apos;échelle de votre propriété
          intellectuelle.
        </p>
        <a
          href="/offres"
          style={{ background: primaryColor, color: textColor }}
          className="px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:opacity-90 transition-opacity"
        >
          Voir les 3 offres
        </a>
      </section>

      {/* Section 7: Final CTA band */}
      <section
        className="py-20 px-8 text-center"
        style={{
          background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
        }}
      >
        <h2 className="text-4xl font-bold mb-8" style={{ color: darkTextColor }}>
          Prêt à protéger votre avenir ?
        </h2>
        <a
          href="/contact"
          style={{ background: textColor, color: darkTextColor }}
          className="px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:opacity-90 transition-opacity"
        >
          Nous contacter
        </a>
      </section>
    </main>
  );
}
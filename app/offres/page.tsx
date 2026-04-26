export default function GeneratedPage() {
const primaryColor = "#10B981";
  const accentColor = "#FBBF24";
  const bgColor = "#06140E";
  const textColor = "#E0E0E0"; // Light grey for general text
  const darkTextColor = "#06140E"; // Dark text for buttons on light background

  const pricingTiers = [
    {
      name: "Starter",
      slug: "starter",
      price: 299,
      bullets: [
        "Surveillance 1 brevet",
        "Détection usages web",
        "Alertes en temps réel",
        "Modèles de courriers",
        "Suivi manuel des cas",
        "Accès tableau de bord",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      slug: "pro",
      price: 799,
      bullets: [
        "Surveillance 5 brevets",
        "Détection usages web",
        "Alertes en temps réel",
        "Rédaction courriers auto",
        "Licences click-through",
        "Support prioritaire",
      ],
      highlight: true,
    },
    {
      name: "Scale",
      slug: "scale",
      price: 1999,
      bullets: [
        "Surveillance illimitée",
        "Détection usages web",
        "Alertes en temps réel",
        "Rédaction courriers auto",
        "Licences click-through",
        "Intégration API",
      ],
      highlight: false,
    },
  ];

  const includedFeatures = [
    "Interface intuitive",
    "Mises à jour régulières",
    "Sécurité des données",
    "Conformité RGPD",
  ];

  const guarantees = [
    {
      title: "Sans engagement",
      description: "Testez sans risque nos services.",
    },
    {
      title: "Sans engagement",
      description: "Annulez votre abonnement à tout moment.",
    },
    {
      title: "Support français",
      description: "Notre équipe dédiée est à votre écoute.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: bgColor,
        "--primary": primaryColor,
        "--accent": accentColor,
        "--bg": bgColor,
        "--text-color": textColor,
        "--dark-text-color": darkTextColor,
      }}
      className="flex flex-col text-[var(--text-color)]"
    >
<div className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <header className="text-center py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg shadow-lg mb-16">
          <h1 className="text-5xl font-extrabold text-[var(--dark-text-color)] mb-4">
            Offres
          </h1>
          <h2 className="text-2xl font-semibold text-[var(--dark-text-color)]">
            Choisissez selon votre rythme
          </h2>
        </header>

        {/* Pricing Cards Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">
            Nos Tarifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <article
                key={tier.slug}
                className={`bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col transition-all duration-300 hover:scale-[1.02]
                  ${tier.highlight ? "border-4 border-[var(--accent)]" : ""}`}
              >
                <h3 className="text-3xl font-bold text-center mb-4 text-[var(--primary)]">
                  {tier.name}
                </h3>
                <p className="text-5xl font-extrabold text-center mb-6 text-[var(--text-color)]">
                  {tier.price}€
                  <span className="text-xl font-normal text-gray-400">
                    {" "}
                    / mois
                  </span>
                </p>
                <ul className="list-none space-y-3 mb-8 flex-grow">
                  {tier.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <svg
                        className="w-6 h-6 mr-3 text-[var(--primary)] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/contact?tier=${tier.slug}`}
                  className="block w-full text-center py-3 px-6 rounded-md text-[var(--dark-text-color)] font-semibold transition-colors duration-300
                    bg-[var(--primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-75"
                >
                  Choisir {tier.name}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Included in all offers Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">
            Inclus dans toutes les offres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center text-center"
              >
                <svg
                  className="w-8 h-8 mr-4 text-[var(--accent)] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="text-xl font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">
            Nos Garanties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <article
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-[var(--primary)]">
                  {guarantee.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {guarantee.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Teaser Section */}
        <section className="text-center py-16 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-color)]">
            Des questions ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Consultez notre FAQ pour plus de détails.
          </p>
          <a
            href="/faq"
            className="inline-block py-3 px-8 rounded-md text-[var(--dark-text-color)] font-semibold transition-colors duration-300
              bg-[var(--accent)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-75"
          >
            Voir la FAQ
          </a>
        </section>
      </div>
</main>
  );
}
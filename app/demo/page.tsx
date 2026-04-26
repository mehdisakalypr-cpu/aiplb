"use client";

export default function GeneratedPage() {
const cardData = [
    {
      title: "Détection d'Usage",
      tag: "Aperçu",
      rows: [
        { label: "Source", value: "hubspot.com/blog" },
        { label: "IP Détectée", value: "Méthode 'CRM Flywheel'" },
        { label: "Date", value: "2023-10-26" },
        { label: "Contexte", value: "Article de blog" },
        { label: "Fréquence", value: "Élevée" },
        { label: "Localisation", value: "Global" },
        { label: "Statut", value: "En cours" },
      ],
    },
    {
      title: "Analyse de Conformité",
      tag: "Comparaison",
      rows: [
        { label: "Licence", value: "Non trouvée" },
        { label: "Usage Actuel", value: "Commercial" },
        { label: "Brevet ID", value: "US1234567B2" },
        { label: "Propriétaire", value: "HubSpot Inc." },
        { label: "Risque", value: "Élevé" },
        { label: "Recommandation", value: "Action immédiate" },
        { label: "Dernière MAJ", value: "2023-10-27" },
      ],
    },
    {
      title: "Synthèse d'Action",
      tag: "Résumé",
      rows: [
        { label: "Action", value: "Lettre de C&D" },
        { label: "Option", value: "Licence Commerciale" },
        { label: "Tarif Proposé", value: "À partir de 5000€" },
        { label: "Contact", value: "Automatisé" },
        { label: "Statut", value: "En attente" },
        { label: "Prochaine Étape", value: "Suivi 7 jours" },
        { label: "Priorité", value: "Urgent" },
      ],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        "--bg": "#06140E",
        "--primary": "#10B981",
        "--accent": "#FBBF24",
      }}
      className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-gray-100"
    >
      <header className="w-full max-w-4xl text-center mb-16">
        <div
          className="p-8 rounded-lg shadow-lg"
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)",
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Démo de IP Licensing Bot
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Sur la marque HubSpot
          </h2>
        </div>
      </header>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {cardData.map((card, index) => (
          <article
            key={index}
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col"
            style={{ background: "#0A2018" }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-primary">
                {card.title}
              </h3>
              <span className="bg-accent text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                {card.tag}
              </span>
            </div>
            <div className="p-4 flex-grow">
              {card.rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex justify-between py-2 border-b border-gray-700 last:border-b-0"
                >
                  <span className="text-gray-400 text-sm">{row.label}</span>
                  <span className="text-gray-100 text-sm font-medium">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="text-center mb-16">
        <a
          href="/demo/exemple"
          className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300"
          aria-label="Voir le rapport complet de la démo"
        >
          Cliquez pour voir le rapport complet
        </a>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-semibold text-gray-100 mb-6">
          Prêt à protéger votre IP ?
        </h3>
        <a
          href="/contact?from=demo"
          className="inline-block bg-accent text-gray-900 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-opacity-90 transition-colors duration-300"
          aria-label="Lancer ma démo personnalisée"
        >
          Lancer ma démo
        </a>
      </section>
    </main>
  );
}
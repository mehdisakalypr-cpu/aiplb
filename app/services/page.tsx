import Link from "next/link";
export default function GeneratedPage() {
return (
    <main
      style={{ minHeight: "100vh", "--bg": "#06140E", background: "var(--bg)" }}
      className="relative text-white"
    >
<header className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="max-w-4xl mx-auto p-8 rounded-xl"
          style={{
            background:
              "linear-gradient(90deg, #10B981 0%, #FBBF24 100%)",
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Services IP Licensing Bot
          </h1>
          <p className="text-xl sm:text-2xl text-white font-medium">
            Votre agent autonome de licence de propriété intellectuelle.
          </p>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: "#10B981" }}>
          Nos Services Concrets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article className="p-6 rounded-lg shadow-lg" style={{ background: "#0D251D" }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#FBBF24" }}>
              Surveillance IP Automatisée
            </h3>
            <p className="text-gray-300 mb-6">
              Détecte l&apos;utilisation non autorisée de votre IP brevetée sur le web.
              Identifie les contrevenants potentiels en temps réel.
            </p>
            <h4 className="text-lg font-medium mb-3" style={{ color: "#10B981" }}>
              Ce que vous obtenez :
            </h4>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>Rapports d&apos;usage détaillés.</li>
              <li>Alertes en temps réel.</li>
              <li>Preuves d&apos;utilisation horodatées.</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg shadow-lg" style={{ background: "#0D251D" }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#FBBF24" }}>
              Rédaction de Mises en Demeure
            </h3>
            <p className="text-gray-300 mb-6">
              Génère des lettres de cessation et d&apos;abstention personnalisées.
              Conformes aux exigences légales, prêtes à l&apos;envoi.
            </p>
            <h4 className="text-lg font-medium mb-3" style={{ color: "#10B981" }}>
              Ce que vous obtenez :
            </h4>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>Lettres prêtes à l&apos;envoi.</li>
              <li>Arguments juridiques clairs.</li>
              <li>Suivi des envois.</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg shadow-lg" style={{ background: "#0D251D" }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#FBBF24" }}>
              Négociation de Licences
            </h3>
            <p className="text-gray-300 mb-6">
              Propose des licences commerciales cliquables aux contrevenants.
              Facilite un accord rapide et équitable sans friction.
            </p>
            <h4 className="text-lg font-medium mb-3" style={{ color: "#10B981" }}>
              Ce que vous obtenez :
            </h4>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>Contrats de licence standardisés.</li>
              <li>Options de paiement flexibles.</li>
              <li>Historique des accords.</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg shadow-lg" style={{ background: "#0D251D" }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#FBBF24" }}>
              Gestion des Litiges
            </h3>
            <p className="text-gray-300 mb-6">
              Centralise communications et documents pour actions légales.
              Prépare efficacement votre dossier en cas de contentieux.
            </p>
            <h4 className="text-lg font-medium mb-3" style={{ color: "#10B981" }}>
              Ce que vous obtenez :
            </h4>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>Dossiers de preuves organisés.</li>
              <li>Historique des échanges.</li>
              <li>Préparation aux contentieux.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "#10B981" }}>
          Notre Technologie Sous le Capot
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 p-8 rounded-xl" style={{ background: "#0D251D" }}>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">OpenAI</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">LangChain</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">Next.js</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">React</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">PostgreSQL</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">Vercel</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">Tailwind CSS</span>
          <span className="text-xl sm:text-2xl font-medium text-gray-300">TypeScript</span>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ color: "#10B981" }}>
          Questions Fréquentes
        </h2>
        <ul className="space-y-6">
          <li>
            <Link
              href="/faq#detection"
              className="text-xl font-medium hover:underline"
              style={{ color: "#FBBF24" }}
            >
              Comment fonctionne la détection ?
            </Link>
          </li>
          <li>
            <Link
              href="/faq#legalite"
              className="text-xl font-medium hover:underline"
              style={{ color: "#FBBF24" }}
            >
              Est-ce légalement contraignant ?
            </Link>
          </li>
          <li>
            <Link
              href="/faq#couts"
              className="text-xl font-medium hover:underline"
              style={{ color: "#FBBF24" }}
            >
              Quels sont les coûts ?
            </Link>
          </li>
        </ul>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="max-w-3xl mx-auto p-10 rounded-xl flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, #10B981 0%, #FBBF24 100%)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Prêt à Protéger Votre IP ?
          </h2>
          <Link
            href="/demo"
            className="inline-block px-10 py-4 text-xl font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
            style={{ background: "#06140E", color: "#FBBF24" }}
          >
            Demander une Démonstration
          </Link>
        </div>
      </section>
</main>
  );
}
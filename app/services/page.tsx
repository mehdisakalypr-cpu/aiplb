"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      

      <header className="relative w-full py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Services IP Licensing Bot</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Automatisez la protection et la monétisation de votre propriété intellectuelle
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/30 to-transparent" />
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Détection automatique des usages",
                description: "Surveille en continu les sites web, dépôts de code et bases de données publiques.",
                benefits: [
                  "Alertes en temps réel dès qu'une utilisation est détectée",
                  "Preuves d'usage horodatées et stockées",
                  "Exclusions automatiques des usages légitimes (fair use, citations)"
                ]
              },
              {
                title: "Génération de lettres de mise en demeure",
                description: "Crée des documents juridiques adaptés à chaque cas de violation.",
                benefits: [
                  "Modèles juridiques validés par des avocats",
                  "Personnalisation automatique avec les détails de l'infraction",
                  "Export en PDF ou envoi direct par email"
                ]
              },
              {
                title: "Licences commerciales cliquables",
                description: "Propose des contrats de licence standardisés avec paiement intégré.",
                benefits: [
                  "Tarifs prédéfinis selon le type d'utilisation",
                  "Paiement en ligne sécurisé via Stripe",
                  "Contrats signés électroniquement"
                ]
              },
              {
                title: "Tableau de bord de suivi",
                description: "Centralise toutes les actions et résultats dans une interface claire.",
                benefits: [
                  "Vue d'ensemble des violations détectées",
                  "Suivi des licences accordées et revenus générés",
                  "Rapports téléchargeables pour vos avocats"
                ]
              }
            ].map((service, index) => (
              <article key={index} className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
                <h2 className="text-xl font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <h3 className="text-sm font-medium text-green-400 mb-2">Ce que vous obtenez :</h3>
                <ul className="space-y-2 text-gray-300">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-green-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white text-center mb-12">Pile technique</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            {[
              "Next.js", "React Server Components", "Tailwind CSS", "TypeScript",
              "Stripe API", "PostgreSQL", "Redis", "Vercel AI"
            ].map((tech, index) => (
              <span key={index} className="text-lg font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white text-center mb-12">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { question: "Comment l'outil détecte-t-il les utilisations de mon brevet ?", anchor: "detection" },
              { question: "Les lettres générées sont-elles juridiquement valides ?", anchor: "validite" },
              { question: "Puis-je utiliser ce service pour plusieurs brevets ?", anchor: "multi-brevets" }
            ].map((faq, index) => (
              <article key={index} className="bg-gray-800/50 rounded-xl p-6 border border-yellow-500/20">
                <h3 className="font-medium text-white mb-3">{faq.question}</h3>
                <a
                  href={`/faq#${faq.anchor}`}
                  className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                  aria-label={`Voir la réponse à : ${faq.question}`}
                >
                  Voir la réponse
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-600/80 to-yellow-500/80 p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://image.pollinations.ai/prompt/abstract%20geometric%20network%20connections%20on%20dark%20background%2C%20cyberpunk%20style%2C%20blue%20and%20green%20neon%20lights%2C%20high%20contrast%2C%204K?width=1920&height=1080&model=flux&nologo=true)' }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Découvrez comment ça fonctionne en pratique</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Testez notre démonstration interactive sans engagement
              </p>
              <a
                href="/demo"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                aria-label="Accéder à la démonstration du produit"
              >
                Essayer la démo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
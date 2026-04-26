import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <style jsx global>{`
        :root {
          --bg: #06140E;
          --primary: #10B981;
          --accent: #FBBF24;
        }
      `}</style>
      <Nav />
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Démo de IP Licensing Bot</h1>
        <h2 className="text-xl md:text-2xl text-gray-300">Sur la marque HubSpot</h2>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Snapshot */}
          <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <header className="bg-primary p-3 flex justify-between items-center">
              <h3 className="font-semibold text-black">Snapshot des utilisations</h3>
              <span className="bg-black text-primary text-xs px-2 py-1 rounded">snapshot</span>
            </header>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">HubSpot Academy</span>
                <span className="text-primary">✓ licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Blog "Inbound Marketing"</span>
                <span className="text-primary">✓ licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Template "Email Marketing"</span>
                <span className="text-yellow-400">⚠ non licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Guide "CRM"</span>
                <span className="text-yellow-400">⚠ non licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Webinaire "Automatisation"</span>
                <span className="text-primary">✓ licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Podcast "Ventes"</span>
                <span className="text-yellow-400">⚠ non licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Formation "Content Marketing"</span>
                <span className="text-primary">✓ licencié</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Outil "Live Chat"</span>
                <span className="text-yellow-400">⚠ non licencié</span>
              </div>
            </div>
          </article>

          {/* Card 2: Diff */}
          <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <header className="bg-accent p-3 flex justify-between items-center">
              <h3 className="font-semibold text-black">Évolution des usages</h3>
              <span className="bg-black text-accent text-xs px-2 py-1 rounded">diff</span>
            </header>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau template</span>
                <span className="text-primary">+2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Guide mis à jour</span>
                <span className="text-primary">+1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Webinaire ajouté</span>
                <span className="text-primary">+1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Article supprimé</span>
                <span className="text-red-500">-1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Outil modifié</span>
                <span className="text-primary">+1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Formation archivée</span>
                <span className="text-red-500">-1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nouveau podcast</span>
                <span className="text-primary">+1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Template renommé</span>
                <span className="text-primary">+1</span>
              </div>
            </div>
          </article>

          {/* Card 3: Digest */}
          <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <header className="bg-primary p-3 flex justify-between items-center">
              <h3 className="font-semibold text-black">Résumé des actions</h3>
              <span className="bg-black text-primary text-xs px-2 py-1 rounded">digest</span>
            </header>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">3 nouveaux usages détectés</span>
                <span className="text-primary">→</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">2 licences générées</span>
                <span className="text-primary">✓</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">1 lettre envoyée</span>
                <span className="text-accent">✉</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Revenu potentiel: 12 450 $</span>
                <span className="text-primary">$</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Économies: 8h de travail</span>
                <span className="text-primary">⏱</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Prochaine analyse: dans 7 jours</span>
                <span className="text-primary">📅</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Alertes configurées</span>
                <span className="text-primary">🔔</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Rapport PDF généré</span>
                <span className="text-primary">📄</span>
              </div>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <a
            href="/demo/exemple"
            className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:bg-green-400 transition-colors"
            aria-label="Voir un exemple complet de rapport généré par IP Licensing Bot"
          >
            Cliquez pour voir le rapport complet
          </a>
        </div>
      </section>

      <section className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Testez IP Licensing Bot dès maintenant</h2>
        <a
          href="/contact?from=demo"
          className="inline-block bg-primary text-black font-semibold px-8 py-4 rounded-lg hover:bg-green-400 transition-colors text-lg"
          aria-label="Lancer une démo gratuite de IP Licensing Bot"
        >
          Lancer ma démo
        </a>
      </section>

      <Footer />
      <ChatbotWidget />
    </main>
  );
}
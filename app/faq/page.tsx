import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function GeneratedPage() {
const primaryColor = "#10B981";
  const accentColor = "#FBBF24";
  const bgColor = "#06140E";
  const textColor = "#E0E0E0"; // Light grey for text on dark background
  const headingColor = "#FFFFFF"; // White for headings

  return (
    <main style={{ minHeight: '100vh', background: bgColor, color: textColor }}>
      <Nav />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4" style={{ color: headingColor }}>
            Questions Fréquentes
          </h1>
          <p className="text-xl" style={{ color: textColor }}>
            Vos interrogations, nos réponses claires.
          </p>
        </header>

        {/* FAQ Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: headingColor }}>
            Produit
          </h2>
          <div className="space-y-6">
            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Comment le Bot détecte-t-il l'usage ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Notre Bot scanne le web ouvert, les réseaux sociaux et les bases de données publiques. Il utilise l'intelligence artificielle pour identifier les correspondances précises avec votre propriété intellectuelle brevetée.
              </p>
            </details>

            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Que fait-il après détection ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Après avoir identifié une utilisation non autorisée, le Bot rédige automatiquement un courrier de mise en demeure. Il propose ensuite une licence commerciale simple, payable en un clic.
              </p>
            </details>

            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Puis-je revoir les actions du Bot ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Oui, absolument. Toutes les actions proposées par le Bot, qu'il s'agisse de courriers ou d'offres de licence, sont soumises à votre validation finale avant envoi.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: headingColor }}>
            Tarification
          </h2>
          <div className="space-y-6">
            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Comment fonctionne la facturation ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Nous proposons un abonnement mensuel. Des frais supplémentaires sont appliqués, basés sur les licences commerciales effectivement vendues par le Bot.
              </p>
            </details>

            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Puis-je changer d'offre ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Oui, vous pouvez modifier votre abonnement à tout moment. Les changements prendront effet au début de votre prochain cycle de facturation.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: headingColor }}>
            Sécurité & Données
          </h2>
          <div className="space-y-6">
            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Le service est-il conforme au RGPD ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Oui, nous respectons strictement le Règlement Général sur la Protection des Données (RGPD). Vos informations et celles de vos clients sont traitées avec la plus grande confidentialité.
              </p>
            </details>

            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Où sont hébergées mes données ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Toutes vos données sont hébergées sur des serveurs sécurisés situés en Europe, garantissant un cadre légal de protection des données robuste.
              </p>
            </details>

            <details className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#0A2018' }}>
              <summary className="font-semibold text-lg cursor-pointer py-2 focus:outline-none" style={{ color: primaryColor }}>
                Puis-je exporter mes données ?
              </summary>
              <p className="pt-4 leading-relaxed" style={{ color: textColor }}>
                Oui, vous avez la possibilité d'exporter l'intégralité de vos données à tout moment, directement depuis votre tableau de bord.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6" style={{ color: headingColor }}>
            Une autre question ?
          </h2>
          <Link href="/contact" passHref>
            <span
              className="inline-block px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: accentColor,
                color: bgColor, // Text on accent should be dark for contrast
                boxShadow: `0 4px 15px rgba(251, 191, 36, 0.4)`, // Soft glow
                cursor: 'pointer',
              }}
            >
              Contactez-nous
            </span>
          </Link>
        </section>
      </div>

      <Footer />
      <ChatbotWidget />
    </main>
  );
}
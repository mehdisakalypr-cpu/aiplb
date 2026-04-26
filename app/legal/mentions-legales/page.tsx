"use client";

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
      <header className="py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">Mentions légales</h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="space-y-8 text-gray-300 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Éditeur</h2>
            <p>IP Licensing Bot SAS, RCS Paris, contact@aiplb.com</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Hébergement</h2>
            <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Directeur de publication</h2>
            <p>IP Licensing Bot SAS</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu et des fonctionnalités de ce site sont protégés par le droit d'auteur et les droits de propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Crédits</h2>
            <p>Design et développement par IP Licensing Bot SAS.</p>
          </div>
        </article>
      </section>

      <Footer />
      <ChatbotWidget />
    </main>
  );
}
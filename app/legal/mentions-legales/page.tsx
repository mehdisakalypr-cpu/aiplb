"use client";

export default function MentionsLegalesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      
      <section aria-labelledby="legal-title" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 id="legal-title" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem' }}>Mentions légales</h1>

        <article style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>Éditeur</h2>
          <p style={{ color: '#E5E7EB', lineHeight: '1.6' }}>
            IP Licensing Bot SAS, RCS Paris, contact@aiplb.com
          </p>
        </article>

        <article style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>Hébergement</h2>
          <p style={{ color: '#E5E7EB', lineHeight: '1.6' }}>
            Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789
          </p>
        </article>

        <article style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>Directeur de publication</h2>
          <p style={{ color: '#E5E7EB', lineHeight: '1.6' }}>
            Le directeur de publication est le représentant légal de IP Licensing Bot SAS.
          </p>
        </article>

        <article style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
          <p style={{ color: '#E5E7EB', lineHeight: '1.6' }}>
            L’ensemble du contenu (textes, images, logos, logiciels) est protégé par le droit d’auteur et les droits de propriété intellectuelle.
          </p>
        </article>

        <article style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>Crédits</h2>
          <p style={{ color: '#E5E7EB', lineHeight: '1.6' }}>
            Les images générées proviennent de Pollinations AI.
          </p>
        </article>
      </section>
    </main>
  );
}
"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <Nav />
      <header style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ color: '#FFFFFF', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Contact</h1>
        <p style={{ color: '#A0AEC0', fontSize: '1.25rem' }}>Réponse en moins de 24h</p>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Form Column */}
        <article>
          <form
            action="/api/contact"
            method="POST"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: '#1A202C',
              padding: '2rem',
              borderRadius: '0.5rem'
            }}
          >
            <div>
              <label htmlFor="name" style={{ display: 'block', color: '#FFFFFF', marginBottom: '0.5rem' }}>Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #4A5568',
                  background: '#2D3748',
                  color: '#FFFFFF'
                }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', color: '#FFFFFF', marginBottom: '0.5rem' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #4A5568',
                  background: '#2D3748',
                  color: '#FFFFFF'
                }}
              />
            </div>

            <div>
              <label htmlFor="company" style={{ display: 'block', color: '#FFFFFF', marginBottom: '0.5rem' }}>Entreprise</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #4A5568',
                  background: '#2D3748',
                  color: '#FFFFFF'
                }}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', color: '#FFFFFF', marginBottom: '0.5rem' }}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #4A5568',
                  background: '#2D3748',
                  color: '#FFFFFF',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: '#10B981',
                color: '#06140E',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#059669'}
              onMouseOut={(e) => e.currentTarget.style.background = '#10B981'}
            >
              Envoyer
            </button>
          </form>
        </article>

        {/* Info Card Column */}
        <article style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            background: '#1A202C',
            padding: '2rem',
            borderRadius: '0.5rem',
            color: '#FFFFFF'
          }}>
            <p style={{ marginBottom: '1rem' }}><strong>Email</strong></p>
            <a
              href="mailto:contact@aiplb.com"
              style={{
                color: '#10B981',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              contact@aiplb.com
            </a>
            <p style={{ marginTop: '1.5rem', fontSize: '0.875rem' }}>
              Réponses sous 24h en semaine.<br />
              Week-end : réponse le lundi.
            </p>
          </div>

          <div style={{
            background: '#1A202C',
            padding: '2rem',
            borderRadius: '0.5rem',
            color: '#FFFFFF'
          }}>
            <p style={{ fontSize: '0.875rem' }}>
              Vous parlez à un humain,<br />
              pas un bot.
            </p>
          </div>

          <div style={{
            background: '#1A202C',
            padding: '2rem',
            borderRadius: '0.5rem',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            <p>Paris, France</p>
          </div>
        </article>
      </section>

      <Footer />
      <ChatbotWidget />
    </main>
  );
}
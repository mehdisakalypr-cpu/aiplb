"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <header style={{ padding: '4rem 1rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Contact</h1>
        <h2 style={{ color: '#FBBF24', fontSize: '1.5rem', fontWeight: 400, margin: '0.5rem 0 0' }}>Réponse en moins de 24h</h2>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'flex-start' }}>
          {/* Form Column */}
          <article style={{ background: '#111827', padding: '2rem', borderRadius: '0.5rem' }}>
            <form action="/api/contact" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ color: '#F8FAFC', fontSize: '0.875rem', fontWeight: 500 }}>Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #4B5563',
                    background: '#F8FAFC',
                    color: '#0F172A',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ color: '#F8FAFC', fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #4B5563',
                    background: '#F8FAFC',
                    color: '#0F172A',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="company" style={{ color: '#F8FAFC', fontSize: '0.875rem', fontWeight: 500 }}>Entreprise</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #4B5563',
                    background: '#F8FAFC',
                    color: '#0F172A',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ color: '#F8FAFC', fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #4B5563',
                    background: '#F8FAFC',
                    color: '#0F172A',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#10B981',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  alignSelf: 'flex-start'
                }}
              >
                Envoyer
              </button>
            </form>
          </article>

          {/* Info Card Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#111827', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>Contact</h3>
              <p style={{ color: '#FBBF24', fontSize: '1rem', margin: '0.5rem 0 0' }}>Vous parlez à un humain, pas un bot.</p>

              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ color: '#F8FAFC', fontSize: '0.875rem', margin: 0 }}>Email</p>
                <a
                  href="mailto:contact@aiplb.com"
                  style={{
                    color: '#10B981',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  contact@aiplb.com
                </a>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ color: '#F8FAFC', fontSize: '0.875rem', margin: 0 }}>Heures</p>
                <p style={{ color: '#F8FAFC', fontSize: '1rem', margin: '0.25rem 0 0' }}>Lun-Ven 9h-18h UTC+2</p>
              </div>
            </div>

            <div style={{ background: '#111827', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <p style={{ color: '#F8FAFC', fontSize: '1rem', margin: 0 }}>Paris, France</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
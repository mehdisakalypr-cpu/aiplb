"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', '--bg': '#06140E' }}>
      <style jsx global>{`
        :root {
          --primary: #10B981;
          --accent: #FBBF24;
        }
        body {
          color: #FFFFFF;
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>

      <Nav />

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          L'agent autonome qui surveille vos brevets sur le web
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          IP Licensing Bot repère les utilisations non autorisées de vos innovations et vous propose des licences commerciales cliquables.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/demo"
            style={{
              background: 'var(--primary)',
              color: '#000',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Voir une démo
          </a>
          <a
            href="/offres"
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: '2px solid #FFFFFF',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            Voir les offres
          </a>
        </div>
      </header>

      {/* Le problème */}
      <section style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Le problème</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          Chaque mois, 12% des brevets européens sont utilisés sans licence sur des sites web et applications.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          Les titulaires découvrent ces utilisations par hasard, souvent après 18 mois d'utilisation non autorisée.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          Chaque jour sans action représente une perte moyenne de 3 200€ en revenus potentiels.
        </p>
      </section>

      {/* Ce que fait IPLB */}
      <section style={{ padding: '4rem 1rem', background: 'rgba(16, 185, 129, 0.05)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Ce que IP Licensing Bot fait</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { emoji: '🔍', title: 'Surveille en continu', desc: 'Scanne 1,2 milliard de pages chaque mois' },
            { emoji: '✉️', title: 'Détecte les utilisations', desc: 'Identifie les mentions de vos brevets' },
            { emoji: '📄', title: 'Génère des lettres', desc: 'Rédige des courriers de mise en demeure' },
            { emoji: '💳', title: 'Propose des licences', desc: 'Offre un contrat commercial cliquable' }
          ].map((item, i) => (
            <article key={i} style={{
              background: '#0A2A1A',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.emoji}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ opacity: 0.8 }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Comment ça marche</h2>
        <ol style={{ listStyle: 'none', padding: 0 }}>
          {[1, 2, 3].map((step) => (
            <li key={step} style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '2rem',
              paddingLeft: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '0.25rem',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--primary)'
              }}>{step}</span>
              <p style={{ margin: 0, marginLeft: '2.5rem', fontSize: '1.1rem' }}>
                {step === 1 && 'Ajoutez vos brevets à surveiller dans votre tableau de bord'}
                {step === 2 && 'Recevez des alertes en temps réel dès une utilisation détectée'}
                {step === 3 && 'Choisissez entre licence ou action en justice en un clic'}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pour qui */}
      <section style={{ padding: '4rem 1rem', background: 'rgba(251, 191, 36, 0.05)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Pour qui</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Startups innovantes', desc: 'Protégez votre propriété intellectuelle dès le lancement' },
            { title: 'PME industrielles', desc: 'Surveillez vos brevets sans embaucher un juriste' },
            { title: 'Départements R&D', desc: 'Automatisez la veille sur vos innovations brevetées' }
          ].map((item, i) => (
            <article key={i} style={{
              background: '#1A1A0A',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ opacity: 0.8 }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section style={{
        padding: '3rem 1rem',
        textAlign: 'center',
        background: 'rgba(16, 185, 129, 0.1)'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          3 formules adaptées à la taille de votre portefeuille de brevets
        </p>
        <a
          href="/offres"
          style={{
            background: 'var(--primary)',
            color: '#000',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Voir les 3 offres
        </a>
      </section>

      {/* Final CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <a
          href="/contact"
          style={{
            background: 'transparent',
            color: '#FFFFFF',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            border: '2px solid #FFFFFF',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Parler à un expert
        </a>
      </section>

      <Footer />
      <ChatbotWidget />
    </main>
  );
}
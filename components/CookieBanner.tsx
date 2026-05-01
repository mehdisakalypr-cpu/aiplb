'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'gapup_cookie_consent_v1'

type Consent = {
  essential: true
  analytics: boolean
  marketing: boolean
  ts: string
  version: '1.0'
}

function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Consent) : null
  } catch {
    return null
  }
}

function writeConsent(c: Omit<Consent, 'ts' | 'version'>) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...c, ts: new Date().toISOString(), version: '1.0' }),
    )
  } catch {}
}

export default function CookieBanner() {
  const [decided, setDecided] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const existing = readConsent()
    if (existing) {
      setAnalytics(existing.analytics)
      setMarketing(existing.marketing)
      setDecided(true)
    } else {
      setDecided(false)
    }
  }, [])

  if (decided) return null

  const acceptAll = () => {
    writeConsent({ essential: true, analytics: true, marketing: true })
    setDecided(true)
  }
  const refuseAll = () => {
    writeConsent({ essential: true, analytics: false, marketing: false })
    setDecided(true)
  }
  const saveCustom = () => {
    writeConsent({ essential: true, analytics, marketing })
    setDecided(true)
  }

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        maxWidth: 720,
        margin: '0 auto',
        zIndex: 9999,
        background: '#0F0A1F',
        border: '1px solid #4C1D95',
        borderRadius: 12,
        padding: 20,
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        color: '#FFF',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: 14,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 24 }}>🍪</span>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 6px' }}>Cookies &amp; vie privée</h2>
          <p style={{ margin: 0, color: '#D1D5DB', lineHeight: 1.5 }}>
            On utilise des cookies essentiels (auth, panier) toujours actifs. Pour les cookies analytics
            (mesure d&apos;audience anonymisée) et marketing (pertinence offres), tu peux choisir.
            Aucun cookie publicitaire tiers sans ton accord. Voir{' '}
            <a href="/legal/privacy" style={{ color: '#FFD93D', textDecoration: 'underline' }}>
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>

      {showSettings && (
        <div style={{ marginTop: 16, padding: 12, background: '#1A1130', borderRadius: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: '#9CA3AF' }}>
            <input type="checkbox" checked disabled />
            Essentiels (auth, panier, sécurité) — toujours actifs
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            Analytics anonymisés (Vercel Analytics, IP anonymisée)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
            />
            Marketing (offres personnalisées par segment)
          </label>
        </div>
      )}

      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={() => setShowSettings(!showSettings)}
          style={{
            padding: '8px 14px',
            background: 'transparent',
            color: '#D1D5DB',
            border: '1px solid #4C1D95',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {showSettings ? 'Masquer' : 'Personnaliser'}
        </button>
        {showSettings ? (
          <button
            onClick={saveCustom}
            style={{
              padding: '8px 14px',
              background: '#7C3AED',
              color: '#FFF',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Enregistrer mes choix
          </button>
        ) : (
          <>
            <button
              onClick={refuseAll}
              style={{
                padding: '8px 14px',
                background: '#1F1535',
                color: '#FFF',
                border: '1px solid #4C1D95',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              Refuser tout
            </button>
            <button
              onClick={acceptAll}
              style={{
                padding: '8px 14px',
                background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)',
                color: '#0F0A1F',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 800,
              }}
            >
              Accepter tout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

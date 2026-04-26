/**
 * /demo — public demo page showing what AIPLB delivers
 * Hardcoded realistic example tracking HubSpot for a fictional client.
 * Shows the full weekly digest UX as it would arrive in email/Slack.
 */

export const metadata = {
  title: 'Demo — AIPLB Weekly Digest Example',
  description: 'See exactly what your weekly competitive intelligence digest looks like.',
}

const DEMO_DATE = '2026-04-25'
const PERIOD = 'Week 17 · 19 Apr → 25 Apr 2026'

// Demo data — realistic snapshot of HubSpot changes over 7 days
const TRACKED = {
  name: 'HubSpot',
  domain: 'hubspot.com',
  surfaces: ['pricing', 'blog', 'careers', 'homepage'],
}

const CHANGES = [
  {
    surface: 'pricing',
    importance: 'high' as const,
    icon: '💰',
    title: 'Marketing Hub Pro tier raised from $890 → $1,170/mo (+31.5%)',
    detail: 'HubSpot Marketing Hub Pro increased from $890/mo to $1,170/mo for new accounts (existing customers grandfathered until 2026-Q3). Starter and Enterprise tiers unchanged.',
    why_it_matters: 'Major repricing — HubSpot is testing willingness-to-pay on Marketing Hub. Customers locked in at old price for 1 quarter. If you compete on pricing or have HubSpot Pro customers in pipeline, this is a +31% talking point.',
    source: 'https://hubspot.com/pricing/marketing',
    detected_at: '2026-04-22 14:30 UTC',
  },
  {
    surface: 'blog',
    importance: 'medium' as const,
    icon: '📝',
    title: '3 new blog posts on AI agents (signal: positioning shift)',
    detail: 'HubSpot published 3 articles in 5 days on "AI Agents for Sales", "Agentic Workflows in CRM", "Why Marketing AI is Different from ChatGPT". Author : VP of Product Marketing.',
    why_it_matters: 'HubSpot is positioning into the AI-agents narrative — likely product launch coming Q3. Watch for new feature in Sales Hub. Competitive angle : if your product is AI-native, double-down on differentiation messaging now.',
    source: 'https://hubspot.com/blog',
    detected_at: '2026-04-23 09:00 UTC',
  },
  {
    surface: 'careers',
    importance: 'high' as const,
    icon: '👥',
    title: '12 new job postings on AI/ML roles (was 3 last month)',
    detail: 'Sudden hiring surge : 8 roles "Senior AI/ML Engineer" + 3 "AI Product Managers" + 1 "Director of Applied AI". All in Boston HQ + remote-friendly.',
    why_it_matters: '4× hiring acceleration on AI = HubSpot is doubling down on AI strategy. Confirms the positioning shift detected in blog. Estimated Q3 product launch confidence : 85%. Plan your countermove now (not Q3).',
    source: 'https://hubspot.com/careers',
    detected_at: '2026-04-24 11:15 UTC',
  },
  {
    surface: 'homepage',
    importance: 'low' as const,
    icon: '🏠',
    title: 'Hero copy changed : "All-in-one CRM" → "AI-powered customer platform"',
    detail: 'Homepage hero subtle but significant rebrand. New hero CTA "Try AI Agents Free" replacing "Get HubSpot Free".',
    why_it_matters: 'Confirms brand pivot toward AI. Aligns with the blog + hiring signals. If your homepage still says "all-in-one CRM" or generic AI claims, time to differentiate harder.',
    source: 'https://hubspot.com',
    detected_at: '2026-04-25 06:45 UTC',
  },
]

const SUMMARY_TLDR = `HubSpot is making 3 coordinated moves this week : (1) +31.5% pricing on Marketing Hub Pro, (2) AI-agents narrative ramping in content + careers (12 new AI roles vs 3 last month, 4× acceleration), (3) homepage rebrand to "AI-powered customer platform". Expect a Q3 product launch in the AI-agents space. Action for you : (a) plan messaging counter-positioning before Q3, (b) reach out to HubSpot Marketing Hub Pro customers locked at old price BEFORE 2026-Q3 grandfather expiry — they'll feel the +31% jump and may shop alternatives.`

export default function DemoPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#030314', color: '#E8EEF7', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top banner */}
      <div style={{ background: 'linear-gradient(90deg, #1a1a3e, #0f0f2e)', borderBottom: '1px solid rgba(201,168,76,.3)', padding: '14px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontSize: 12, color: '#8a8d99' }}>
            🎯 <strong style={{ color: '#C9A84C' }}>DEMO</strong> — example of a real weekly digest you receive every Monday
          </div>
          <a href="/pricing" style={{ fontSize: 12, padding: '6px 12px', background: '#C9A84C', color: '#0a0a1e', textDecoration: 'none', borderRadius: 6, fontWeight: 700 }}>
            Get yours →
          </a>
        </div>
      </div>

      {/* Email-like container */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 20px 80px' }}>
        {/* Email header */}
        <div style={{ background: '#0b0e16', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#8a8d99', marginBottom: 8 }}>
              <span>📧</span>
              <span>From : <strong style={{ color: '#C9A84C' }}>AIPLB &lt;weekly@aiplb.vercel.app&gt;</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#8a8d99', marginBottom: 8 }}>
              <span>📅</span>
              <span>{DEMO_DATE} · {PERIOD}</span>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 800, margin: '8px 0 4px', color: '#fff' }}>
              🃏 4 changes detected on <span style={{ color: '#C9A84C' }}>{TRACKED.name}</span> this week
            </h1>
            <div style={{ fontSize: 13, color: '#8a8d99' }}>
              Tracked surfaces : {TRACKED.surfaces.join(' · ')} · {TRACKED.domain}
            </div>
          </div>

          {/* TL;DR — LLM summary */}
          <div style={{ padding: '24px', background: 'rgba(201,168,76,.06)', borderBottom: '1px solid rgba(201,168,76,.2)' }}>
            <div style={{ fontSize: 10, letterSpacing: '.2em', color: '#C9A84C', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
              ⚡ TL;DR — Strategic read
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#E8EEF7', margin: 0 }}>
              {SUMMARY_TLDR}
            </p>
          </div>

          {/* Changes */}
          <div style={{ padding: '8px 0' }}>
            {CHANGES.map((c, i) => {
              const importanceColor = c.importance === 'high' ? '#ef4444' : c.importance === 'medium' ? '#f59e0b' : '#6b7280'
              const importanceLabel = c.importance === 'high' ? 'HIGH IMPACT' : c.importance === 'medium' ? 'MEDIUM' : 'LOW'
              return (
                <div key={i} style={{ padding: '20px 24px', borderTop: i > 0 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ fontSize: 24 }}>{c.icon}</div>
                    <div style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, background: `${importanceColor}22`, color: importanceColor, letterSpacing: '.05em', fontWeight: 700 }}>
                      {importanceLabel}
                    </div>
                    <div style={{ fontSize: 11, color: '#6b7280', marginLeft: 'auto' }}>
                      {c.surface} · {c.detected_at}
                    </div>
                  </div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 10px', color: '#fff', lineHeight: 1.4 }}>
                    {c.title}
                  </h2>
                  <div style={{ fontSize: 13, color: '#cfd2dc', lineHeight: 1.6, marginBottom: 12 }}>
                    {c.detail}
                  </div>
                  <div style={{ background: 'rgba(255,255,255,.03)', borderLeft: `2px solid ${importanceColor}`, padding: '10px 14px', borderRadius: '0 6px 6px 0', marginBottom: 8 }}>
                    <div style={{ fontSize: 10, letterSpacing: '.15em', color: importanceColor, textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>
                      Why it matters for you
                    </div>
                    <div style={{ fontSize: 13, color: '#E8EEF7', lineHeight: 1.6 }}>
                      {c.why_it_matters}
                    </div>
                  </div>
                  <a href={c.source} target="_blank" rel="noopener" style={{ fontSize: 11, color: '#8a8d99', textDecoration: 'none' }}>
                    📎 Source: {c.source}
                  </a>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div style={{ padding: '24px', background: 'rgba(0,0,0,.3)', borderTop: '1px solid rgba(255,255,255,.05)' }}>
            <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 8 }}>
              🤖 Generated by AIPLB · Anthropic Claude Sonnet 4.6 · 4 surfaces × 7 days monitored · 1247 datapoints analyzed
            </div>
            <div style={{ fontSize: 11, color: '#6b7280' }}>
              You also receive Slack pings for HIGH IMPACT changes within 5 min of detection (Pro &amp; Enterprise tiers).
            </div>
          </div>
        </div>

        {/* CTA below email */}
        <div style={{ marginTop: 32, padding: 28, background: 'linear-gradient(135deg, rgba(201,168,76,.12), rgba(201,168,76,.04))', border: '1px solid rgba(201,168,76,.4)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '.2em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: 8 }}>
            What you just saw
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 14px', color: '#fff' }}>
            One competitor tracked. One digest. €99/mo.
          </h2>
          <p style={{ fontSize: 14, color: '#cfd2dc', maxWidth: 540, margin: '0 auto 20px', lineHeight: 1.6 }}>
            Klue charges €1k+/mo for the same. Crayon €1.5k+/mo. AIPLB does it at €99/mo (Starter, 3 competitors), €299/mo (Pro, 10 competitors), €499/mo (Enterprise, 25 + Slack daily + PDF + API).
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/pricing" style={{ padding: '12px 22px', background: '#C9A84C', color: '#0a0a1e', textDecoration: 'none', borderRadius: 8, fontWeight: 800, fontSize: 13, letterSpacing: '.04em' }}>
              See pricing →
            </a>
            <a href="/auth/login" style={{ padding: '12px 22px', background: 'rgba(255,255,255,.05)', color: '#E8EEF7', textDecoration: 'none', borderRadius: 8, fontWeight: 700, fontSize: 13, letterSpacing: '.04em', border: '1px solid rgba(255,255,255,.12)' }}>
              Start free trial
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div style={{ marginTop: 24, fontSize: 11, color: '#6b7280', textAlign: 'center' }}>
          Demo data · real product behavior. Actual digests reflect changes detected on YOUR competitors via daily snapshots.
        </div>
      </div>
    </div>
  )
}

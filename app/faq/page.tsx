import Link from "next/link";

export const metadata = {
  title: "FAQ — AIPLB",
  description:
    "Frequently asked questions about AIPLB: pricing, technology, security, RGPD, integrations and onboarding.",
};

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const SECTIONS: Section[] = [
  {
    title: "Pricing",
    items: [
      {
        q: "How is AIPLB cheaper than Klue or Crayon?",
        a: "Klue and Crayon are enterprise battlecard platforms starting around $20–60k/year. AIPLB does one job — daily snapshots + a weekly AI digest — and prices it at €99/mo. We're not a replacement for a competitive enablement team; we're the radar that tells you when something happens.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Subscriptions cancel at the end of the current billing period from your customer portal. No questions, no retention call. Cancel today, keep access until the end of the month.",
      },
      {
        q: "Is there an annual discount?",
        a: "Pay annually and get 2 months free (effectively −16.7%). Email hello@aiplb.app to switch your subscription to annual billing.",
      },
      {
        q: "Do you offer a free trial?",
        a: "Yes — every plan includes a 7-day money-back guarantee. We don't gate the product behind a trial; we let you experience the full digest cycle first.",
      },
    ],
  },
  {
    title: "Technology",
    items: [
      {
        q: "How does a snapshot work?",
        a: "Each tracked surface (pricing, blog, careers, homepage) is fetched once per day. We normalise the HTML, strip noise (cookie banners, nav, footer), then pass the cleaned content through Claude Sonnet 4.6 to extract structured fields. The result is hashed and stored.",
      },
      {
        q: "What if a competitor blocks scraping?",
        a: "We rotate user agents and respect rate limits. For sites with hard anti-bot protection (Cloudflare challenge, captcha) we fall back to a headless browser with a residential IP. On the rare site that still blocks us, you'll get a notice in the digest and we'll work with you to find an alternative source.",
      },
      {
        q: "Which LLM do you use?",
        a: "Claude Sonnet 4.6 via the official Anthropic API for both content extraction and digest summarisation. We do not train on your data — Anthropic's enterprise terms apply.",
      },
      {
        q: "What about JavaScript-rendered sites?",
        a: "Yes — we use a headless Chromium when the static HTML is empty (typical for Next.js / React-only sites). Detection is automatic.",
      },
    ],
  },
  {
    title: "Security & RGPD",
    items: [
      {
        q: "Where is my data stored?",
        a: "All client data (account, competitor list, snapshots, digests) is stored in Supabase EU (Frankfurt region). Application code runs on Vercel's EU edge network. No data leaves the EU except for LLM calls to Anthropic (US), which are limited to public competitor content — never your own internal data.",
      },
      {
        q: "Can I export my data?",
        a: "Yes. From the dashboard you can export every snapshot, diff and digest as JSON or CSV. On Enterprise, the API gives you the same access programmatically.",
      },
      {
        q: "Do you use cookies?",
        a: "Only essential cookies (session, CSRF). No marketing trackers, no analytics that profile you individually. We use Vercel Analytics in privacy-friendly mode (no IP, no fingerprint).",
      },
      {
        q: "Are you RGPD compliant?",
        a: "Yes. See /legal/privacy for our full data protection policy. Right of access, rectification, deletion and portability are all supported. DPO contact: mehdi.sakalypr@gmail.com.",
      },
    ],
  },
  {
    title: "Use cases",
    items: [
      {
        q: "What if my competitor doesn't have public pricing?",
        a: "Many B2B competitors hide pricing behind 'Talk to sales'. AIPLB still tracks the rest of the surface — blog, careers, homepage messaging — which often signals pricing changes (new tier launches, sales hires, repositioning). And we'll notify you the day they do publish a price.",
      },
      {
        q: "Multi-language sites?",
        a: "Yes. Claude handles 95+ languages natively. We snapshot the original and the digest is delivered in your preferred language (default: English; French and Spanish available on request).",
      },
      {
        q: "Can I track non-competitors? (suppliers, partners, my own pages)",
        a: "Yes — the system doesn't care if a URL is a competitor or your own /pricing. Some teams track their own pages to catch unintended changes pushed by marketing.",
      },
    ],
  },
  {
    title: "Onboarding",
    items: [
      {
        q: "How long does it take to set up 10 competitors?",
        a: "About 8 minutes. Sign up, paste 10 URLs, hit save. The first snapshot runs within 1 hour, the first digest arrives the following Monday.",
      },
      {
        q: "Do I need an engineer to set this up?",
        a: "No. The whole product is point-and-click for the standard plan. You only need an engineer if you want the API or webhook (Enterprise tier).",
      },
      {
        q: "Can I share the digest with my team?",
        a: "Yes. Forward the email, or — on Pro and above — connect a Slack webhook so the digest posts to a shared #competitive-intel channel automatically.",
      },
    ],
  },
  {
    title: "Integrations",
    items: [
      {
        q: "Slack?",
        a: "Yes — paste your Slack incoming webhook URL in the dashboard. Top changes are posted on detection (HIGH-importance) and the full weekly digest lands every Monday.",
      },
      {
        q: "Microsoft Teams?",
        a: "Use the Teams Incoming Webhook URL the same way as Slack. Both formats render natively.",
      },
      {
        q: "Email?",
        a: "Always on. The weekly digest goes to your account email by default; add CC addresses from the dashboard.",
      },
      {
        q: "Webhook / Zapier / API?",
        a: "Enterprise tier. Custom webhook URL receives a JSON POST on every HIGH-importance diff. The REST API exposes snapshots, diffs and digests under bearer-token auth.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
          FAQ
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          Frequently asked questions
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Can't find your answer? Open the chat in the bottom-right or use{" "}
          <Link href="/contact" className="text-[var(--accent-gold)] underline">
            /contact
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-12">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-gold)]">
              {s.title}
            </h2>
            <div className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)]">
              {s.items.map((qa, i) => (
                <details key={i} className="group p-5">
                  <summary className="cursor-pointer flex justify-between items-center font-medium list-none">
                    <span>{qa.q}</span>
                    <span className="text-[var(--muted)] text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {qa.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

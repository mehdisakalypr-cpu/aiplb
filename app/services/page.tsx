import Link from "next/link";

export const metadata = {
  title: "Services — AIPLB",
  description:
    "AIPLB's five core services: surface tracking, daily snapshots, diff intelligence, weekly digest, and API access.",
};

const SERVICES = [
  {
    n: "01",
    title: "4-surface competitor tracking",
    body:
      "We watch the four pages that actually move: pricing, blog, careers and homepage. These cover 95% of strategic signals — repricing, positioning shifts, hiring waves, launches.",
    example:
      "Example: HubSpot raises Marketing Hub Pro $890 → $1,170 (+31.5%). Detected within 24h on /pricing/marketing.",
  },
  {
    n: "02",
    title: "Daily snapshots with LLM extraction",
    body:
      "Once per day (twice on Enterprise) we scrape each surface, normalise the HTML, and pass it through Claude to extract pricing tables, posts, job descriptions, hero copy. No template per competitor — the LLM adapts to any layout.",
    example:
      "Even if a competitor redesigns their /pricing in React or behind a Cloudflare challenge, we still recover the structured price grid.",
  },
  {
    n: "03",
    title: "Diff intelligence with importance scoring",
    body:
      "Every snapshot is diffed against the previous one. A second LLM pass scores the change (low / medium / high) and writes a one-paragraph 'why it matters' aimed at a founder, not a journalist.",
    example:
      "12 new AI/ML postings (was 3 last month) → tagged HIGH, with commentary: '4× hiring acceleration confirms a Q3 AI launch — plan countermove now'.",
  },
  {
    n: "04",
    title: "Weekly digest delivery",
    body:
      "Every Monday 7am local, we compile the week into a single email (and optional Slack post). Top 3 changes go front-and-centre, the long tail collapses below. The exec view is one screen, no scrolling required.",
    example:
      "See /demo for a real one-week digest tracking HubSpot. Open rate in beta cohort: 78%.",
  },
  {
    n: "05",
    title: "API access (Enterprise)",
    body:
      "REST endpoints to pull every snapshot, diff and digest into your own BI / Notion / Slack pipeline. Webhook out on every HIGH-importance change. OpenAPI spec available on request.",
    example:
      "Push HIGH-importance pricing changes to your sales team's Slack #competitive-intel channel within minutes.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
          Services
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          Five things AIPLB does so you don't have to.
        </h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          AIPLB is a focused tool. We replace the 4-hour Monday-morning scroll
          across competitor blogs, pricing pages, careers boards and homepages
          with a single 5-minute read in your inbox.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-10">
        {SERVICES.map((s) => (
          <article
            key={s.n}
            className="rounded-xl border border-[var(--border)] p-6 md:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-[var(--accent-gold)] font-mono text-sm">
                {s.n}
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">
                {s.title}
              </h2>
            </div>
            <p className="mt-4 text-[var(--foreground)]/90">{s.body}</p>
            <p className="mt-3 text-sm text-[var(--muted)] border-l-2 border-[var(--accent-gold)] pl-3">
              {s.example}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Want to see it on real data?
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          The /demo page shows a complete weekly digest tracking HubSpot. No
          signup required.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/demo"
            className="rounded-md bg-[var(--accent-gold)] text-black px-5 py-3 font-medium"
          >
            See live demo →
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-[var(--border)] px-5 py-3 font-medium hover:bg-neutral-900"
          >
            View pricing
          </Link>
        </div>
      </section>
    </main>
  );
}

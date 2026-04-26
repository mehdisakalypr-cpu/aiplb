import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "€49",
    period: "/mo",
    blurb: "Solo founders watching a tight focused list.",
    features: [
      "5 competitors tracked",
      "Daily snapshots",
      "Weekly digest by email",
      "7-day diff history",
    ],
    cta: "Start Starter",
    plan: "starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "€99",
    period: "/mo",
    blurb: "The standard plan. Track 10, get Slack alerts.",
    features: [
      "10 competitors tracked",
      "Daily snapshots",
      "Slack + email alerts",
      "AI weekly digest (Claude)",
      "30-day diff history",
    ],
    cta: "Start Pro",
    plan: "pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "€299",
    period: "/mo",
    blurb: "Teams tracking a full market.",
    features: [
      "50 competitors tracked",
      "Twice-daily snapshots",
      "Slack + email + webhook",
      "Custom digest schedule",
      "365-day diff history",
      "Priority support",
    ],
    cta: "Start Enterprise",
    plan: "enterprise",
    highlight: false,
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
          Competitive intelligence on autopilot
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
          Track 10 competitors automatically.
        </h1>
        <p className="mt-5 text-xl text-[var(--muted)]">
          Daily snapshots, change diffs, weekly AI digest — straight to your
          inbox or Slack. €99/mo.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/pricing"
            className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-neutral-200"
          >
            Start tracking →
          </Link>
          <Link
            href="/demo"
            className="rounded-md border border-[var(--accent-gold)] text-[var(--accent-gold)] px-5 py-3 font-medium hover:bg-[var(--accent-gold)]/10"
          >
            See live demo
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-[var(--border)] px-5 py-3 font-medium hover:bg-neutral-900"
          >
            How it works
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.plan}
              className={`rounded-xl border p-6 flex flex-col ${
                t.highlight
                  ? "border-[var(--accent-gold)] bg-[var(--accent-gold)]/5"
                  : "border-[var(--border)]"
              }`}
            >
              <div className="text-sm text-[var(--muted)]">{t.name}</div>
              <div className="mt-2">
                <span className="text-4xl font-semibold">{t.price}</span>
                <span className="text-[var(--muted)]">{t.period}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{t.blurb}</p>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[var(--accent-gold)]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/pricing?plan=${t.plan}`}
                className={`mt-8 rounded-md px-4 py-2.5 text-center font-medium ${
                  t.highlight
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border border-[var(--border)] hover:bg-neutral-900"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

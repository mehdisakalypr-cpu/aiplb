"use client";

import { useState } from "react";

const tiers = [
  {
    plan: "starter",
    name: "Starter",
    price: "€49",
    features: [
      "5 competitors",
      "Daily snapshots",
      "Weekly email digest",
      "7-day history",
    ],
  },
  {
    plan: "pro",
    name: "Pro",
    price: "€99",
    features: [
      "10 competitors",
      "Daily snapshots",
      "Slack + email alerts",
      "AI weekly digest (Claude)",
      "30-day history",
    ],
    highlight: true,
  },
  {
    plan: "enterprise",
    name: "Enterprise",
    price: "€299",
    features: [
      "50 competitors",
      "Twice-daily snapshots",
      "Slack + email + webhook",
      "Custom digest schedule",
      "365-day history",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function startCheckout(plan: string) {
    setLoading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || "Checkout unavailable");
    } catch (e) {
      alert("Checkout failed");
    } finally {
      setLoading(null);
    }
  }

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-center">Pricing</h1>
        <p className="mt-3 text-center text-[var(--muted)]">        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                <span className="text-[var(--muted)]">/mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[var(--accent-gold)]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => startCheckout(t.plan)}
                disabled={loading === t.plan}
                className={`mt-8 rounded-md px-4 py-2.5 font-medium ${
                  t.highlight
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border border-[var(--border)] hover:bg-neutral-900"
                } disabled:opacity-50`}
              >
                {loading === t.plan ? "Redirecting…" : "Subscribe"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

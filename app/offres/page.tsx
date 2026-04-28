"use client";

import { useState } from "react";

type Plan = "starter" | "pro" | "scale";
type Duration = "mensuel" | "12mois" | "24mois" | "36mois";

const TIERS: Record<Plan, { name: string; price: number; sub: string; features: string[]; accent: string; isPro?: boolean }> = {
  starter: {
    name: "Starter",
    price: 49,
    sub: "1 concurrent suivi",
    features: [
      "1 concurrent suivi",
      "1 rapport/jour à la demande",
      "Alertes email",
      "Historique 7 jours",
      "Support email sous 48h",
    ],
    accent: "#7C3AED",
  },
  pro: {
    name: "Pro",
    price: 99,
    sub: "10 concurrents suivis",
    features: [
      "10 concurrents suivis",
      "4 rapports/jour à la demande",
      "Alertes email + Slack",
      "Historique 30 jours",
      "Support prioritaire sous 24h",
      "Accès API",
    ],
    accent: "#06B6D4",
    isPro: true,
  },
  scale: {
    name: "Scale",
    price: 299,
    sub: "50 concurrents suivis",
    features: [
      "50 concurrents suivis",
      "24 rapports/jour à la demande",
      "Alertes email + Slack + Webhooks",
      "Historique 365 jours",
      "Support dédié sous 12h",
      "Accès API",
    ],
    accent: "#7C3AED",
  },
};

const DISCOUNT: Record<Duration, number> = { mensuel: 0, "12mois": 0.15, "24mois": 0.25, "36mois": 0.33 };
const DURATION_LABEL: Record<Duration, string> = {
  mensuel: "Mensuel",
  "12mois": "12 mois (-15%)",
  "24mois": "24 mois (-25%)",
  "36mois": "36 mois (-33%)",
};

function priceFor(plan: Plan, duration: Duration): number {
  return Math.round(TIERS[plan].price * (1 - DISCOUNT[duration]) * 100) / 100;
}

function TierCard({ plan }: { plan: Plan }) {
  const [duration, setDuration] = useState<Duration>("mensuel");
  const [busy, setBusy] = useState(false);
  const tier = TIERS[plan];

  async function subscribe() {
    setBusy(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, duration }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(data?.error || "Une erreur est survenue.");
        setBusy(false);
      }
    } catch (e) {
      alert("Réseau indisponible. Réessayez.");
      setBusy(false);
    }
  }

  const border = tier.isPro ? `2px solid ${tier.accent}` : "1px solid #ffffff20";
  return (
    <article className="rounded-xl p-8 flex flex-col relative" style={{ background: "#0008", border }}>
      {tier.isPro && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: tier.accent, color: "#0F0A1F" }}
        >
          Le plus choisi
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
      <p className="text-white/60 mb-6 text-sm">{tier.sub}</p>

      <p className="text-4xl font-bold text-white mb-1">
        {priceFor(plan, duration)}
        <span className="text-lg font-normal text-white/60">€/mois</span>
      </p>
      <p className="text-xs text-white/50 mb-6">HT, facturé selon la durée choisie</p>

      <ul className="space-y-2 mb-6 text-white/85 text-sm">
        {tier.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <div className="mb-6 pt-4 border-t border-white/10">
        <p className="text-white/60 text-xs mb-2 font-semibold uppercase tracking-wider">Choisissez votre durée</p>
        <div className="space-y-1 text-sm">
          {(Object.keys(DURATION_LABEL) as Duration[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDuration(d)}
              className="block w-full text-left py-1 px-2 rounded transition-colors"
              style={{
                background: duration === d ? `${tier.accent}33` : "transparent",
                color: duration === d ? "#FFFFFF" : "#FFFFFFB0",
                border: duration === d ? `1px solid ${tier.accent}` : "1px solid transparent",
              }}
            >
              {DURATION_LABEL[d]} · {priceFor(plan, d)}€/mois
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={subscribe}
        disabled={busy}
        style={{ background: tier.accent, color: "#FFFFFF", opacity: busy ? 0.6 : 1 }}
        className="block w-full text-center py-3 rounded-lg font-semibold mt-auto hover:opacity-90 transition-opacity disabled:cursor-wait"
      >
        {busy ? "Redirection vers Stripe…" : "S'abonner — annulez en 1 clic"}
      </button>
    </article>
  );
}

export default function GeneratedPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0F0A1F" }}>
      <header className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Offres</h1>
        <h2 className="text-xl text-white/80 max-w-2xl mx-auto">
          Choisissez selon votre rythme. Tous les rapports sont générés à la demande, jamais d&apos;attente passive.
        </h2>
      </header>

      <section className="px-4 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TierCard plan="starter" />
          <TierCard plan="pro" />
          <TierCard plan="scale" />
        </div>

        <p className="text-center text-white/50 text-xs mt-8 max-w-2xl mx-auto">
          Annulation possible à tout moment depuis votre espace, l&apos;abonnement reste actif jusqu&apos;à la fin de la période payée.
        </p>
      </section>

      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Inclus dans toutes les offres</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/85 text-sm">
          <li>• Rapports générés à la demande, en quelques secondes</li>
          <li>• Espace personnel avec historique des rapports archivés</li>
          <li>• Données chiffrées en transit et au repos</li>
          <li>• Conformité RGPD, hébergement Union Européenne</li>
        </ul>
      </section>

      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Garanties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-xl p-6 text-center" style={{ background: "#0008", border: "1px solid #ffffff15" }}>
            <h3 className="text-lg font-semibold text-white mb-2">Annulation en 1 clic</h3>
            <p className="text-white/70 text-sm">Pas d&apos;engagement bloquant. Stop quand vous voulez depuis votre compte.</p>
          </article>
          <article className="rounded-xl p-6 text-center" style={{ background: "#0008", border: "1px solid #ffffff15" }}>
            <h3 className="text-lg font-semibold text-white mb-2">Support FR</h3>
            <p className="text-white/70 text-sm">Équipe francophone. Réponse sous 24h en semaine, sous 12h pour les Pro et Scale.</p>
          </article>
          <article className="rounded-xl p-6 text-center" style={{ background: "#0008", border: "1px solid #ffffff15" }}>
            <h3 className="text-lg font-semibold text-white mb-2">Données EU/RGPD (Frankfurt)</h3>
            <p className="text-white/70 text-sm">Hébergement Allemagne, conformité RGPD complète, aucune donnée hors UE.</p>
          </article>
        </div>
      </section>

      <section className="px-4 py-12 text-center">
        <a href="/faq" style={{ color: "#7C3AED" }} className="underline hover:no-underline font-medium">
          Une question ? Consultez la FAQ
        </a>
      </section>
    </main>
  );
}

import Stripe from "stripe";
import { TIER_LIMITS } from "./tier-limits";

let _stripe: Stripe | null = null;

export function stripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY missing");
  _stripe = new Stripe(key, { apiVersion: "2024-06-20" as any });
  return _stripe;
}

export type PlanKey = "free" | "starter" | "pro" | "scale";

// PLANS is now a thin adapter over TIER_LIMITS so there is exactly ONE source
// of truth for tier sizing. Keeping the same shape as before to avoid
// breaking any caller still reading `PLANS[plan].max_competitors`.
export const PLANS: Record<
  PlanKey,
  { name: string; price_eur: number; max_competitors: number; envVar: string | null }
> = {
  free: {
    name: TIER_LIMITS.free.label,
    price_eur: TIER_LIMITS.free.price_eur,
    max_competitors: TIER_LIMITS.free.items_max,
    envVar: null,
  },
  starter: {
    name: TIER_LIMITS.starter.label,
    price_eur: TIER_LIMITS.starter.price_eur,
    max_competitors: TIER_LIMITS.starter.items_max,
    envVar: "STRIPE_PRICE_STARTER",
  },
  pro: {
    name: TIER_LIMITS.pro.label,
    price_eur: TIER_LIMITS.pro.price_eur,
    max_competitors: TIER_LIMITS.pro.items_max,
    envVar: "STRIPE_PRICE_PRO",
  },
  scale: {
    name: TIER_LIMITS.scale.label,
    price_eur: TIER_LIMITS.scale.price_eur,
    max_competitors: TIER_LIMITS.scale.items_max,
    envVar: "STRIPE_PRICE_SCALE",
  },
};

export function priceIdFor(plan: PlanKey): string | null {
  const env = PLANS[plan]?.envVar;
  if (!env) return null;
  return process.env[env] || null;
}

export type Duration = "mensuel" | "12mois" | "24mois" | "36mois";

const DISCOUNT: Record<Duration, number> = {
  mensuel: 0,
  "12mois": 0.15,
  "24mois": 0.25,
  "36mois": 0.33,
};

const DURATION_LABEL: Record<Duration, string> = {
  mensuel: "Mensuel",
  "12mois": "12 mois (-15%)",
  "24mois": "24 mois (-25%)",
  "36mois": "36 mois (-33%)",
};

export function priceForDuration(
  plan: PlanKey,
  duration: Duration
): { unit_amount: number; label: string } {
  const base = PLANS[plan]?.price_eur ?? 0;
  const discounted = base * (1 - DISCOUNT[duration]);
  return {
    unit_amount: Math.round(discounted * 100),
    label: DURATION_LABEL[duration],
  };
}

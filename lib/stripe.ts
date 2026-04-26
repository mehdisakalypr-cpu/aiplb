import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function stripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY missing");
  _stripe = new Stripe(key, { apiVersion: "2024-06-20" as any });
  return _stripe;
}

export type PlanKey = "starter" | "pro" | "enterprise";

export const PLANS: Record<
  PlanKey,
  { name: string; price_eur: number; max_competitors: number; envVar: string }
> = {
  starter: {
    name: "Starter",
    price_eur: 49,
    max_competitors: 5,
    envVar: "STRIPE_PRICE_STARTER",
  },
  pro: {
    name: "Pro",
    price_eur: 99,
    max_competitors: 10,
    envVar: "STRIPE_PRICE_PRO",
  },
  enterprise: {
    name: "Enterprise",
    price_eur: 299,
    max_competitors: 50,
    envVar: "STRIPE_PRICE_ENTERPRISE",
  },
};

export function priceIdFor(plan: PlanKey): string | null {
  const env = PLANS[plan]?.envVar;
  if (!env) return null;
  return process.env[env] || null;
}

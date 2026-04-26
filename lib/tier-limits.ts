/**
 * Tier limits — single source of truth for what each plan unlocks.
 *
 * Every gate (UI + API) MUST read these via getTierLimits(plan).
 * Don't hardcode tier checks anywhere else (no `plan === "pro"` in routes).
 *
 * Values aligned 2026-04-26 per founder spec:
 *  - Free = 0 (no access, must subscribe)
 *  - Starter = 1 item
 *  - Pro = 10 items
 *  - Scale = 50 items
 */
export const TIER_LIMITS = {
  free: {
    label: "Free",
    items_max: 0,
    daily_runs: 0,
    weekly_digest: false,
    slack_alerts: false,
    api_access: false,
    history_days: 0,
    price_eur: 0,
  },
  starter: {
    label: "Starter",
    items_max: 1,
    daily_runs: 1,
    weekly_digest: true,
    slack_alerts: false,
    api_access: false,
    history_days: 7,
    price_eur: 49,
  },
  pro: {
    label: "Pro",
    items_max: 10,
    daily_runs: 4,
    weekly_digest: true,
    slack_alerts: true,
    api_access: true,
    history_days: 30,
    price_eur: 99,
  },
  scale: {
    label: "Scale",
    items_max: 50,
    daily_runs: 24,
    weekly_digest: true,
    slack_alerts: true,
    api_access: true,
    history_days: 365,
    price_eur: 299,
  },
} as const;

export type Tier = keyof typeof TIER_LIMITS;
export type TierLimits = (typeof TIER_LIMITS)[Tier];

export function getTierLimits(plan: string | null | undefined): TierLimits {
  const t = String(plan ?? "free").toLowerCase();
  if (t in TIER_LIMITS) return TIER_LIMITS[t as Tier];
  // Map legacy aliases (enterprise → scale).
  if (t === "enterprise") return TIER_LIMITS.scale;
  return TIER_LIMITS.free;
}

export function tierLabel(plan: string | null | undefined): string {
  return getTierLimits(plan).label;
}

export function isPaidTier(plan: string | null | undefined): boolean {
  return getTierLimits(plan).items_max > 0;
}

export function nextTier(plan: string | null | undefined): Tier | null {
  const t = String(plan ?? "free").toLowerCase() as Tier;
  if (t === "free") return "starter";
  if (t === "starter") return "pro";
  if (t === "pro") return "scale";
  return null;
}

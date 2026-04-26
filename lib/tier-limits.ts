/**
 * Tier limits — single source of truth for what each plan unlocks.
 *
 * Every page that gates functionality MUST read these via getTierLimits(plan).
 * Don't hardcode tier checks elsewhere.
 *
 * `items_max` = the per-product collectable resource (competitors for AICI,
 * IPs for AIPLB, patents for PFAI, etc.). Products that need more dimensions
 * extend this object.
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
  },
  starter: {
    label: "Starter",
    items_max: 5,
    daily_runs: 1,
    weekly_digest: true,
    slack_alerts: false,
    api_access: false,
    history_days: 7,
  },
  pro: {
    label: "Pro",
    items_max: 20,
    daily_runs: 4,
    weekly_digest: true,
    slack_alerts: true,
    api_access: true,
    history_days: 30,
  },
  scale: {
    label: "Scale",
    items_max: 100,
    daily_runs: 24,
    weekly_digest: true,
    slack_alerts: true,
    api_access: true,
    history_days: 365,
  },
} as const;

export type Tier = keyof typeof TIER_LIMITS;
export type TierLimits = (typeof TIER_LIMITS)[Tier];

export function getTierLimits(plan: string | null | undefined): TierLimits {
  const t = String(plan ?? "free").toLowerCase();
  if (t in TIER_LIMITS) return TIER_LIMITS[t as Tier];
  return TIER_LIMITS.free;
}

export function tierLabel(plan: string | null | undefined): string {
  return getTierLimits(plan).label;
}

export function isPaidTier(plan: string | null | undefined): boolean {
  return getTierLimits(plan).items_max > 0;
}

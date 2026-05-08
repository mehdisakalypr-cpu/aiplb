export type InfraSnapshot = {
  micros_eur: number;
  day: string;
  raw?: unknown;
  notes?: string;
  source: "api" | "estimate";
};

export type TrafficSnapshot = {
  day: string;
  visitors: number;
  page_views: number;
  signups: number;
  paid_subs_eod: number;
  active_clients: number;
  reports_generated: number;
};

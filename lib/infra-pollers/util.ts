export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function eurMicrosFromUsd(usd: number, usdToEur = 0.95): number {
  return Math.round(usd * usdToEur * 1_000_000);
}

export function eurMicrosFromEur(eur: number): number {
  return Math.round(eur * 1_000_000);
}

export async function timedFetch(
  url: string,
  init: RequestInit = {},
  timeoutMs = 15_000,
): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

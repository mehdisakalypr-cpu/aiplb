// In-memory rate limit for auth endpoints.
//
// Trade-off: works per-Lambda-instance on Vercel. A persistent attacker on
// one IP will most of the time hit the same warm container, but a distributed
// attack across many cold-starts could bypass. Acceptable starting point;
// upgrade to Upstash Redis (durable + cluster-wide) when MRR justifies it.
//
// Backwards-compat note: `request.headers.get("x-forwarded-for")` is set by
// Vercel's edge layer with the client's real IP first.

type Entry = {
  count: number;
  windowStart: number;
  lockedUntil: number;
};

const store = new Map<string, Entry>();
const MAX_STORE = 10_000;

function pruneIfNeeded(now: number) {
  if (store.size < MAX_STORE) return;
  // Drop entries whose window has fully expired (cheap GC).
  for (const [k, v] of store) {
    if (now > v.windowStart + 60 * 60_000 && now > v.lockedUntil) {
      store.delete(k);
      if (store.size < MAX_STORE * 0.8) return;
    }
  }
}

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSec: number; // when allowed=false, hint for client
  remaining: number;
};

export function checkRateLimit(
  key: string,
  max: number,
  windowMs: number,
  lockoutMs: number = windowMs,
): RateLimitResult {
  const now = Date.now();
  pruneIfNeeded(now);

  const e = store.get(key);

  // Lockout in effect
  if (e && now < e.lockedUntil) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((e.lockedUntil - now) / 1000),
      remaining: 0,
    };
  }

  // Window expired or no entry — reset
  if (!e || now > e.windowStart + windowMs) {
    store.set(key, { count: 1, windowStart: now, lockedUntil: 0 });
    return { allowed: true, retryAfterSec: 0, remaining: max - 1 };
  }

  // Within window — increment
  if (e.count + 1 > max) {
    e.lockedUntil = now + lockoutMs;
    return {
      allowed: false,
      retryAfterSec: Math.ceil(lockoutMs / 1000),
      remaining: 0,
    };
  }

  e.count += 1;
  return { allowed: true, retryAfterSec: 0, remaining: max - e.count };
}

export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

// Convenience helpers per endpoint.
const MIN = 60_000;

export function rateLimitLogin(ip: string, email: string): RateLimitResult {
  // 5 wrong attempts per 15 min (per IP+email pair) → 15 min lockout.
  return checkRateLimit(`login:${ip}:${email.toLowerCase()}`, 5, 15 * MIN, 15 * MIN);
}

export function rateLimitSignup(ip: string): RateLimitResult {
  // 5 signups per 15 min per IP.
  return checkRateLimit(`signup:${ip}`, 5, 15 * MIN, 15 * MIN);
}

export function rateLimitForgot(ip: string): RateLimitResult {
  // 3 forgot-password per 15 min per IP (Resend is expensive).
  return checkRateLimit(`forgot:${ip}`, 3, 15 * MIN, 15 * MIN);
}

export function rateLimitResponse(result: RateLimitResult) {
  return new Response(
    JSON.stringify({
      error: "rate_limited",
      retry_after_sec: result.retryAfterSec,
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(result.retryAfterSec),
      },
    },
  );
}

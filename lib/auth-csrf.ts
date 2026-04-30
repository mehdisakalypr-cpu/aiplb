// CSRF defense: same-origin check on state-changing auth routes.
//
// Modern browsers always send `Origin` on POST. We accept the request only
// if the Origin matches the request host or is in our allowlist. This blocks
// classic login-CSRF attacks where a malicious site POSTs to /api/auth/* on
// behalf of a victim who happens to be browsing.
//
// Note: SameSite=Lax cookies already strip cross-site cookies on POST, but:
//   1. Login doesn't depend on existing cookies (it sets one), so SameSite
//      alone doesn't prevent login-CSRF (where attacker logs victim INTO an
//      attacker-controlled account).
//   2. Defense in depth — Origin check is cheap and definitive.
//
// In dev (NODE_ENV !== 'production'), allow localhost so HMR/E2E work.

const PROD_HOST_SUFFIXES = [".gapup.io"];
const PROD_HOST_EXACT = ["gapup.io"];
const DEV_HOST_EXACT = ["localhost:3000", "127.0.0.1:3000"];

function originHost(originHeader: string | null): string | null {
  if (!originHeader) return null;
  try {
    const u = new URL(originHeader);
    return u.host; // includes port
  } catch {
    return null;
  }
}

function isHostAllowed(host: string): boolean {
  if (PROD_HOST_EXACT.includes(host)) return true;
  if (PROD_HOST_SUFFIXES.some((s) => host.endsWith(s))) return true;
  if (process.env.NODE_ENV !== "production" && DEV_HOST_EXACT.includes(host)) {
    return true;
  }
  return false;
}

/**
 * Returns null if origin check passes. Returns a 403 Response if it fails —
 * caller should `if (resp = requireSameOrigin(req)) return resp;` early.
 */
export function requireSameOrigin(req: Request): Response | null {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  // No Origin AND no Referer = abnormal browser POST — reject.
  if (!origin && !referer) {
    return forbidden("origin_missing");
  }

  // Origin header present — strict check.
  if (origin) {
    const host = originHost(origin);
    if (!host) return forbidden("origin_invalid");
    if (!isHostAllowed(host)) return forbidden("origin_not_allowed");
    return null;
  }

  // Origin absent but Referer present — fallback (some legacy browsers).
  const refererHost = originHost(referer);
  if (!refererHost) return forbidden("referer_invalid");
  if (!isHostAllowed(refererHost)) return forbidden("referer_not_allowed");
  return null;
}

function forbidden(reason: string): Response {
  return new Response(JSON.stringify({ error: "csrf_forbidden", reason }), {
    status: 403,
    headers: { "Content-Type": "application/json" },
  });
}

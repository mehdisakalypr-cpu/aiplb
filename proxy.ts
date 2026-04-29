import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Dual-mode auth :
//   1. gapup_session (hub SSO HMAC HUB_SHARED_SECRET) — preferred
//   2. sb-access-token (legacy Supabase cookie, mere presence) — fallback

const HUB_COOKIE = "gapup_session";
const LEGACY_COOKIE = "sb-access-token";
const PROTECTED_SERVICE = /^\/service\//;
const PROTECTED_ACCOUNT = /^\/mon-compte\//;
const PROTECTED_ACCOUNT_EXACT = /^\/mon-compte$/;

function base64UrlDecode(str: string): string {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return atob(s);
}

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function verifyHubToken(token: string): Promise<boolean> {
  try {
    const secret = process.env.HUB_SHARED_SECRET;
    if (!secret || secret.length < 16) return false;
    const decoded = base64UrlDecode(token);
    const [userId, expStr, sig] = decoded.split("|");
    if (!userId || !expStr || !sig) return false;
    if (Date.now() > Number(expStr)) return false;
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const sigBuf = await crypto.subtle.sign(
      "HMAC",
      key,
      enc.encode(`${userId}|${expStr}`)
    );
    return bufToHex(sigBuf) === sig;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const needsAuth =
    PROTECTED_SERVICE.test(pathname) ||
    PROTECTED_ACCOUNT.test(pathname) ||
    PROTECTED_ACCOUNT_EXACT.test(pathname);

  if (!needsAuth) return NextResponse.next();

  // Hub session valid → pass
  const hubToken = request.cookies.get(HUB_COOKIE)?.value;
  if (hubToken && (await verifyHubToken(hubToken))) {
    return NextResponse.next();
  }

  // Legacy fallback (cookie presence only — Supabase will reject invalid tokens at API level)
  const legacyToken = request.cookies.get(LEGACY_COOKIE)?.value;
  if (legacyToken) {
    return NextResponse.next();
  }

  // No session — redirect to hub login if configured, else local
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL;
  if (hubUrl) {
    const loginUrl = new URL("/auth/login", hubUrl);
    loginUrl.searchParams.set("redirect", `${request.nextUrl.origin}${pathname}`);
    return NextResponse.redirect(loginUrl);
  }
  const loginUrl = new URL("/auth/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/service/:path*", "/mon-compte", "/mon-compte/:path*"],
};

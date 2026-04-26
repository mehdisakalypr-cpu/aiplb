import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_SERVICE = /^\/service\//;
const PROTECTED_ACCOUNT = /^\/mon-compte\//;
const PROTECTED_ACCOUNT_EXACT = /^\/mon-compte$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const needsAuth =
    PROTECTED_SERVICE.test(pathname) ||
    PROTECTED_ACCOUNT.test(pathname) ||
    PROTECTED_ACCOUNT_EXACT.test(pathname);

  if (!needsAuth) return NextResponse.next();

  const accessToken = request.cookies.get("sb-access-token")?.value;

  if (!accessToken) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (PROTECTED_SERVICE.test(pathname)) {
    const hasSub = request.cookies.get("aiplb_sub_active")?.value === "1";
    if (!hasSub) {
      const offresUrl = new URL("/offres", request.url);
      offresUrl.searchParams.set("need_sub", "1");
      return NextResponse.redirect(offresUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/service/:path*", "/mon-compte", "/mon-compte/:path*"],
};

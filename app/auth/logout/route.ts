import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  const response = NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000")
  );
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  response.headers.append(
    "Set-Cookie",
    `sb-access-token=; Path=/; Expires=${expires}; HttpOnly; SameSite=Lax`
  );
  response.headers.append(
    "Set-Cookie",
    `sb-refresh-token=; Path=/; Expires=${expires}; HttpOnly; SameSite=Lax`
  );
  response.headers.append(
    "Set-Cookie",
    `aiplb_sub_active=; Path=/; Expires=${expires}; SameSite=Lax`
  );
  return response;
}

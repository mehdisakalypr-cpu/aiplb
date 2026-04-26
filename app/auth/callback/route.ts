import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/mon-compte";

  if (!code) {
    return NextResponse.redirect(new URL("/auth/login?err=missing_code", origin));
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    return NextResponse.redirect(new URL("/auth/login?err=config", origin));
  }

  const supabase = createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error || !data.session) {
    return NextResponse.redirect(new URL("/auth/login?err=invalid_code", origin));
  }

  const response = NextResponse.redirect(new URL(next, origin));
  const secure = origin.startsWith("https") ? "; Secure" : "";
  response.headers.append(
    "Set-Cookie",
    `sb-access-token=${data.session.access_token}; Path=/; Max-Age=3600; HttpOnly; SameSite=Lax${secure}`
  );
  response.headers.append(
    "Set-Cookie",
    `sb-refresh-token=${data.session.refresh_token}; Path=/; Max-Age=604800; HttpOnly; SameSite=Lax${secure}`
  );
  return response;
}

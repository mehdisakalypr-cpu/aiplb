import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _service: SupabaseClient | null = null;

/**
 * Service-role Supabase client (server only). Lazy-initialised so the build
 * step does not crash when env vars are absent.
 */
export function supabaseService(): SupabaseClient {
  if (_service) return _service;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "supabaseService(): missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY"
    );
  }
  _service = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    db: { schema: "aici" as any },
  });
  return _service;
}

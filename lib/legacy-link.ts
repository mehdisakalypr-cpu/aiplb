/**
 * Auto-link aiplb.clients legacy users → public.hub_users via hub_legacy_links.
 * Fire-and-forget after legacy login. Idempotent + silent failure.
 */
import { createClient } from "@supabase/supabase-js";

const PRODUCT_SLUG = "aiplb";

function publicSchemaClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function autoLinkLegacyUser(legacyUserId: string, email: string): Promise<void> {
  try {
    const sb = publicSchemaClient();
    if (!sb) return;
    const lower = email.toLowerCase();
    const { data: hubUser } = await sb.from("hub_users").select("id").eq("email", lower).maybeSingle();
    if (!hubUser?.id) return;
    const { data: existing } = await sb.from("hub_legacy_links").select("id")
      .eq("product_slug", PRODUCT_SLUG).eq("legacy_user_id", legacyUserId).maybeSingle();
    if (existing) return;
    await sb.from("hub_legacy_links").insert({
      hub_user_id: hubUser.id, product_slug: PRODUCT_SLUG, legacy_user_id: legacyUserId,
    });
  } catch (e) {
    console.error("[auto-link-legacy]", e);
  }
}

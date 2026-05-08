// TEMPLATE — replace AIPLB and aiplb before dropping in.
// AIPLB = uppercase slug, e.g. AIPLB
// aiplb = lowercase slug, e.g. aiplb
import crypto from "node:crypto";
import { supabaseService } from "./supabase-server";

const ALGO = "aes-256-gcm";
const IV_LEN = 12;

function deriveKey(): Buffer {
  const secret = process.env.AIPLB_KEY_VAULT_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error("AIPLB_KEY_VAULT_SECRET unset or too short (need ≥ 16 chars)");
  }
  return crypto.createHash("sha256").update(secret).digest();
}

export function encryptApiKey(plain: string): string {
  const key = deriveKey();
  const iv = crypto.randomBytes(IV_LEN);
  const cipher = crypto.createCipheriv(ALGO, key, iv);
  const enc = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv.toString("base64"), tag.toString("base64"), enc.toString("base64")].join(":");
}

export function decryptApiKey(blob: string): string {
  const key = deriveKey();
  const [ivB64, tagB64, encB64] = blob.split(":");
  if (!ivB64 || !tagB64 || !encB64) throw new Error("malformed cipher blob");
  const iv = Buffer.from(ivB64, "base64");
  const tag = Buffer.from(tagB64, "base64");
  const enc = Buffer.from(encB64, "base64");
  const decipher = crypto.createDecipheriv(ALGO, key, iv);
  decipher.setAuthTag(tag);
  const dec = Buffer.concat([decipher.update(enc), decipher.final()]);
  return dec.toString("utf8");
}

export function maskKey(plain: string): string {
  if (plain.length <= 8) return "•".repeat(plain.length);
  return `${plain.slice(0, 7)}…${plain.slice(-4)}`;
}

const ALIAS_DOMAIN = process.env.AIPLB_ALIAS_DOMAIN ?? "gapup.io";
const SAAS_SLUG = process.env.AIPLB_SAAS_SLUG ?? "aiplb";

export async function nextAliasFor(provider: string): Promise<string> {
  const sb = supabaseService();
  const { count } = await sb
    .from("provider_keys")
    .select("id", { count: "exact", head: true })
    .eq("provider", provider);
  const next = String((count ?? 0) + 1).padStart(3, "0");
  return `${provider}-${SAAS_SLUG}-${next}@${ALIAS_DOMAIN}`;
}

export type RequestNewKeyInput = {
  provider: string;
  label?: string;
  capacity_reason: string;
  requested_by?: string;
};

export async function requestNewKey(input: RequestNewKeyInput): Promise<{
  id: string;
  email_alias: string;
  reused: boolean;
}> {
  const sb = supabaseService();
  const { data: existing } = await sb
    .from("provider_keys")
    .select("id, email_alias")
    .eq("provider", input.provider)
    .eq("status", "requested")
    .order("requested_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (existing) {
    return { id: existing.id, email_alias: existing.email_alias, reused: true };
  }
  const email_alias = await nextAliasFor(input.provider);
  const label = input.label ?? `scale-${new Date().toISOString().slice(0, 10)}`;
  const { data, error } = await sb
    .from("provider_keys")
    .insert({
      provider: input.provider,
      label,
      email_alias,
      capacity_reason: input.capacity_reason,
      requested_by: input.requested_by ?? "claude",
      status: "requested",
    })
    .select("id, email_alias")
    .single();
  if (error) throw error;
  return { id: data.id, email_alias: data.email_alias, reused: false };
}

export type ProviderKeyRow = {
  id: string;
  provider: string;
  label: string;
  email_alias: string;
  status: "requested" | "active" | "revoked" | "expired";
  key_masked_preview: string | null;
  scaled_for_sites: string[];
  capacity_reason: string | null;
  requested_by: string | null;
  requested_at: string;
  activated_at: string | null;
  revoked_at: string | null;
  notes: string | null;
};

export async function listProviderKeys(): Promise<ProviderKeyRow[]> {
  const sb = supabaseService();
  const { data } = await sb
    .from("provider_keys")
    .select(
      "id, provider, label, email_alias, status, key_masked_preview, scaled_for_sites, capacity_reason, requested_by, requested_at, activated_at, revoked_at, notes",
    )
    .order("requested_at", { ascending: false })
    .limit(200);
  return (data ?? []) as ProviderKeyRow[];
}

export async function activateKey(
  id: string,
  plainKey: string,
  adminEmail: string,
): Promise<void> {
  const sb = supabaseService();
  const enc = encryptApiKey(plainKey);
  const masked = maskKey(plainKey);
  await sb
    .from("provider_keys")
    .update({
      key_encrypted: enc,
      key_masked_preview: masked,
      status: "active",
      activated_at: new Date().toISOString(),
      requested_by: adminEmail,
    })
    .eq("id", id);
}

export async function revokeKey(id: string): Promise<void> {
  const sb = supabaseService();
  await sb
    .from("provider_keys")
    .update({ status: "revoked", revoked_at: new Date().toISOString() })
    .eq("id", id);
}

export async function getActiveKey(provider: string): Promise<string | null> {
  const sb = supabaseService();
  const { data } = await sb
    .from("provider_keys")
    .select("key_encrypted")
    .eq("provider", provider)
    .eq("status", "active")
    .order("activated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (!data?.key_encrypted) {
    if (provider === "anthropic") return process.env.ANTHROPIC_API_KEY ?? null;
    return null;
  }
  try {
    return decryptApiKey(data.key_encrypted);
  } catch {
    return null;
  }
}

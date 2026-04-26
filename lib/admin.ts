import { supabaseService } from "./supabase-server";
import { getSessionUser } from "./auth";

export type AdminRow = {
  email: string;
  is_active: boolean;
  granted_by: string | null;
  granted_at: string;
};

export async function isAdmin(email: string | null | undefined): Promise<boolean> {
  if (!email) return false;
  try {
    const { data } = await supabaseService()
      .from("app_admins")
      .select("is_active")
      .eq("email", email.toLowerCase())
      .maybeSingle();
    return Boolean(data?.is_active);
  } catch {
    return false;
  }
}

export async function requireAdmin(): Promise<{ id: string; email: string } | null> {
  const user = await getSessionUser();
  if (!user) return null;
  return (await isAdmin(user.email)) ? user : null;
}

export async function listAdmins(): Promise<AdminRow[]> {
  const { data } = await supabaseService()
    .from("app_admins")
    .select("email, is_active, granted_by, granted_at")
    .order("granted_at", { ascending: true });
  return (data as AdminRow[]) ?? [];
}

export async function upsertAdmin(email: string, grantedBy: string): Promise<boolean> {
  const lower = email.toLowerCase().trim();
  if (!lower || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lower)) return false;
  const { error } = await supabaseService()
    .from("app_admins")
    .upsert(
      { email: lower, is_active: true, granted_by: grantedBy },
      { onConflict: "email" },
    );
  return !error;
}

export async function setAdminActive(email: string, active: boolean): Promise<boolean> {
  const lower = email.toLowerCase().trim();
  // Founder is always active — never let anyone toggle that off.
  if (lower === "mehdi.sakalypr@gmail.com" && !active) return false;
  const { error } = await supabaseService()
    .from("app_admins")
    .update({ is_active: active })
    .eq("email", lower);
  return !error;
}

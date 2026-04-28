import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";

export type Subscription = {
  id: string;
  status: string;
  plan: string;
  current_period_end: string;
};

export type SessionData = {
  user: { id: string; email: string };
  subscription: Subscription | null;
} | null;

const COOKIE = "aiplb_session";

export async function getSession(): Promise<SessionData> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE)?.value;
  if (!token) return null;

  const v = verifySessionToken(token);
  if (!v) return null;

  const sb = supabaseService();
  const { data: client } = await sb
    .from("clients")
    .select("id,email")
    .eq("id", v.userId)
    .maybeSingle();
  if (!client) return null;

  let subscription: Subscription | null = null;
  try {
    const { data: subs } = await sb
      .from("subscriptions")
      .select("id,status,plan,current_period_end")
      .eq("user_id", client.id)
      .eq("status", "active")
      .gt("current_period_end", new Date().toISOString())
      .limit(1);
    subscription = subs && subs.length > 0 ? (subs[0] as Subscription) : null;
  } catch {
    subscription = null;
  }

  return {
    user: { id: client.id as string, email: client.email as string },
    subscription,
  };
}

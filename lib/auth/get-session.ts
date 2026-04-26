import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

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

function makeServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function makeAnonClient(anonKey: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) return null;
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function getSession(): Promise<SessionData> {
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!anon) return null;

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;
  const refreshToken = cookieStore.get("sb-refresh-token")?.value;

  if (!accessToken && !refreshToken) return null;

  const anonClient = makeAnonClient(anon);
  if (!anonClient) return null;

  let userEmail: string | undefined;
  let userId: string | undefined;

  if (accessToken) {
    const { data, error } = await anonClient.auth.getUser(accessToken);
    if (error || !data.user) return null;
    userId = data.user.id;
    userEmail = data.user.email;
  } else {
    return null;
  }

  if (!userId || !userEmail) return null;

  const serviceClient = makeServiceClient();
  let subscription: Subscription | null = null;

  if (serviceClient) {
    try {
      const { data: subs } = await serviceClient
        .from("subscriptions")
        .select("id,status,plan,current_period_end")
        .eq("user_id", userId)
        .eq("status", "active")
        .gt("current_period_end", new Date().toISOString())
        .limit(1);
      subscription = subs && subs.length > 0 ? (subs[0] as Subscription) : null;
    } catch {
      subscription = null;
    }
  }

  return {
    user: { id: userId, email: userEmail },
    subscription,
  };
}

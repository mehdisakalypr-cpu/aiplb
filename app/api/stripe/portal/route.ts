import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });
  const { data: client } = await supabaseService()
    .from("clients")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .single();
  if (!client?.stripe_customer_id) {
    return NextResponse.json({ error: "no customer" }, { status: 400 });
  }
  const appUrl =
    process.env.APP_URL ||
    (req.headers.get("x-forwarded-host")
      ? `https://${req.headers.get("x-forwarded-host")}`
      : "http://localhost:3000");
  const session = await stripe().billingPortal.sessions.create({
    customer: client.stripe_customer_id,
    return_url: `${appUrl}/dashboard`,
  });
  return NextResponse.json({ url: session.url });
}

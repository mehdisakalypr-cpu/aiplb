import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: "missing signature/secret" }, { status: 400 });
  }
  const raw = await req.text();
  let event;
  try {
    event = stripe().webhooks.constructEvent(raw, sig, secret);
  } catch (e: any) {
    return NextResponse.json({ error: `bad signature: ${e?.message}` }, { status: 400 });
  }

  const sb = supabaseService();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const s: any = event.data.object;
        const userId = s.client_reference_id || s.metadata?.user_id;
        const plan = s.metadata?.plan || "pro";
        if (userId) {
          await sb
            .from("clients")
            .update({
              plan,
              stripe_customer_id: s.customer,
              stripe_subscription_id: s.subscription,
              status: "active",
            })
            .eq("id", userId);
        }
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub: any = event.data.object;
        const userId = sub.metadata?.user_id;
        if (userId) {
          await sb
            .from("clients")
            .update({
              status: sub.status,
              plan: event.type === "customer.subscription.deleted" ? "cancelled" : sub.metadata?.plan,
            })
            .eq("id", userId);
        }
        break;
      }
      default:
        break;
    }
  } catch (e) {
    console.error("webhook handler", e);
  }

  return NextResponse.json({ received: true });
}

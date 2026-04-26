import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { stripe, priceIdFor, type PlanKey } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const user = await getSessionUser();
  const { plan } = await req.json();
  if (!plan || !["starter", "pro", "enterprise"].includes(plan)) {
    return NextResponse.json({ error: "invalid plan" }, { status: 400 });
  }
  const priceId = priceIdFor(plan as PlanKey);
  if (!priceId) {
    return NextResponse.json(
      {
        error:
          "Stripe price not configured for this plan yet — create a product in Stripe and set STRIPE_PRICE_* env vars.",
      },
      { status: 503 }
    );
  }

  const appUrl =
    process.env.APP_URL ||
    (req.headers.get("x-forwarded-host")
      ? `https://${req.headers.get("x-forwarded-host")}`
      : "http://localhost:3000");

  try {
    const session = await stripe().checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/dashboard?checkout=success`,
      cancel_url: `${appUrl}/pricing?checkout=cancelled`,
      customer_email: user?.email,
      client_reference_id: user?.id,
      metadata: { plan, user_id: user?.id || "" },
      subscription_data: { metadata: { plan, user_id: user?.id || "" } },
      allow_promotion_codes: true,
    });
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e?.message || "stripe error" }, { status: 500 });
  }
}

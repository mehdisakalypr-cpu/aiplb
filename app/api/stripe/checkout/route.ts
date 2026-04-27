import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { stripe, PLANS, type PlanKey, priceForDuration, type Duration } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const user = await getSessionUser();
  const body = await req.json().catch(() => ({}));
  const plan = body?.plan as PlanKey | undefined;
  const duration = (body?.duration as Duration) || "mensuel";

  if (!plan || !["starter", "pro", "scale"].includes(plan)) {
    return NextResponse.json({ error: "invalid plan" }, { status: 400 });
  }
  if (!["mensuel", "12mois", "24mois", "36mois"].includes(duration)) {
    return NextResponse.json({ error: "invalid duration" }, { status: 400 });
  }

  const appUrl =
    process.env.APP_URL ||
    (req.headers.get("x-forwarded-host")
      ? `https://${req.headers.get("x-forwarded-host")}`
      : "http://localhost:3000");

  const { unit_amount, label } = priceForDuration(plan, duration);

  try {
    const session = await stripe().checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${PLANS[plan].name} — ${label}`,
            },
            unit_amount,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/dashboard?checkout=success&plan=${plan}&duration=${duration}`,
      cancel_url: `${appUrl}/offres?checkout=cancelled`,
      customer_email: user?.email,
      client_reference_id: user?.id,
      metadata: { plan, duration, user_id: user?.id || "" },
      subscription_data: { metadata: { plan, duration, user_id: user?.id || "" } },
      allow_promotion_codes: false,
    });
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error("[stripe checkout]", e?.message);
    return NextResponse.json({ error: e?.message || "stripe error" }, { status: 500 });
  }
}

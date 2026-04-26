import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const PRODUCT_SLUG = "aiplb";
const PRODUCT_NAME = "AIPLB";
const ALLOWED_TYPES = new Set(["contact", "dpo", "rgpd", "partnership", "press", "support"]);

function sb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const email = String(body.email ?? "").trim().toLowerCase();
  const message = String(body.message ?? "").trim();
  const name = String(body.name ?? "").trim() || null;
  const phone = String(body.phone ?? "").trim() || null;
  const company = String(body.company ?? "").trim() || null;
  const subject = String(body.subject ?? "").trim() || null;
  const customerId = String(body.customer_id ?? "").trim() || null;
  let type = String(body.type ?? body.reason ?? "contact").toLowerCase();
  if (!ALLOWED_TYPES.has(type)) type = "contact";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }
  if (!message) return NextResponse.json({ error: "Message requis" }, { status: 400 });
  if (message.length > 4000) return NextResponse.json({ error: "Message trop long (4000 max)" }, { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || null;
  const ua = req.headers.get("user-agent") || null;
  const referer = req.headers.get("referer") || null;
  const acceptLang = req.headers.get("accept-language") || "";
  const locale = acceptLang.split(",")[0]?.split("-")[0]?.toLowerCase() || "fr";

  const metadata = {
    locale,
    referer,
    user_agent: ua?.slice(0, 200) || null,
    ip_first: ip ? ip.split(".").slice(0, 2).join(".") + ".x.x" : null,
    source_form: "/contact",
  };

  try {
    const s = sb();
    const insertPayload = {
      product_slug: PRODUCT_SLUG, type,
      customer_id: customerId,
      name, email, phone, company, subject, message,
      metadata, draft_status: "pending",
    };
    const { error } = await s.from("customer_messages").insert(insertPayload);
    if (error) {
      console.error("[contact] insert", error);
      return NextResponse.json({ error: "Save failed" }, { status: 500 });
    }
  } catch (e) {
    console.error("[contact] exception", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "Merci, vous recevrez une réponse sous 24h.",
  });
}

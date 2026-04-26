import { NextRequest, NextResponse } from "next/server";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are AIPLB's website assistant. AIPLB ("Autonomous IP Licensing Bot") is a SaaS that snapshots competitor websites on demand and delivers an instant AI-curated report.

Pricing:
- Starter €49/mo: 1 concurrent suivi, snapshots à la demande, 7-day diff history
- Pro €99/mo (most popular): 10 concurrents, snapshots à la demande, Slack + email alerts, AI synthesis (Claude), 30-day history
- Scale €299/mo: 50 concurrents, snapshots à la demande, Slack + email + webhook, 365-day history, priority support
- Annual billing = 2 months free
- No money-back guarantee, no free trial. Subscriptions are committed-term: cancel anytime stops auto-renewal but the current term remains paid. Discounts only via 12/24/36-month commitment.

Services (5):
1. Track 4 surfaces per competitor: pricing, blog, careers, homepage
2. Daily snapshots with LLM extraction (Claude Sonnet 4.6) — handles JS-rendered sites and any layout
3. Diff intelligence: importance scoring (low/medium/high) + one-paragraph "why it matters" written for a founder
4. Reports run on demand — the user clicks Go from /dashboard and gets the report immediately, or an email when our service finishes the run
5. API access (Enterprise): REST + webhooks for HIGH-importance changes

Tech / security:
- Data stored in Supabase EU (Frankfurt). App on Vercel EU edge.
- LLM = Anthropic Claude (Enterprise terms, no training on user data)
- Only essential cookies; no marketing trackers
- Magic-link login (no password)
- Setup time for 10 competitors: ~8 minutes
- Multi-language sites supported (95+ languages)
- Live demo at /demo (real HubSpot snapshot, no signup)

Contact / human:
- /contact form for sales, support, partnerships, press
- DPO: mehdi.sakalypr@gmail.com
- Operated by Sanctuary AI Services (France)

RULES:
- Be concise (3-6 sentences max). No marketing fluff.
- If asked something not covered above, say so honestly and suggest /contact.
- If the user expresses frustration, asks to speak to a human, or types "humain", "agent", "vrai personne", "real person", "talk to someone", "speak to someone": apologise once and suggest they fill /contact for a written reply within 24h.
- Never invent integrations, features or pricing. If unsure: "let me point you to /contact for a precise answer".`;

const HANDOFF_TRIGGERS = [
  "humain",
  "agent",
  "vrai personne",
  "real person",
  "talk to someone",
  "speak to someone",
  "speak to a human",
  "talk to a human",
];

function detectHandoff(text: string): boolean {
  const lower = text.toLowerCase();
  return HANDOFF_TRIGGERS.some((t) => lower.includes(t));
}

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const sessionId = String(body.sessionId || "").trim();
  const message = String(body.message || "").trim();
  const history: Msg[] = Array.isArray(body.history) ? body.history.slice(-10) : [];
  const lang = String(body.lang || "en").toLowerCase().slice(0, 5);
  const LOCALE_NAMES: Record<string, string> = {
    en: "English", fr: "French", es: "Spanish", de: "German", it: "Italian",
    pt: "Portuguese", nl: "Dutch", pl: "Polish", ja: "Japanese", zh: "Chinese",
    ar: "Arabic", ru: "Russian",
  };
  const localeName = LOCALE_NAMES[lang.slice(0, 2)] || "English";
  const localeDirective = `\n\nIMPORTANT: Always answer in ${localeName}. The user\u0027s interface is in ${localeName}.`;

  if (!sessionId || !message) {
    return NextResponse.json(
      { error: "sessionId and message required" },
      { status: 400 }
    );
  }
  if (message.length > 500) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "The assistant is offline. Please use /contact and we'll reply within 24h.",
      },
      { status: 200 }
    );
  }

  // Persist incoming user message (best-effort, non-blocking)
  const sb = (() => {
    try {
      return supabaseService();
    } catch {
      return null;
    }
  })();
  if (sb) {
    sb.from("chat_messages")
      .insert({ session_id: sessionId, role: "user", content: message })
      .then(({ error }) => {
        if (error) console.warn("[chatbot] log user msg failed", error.message);
      });
  }

  const handoff = detectHandoff(message);

  // Build Anthropic messages
  const apiMessages = [
    ...history
      .filter((m) => m && (m.role === "user" || m.role === "assistant"))
      .map((m) => ({
        role: m.role,
        content: String(m.content).slice(0, 2000),
      })),
    { role: "user" as const, content: message },
  ];

  let reply = "";
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 400,
        system: SYSTEM_PROMPT + localeDirective,
        messages: apiMessages,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("[chatbot] anthropic error", res.status, errBody);
      reply =
        "I'm having trouble reaching the model. Please try again in a moment, or use /contact.";
    } else {
      const data = await res.json();
      const block = data?.content?.[0];
      reply =
        (block && (block.text || block.input || "")) ||
        "Sorry, I had no answer for that. Try /contact.";
    }
  } catch (e: any) {
    console.error("[chatbot] anthropic exception", e?.message);
    reply =
      "Network error reaching the assistant. Please use /contact and we'll reply.";
  }

  if (handoff && !/contact/i.test(reply)) {
    reply +=
      "\n\nIf you'd prefer a written reply from a human, please fill /contact — we respond within 24h on business days.";
  }

  // Persist assistant reply
  if (sb) {
    sb.from("chat_messages")
      .insert({
        session_id: sessionId,
        role: "assistant",
        content: reply,
        metadata: { handoff_suggested: handoff },
      })
      .then(({ error }) => {
        if (error)
          console.warn("[chatbot] log assistant msg failed", error.message);
      });
  }

  return NextResponse.json({ reply, handoff });
}

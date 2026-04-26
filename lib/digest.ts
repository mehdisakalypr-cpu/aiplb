import { supabaseService } from "./supabase-server";
import { Resend } from "resend";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_MODEL = "claude-sonnet-4-6"; // alias; user upgrades when ready

type ClientRow = {
  id: string;
  email: string;
  plan: string;
};

export async function generateWeeklyDigests() {
  const sb = supabaseService();
  const { data: clients } = await sb
    .from("clients")
    .select("id,email,plan")
    .neq("plan", "cancelled");
  if (!clients || clients.length === 0) return { sent: 0 };

  let sent = 0;
  for (const c of clients) {
    try {
      const ok = await digestForClient(c as ClientRow);
      if (ok) sent++;
    } catch (e) {
      console.error("digest error", c.id, e);
    }
  }
  return { sent };
}

async function digestForClient(client: ClientRow): Promise<boolean> {
  const sb = supabaseService();
  const since = new Date(Date.now() - 7 * 86_400_000).toISOString();

  const { data: comps } = await sb
    .from("competitors")
    .select("id,name,url")
    .eq("client_id", client.id)
    .eq("enabled", true);
  if (!comps || comps.length === 0) return false;

  const compIds = comps.map((c) => c.id);
  const { data: diffs } = await sb
    .from("diffs")
    .select("id,competitor_id,added_chars,removed_chars,created_at")
    .in("competitor_id", compIds)
    .gte("created_at", since)
    .order("created_at", { ascending: false });

  if (!diffs || diffs.length === 0) return false;

  // Aggregate per competitor
  const byComp = new Map<string, { name: string; url: string; events: any[] }>();
  for (const c of comps) byComp.set(c.id, { name: c.name, url: c.url, events: [] });
  for (const d of diffs) byComp.get(d.competitor_id)?.events.push(d);

  const summaryPrompt = buildPrompt(byComp);
  const summary = await summariseWithClaude(summaryPrompt);

  const html = renderDigestHtml(client.email, byComp, summary);

  // Persist + email
  const { data: digestRow } = await sb
    .from("digests")
    .insert({
      client_id: client.id,
      window_start: since,
      window_end: new Date().toISOString(),
      diff_count: diffs.length,
      summary,
      html,
    })
    .select("id")
    .single();

  await sendDigestEmail(client.email, html);
  return !!digestRow;
}

function buildPrompt(
  byComp: Map<string, { name: string; url: string; events: any[] }>
): string {
  const lines: string[] = [
    "You are a competitive intelligence analyst. Summarise the past 7 days.",
    "Per competitor, give 1-3 bullet points on what materially changed.",
    "Be concise. No fluff. Output Markdown.",
    "",
  ];
  for (const [, v] of byComp) {
    if (v.events.length === 0) continue;
    lines.push(`### ${v.name} — ${v.url}`);
    for (const e of v.events) {
      lines.push(
        `- ${new Date(e.created_at).toISOString().slice(0, 10)}: +${e.added_chars} / -${e.removed_chars} chars`
      );
    }
    lines.push("");
  }
  return lines.join("\n");
}

async function summariseWithClaude(prompt: string): Promise<string> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return "(LLM summary disabled — set ANTHROPIC_API_KEY)";
  }
  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 1500,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!res.ok) {
      console.error("anthropic", res.status, await res.text());
      return "(LLM summary failed)";
    }
    const data = await res.json();
    const text = data?.content?.[0]?.text;
    return typeof text === "string" ? text : "(no summary)";
  } catch (e) {
    console.error("anthropic err", e);
    return "(LLM summary error)";
  }
}

function renderDigestHtml(
  email: string,
  byComp: Map<string, { name: string; url: string; events: any[] }>,
  summary: string
): string {
  const rows: string[] = [];
  for (const [, v] of byComp) {
    if (v.events.length === 0) continue;
    rows.push(
      `<tr><td><b>${escapeHtml(v.name)}</b><br><a href="${escapeAttr(v.url)}">${escapeHtml(v.url)}</a></td><td>${v.events.length} changes</td></tr>`
    );
  }
  return `<!doctype html>
<html><body style="font-family:system-ui;max-width:600px;margin:0 auto;padding:24px;color:#111">
<h1 style="font-size:22px">Your weekly competitive digest</h1>
<p style="color:#555">For ${escapeHtml(email)}</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0">${rows.join("\n")}</table>
<h2 style="font-size:18px">Summary</h2>
<pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;background:#f5f5f5;padding:12px;border-radius:6px">${escapeHtml(summary)}</pre>
<p style="color:#888;font-size:12px;margin-top:24px">— AIPLB · <a href="https://aiplb.app/dashboard">Manage tracking</a></p>
</body></html>`;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c] as string));
}
function escapeAttr(s: string) {
  return s.replace(/"/g, "&quot;");
}

async function sendDigestEmail(to: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "AIPLB <noreply@aiplb.app>";
  if (!apiKey) {
    console.warn("RESEND_API_KEY missing; skipping email");
    return;
  }
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject: "Your weekly competitive digest",
    html,
  });
}

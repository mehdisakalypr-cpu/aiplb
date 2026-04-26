import * as cheerio from "cheerio";
import crypto from "node:crypto";
import { supabaseService } from "./supabase-server";

const UA =
  "AIPLB-Bot/1.0 (+https://aiplb.app/bot) competitive-watch";

export type FetchedSurface = {
  url: string;
  status: number;
  text: string;
  hash: string;
  bytes: number;
  fetched_at: string;
};

export async function fetchSurface(url: string): Promise<FetchedSurface> {
  const ctrl = new AbortController();
  const timeout = setTimeout(() => ctrl.abort(), 20_000);
  try {
    const res = await fetch(url, {
      headers: { "user-agent": UA, accept: "text/html,*/*" },
      redirect: "follow",
      signal: ctrl.signal,
    });
    const html = await res.text();
    const text = htmlToText(html);
    const hash = crypto.createHash("sha256").update(text).digest("hex");
    return {
      url,
      status: res.status,
      text,
      hash,
      bytes: text.length,
      fetched_at: new Date().toISOString(),
    };
  } finally {
    clearTimeout(timeout);
  }
}

function htmlToText(html: string): string {
  const $ = cheerio.load(html);
  $("script, style, noscript, svg, iframe").remove();
  const txt = $("body").text() || $.text();
  return txt
    .replace(/\s+/g, " ")
    .replace(/ /g, " ")
    .trim()
    .slice(0, 200_000);
}

/**
 * Naive char-level diff (added/removed counts) — enough to flag material changes
 * before we pay for a smarter LLM diff in the digest.
 */
export function diffStats(prev: string, next: string) {
  if (prev === next) return { added_chars: 0, removed_chars: 0 };
  // crude: difference in length + common-prefix / common-suffix trimming
  let p = 0;
  while (p < prev.length && p < next.length && prev[p] === next[p]) p++;
  let s = 0;
  while (
    s < prev.length - p &&
    s < next.length - p &&
    prev[prev.length - 1 - s] === next[next.length - 1 - s]
  )
    s++;
  const removed_chars = Math.max(0, prev.length - p - s);
  const added_chars = Math.max(0, next.length - p - s);
  return { added_chars, removed_chars };
}

export async function snapshotCompetitor(competitorId: string) {
  const sb = supabaseService();
  const { data: comp, error: cErr } = await sb
    .from("competitors")
    .select("id,url,client_id")
    .eq("id", competitorId)
    .single();
  if (cErr || !comp) throw new Error("competitor not found");

  const fetched = await fetchSurface(comp.url);

  const { data: prev } = await sb
    .from("snapshots")
    .select("id,hash,text")
    .eq("competitor_id", competitorId)
    .order("captured_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: snap, error: sErr } = await sb
    .from("snapshots")
    .insert({
      competitor_id: competitorId,
      captured_at: fetched.fetched_at,
      hash: fetched.hash,
      bytes: fetched.bytes,
      text: fetched.text,
      status: String(fetched.status),
    })
    .select("id")
    .single();
  if (sErr) throw sErr;

  await sb
    .from("competitors")
    .update({ last_snapshot_at: fetched.fetched_at })
    .eq("id", competitorId);

  if (prev && prev.hash !== fetched.hash) {
    const stats = diffStats(prev.text || "", fetched.text);
    await sb.from("diffs").insert({
      competitor_id: competitorId,
      from_snapshot_id: prev.id,
      to_snapshot_id: snap.id,
      added_chars: stats.added_chars,
      removed_chars: stats.removed_chars,
      summary: null, // filled by weekly digest
    });
  }

  return { snapshot_id: snap.id, hash: fetched.hash };
}

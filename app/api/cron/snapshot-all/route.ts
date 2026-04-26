import { NextResponse } from "next/server";
import pLimit from "p-limit";
import { supabaseService } from "@/lib/supabase-server";
import { snapshotCompetitor } from "@/lib/snapshot";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function GET(req: Request) {
  return runCron(req);
}

export async function POST(req: Request) {
  return runCron(req);
}

async function runCron(req: Request) {
  // Vercel cron sends `Authorization: Bearer ${CRON_SECRET}` if configured,
  // and also `x-vercel-cron: 1`. Accept either, plus a query-string fallback for manual runs.
  const url = new URL(req.url);
  const auth = req.headers.get("authorization");
  const isVercelCron = req.headers.get("x-vercel-cron") === "1";
  const qSecret = url.searchParams.get("secret");
  const secret = process.env.CRON_SECRET;
  if (
    !isVercelCron &&
    (!secret || (auth !== `Bearer ${secret}` && qSecret !== secret))
  ) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const sb = supabaseService();
  const { data: comps, error } = await sb
    .from("competitors")
    .select("id")
    .eq("enabled", true);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const limit = pLimit(10);
  const results = await Promise.all(
    (comps || []).map((c) =>
      limit(async () => {
        try {
          const r = await snapshotCompetitor(c.id);
          return { id: c.id, ok: true, hash: r.hash };
        } catch (e: any) {
          return { id: c.id, ok: false, error: e?.message || "err" };
        }
      })
    )
  );

  const ok = results.filter((r) => r.ok).length;
  const fail = results.length - ok;
  return NextResponse.json({ total: results.length, ok, fail, results });
}

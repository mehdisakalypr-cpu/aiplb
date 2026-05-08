import { NextResponse } from "next/server";
import {
  pollAllInfra,
  persistInfraReport,
  pollTraffic,
  persistTraffic,
} from "@/lib/infra-pollers";

export const runtime = "nodejs";
export const maxDuration = 120;

export async function GET(req: Request) { return run(req); }
export async function POST(req: Request) { return run(req); }

async function run(req: Request) {
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

  const [infra, traffic] = await Promise.all([pollAllInfra(), pollTraffic()]);
  await Promise.all([persistInfraReport(infra), persistTraffic(traffic)]);

  return NextResponse.json({
    infra: {
      day: infra.day,
      total_eur: infra.total_micros_eur / 1_000_000,
      vercel_eur: infra.vercel.micros_eur / 1_000_000,
      supabase_eur: infra.supabase.micros_eur / 1_000_000,
    },
    traffic: { day: traffic.day, signups: traffic.signups, active_clients: traffic.active_clients },
  });
}

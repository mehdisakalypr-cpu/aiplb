import { NextResponse } from "next/server";
import { generateWeeklyDigests } from "@/lib/digest";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function GET(req: Request) {
  return run(req);
}

export async function POST(req: Request) {
  return run(req);
}

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
  const r = await generateWeeklyDigests();
  return NextResponse.json(r);
}

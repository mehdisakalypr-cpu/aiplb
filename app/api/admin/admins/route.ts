import { NextResponse } from "next/server";
import { requireAdmin, listAdmins, upsertAdmin, setAdminActive } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  const admins = await listAdmins();
  return NextResponse.json({ admins });
}

export async function POST(req: Request) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  const body = await req.json().catch(() => ({} as { email?: unknown }));
  const email = String(body.email ?? "").trim();
  if (!email) return NextResponse.json({ error: "missing email" }, { status: 400 });
  const ok = await upsertAdmin(email, user.email);
  if (!ok) return NextResponse.json({ error: "invalid email or db error" }, { status: 400 });
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: Request) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  const body = await req.json().catch(() => ({} as { email?: unknown; is_active?: unknown }));
  const email = String(body.email ?? "").trim();
  const isActive = Boolean(body.is_active);
  if (!email) return NextResponse.json({ error: "missing email" }, { status: 400 });
  const ok = await setAdminActive(email, isActive);
  if (!ok) return NextResponse.json({ error: "cannot toggle (founder is locked)" }, { status: 400 });
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Lightweight endpoint used by Nav.tsx to decide whether to render the Admin link.
export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ is_admin: false });
  const ok = await isAdmin(user.email);
  return NextResponse.json({ is_admin: ok });
}

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";

export const runtime = "nodejs";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ user: null }, { status: 401 });
  const is_admin = await isAdmin(user.email);
  return NextResponse.json({ user, is_admin });
}

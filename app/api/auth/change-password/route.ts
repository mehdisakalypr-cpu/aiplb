import { NextResponse } from "next/server";
import {
  getSessionUser,
  setClientPassword,
  verifyClientPassword,
  clientHasPassword,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const me = await getSessionUser();
    if (!me) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

    const body = await req.json().catch(() => null);
    const newPwd = typeof body?.password === "string" ? body.password : "";
    const currentPwd = typeof body?.current === "string" ? body.current : "";

    if (newPwd.length < 8) {
      return NextResponse.json({ error: "password_too_short" }, { status: 400 });
    }

    const hadPwd = await clientHasPassword(me.email);

    if (hadPwd) {
      if (!currentPwd) {
        return NextResponse.json({ error: "current_password_required" }, { status: 400 });
      }
      const ok = await verifyClientPassword(me.email, currentPwd);
      if (!ok) {
        return NextResponse.json({ error: "current_password_invalid" }, { status: 401 });
      }
    }

    await setClientPassword(me.id, newPwd);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "internal_error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

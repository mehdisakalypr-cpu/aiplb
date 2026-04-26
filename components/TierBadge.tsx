"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Me = { id: string; email: string; plan?: string; is_admin?: boolean } | null;

const COLORS: Record<string, { bg: string; fg: string; ring: string }> = {
  free:    { bg: "rgba(148,163,184,.12)", fg: "#94A3B8", ring: "rgba(148,163,184,.4)" },
  starter: { bg: "rgba(59,130,246,.14)",  fg: "#60A5FA", ring: "rgba(59,130,246,.4)" },
  pro:     { bg: "rgba(124,58,237,.16)",  fg: "#A78BFA", ring: "rgba(124,58,237,.5)" },
  scale:   { bg: "rgba(250,204,21,.14)",  fg: "#FACC15", ring: "rgba(250,204,21,.5)" },
};

const LIMITS: Record<string, { items: number | string; runs: string; digest: boolean; slack: boolean }> = {
  free:    { items: 0,   runs: "—",       digest: false, slack: false },
  starter: { items: 5,   runs: "1/jour",  digest: true,  slack: false },
  pro:     { items: 20,  runs: "4/jour",  digest: true,  slack: true },
  scale:   { items: 100, runs: "24/jour", digest: true,  slack: true },
};

export default function TierBadge() {
  const [me, setMe] = useState<Me>(null);

  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { user: null }))
      .then((d) => setMe(d.user ? { ...d.user, plan: d.plan, is_admin: d.is_admin } : null))
      .catch(() => undefined);
  }, []);

  if (!me) return null;
  const tier = String(me.plan ?? "free").toLowerCase();
  const palette = COLORS[tier] ?? COLORS.free;
  const limit = LIMITS[tier] ?? LIMITS.free;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        padding: "12px 16px",
        marginBottom: 20,
        background: palette.bg,
        border: `1px solid ${palette.ring}`,
        borderRadius: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".05em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 999,
            background: palette.fg,
            color: "#0a0a1e",
          }}
        >
          {tier.toUpperCase()}
        </span>
        <span style={{ fontSize: 13, color: palette.fg }}>
          {limit.items} max · {limit.runs}{limit.digest ? " · digest" : ""}{limit.slack ? " · Slack" : ""}
        </span>
      </div>
      {tier === "free" ? (
        <Link
          href="/offres"
          style={{
            fontSize: 13,
            padding: "6px 14px",
            background: "#7C3AED",
            color: "#FFFFFF",
            borderRadius: 6,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Choisir une offre →
        </Link>
      ) : me.is_admin ? (
        <Link
          href="/admin"
          style={{
            fontSize: 13,
            padding: "6px 14px",
            border: `1px solid ${palette.ring}`,
            color: palette.fg,
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Changer (admin)
        </Link>
      ) : null}
    </div>
  );
}

"use client";

const COLORS: Record<string, { bg: string; fg: string; ring: string }> = {
  free:    { bg: "rgba(148,163,184,.15)", fg: "#94A3B8", ring: "rgba(148,163,184,.4)" },
  starter: { bg: "rgba(59,130,246,.2)",   fg: "#60A5FA", ring: "rgba(59,130,246,.5)" },
  pro:     { bg: "rgba(124,58,237,.2)",   fg: "#A78BFA", ring: "rgba(124,58,237,.6)" },
  scale:   { bg: "rgba(250,204,21,.18)",  fg: "#FACC15", ring: "rgba(250,204,21,.6)" },
};

export default function TierPill({ plan }: { plan?: string | null }) {
  const t = String(plan ?? "free").toLowerCase();
  const c = COLORS[t] ?? COLORS.free;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: ".08em",
        padding: "3px 8px",
        borderRadius: 4,
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.ring}`,
        textTransform: "uppercase",
      }}
      title={`Statut d'offre : ${t}`}
    >
      {t}
    </span>
  );
}

"use client";

type Bubble = {
  key: string;
  label: string;
  used: number;
  cap: number;
  unit: string;
  used_pct: number;
  projected_pct: number;
  alert: "ok" | "recommended" | "strongly_recommended" | "p0_mandatory";
  alert_label: string;
  color: string;
  elapsed_days: number;
  month_days: number;
};

export function CapacityBubbles({
  bubbles,
  cycle,
}: {
  bubbles: Bubble[];
  cycle: { elapsed_days: number; month_days: number };
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,.55)",
          marginBottom: 12,
          letterSpacing: 0.4,
        }}
      >
        Cycle en cours · jour {cycle.elapsed_days}/{cycle.month_days} · les jauges se réinitialisent le 1er du mois.
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 14,
        }}
      >
        {bubbles.map((b) => (
          <BubbleTile key={b.key} bubble={b} />
        ))}
      </div>
    </div>
  );
}

function BubbleTile({ bubble: b }: { bubble: Bubble }) {
  const usedPct = Math.min(100, Math.round(b.used_pct * 100));
  const projPct = Math.min(150, Math.round(b.projected_pct * 100));
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#1F1535 0%,#170E26 100%)",
        border: `1px solid ${b.color}55`,
        borderRadius: 14,
        padding: "16px 18px",
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,.6)",
          textTransform: "uppercase",
          letterSpacing: 1.1,
          marginBottom: 10,
        }}
      >
        {b.label}
      </div>

      {/* Two concentric bubbles: outer = projected, inner = used MTD */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <RadialBubble usedPct={usedPct} projPct={projPct} color={b.color} />
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>
            {usedPct}%
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 4 }}>
            {formatNumber(b.used, b.unit)} / {formatNumber(b.cap, b.unit)}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 12,
          fontSize: 11,
          color: b.color,
          fontWeight: 600,
        }}
      >
        {b.alert_label}
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 2 }}>
        Projection fin de mois : <strong>{projPct}%</strong>
      </div>
    </div>
  );
}

function RadialBubble({
  usedPct,
  projPct,
  color,
}: {
  usedPct: number;
  projPct: number;
  color: string;
}) {
  const size = 70;
  const r = 28;
  const c = 2 * Math.PI * r;
  const usedDash = (Math.min(100, usedPct) / 100) * c;
  const projDash = (Math.min(100, projPct) / 100) * c;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* track */}
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={6} />
      {/* projection ring (lighter) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={`${color}55`}
        strokeWidth={6}
        strokeDasharray={`${projDash} ${c - projDash}`}
        strokeDashoffset={c / 4}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeLinecap="round"
      />
      {/* used MTD ring (solid) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeDasharray={`${usedDash} ${c - usedDash}`}
        strokeDashoffset={c / 4}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeLinecap="round"
      />
    </svg>
  );
}

function formatNumber(n: number, unit: string): string {
  if (unit === "tokens") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
    return String(Math.round(n));
  }
  if (unit === "EUR") return `€${n.toFixed(n < 10 ? 2 : 0)}`;
  return String(n);
}

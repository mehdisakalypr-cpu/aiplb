import type { ReactElement } from "react";

export type LeverageRow = {
  id: string;
  cpc: string;
  leverage: number;
  forwardCitations: number;
  familySize: number;
  royaltyPotentialEUR: number;
};

const COLOR_HIGH = "#10B981";
const COLOR_MID = "#F59E0B";
const COLOR_LOW = "#9CA3AF";

const leverageColor = (n: number) => (n >= 75 ? COLOR_HIGH : n >= 50 ? COLOR_MID : COLOR_LOW);

export function PatentLeverageChart({ rows }: { rows: LeverageRow[] }): ReactElement {
  const sorted = [...rows].sort((a, b) => b.leverage - a.leverage);
  const W = 880;
  const H = sorted.length * 36 + 60;
  const labelW = 220;
  const padR = 60;
  const barAreaW = W - labelW - padR;
  const max = 100;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", maxWidth: "100%", height: "auto" }} role="img" aria-label="Score leverage par brevet Apple">
      <defs>
        <linearGradient id="grad-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <text x={labelW} y={20} fontSize="12" fill="#6B7280" fontFamily="system-ui">0</text>
      <text x={labelW + barAreaW * 0.25} y={20} fontSize="12" fill="#6B7280" fontFamily="system-ui">25</text>
      <text x={labelW + barAreaW * 0.5} y={20} fontSize="12" fill="#6B7280" fontFamily="system-ui">50</text>
      <text x={labelW + barAreaW * 0.75} y={20} fontSize="12" fill="#6B7280" fontFamily="system-ui">75</text>
      <text x={labelW + barAreaW - 12} y={20} fontSize="12" fill="#6B7280" fontFamily="system-ui">100</text>
      {[0, 0.25, 0.5, 0.75, 1].map((p) => (
        <line
          key={p}
          x1={labelW + barAreaW * p}
          x2={labelW + barAreaW * p}
          y1={26}
          y2={H - 12}
          stroke="#E5E7EB"
          strokeDasharray="3 4"
          strokeWidth={1}
        />
      ))}
      {sorted.map((r, i) => {
        const y = 36 + i * 36;
        const w = (r.leverage / max) * barAreaW;
        const fill = leverageColor(r.leverage);
        return (
          <g key={r.id}>
            <text x={labelW - 10} y={y + 14} fontSize="12" fill="#1F2937" fontFamily="system-ui" textAnchor="end">
              {r.id} · {r.cpc}
            </text>
            <rect x={labelW} y={y} width={w} height={20} rx={4} fill="url(#grad-bar)" opacity={0.85} />
            <rect x={labelW} y={y} width={w} height={20} rx={4} fill={fill} opacity={0.25} />
            <text x={labelW + w + 8} y={y + 14} fontSize="12" fill="#111827" fontWeight={600} fontFamily="system-ui">
              {r.leverage}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export type TimelinePoint = {
  month: string;
  filings: number;
  challenges: number;
  deals: number;
};

export function Timeline36Chart({ data }: { data: TimelinePoint[] }): ReactElement {
  const W = 920;
  const H = 360;
  const padL = 56;
  const padR = 24;
  const padT = 32;
  const padB = 56;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const max = Math.max(...data.flatMap((d) => [d.filings, d.challenges, d.deals]));
  const yMax = Math.ceil(max / 4) * 4 + 4;

  const x = (i: number) => padL + (i / (data.length - 1)) * innerW;
  const y = (v: number) => padT + innerH - (v / yMax) * innerH;

  const path = (key: "filings" | "challenges" | "deals") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(d[key])}`).join(" ");

  const areaPath = (key: "filings" | "challenges" | "deals") =>
    `${path(key)} L ${x(data.length - 1)} ${padT + innerH} L ${x(0)} ${padT + innerH} Z`;

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((p) => Math.round(yMax * p));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", maxWidth: "100%", height: "auto" }} role="img" aria-label="Activité brevet Apple sur 36 mois">
      <defs>
        <linearGradient id="grad-filings" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="grad-challenges" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.45} />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="grad-deals" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity={0.45} />
          <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
        </linearGradient>
      </defs>

      {yTicks.map((t) => (
        <g key={t}>
          <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke="#E5E7EB" strokeDasharray="3 4" />
          <text x={padL - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#6B7280" fontFamily="system-ui">
            {t}
          </text>
        </g>
      ))}

      {data.map((d, i) =>
        i % 6 === 0 ? (
          <text key={d.month} x={x(i)} y={H - padB + 18} textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="system-ui">
            {d.month}
          </text>
        ) : null
      )}

      <path d={areaPath("filings")} fill="url(#grad-filings)" />
      <path d={areaPath("challenges")} fill="url(#grad-challenges)" />
      <path d={areaPath("deals")} fill="url(#grad-deals)" />

      <path d={path("filings")} stroke="#7C3AED" strokeWidth={2.4} fill="none" />
      <path d={path("challenges")} stroke="#F59E0B" strokeWidth={2.4} fill="none" />
      <path d={path("deals")} stroke="#10B981" strokeWidth={2.4} fill="none" />

      {data.map((d, i) =>
        i % 3 === 0 ? (
          <g key={`pt-${i}`}>
            <circle cx={x(i)} cy={y(d.filings)} r={3} fill="#7C3AED" />
            <circle cx={x(i)} cy={y(d.challenges)} r={3} fill="#F59E0B" />
            <circle cx={x(i)} cy={y(d.deals)} r={3} fill="#10B981" />
          </g>
        ) : null
      )}

      <g transform={`translate(${padL + 12}, ${padT - 4})`}>
        <rect x={0} y={-10} width={460} height={22} rx={6} fill="#FFFFFF" stroke="#E5E7EB" />
        <circle cx={14} cy={1} r={5} fill="#7C3AED" />
        <text x={26} y={5} fontSize="11" fill="#1F2937" fontFamily="system-ui">Dépôts Apple</text>
        <circle cx={140} cy={1} r={5} fill="#F59E0B" />
        <text x={152} y={5} fontSize="11" fill="#1F2937" fontFamily="system-ui">Challenges concurrents</text>
        <circle cx={310} cy={1} r={5} fill="#10B981" />
        <text x={322} y={5} fontSize="11" fill="#1F2937" fontFamily="system-ui">Deals licensing publics</text>
      </g>
    </svg>
  );
}

export type LeverageBreakdown = {
  label: string;
  value: number;
  fill: string;
};

export function LeverageRadar({ axes }: { axes: LeverageBreakdown[] }): ReactElement {
  const cx = 200;
  const cy = 200;
  const R = 140;
  const N = axes.length;
  const angle = (i: number) => (Math.PI * 2 * i) / N - Math.PI / 2;

  const point = (i: number, value: number) => {
    const r = (value / 100) * R;
    return [cx + Math.cos(angle(i)) * r, cy + Math.sin(angle(i)) * r];
  };

  const polygon = axes.map((a, i) => point(i, a.value).join(",")).join(" ");

  return (
    <svg viewBox="0 0 400 400" width="100%" style={{ display: "block", maxWidth: 360, margin: "0 auto" }} role="img" aria-label="Radar des composantes du score leverage">
      {[0.25, 0.5, 0.75, 1].map((p) => {
        const poly = Array.from({ length: N }, (_, i) => {
          const r = R * p;
          return [cx + Math.cos(angle(i)) * r, cy + Math.sin(angle(i)) * r].join(",");
        }).join(" ");
        return <polygon key={p} points={poly} fill="none" stroke="#E5E7EB" strokeDasharray="3 4" />;
      })}
      {axes.map((a, i) => {
        const [px, py] = point(i, 100);
        return <line key={a.label} x1={cx} y1={cy} x2={px} y2={py} stroke="#E5E7EB" />;
      })}
      <polygon points={polygon} fill="#7C3AED" fillOpacity={0.25} stroke="#7C3AED" strokeWidth={2} />
      {axes.map((a, i) => {
        const [tx, ty] = point(i, 118);
        return (
          <g key={`lab-${a.label}`}>
            <text
              x={tx}
              y={ty}
              fontSize="12"
              fill="#1F2937"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="system-ui"
              fontWeight={600}
            >
              {a.label}
            </text>
          </g>
        );
      })}
      {axes.map((a, i) => {
        const [px, py] = point(i, a.value);
        return <circle key={`pt-${a.label}`} cx={px} cy={py} r={4} fill={a.fill} />;
      })}
    </svg>
  );
}

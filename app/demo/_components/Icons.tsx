import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function IconRadar(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 12 L20 6" />
    </svg>
  );
}

export function IconSparkles(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3 L13.5 9 L19.5 10.5 L13.5 12 L12 18 L10.5 12 L4.5 10.5 L10.5 9 Z" />
      <path d="M19 4 L19.7 6 L21.7 6.7 L19.7 7.4 L19 9.4 L18.3 7.4 L16.3 6.7 L18.3 6 Z" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 2 L4 5 V12 C4 17 7 20 12 22 C17 20 20 17 20 12 V5 Z" />
      <path d="M9 12 L11 14 L15 10" />
    </svg>
  );
}

export function IconBriefcase(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7 V5 a2 2 0 0 1 2-2 h2 a2 2 0 0 1 2 2 V7" />
      <path d="M3 13 h18" />
    </svg>
  );
}

export function IconTarget(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconBolt(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M13 2 L4 14 H11 L9 22 L20 10 H13 Z" />
    </svg>
  );
}

export function IconChart(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3 3 V21 H21" />
      <path d="M7 17 L11 12 L14 14 L20 7" />
    </svg>
  );
}

export function IconScan(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 7 V5 a1 1 0 0 1 1-1 h2" />
      <path d="M17 4 h2 a1 1 0 0 1 1 1 v2" />
      <path d="M20 17 v2 a1 1 0 0 1 -1 1 h-2" />
      <path d="M7 20 h-2 a1 1 0 0 1 -1 -1 v-2" />
      <path d="M4 12 H20" />
    </svg>
  );
}

export function IconDoc(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M14 3 H6 a2 2 0 0 0 -2 2 V19 a2 2 0 0 0 2 2 H18 a2 2 0 0 0 2 -2 V9 Z" />
      <path d="M14 3 V9 H20" />
      <path d="M8 13 H16" />
      <path d="M8 17 H13" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 12 L10 17 L20 7" />
    </svg>
  );
}

export function IconX(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 6 L18 18" />
      <path d="M18 6 L6 18" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 12 H19" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}

export function IconDownload(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3 V15" />
      <path d="M7 11 L12 16 L17 11" />
      <path d="M5 21 H19" />
    </svg>
  );
}

export function IconLock(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11 V7 a4 4 0 0 1 8 0 V11" />
    </svg>
  );
}

export function IconPlay(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
    </svg>
  );
}

export function IconUsers(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20 c0 -3.5 3 -6 6 -6 s6 2.5 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.5 c2 0.5 5 2 5 5.5" />
    </svg>
  );
}

export function IconScale(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3 V21" />
      <path d="M5 8 H19" />
      <path d="M3 14 L7 8 L11 14 Z" />
      <path d="M13 14 L17 8 L21 14 Z" />
      <path d="M8 21 H16" />
    </svg>
  );
}

export function IconChevron(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 9 L12 15 L18 9" />
    </svg>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12 H21" />
      <path d="M12 3 C15 7 15 17 12 21 C9 17 9 7 12 3" />
    </svg>
  );
}

export function IconCpu(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M3 10 H6 M3 14 H6 M18 10 H21 M18 14 H21 M10 3 V6 M14 3 V6 M10 18 V21 M14 18 V21" />
    </svg>
  );
}

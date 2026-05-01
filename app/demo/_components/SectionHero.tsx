import Link from "next/link";
import { IconRadar, IconArrowRight, IconDownload } from "./Icons";
import { HERO } from "./data";

export default function SectionHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid rgba(124,58,237,0.25)",
      }}
    >
      <img
        src={`https://image.pollinations.ai/prompt/${encodeURIComponent(HERO.imagePrompt)}?width=1920&height=1080&nologo=true&seed=20260502`}
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at top, rgba(124,58,237,0.35) 0%, rgba(15,10,31,0) 50%), linear-gradient(180deg, rgba(15,10,31,0.55) 0%, rgba(15,10,31,0.95) 100%)",
        }}
      />
      <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 1024, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            background: "rgba(124,58,237,0.18)",
            border: "1px solid rgba(124,58,237,0.55)",
            borderRadius: 999,
            fontSize: 12,
            marginBottom: 24,
            color: "#C4B5FD",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <IconRadar size={14} />
          {HERO.badge}
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 6.4vw, 76px)",
            lineHeight: 1.05,
            margin: "0 0 24px",
            fontWeight: 800,
            letterSpacing: -1.4,
          }}
        >
          {HERO.title}
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #C4B5FD 0%, #67E8F9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {HERO.titleAccent}
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 1.6vw, 20px)",
            color: "#D1D5DB",
            maxWidth: 720,
            margin: "0 auto 36px",
            lineHeight: 1.55,
          }}
        >
          {HERO.subtitle}
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
          <Link
            href="/auth/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)",
              color: "#FFFFFF",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(124,58,237,0.35)",
            }}
          >
            {HERO.ctaLabel} <IconArrowRight size={18} />
          </Link>
          <a
            href="#sample"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              background: "rgba(255,255,255,0.06)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 10,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <IconDownload size={18} /> Télécharger sample (PDF)
          </a>
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", fontSize: 12, color: "#A78BFA" }}>
          {HERO.badges.map((b) => (
            <span key={b} style={{ padding: "4px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 999 }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

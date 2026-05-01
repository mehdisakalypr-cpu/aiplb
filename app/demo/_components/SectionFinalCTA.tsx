import Link from "next/link";
import { FINAL_CTA } from "./data";
import { IconArrowRight, IconDownload } from "./Icons";

export default function SectionFinalCTA() {
  return (
    <section style={{ background: "linear-gradient(180deg, #0A0716 0%, #0F0A1F 100%)", padding: "120px 24px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: 4,
            borderRadius: 999,
            background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)",
            marginBottom: 28,
          }}
        >
          <div style={{ padding: "6px 16px", background: "#0F0A1F", borderRadius: 999, fontSize: 11, color: "#C4B5FD", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700 }}>
            Final · activate now
          </div>
        </div>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, margin: "0 0 18px", letterSpacing: -1, lineHeight: 1.05, color: "#FFFFFF" }}>
          {FINAL_CTA.title}
        </h2>
        <p style={{ fontSize: 18, color: "#D1D5DB", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.55 }}>
          {FINAL_CTA.subtitle}
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/auth/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 32px",
              background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)",
              color: "#FFFFFF",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 20px 50px rgba(124,58,237,0.4)",
            }}
          >
            {FINAL_CTA.primary} <IconArrowRight size={18} />
          </Link>
          <a
            href="#sample"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 32px",
              background: "rgba(255,255,255,0.06)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            <IconDownload size={18} /> {FINAL_CTA.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

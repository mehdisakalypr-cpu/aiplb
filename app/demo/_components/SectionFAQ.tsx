"use client";

import { useState } from "react";
import { FAQ } from "./data";
import { IconChevron } from "./Icons";

export default function SectionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ background: "#0F0A1F", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>FAQ</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            Les 8 questions que tout IP head pose.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? "linear-gradient(180deg, #1F1535 0%, #170E26 100%)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isOpen ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "all 200ms",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    color: "#F8FAFC",
                    fontSize: 15,
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    gap: 12,
                  }}
                >
                  <span>{f.q}</span>
                  <span style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 200ms", color: "#A78BFA" }}>
                    <IconChevron size={18} />
                  </span>
                </button>
                {isOpen ? (
                  <div style={{ padding: "0 22px 22px", fontSize: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
                    {f.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

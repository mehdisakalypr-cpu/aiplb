"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { COMPETITORS, COMPARISON_RADAR } from "./data";
import { IconCheck, IconX } from "./Icons";

export default function SectionCompetitors() {
  return (
    <section style={{ background: "#0F0A1F", padding: "96px 24px", borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, color: "#A78BFA", textTransform: "uppercase" }}>Match-up</span>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 800, margin: "10px 0 14px", letterSpacing: -0.6, color: "#FFFFFF" }}>
            Patently vs ClearViewIP, PatSnap, Anaqua.
          </h2>
        </div>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 18, marginBottom: 32, height: 380 }}>
          <ResponsiveContainer>
            <RadarChart data={COMPARISON_RADAR} outerRadius="76%">
              <PolarGrid stroke="#2D1F4D" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "#E5E7EB" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#6B7280" }} />
              <Tooltip contentStyle={{ background: "#0F0A1F", border: "1px solid #2D1F4D", borderRadius: 8, color: "#F9FAFB", fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12, color: "#D1D5DB" }} />
              <Radar name="Patently" dataKey="Patently" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.45} />
              <Radar name="ClearViewIP" dataKey="ClearViewIP" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.18} />
              <Radar name="PatSnap" dataKey="PatSnap" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.18} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {COMPETITORS.map((c) => (
            <article
              key={c.name}
              style={{
                background: c.isUs ? "linear-gradient(180deg, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.08) 100%)" : "rgba(255,255,255,0.03)",
                border: c.isUs ? "1px solid rgba(124,58,237,0.6)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 22,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {c.isUs ? (
                <div style={{ position: "absolute", top: 14, right: 14, padding: "3px 10px", background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: 1, color: "#FFFFFF" }}>NOUS</div>
              ) : null}
              <div style={{ fontSize: 17, fontWeight: 800, color: c.color, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>{c.tagline}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC", marginBottom: 14 }}>{c.pricing}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12.5 }}>
                {c.strengths.map((s) => (
                  <li key={s} style={{ display: "flex", gap: 8, alignItems: "flex-start", color: "rgba(255,255,255,0.78)", margin: "6px 0" }}>
                    <span style={{ color: "#10B981", flexShrink: 0, marginTop: 2 }}><IconCheck size={14} /></span>
                    <span>{s}</span>
                  </li>
                ))}
                {c.weaknesses.map((w) => (
                  <li key={w} style={{ display: "flex", gap: 8, alignItems: "flex-start", color: "rgba(255,255,255,0.55)", margin: "6px 0" }}>
                    <span style={{ color: "#EF4444", flexShrink: 0, marginTop: 2 }}><IconX size={14} /></span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 14, fontSize: 11, color: "#A78BFA", textTransform: "uppercase", letterSpacing: 1 }}>Score global</div>
              <div style={{ height: 6, background: "rgba(0,0,0,0.4)", borderRadius: 999, overflow: "hidden", marginTop: 4 }}>
                <div style={{ height: "100%", width: `${c.score}%`, background: c.color }} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: c.color, marginTop: 6 }}>{c.score}<span style={{ fontSize: 12, opacity: 0.5 }}>/100</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

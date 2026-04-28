"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCRIPT: Array<{ ts: string; line: string }> = [
  { ts: "0:00", line: "Bonjour, je suis Iris, votre IP analyst." },
  { ts: "0:08", line: "En 90 secondes je vous montre 3 opportunités de licensing à 6 chiffres détectées dans votre vertical cette semaine." },
  { ts: "0:22", line: "Opportunité 1 — Apple US20240312456 (waveguide AR). Magic Leap a cité 4 fois le brevet sur ses 6 derniers dépôts. Royalty plausible : 380K€/an." },
  { ts: "0:48", line: "Opportunité 2 — Apple US20240145678 (diffusion cache on-device). Cerebras et Groq ont contourné. Risque litige élevé, position négociation forte côté Apple." },
  { ts: "1:08", line: "Opportunité 3 — Apple US20240456712 (federated fine-tuning). Samsung pousse un standard concurrent. Fenêtre de licensing ouverte ~9 mois avant standardisation." },
  { ts: "1:28", line: "Cliquez 'Démarrer' pour générer votre dossier négo automatique sur ces 3 cibles." },
];

export default function IrisModal() {
  const [open, setOpen] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (!open) {
      setActiveLine(0);
      return;
    }
    const id = setInterval(() => {
      setActiveLine((n) => (n + 1) % SCRIPT.length);
    }, 3500);
    return () => clearInterval(id);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 26px",
          background: "#7C3AED",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 10,
          fontWeight: 600,
          fontSize: 15,
          cursor: "pointer",
          boxShadow: "0 6px 20px -4px rgba(124,58,237,0.55)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
        </svg>
        Activer Iris
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8,4,20,0.78)",
              backdropFilter: "blur(8px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 720,
                background: "#1A1230",
                border: "1px solid #2D1F4D",
                borderRadius: 18,
                padding: 32,
                color: "#F9FAFB",
                position: "relative",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 32,
                  height: 32,
                  background: "transparent",
                  border: "1px solid #4B5563",
                  borderRadius: 8,
                  color: "#D1D5DB",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
                <div style={{ position: "relative", width: 72, height: 72 }}>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: "absolute", inset: -6, borderRadius: 999, border: "2px solid #06B6D4" }}
                  />
                  <img
                    src="https://image.pollinations.ai/prompt/portrait%20female%20AI%20avatar%20Iris%20holographic%20violet%20cyan%20cybernetic%20professional%20legal%20analyst%20glowing%20eyes%20clean%20studio?width=240&height=240&nologo=true&seed=88"
                    alt="Iris avatar"
                    style={{ width: 72, height: 72, borderRadius: 999, objectFit: "cover", border: "2px solid #7C3AED" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>Iris — IP analyst</div>
                  <div style={{ fontSize: 13, color: "#A78BFA" }}>Démo onboarding · 90 secondes</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    style={{ width: 8, height: 8, borderRadius: 999, background: "#10B981" }}
                  />
                  <span style={{ fontSize: 12, color: "#9CA3AF" }}>en direct</span>
                </div>
              </div>

              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {SCRIPT.map((s, i) => {
                  const active = i === activeLine;
                  return (
                    <li
                      key={s.ts}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "56px 1fr",
                        gap: 14,
                        alignItems: "flex-start",
                        padding: 12,
                        background: active ? "rgba(124,58,237,0.18)" : "transparent",
                        border: active ? "1px solid #7C3AED" : "1px solid transparent",
                        borderRadius: 10,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div style={{ fontSize: 12, fontFamily: "ui-monospace, monospace", color: active ? "#C4B5FD" : "#6B7280" }}>
                        {s.ts}
                      </div>
                      <div style={{ fontSize: 14, color: active ? "#FFFFFF" : "#9CA3AF", lineHeight: 1.6 }}>
                        {s.line}
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="/auth/signup"
                  style={{
                    flex: 1,
                    minWidth: 200,
                    textAlign: "center",
                    padding: "12px 20px",
                    background: "#7C3AED",
                    color: "#FFFFFF",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Démarrer mon dossier négo →
                </a>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "12px 20px",
                    background: "transparent",
                    color: "#D1D5DB",
                    border: "1px solid #4B5563",
                    borderRadius: 10,
                    fontWeight: 500,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
      {items.map((it, i) => {
        const isOpen = i === open;
        return (
          <li
            key={it.q}
            style={{
              background: "#1A1230",
              border: "1px solid #2D1F4D",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                color: "#FFFFFF",
                textAlign: "left",
                padding: "18px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              <span>{it.q}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: "inline-flex", color: "#A78BFA" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9 L12 15 L18 9" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 22px 22px", color: "#D1D5DB", fontSize: 14, lineHeight: 1.7 }}>{it.a}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

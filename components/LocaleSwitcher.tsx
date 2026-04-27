"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const COOKIE = "aiplb_locale";

function readCookie(): "fr" | "en" {
  if (typeof document === "undefined") return "fr";
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]+)`));
  const v = m?.[1];
  return v === "en" ? "en" : "fr";
}

function writeCookie(v: "fr" | "en") {
  document.cookie = `${COOKIE}=${v}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export default function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [locale, setLocale] = useState<"fr" | "en">("fr");
  const [, startTransition] = useTransition();

  useEffect(() => {
    setLocale(readCookie());
  }, []);

  function toggle(next: "fr" | "en") {
    if (next === locale) return;
    writeCookie(next);
    setLocale(next);
    startTransition(() => router.refresh());
  }

  return (
    <div
      role="group"
      aria-label="Langue"
      style={{
        display: "inline-flex",
        gap: 0,
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 6,
        overflow: "hidden",
        fontSize: compact ? 11 : 12,
        fontWeight: 600,
      }}
    >
      <button
        type="button"
        onClick={() => toggle("fr")}
        aria-pressed={locale === "fr"}
        style={{
          padding: compact ? "3px 8px" : "4px 10px",
          background: locale === "fr" ? "#7C3AED" : "transparent",
          color: locale === "fr" ? "#FFFFFF" : "rgba(255,255,255,0.6)",
          border: "none",
          cursor: "pointer",
        }}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => toggle("en")}
        aria-pressed={locale === "en"}
        style={{
          padding: compact ? "3px 8px" : "4px 10px",
          background: locale === "en" ? "#7C3AED" : "transparent",
          color: locale === "en" ? "#FFFFFF" : "rgba(255,255,255,0.6)",
          border: "none",
          cursor: "pointer",
        }}
      >
        EN
      </button>
    </div>
  );
}

"use client";

export default function SampleDownloadButton({
  label = "Télécharger l'échantillon (PDF)",
}: {
  label?: string;
}) {
  return (
    <button
      onClick={() => {
        const w = window.open("/demo/sample", "_blank", "noopener,noreferrer");
        if (!w) return;
        const trigger = () => {
          try {
            w.focus();
            w.print();
          } catch {
            /* user can ctrl+P manually */
          }
        };
        const ready = () => {
          if (w.document?.readyState === "complete") {
            setTimeout(trigger, 600);
          } else {
            setTimeout(ready, 250);
          }
        };
        setTimeout(ready, 800);
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 26px",
        background: "#FFFFFF",
        color: "#1F2937",
        border: "none",
        borderRadius: 10,
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        boxShadow: "0 6px 16px -4px rgba(0,0,0,0.25)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 V15" />
        <path d="M7 11 L12 16 L17 11" />
        <path d="M5 21 H19" />
      </svg>
      {label}
    </button>
  );
}

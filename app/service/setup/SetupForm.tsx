"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Item = { name: string; url: string };

export default function SetupForm({ maxItems }: { maxItems: number }) {
  const router = useRouter();
  const initial = Math.min(maxItems, 3);
  const [items, setItems] = useState<Item[]>(
    Array.from({ length: initial }, () => ({ name: "", url: "" })),
  );
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function update(i: number, key: keyof Item, value: string) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, [key]: value } : it)));
  }

  function addRow() {
    if (items.length >= maxItems) return;
    setItems((prev) => [...prev, { name: "", url: "" }]);
  }

  function removeRow(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const cleaned = items
      .map((it) => ({ name: it.name.trim(), url: it.url.trim() }))
      .filter((it) => it.name && it.url);
    if (cleaned.length === 0) {
      setErr("Ajoute au moins un concurrent (nom + URL).");
      return;
    }
    if (!cleaned.every((it) => /^https?:\/\//i.test(it.url))) {
      setErr("Chaque URL doit commencer par http:// ou https://");
      return;
    }
    setBusy(true);
    try {
      let added = 0;
      for (const it of cleaned) {
        const r = await fetch("/api/competitors", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name: it.name, url: it.url }),
        });
        const j = await r.json().catch(() => ({}));
        if (!r.ok) {
          if (r.status === 402) {
            setErr(j.error || "Limite de plan atteinte.");
            setBusy(false);
            if (added > 0) router.push("/dashboard?welcome=1");
            return;
          }
          setErr(j.error || `Erreur ${r.status}`);
          setBusy(false);
          return;
        }
        added += 1;
      }
      router.push("/dashboard?welcome=1");
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Erreur réseau");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 16 }}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            background: "#1F1535",
            border: "1px solid #2D1F4D",
            borderRadius: 12,
            padding: 16,
            display: "grid",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#A78BFA", textTransform: "uppercase", letterSpacing: 1 }}>
              Concurrent #{i + 1}
            </span>
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => removeRow(i)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#EF4444",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Retirer
              </button>
            )}
          </div>
          <input
            type="text"
            placeholder="Nom (ex: OpenAI)"
            value={it.name}
            onChange={(e) => update(i, "name", e.target.value)}
            required
            style={{
              padding: "10px 12px",
              background: "#0F0A1F",
              border: "1px solid #2D1F4D",
              borderRadius: 6,
              color: "#FFFFFF",
              fontSize: 14,
            }}
          />
          <input
            type="url"
            placeholder="https://openai.com"
            value={it.url}
            onChange={(e) => update(i, "url", e.target.value)}
            required
            style={{
              padding: "10px 12px",
              background: "#0F0A1F",
              border: "1px solid #2D1F4D",
              borderRadius: 6,
              color: "#FFFFFF",
              fontSize: 14,
            }}
          />
        </div>
      ))}

      {items.length < maxItems && (
        <button
          type="button"
          onClick={addRow}
          style={{
            padding: "10px 16px",
            background: "transparent",
            border: "1px dashed #7C3AED",
            color: "#A78BFA",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          + Ajouter un concurrent ({items.length}/{maxItems})
        </button>
      )}

      {err && (
        <div
          style={{
            padding: 12,
            background: "rgba(239,68,68,0.15)",
            border: "1px solid #EF4444",
            borderRadius: 6,
            color: "#FCA5A5",
            fontSize: 14,
          }}
        >
          {err}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        style={{
          padding: "14px 24px",
          backgroundColor: busy ? "#4F46E5" : "#7C3AED",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 600,
          cursor: busy ? "wait" : "pointer",
        }}
      >
        {busy ? "Enregistrement…" : "Démarrer mon rapport"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function ChangePasswordSection({
  hasPassword,
  highlight,
}: {
  hasPassword: boolean;
  highlight: boolean;
}) {
  const [open, setOpen] = useState(highlight);
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ current: hasPassword ? current : "", password: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg({
          kind: "err",
          text:
            data?.error === "current_password_invalid"
              ? "Mot de passe actuel incorrect."
              : data?.error === "current_password_required"
              ? "Mot de passe actuel requis."
              : data?.error === "password_too_short"
              ? "Le nouveau mot de passe doit faire au moins 8 caract\u00e8res."
              : "Erreur lors de la mise \u00e0 jour.",
        });
        return;
      }
      setMsg({ kind: "ok", text: "Mot de passe mis \u00e0 jour." });
      setCurrent("");
      setNext("");
    } catch {
      setMsg({ kind: "err", text: "Erreur r\u00e9seau." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="rounded-xl border p-5 mb-8"
      style={{
        borderColor: highlight ? "#10B981" : "var(--border)",
        background: highlight ? "rgba(16,185,129,0.06)" : "transparent",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--muted)] mb-1">S\u00e9curit\u00e9</p>
          <p className="text-sm font-medium">
            {hasPassword ? "Modifier mon mot de passe" : "D\u00e9finir un mot de passe"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-sm hover:underline"
          style={{ color: "#10B981" }}
        >
          {open ? "Fermer" : hasPassword ? "Changer" : "D\u00e9finir"}
        </button>
      </div>

      {open && (
        <form onSubmit={submit} className="mt-4 space-y-3">
          {hasPassword && (
            <input
              type="password"
              required
              autoComplete="current-password"
              placeholder="Mot de passe actuel"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
            />
          )}
          <input
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            placeholder="Nouveau mot de passe (min 8 caract\u00e8res)"
            value={next}
            onChange={(e) => setNext(e.target.value)}
            className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
          />
          {msg && (
            <p className={`text-sm ${msg.kind === "ok" ? "text-emerald-400" : "text-red-400"}`}>
              {msg.text}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            style={{ background: "#10B981" }}
          >
            {loading ? "Enregistrement\u2026" : "Enregistrer"}
          </button>
        </form>
      )}
    </div>
  );
}

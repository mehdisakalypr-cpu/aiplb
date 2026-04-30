"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TierBadge from "@/components/TierBadge";
import { getTierLimits, nextTier } from "@/lib/tier-limits";

type Competitor = {
  id: string;
  name: string;
  url: string;
  enabled: boolean;
  last_snapshot_at: string | null;
};

export default function Dashboard() {
  const router = useRouter();
  const [items, setItems] = useState<Competitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<string>("free");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [adding, setAdding] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [flash, setFlash] = useState<{ kind: "ok" | "queued" | "err"; text: string } | null>(null);

  useEffect(() => {
    (async () => {
      const r = await fetch("/api/auth/me", { cache: "no-store" });
      if (!r.ok) {
        router.replace("/auth/login");
        return;
      }
      const me = await r.json();
      setPlan(me.plan ?? "free");
      const c = await fetch("/api/competitors").then((rr) => rr.json());
      setItems(c.items || []);
      setLoading(false);
    })();
  }, [router]);

  const limits = getTierLimits(plan);
  const max = limits.items_max;
  const count = items.length;
  const atLimit = count >= max;
  const upTier = nextTier(plan);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setAdding(true);
    setFlash(null);
    try {
      const r = await fetch("/api/competitors", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, url }),
      });
      const data = await r.json();
      if (!r.ok) {
        if (r.status === 402) {
          setFlash({ kind: "err", text: data.error ?? "Limite atteinte. Upgrade pour ajouter plus." });
        } else {
          setFlash({ kind: "err", text: data.error || "Échec de l'ajout" });
        }
        return;
      }
      setItems((prev) => [data.competitor, ...prev]);
      setName("");
      setUrl("");
    } finally {
      setAdding(false);
    }
  }

  async function generate(id: string) {
    setBusyId(id);
    setFlash(null);
    try {
      const r = await fetch(`/api/competitors/${id}/generate`, { method: "POST" });
      const data = await r.json();
      if (r.status === 202) {
        setFlash({ kind: "queued", text: data.message ?? "Étude en cours, vous recevrez un email." });
      } else if (r.ok) {
        setFlash({ kind: "ok", text: data.message ?? "Rapport prêt." });
        // Refresh list to update last_snapshot_at
        const c = await fetch("/api/competitors").then((rr) => rr.json());
        setItems(c.items || []);
      } else {
        setFlash({ kind: "err", text: data.error || "Erreur lors de la génération." });
      }
    } catch {
      setFlash({ kind: "err", text: "Erreur réseau." });
    } finally {
      setBusyId(null);
    }
  }

  if (loading) {
    return <main className="min-h-screen p-10 text-[var(--muted)]">Chargement…</main>;
  }

  return (
    <main>
      <TierBadge />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-semibold tracking-tight">Concurrents</h1>
          <div className="text-sm text-[var(--muted)]">
            {count} / {max === 0 ? "—" : max} suivis · plan <strong style={{ color: "#A78BFA" }}>{plan}</strong>
          </div>
        </div>

        {flash ? (
          <div
            style={{
              marginTop: 16,
              padding: 14,
              borderRadius: 10,
              background:
                flash.kind === "ok"
                  ? "rgba(16,185,129,.12)"
                  : flash.kind === "queued"
                  ? "rgba(124,58,237,.14)"
                  : "rgba(239,68,68,.14)",
              border: `1px solid ${
                flash.kind === "ok"
                  ? "rgba(16,185,129,.4)"
                  : flash.kind === "queued"
                  ? "rgba(124,58,237,.4)"
                  : "rgba(239,68,68,.4)"
              }`,
              color: "#F8FAFC",
            }}
          >
            {flash.text}
          </div>
        ) : null}

        {atLimit ? (
          <div
            style={{
              marginTop: 16,
              padding: 14,
              borderRadius: 10,
              background: "rgba(250,204,21,.1)",
              border: "1px solid rgba(250,204,21,.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span style={{ color: "#FACC15" }}>
              Limite {plan === "free" ? "Free" : plan} atteinte ({count}/{max}).
              {upTier ? ` Passez en ${upTier} pour suivre plus de concurrents.` : ""}
            </span>
            <Link
              href="/offres"
              style={{
                padding: "8px 16px",
                background: "#FACC15",
                color: "#0a0a1e",
                fontWeight: 700,
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              Upgrader →
            </Link>
          </div>
        ) : null}

        <form
          onSubmit={add}
          className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-3 rounded-lg border border-[var(--border)] p-4"
          style={{ opacity: atLimit ? 0.5 : 1 }}
        >
          <input
            placeholder="Nom (ex. Acme)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={atLimit}
            className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:border-indigo-500"
          />
          <input
            placeholder="https://acme.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            type="url"
            disabled={atLimit}
            className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:border-indigo-500"
          />
          <button
            disabled={adding || atLimit}
            title={atLimit ? "Limite atteinte — upgrader pour ajouter" : "Ajouter ce concurrent"}
            className="rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {adding ? "Ajout…" : atLimit ? "Limite atteinte" : "Ajouter"}
          </button>
        </form>

        <div className="mt-8 rounded-lg border border-[var(--border)] divide-y divide-[var(--border)]">
          {items.length === 0 ? (
            <div className="p-8 text-center text-[var(--muted)]">
              Aucun concurrent. {max > 0 ? "Ajoutez-en un ci-dessus." : "Choisissez une offre pour commencer."}
            </div>
          ) : (
            items.map((c) => (
              <div
                key={c.id}
                className="p-4 flex items-center gap-4 flex-wrap"
              >
                <Link href={`/dashboard/competitors/${c.id}`} className="flex-1 min-w-0 hover:underline">
                  <div className="font-medium truncate">{c.name}</div>
                  <div className="text-sm text-[var(--muted)] truncate">{c.url}</div>
                </Link>
                <div className="text-xs text-[var(--muted)] whitespace-nowrap">
                  {c.last_snapshot_at
                    ? `dernier rapport : ${new Date(c.last_snapshot_at).toLocaleString("fr-FR")}`
                    : "aucun rapport encore"}
                </div>
                {c.last_snapshot_at && (
                  <Link
                    href={`/dashboard/competitors/${c.id}`}
                    style={{
                      padding: "8px 12px",
                      background: "#10B981",
                      color: "#FFFFFF",
                      border: "none",
                      borderRadius: 6,
                      fontWeight: 600,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    📄 Voir rapport
                  </Link>
                )}
                <button
                  onClick={() => generate(c.id)}
                  disabled={busyId === c.id}
                  style={{
                    padding: "8px 16px",
                    background: "#7C3AED",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 6,
                    fontWeight: 700,
                    cursor: busyId === c.id ? "wait" : "pointer",
                    opacity: busyId === c.id ? 0.6 : 1,
                  }}
                >
                  {busyId === c.id ? "..." : c.last_snapshot_at ? "🔄 Rafraîchir" : "Go"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

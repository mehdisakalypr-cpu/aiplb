"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Msg = {
  id: string;
  product_slug: string | null;
  type: string | null;
  name: string | null;
  email: string | null;
  company: string | null;
  subject: string | null;
  message: string | null;
  ai_draft: string | null;
  ai_classification: string | null;
  ai_confidence: number | null;
  draft_status: string | null;
  received_at: string;
  sent_at: string | null;
  replied_at: string | null;
};

const STATUS_LABEL: Record<string, string> = {
  pending: "En attente",
  draft_ready: "Brouillon prêt",
  approved: "Approuvé",
  sent: "Envoyé",
  ignored: "Ignoré",
};

const STATUS_COLOR: Record<string, string> = {
  pending: "#9CA3AF",
  draft_ready: "#3B82F6",
  approved: "#10B981",
  sent: "#6B7280",
  ignored: "#EF4444",
};

export default function CustomerMessagesPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [folders, setFolders] = useState<Record<string, number>>({});
  const [folder, setFolder] = useState<string>("aici");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<Msg | null>(null);
  const [draftEdit, setDraftEdit] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      const r = await fetch("/api/auth/me", { cache: "no-store" });
      if (!r.ok) {
        router.replace("/auth/login?redirect=/admin/customer-messages");
        return;
      }
      const c = await fetch("/api/admin/check", { cache: "no-store" });
      const cj = c.ok ? await c.json() : { is_admin: false };
      setAllowed(Boolean(cj.is_admin));
    })();
  }, [router]);

  useEffect(() => {
    if (!allowed) return;
    void load();
  }, [allowed, folder, statusFilter]);

  async function load() {
    const params = new URLSearchParams();
    if (folder) params.set("folder", folder);
    if (statusFilter) params.set("status", statusFilter);
    const r = await fetch(`/api/admin/customer-messages?${params.toString()}`, { cache: "no-store" });
    if (!r.ok) {
      setMsg(`Erreur chargement: ${r.status}`);
      return;
    }
    const d = await r.json();
    setMessages(d.messages ?? []);
    setFolders(d.folders ?? {});
    setSelected(new Set());
    if (active && !(d.messages ?? []).some((m: Msg) => m.id === active.id)) {
      setActive(null);
      setDraftEdit("");
    }
  }

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function open(m: Msg) {
    setActive(m);
    setDraftEdit(m.ai_draft ?? "");
  }

  async function patchSelected(payload: { ai_draft?: string; draft_status?: string }) {
    const ids = Array.from(selected);
    if (ids.length === 0) {
      setMsg("Aucun message sélectionné.");
      return;
    }
    setBusy(true);
    setMsg("");
    const r = await fetch("/api/admin/customer-messages", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ids, ...payload }),
    });
    setBusy(false);
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      setMsg(`Erreur: ${e.error ?? r.status}`);
      return;
    }
    const d = await r.json();
    setMsg(`${d.count} message(s) mis à jour.`);
    await load();
  }

  async function patchActive(payload: { ai_draft?: string; draft_status?: string }) {
    if (!active) return;
    setBusy(true);
    setMsg("");
    const r = await fetch("/api/admin/customer-messages", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ids: [active.id], ...payload }),
    });
    setBusy(false);
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      setMsg(`Erreur: ${e.error ?? r.status}`);
      return;
    }
    setMsg("Mis à jour.");
    await load();
  }

  const folderList = useMemo(
    () => Object.entries(folders).sort((a, b) => b[1] - a[1]),
    [folders],
  );

  if (allowed === null) {
    return <div style={{ padding: 24 }}>Chargement…</div>;
  }
  if (allowed === false) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Accès refusé</h1>
        <p>Tu n&apos;es pas administrateur. <Link href="/admin">Retour</Link></p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <aside style={{ width: 240, borderRight: "1px solid #E5E7EB", padding: 16, background: "#F9FAFB" }}>
        <h2 style={{ margin: 0, fontSize: 14, color: "#6B7280", textTransform: "uppercase" }}>Folders</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: "12px 0" }}>
          {folderList.length === 0 && <li style={{ color: "#9CA3AF" }}>Aucun message.</li>}
          {folderList.map(([slug, count]) => (
            <li key={slug}>
              <button
                onClick={() => setFolder(slug)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  background: folder === slug ? "#4F46E5" : "transparent",
                  color: folder === slug ? "#FFFFFF" : "#111827",
                  fontWeight: folder === slug ? 600 : 400,
                }}
              >
                <span>{slug}</span>
                <span style={{ float: "right", color: folder === slug ? "#E0E7FF" : "#6B7280" }}>{count}</span>
              </button>
            </li>
          ))}
        </ul>
        <h3 style={{ margin: "16px 0 8px", fontSize: 12, color: "#6B7280", textTransform: "uppercase" }}>Statut</h3>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ width: "100%", padding: 6, borderRadius: 6, border: "1px solid #D1D5DB" }}
        >
          <option value="">Tous</option>
          {Object.entries(STATUS_LABEL).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <Link
          href="/admin"
          style={{ display: "block", marginTop: 24, fontSize: 13, color: "#4F46E5", textDecoration: "none" }}
        >
          ← Retour /admin
        </Link>
      </aside>

      <main style={{ flex: 1, display: "flex", minWidth: 0 }}>
        <section style={{ flex: 1, borderRight: "1px solid #E5E7EB", overflow: "auto", maxHeight: "100vh" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #E5E7EB", display: "flex", gap: 8, alignItems: "center", background: "#FFFFFF", position: "sticky", top: 0 }}>
            <h1 style={{ margin: 0, fontSize: 18 }}>Messages — {folder}</h1>
            <span style={{ color: "#6B7280" }}>{messages.length}</span>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <button
                onClick={() => patchSelected({ draft_status: "approved" })}
                disabled={busy || selected.size === 0}
                style={{
                  padding: "6px 12px",
                  background: selected.size === 0 ? "#D1D5DB" : "#10B981",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 6,
                  cursor: selected.size === 0 ? "not-allowed" : "pointer",
                }}
              >
                Approuver ({selected.size})
              </button>
              <button
                onClick={() => patchSelected({ draft_status: "ignored" })}
                disabled={busy || selected.size === 0}
                style={{
                  padding: "6px 12px",
                  background: selected.size === 0 ? "#D1D5DB" : "#EF4444",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 6,
                  cursor: selected.size === 0 ? "not-allowed" : "pointer",
                }}
              >
                Ignorer
              </button>
              <button onClick={load} disabled={busy} style={{ padding: "6px 12px", background: "#4F46E5", color: "#FFFFFF", border: "none", borderRadius: 6, cursor: "pointer" }}>
                Refresh
              </button>
            </div>
          </div>
          {msg && <div style={{ padding: "8px 20px", background: "#FEF3C7", color: "#92400E" }}>{msg}</div>}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {messages.map((m) => (
              <li
                key={m.id}
                style={{
                  borderBottom: "1px solid #F3F4F6",
                  padding: "12px 20px",
                  background: active?.id === m.id ? "#EEF2FF" : "transparent",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  cursor: "pointer",
                }}
                onClick={() => open(m)}
              >
                <input
                  type="checkbox"
                  checked={selected.has(m.id)}
                  onChange={() => toggle(m.id)}
                  onClick={(e) => e.stopPropagation()}
                  style={{ marginTop: 4 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <strong style={{ fontSize: 14 }}>{m.name ?? m.email ?? "(anonyme)"}</strong>
                    {m.company && <span style={{ color: "#6B7280", fontSize: 13 }}>· {m.company}</span>}
                    <span
                      style={{
                        marginLeft: "auto",
                        padding: "2px 8px",
                        borderRadius: 12,
                        fontSize: 11,
                        background: STATUS_COLOR[m.draft_status ?? "pending"] ?? "#9CA3AF",
                        color: "#FFFFFF",
                      }}
                    >
                      {STATUS_LABEL[m.draft_status ?? "pending"] ?? m.draft_status}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "#374151", marginTop: 2 }}>{m.subject ?? "(sans objet)"}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>
                    {new Date(m.received_at).toLocaleString("fr-FR")} · {m.type ?? "contact"}
                    {m.ai_classification && <span> · {m.ai_classification}</span>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ width: 480, padding: 20, overflow: "auto", maxHeight: "100vh" }}>
          {!active && <div style={{ color: "#9CA3AF" }}>Sélectionne un message pour voir le détail + brouillon.</div>}
          {active && (
            <>
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ margin: 0, fontSize: 16 }}>{active.subject ?? "(sans objet)"}</h2>
                <div style={{ color: "#6B7280", fontSize: 13, marginTop: 4 }}>
                  De: <strong>{active.name ?? "(anonyme)"}</strong> &lt;{active.email ?? "?"}&gt;
                  {active.company && <> · {active.company}</>}
                </div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>
                  Reçu: {new Date(active.received_at).toLocaleString("fr-FR")}
                </div>
              </div>

              <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontSize: 12, color: "#6B7280", textTransform: "uppercase" }}>Message original</h3>
                <p style={{ whiteSpace: "pre-wrap", fontSize: 14, marginTop: 8, color: "#111827" }}>{active.message ?? "(vide)"}</p>
              </div>

              <div>
                <h3 style={{ margin: "0 0 8px", fontSize: 12, color: "#6B7280", textTransform: "uppercase" }}>
                  Brouillon AI {active.ai_classification && <>· {active.ai_classification}</>}
                  {typeof active.ai_confidence === "number" && <> ({Math.round(active.ai_confidence * 100)}%)</>}
                </h3>
                <textarea
                  value={draftEdit}
                  onChange={(e) => setDraftEdit(e.target.value)}
                  rows={10}
                  style={{ width: "100%", padding: 10, border: "1px solid #D1D5DB", borderRadius: 6, fontFamily: "inherit", fontSize: 14 }}
                  placeholder="Aucun brouillon généré. Tape ta réponse ici."
                />
                <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  <button
                    onClick={() => patchActive({ ai_draft: draftEdit, draft_status: "draft_ready" })}
                    disabled={busy}
                    style={{ padding: "8px 16px", background: "#4F46E5", color: "#FFFFFF", border: "none", borderRadius: 6, cursor: "pointer" }}
                  >
                    Sauver brouillon
                  </button>
                  <button
                    onClick={() => patchActive({ ai_draft: draftEdit, draft_status: "approved" })}
                    disabled={busy}
                    style={{ padding: "8px 16px", background: "#10B981", color: "#FFFFFF", border: "none", borderRadius: 6, cursor: "pointer" }}
                  >
                    Approuver
                  </button>
                  <button
                    onClick={() => patchActive({ draft_status: "ignored" })}
                    disabled={busy}
                    style={{ padding: "8px 16px", background: "#EF4444", color: "#FFFFFF", border: "none", borderRadius: 6, cursor: "pointer" }}
                  >
                    Ignorer
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

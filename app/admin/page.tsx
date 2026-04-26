"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Admin = { email: string; is_active: boolean; granted_by: string | null; granted_at: string };

const TIERS = [
  { slug: "free", label: "Free (no access)", desc: "Logged in but no subscription — sees /offres only." },
  { slug: "starter", label: "Starter", desc: "Entry tier — basic dashboard, limited feature usage." },
  { slug: "pro", label: "Pro", desc: "Mid tier — full feature set, no scale limits." },
  { slug: "scale", label: "Scale", desc: "Top tier — advanced features + priority support." },
];

export default function AdminPage() {
  const router = useRouter();
  const [me, setMe] = useState<{ email: string } | null>(null);
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    (async () => {
      const r = await fetch("/api/auth/me", { cache: "no-store" });
      if (!r.ok) {
        router.replace("/auth/login?redirect=/admin");
        return;
      }
      const d = await r.json();
      setMe(d.user);
      const c = await fetch("/api/admin/check", { cache: "no-store" });
      const cj = c.ok ? await c.json() : { is_admin: false };
      setAllowed(Boolean(cj.is_admin));
      if (cj.is_admin) await refreshAdmins();
    })();
  }, [router]);

  async function refreshAdmins() {
    const r = await fetch("/api/admin/admins", { cache: "no-store" });
    if (r.ok) {
      const d = await r.json();
      setAdmins(d.admins ?? []);
    }
  }

  async function impersonate(tier: string) {
    setBusy(true); setMsg("");
    const r = await fetch("/api/admin/impersonate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tier }),
    });
    setBusy(false);
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      setMsg(`Erreur: ${e.error ?? r.status}`);
      return;
    }
    setMsg(`Tier appliqué: ${tier}. Redirection…`);
    setTimeout(() => router.push(tier === "free" ? "/offres" : "/dashboard"), 600);
  }

  async function addAdmin() {
    if (!newEmail.trim()) return;
    setBusy(true); setMsg("");
    const r = await fetch("/api/admin/admins", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: newEmail.trim() }),
    });
    setBusy(false);
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      setMsg(`Erreur: ${e.error ?? r.status}`);
      return;
    }
    setNewEmail("");
    setMsg("Admin ajouté.");
    await refreshAdmins();
  }

  async function toggleAdmin(email: string, active: boolean) {
    setBusy(true); setMsg("");
    const r = await fetch("/api/admin/admins", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, is_active: active }),
    });
    setBusy(false);
    if (!r.ok) {
      const e = await r.json().catch(() => ({}));
      setMsg(`Erreur: ${e.error ?? r.status}`);
      return;
    }
    await refreshAdmins();
  }

  if (allowed === null) return <main style={{ padding: 32 }}>Chargement…</main>;
  if (!allowed) return (
    <main style={{ padding: 32, maxWidth: 720, margin: "0 auto" }}>
      <h1>Accès refusé</h1>
      <p>Cette page est réservée aux administrateurs. Connecté en tant que <strong>{me?.email}</strong>.</p>
      <Link href="/" style={{ color: "#7C3AED" }}>← Retour à l'accueil</Link>
    </main>
  );

  return (
    <main style={{ padding: "32px 16px", maxWidth: 960, margin: "0 auto", color: "#F8FAFC" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>Admin</h1>
      <p style={{ opacity: 0.7, marginBottom: 24 }}>Connecté : <strong>{me?.email}</strong></p>

      {msg ? (
        <div style={{ padding: 12, marginBottom: 16, background: "rgba(124,58,237,.12)", border: "1px solid rgba(124,58,237,.4)", borderRadius: 8 }}>
          {msg}
        </div>
      ) : null}

      {/* Tier impersonation */}
      <section style={{ marginBottom: 32, padding: 20, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Tester un parcours utilisateur</h2>
        <p style={{ opacity: 0.7, marginBottom: 16, fontSize: 14 }}>Applique un statut d'offre à votre compte pour tester le parcours correspondant. Vous serez redirigé vers le dashboard du service (ou /offres si Free).</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {TIERS.map((t) => (
            <button
              key={t.slug}
              onClick={() => impersonate(t.slug)}
              disabled={busy}
              style={{
                padding: "14px 16px",
                background: "#7C3AED",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 8,
                cursor: busy ? "not-allowed" : "pointer",
                opacity: busy ? 0.5 : 1,
                textAlign: "left",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{t.label}</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>{t.desc}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Manage admins */}
      <section style={{ padding: 20, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Gérer les administrateurs</h2>
        <p style={{ opacity: 0.7, marginBottom: 16, fontSize: 14 }}>Ajoutez un email — la personne devient admin dès qu'elle se connecte avec cet email. Décochez la case pour révoquer l'accès.</p>

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="email@exemple.com"
            style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid rgba(255,255,255,.15)", background: "rgba(0,0,0,.25)", color: "#F8FAFC" }}
          />
          <button
            onClick={addAdmin}
            disabled={busy || !newEmail.trim()}
            style={{ padding: "10px 16px", background: "#10B981", color: "#FFFFFF", border: "none", borderRadius: 6, cursor: "pointer", opacity: (busy || !newEmail.trim()) ? 0.5 : 1 }}
          >
            Ajouter
          </button>
        </div>

        <div style={{ overflow: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                <th style={{ textAlign: "left", padding: "10px 8px", fontSize: 13, opacity: 0.7 }}>Actif</th>
                <th style={{ textAlign: "left", padding: "10px 8px", fontSize: 13, opacity: 0.7 }}>Email</th>
                <th style={{ textAlign: "left", padding: "10px 8px", fontSize: 13, opacity: 0.7 }}>Octroyé par</th>
                <th style={{ textAlign: "left", padding: "10px 8px", fontSize: 13, opacity: 0.7 }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((a) => (
                <tr key={a.email} style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                  <td style={{ padding: "10px 8px" }}>
                    <input
                      type="checkbox"
                      checked={a.is_active}
                      onChange={(e) => toggleAdmin(a.email, e.target.checked)}
                      disabled={busy || a.email === "mehdi.sakalypr@gmail.com"}
                    />
                  </td>
                  <td style={{ padding: "10px 8px" }}>
                    {a.email}
                    {a.email === "mehdi.sakalypr@gmail.com" ? (
                      <span style={{ marginLeft: 8, fontSize: 11, padding: "2px 6px", background: "rgba(255,200,0,.15)", color: "#FACC15", borderRadius: 4 }}>founder</span>
                    ) : null}
                  </td>
                  <td style={{ padding: "10px 8px", opacity: 0.7, fontSize: 13 }}>{a.granted_by ?? "—"}</td>
                  <td style={{ padding: "10px 8px", opacity: 0.7, fontSize: 13 }}>{new Date(a.granted_at).toLocaleString("fr-FR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

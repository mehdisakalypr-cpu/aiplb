"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setErr(d?.error === "email_required" ? "Email invalide." : "Erreur d'envoi.");
        return;
      }
      setSent(true);
    } catch {
      setErr("Erreur r\u00e9seau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-semibold text-xl mb-8">
          <span style={{ color: "#10B981" }}>IP Licensing</span> Bot
        </Link>

        <div className="rounded-xl border border-[var(--border)] p-6">
          <h1 className="text-xl font-semibold">Mot de passe oubli\u00e9</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Recevez un lien de connexion par email. Une fois connect\u00e9, vous
            pourrez modifier votre mot de passe depuis votre espace.
          </p>

          {sent ? (
            <div className="mt-6 rounded-md border p-4 text-sm" style={{ borderColor: "#10B981", background: "rgba(16,185,129,0.1)" }}>
              Si <strong>{email}</strong> est associ\u00e9 \u00e0 un compte, un lien vient
              de vous \u00eatre envoy\u00e9. V\u00e9rifiez votre bo\u00eete mail (et les spams). Le
              lien expire dans 30 minutes.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
              />
              {err && <p className="text-sm text-red-400">{err}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                style={{ background: "#10B981" }}
              >
                {loading ? "Envoi\u2026" : "Recevoir le lien"}
              </button>
            </form>
          )}

          <p className="mt-5 text-center text-sm text-[var(--muted)]">
            <Link href="/auth/login" style={{ color: "#10B981" }}>
              \u2190 Retour \u00e0 la connexion
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

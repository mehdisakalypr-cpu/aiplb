"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (password.length < 8) {
      setErr("Mot de passe trop court (8 caractères minimum).");
      return;
    }
    if (password !== confirm) {
      setErr("Les deux mots de passe ne correspondent pas.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/set-password-via-claim", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data?.error === "claim_missing_or_expired") {
          setErr(
            "Lien expiré ou invalide. Recommencez la procédure depuis « Mot de passe oublié ».",
          );
        } else if (data?.error === "password_too_short") {
          setErr("Mot de passe trop court (8 caractères minimum).");
        } else {
          setErr("Erreur serveur. Réessayez dans un instant.");
        }
        return;
      }
      router.push(data?.redirect || "/mon-compte");
    } catch {
      setErr("Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-semibold text-xl mb-8">
          IP Licensing Bot
        </Link>

        <div className="rounded-xl border border-[var(--border)] p-6">
          <h1 className="text-xl font-semibold">Définir un nouveau mot de passe</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Choisissez un nouveau mot de passe pour votre compte. Vous serez
            connecté automatiquement après validation.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
            <label className="grid gap-1">
              <span className="text-xs text-[var(--muted)]">Nouveau mot de passe</span>
              <input
                type="password"
                required
                autoComplete="new-password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:border-violet-500"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-xs text-[var(--muted)]">Confirmer le mot de passe</span>
              <input
                type="password"
                required
                autoComplete="new-password"
                minLength={8}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:border-violet-500"
              />
            </label>

            {err && (
              <div className="rounded-md border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">
                {err}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{ background: "#7C3AED", color: "#ffffff" }}
              className="rounded-md px-4 py-2 font-medium disabled:opacity-50"
            >
              {loading ? "Enregistrement…" : "Définir le mot de passe"}
            </button>
          </form>

          <div className="mt-4 text-xs text-[var(--muted)]">
            <Link href="/auth/login" className="underline">
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

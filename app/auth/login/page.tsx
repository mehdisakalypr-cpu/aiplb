"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/mon-compte";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErr(
          data?.error === "invalid_credentials"
            ? "Email ou mot de passe incorrect."
            : data?.error === "email_and_password_required"
            ? "Email et mot de passe requis."
            : "Erreur de connexion.",
        );
        return;
      }
      router.push(data?.redirect || redirectTo);
      router.refresh();
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
          <span style={{ color: "#10B981" }}>IP Licensing</span> Bot
        </Link>

        <div className="rounded-xl border border-[var(--border)] p-6">
          <h1 className="text-xl font-semibold">Se connecter</h1>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
              style={{ outlineColor: "#10B981" }}
            />
            <input
              type="password"
              required
              autoComplete="current-password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
              style={{ outlineColor: "#10B981" }}
            />

            {err && <p className="text-sm text-red-400">{err}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
              style={{ background: "#10B981" }}
            >
              {loading ? "Connexion\u2026" : "Se connecter"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs">
            <Link
              href="/auth/forgot-password"
              className="text-[var(--muted)] underline-offset-2 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </p>

          <p className="mt-5 text-center text-sm text-[var(--muted)]">
            Pas encore de compte ?{" "}
            <Link href="/auth/signup" style={{ color: "#10B981" }}>
              S&apos;inscrire
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cgu, setCgu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cgu) {
      setErr("Veuillez accepter les conditions d'utilisation.");
      return;
    }
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErr(
          data?.error === "account_exists"
            ? "Un compte existe d\u00e9j\u00e0 avec cet email. Connectez-vous."
            : data?.error === "password_too_short"
            ? "Le mot de passe doit faire au moins 8 caract\u00e8res."
            : "Erreur lors de l'inscription.",
        );
        if (data?.error === "account_exists") {
          setTimeout(() => router.push("/auth/login"), 1500);
        }
        return;
      }
      router.push(data?.redirect || "/mon-compte");
      router.refresh();
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
          <h1 className="text-xl font-semibold">Cr\u00e9er un compte</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Commencez \u00e0 monitorer vos licences IP automatiquement.
          </p>

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
            <input
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="Mot de passe (min 8 caract\u00e8res)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
            />
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={cgu}
                onChange={(e) => setCgu(e.target.checked)}
                className="mt-0.5"
              />
              <span className="text-xs text-[var(--muted)] leading-relaxed">
                J&apos;accepte les{" "}
                <Link href="/legal/cgu" style={{ color: "#10B981" }} className="underline">
                  Conditions G\u00e9n\u00e9rales d&apos;Utilisation
                </Link>{" "}
                et la{" "}
                <Link href="/legal/privacy" style={{ color: "#10B981" }} className="underline">
                  Politique de confidentialit\u00e9
                </Link>
              </span>
            </label>

            {err && <p className="text-sm text-red-400">{err}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
              style={{ background: "#10B981" }}
            >
              {loading ? "Cr\u00e9ation\u2026" : "Cr\u00e9er mon compte"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-[var(--muted)]">
            D\u00e9j\u00e0 un compte ?{" "}
            <Link href="/auth/login" style={{ color: "#10B981" }}>
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

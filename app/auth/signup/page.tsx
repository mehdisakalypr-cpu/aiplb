"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabaseBrowserAuth } from "@/lib/supabase-browser";

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
      const sb = supabaseBrowserAuth();
      const { error } = await sb.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback?next=/mon-compte`,
        },
      });
      if (error) throw error;
      router.push("/auth/check-email");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erreur lors de l'inscription";
      setErr(msg);
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
          <h1 className="text-xl font-semibold">Créer un compte</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Commencez à monitorer vos licences IP automatiquement.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              type="email"
              required
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
            />
            <input
              type="password"
              required
              minLength={8}
              placeholder="Mot de passe (min 8 caractères)"
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
                  Conditions Générales d&apos;Utilisation
                </Link>{" "}
                et la{" "}
                <Link href="/legal/privacy" style={{ color: "#10B981" }} className="underline">
                  Politique de confidentialité
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
              {loading ? "Création…" : "Créer mon compte"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-[var(--muted)]">
            Déjà un compte ?{" "}
            <Link href="/auth/login" style={{ color: "#10B981" }}>
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

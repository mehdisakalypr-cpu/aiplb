"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { supabaseBrowserAuth } from "@/lib/supabase-browser";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/mon-compte";

  const [mode, setMode] = useState<"password" | "magic">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [magicSent, setMagicSent] = useState(false);

  async function handlePassword(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const sb = supabaseBrowserAuth();
      const { error, data } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (data.session) {
        const secure = location.protocol === "https:" ? "; Secure" : "";
        document.cookie = `sb-access-token=${data.session.access_token}; path=/; max-age=3600; SameSite=Lax${secure}`;
        document.cookie = `sb-refresh-token=${data.session.refresh_token}; path=/; max-age=604800; SameSite=Lax${secure}`;
      }
      router.push(redirectTo);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erreur de connexion";
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }

  async function handleMagic(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const sb = supabaseBrowserAuth();
      const { error } = await sb.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
        },
      });
      if (error) throw error;
      setMagicSent(true);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erreur lors de l'envoi";
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
          <h1 className="text-xl font-semibold">Se connecter</h1>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setMode("password")}
              type="button"
              className="flex-1 rounded-md py-1.5 text-sm font-medium transition"
              style={{
                background: mode === "password" ? "#10B981" : "transparent",
                color: mode === "password" ? "#fff" : "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              Email + mot de passe
            </button>
            <button
              onClick={() => setMode("magic")}
              type="button"
              className="flex-1 rounded-md py-1.5 text-sm font-medium transition"
              style={{
                background: mode === "magic" ? "#10B981" : "transparent",
                color: mode === "magic" ? "#fff" : "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              Lien magique
            </button>
          </div>

          {magicSent ? (
            <div className="mt-6 rounded-md border p-4 text-sm" style={{ borderColor: "#10B981", background: "rgba(16,185,129,0.1)" }}>
              Lien envoyé à <strong>{email}</strong>. Vérifiez votre boite mail.
            </div>
          ) : mode === "password" ? (
            <form onSubmit={handlePassword} className="mt-5 space-y-3">
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
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none"
              />
              {err && <p className="text-sm text-red-400">{err}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                style={{ background: "#10B981" }}
              >
                {loading ? "Connexion…" : "Se connecter"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleMagic} className="mt-5 space-y-3">
              <input
                type="email"
                required
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
                {loading ? "Envoi…" : "Envoyer le lien magique"}
              </button>
            </form>
          )}

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

"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/auth/magic", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send link");
      setSent(true);
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-semibold text-lg mb-8">
          AIPLB
        </Link>
        <div className="rounded-xl border border-[var(--border)] p-6">
          <h1 className="text-xl font-semibold">Sign in</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            We will email you a magic link.
          </p>

          {sent ? (
            <div className="mt-6 rounded-md border border-indigo-500 bg-indigo-500/10 p-4 text-sm">
              Check your inbox at <strong>{email}</strong>.
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-3">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 outline-none focus:border-indigo-500"
              />
              {err && <p className="text-sm text-red-400">{err}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-white text-black px-4 py-2.5 font-medium hover:bg-neutral-200 disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send magic link"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

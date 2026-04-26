"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    (async () => {
      const r = await fetch("/api/auth/me");
      if (!r.ok) {
        router.replace("/auth/login");
        return;
      }
      const c = await fetch("/api/competitors").then((r) => r.json());
      setItems(c.items || []);
      setLoading(false);
    })();
  }, [router]);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setAdding(true);
    try {
      const r = await fetch("/api/competitors", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, url }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Failed");
      setItems((prev) => [data.competitor, ...prev]);
      setName("");
      setUrl("");
    } catch (e: any) {
      alert(e.message);
    } finally {
      setAdding(false);
    }
  }

  if (loading) {
    return <main className="min-h-screen p-10 text-[var(--muted)]">Loading…</main>;
  }

  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Competitors</h1>

        <form
          onSubmit={add}
          className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-3 rounded-lg border border-[var(--border)] p-4"
        >
          <input
            placeholder="Name (e.g. Acme)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:border-indigo-500"
          />
          <input
            placeholder="https://acme.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            type="url"
            className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:border-indigo-500"
          />
          <button
            disabled={adding}
            className="rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-neutral-200 disabled:opacity-50"
          >
            {adding ? "Adding…" : "Add"}
          </button>
        </form>

        <div className="mt-8 rounded-lg border border-[var(--border)] divide-y divide-[var(--border)]">
          {items.length === 0 ? (
            <div className="p-8 text-center text-[var(--muted)]">
              No competitors yet. Add one above.
            </div>
          ) : (
            items.map((c) => (
              <Link
                key={c.id}
                href={`/dashboard/competitors/${c.id}`}
                className="block p-4 hover:bg-neutral-900 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-sm text-[var(--muted)]">{c.url}</div>
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    {c.last_snapshot_at
                      ? `last: ${new Date(c.last_snapshot_at).toLocaleString()}`
                      : "never snapped"}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";

type Snapshot = {
  id: string;
  captured_at: string;
  hash: string;
  bytes: number;
  status: string;
};

type Diff = {
  id: string;
  created_at: string;
  summary: string | null;
  added_chars: number;
  removed_chars: number;
};

type Detail = {
  competitor: { id: string; name: string; url: string; enabled: boolean };
  snapshots: Snapshot[];
  diffs: Diff[];
};

export default function CompetitorDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [data, setData] = useState<Detail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const r = await fetch(`/api/competitors/${id}`);
      if (r.ok) setData(await r.json());
      setLoading(false);
    })();
  }, [id]);

  async function remove() {
    if (!confirm("Delete this competitor and its snapshots?")) return;
    await fetch(`/api/competitors/${id}`, { method: "DELETE" });
    window.location.href = "/dashboard";
  }

  if (loading)
    return <main className="min-h-screen p-10 text-[var(--muted)]">Loading…</main>;
  if (!data)
    return <main className="min-h-screen p-10 text-[var(--muted)]">Not found.</main>;

  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-5 flex justify-between items-center">
          <Link href="/dashboard" className="font-semibold tracking-tight text-lg">
            ← AIPLB
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {data.competitor.name}
            </h1>
            <a
              href={data.competitor.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-indigo-400 hover:underline"
            >
              {data.competitor.url}
            </a>
          </div>
          <button
            onClick={remove}
            className="text-sm text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-medium">Recent diffs</h2>
          <div className="mt-3 rounded-lg border border-[var(--border)] divide-y divide-[var(--border)]">
            {data.diffs.length === 0 ? (
              <div className="p-6 text-center text-[var(--muted)]">No diffs yet.</div>
            ) : (
              data.diffs.map((d) => (
                <div key={d.id} className="p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--muted)]">
                      {new Date(d.created_at).toLocaleString()}
                    </span>
                    <span className="text-xs">
                      <span className="text-emerald-400">+{d.added_chars}</span>{" "}
                      <span className="text-red-400">-{d.removed_chars}</span>
                    </span>
                  </div>
                  {d.summary && (
                    <p className="mt-2 text-sm whitespace-pre-wrap">{d.summary}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium">Snapshots timeline</h2>
          <div className="mt-3 rounded-lg border border-[var(--border)] divide-y divide-[var(--border)]">
            {data.snapshots.length === 0 ? (
              <div className="p-6 text-center text-[var(--muted)]">
                No snapshots yet — daily cron at 04:15 UTC.
              </div>
            ) : (
              data.snapshots.map((s) => (
                <div
                  key={s.id}
                  className="p-3 flex justify-between text-sm"
                >
                  <span>{new Date(s.captured_at).toLocaleString()}</span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {s.hash.slice(0, 12)} · {s.bytes}b · {s.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

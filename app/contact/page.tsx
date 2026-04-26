"use client";

import { useState } from "react";

const REASONS = [
  { value: "sales", label: "Sales — pricing, demo, signup" },
  { value: "support", label: "Support — bug, account, billing" },
  { value: "partnership", label: "Partnership — integrations, reseller" },
  { value: "press", label: "Press — interview, media kit" },
  { value: "other", label: "Other" },
];

const MAX = 1000;

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("sales");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!email.trim() || !message.trim()) {
      setErr("Email and message are required.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, reason, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setDone(true);
    } catch (e: any) {
      setErr(e.message || "Network error");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Get in touch.
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          For most product questions the chat in the bottom-right is faster.
          For sales, partnerships, press or anything that needs a written
          reply, use the form below.
        </p>

        {done ? (
          <div className="mt-10 rounded-xl border border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 p-6">
            <div className="font-semibold">Message received.</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We reply within 24h on business days. A copy was logged for our
              team — no separate confirmation email is sent.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-10 space-y-5">
            <div>
              <label className="text-sm text-[var(--muted)] block mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 outline-none focus:border-[var(--accent-gold)]"
              />
            </div>
            <div>
              <label className="text-sm text-[var(--muted)] block mb-1.5">
                Reason
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 outline-none focus:border-[var(--accent-gold)]"
              >
                {REASONS.map((r) => (
                  <option key={r.value} value={r.value} className="bg-[var(--background)]">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-[var(--muted)] block mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, MAX))}
                rows={6}
                maxLength={MAX}
                placeholder="Tell us what you need…"
                className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 outline-none focus:border-[var(--accent-gold)] resize-none"
              />
              <div className="text-right text-xs text-[var(--muted)] mt-1">
                {message.length} / {MAX}
              </div>
            </div>
            {err && <p className="text-sm text-red-400">{err}</p>}
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-md bg-[var(--accent-gold)] text-black px-4 py-3 font-medium hover:opacity-90 disabled:opacity-50"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
            <p className="text-xs text-[var(--muted)]">
              By submitting you agree to our{" "}
              <a href="/legal/privacy" className="underline">
                privacy policy
              </a>
              . We log your email + message + a hashed IP for spam prevention.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}

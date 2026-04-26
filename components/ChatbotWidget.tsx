"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const LS_SESSION = "aici_chat_session";
const LS_HIST = "aici_chat_history";

function uid() {
  return (
    "s_" +
    Date.now().toString(36) +
    "_" +
    Math.random().toString(36).slice(2, 8)
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Init session from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    let s = window.localStorage.getItem(LS_SESSION);
    if (!s) {
      s = uid();
      window.localStorage.setItem(LS_SESSION, s);
    }
    setSessionId(s);
    try {
      const raw = window.localStorage.getItem(LS_HIST);
      if (raw) setMessages(JSON.parse(raw));
    } catch {}
  }, []);

  // Persist history
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LS_HIST, JSON.stringify(messages.slice(-20)));
    } catch {}
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function send(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || sending || !sessionId) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setSending(true);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sessionId, message: text, history: next.slice(-10) }),
      });
      const data = await res.json();
      const reply: string =
        data.reply ||
        "Sorry, I had trouble answering. Try /contact for a human reply.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Network error. Please reach us via /contact and we'll get back to you.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 h-13 w-13 grid place-items-center rounded-full bg-[var(--accent-gold,#C9A84C)] text-black shadow-lg hover:scale-105 transition"
        style={{ height: 52, width: 52 }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm rounded-xl border border-[var(--border)] bg-[#0a0a0a] shadow-2xl flex flex-col overflow-hidden"
          style={{ height: 520, maxHeight: "70vh" }}
        >
          <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">AIPLB assistant</div>
              <div className="text-xs text-[var(--muted)]">
                Powered by Claude · ask about pricing, features, setup
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[var(--muted)] hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3 space-y-3 text-sm"
          >
            {messages.length === 0 && (
              <div className="text-[var(--muted)] text-sm">
                Hi! I can answer questions about AIPLB's services, pricing,
                onboarding, or integrations. What would you like to know?
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 px-3 py-2"
                    : "mr-8 rounded-lg bg-neutral-900 border border-[var(--border)] px-3 py-2 whitespace-pre-wrap"
                }
              >
                {m.content}
              </div>
            ))}
            {sending && (
              <div className="mr-8 rounded-lg bg-neutral-900 border border-[var(--border)] px-3 py-2 text-[var(--muted)]">
                Thinking…
              </div>
            )}
          </div>

          <form
            onSubmit={send}
            className="p-3 border-t border-[var(--border)] flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--accent-gold,#C9A84C)]"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="rounded-md bg-[var(--accent-gold,#C9A84C)] text-black px-3 py-2 text-sm font-medium disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const LS_SESSION = "aiplb_chat_session";
const LS_HIST = "aiplb_chat_history";

// UI strings in 6 supported languages. Detected from navigator.language at mount.
type Lang = "fr" | "en" | "de" | "es" | "it" | "pt";

const I18N: Record<Lang, {
  header: string; subtitle: string; placeholder: string; send: string;
  empty: string; error: string; networkError: string; close: string; open: string;
}> = {
  fr: {
    header: "Assistant AIPLB",
    subtitle: "Propulsé par Claude · pricing, fonctionnalités, mise en route",
    placeholder: "Posez votre question…",
    send: "Envoyer",
    empty: "Bonjour ! Je peux répondre à vos questions sur les services AIPLB, les tarifs, l'onboarding ou les intégrations. Que souhaitez-vous savoir ?",
    error: "Désolé, je n'ai pas pu répondre. Essayez la page /contact.",
    networkError: "Erreur réseau. Contactez-nous via /contact.",
    close: "Fermer", open: "Ouvrir le chat",
  },
  en: {
    header: "AIPLB assistant",
    subtitle: "Powered by Claude · pricing, features, setup",
    placeholder: "Ask anything…",
    send: "Send",
    empty: "Hi! I can answer questions about AIPLB's services, pricing, onboarding, or integrations. What would you like to know?",
    error: "Sorry, I had trouble answering. Try /contact for a human reply.",
    networkError: "Network error. Please reach us via /contact.",
    close: "Close", open: "Open chat",
  },
  de: {
    header: "AIPLB Assistent",
    subtitle: "Powered by Claude · Preise, Funktionen, Einrichtung",
    placeholder: "Frage stellen…",
    send: "Senden",
    empty: "Hallo! Ich beantworte Fragen zu AIPLB-Diensten, Preisen, Onboarding oder Integrationen. Was möchten Sie wissen?",
    error: "Entschuldigung, ich konnte nicht antworten. Versuchen Sie /contact.",
    networkError: "Netzwerkfehler. Kontaktieren Sie uns über /contact.",
    close: "Schließen", open: "Chat öffnen",
  },
  es: {
    header: "Asistente AIPLB",
    subtitle: "Powered by Claude · precios, funciones, configuración",
    placeholder: "Pregunte lo que sea…",
    send: "Enviar",
    empty: "¡Hola! Puedo responder preguntas sobre los servicios de AIPLB, precios, onboarding o integraciones. ¿Qué quiere saber?",
    error: "Lo siento, no pude responder. Pruebe /contact.",
    networkError: "Error de red. Contáctenos en /contact.",
    close: "Cerrar", open: "Abrir chat",
  },
  it: {
    header: "Assistente AIPLB",
    subtitle: "Powered by Claude · prezzi, funzionalità, setup",
    placeholder: "Fai una domanda…",
    send: "Invia",
    empty: "Ciao! Posso rispondere a domande sui servizi AIPLB, prezzi, onboarding o integrazioni. Cosa vuoi sapere?",
    error: "Spiacente, non sono riuscito a rispondere. Prova /contact.",
    networkError: "Errore di rete. Contattaci via /contact.",
    close: "Chiudi", open: "Apri chat",
  },
  pt: {
    header: "Assistente AIPLB",
    subtitle: "Powered by Claude · preços, funcionalidades, configuração",
    placeholder: "Faça uma pergunta…",
    send: "Enviar",
    empty: "Olá! Posso responder perguntas sobre serviços AIPLB, preços, onboarding ou integrações. O que quer saber?",
    error: "Desculpe, não consegui responder. Tente /contact.",
    networkError: "Erro de rede. Contate-nos em /contact.",
    close: "Fechar", open: "Abrir chat",
  },
};

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const raw = (window.navigator.language || "en").toLowerCase().split("-")[0];
  if (raw === "fr" || raw === "de" || raw === "es" || raw === "it" || raw === "pt") return raw;
  return "en";
}

function uid() {
  return "s_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setLang(detectLang());
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LS_HIST, JSON.stringify(messages.slice(-20)));
    } catch {}
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const t = I18N[lang];

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
        body: JSON.stringify({ sessionId, message: text, history: next.slice(-10), lang }),
      });
      const data = await res.json();
      const reply: string = data.reply || t.error;
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: t.networkError }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        aria-label={open ? t.close : t.open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 grid place-items-center rounded-full bg-[var(--accent-gold,#C9A84C)] text-black shadow-lg hover:scale-105 transition"
        style={{ height: 52, width: 52 }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6l-12 12" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm rounded-xl border border-[var(--border)] bg-[#0a0a0a] shadow-2xl flex flex-col overflow-hidden"
          style={{ height: 520, maxHeight: "70vh" }}
        >
          <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">{t.header}</div>
              <div className="text-xs text-[var(--muted)]">{t.subtitle}</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-[var(--muted)] hover:text-white" aria-label={t.close}>×</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.length === 0 && (
              <div className="text-[var(--muted)] text-sm">{t.empty}</div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={
                  m.role === "user"
                    ? "max-w-[85%] rounded-2xl rounded-br-md px-3 py-2 bg-[var(--accent-gold,#C9A84C)] text-black"
                    : "max-w-[85%] rounded-2xl rounded-bl-md px-3 py-2 bg-[#1a1a1a] text-white"
                }>
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md px-3 py-2 bg-[#1a1a1a] text-[var(--muted)] text-sm">…</div>
              </div>
            )}
          </div>

          <form onSubmit={send} className="border-t border-[var(--border)] p-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 rounded-md bg-[#1a1a1a] border border-[var(--border)] px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)]"
              disabled={sending}
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="rounded-md bg-[var(--accent-gold,#C9A84C)] text-black px-4 py-2 text-sm font-medium disabled:opacity-50"
            >
              {t.send}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

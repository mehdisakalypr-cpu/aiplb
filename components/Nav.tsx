"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Me = { id: string; email: string } | null;

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [me, setMe] = useState<Me>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.resolve({ user: null })))
      .then((d) => {
        if (!cancelled) {
          setMe(d.user || null);
          setLoading(false);
        }
      })
      .catch(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setMe(null);
    window.location.href = "/";
  }

  const initial =
    me?.email?.trim()?.[0]?.toUpperCase() ?? "?";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-[var(--accent-gold,#C9A84C)]">AI</span>CI
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {LINKS.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "text-white"
                    : "text-[var(--muted)] hover:text-white transition"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3 text-sm">
          {loading ? (
            <div className="h-8 w-20 rounded bg-neutral-900 animate-pulse" />
          ) : me ? (
            <>
              <Link
                href="/dashboard"
                className="rounded-md border border-[var(--border)] px-3 py-1.5 hover:bg-neutral-900"
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-2">
                <div
                  title={me.email}
                  className="h-8 w-8 rounded-full bg-[var(--accent-gold,#C9A84C)] text-black grid place-items-center font-medium"
                >
                  {initial}
                </div>
                <button
                  onClick={logout}
                  className="text-[var(--muted)] hover:text-white"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-[var(--muted)] hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/pricing"
                className="rounded-md bg-white text-black px-3 py-1.5 font-medium hover:bg-neutral-200"
              >
                Start free
              </Link>
            </>
          )}
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 hover:bg-neutral-900"
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] px-6 py-4 space-y-3 text-sm bg-[var(--background)]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-1 text-[var(--muted)] hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[var(--border)] flex gap-3">
            {me ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-[var(--border)] px-3 py-1.5"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-[var(--muted)] hover:text-white"
                >
                  Logout ({me.email})
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-[var(--border)] px-3 py-1.5"
                >
                  Login
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-white text-black px-3 py-1.5 font-medium"
                >
                  Start free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

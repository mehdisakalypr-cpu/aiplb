"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TierPill from "./TierPill";

type Me = { id: string; email: string; plan?: string; is_admin?: boolean } | null;

const PUBLIC_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/offres", label: "Offres" },
  { href: "/demo", label: "Démo" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const LOGGED_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [me, setMe] = useState<Me>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.resolve({ user: null })))
      .then((d) => {
        if (!cancelled) {
          setMe(d.user ? { ...d.user, plan: d.plan ?? "free", is_admin: !!d.is_admin } : null);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setMe(null);
    setDropOpen(false);
    router.push("/");
    router.refresh();
  }

  const initial = me?.email?.trim()?.[0]?.toUpperCase() ?? "?";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span style={{ color: "#10B981" }}>IP Licensing</span> Bot
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {PUBLIC_LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
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
          {me ? LOGGED_LINKS.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "text-white font-semibold"
                    : "text-[#A78BFA] hover:text-white transition font-semibold"
                }
              >
                {l.label}
              </Link>
            );
          }) : null}
          {me?.is_admin ? (
            <Link href="/admin" className={pathname?.startsWith("/admin") ? "text-white font-semibold" : "text-[#FACC15] hover:text-white transition font-semibold"}>
              Admin
            </Link>
          ) : null}
        </nav>

        <div className="hidden md:flex items-center gap-3 text-sm">
          {loading ? (
            <div className="h-8 w-24 rounded bg-neutral-900 animate-pulse" />
          ) : me ? (
            <div className="relative flex items-center gap-2">
              <TierPill plan={me.plan} />
              <button
                onClick={() => setDropOpen((v) => !v)}
                className="flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-1.5 hover:bg-neutral-900"
                type="button"
              >
                <span
                  className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: "#10B981" }}
                >
                  {initial}
                </span>
                <span className="max-w-[120px] truncate">{me.email}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </button>
              {dropOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 rounded-md border border-[var(--border)] bg-[var(--background)] shadow-xl">
                  <Link
                    href="/dashboard"
                    onClick={() => setDropOpen(false)}
                    className="block px-4 py-2.5 text-sm hover:bg-neutral-900 font-medium"
                  >
                    📊 Dashboard
                  </Link>
                                    <Link
                    href="/mon-compte"
                    onClick={() => setDropOpen(false)}
                    className="block px-4 py-2.5 text-sm hover:bg-neutral-900"
                  >
                    Mon compte
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[var(--muted)] hover:text-white hover:bg-neutral-900"
                    type="button"
                  >
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-md border border-[var(--border)] px-3 py-1.5 text-[var(--muted)] hover:text-white hover:bg-neutral-900 transition"
              >
                Se connecter
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-md px-3 py-1.5 font-medium text-white"
                style={{ background: "#10B981" }}
              >
                S&apos;inscrire
              </Link>
            </>
          )}
        </div>

        {me ? <span className="md:hidden mr-2"><TierPill plan={me.plan} /></span> : null}
        <button
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 hover:bg-neutral-900"
          type="button"
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

      {open && (
        <div className="md:hidden border-t border-[var(--border)] px-6 py-4 space-y-3 text-sm bg-[var(--background)]">
          {me ? (
            <div className="pb-2 border-b border-[var(--border)] flex items-center justify-between">
              <span className="text-[var(--muted)] text-xs">Statut d&apos;offre</span>
              <TierPill plan={me.plan} />
            </div>
          ) : null}
          {PUBLIC_LINKS.map((l) => (
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
                  href="/mon-compte"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-[var(--border)] px-3 py-1.5"
                >
                  Mon compte
                </Link>
                <button
                  onClick={logout}
                  className="text-[var(--muted)] hover:text-white"
                  type="button"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-[var(--border)] px-3 py-1.5"
                >
                  Se connecter
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-1.5 font-medium text-white"
                  style={{ background: "#10B981" }}
                >
                  S&apos;inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

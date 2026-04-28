import Link from "next/link";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/demo", label: "Live demo" },
      { href: "/dashboard", label: "Dashboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      {
        href: "mailto:hello@aiplb.app?subject=AIPLB%20support",
        label: "Email support",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/cgu", label: "Terms of use (CGU)" },
      { href: "/legal/cgv", label: "Sales terms (CGV)" },
      { href: "/legal/mentions-legales", label: "Legal notice" },
      { href: "/legal/privacy", label: "Privacy & cookies" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "About AIPLB" },
      {
        href: "mailto:partnerships@aiplb.app",
        label: "Partnerships",
      },
      { href: "mailto:press@aiplb.app", label: "Press" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="font-semibold mb-4">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-[var(--muted)] hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row gap-3 justify-between text-xs text-[var(--muted)]">
          <span>
            © {new Date().getFullYear()} AIPLB — Autonomous IP Licensing Bot
            Reporter. Operated by Sanctuary AI Services.
          </span>
          <span>
            Hosted on Vercel · Database on Supabase EU · LLM by Anthropic · <a href="https://hub.gapup.io" target="_blank" rel="noopener" className="hover:text-white transition">All AI tools →</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

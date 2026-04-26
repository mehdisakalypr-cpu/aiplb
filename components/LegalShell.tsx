import type { ReactNode } from "react";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
          Legal
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Last updated: {updated}
        </p>

        <div className="mt-6 rounded-md border border-yellow-500/40 bg-yellow-500/5 p-4 text-sm">
          <strong className="text-yellow-400">Draft v1</strong> — to be
          validated by counsel before commercial launch. Use at your own risk.
        </div>

        <div className="mt-10 space-y-6 leading-relaxed text-[var(--foreground)]/90 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-1 [&_p]:text-[var(--muted)] [&_li]:text-[var(--muted)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_strong]:text-[var(--foreground)] [&_a]:text-[var(--accent-gold)] [&_a]:underline">
          {children}
        </div>
      </article>
    </main>
  );
}

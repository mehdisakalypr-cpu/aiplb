import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth/get-session";
import { supabaseService } from "@/lib/supabase-server";
import ChangePasswordSection from "./ChangePasswordSection";

const PAGE_SIZE = 10;

type Report = {
  id: string;
  title: string;
  product_slug: string;
  created_at: string;
};

async function getReports(
  userId: string,
  page: number
): Promise<{ rows: Report[]; total: number }> {
  try {
    const sb = supabaseService();
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    const { data, count, error } = await sb
      .from("user_reports")
      .select("id,title,product_slug,created_at", { count: "exact" })
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .range(from, to);
    if (error) return { rows: [], total: 0 };
    return { rows: (data ?? []) as Report[], total: count ?? 0 };
  } catch {
    return { rows: [], total: 0 };
  }
}

export default async function MonComptePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; reset?: string }>;
}) {
  const sessionMaybe = await getSession();
  if (!sessionMaybe) redirect("/auth/login?redirect=/mon-compte");
  const session = sessionMaybe!;

  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page ?? "1", 10));
  const reset = sp.reset === "1";
  const { rows: reports, total } = await getReports(session.user.id, page);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const { data: clientRow } = await supabaseService()
    .from("clients")
    .select("password_hash")
    .eq("id", session.user.id)
    .maybeSingle();
  const hasPassword = !!(clientRow && clientRow.password_hash);

  const initial = session.user.email[0]?.toUpperCase() ?? "?";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8 flex items-center gap-4">
        <div
          className="h-12 w-12 rounded-full flex items-center justify-center text-lg font-semibold text-white"
          style={{ background: "#10B981" }}
        >
          {initial}
        </div>
        <div>
          <p className="font-semibold text-lg">{session.user.email}</p>
          <p className="text-sm text-[var(--muted)]">Mon compte</p>
        </div>
        <form action="/auth/logout" method="POST" className="ml-auto">
          <button
            type="submit"
            className="rounded-md border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)] hover:text-white"
          >
            Se d\u00e9connecter
          </button>
        </form>
      </div>

      <div className="rounded-xl border border-[var(--border)] p-5 mb-8">
        <p className="text-xs uppercase tracking-wide text-[var(--muted)] mb-2">Abonnement</p>
        {session.subscription ? (
          <div className="flex items-center gap-3">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
              style={{ background: "#10B981" }}
            >
              Actif \u2014 {session.subscription.plan}
            </span>
            <span className="text-sm text-[var(--muted)]">
              Expire le{" "}
              {new Date(session.subscription.current_period_end).toLocaleDateString("fr-FR")}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--muted)]">Aucun abonnement actif</span>
            <Link
              href="/offres"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-white"
              style={{ background: "#10B981" }}
            >
              Voir les offres
            </Link>
          </div>
        )}
      </div>

      <ChangePasswordSection hasPassword={hasPassword} highlight={reset} />

      <div>
        <h2 className="text-lg font-semibold mb-4">Mes rapports</h2>
        {reports.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">Aucun rapport pour l&apos;instant.</p>
        ) : (
          <>
            <div className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)]">
              {reports.map((r) => (
                <Link
                  key={r.id}
                  href={`/mon-compte/reports/${r.id}`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-neutral-900 transition"
                >
                  <div>
                    <p className="text-sm font-medium">{r.title}</p>
                    <p className="text-xs text-[var(--muted)]">{r.product_slug}</p>
                  </div>
                  <span className="text-xs text-[var(--muted)]">
                    {new Date(r.created_at).toLocaleDateString("fr-FR")}
                  </span>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-4 flex justify-center gap-2 text-sm">
                {page > 1 && (
                  <Link
                    href={`/mon-compte?page=${page - 1}`}
                    className="rounded-md border border-[var(--border)] px-3 py-1.5 hover:bg-neutral-900"
                  >
                    Pr\u00e9c\u00e9dent
                  </Link>
                )}
                <span className="px-3 py-1.5 text-[var(--muted)]">
                  {page} / {totalPages}
                </span>
                {page < totalPages && (
                  <Link
                    href={`/mon-compte?page=${page + 1}`}
                    className="rounded-md border border-[var(--border)] px-3 py-1.5 hover:bg-neutral-900"
                  >
                    Suivant
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

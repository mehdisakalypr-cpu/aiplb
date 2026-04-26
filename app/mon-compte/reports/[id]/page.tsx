import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth/get-session";
import { supabaseService } from "@/lib/supabase-server";

type ReportRow = {
  id: string;
  title: string;
  product_slug: string;
  summary: string | null;
  data: Record<string, unknown> | null;
  created_at: string;
  user_id: string;
};

async function fetchReport(id: string, userId: string): Promise<ReportRow | null> {
  try {
    const sb = supabaseService();
    const { data, error } = await sb
      .from("user_reports")
      .select("id,title,product_slug,summary,data,created_at,user_id")
      .eq("id", id)
      .maybeSingle();
    if (error || !data) return null;
    const row = data as ReportRow;
    if (row.user_id !== userId) return null;
    return row;
  } catch {
    return null;
  }
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/auth/login?redirect=/mon-compte");

  const { id } = await params;
  const report = await fetchReport(id, session.user.id);
  if (!report) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <nav className="mb-6 text-sm text-[var(--muted)]">
        <Link href="/mon-compte" className="hover:text-white">
          Mon compte
        </Link>
        {" / "}
        <span className="text-white">{report.title}</span>
      </nav>

      <h1 className="text-2xl font-semibold mb-1">{report.title}</h1>
      <div className="flex items-center gap-3 mb-6">
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
          style={{ background: "#10B981" }}
        >
          {report.product_slug}
        </span>
        <span className="text-xs text-[var(--muted)]">
          {new Date(report.created_at).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {report.summary && (
        <div className="rounded-xl border border-[var(--border)] p-5 mb-6">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)] mb-2">Résumé</p>
          <p className="text-sm leading-relaxed">{report.summary}</p>
        </div>
      )}

      {report.data && (
        <div className="rounded-xl border border-[var(--border)] p-5">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)] mb-3">Données</p>
          <pre className="text-xs overflow-x-auto whitespace-pre-wrap text-[var(--muted)]">
            {JSON.stringify(report.data, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}

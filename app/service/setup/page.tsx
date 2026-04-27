import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase-server";
import { getTierLimits, isPaidTier } from "@/lib/tier-limits";
import SetupForm from "./SetupForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Configurer mes concurrents — AIPLB",
  description: "Indique les concurrents à surveiller pour démarrer ton rapport hebdo.",
};

export default async function ServiceSetupPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const user = await getSessionUser();
  if (!user) redirect("/auth/login?next=/service/setup");

  const { data: client } = await supabaseService()
    .from("clients")
    .select("plan")
    .eq("id", user.id)
    .maybeSingle();
  const plan = (client?.plan as string | undefined) ?? "free";
  if (!isPaidTier(plan)) redirect("/offres?reason=setup-needs-paid");

  const limits = getTierLimits(plan);
  const justPaid = sp.checkout === "success";

  return (
    <main style={{ minHeight: "100vh", background: "#0F0A1F", color: "#F9FAFB", padding: "48px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {justPaid && (
          <div
            style={{
              padding: "12px 16px",
              background: "rgba(16,185,129,0.15)",
              border: "1px solid #10B981",
              borderRadius: 8,
              color: "#A7F3D0",
              marginBottom: 24,
            }}
          >
            Paiement confirmé. Plan {limits.label} actif. Configure tes concurrents ci-dessous.
          </div>
        )}

        <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Configure tes concurrents</h1>
        <p style={{ color: "#D1D5DB", fontSize: 16, marginBottom: 32 }}>
          Plan <strong style={{ color: "#C4B5FD" }}>{limits.label}</strong> · jusqu&apos;à {limits.items_max} concurrent
          {limits.items_max > 1 ? "s" : ""}. Les rapports démarrent dès que tu as ajouté au moins un concurrent.
        </p>

        <SetupForm maxItems={limits.items_max} />

        <p style={{ color: "#9CA3AF", fontSize: 13, marginTop: 32 }}>
          Tu pourras ajouter, modifier ou retirer des concurrents à tout moment depuis ton{" "}
          <a href="/dashboard" style={{ color: "#A78BFA" }}>tableau de bord</a>.
        </p>
      </div>
    </main>
  );
}

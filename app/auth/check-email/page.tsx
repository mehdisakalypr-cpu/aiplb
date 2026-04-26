import Link from "next/link";

export default function CheckEmailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <Link href="/" className="inline-block font-semibold text-xl mb-8">
          <span style={{ color: "#10B981" }}>IP Licensing</span> Bot
        </Link>
        <div className="rounded-xl border border-[var(--border)] p-8">
          <div
            className="mx-auto mb-4 h-14 w-14 rounded-full flex items-center justify-center text-2xl"
            style={{ background: "rgba(16,185,129,0.15)" }}
          >
            ✉️
          </div>
          <h1 className="text-xl font-semibold">Vérifiez votre email</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Un lien de confirmation vous a été envoyé. Cliquez dessus pour activer votre compte.
          </p>
          <Link
            href="/auth/login"
            className="mt-6 inline-block text-sm"
            style={{ color: "#10B981" }}
          >
            Retour à la connexion
          </Link>
        </div>
      </div>
    </main>
  );
}

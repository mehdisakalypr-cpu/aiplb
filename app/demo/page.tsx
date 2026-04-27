"use client";

import Link from "next/link";

export default function DemoPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#06140E', color: '#FFFFFF' }}>
      <header className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://image.pollinations.ai/prompt/Abstract%20professional%20product%20demo%20visualization%20for%20a%20B2B%20AI%20SaaS%20named%20AIPLB%20%2D%20AI%20Patent%20License%20Bot%2C%20clean%20modern%20gradient%20background%2C%20no%20text%2C%20cinematic?width=1600&height=900&model=flux&nologo=true"
          alt="Visuel illustratif AIPLB"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4 border border-white/20">
            Démo AIPLB
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AIPLB — AI Patent License Bot
          </h1>
          <p className="text-xl text-white/80">
            Voyez en direct ce que vous obtenez en payant.
          </p>
        </div>
      </header>

      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="rounded-xl p-8 md:p-12" style={{ background: '#0008', border: '1px solid #ffffff20' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Démo interactive en finalisation</h2>
              <p className="text-white/70">
                Nous mettons en place une démo entièrement interactive : entrez l&apos;URL de votre site
                ou de votre concurrent, et notre moteur génère le rapport réel devant vos yeux en moins
                d&apos;une minute. Disponible très prochainement.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#10B981' }}>
              Ce que vous obtenez avec un abonnement
            </h3>
            <p className="text-white/85 leading-relaxed">
              Vous obtenez la cartographie des brevets actifs sur votre secteur, les détenteurs ouverts à la licence, et un brouillon de courrier d'approche prêt à envoyer.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#10B981' }}>
              Ce qui rend AIPLB différent
            </h3>
            <ul className="space-y-2 text-white/85">
              <li>• Données réelles et vérifiables — pas de chiffres inventés ni de templates génériques.</li>
              <li>• Génération à la demande, en quelques secondes — jamais d&apos;attente passive.</li>
              <li>• Sources citées et liens vérifiables sur chaque affirmation.</li>
              <li>• Output prêt à utiliser — copy-pastable, exportable PDF, intégrable à votre workflow.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link
            href="/contact?from=demo"
            style={{ background: '#10B981', color: '#FFFFFF' }}
            className="block w-full text-center py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Demander une démo personnalisée
          </Link>
          <Link
            href="/offres"
            className="block w-full text-center py-4 rounded-lg font-semibold text-lg border-2 transition-colors hover:bg-white/5"
            style={{ borderColor: '#10B981', color: '#10B981' }}
          >
            Voir nos offres
          </Link>
        </div>

        <p className="text-center text-white/50 text-sm mt-8">
          Vous voulez être prévenu dès que la démo interactive est en ligne ?{' '}
          <Link href="/contact?from=demo-notify" className="underline" style={{ color: '#10B981' }}>
            Laissez-nous votre email
          </Link>
        </p>
      </section>
    </main>
  );
}

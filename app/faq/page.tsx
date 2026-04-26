"use client";

import Link from "next/link";
export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      

      <header className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white">FAQ</h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-12">
          {/* Produit */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Produit</h2>
            <div className="space-y-4">
              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Comment l'outil détecte-t-il l'utilisation de mon brevet ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  IP Licensing Bot scanne en continu les sites publics, dépôts open source et bases de données techniques. Il repère les extraits de code, mentions ou implémentations correspondant à votre brevet via une analyse sémantique et des empreintes uniques.
                </p>
              </details>

              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Puis-je imposer une licence commerciale à un utilisateur ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Oui. Une fois l'utilisation détectée, l'outil génère automatiquement une lettre de mise en demeure avec une proposition de licence commerciale. Vous validez ou modifiez les termes avant envoi. L'utilisateur peut accepter en un clic.
                </p>
              </details>

              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  L'outil fonctionne-t-il pour les brevets logiciels ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Oui, mais uniquement si votre brevet couvre une fonctionnalité logicielle brevetée (algorithme, architecture, méthode). Les simples idées ou concepts ne sont pas couverts par la détection automatique.
                </p>
              </details>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Pricing</h2>
            <div className="space-y-4">
              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Puis-je changer de formule après souscription ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Oui. Vous pouvez passer à une formule supérieure à tout moment depuis votre tableau de bord. Les frais sont recalculés au prorata. Aucune pénalité n'est appliquée.
                </p>
              </details>

              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Que se passe-t-il si je résilie avant la fin de mon engagement ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Vous pouvez résilier à tout moment depuis votre espace client. Les frais de résiliation anticipée correspondent au solde des mois restants à prix plein, sans engagement futur.
                </p>
              </details>
            </div>
          </section>

          {/* Sécurité & data */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Sécurité & data</h2>
            <div className="space-y-4">
              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Où sont hébergés mes brevets et les données collectées ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Toutes les données sont stockées sur des serveurs européens certifiés ISO 27001, hébergés en France. Les sauvegardes sont chiffrées et répliquées sur deux datacenters distincts.
                </p>
              </details>

              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Puis-je exporter mes données de détection ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Oui. Vous pouvez exporter l'intégralité de vos données de détection au format JSON ou CSV depuis votre tableau de bord. Ces exports sont chiffrés et accessibles pendant 7 jours.
                </p>
              </details>

              <details className="group bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <summary className="font-medium text-white cursor-pointer flex justify-between items-center">
                  Comment l'outil respecte-t-il le RGPD ?
                  <span className="text-gray-400 group-hover:text-primary transition-colors">▼</span>
                </summary>
                <p className="mt-4 text-gray-300">
                  Aucune donnée personnelle n'est collectée sans votre consentement. Les adresses IP des utilisateurs détectés sont anonymisées après 24h. Vous gérez vous-même les contacts avec les contrevenants.
                </p>
              </details>
            </div>
          </section>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-xl font-medium text-white mb-6">Une autre question ?</h2>
        <Link
          href="/contact"
          className="inline-block bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
          aria-label="Poser une question supplémentaire"
        >
          Contactez-nous
        </Link>
      </section>
    </main>
  );
}
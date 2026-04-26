"use client";

export default function CgvPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#06140E', color: '#F8FAFC' }}>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-white">Conditions Générales de Vente</h1>
          <p className="mt-2 text-lg text-gray-300">IP Licensing Bot — Service d’autonomisation des licences IP</p>
        </header>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">Champ d’application</h2>
          <p>
            Les présentes conditions régissent l’accès et l’utilisation du service IP Licensing Bot, ci-après « le Service », proposé par GapUp SAS, situé 12 rue de la République, 75002 Paris, France.
          </p>
          <p>
            Le Service permet de détecter l’utilisation non autorisée de brevets ou droits de propriété intellectuelle sur internet, de générer des courriers de mise en demeure et de proposer des licences commerciales via un agent autonome.
          </p>

          <h2 className="text-2xl font-semibold text-white">Prix</h2>
          <p>
            Le Service est proposé sous forme d’abonnement mensuel ou annuel avec engagement. Les tarifs sont indiqués sur la plateforme et incluent l’accès au logiciel, la surveillance continue et la génération des documents.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mensuel : prix affiché</li>
            <li>12 mois : -15% sur le tarif mensuel</li>
            <li>24 mois : -25% sur le tarif mensuel</li>
            <li>36 mois : -33% sur le tarif mensuel</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">Paiement</h2>
          <p>
            Le paiement s’effectue par carte bancaire via Stripe. Les factures sont émises mensuellement ou annuellement selon l’engagement choisi. Aucun remboursement n’est accordé en cas d’annulation anticipée.
          </p>

          <h2 className="text-2xl font-semibold text-white">Renouvellement</h2>
          <p>
            L’abonnement se renouvelle automatiquement à la date d’échéance pour la même durée, sauf résiliation par l’utilisateur au moins 30 jours avant la fin de la période en cours.
          </p>

          <h2 className="text-2xl font-semibold text-white">Annulation</h2>
          <p>
            L’utilisateur peut résilier son abonnement à tout moment depuis son espace client. La résiliation prend effet à la fin de la période de facturation en cours. Aucune compensation n’est versée en cas de résiliation.
          </p>

          <h2 className="text-2xl font-semibold text-white">Garanties</h2>
          <p>
            GapUp SAS garantit le bon fonctionnement du Service selon les spécifications techniques indiquées. Aucune garantie n’est donnée sur les résultats de détection ou de négociation, ni sur l’absence de faux positifs.
          </p>

          <h2 className="text-2xl font-semibold text-white">Réclamations</h2>
          <p>
            Toute réclamation doit être adressée par email à support@gapup.io. Les litiges seront soumis au droit français et traités par les tribunaux de Paris.
          </p>

          <h2 className="text-2xl font-semibold text-white">Droit applicable</h2>
          <p>
            Les présentes conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.
          </p>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <p>Dernière mise à jour : 2026-04-26</p>
        </footer>
      </article>
    </main>
  );
}
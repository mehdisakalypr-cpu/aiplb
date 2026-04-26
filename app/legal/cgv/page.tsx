"use client";

export default function CgvPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12 text-white/90">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white">Conditions Générales de Vente</h1>
          <p className="mt-4 text-lg text-white/80">
            Autonomous IP licensing agent – IP Licensing Bot
          </p>
        </header>

        <article className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Champ d’application</h2>
            <p>
              Les présentes conditions s’appliquent à l’utilisation du service IP Licensing Bot, agent autonome d’octroi de licences pour les droits de propriété intellectuelle.
            </p>
            <p>
              Le service permet de détecter l’usage de brevets ou autres droits protégés sur le web ouvert, d’adresser des propositions de licence commerciale et de faciliter leur souscription en ligne.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Prix</h2>
            <p>
              Les tarifs sont proposés selon les durées suivantes :
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Mensuel : 99 € HT par mois</li>
              <li>12 mois : 84 € HT par mois (–15%)</li>
              <li>24 mois : 74 € HT par mois (–25%)</li>
              <li>36 mois : 66 € HT par mois (–33%)</li>
            </ul>
            <p className="mt-6">
              Les prix s’entendent pour un utilisateur unique. Des frais supplémentaires peuvent s’appliquer en cas d’ajout de membres ou de licences multiples.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Paiement</h2>
            <p>
              Le paiement s’effectue par carte bancaire via Stripe. Les factures sont émises mensuellement ou annuellement selon la durée choisie.
            </p>
            <p>
              En cas de paiement échoué, le service est suspendu jusqu’à régularisation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Renouvellement</h2>
            <p>
              Les abonnements se renouvellent automatiquement à l’échéance pour la même durée, sauf résiliation notifiée au moins 15 jours avant la fin de la période en cours.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Annulation</h2>
            <p>
              L’annulation peut être effectuée en un clic depuis l’espace client. Le service reste accessible jusqu’à la fin de la période payée.
            </p>
            <p>
              Aucun remboursement n’est effectué pour les jours non utilisés en cas d’annulation anticipée.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Garanties</h2>
            <p>
              Le service est fourni « en l’état ». Nous garantissons l’accès au service 99,5 % du temps, hors maintenance programmée.
            </p>
            <p>
              En cas de dysfonctionnement avéré imputable au service, une compensation sous forme de jours gratuits peut être accordée sur demande.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Réclamations</h2>
            <p>
              Toute réclamation doit être adressée par email à support@aiplb.vercel.app dans un délai de 30 jours suivant l’incident.
            </p>
            <p>
              Nous nous engageons à répondre sous 5 jours ouvrés.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Droit applicable</h2>
            <p>
              Les présentes conditions sont régies par le droit français. Tout litige sera porté devant les tribunaux de Paris.
            </p>
          </section>
        </article>

        <footer className="mt-16 pt-8 border-t border-white/20 text-sm text-white/70">
          Dernière mise à jour : 2026-04-26
        </footer>
      </div>
    </main>
  );
}
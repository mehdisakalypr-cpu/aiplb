"use client";

export default function CguPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      
      <article className="max-w-3xl mx-auto px-4 py-12 text-gray-100 leading-relaxed">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">Conditions Générales de Vente</h1>
          <p className="text-gray-300">Service IP Licensing Bot – Autonomous IP licensing agent</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Objet</h2>
            <p>Ces conditions régissent l’accès et l’usage du service IP Licensing Bot, un agent autonome qui détecte l’utilisation de brevets sur le web et propose des licences commerciales.</p>
            <p>Le service est fourni par la société IP Licensing SAS, enregistrée au RCS de Paris sous le numéro 987654321.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Acceptation des conditions</h2>
            <p>L’utilisation du service vaut acceptation pleine et entière des présentes conditions.</p>
            <p>L’accès est réservé aux personnes majeures et capables juridiquement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Compte utilisateur</h2>
            <p>La création d’un compte est obligatoire pour utiliser le service.</p>
            <p>Chaque utilisateur est responsable de la confidentialité de ses identifiants.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Tarifs et abonnements</h2>
            <p>Les tarifs sont affichés sur le site et facturés mensuellement ou par engagement pluriannuel.</p>
            <p>Les durées proposées sont : Mensuel, 12 mois (-15%), 24 mois (-25%), 36 mois (-33%).</p>
            <p>Le paiement s’effectue par carte bancaire ou virement. Les factures sont disponibles en ligne.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Obligations de l’utilisateur</h2>
            <p>L’utilisateur garantit détenir les droits sur les brevets déclarés.</p>
            <p>Il s’engage à ne pas utiliser le service pour des activités illégales ou contraires à l’ordre public.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Propriété intellectuelle</h2>
            <p>Les brevets et contenus soumis par l’utilisateur restent sa propriété.</p>
            <p>IP Licensing SAS conserve la propriété des algorithmes, interfaces et données agrégées.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Données personnelles</h2>
            <p>Les données personnelles sont traitées conformément à la politique de confidentialité.</p>
            <p>Seuls les collaborateurs autorisés accèdent aux données strictement nécessaires au service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Responsabilité</h2>
            <p>IP Licensing SAS ne garantit pas l’exhaustivité des détections ni l’absence d’erreurs.</p>
            <p>L’utilisateur reste seul responsable des actions engagées suite à une alerte.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Résiliation</h2>
            <p>L’abonnement peut être résilié à tout moment depuis l’espace client.</p>
            <p>Les remboursements sont effectués selon les conditions commerciales en vigueur.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">Loi applicable</h2>
            <p>Les présentes conditions sont régies par le droit français.</p>
            <p>Tout litige sera soumis aux tribunaux compétents de Paris.</p>
          </section>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-700 text-sm text-gray-400">
          Dernière mise à jour : 2026-04-26
        </footer>
      </article>
    </main>
  );
}
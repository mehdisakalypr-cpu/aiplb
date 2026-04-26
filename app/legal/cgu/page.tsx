"use client";

import Link from "next/link";
export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <div style={{ background: 'linear-gradient(135deg, #10B981 0%, #FBBF24 100%)', padding: '4rem 1rem' }}>
        <header style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Conditions Générales d'Utilisation</h1>
          <p style={{ fontSize: '1.25rem', color: '#0F172A' }}>Autonomous IP licensing agent</p>
        </header>
      </div>

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', color: '#F8FAFC' }}>
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Objet</h2>
          <p>Ces CGU régissent l'accès et l'utilisation du service IP Licensing Bot, un agent autonome qui surveille l'usage de brevets sur le web et propose des licences commerciales.</p>
          <p>Le service est fourni par GAPUP SAS, immatriculée au RCS de Paris sous le numéro 987654321.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Acceptation</h2>
          <p>L'utilisation du service vaut acceptation des présentes conditions. L'accès au service est réservé aux personnes majeures et capables juridiquement.</p>
          <p>Toute utilisation frauduleuse ou contraire aux lois en vigueur entraîne la résiliation immédiate du compte.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Compte utilisateur</h2>
          <p>La création d'un compte est obligatoire pour utiliser le service. L'utilisateur s'engage à fournir des informations exactes et à maintenir leur actualité.</p>
          <p>Le mot de passe doit être sécurisé et ne pas être partagé. L'équipe IP Licensing Bot ne peut être tenue responsable des usages frauduleux du compte.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Tarifs</h2>
          <p>Les abonnements sont facturés mensuellement ou annuellement avec des réductions progressives selon la durée d'engagement : 12 mois (-15%), 24 mois (-25%), 36 mois (-33%).</p>
          <p>Les tarifs sont indiqués en euros, toutes taxes comprises. Le paiement s'effectue par carte bancaire ou virement. Aucun remboursement n'est accordé en cas de résiliation anticipée.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Obligations de l'utilisateur</h2>
          <p>L'utilisateur garantit détenir les droits nécessaires sur les brevets surveillés et s'engage à ne pas utiliser le service à des fins illégales ou contraires aux droits d'autrui.</p>
          <p>Il doit répondre aux notifications envoyées par le service et respecter les procédures de licence proposées.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
          <p>Le service et son contenu (marques, logiciels, bases de données) sont la propriété exclusive de GAPUP SAS. Toute reproduction ou diffusion non autorisée est interdite.</p>
          <p>Les licences commerciales proposées par le service sont régies par les termes définis par l'utilisateur et le titulaire du brevet.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Données personnelles</h2>
          <p>Les données collectées (coordonnées, historique d'usage) sont traitées conformément au RGPD. Elles servent uniquement à la fourniture du service et à la gestion des abonnements.</p>
          <p>L'utilisateur dispose d'un droit d'accès, de rectification et d'effacement de ses données. Pour les exercer, contactez support@aiplb.gapup.io.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Responsabilité</h2>
          <p>GAPUP SAS ne garantit pas l'exhaustivité des résultats ni l'absence d'erreurs dans les analyses. Le service est fourni "en l'état", sans garantie de disponibilité ou de performance.</p>
          <p>L'utilisateur reste seul responsable des usages de ses brevets et des conséquences juridiques qui en découlent.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Résiliation</h2>
          <p>L'abonnement peut être résilié à tout moment via l'espace client. La résiliation prend effet à la fin de la période de facturation en cours.</p>
          <p>Les données utilisateur sont conservées 30 jours après résiliation, puis supprimées conformément à la politique de confidentialité.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10B981', marginBottom: '1rem' }}>Loi applicable</h2>
          <p>Les présentes conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.</p>
        </section>

        <footer style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #334155', color: '#94A3B8' }}>
          <p>Dernière mise à jour : 2026-04-26</p>
          <Link
            href="/privacy"
            style={{ color: '#10B981', textDecoration: 'underline' }}
            aria-label="Consulter la politique de confidentialité"
          >
            Politique de confidentialité
          </Link>
        </footer>
      </article>
    </main>
  );
}
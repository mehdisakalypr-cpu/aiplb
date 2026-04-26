"use client";

export default function CguPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ background: 'linear-gradient(135deg, #10B981, #FBBF24)', padding: '2rem 1rem', textAlign: 'center' }}>
        <h1 style={{ color: '#06140E', fontSize: '2.25rem', fontWeight: 700, margin: 0 }}>Conditions Générales d’Utilisation</h1>
        <p style={{ color: '#06140E', fontSize: '1.25rem', margin: '0.5rem 0 0' }}>IP Licensing Bot – Agent autonome de licences IP</p>
      </div>

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', color: '#FFFFFF' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Objet</h2>
          <p>Les présentes conditions régissent l’accès et l’utilisation du service IP Licensing Bot, qui permet de détecter l’usage non autorisé de brevets et de proposer des licences commerciales automatisées. Le service s’appuie sur des agents autonomes pour analyser le web ouvert et générer des documents juridiques adaptés.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Acceptation</h2>
          <p>L’utilisation du service implique l’acceptation sans réserve des présentes conditions. L’accès au service vaut acceptation des CGU. Toute utilisation contraire aux présentes est interdite et peut entraîner la résiliation immédiate du compte.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Compte utilisateur</h2>
          <p>La création d’un compte est obligatoire pour utiliser le service. L’utilisateur garantit l’exactitude des informations fournies. Le mot de passe doit être conservé confidentiel. Toute violation de sécurité doit être signalée sans délai.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Tarifs et paiement</h2>
          <p>Les tarifs sont indiqués sur la page de souscription et incluent l’accès au service, la surveillance du web et la génération de documents. Les paiements sont prélevés automatiquement selon la durée choisie (mensuel, 12, 24 ou 36 mois). Aucun remboursement n’est accordé après le début de la période de service.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Obligations de l’utilisateur</h2>
          <p>L’utilisateur s’engage à utiliser le service conformément à la loi et à ne pas porter atteinte aux droits de tiers. Il doit fournir des informations exactes et signaler tout changement concernant son compte. L’utilisateur est responsable des conséquences de l’utilisation du service.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
          <p>Les brevets et droits de propriété intellectuelle concernés par la surveillance restent la propriété exclusive de l’utilisateur. Les documents générés par le service sont fournis à titre indicatif et ne se substituent pas à un conseil juridique personnalisé.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Données personnelles</h2>
          <p>Les données personnelles collectées sont traitées conformément à la politique de confidentialité. Elles sont utilisées uniquement pour la gestion du compte et l’exécution du service. Aucune donnée n’est vendue à des tiers.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Responsabilité</h2>
          <p>Le service est fourni « en l’état ». IP Licensing Bot ne garantit pas l’exhaustivité des résultats ni l’absence d’erreurs. L’utilisateur assume les risques liés à l’utilisation du service, y compris les éventuels préjudices causés par des actions basées sur les documents générés.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Résiliation</h2>
          <p>L’utilisateur peut résilier son abonnement à tout moment via son compte. La résiliation prend effet à la fin de la période de facturation en cours. IP Licensing Bot se réserve le droit de suspendre ou résilier l’accès en cas de manquement aux présentes conditions.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>Loi applicable et litiges</h2>
          <p>Les présentes conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux de Paris. Les parties s’engagent à rechercher une solution amiable avant toute action en justice.</p>
        </section>

        <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', fontSize: '0.875rem' }}>
          <p>Dernière mise à jour : 2026-04-26</p>
        </footer>
      </article>
    </main>
  );
}
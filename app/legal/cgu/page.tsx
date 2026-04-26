import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <style jsx global>{`
        :root {
          --bg: #06140E;
          --primary: #10B981;
          --accent: #FBBF24;
        }
        body {
          color: #E5E7EB;
          line-height: 1.6;
        }
        h1, h2, h3 {
          color: #F9FAFB;
        }
        a {
          color: var(--accent);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <Nav />
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Conditions Générales d'Utilisation</h1>
          <p style={{ fontSize: '1.125rem', color: '#9CA3AF' }}>Autonomous IP licensing agent</p>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Objet</h2>
          <p>Ces Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du service IP Licensing Bot, un agent autonome conçu pour surveiller l'utilisation de brevets sur le web et faciliter l'octroi de licences commerciales.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Acceptation</h2>
          <p>En accédant ou utilisant le service, vous acceptez sans réserve ces CGU et notre Politique de Confidentialité. Si vous n'acceptez pas ces termes, ne continuez pas à utiliser le service.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Compte utilisateur</h2>
          <p>Vous devez créer un compte pour utiliser certaines fonctionnalités. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités associées à votre compte.</p>
          <p>Vous devez fournir des informations exactes et à jour. Nous nous réservons le droit de suspendre ou supprimer tout compte en cas d'information frauduleuse.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Tarifs et paiements</h2>
          <p>Les tarifs sont indiqués sur notre site et peuvent être modifiés à tout moment. Les paiements sont effectués via des passerelles sécurisées et sont non remboursables sauf disposition légale.</p>
          <p>En cas de retard de paiement, des frais de retard de 1,5% par mois seront appliqués. Tout impayé peut entraîner la suspension de votre accès au service.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Obligations de l'utilisateur</h2>
          <p>Vous vous engagez à utiliser le service uniquement pour des fins légales et à ne pas interférer avec son fonctionnement normal. Vous ne devez pas tenter d'accéder à des données non autorisées ou perturber le service.</p>
          <p>Vous êtes seul responsable du contenu que vous soumettez via le service. Vous garantissez qu'il ne viole aucun droit de propriété intellectuelle ou autre droit de tiers.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
          <p>Le service et son contenu (sauf contributions utilisateurs) sont la propriété exclusive de IP Licensing Bot. Vous obtenez une licence limitée, non exclusive et non transférable pour utiliser le service selon ces CGU.</p>
          <p>Les contributions utilisateurs restent votre propriété, mais vous nous accordez une licence mondiale, non exclusive pour les utiliser dans le cadre du service.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Données personnelles</h2>
          <p>Nous collectons des données personnelles nécessaires à la fourniture du service. Ces données sont traitées conformément à notre Politique de Confidentialité et aux lois applicables, notamment le RGPD.</p>
          <p>Vous avez le droit d'accéder, rectifier ou supprimer vos données personnelles. Pour exercer ces droits, contactez-nous via les coordonnées fournies dans la Politique de Confidentialité.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Limitation de responsabilité</h2>
          <p>Nous ne garantissons pas que le service sera ininterrompu ou exempt d'erreurs. Nous ne sommes pas responsables des dommages indirects, consécutifs ou punitifs résultant de l'utilisation ou de l'impossibilité d'utiliser le service.</p>
          <p>Notre responsabilité totale envers vous pour toute réclamation découlant de ces CGU est limitée au montant que vous avez payé pour le service au cours des 12 derniers mois.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Résiliation</h2>
          <p>Vous pouvez résilier votre compte à tout moment via les paramètres du compte. Nous pouvons résilier ou suspendre votre accès immédiatement si vous violez ces CGU ou la loi applicable.</p>
          <p>En cas de résiliation, les frais non remboursables restent dus pour les services déjà fournis. Les obligations survivantes (propriété intellectuelle, confidentialité) continuent de s'appliquer après la résiliation.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Loi applicable et litiges</h2>
          <p>Ces CGU sont régies par le droit français. Tout litige relatif à ces CGU sera soumis aux tribunaux compétents de Paris, France, avec renonciation à tout autre for ou tribunal.</p>
          <p>En cas de conflit entre ces CGU et toute autre politique ou document, ces CGU prévalent sauf indication contraire expresse.</p>
        </section>

        <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #374151' }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Dernière mise à jour : 2026-04-26</p>
        </footer>
      </article>
      <ChatbotWidget />
      <Footer />
    </main>
  );
}
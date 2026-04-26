import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', '--bg': '#06140E' }}>
      <Nav />
      <header className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Politique de confidentialité</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Comment nous protégeons vos données personnelles dans le cadre de l&apos;utilisation de l&apos;IP Licensing Bot</p>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <article className="prose prose-invert prose-lg text-gray-300 space-y-8">
          <h2 className="text-2xl font-bold text-white">1. Données collectées</h2>
          <p>Nous collectons uniquement les données strictement nécessaires à la fourniture du service : adresse e-mail pour la création de compte, adresse IP pour la détection d&apos;utilisation de votre propriété intellectuelle, et informations sur les licences commerciales souscrites.</p>

          <h2 className="text-2xl font-bold text-white">2. Finalité du traitement</h2>
          <p>Vos données servent exclusivement à : identifier les utilisateurs de votre propriété intellectuelle, générer des lettres de mise en demeure automatisées, proposer des licences commerciales via un processus de click-through, et assurer le support technique.</p>

          <h2 className="text-2xl font-bold text-white">3. Base légale</h2>
          <p>Le traitement repose sur votre consentement explicite pour la création de compte et l&apos;envoi de communications commerciales. Pour la détection d&apos;utilisation de propriété intellectuelle, le traitement est nécessaire à l&apos;exécution de notre mission de défense de vos droits.</p>

          <h2 className="text-2xl font-bold text-white">4. Durée de conservation</h2>
          <p>Les données personnelles sont conservées 3 ans après la dernière activité de votre compte ou la résiliation de votre abonnement. Les données relatives aux licences commerciales sont conservées 10 ans pour répondre à d&apos;éventuels litiges.</p>

          <h2 className="text-2xl font-bold text-white">5. Destinataires des données</h2>
          <p>Vos données sont accessibles uniquement à notre équipe technique pour le support, à nos partenaires juridiques pour la rédaction de documents officiels, et aux services d&apos;hébergement pour assurer le fonctionnement du service. Aucune vente ou partage à des tiers n&apos;est effectué.</p>

          <h2 className="text-2xl font-bold text-white">6. Vos droits</h2>
          <p>Vous disposez du droit d&apos;accès, de rectification, d&apos;effacement, de limitation du traitement, et de portabilité de vos données. Pour exercer ces droits, contactez-nous à l&apos;adresse indiquée en section 8. Vous pouvez également vous opposer au traitement de vos données pour des motifs légitimes.</p>

          <h2 className="text-2xl font-bold text-white">7. Cookies</h2>
          <p>Notre service utilise des cookies techniques essentiels au fonctionnement du site (session, sécurité) et des cookies de performance pour analyser l&apos;utilisation du service. Aucun cookie de suivi publicitaire n&apos;est installé. Vous pouvez bloquer les cookies via les paramètres de votre navigateur, mais cela peut impacter certaines fonctionnalités.</p>

          <h2 className="text-2xl font-bold text-white">8. Délégué à la protection des données</h2>
          <p>Notre Délégué à la Protection des Données est joignable à l&apos;adresse <a href="mailto:dpo@aiplb.vercel.app" className="text-primary underline">dpo@aiplb.vercel.app</a>. Pour toute question relative à la protection de vos données, vous pouvez également contacter notre équipe via le chat intégré au service.</p>

          <h2 className="text-2xl font-bold text-white">9. Réclamation à la CNIL</h2>
          <p>Si vous estimez que le traitement de vos données ne respecte pas le RGPD, vous pouvez introduire une réclamation auprès de la CNIL en ligne à l&apos;adresse <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.cnil.fr/fr/plaintes</a> ou par courrier à l&apos;adresse suivante : CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07.</p>

          <div className="pt-8 text-sm text-gray-400">
            <p>Dernière mise à jour : 26 avril 2026</p>
          </div>
        </article>
      </section>

      <ChatbotWidget />
      <Footer />
    </main>
  );
}
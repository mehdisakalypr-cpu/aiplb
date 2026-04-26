"use client";

export default function ContactPage({ searchParams }: ContactPageProps) {
  const successMessage = searchParams.success;

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        '--bg': '#06140E',
        '--primary': '#10B981',
        '--accent': '#FBBF24',
      }}
      className="text-white flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <header className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden mb-16 shadow-2xl">
        <img
          src="https://image.pollinations.ai/prompt/futuristic%20AI%20interface,%20intellectual%20property%20symbols,%20digital%20network,%20secure,%20green%20and%20gold%20colors?width=1920&height=1080&model=flux&nologo=true"
          alt="Interface AI futuriste avec symboles de propriété intellectuelle et réseau numérique sécurisé"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/70 to-[var(--accent)]/70 mix-blend-multiply"></div>
        <div className="relative z-10 text-center py-24 sm:py-32 lg:py-40 px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Contactez-nous
          </h1>
          <h2 className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Réponse en moins de 24h
          </h2>
        </div>
      </header>

      {/* Two-column layout: Form + Contact Info */}
      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column: Contact Form */}
        <article className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <h3 className="text-3xl font-bold text-[var(--primary)] mb-8">
            Envoyez-nous un message
          </h3>
          {successMessage === 'true' ? (
            <div className="bg-[var(--primary)]/20 text-[var(--primary)] p-4 rounded-md text-center text-lg font-semibold">
              Merci, votre message a été envoyé avec succès !
            </div>
          ) : (
            <form action="/api/contact" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Votre Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Votre Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Votre Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Votre Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 bg-[var(--accent)] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] transition duration-200"
              >
                Envoyer
              </button>
            </form>
          )}
        </article>

        {/* Right Column: Contact Info Card */}
        <article className="bg-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
          <img
            src="https://image.pollinations.ai/prompt/human%
"use client";

export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', '--bg': '#06140E' }}>
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
        <h2 className="text-xl md:text-2xl text-gray-300">Réponse en moins de 24h</h2>
      </header>

      <section className="px-4 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <form
              action="/api/contact"
              method="POST"
              className="space-y-6 bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Votre adresse email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Société
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Nom de votre société"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Votre message"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <p className="text-gray-300 mb-2">contact@aiplb.com</p>
              <p className="text-sm text-gray-400">Réponse sous 24h</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Heures</h3>
              <p className="text-gray-300">Lundi–Vendredi, 9h–18h</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 text-sm">
                Vous parlez à un humain, pas un bot.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 h-40 flex items-center justify-center">
              <span className="text-gray-400">Paris, France</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
export default function GeneratedPage() {
return (
    <main style={{ minHeight: '100vh', background: '#06140E' }}>
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Démo de IP Licensing Bot</h1>
        <h2 className="text-xl md:text-2xl text-white opacity-80">Sur HubSpot</h2>
      </header>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Snapshot */}
          <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
            <header className="bg-slate-700 p-3 flex justify-between items-center">
              <h3 className="text-white font-semibold">Snapshot</h3>
              <span className="text-xs bg-slate-600 text-white px-2 py-1 rounded">12/05/2025 14:32</span>
            </header>
            <div className="p-4 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Pricing page: /pricing</span>
                <span className="text-green-400">$29/mois</span>
              </div>
              <div className="flex justify-between">
                <span>Feature: AI Chatbot</span>
                <span className="text-green-400">Activé</span>
              </div>
              <div className="flex justify-between">
                <span>User segment: Startup</span>
                <span className="text-yellow-400">Nouveau</span>
              </div>
              <div className="flex justify-between">
                <span>Geolocation: US-East</span>
                <span className="text-red-400">⚠️ Non conforme</span>
              </div>
              <div className="flex justify-between">
                <span>License ID: L-2025-05-12-7842</span>
                <span className="text-green-400">Valide</span>
              </div>
              <div className="flex justify-between">
                <span>Domain: hubspot.com</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>IP detected: 20.81.111.83</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Last scan: 2025-05-12 14:28</span>
                <span className="text-green-400">✓</span>
              </div>
            </div>
          </article>

          {/* Card 2: Diff */}
          <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
            <header className="bg-slate-700 p-3 flex justify-between items-center">
              <h3 className="text-white font-semibold">Diff</h3>
              <span className="text-xs bg-slate-600 text-white px-2 py-1 rounded">12/05/2025 14:32</span>
            </header>
            <div className="p-4 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Old price: $19/mois</span>
                <span className="text-red-400">→ $29/mois</span>
              </div>
              <div className="flex justify-between">
                <span>Old feature: Basic Chat</span>
                <span className="text-green-400">→ AI Chatbot</span>
              </div>
              <div className="flex justify-between">
                <span>Old segment: SMB</span>
                <span className="text-yellow-400">→ Startup</span>
              </div>
              <div className="flex justify-between">
                <span>Old geolocation: EU</span>
                <span className="text-red-400">→ US-East</span>
              </div>
              <div className="flex justify-between">
                <span>Old license: L-2025-04-08-1123</span>
                <span className="text-green-400">→ L-2025-05-12-7842</span>
              </div>
              <div className="flex justify-between">
                <span>Old domain: old.hubspot.com</span>
                <span className="text-green-400">→ hubspot.com</span>
              </div>
              <div className="flex justify-between">
                <span>Old IP: 20.81.110.12</span>
                <span className="text-green-400">→ 20.81.111.83</span>
              </div>
              <div className="flex justify-between">
                <span>Old scan: 2025-05-11 10:15</span>
                <span className="text-green-400">→ 2025-05-12 14:28</span>
              </div>
            </div>
          </article>

          {/* Card 3: Digest */}
          <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
            <header className="bg-slate-700 p-3 flex justify-between items-center">
              <h3 className="text-white font-semibold">Digest</h3>
              <span className="text-xs bg-slate-600 text-white px-2 py-1 rounded">12/05/2025 14:32</span>
            </header>
            <div className="p-4 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Total pages scanned: 42</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>New non-compliant: 1</span>
                <span className="text-red-400">⚠️</span>
              </div>
              <div className="flex justify-between">
                <span>License renewals: 3</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Price changes: 2</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Feature updates: 1</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Geolocation shifts: 1</span>
                <span className="text-red-400">⚠️</span>
              </div>
              <div className="flex justify-between">
                <span>Domain changes: 1</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>IP changes: 1</span>
                <span className="text-green-400">✓</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="text-center py-16 px-4">
        <Link
          href="/contact?from=demo"
          style={{ background: '#10B981', color: '#FFFFFF' }}
          className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition hover:opacity-90"
        >
          Lancer ma démo
        </Link>
      </section>
    </main>
  );
}
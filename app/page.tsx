"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const FEATURES = [
  { icon: "⚡", title: "Automatisé", desc: "Lance le moteur une fois, livré ensuite sans intervention." },
  { icon: "📊", title: "Données vérifiables", desc: "Sources citées, liens cliquables, pas de hallucinations." },
  { icon: "🛡️", title: "Compliance-ready", desc: "Outputs documentés, audit-trail, conforme réglementations." },
  { icon: "🎯", title: "Actionnable", desc: "Pas un rapport à lire — des recommandations à appliquer." },
];

const STEPS = [
  { num: "1.", title: "Configure", desc: "Indique ta cible / niche / repo / dataset.", color: "#7C3AED" },
  { num: "2.", title: "AIPLB traite", desc: "Notre IA scanne, agrège, structure, vérifie.", color: "#06B6D4" },
  { num: "3.", title: "Reçois ton output", desc: "Hebdomadaire ou à la demande, prêt à utiliser.", color: "#7C3AED" },
];

const PERSONAS = [
  { icon: "🧑‍💻", title: "Équipes produit", desc: "Anticiper les pivots et arbitrer la roadmap." },
  { icon: "📈", title: "Marketing & growth", desc: "Trouver des angles précis et timing sur le marché." },
  { icon: "🎯", title: "Direction", desc: "Vue rapide menaces et opportunités stratégiques." },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0F0A1F", color: "#FFFFFF", overflow: "hidden" }}>
      <section style={{ position: "relative", height: 640, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <motion.img
          src="https://image.pollinations.ai/prompt/abstract%20futuristic%20intellectual%20property%20licensing%20legal%20documents%20blockchain%20violet%20cyan%20gradient%20cinematic%20wide?width=1920&height=1080&nologo=true&seed=11"
          alt=""
          aria-hidden
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.55) 0%, rgba(6,182,212,0.45) 100%)" }} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 960, zIndex: 1 }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", padding: "6px 14px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}
          >
            AIPLB
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 800, margin: "0 0 16px" }}
          >
            Licensing autonome de ta propriété intellectuelle.
            <br />
            <span style={{ background: "linear-gradient(90deg, #C4B5FD, #A5F3FC)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Avant tes concurrents.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 20, opacity: 0.9, maxWidth: 720, margin: "0 auto 28px" }}
          >
            Surveillance 24/7 de tes brevets et marques + détection prospects licensing + rapport hebdo prêt à actionner.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/auth/signup"
                style={{ display: "inline-block", padding: "14px 32px", borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: "none", backgroundColor: "#7C3AED", color: "#FFFFFF" }}
              >
                Démarrer →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/demo"
                style={{ display: "inline-block", padding: "14px 32px", borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: "none", backgroundColor: "rgba(255,255,255,0.1)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                Voir un exemple
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px" }}
      >
        <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} style={{ fontSize: 36, fontWeight: 700, textAlign: "center", margin: "0 0 48px" }}>
          Ce que AIPLB fait pour toi
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {FEATURES.map((f) => (
            <motion.article
              key={f.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "#7C3AED" }}
              style={{ background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 12, padding: 24, textAlign: "center" }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#D1D5DB", margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}
      >
        <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} style={{ fontSize: 36, fontWeight: 700, textAlign: "center", margin: "0 0 48px" }}>
          Comment AIPLB fonctionne
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {STEPS.map((s) => (
            <motion.div key={s.num} variants={fadeUp} transition={{ duration: 0.6 }} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color, lineHeight: 1, flexShrink: 0 }}>{s.num}</div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#D1D5DB", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}
      >
        <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} style={{ fontSize: 36, fontWeight: 700, textAlign: "center", margin: "0 0 48px" }}>
          Pour qui est AIPLB ?
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {PERSONAS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "#06B6D4" }}
              style={{ background: "#1F1535", border: "1px solid #2D1F4D", borderRadius: 12, padding: 24, textAlign: "center" }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "#D1D5DB", margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 1100, margin: "32px auto 96px", padding: "64px 24px", background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)", borderRadius: 24, textAlign: "center" }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 16px" }}>Prêt à passer en autonomie ?</h2>
        <p style={{ fontSize: 18, opacity: 0.95, maxWidth: 640, margin: "0 auto 28px" }}>
          Démarre ton premier rapport. Trois offres simples, sans engagement caché.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link href="/auth/signup" style={{ display: "inline-block", padding: "14px 36px", backgroundColor: "#FFFFFF", color: "#0F172A", borderRadius: 999, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
              Démarrer
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link href="/offres" style={{ display: "inline-block", padding: "14px 36px", backgroundColor: "transparent", color: "#FFFFFF", borderRadius: 999, textDecoration: "none", fontWeight: 600, fontSize: 16, border: "2px solid #FFFFFF" }}>
              Voir les offres
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

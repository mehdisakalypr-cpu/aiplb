/**
 * Minimal i18n: cookie-based locale + flat dictionary.
 *
 * Activation policy: the LocaleSwitcher is NOT injected in the public Nav until
 * translation coverage hits 100% (per absolute rule
 * `feedback_locale_consistency_rule`). The infrastructure ships first; ports
 * extend the dictionary and toggle the switcher when ready.
 */

import { cookies, headers } from "next/headers";

export type Locale = "fr" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";
export const LOCALE_COOKIE = "aiplb_locale";

function pickFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const lang = header.split(",")[0]?.split("-")[0]?.toLowerCase().trim();
  if (lang === "fr") return "fr";
  if (lang === "en") return "en";
  return null;
}

export async function getLocale(): Promise<Locale> {
  const c = await cookies();
  const fromCookie = c.get(LOCALE_COOKIE)?.value;
  if (fromCookie === "fr" || fromCookie === "en") return fromCookie;
  const h = await headers();
  return pickFromAcceptLanguage(h.get("accept-language")) ?? DEFAULT_LOCALE;
}

export function isLocale(v: unknown): v is Locale {
  return v === "fr" || v === "en";
}

type Dict = Record<string, { fr: string; en: string }>;

export const messages: Dict = {
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.services": { fr: "Services", en: "Services" },
  "nav.offers": { fr: "Offres", en: "Pricing" },
  "nav.demo": { fr: "Démo", en: "Demo" },
  "nav.faq": { fr: "FAQ", en: "FAQ" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.signin": { fr: "Se connecter", en: "Sign in" },
  "nav.signup": { fr: "S'inscrire", en: "Sign up" },
  "nav.account": { fr: "Mon compte", en: "My account" },
  "nav.signout": { fr: "Se déconnecter", en: "Sign out" },
  "cta.start_report": { fr: "Démarrer mon rapport", en: "Start my report" },
  "cta.see_demo": { fr: "Voir un exemple", en: "See an example" },
  "cta.see_offers": { fr: "Voir les offres", en: "See pricing" },
};

export function t(key: keyof typeof messages, locale: Locale): string {
  const entry = messages[key];
  if (!entry) return String(key);
  return entry[locale] ?? entry[DEFAULT_LOCALE];
}

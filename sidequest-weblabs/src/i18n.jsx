import { createContext, useContext, useEffect } from 'react';
import en from './data/content.en.js';
import es from './data/content.es.js';

const dictionaries = { en, es };
const LOCALES = Object.keys(dictionaries);

const LocaleContext = createContext({ locale: 'en', t: en });

// Resolve the active locale from the URL path (/en, /es). Returns null when the
// path carries no locale so the caller can detect + redirect.
export function localeFromPath(pathname) {
  const segment = pathname.split('/').filter(Boolean)[0];
  return LOCALES.includes(segment) ? segment : null;
}

// Best-effort locale from the browser, defaulting to English.
export function detectLocale() {
  const lang = (typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en').toLowerCase();
  return lang.startsWith('es') ? 'es' : 'en';
}

export function LocaleProvider({ locale, children }) {
  const t = dictionaries[locale] ?? en;

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.meta.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://sidequest-weblabs.vercel.app/${locale}`);
  }, [locale, t]);

  return <LocaleContext.Provider value={{ locale, t }}>{children}</LocaleContext.Provider>;
}

// Full content bundle for the active locale.
export function useContent() {
  return useContext(LocaleContext).t;
}

// The active locale code ('en' | 'es').
export function useLocale() {
  return useContext(LocaleContext).locale;
}

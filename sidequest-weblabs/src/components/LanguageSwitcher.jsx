import { useLocale } from '../i18n.jsx';

// Market switch shown as US / GT (US = English site, GT = Guatemala/Spanish).
// Plain links to the locale roots so the whole app reloads in the chosen
// language (keeps the html lang attribute and hreflang correct).
// tone 'light' is for placement on the dark/cobalt overlay menu.
export default function LanguageSwitcher({ className = '', tone = 'dark' }) {
  const locale = useLocale();
  const light = tone === 'light';
  const item = 'font-mono text-xs font-bold uppercase tracking-wider transition';
  const active = light ? 'text-lime' : 'text-cobalt';
  const inactive = light ? 'text-white/60 hover:text-white' : 'text-ink/45 hover:text-ink';

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <a
        href="/en"
        aria-label="United States, English"
        aria-current={locale === 'en' ? 'true' : undefined}
        className={`${item} ${locale === 'en' ? active : inactive}`}
      >
        US
      </a>
      <span className={light ? 'text-white/30' : 'text-ink/25'} aria-hidden="true">
        /
      </span>
      <a
        href="/es"
        aria-label="Guatemala, Español"
        aria-current={locale === 'es' ? 'true' : undefined}
        className={`${item} ${locale === 'es' ? active : inactive}`}
      >
        GT
      </a>
    </div>
  );
}

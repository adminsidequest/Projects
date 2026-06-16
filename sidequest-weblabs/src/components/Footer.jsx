import { ArrowUpRight } from 'lucide-react';
import { useContent, useLocale } from '../i18n.jsx';
import Logo from './Logo.jsx';

export default function Footer() {
  const { footer, contactInfo } = useContent();
  const locale = useLocale();
  return (
    <footer className="border-t-2 border-ink bg-ink px-5 py-14 text-paper sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-paper/60">{footer.tagline}</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-4 inline-block text-sm font-bold text-lime transition hover:underline"
            >
              {contactInfo.email}
            </a>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`/${locale}${link.href}`}
                      className="group inline-flex items-center gap-1 text-sm text-paper/80 transition hover:text-lime"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/15 pt-6 font-mono text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.rights}</p>
          <p>{footer.signature}</p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useContent, useLocale } from '../i18n.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import Logo from './Logo.jsx';

export default function Navbar() {
  const { nav, contact, contactInfo } = useContent();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(
    () => typeof window !== 'undefined' && window.location.hash === '#menu',
  );
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Open menu: lock scroll, move focus in, make the page behind inert so focus
  // stays in the menu, close on Escape, and restore focus on close.
  useEffect(() => {
    if (!open) return undefined;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const behind = [document.getElementById('main'), document.querySelector('footer')].filter(
      Boolean,
    );
    behind.forEach((el) => el.setAttribute('inert', ''));
    panelRef.current?.focus?.();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      behind.forEach((el) => el.removeAttribute('inert'));
      document.removeEventListener('keydown', onKeyDown);
      if (opener && typeof opener.focus === 'function') opener.focus();
    };
  }, [open]);

  const stagger = (index) => ({ transitionDelay: open ? `${260 + index * 55}ms` : '0ms' });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-300 ${
        open
          ? 'bg-transparent'
          : scrolled
            ? 'border-b-2 border-ink bg-paper/90 backdrop-blur-md'
            : 'border-b-2 border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href={`/${locale}#top`} aria-label={nav.homeLabel} onClick={() => setOpen(false)}>
          <Logo tone={open ? 'light' : 'dark'} />
        </a>

        <div className="flex items-center gap-4 sm:gap-5">
          <LanguageSwitcher tone={open ? 'light' : 'dark'} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="overlay-menu"
            aria-label={open ? nav.closeMenuLabel : nav.openMenuLabel}
            className={`group inline-flex items-center gap-2.5 transition-colors ${
              open ? 'text-paper' : 'text-ink'
            }`}
          >
            <span className="hidden font-mono text-xs font-bold uppercase tracking-wider sm:inline">
              {open ? nav.close : nav.menu}
            </span>
            <span className="relative block h-4 w-7" aria-hidden="true">
              <span
                className={`absolute left-0 block h-[2px] w-7 bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-7 bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-[11px]'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="overlay-menu"
        className={`fixed inset-0 z-[60] transition-[opacity,visibility] duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        {...(open ? {} : { inert: '' })}
      >
        <div
          ref={panelRef}
          tabIndex={-1}
          className={`menu-panel absolute inset-0 overflow-y-auto bg-cobalt text-white outline-none ${
            open ? 'is-open' : ''
          }`}
        >
          <div className="mx-auto flex min-h-full max-w-7xl flex-col px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
            <nav className="flex flex-1 flex-col justify-center">
              {nav.items.map((item, index) => (
                <a
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  onClick={() => setOpen(false)}
                  style={stagger(index)}
                  className={`menu-link group flex items-center gap-4 border-b border-paper/15 py-3 transition-[transform,opacity] duration-500 sm:gap-7 sm:py-4 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-lime sm:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-4xl font-extrabold tracking-tight transition-[color,transform] duration-300 group-hover:translate-x-2 group-hover:text-lime sm:text-6xl lg:text-7xl">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="h-7 w-7 flex-none -translate-x-3 text-lime opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:h-9 sm:w-9"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>

            <div
              style={stagger(nav.items.length)}
              className={`mt-10 flex flex-col gap-6 transition-[transform,opacity] duration-500 sm:flex-row sm:items-end sm:justify-between ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  {contact.eyebrow}
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1 inline-block font-display text-2xl font-extrabold text-white transition hover:text-lime sm:text-3xl"
                >
                  {contactInfo.email}
                </a>
              </div>
              <a
                href={`/${locale}#contact`}
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-paper bg-lime px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-paper"
              >
                {nav.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

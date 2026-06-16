import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { useContent, useLocale } from '../i18n.jsx';
import Reveal from './Reveal.jsx';

const SITE = 'https://sidequest-weblabs.vercel.app';

export default function CaseStudy({ slug }) {
  const { caseStudies } = useContent();
  const locale = useLocale();
  const cs = caseStudies?.[slug];

  useEffect(() => {
    if (!cs) {
      window.location.replace(`/${locale}`);
      return;
    }
    document.title = cs.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', cs.meta.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${SITE}/${locale}/work/${slug}`);
  }, [cs, locale, slug]);

  if (!cs) return null;

  const home = `/${locale}`;

  return (
    <>
      <article className="px-5 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <a
              href={`${home}#work`}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink/60 transition hover:text-cobalt"
            >
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" aria-hidden="true" />
              {cs.back}
            </a>
          </Reveal>

          <Reveal delay={60} className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
              <span className="inline-block h-2.5 w-2.5 flex-none bg-gradient-to-br from-cobalt to-flare" />
              {cs.eyebrow}
            </span>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              {cs.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-soft sm:text-xl">{cs.summary}</p>
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 flex flex-col gap-6 border-y-2 border-ink py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {cs.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink/50">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-bold text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={cs.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-none items-center justify-center gap-2 rounded-full border-2 border-ink bg-cobalt px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]"
            >
              {cs.visitCta}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={160} variant="zoom" className="mt-12">
            <div className="overflow-hidden border-2 border-ink bg-ink shadow-[8px_8px_0_0_#16150f]">
              <div className="flex items-center gap-2 border-b-2 border-ink bg-paper-2 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-cobalt" />
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-lime" />
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-paper" />
                <span className="ml-3 flex-1 truncate font-mono text-xs text-ink/60">
                  {cs.domain}
                </span>
              </div>
              <img src={cs.image} alt={cs.imageAlt} width="1280" height="800" className="w-full" />
            </div>
          </Reveal>

          <div className="mx-auto mt-16 max-w-3xl space-y-14 pb-4">
            {cs.sections.map((section, index) => (
              <Reveal as="section" key={section.title}>
                <span className="font-mono text-sm font-bold text-cobalt">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{section.title}</h2>
                <p className="mt-4 text-lg leading-8 text-soft">{section.body}</p>
                {section.points ? (
                  <ul className="mt-6 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 text-base leading-7 text-ink/85">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center bg-lime">
                          <Check className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="px-5 pb-24 pt-6 sm:px-8">
        <Reveal className="relative mx-auto max-w-7xl overflow-hidden border-2 border-ink bg-lime px-6 py-16 text-center shadow-[10px_10px_0_0_#16150f] sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-5xl">{cs.closing.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-ink/70">{cs.closing.body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${home}#contact`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cobalt px-7 py-3.5 text-base font-bold text-white shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]"
            >
              {cs.closing.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`${home}#work`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-transparent px-7 py-3.5 text-base font-bold text-ink transition hover:bg-ink hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {cs.back}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

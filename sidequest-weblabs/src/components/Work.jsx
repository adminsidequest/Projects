import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useContent, useLocale } from '../i18n.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading, { AccentTitle } from './SectionHeading.jsx';

function BrowserChrome({ domain }) {
  return (
    <div className="flex items-center gap-2 border-b-2 border-ink bg-paper-2 px-4 py-2.5">
      <span className="h-3 w-3 rounded-full border-2 border-ink bg-cobalt" />
      <span className="h-3 w-3 rounded-full border-2 border-ink bg-lime" />
      <span className="h-3 w-3 rounded-full border-2 border-ink bg-paper" />
      <span className="ml-3 flex-1 truncate font-mono text-xs text-ink/60">{domain}</span>
    </div>
  );
}

function Tags({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((tag) => (
        <span key={tag} className="border-2 border-ink bg-paper px-3 py-1 font-mono text-xs text-ink">
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ project, number, cta, cursorLabel, className = '' }) {
  const locale = useLocale();
  const href = `/${locale}/work/${project.slug}`;
  return (
    <Reveal className={className}>
      <article className="grid gap-8 border-2 border-ink bg-paper p-5 shadow-[8px_8px_0_0_#16150f] sm:p-7 lg:grid-cols-2 lg:items-center lg:p-9">
        <a
          href={href}
          data-cursor={cursorLabel}
          className="group block"
          aria-label={`${cta}: ${project.name}`}
        >
          <div className="overflow-hidden border-2 border-ink bg-ink">
            <BrowserChrome domain={project.domain} />
            <img
              src={project.image}
              alt={project.alt}
              width="1280"
              height="800"
              loading="lazy"
              className="w-full transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </a>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-5xl font-extrabold leading-none text-ink/15">{number}</span>
            <span className="border-2 border-ink bg-lime px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-wider text-ink">
              {project.label}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-cobalt">
              {project.industry}
            </span>
          </div>
          <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{project.name}</h3>
          <p className="mt-4 text-base leading-7 text-soft">{project.blurb}</p>
          <Tags items={project.tags} />
          <div className="mt-8">
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cobalt px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]"
            >
              {cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  const { work } = useContent();
  const locale = useLocale();
  const { featured, clinic, samples, invite } = work;

  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="(01)"
          eyebrow={work.eyebrow}
          title={<AccentTitle {...work.title} />}
          intro={work.intro}
        />

        {/* Featured client projects */}
        <FeaturedCard
          project={featured}
          number="01"
          cta={work.caseStudyCta}
          cursorLabel={work.cursorLabel}
          className="mt-14"
        />
        {clinic ? (
          <FeaturedCard
            project={clinic}
            number="02"
            cta={work.caseStudyCta}
            cursorLabel={work.cursorLabel}
            className="mt-6"
          />
        ) : null}

        {/* Sample builds */}
        <Reveal className="mt-20 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink/50">
            {work.samplesEyebrow}
          </p>
          <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{work.samplesTitle}</h3>
          <p className="mt-4 text-base leading-7 text-soft">{work.samplesNote}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {samples.map((sample, index) => (
            <Reveal key={sample.slug} delay={index * 80}>
              <a
                href={`/${locale}/work/${sample.slug}`}
                data-cursor={work.cursorLabel}
                aria-label={`${work.caseStudyCta}: ${sample.name}`}
                className="group flex h-full flex-col border-2 border-ink bg-paper shadow-[6px_6px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#16150f]"
              >
                <div className="overflow-hidden bg-ink">
                  <BrowserChrome domain={sample.domain} />
                  <img
                    src={sample.image}
                    alt={sample.alt}
                    width="1280"
                    height="800"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-cobalt">
                    {sample.industry}
                  </span>
                  <h4 className="mt-2 text-2xl font-extrabold">{sample.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-soft">{sample.blurb}</p>
                  <Tags items={sample.tags} />
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cobalt transition group-hover:gap-3">
                    {work.caseStudyCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {invite ? (
          <Reveal delay={120} className="mt-6">
            <a
              href={`/${locale}${invite.url}`}
              className="group flex flex-col items-start justify-between gap-4 border-2 border-dashed border-ink/40 bg-paper p-8 transition hover:border-ink hover:bg-lilac sm:flex-row sm:items-center"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/50">
                  {invite.industry}
                </span>
                <h3 className="mt-2 text-2xl font-extrabold">{invite.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-soft">{invite.blurb}</p>
              </div>
              <span className="inline-flex flex-none items-center gap-2 text-sm font-bold text-cobalt transition group-hover:gap-3">
                {invite.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

import { ArrowRight, Mail } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import Magnetic from './Magnetic.jsx';
import Reveal from './Reveal.jsx';
import { AccentTitle } from './SectionHeading.jsx';

export default function ClosingCTA() {
  const { closing, contactInfo } = useContent();
  return (
    <section className="px-5 py-24 sm:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden border-2 border-ink bg-lime px-6 py-16 text-center shadow-[10px_10px_0_0_#16150f] sm:px-12 sm:py-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-ink/60">
          {closing.kicker}
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold sm:text-6xl">
          <AccentTitle {...closing.title} accentClass="text-ink" />
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-ink/70">{closing.sub}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cobalt px-7 py-3.5 text-base font-bold text-white shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]"
            >
              {closing.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-transparent px-7 py-3.5 text-base font-bold text-ink transition hover:bg-ink hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {closing.ctaSecondary}
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}

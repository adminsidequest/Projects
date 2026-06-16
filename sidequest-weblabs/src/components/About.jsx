import { Check } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';
import { AccentTitle } from './SectionHeading.jsx';

export default function About() {
  const { about } = useContent();
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <Eyebrow number="(07)">{about.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <AccentTitle {...about.title} />
          </h2>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <p className="text-lg leading-7 text-soft">{about.p1}</p>
          <p className="text-lg leading-7 text-soft">{about.p2}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {about.principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 border-2 border-ink bg-paper p-3 text-sm font-medium"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center bg-lime">
                  <Check className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
                </span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

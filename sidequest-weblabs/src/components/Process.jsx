import { useContent } from '../i18n.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading, { AccentTitle } from './SectionHeading.jsx';

export default function Process() {
  const { process } = useContent();
  return (
    <section id="process" className="scroll-mt-24 border-y-2 border-ink bg-paper-2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          number="(04)"
          eyebrow={process.eyebrow}
          title={<AccentTitle {...process.title} />}
          intro={process.intro}
          className="mx-auto"
        />

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {process.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={(index % 5) * 70}
              className="h-full border-2 border-ink bg-paper p-6"
            >
              <span className="font-display text-4xl font-extrabold text-cobalt">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-extrabold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-soft">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

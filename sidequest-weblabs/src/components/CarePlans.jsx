import { useContent } from '../i18n.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading, { AccentTitle } from './SectionHeading.jsx';

export default function CarePlans() {
  const { care } = useContent();
  return (
    <section id="care" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="(05)"
          eyebrow={care.eyebrow}
          title={<AccentTitle {...care.title} />}
          intro={care.intro}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {care.items.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={(index % 4) * 70}
              className="flex h-full flex-col border-2 border-ink bg-paper p-6 transition duration-200 hover:-translate-y-1 hover:bg-lilac"
            >
              <h3 className="font-display text-lg font-extrabold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-extrabold">{plan.price}</span>
                <span className="font-mono text-xs text-soft">{plan.cadence}</span>
              </div>
              {plan.subtitle ? (
                <p className="mt-3 text-sm font-semibold leading-5 text-ink">{plan.subtitle}</p>
              ) : null}
              <p className="mt-3 text-sm leading-6 text-soft">{plan.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

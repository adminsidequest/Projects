import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading, { AccentTitle } from './SectionHeading.jsx';

function PriceTag({ price, fromLabel, popular }) {
  const hasFrom = price.startsWith(`${fromLabel} `);
  const amount = hasFrom ? price.slice(fromLabel.length + 1) : price;
  return (
    <div className="mt-5 flex items-baseline gap-2">
      {hasFrom ? (
        <span className={`text-sm font-bold ${popular ? 'text-white/70' : 'text-soft'}`}>{fromLabel}</span>
      ) : null}
      <span className="font-display text-5xl font-extrabold">{amount}</span>
    </div>
  );
}

function PackageCard({ plan, labels }) {
  const { name, subtitle, price, cadence, blurb, features, popular } = plan;
  const tone = popular ? 'bg-cobalt text-white' : 'bg-paper text-ink';
  return (
    <div className={`relative flex h-full flex-col border-2 border-ink p-7 shadow-[8px_8px_0_0_#16150f] ${tone}`}>
      {popular ? (
        <span className="absolute -top-3.5 left-7 border-2 border-ink bg-lime px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
          {labels.popularTag}
        </span>
      ) : null}

      <h3 className="font-display text-2xl font-extrabold">{name}</h3>
      {subtitle ? (
        <p className={`mt-1.5 text-sm leading-5 ${popular ? 'text-white/80' : 'text-soft'}`}>{subtitle}</p>
      ) : null}
      <PriceTag price={price} fromLabel={labels.fromLabel} popular={popular} />
      <p className={`mt-2 font-mono text-xs uppercase tracking-wider ${popular ? 'text-white/70' : 'text-soft'}`}>
        {labels.timelinePrefix} {cadence}
      </p>
      <p className={`mt-4 text-sm leading-6 ${popular ? 'text-white/85' : 'text-soft'}`}>{blurb}</p>

      <ul className={`mt-6 space-y-2.5 border-t-2 pt-6 ${popular ? 'border-white/25' : 'border-ink/15'}`}>
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6">
            <Check
              className={`mt-0.5 h-4 w-4 flex-none ${popular ? 'text-lime' : 'text-cobalt'}`}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <a
          href="#contact"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f] ${
            popular ? 'bg-lime text-ink' : 'bg-cobalt text-white'
          }`}
        >
          {labels.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default function Packages() {
  const { packages } = useContent();
  return (
    <section id="packages" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="(03)"
          eyebrow={packages.eyebrow}
          title={<AccentTitle {...packages.title} />}
          intro={packages.intro}
        />

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.items.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} className="h-full">
              <PackageCard plan={plan} labels={packages} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="flex flex-col items-start gap-5 border-2 border-ink bg-lilac p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center border-2 border-ink bg-paper">
                <Sparkles className="h-5 w-5 text-cobalt" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold">{packages.custom.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-soft">{packages.custom.note}</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex flex-none items-center gap-2 rounded-full border-2 border-ink bg-cobalt px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]"
            >
              {packages.custom.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import {
  Accessibility,
  Clapperboard,
  Code2,
  Gauge,
  Palette,
  PenTool,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { useContent } from '../i18n.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading, { AccentTitle } from './SectionHeading.jsx';

const icons = {
  PenTool,
  Code2,
  ShoppingBag,
  Clapperboard,
  Palette,
  Gauge,
  Accessibility,
  RefreshCw,
  ShieldCheck,
};

export default function Services() {
  const { services } = useContent();
  return (
    <section id="services" className="scroll-mt-24 border-y-2 border-ink bg-paper-2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="(02)"
          eyebrow={services.eyebrow}
          title={<AccentTitle {...services.title} />}
          intro={services.intro}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.name}
                delay={(index % 3) * 70}
                className="group h-full border-2 border-ink bg-paper p-6 transition duration-200 hover:-translate-y-1 hover:bg-lilac"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-lime">
                    {Icon ? <Icon className="h-5 w-5 text-ink" aria-hidden="true" /> : null}
                  </span>
                  <span className="font-mono text-xs text-ink/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{service.name}</h3>
                <p className="mt-2 text-sm leading-6 text-soft">{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

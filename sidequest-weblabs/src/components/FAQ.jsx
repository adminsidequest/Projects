import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import SectionHeading, { AccentTitle } from './SectionHeading.jsx';

export default function FAQ() {
  const { faq } = useContent();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-y-2 border-ink bg-paper-2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          center
          number="(06)"
          eyebrow={faq.eyebrow}
          title={<AccentTitle {...faq.title} />}
          className="mx-auto"
        />

        <div className="mt-12 border-t-2 border-ink">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={item.q} className="border-b-2 border-ink">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-cobalt">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-extrabold">{item.q}</span>
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center border-2 border-ink transition duration-300 ${
                      isOpen ? 'rotate-45 bg-cobalt text-white' : 'bg-paper text-ink'
                    }`}
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-9 text-sm leading-7 text-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

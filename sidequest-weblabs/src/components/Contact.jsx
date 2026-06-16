import { Clock, Mail, MapPin } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import ContactForm from './ContactForm.jsx';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';
import { AccentTitle } from './SectionHeading.jsx';

const iconByKind = { email: Mail, time: Clock, place: MapPin };

export default function Contact() {
  const { contact, contactInfo } = useContent();
  const details = contact.details.map((detail) =>
    detail.kind === 'email'
      ? { ...detail, value: contactInfo.email, href: `mailto:${contactInfo.email}` }
      : detail,
  );

  return (
    <section id="contact" className="scroll-mt-24 border-t-2 border-ink bg-paper-2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <Eyebrow number="(08)">{contact.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              <AccentTitle {...contact.title} />
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-soft">{contact.intro}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            {details.map(({ kind, label, value, href }) => {
              const Icon = iconByKind[kind] ?? Mail;
              const inner = (
                <>
                  <span className="flex h-11 w-11 flex-none items-center justify-center border-2 border-ink bg-lime">
                    <Icon className="h-5 w-5 text-ink" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-ink/50">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-bold text-ink">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 border-2 border-ink bg-paper p-4 transition hover:bg-lilac"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 border-2 border-ink bg-paper p-4">
                  {inner}
                </div>
              );
            })}

            <div className="border-2 border-ink bg-cobalt p-5 text-white">
              <p className="text-sm leading-6">{contact.note}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

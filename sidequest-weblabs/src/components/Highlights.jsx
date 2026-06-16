import { useContent } from '../i18n.jsx';
import Reveal from './Reveal.jsx';

const fills = ['bg-cobalt text-white', 'bg-flare text-white', 'bg-lime text-ink', 'bg-paper text-ink'];
const labelTone = ['text-white/80', 'text-white', 'text-ink/70', 'text-soft'];

export default function Highlights() {
  const { highlights } = useContent();
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 80}
            className={`border-2 border-ink p-6 shadow-[6px_6px_0_0_#16150f] ${fills[index % 4]}`}
          >
            <p className="font-display text-4xl font-extrabold sm:text-5xl">{item.value}</p>
            <p className={`mt-3 text-sm leading-6 ${labelTone[index % 4]}`}>{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import Button from './Button.jsx';
import Magnetic from './Magnetic.jsx';
import Reveal from './Reveal.jsx';
import Scramble from './Scramble.jsx';
import ShaderPanel from './ShaderPanel.jsx';

export default function Hero() {
  const { hero } = useContent();
  const h = hero.headline;
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_0.55fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wider">
                <span className="h-2 w-2 animate-pulse bg-cobalt" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {h.pre}
                <span className="mark">{h.mark}</span>
                {h.mid}{' '}
                <span className="block sm:inline">
                  {h.nowPre}
                  <span className="accent text-cobalt">
                    <Scramble text={h.accent} />
                  </span>
                  {h.post}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-7 text-soft sm:text-xl">{hero.sub}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Magnetic>
                  <Button href="#contact" className="px-7 py-3.5 text-base">
                    {hero.ctaPrimary}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button href="#work" variant="ghost" className="px-7 py-3.5 text-base">
                    {hero.ctaSecondary}
                  </Button>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink/60">
                {hero.proofs.map((proof) => (
                  <span key={proof} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 flex-none text-cobalt" aria-hidden="true" />
                    {proof}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} variant="zoom" className="hidden lg:block">
            <div className="relative">
              <ShaderPanel caption={hero.shaderCaption} />
              <div className="absolute -bottom-9 -left-9 h-28 w-28">
                <svg className="spin-slow h-full w-full" viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <path id="stickerPath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                  </defs>
                  <circle cx="100" cy="100" r="94" fill="#16150f" />
                  <text className="fill-paper font-mono text-[12px] font-bold uppercase tracking-[0.16em]">
                    <textPath href="#stickerPath">{hero.stickerText}</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-paper bg-lime">
                    <Sparkles className="h-5 w-5 text-ink" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

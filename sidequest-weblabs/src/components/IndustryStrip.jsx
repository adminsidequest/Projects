import { useEffect, useRef } from 'react';
import { useContent } from '../i18n.jsx';

// Bold high-contrast marquee band. The list is duplicated so the -50% translate
// loops seamlessly, and the whole track skews with scroll momentum.
export default function IndustryStrip() {
  const { industries, industriesEyebrow } = useContent();
  const loop = [...industries, ...industries];
  const skewRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let skew = 0;
    let raf = 0;

    const decay = () => {
      skew *= 0.88;
      const el = skewRef.current;
      if (el) el.style.transform = `skewX(${skew.toFixed(2)}deg)`;
      if (Math.abs(skew) > 0.05) {
        raf = requestAnimationFrame(decay);
      } else {
        if (el) el.style.transform = 'skewX(0deg)';
        raf = 0;
      }
    };
    const onScroll = () => {
      const y = window.scrollY;
      const now = performance.now();
      const dt = Math.max(16, now - lastT);
      const velocity = (y - lastY) / dt;
      skew = Math.max(-9, Math.min(9, velocity * 6));
      lastY = y;
      lastT = now;
      if (!raf) raf = requestAnimationFrame(decay);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="border-y-2 border-ink bg-ink py-5 text-paper">
      <p className="sr-only">{`${industriesEyebrow}: ${industries.join(', ')}`}</p>
      <div className="marquee-mask overflow-hidden" aria-hidden="true">
        <div ref={skewRef} className="will-change-transform">
          <div className="marquee-track items-center gap-8 pr-8">
            {loop.map((name, index) => (
              <span key={`${name}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                  {name}
                </span>
                <span className="text-2xl text-lime" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], [data-cursor], input, textarea, select, summary';

// A custom cursor that smoothly trails the pointer, inverts against any
// background (mix-blend-difference), and morphs into a labelled disc over
// interactive elements. Desktop, non-reduced-motion only.
export default function Cursor() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return undefined;

    const dot = ref.current;
    if (!dot) return undefined;

    document.documentElement.classList.add('has-custom-cursor');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      dot.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    const onOver = (event) => {
      const hit = event.target.closest?.(INTERACTIVE);
      if (hit) {
        setActive(true);
        setLabel(hit.getAttribute('data-cursor') || '');
      }
    };
    const onOut = (event) => {
      if (event.target.closest?.(INTERACTIVE)) {
        setActive(false);
        setLabel('');
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block">
      <div
        className={`flex items-center justify-center rounded-full transition-[width,height,background-color] duration-200 ease-out ${
          active ? 'h-14 w-14 bg-cobalt text-white' : 'h-3 w-3 bg-white mix-blend-difference'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {active && label ? (
          <span className="font-mono text-[10px] font-bold uppercase tracking-wide">{label}</span>
        ) : null}
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}=+*^?#%';

// Decodes text from random glyphs on mount, and re-scrambles on hover.
// Honors reduced motion by rendering the final text immediately.
export default function Scramble({ text, className = '' }) {
  const [display, setDisplay] = useState(text);
  const raf = useRef(0);

  const run = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return;
    }
    cancelAnimationFrame(raf.current);
    let iteration = 0;
    const tick = () => {
      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' ';
            return i < iteration ? text[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(''),
      );
      iteration += 1 / 3;
      if (iteration < text.length) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    run();
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className} onMouseEnter={run}>
      {display}
    </span>
  );
}

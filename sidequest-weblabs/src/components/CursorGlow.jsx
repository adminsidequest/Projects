import { useEffect, useRef } from 'react';

// Soft violet light that follows the cursor on fine-pointer (desktop) devices.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    let raf = 0;
    const move = (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        el.style.opacity = '1';
      });
    };
    const hide = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseleave', hide);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}

import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

// Renders a heading string split into { pre, accent, post }, with the accent
// word in the serif cobalt style.
export function AccentTitle({ pre, accent, post, accentClass = 'text-cobalt' }) {
  return (
    <>
      {pre}
      <span className={`accent ${accentClass}`}>{accent}</span>
      {post}
    </>
  );
}

// Shared section header: mono eyebrow, oversized display title, optional intro.
// `title` and `intro` accept rich nodes so headlines can include serif accents.
export default function SectionHeading({
  eyebrow,
  number,
  title,
  intro,
  center = false,
  className = '',
}) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? (
        <Eyebrow number={number} className={center ? 'justify-center' : ''}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl lg:text-6xl">{title}</h2>
      {intro ? <p className="mt-5 max-w-2xl text-lg leading-7 text-soft">{intro}</p> : null}
    </Reveal>
  );
}

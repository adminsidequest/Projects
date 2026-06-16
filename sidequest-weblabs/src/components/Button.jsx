// Shared call-to-action with a hard offset shadow that presses on hover.
// variant: 'primary' (cobalt), 'lime', or 'ghost' (outline).
const VARIANTS = {
  primary:
    'bg-cobalt text-white border-2 border-ink shadow-[4px_4px_0_0_#16150f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]',
  lime:
    'bg-lime text-ink border-2 border-ink shadow-[4px_4px_0_0_#16150f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f]',
  ghost: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper',
};

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-150 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

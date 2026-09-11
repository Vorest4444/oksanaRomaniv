interface SectionEyebrowProps {
  children: string;
  className?: string;
  align?: 'start' | 'center';
}

/** The "/ label /" caption that sits above every section title in the design. */
export function SectionEyebrow({
  children,
  className = 'text-brand-teal',
  align = 'start',
}: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-1 font-sans text-[12px] xl:text-[14px] font-normal uppercase leading-none ${
        align === 'center' ? 'justify-center' : ''
      } ${className}`}
    >
      <span>/</span>
      <span>{children}</span>
      <span>/</span>
    </div>
  );
}

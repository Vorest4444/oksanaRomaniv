import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';

type CtaVariant = 'primary' | 'secondary';

interface CtaButtonProps {
  href: string;
  label: string;
  variant?: CtaVariant;
  /** Dark sections need a light outline instead of the default dark one. */
  tone?: 'dark' | 'light';
  fullWidth?: boolean;
  className?: string;
}

export function CtaButton({
  href,
  label,
  variant = 'primary',
  tone = 'dark',
  fullWidth = false,
  className = '',
}: CtaButtonProps) {
  const base =
    'inline-flex h-[52px] xl:h-14 items-center justify-center gap-2.5 rounded-full px-6 font-sans text-[16px] font-medium leading-none transition-opacity duration-200 hover:opacity-90';

  const styles =
    variant === 'primary'
      ? 'bg-brand-button text-brand-lime'
      : tone === 'light'
        ? 'border border-brand-lime text-brand-lime hover:bg-brand-lime/10 hover:opacity-100'
        : 'border border-brand-dark text-brand-dark hover:bg-brand-dark/5 hover:opacity-100';

  const arrowColor =
    variant === 'primary' ? '#EBFFB1' : tone === 'light' ? '#EBFFB1' : '#122F35';

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
    >
      <span>{label}</span>
      <ArrowIcon color={arrowColor} />
    </Link>
  );
}

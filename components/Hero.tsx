import Link from 'next/link';
import Image from 'next/image';
import { heroConfig } from '@/config/hero';
import { ArrowIcon } from '@/components/icons';

function Eyebrow({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 uppercase tracking-wide ${className ?? ''}`}>
      <span>/</span>
      <span>{heroConfig.eyebrow}</span>
      <span>/</span>
    </div>
  );
}

function Title({ className }: { className?: string }) {
  const [first, highlight, rest] = heroConfig.titleParts;

  return (
    <h1 className={className}>
      {first}{' '}
      <span className="italic">{highlight}</span>{' '}
      {rest}
    </h1>
  );
}

function Description({ className }: { className?: string }) {
  return <p className={className}>{heroConfig.description}</p>;
}

function PrimaryButton({ className }: { className?: string }) {
  return (
    <Link
      href={heroConfig.primaryCta.href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-green font-medium text-brand-lime transition-opacity duration-200 hover:opacity-90 ${className ?? ''}`}
    >
      <span>{heroConfig.primaryCta.label}</span>
      <ArrowIcon color="#EBFFB1" />
    </Link>
  );
}

function SecondaryButton({ className }: { className?: string }) {
  return (
    <Link
      href={heroConfig.secondaryCta.href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border border-brand-dark font-medium text-brand-dark transition-colors duration-200 hover:bg-brand-dark/5 ${className ?? ''}`}
    >
      <span>{heroConfig.secondaryCta.label}</span>
      <ArrowIcon color="#122F35" />
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-3.5 text-[14px] uppercase tracking-wide text-[#104447]">
      {heroConfig.socialLinks.map((link, index) => (
        <span key={link.label} className="flex items-center gap-3.5">
          {index > 0 && <span className="text-[#104447]/40">/</span>}
          <Link href={link.href} className="transition-opacity duration-200 hover:opacity-70">
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  );
}

function MobileHero() {
  return (
    <section className="relative h-[calc(100dvh-76px)] min-h-[640px] overflow-hidden xl:hidden">
      <Image
        src={heroConfig.mobileImage.src}
        alt={heroConfig.mobileImage.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-top"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[65%]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%]"
        style={{
          background: 'linear-gradient(180deg, rgba(189,196,191,0) 0%, rgba(189,196,191,0.85) 100%)',
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-4 pb-5 pt-8">
        <div className="flex max-w-[343px] flex-col gap-4">
          <Eyebrow className="text-[12px] text-brand-green" />
          <Title className="text-[42px] font-medium leading-[100%] tracking-[0.01em] text-brand-dark" />
          <Description className="text-[14px] leading-[130%] tracking-[-0.02em] text-black/60" />
        </div>

        <div className="flex flex-col gap-2.5">
          <PrimaryButton className="h-[52px] w-full px-4 text-[16px]" />
          <SecondaryButton className="h-[52px] w-full px-4 text-[16px]" />
        </div>
      </div>
    </section>
  );
}

function DesktopHero() {
  return (
    <section className="relative hidden h-[993px] overflow-hidden xl:block">
      <Image
        src={heroConfig.image.src}
        alt={heroConfig.image.alt}
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-right object-top"
      />

      <div className="relative z-10 h-full px-[72px]">
        <div className="flex h-full flex-col justify-between pb-16 pt-[290px]">
          <div className="flex w-[696px] flex-col gap-[60px]">
            <div className="flex flex-col gap-8">
              <Eyebrow className="text-[14px] text-brand-green" />
              <Title className="text-[72px] font-medium leading-[100%] tracking-[-0.01em] text-brand-dark" />
              <Description className="max-w-[685px] text-[18px] leading-[130%] tracking-[-0.02em] text-black/60" />
            </div>

            <div className="flex flex-row gap-6">
              <PrimaryButton className="h-14 w-auto px-6 text-[14px]" />
              <SecondaryButton className="h-14 w-auto px-6 py-[18px] pr-4 text-[14px]" />
            </div>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}

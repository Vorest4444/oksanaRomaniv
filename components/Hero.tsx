import Link from 'next/link';
import Image from 'next/image';
import { heroConfig } from '@/config/hero';
import { ArrowIcon } from '@/components/icons';

function Eyebrow() {
  return (
    <div className="flex items-center gap-1 text-[14px] text-brand-green uppercase tracking-wide">
      <span>/</span>
      <span>{heroConfig.eyebrow}</span>
      <span>/</span>
    </div>
  );
}

function Title() {
  const [first, highlight, rest] = heroConfig.titleParts;

  return (
    <h1 className="text-[40px] xl:text-[72px] font-medium leading-[100%] tracking-[-0.01em] text-brand-dark">
      {first}{' '}
      <span className="italic">{highlight}</span>{' '}
      {rest}
    </h1>
  );
}

function Description() {
  return (
    <p className="text-[16px] xl:text-[18px] leading-[130%] tracking-[-0.02em] text-black/60 max-w-[685px]">
      {heroConfig.description}
    </p>
  );
}

function PrimaryButton() {
  return (
    <Link
      href={heroConfig.primaryCta.href}
      className="inline-flex w-full xl:w-auto items-center justify-center gap-2.5 h-14 px-6 py-4 bg-brand-green text-brand-lime rounded-full text-[14px] font-medium transition-opacity duration-200 hover:opacity-90"
    >
      <span>{heroConfig.primaryCta.label}</span>
      <ArrowIcon color="#EBFFB1" />
    </Link>
  );
}

function SecondaryButton() {
  return (
    <Link
      href={heroConfig.secondaryCta.href}
      className="inline-flex w-full xl:w-auto items-center justify-center gap-2.5 h-14 pl-6 pr-4 py-[18px] border border-brand-dark text-brand-dark rounded-full text-[14px] font-medium transition-colors duration-200 hover:bg-brand-dark/5"
    >
      <span>{heroConfig.secondaryCta.label}</span>
      <ArrowIcon color="#122F35" />
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-3.5 text-[14px] text-[#104447] uppercase tracking-wide">
      {heroConfig.socialLinks.map((link, index) => (
        <span key={link.label} className="flex items-center gap-3.5">
          {index > 0 && <span className="text-[#104447]/40">/</span>}
          <Link
            href={link.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[600px] xl:h-[993px] overflow-hidden">
      <Image
        src={heroConfig.image.src}
        alt={heroConfig.image.alt}
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-right object-top"
      />

      <div className="relative z-10 h-full px-5 xl:px-[72px] 2xl:px-[72px]">
        <div className="flex flex-col justify-between h-full pt-10 pb-10 xl:pt-[290px] xl:pb-16">
          <div className="flex flex-col gap-[60px] w-full xl:w-[696px]">
            <div className="flex flex-col gap-8">
              <Eyebrow />
              <Title />
              <Description />
            </div>

            <div className="flex flex-col gap-4 xl:flex-row xl:gap-6">
              <PrimaryButton />
              <SecondaryButton />
            </div>
          </div>

          <div className="pt-10 xl:pt-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

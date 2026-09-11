import Image from 'next/image';
import { Container, CtaButton, MixedTitle } from '@/components/ui';
import { closingCtaConfig } from '@/config/closingCta';

export function ClosingCta() {
  const { photo, titleSegments, primary, secondary } = closingCtaConfig;

  return (
    <section className="relative min-h-[420px] overflow-hidden xl:h-[800px]">
      <Image
        src={photo.src}
        alt=""
        width={1536}
        height={853}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right object-top"
      />
      <Container className="relative py-20 xl:py-[258px]">
        <div className="flex max-w-[681px] flex-col gap-8 xl:gap-[60px]">
          <MixedTitle
            segments={titleSegments}
            className="font-sans text-[32px] xl:text-[56px] font-normal leading-none tracking-[-0.01em] text-brand-dark"
            italicClassName="font-medium text-brand-green-80"
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <CtaButton href={primary.href} label={primary.label} className="!bg-[#0F3F42]" />
            <CtaButton href={secondary.href} label={secondary.label} variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
}

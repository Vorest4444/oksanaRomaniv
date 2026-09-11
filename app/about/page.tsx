import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ClosingCta } from '@/components/ClosingCta';
import { Container, CtaButton, MixedTitle, SectionEyebrow } from '@/components/ui';
import {
  StepIcon,
  PlantIcon,
  PersonIcon,
  WorldIcon,
  UsersIcon,
  BriefcaseIcon,
  HandHeartIcon,
  CompassIcon,
} from '@/components/icons/DesignIcons';
import { aboutConfig } from '@/config/about';

export const metadata: Metadata = {
  title: 'Про мене — Оксана Романів',
  description: aboutConfig.hero.description,
};

const manifestoIcons = {
  step: StepIcon,
  plant: PlantIcon,
  person: PersonIcon,
  world: WorldIcon,
} as const;

const journeyIcons = {
  users: UsersIcon,
  briefcase: BriefcaseIcon,
  handHeart: HandHeartIcon,
  compass: CompassIcon,
} as const;

function Hero() {
  const { hero } = aboutConfig;

  return (
    <section className="bg-white pt-[120px] xl:pt-[200px] pb-10 xl:pb-[60px]">
      <div className="flex flex-col gap-10 xl:gap-[72px]">
        <Container>
          <div className="mx-auto flex max-w-[868px] flex-col items-center gap-6 xl:gap-8 text-center">
            <MixedTitle
              as="h1"
              segments={hero.titleSegments}
              className="font-heading text-[32px] xl:text-[56px] font-medium leading-none tracking-[0.01em] text-[#0F3F42]"
            />
            <p className="max-w-[526px] font-inter text-[14px] xl:text-[16px] font-normal leading-[1.3] tracking-[-0.02em] text-brand-dark/80">
              {hero.description}
            </p>
          </div>
        </Container>

        <ul className="flex justify-center gap-3 overflow-hidden px-4 xl:px-0">
          {hero.photos.map((photo) => (
            <li
              key={photo.src}
              className="relative h-[220px] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl xl:h-[500px] xl:w-[500px] xl:rounded-[32px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-top"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-brand-green py-20 xl:py-[250px]">
      <Container>
        <div className="mx-auto flex max-w-[455px] flex-col gap-4 xl:gap-5">
          {aboutConfig.manifesto.lines.map((line, index) => {
            const Icon = manifestoIcons[line.icon];
            return (
              <p
                key={index}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 font-inter text-[18px] xl:text-[24px] leading-[1.5] tracking-[-0.02em] text-brand-lime/60"
              >
                {line.highlight && (
                  <span className="font-medium text-brand-lime">{line.highlight}</span>
                )}
                {line.rest && <span>{line.rest.trim()}</span>}
                <Icon size={28} className="flex-shrink-0 text-brand-lime" />
                {line.tail && <span>{line.tail}</span>}
              </p>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Story() {
  const { story } = aboutConfig;

  return (
    <section className="bg-neutral-100 py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-[60px]">
          <div className="relative aspect-[634/600] w-full overflow-hidden rounded-2xl xl:h-[600px] xl:w-[634px] xl:flex-shrink-0 xl:rounded-[32px]">
            <Image
              src={story.photo.src}
              alt={story.photo.alt}
              width={1268}
              height={1200}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-8 xl:gap-12">
            <div className="flex flex-col gap-4 xl:gap-[21px]">
              <SectionEyebrow className="text-[#0F3F42]">{story.eyebrow}</SectionEyebrow>
              <MixedTitle
                segments={story.titleSegments}
                className="font-heading text-[32px] xl:text-[56px] font-medium leading-[0.9] tracking-[-0.01em] text-brand-deep"
              />
            </div>

            <div className="flex flex-col gap-6">
              {story.leadParagraphs.map((text) => (
                <p
                  key={text}
                  className="font-inter text-[16px] xl:text-[18px] font-medium leading-[1.5] tracking-[-0.02em] text-[#0F3F42]"
                >
                  {text}
                </p>
              ))}
              {story.paragraphs.map((text) => (
                <p
                  key={text}
                  className="font-inter text-[16px] xl:text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-brand-teal/60"
                >
                  {text}
                </p>
              ))}
            </div>

            <CtaButton
              href={story.cta.href}
              label={story.cta.label}
              className="self-start !bg-[#0F3F42]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Journey() {
  const { journey } = aboutConfig;

  return (
    <section className="bg-neutral-100 pb-16 xl:pb-24">
      <Container>
        <div className="flex flex-col gap-10 xl:gap-[60px]">
          <div className="flex flex-col gap-4 xl:gap-[21px]">
            <SectionEyebrow className="text-[#0F3F42]">{journey.eyebrow}</SectionEyebrow>
            <MixedTitle
              segments={journey.titleSegments}
              className="font-heading text-[32px] xl:text-[56px] font-medium leading-[0.9] tracking-[-0.01em] text-brand-deep"
            />
          </div>

          <ul className="mx-auto grid w-full max-w-[966px] gap-6 md:grid-cols-2">
            {journey.items.map((item) => {
              const Icon = journeyIcons[item.icon];
              return (
                <li
                  key={item.number}
                  className="flex flex-col justify-center gap-8 rounded-2xl border border-brand-teal/10 bg-white p-6 xl:gap-12"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={56} className="text-brand-green-70" />
                    <span className="font-inter text-[18px] font-normal leading-none tracking-[0.01em] text-brand-button/50">
                      {item.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 xl:gap-[26px]">
                    <h3 className="font-playfair text-[24px] font-medium italic leading-[0.9] tracking-[0.01em] text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[16px] font-light leading-[1.3] tracking-[-0.02em] text-brand-deep/70">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Story />
        <Journey />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

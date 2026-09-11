import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FaqAccordion } from '@/components/FaqAccordion';
import { ContactForm } from '@/components/ContactForm';
import { Container, MixedTitle, SectionEyebrow } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { YoutubeIcon, TelegramIcon, InstagramBrandIcon } from '@/components/icons/DesignIcons';
import { contactsConfig } from '@/config/contacts';

export const metadata: Metadata = {
  title: 'Контакти — Оксана Романів',
  description: contactsConfig.form.description,
};

const channelIcons = {
  youtube: YoutubeIcon,
  telegram: TelegramIcon,
  instagram: InstagramBrandIcon,
} as const;

function ContactPhoto() {
  const { photo, details } = contactsConfig.hero;

  return (
    <div className="relative overflow-hidden rounded-[32px] xl:h-[772px] xl:w-[636px] xl:flex-shrink-0">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1272}
        height={1544}
        className="h-full w-full object-cover object-top"
      />
      <ul className="absolute inset-x-4 bottom-4 flex flex-col gap-4 rounded-[20px] bg-brand-lime p-6 sm:flex-row sm:gap-4 xl:inset-x-6 xl:bottom-6">
        {details.map((detail) => (
          <li key={detail.label} className="flex flex-1 flex-col gap-2">
            <span className="font-inter text-[14px] font-normal leading-none tracking-[-0.01em] text-brand-green/70">
              {detail.label}
            </span>
            <a
              href={detail.href}
              className="font-heading text-[18px] font-medium leading-none tracking-[-0.01em] text-brand-green transition-opacity duration-200 hover:opacity-70"
            >
              {detail.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactIntro() {
  const { titleSegments, description } = contactsConfig.form;

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-col gap-6">
        <MixedTitle
          as="h1"
          segments={titleSegments}
          className="font-heading text-[32px] xl:text-[56px] font-medium leading-none tracking-[0.01em] text-brand-green-80"
          italicClassName="!font-normal"
        />
        <p className="font-inter text-[16px] font-normal leading-[1.3] tracking-[-0.02em] text-brand-dark/80">
          {description}
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

function SocialChannels() {
  const { titleSegments, channels, ctaLabel } = contactsConfig.social;

  return (
    <section className="py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-8 xl:gap-[60px]">
          <MixedTitle
            segments={titleSegments}
            className="text-center font-heading text-[32px] xl:text-[56px] font-medium leading-none tracking-[-0.01em] text-brand-dark"
            italicClassName="!font-normal"
          />

          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.icon];
              return (
                <li
                  key={channel.name}
                  className="flex flex-col justify-between gap-8 rounded-3xl bg-brand-green-50 p-6 xl:p-8"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-heading text-[24px] xl:text-[32px] font-medium leading-none tracking-[-0.01em] text-brand-dark">
                        {channel.name}
                      </h3>
                      <Icon size={64} className="flex-shrink-0 text-brand-dark" />
                    </div>
                    <p className="font-inter text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-brand-dark/80">
                      {channel.description}
                    </p>
                  </div>

                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-brand-dark px-6 font-sans text-[16px] font-medium text-brand-dark transition-colors duration-200 hover:bg-brand-dark/5"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowIcon color="#122F35" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  const { eyebrow, titleSegments, items } = contactsConfig.faq;

  return (
    <section className="pb-16 xl:pb-24">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-[78px]">
          <div className="flex flex-col gap-4 xl:w-[471px] xl:flex-shrink-0 xl:gap-[21px]">
            <SectionEyebrow className="text-brand-teal">{eyebrow}</SectionEyebrow>
            <MixedTitle
              segments={titleSegments}
              className="font-heading text-[32px] xl:text-[56px] font-medium leading-[0.9] tracking-[-0.01em] text-brand-deep"
              italicClassName="!font-normal"
            />
          </div>
          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="pt-[110px] xl:pt-[164px]">
          <Container>
            <div className="flex flex-col gap-8 xl:flex-row xl:gap-[132px]">
              <ContactPhoto />
              <ContactIntro />
            </div>
          </Container>
        </section>

        <SocialChannels />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

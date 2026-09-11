import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { OfferLeadForm } from '@/components/OfferLeadForm';
import { Container, CtaButton, MixedTitle, SectionEyebrow } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { CursorClickIcon, CardIcon, MailIcon, CheckReadIcon } from '@/components/icons/DesignIcons';
import { routes } from '@/config/navigation';
import type {
  Offer,
  OfferBlock,
  OfferBlockItem,
  OfferSection,
  StepIconName,
} from '@/config/offers/types';

const stepIcons: Record<StepIconName, typeof MailIcon> = {
  cursorClick: CursorClickIcon,
  card: CardIcon,
  mail: MailIcon,
  checkRead: CheckReadIcon,
};

const bodyClass =
  'font-inter text-[16px] font-normal leading-[1.3] tracking-[-0.02em] text-brand-dark/80';

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span aria-hidden="true" className="mt-[10px] h-px w-6 flex-shrink-0 bg-brand-dark/50" />
          <span className={bodyClass}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function Section({ section }: { section: OfferSection }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-[20px] xl:text-[24px] font-medium leading-none tracking-[-0.01em] text-brand-dark">
        {section.title}
      </h2>

      <div className="flex flex-col gap-4">
        {section.lead?.map((text) => (
          <p
            key={text}
            className="font-inter text-[16px] font-medium leading-[1.5] tracking-[-0.02em] text-brand-dark"
          >
            {text}
          </p>
        ))}
        {section.list && <BulletList items={section.list} />}
        {section.body?.map((text) => (
          <p key={text} className={bodyClass}>
            {text}
          </p>
        ))}

        {section.people && (
          <ul className="flex flex-col gap-6">
            {section.people.map((person) => (
              <li key={person.name} className="flex items-center gap-4">
                {person.avatar ? (
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={144}
                    height={144}
                    className="h-[72px] w-[72px] flex-shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-brand-green-60 font-inter text-[18px] font-medium text-brand-deep">
                    {initials(person.name)}
                  </span>
                )}
                <div className="flex flex-col gap-2">
                  <span className="font-inter text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-brand-deep">
                    {person.name}
                  </span>
                  <span className="font-inter text-[14px] font-medium leading-[1.3] tracking-[-0.01em] text-brand-deep/60">
                    {person.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function BlockItem({ item }: { item: OfferBlockItem }) {
  const Icon = item.icon ? stepIcons[item.icon] : null;

  const content = (
    <div className="flex flex-col gap-3">
      {item.label && (
        <span className="font-heading text-[14px] font-medium leading-none tracking-[-0.01em] text-brand-green-80">
          {item.label}
        </span>
      )}
      {item.title && (
        <h3 className="font-heading text-[18px] font-medium leading-none tracking-[-0.01em] text-brand-dark">
          {item.title}
        </h3>
      )}
      {item.intro && <p className={bodyClass}>{item.intro}</p>}
      {item.list && <BulletList items={item.list} />}
      {item.text && (
        <p className="font-inter text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-brand-dark">
          {item.text}
        </p>
      )}
      {item.outro && <p className={bodyClass}>{item.outro}</p>}
    </div>
  );

  if (!Icon) return content;

  return (
    <div className="flex items-center gap-6">
      <Icon size={32} className="flex-shrink-0 text-brand-dark" />
      {content}
    </div>
  );
}

function SidebarBlock({ block }: { block: OfferBlock }) {
  return (
    <div className="flex flex-col gap-6">
      <SectionEyebrow className="text-[#0F3F42]">{block.eyebrow}</SectionEyebrow>
      <div className="flex flex-col gap-6">
        {block.items.map((item, index) => (
          <BlockItem key={item.title ?? item.label ?? index} item={item} />
        ))}
      </div>
    </div>
  );
}

function Sidebar({ sidebar }: { sidebar: Offer['sidebar'] }) {
  return (
    <aside className="flex flex-col gap-8 rounded-2xl bg-brand-green-50 p-6 xl:gap-12 xl:p-8">
      {sidebar.blocks.map((block, index) => (
        <div key={block.eyebrow} className="flex flex-col gap-8 xl:gap-12">
          {index > 0 && <hr className="border-brand-green-70" />}
          <SidebarBlock block={block} />
        </div>
      ))}

      <div className="flex flex-col gap-6">
        {sidebar.note && (
          <p className="font-inter text-[14px] font-normal leading-[1.3] tracking-[-0.02em] text-brand-dark/60">
            {sidebar.note}
          </p>
        )}

        {sidebar.price && (
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-sans text-[18px] font-normal leading-[0.9] tracking-[-0.01em] text-brand-teal/80">
                {sidebar.price.label ?? 'Ціна:'}
              </span>
              {sidebar.price.original && (
                <span className="font-playfair text-[20px] font-bold italic leading-none tracking-[0.01em] text-brand-dark/30 line-through">
                  {sidebar.price.original}
                </span>
              )}
            </div>
            <span className="font-playfair text-[20px] font-bold italic leading-none tracking-[0.01em] text-brand-dark">
              {sidebar.price.current}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {sidebar.ctas.map((cta) => (
            <CtaButton
              key={cta.href}
              href={cta.href}
              label={cta.label}
              variant={cta.variant ?? 'primary'}
              className={`flex-1 ${cta.variant === 'secondary' ? '' : '!bg-brand-green'}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export function OfferPage({ offer }: { offer: Offer }) {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="pt-[110px] xl:pt-[204px]">
          <Container>
            <div className="flex flex-col gap-6">
              <Link
                href={routes.products}
                className="inline-flex w-fit items-center gap-4 font-sans text-[16px] font-medium text-brand-dark transition-opacity duration-200 hover:opacity-70"
              >
                <ArrowIcon className="rotate-180" color="currentColor" />
                <span>Назад до всіх продуктів</span>
              </Link>

              <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between xl:gap-[168px]">
                <MixedTitle
                  as="h1"
                  segments={offer.titleSegments}
                  className="max-w-[713px] font-heading text-[32px] xl:text-[56px] font-medium leading-none tracking-[-0.01em] text-brand-dark"
                  italicClassName="!font-normal"
                />
                <div className="flex max-w-[430px] flex-col gap-4">
                  <p className={bodyClass}>{offer.description}</p>
                  <ul className="flex flex-wrap items-center gap-2">
                    {offer.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-[20px] bg-brand-lime-soft px-3 py-2 font-inter text-[14px] font-normal leading-[1.3] tracking-[-0.01em] text-brand-deep"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-10 xl:pt-12">
          <Container>
            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="overflow-hidden rounded-2xl xl:h-[600px] xl:w-[857px] xl:rounded-[32px]">
                <Image
                  src={offer.photos.wide.src}
                  alt={offer.photos.wide.alt}
                  width={1714}
                  height={1200}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="overflow-hidden rounded-2xl xl:h-[600px] xl:flex-1 xl:rounded-[32px]">
                <Image
                  src={offer.photos.tall.src}
                  alt={offer.photos.tall.alt}
                  width={832}
                  height={1200}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 xl:py-24">
          <Container>
            <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-[126px]">
              <div className="flex flex-col gap-10 xl:max-w-[645px] xl:gap-12">
                {offer.sections.map((section) => (
                  <Section key={section.title} section={section} />
                ))}
              </div>
              <div className="xl:w-[526px] xl:flex-shrink-0">
                <Sidebar sidebar={offer.sidebar} />
              </div>
            </div>
          </Container>
        </section>

        {offer.band && (
          <section className="pb-16 xl:pb-[120px]">
            <Container>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={offer.band.src}
                  alt={offer.band.alt}
                  width={2592}
                  height={1162}
                  className="aspect-[1296/581] h-full w-full object-cover"
                />
              </div>
            </Container>
          </section>
        )}

        {offer.leadForm && (
          <OfferLeadForm form={offer.leadForm} offerTitle={offer.metaTitle} />
        )}

        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

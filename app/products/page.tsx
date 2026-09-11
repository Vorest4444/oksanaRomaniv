import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ClosingCta } from '@/components/ClosingCta';
import { ClaritySection } from '@/components/ClaritySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Container, CtaButton, MixedTitle } from '@/components/ui';
import { productsPageConfig, type ProductItem } from '@/config/productsPage';

export const metadata: Metadata = {
  title: 'Всі продукти — Оксана Романів',
  description: productsPageConfig.hero.description,
};

function Price({ price }: { price: ProductItem['price'] }) {
  if (!price) return null;

  return (
    <div className="flex items-center gap-[9px]">
      <span className="font-sans text-[18px] font-normal leading-[0.9] tracking-[-0.01em] text-brand-teal/80">
        Ціна:
      </span>
      {'original' in price && price.original && (
        <span className="font-playfair text-[20px] font-bold italic leading-none tracking-[0.01em] text-brand-dark/30 line-through">
          {price.original}
        </span>
      )}
      <span className="font-playfair text-[20px] font-bold italic leading-none tracking-[0.01em] text-brand-dark">
        {price.current}
      </span>
    </div>
  );
}

function ProductCard({ item }: { item: ProductItem }) {
  return (
    <li className="flex flex-col justify-between gap-8 rounded-3xl border border-brand-teal/[0.12] bg-brand-green-50 p-6 xl:p-8">
      <div className="flex flex-col gap-6">
        <p className="font-inter text-[14px] font-normal uppercase leading-[1.3] tracking-[-0.01em] text-brand-deep/70">
          {item.eyebrow}
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="whitespace-pre-line font-heading text-[24px] xl:text-[32px] font-medium leading-none tracking-[-0.01em] text-brand-teal">
            {item.title}
          </h2>

          <ul className="flex flex-wrap items-center gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[20px] bg-brand-lime-soft px-3 py-2 font-inter text-[14px] font-normal leading-[1.3] tracking-[-0.01em] text-brand-deep"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="whitespace-pre-line font-inter text-[16px] font-normal leading-[1.3] tracking-[-0.01em] text-brand-deep/70">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <Price price={item.price} />
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <CtaButton
            href={item.primary.href}
            label={item.primary.label}
            className="flex-1 !bg-brand-green"
          />
          <CtaButton
            href={item.secondary.href}
            label={item.secondary.label}
            variant="secondary"
            className="flex-1"
          />
        </div>
      </div>
    </li>
  );
}

export default function ProductsPage() {
  const { hero, items } = productsPageConfig;

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="pt-[120px] xl:pt-[204px]">
          <Container>
            <div className="mx-auto flex max-w-[868px] flex-col items-center gap-6 xl:gap-8 text-center">
              <MixedTitle
                as="h1"
                segments={hero.titleSegments}
                className="font-heading text-[32px] xl:text-[56px] font-medium leading-none tracking-[0.01em] text-[#0F3F42]"
                italicClassName="!font-normal text-brand-green-80"
              />
              <p className="max-w-[526px] font-inter text-[14px] xl:text-[16px] font-normal leading-[1.3] tracking-[-0.02em] text-brand-dark/80">
                {hero.description}
              </p>
            </div>
          </Container>
        </section>

        <section className="pt-16 xl:pt-[90px]">
          <Container>
            <ul className="grid gap-6 xl:grid-cols-2">
              {items.map((item) => (
                <ProductCard key={item.eyebrow} item={item} />
              ))}
            </ul>
          </Container>
        </section>

        <ClaritySection />
        <TestimonialsSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

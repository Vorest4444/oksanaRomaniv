'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowIcon } from '@/components/icons';
import { productsConfig } from '@/config/products';
import { routes } from '@/config/navigation';

const CARD_W = 480;
const GAP = 24;
const VIEWPORT_W = 1440;
const LAST_CARD_CENTER = (CARD_W + GAP) * 2 + CARD_W / 2;
const SCROLL_TRANSLATE = LAST_CARD_CENTER - VIEWPORT_W / 2;

const CARD_HREFS = [routes.miniCourse, routes.program, routes.retreat] as const;

type ProductCardItem = (typeof productsConfig.cards)[number];

function ProductCard(props: { card: ProductCardItem; index: number }) {
  const { card, index } = props;
  const hasSecondary = 'secondaryButton' in card && card.secondaryButton;
  const price = 'price' in card ? card.price : null;
  const href = CARD_HREFS[index];

  return (
    <div className="flex w-[min(100%,480px)] flex-shrink-0 flex-col gap-6 rounded-[24px] border border-[rgba(16,68,71,0.12)] bg-[#F4FAF8] p-6 xl:w-[480px] xl:p-8">
      <p className="font-inter text-[14px] font-normal uppercase tracking-wide text-[rgba(6,59,54,0.7)]">
        {card.category}
      </p>
      <h3 className="font-sans text-[24px] xl:text-[32px] font-medium leading-[100%] tracking-[-0.01em] text-[#122F35]">
        {card.title}
      </h3>
      <div className="flex flex-wrap gap-[10px]">
        {card.pills.map((pill, i) => (
          <span
            key={i}
            className="flex h-9 flex-shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] bg-[#EBFFB1] px-3 py-2 font-inter text-[14px] font-normal text-[#194241]"
          >
            {pill}
          </span>
        ))}
      </div>
      <p className="font-inter text-[16px] font-normal leading-[130%] tracking-[-0.01em] text-[rgba(6,59,54,0.7)]">
        {card.description}
      </p>
      {price && 'original' in price && price.original && price.current ? (
        <div className="flex flex-wrap items-baseline gap-2 font-inter text-[16px]">
          <span className="text-[#10444780]">Ціна:</span>
          <span
            className="font-playfair text-[20px] font-bold italic leading-[100%] tracking-[0.01em] text-[#10444780]/70 line-through"
            style={{ fontVariantNumeric: 'lining-nums proportional-nums' }}
          >
            {price.original}
          </span>
          <span
            className="font-playfair text-[20px] font-bold italic leading-[100%] tracking-[0.01em] text-[#122F35]"
            style={{ fontVariantNumeric: 'lining-nums proportional-nums' }}
          >
            {price.current}
          </span>
        </div>
      ) : null}
      {price && 'from' in price && price.from ? (
        <div className="flex flex-wrap items-baseline gap-2 font-inter text-[16px]">
          <span className="text-[#10444780]">Ціна:</span>
          <span
            className="font-playfair text-[20px] font-bold italic leading-[100%] tracking-[0.01em] text-[#122F35]"
            style={{ fontVariantNumeric: 'lining-nums proportional-nums' }}
          >
            {String(price.from)}
          </span>
        </div>
      ) : null}
      <div className="mt-auto flex flex-col gap-3 sm:flex-row">
        <Link
          href={href}
          className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#3E857A] px-6 py-3 font-sans text-[16px] font-medium text-[#EBFFB1]"
        >
          {card.primaryButton}
          <span className="flex h-5 w-5 shrink-0 [&>svg]:h-5 [&>svg]:w-5">
            <ArrowIcon color="#EBFFB1" />
          </span>
        </Link>
        {hasSecondary ? (
          <Link
            href={href}
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#122F35] bg-transparent px-6 py-3 font-sans text-[16px] font-medium text-[#122F35]"
          >
            {card.secondaryButton}
            <span className="flex h-5 w-5 shrink-0 [&>svg]:h-5 [&>svg]:w-5">
              <ArrowIcon color="#122F35" />
            </span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
    layoutEffect: false,
  });

  const cardsX = useTransform(scrollYProgress, [0.4, 0.9], [0, -SCROLL_TRANSLATE]);

  return (
    <section ref={sectionRef} id="products" className="relative w-full h-[200vh]">
      <div
        className="sticky top-[76px] xl:top-[104px] flex h-[calc(100dvh-76px)] xl:h-[calc(100vh-104px)] w-full flex-col items-center overflow-hidden px-4 xl:px-[72px] pt-16 xl:pt-24 pb-24"
      >
        <div className="flex w-full max-w-[1296px] flex-col items-center gap-10 xl:gap-[60px]">
          <div className="flex flex-col items-center gap-[21px] text-center">
            <p className="font-sans text-[14px] font-normal uppercase text-[#10444780]">
              / {productsConfig.eyebrow} /
            </p>
            <h2 className="font-sans text-[32px] xl:text-[56px] font-semibold leading-[90%] tracking-[-0.01em] text-[#122F35]">
              {productsConfig.title}{' '}
              <span className="font-playfair text-[32px] xl:text-[56px] font-medium italic leading-[90%] tracking-[0.01em] text-[#3E857A]">
                {productsConfig.titleItalic}
              </span>
            </h2>
          </div>

          <div className="w-full overflow-hidden -mx-4 xl:-mx-[72px] xl:w-[calc(100%+144px)]">
            <div className="xl:mx-auto xl:w-[1440px] overflow-hidden">
              <motion.div
                className="flex w-fit gap-6"
                style={{
                  x: cardsX,
                  width: productsConfig.cards.length * CARD_W + (productsConfig.cards.length - 1) * GAP,
                }}
              >
                {productsConfig.cards.map((card, index) => (
                  <ProductCard key={index} card={card} index={index} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

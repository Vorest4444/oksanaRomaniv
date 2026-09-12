'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowIcon } from '@/components/icons';
import { productsConfig } from '@/config/products';
import { routes } from '@/config/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const CARD_W = 480;
const GAP = 24;
const VIEWPORT_W = 1440;
const LAST_CARD_CENTER = (CARD_W + GAP) * 2 + CARD_W / 2;
const SCROLL_TRANSLATE = LAST_CARD_CENTER - VIEWPORT_W / 2;

const CARD_HREFS = [routes.miniCourse, routes.program, routes.retreat] as const;

type ProductCardItem = (typeof productsConfig.cards)[number];

function ProductCard(props: { card: ProductCardItem; index: number; fullWidth?: boolean }) {
  const { card, index, fullWidth = false } = props;
  const hasSecondary = 'secondaryButton' in card && card.secondaryButton;
  const price = 'price' in card ? card.price : null;
  const href = CARD_HREFS[index];

  return (
    <div
      className={`flex h-full flex-col gap-6 rounded-[16px] border border-[rgba(16,68,71,0.12)] bg-[#F4FAF8] p-5 xl:rounded-[24px] xl:p-8 ${
        fullWidth ? 'w-full' : 'w-[480px] flex-shrink-0'
      }`}
    >
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
      <div className="mt-auto flex flex-row gap-2 xl:gap-3">
        <Link
          href={href}
          className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#3E857A] px-3 py-3 font-sans text-[14px] font-medium text-[#EBFFB1] xl:gap-2 xl:px-6 xl:text-[16px]"
        >
          {card.primaryButton}
          <span className="flex h-4 w-4 shrink-0 xl:h-5 xl:w-5 [&>svg]:h-full [&>svg]:w-full">
            <ArrowIcon color="#EBFFB1" />
          </span>
        </Link>
        {hasSecondary ? (
          <Link
            href={href}
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#122F35] bg-transparent px-3 py-3 font-sans text-[14px] font-medium text-[#122F35] xl:gap-2 xl:px-6 xl:text-[16px]"
          >
            {fullWidth ? 'Детальніше' : card.secondaryButton}
            <span className="flex h-4 w-4 shrink-0 xl:h-5 xl:w-5 [&>svg]:h-full [&>svg]:w-full">
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
    layoutEffect: false,
  });

  const cardsX = useTransform(scrollYProgress, [0.4, 0.9], [0, -SCROLL_TRANSLATE]);

  const onMobileScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const scrollToCard = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  };

  const heading = (
    <div className="flex flex-col items-center gap-4 xl:gap-[21px] text-center">
      <p className="font-sans text-[12px] xl:text-[14px] font-normal uppercase text-[#10444780]">
        / {productsConfig.eyebrow} /
      </p>
      <h2 className="font-sans text-[32px] xl:text-[56px] font-medium leading-[90%] tracking-[-0.01em] text-[#122F35]">
        {productsConfig.title}{' '}
        <span className="font-playfair text-[32px] xl:text-[56px] font-medium italic leading-[90%] tracking-[0.01em] text-[#3E857A]">
          {productsConfig.titleItalic}
        </span>
      </h2>
    </div>
  );

  if (!isDesktop) {
    return (
      <section ref={sectionRef} id="products" className="relative w-full px-4 py-12">
        <div className="flex w-full flex-col items-center gap-8">
          {heading}
          <div className="w-full overflow-hidden">
            <div
              ref={scrollerRef}
              onScroll={onMobileScroll}
              className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
            >
              {productsConfig.cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full min-w-full shrink-0 snap-start px-0"
                >
                  <ProductCard card={card} index={index} fullWidth />
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-1.5">
              {productsConfig.cards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Продукт ${index + 1}`}
                  onClick={() => scrollToCard(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === active ? 'bg-[#194241]' : 'bg-[#2A6F66]/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="products" className="relative w-full h-[200vh]">
      <div className="sticky top-[104px] flex h-[calc(100vh-104px)] w-full flex-col items-center overflow-hidden px-[72px] pt-24 pb-24">
        <div className="flex w-full max-w-[1296px] flex-col items-center gap-[60px]">
          {heading}

          <div className="-mx-[72px] w-[calc(100%+144px)] overflow-hidden">
            <div className="mx-auto w-[1440px] overflow-hidden">
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

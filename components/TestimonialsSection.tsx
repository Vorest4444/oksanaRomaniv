'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { testimonialsConfig } from '@/config/testimonials';

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function ChevronLeftIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
}

function ChevronRightIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18L15 12L9 6" />
    </svg>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const items = testimonialsConfig.items;
  const current = items[index];
  const isFirst = index === 0;
  const isLast = index === items.length - 1;

  const goPrev = useCallback(() => {
    if (!isFirst) setIndex((i) => i - 1);
  }, [isFirst]);

  const goNext = useCallback(() => {
    if (!isLast) setIndex((i) => i + 1);
  }, [isLast]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && !isFirst) {
        e.preventDefault();
        goPrev();
      }
      if (e.key === 'ArrowRight' && !isLast) {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext, isFirst, isLast]);

  return (
    <section className="w-full flex justify-center px-5 xl:px-[72px] py-16 xl:py-24">
      <div className="w-full max-w-[1296px] flex flex-col xl:flex-row xl:gap-[61px] gap-8">
        {/* Left column */}
        <div className="w-full xl:w-[489px] flex flex-col gap-8 flex-shrink-0">
            <div className="flex flex-col gap-[21px] overflow-visible">
              <p className="font-sans text-[14px] font-normal uppercase text-[#194241]">
                / {testimonialsConfig.eyebrow} /
              </p>
              <h2 className="font-sans text-[32px] xl:text-[56px] font-semibold leading-[90%] tracking-[-0.01em] text-[#122F35]">
                <span>{testimonialsConfig.title}</span>
                <br />
                <span className="font-playfair text-[32px] xl:text-[56px] font-medium italic leading-[90%] tracking-[0.01em] text-[#3E857A]">
                  {testimonialsConfig.titleItalic}
                </span>
              </h2>
            </div>

            <div className="flex flex-row items-center gap-4 mt-8 xl:mt-[88px]">
              <div className="relative w-[72px] h-[72px] rounded-xl overflow-hidden flex-shrink-0 bg-[#F4FAF8]">
                {current.avatar ? (
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    width={72}
                    height={72}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-inter text-[20px] font-medium text-[rgba(6,59,54,0.7)]">
                    {initials(current.name)}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-inter text-[18px] font-medium text-[#122F35]">{current.name}</p>
                <p className="font-inter text-[14px] font-medium text-[rgba(6,59,54,0.7)]">
                  {current.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={isFirst}
                aria-label="Попередній відгук"
                className="w-14 h-14 rounded-full border border-[rgba(16,68,71,0.2)] bg-transparent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#122F35] transition-colors"
              >
                <ChevronLeftIcon color="#122F35" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={isLast}
                aria-label="Наступний відгук"
                className="w-14 h-14 rounded-full border border-[rgba(16,68,71,0.2)] bg-transparent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#122F35] transition-colors"
              >
                <ChevronRightIcon color="#122F35" />
              </button>
            </div>
          </div>

        {/* Vertical divider */}
        <div className="hidden xl:block w-px flex-shrink-0 bg-[rgba(16,68,71,0.12)] self-stretch" />

        {/* Right column - testimonial */}
        <div className="w-full xl:w-[746px] flex-shrink-0 flex flex-col min-w-0 xl:justify-center">
          <div
            key={index}
            className="font-inter text-[19px] font-medium leading-[120%] tracking-[-0.02em] text-[#122F35] whitespace-pre-line animate-fade-in xl:w-[746px] xl:min-h-[345px]"
          >
            {current.text}
          </div>
        </div>
      </div>
    </section>
  );
}

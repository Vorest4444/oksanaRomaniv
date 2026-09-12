'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { beliefsConfig } from '@/config/beliefs';
import { BeliefsCardsSlider } from '@/components/BeliefsCardsSlider';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function ScrollFadeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maxProgressRef = useRef(0);
  const lockedProgress = useMotionValue(0);
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    maxProgressRef.current = Math.max(maxProgressRef.current, latest);
    lockedProgress.set(maxProgressRef.current);
  });

  const textProgress = useTransform(lockedProgress, [0, 0.6], [0, 1]);
  const sliderProgress = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  const line1Color = useTransform(
    textProgress,
    [0, 0.33],
    ['rgba(18,47,53,0.2)', '#122F35']
  );

  const line2Color = useTransform(
    textProgress,
    [0.33, 0.66],
    ['rgba(18,47,53,0.2)', '#122F35']
  );

  const line3Color = useTransform(
    textProgress,
    [0.66, 1],
    ['rgba(18,47,53,0.2)', '#122F35']
  );

  const lineColors = [line1Color, line2Color, line3Color];

  return (
    <section ref={sectionRef} className={isDesktop ? 'w-full h-[160vh]' : 'w-full'}>
      <div
        className={
          isDesktop
            ? 'sticky top-[104px] flex h-auto w-full flex-col items-start justify-start overflow-hidden px-8 pb-8 pt-12'
            : 'flex w-full flex-col items-start px-4 pt-6 pb-4'
        }
      >
        <div className="mx-auto flex w-full max-w-[779px] flex-col items-center gap-4 text-center xl:gap-6">
          <div className="flex w-full flex-col items-center">
            <p className="mb-3 font-sans text-[14px] uppercase tracking-wide text-[#194241] xl:mb-4">
              / {beliefsConfig.eyebrow} /
            </p>
            <h2 className="text-center text-[32px] font-medium leading-[90%] tracking-[0.01em] text-[#122F35] xl:text-[56px]">
              {beliefsConfig.titleParts[0]}{' '}
              <span className="font-playfair italic text-[32px] leading-[90%] tracking-[0.01em] text-[#3D7F74] xl:text-[56px]">
                {beliefsConfig.titleParts[1]}
              </span>
            </h2>
          </div>

          <div className="flex w-full max-w-[779px] flex-col gap-1 text-center xl:gap-2">
            {beliefsConfig.lines.map((line, index) => (
              <motion.p
                key={index}
                style={isDesktop ? { color: lineColors[index] } : { color: '#194241' }}
                className="font-inter text-[18px] xl:text-[24px] leading-[150%] tracking-[-0.02em]"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-[20px] w-full">
          <BeliefsCardsSlider progress={sliderProgress} />
        </div>
      </div>
    </section>
  );
}

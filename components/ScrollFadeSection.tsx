'use client';

import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { beliefsConfig } from '@/config/beliefs';
import { BeliefsCardsSlider } from '@/components/BeliefsCardsSlider';

export function ScrollFadeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maxProgressRef = useRef(0);
  const lockedProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    maxProgressRef.current = Math.max(maxProgressRef.current, latest);
    lockedProgress.set(maxProgressRef.current);
  });

  useEffect(() => {
    const initial = scrollYProgress.get();
    maxProgressRef.current = Math.max(maxProgressRef.current, initial);
    lockedProgress.set(maxProgressRef.current);
  }, [scrollYProgress, lockedProgress]);

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
    <section ref={sectionRef} className="w-full h-[220vh]">
      <div className="sticky top-[76px] xl:top-[104px] flex h-[calc(100dvh-76px)] xl:h-[calc(100vh-104px)] w-full flex-col items-start justify-start overflow-hidden px-4 xl:px-8 pt-10 xl:pt-[120px]">
        <div className="mx-auto w-full max-w-[779px] flex flex-col items-center text-center gap-8 xl:gap-[60px]">
          <div className="w-full flex flex-col items-center">
            <p className="text-[14px] uppercase tracking-wide text-[#194241] font-sans mb-[21px]">
              / {beliefsConfig.eyebrow} /
            </p>
            <h2 className="text-[32px] xl:text-[56px] font-medium leading-[90%] tracking-[0.01em] text-[#122F35] text-center">
              {beliefsConfig.titleParts[0]}{' '}
              <span className="font-playfair italic text-[32px] xl:text-[56px] leading-[90%] tracking-[0.01em] text-[#3D7F74]">
                {beliefsConfig.titleParts[1]}
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[779px] text-center">
            {beliefsConfig.lines.map((line, index) => (
              <motion.p
                key={index}
                style={{ color: lineColors[index] }}
                className="font-inter text-[16px] xl:text-[24px] leading-[150%] tracking-[-0.02em]"
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

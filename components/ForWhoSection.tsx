'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { forWhoConfig } from '@/config/forWho';

const PHOTO_W = 929;
const PHOTO_H = 800;
const LIME_W = 699;
const LIME_H = 484;
const PHOTO_OFFSET = 150;
const LIME_OFFSET = 150;
const LIME_OVERLAP = Math.round(PHOTO_W * 0.2);

export function ForWhoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
    layoutEffect: false,
  });

  const progress = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 0, 1, 1]
  );

  const photoX = useTransform(progress, [0, 1], [-PHOTO_OFFSET, 0]);
  const photoOpacity = useTransform(progress, [0, 0.3], [0.7, 1]);
  const limeX = useTransform(progress, [0, 1], [LIME_OFFSET, -LIME_OVERLAP]);
  const limeOpacity = useTransform(progress, [0, 0.3], [0.7, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-10 pb-16 xl:min-h-[900px] xl:pt-24 xl:pb-32"
    >
      <div className="xl:w-[1440px] xl:mx-auto xl:px-8 overflow-visible">
        <div className="hidden xl:flex flex-row items-center justify-center gap-0 w-full overflow-visible relative">
          <motion.div
            className="flex-shrink-0 relative overflow-hidden rounded-2xl"
            style={{
              width: PHOTO_W,
              height: PHOTO_H,
              x: photoX,
              opacity: photoOpacity,
            }}
          >
            <Image
              src={forWhoConfig.photo.src}
              alt={forWhoConfig.photo.alt}
              width={PHOTO_W}
              height={PHOTO_H}
              className="h-full w-full object-cover object-top"
              sizes="929px"
              unoptimized
            />
          </motion.div>

          <motion.div
            className="flex-shrink-0 rounded-[16px] overflow-hidden relative z-10 shadow-md"
            style={{
              width: LIME_W,
              height: LIME_H,
              x: limeX,
              opacity: limeOpacity,
              backgroundColor: '#EBFFB1',
              marginTop: -60,
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute left-[120px] top-[60px] w-[459px] h-[364px] flex flex-col items-start gap-[60px]">
                <div className="w-[459px] h-[144px] flex flex-col items-start gap-[21px]">
                  <div className="flex flex-row items-center gap-1 h-[14px] font-sans text-[14px] font-normal uppercase text-[#194241]">
                    / ДЛЯ КОГО Я ПРАЦЮЮ /
                  </div>
                  <h2 className="w-[459px] h-[109px] font-sans text-[56px] font-normal leading-[100%] tracking-[-0.01em] text-[#122F35]">
                    <span className="block whitespace-nowrap">Я не для всіх.</span>
                    <span className="block font-playfair font-medium italic text-[56px] leading-[100%] tracking-[0.01em] whitespace-nowrap">Я для людей, які:</span>
                  </h2>
                </div>

                <ul className="w-[459px] h-[160px] flex flex-col gap-6 list-none p-0 m-0">
                  {forWhoConfig.listItems.map((item, index) => (
                    <li key={index} className="flex flex-row items-center gap-6 h-[22px]">
                      <div className="flex-shrink-0 w-6 h-px bg-[#122F35]" />
                      <span className="font-inter text-[18px] font-normal leading-[120%] tracking-[-0.02em] text-[#194241] whitespace-nowrap">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative xl:hidden mx-4">
          <div className="relative mb-[-80px] h-[520px] overflow-hidden rounded-none">
            <Image
              src={forWhoConfig.photo.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative z-10 rounded-2xl bg-[#EBFFB1] px-6 py-6">
          <div className="flex flex-col gap-8">
            <p className="uppercase text-[12px] font-normal text-[#194241] font-sans">
              / {forWhoConfig.eyebrow} /
            </p>
            <div className="flex flex-col">
              <h2 className="font-sans text-[32px] font-normal text-[#122F35] leading-[100%]">
                {forWhoConfig.title}
              </h2>
              <span className="font-playfair font-medium italic text-[32px] leading-[100%] text-[#122F35]" style={{ letterSpacing: '0.01em' }}>
                {forWhoConfig.titleItalic}
              </span>
            </div>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {forWhoConfig.listItems.map((item, index) => (
                <li key={index} className="flex flex-row items-start gap-3">
                  <div
                    className="flex-shrink-0 bg-[#122F35] mt-[10px]"
                    style={{ width: 14, height: 1 }}
                  />
                  <span className="font-inter text-[14px] font-normal leading-[120%] text-[#194241]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

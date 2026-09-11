'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import {
  scrollPhotosConfig,
  type ScrollPhotosLayout,
  type StagePhoto as StagePhotoConfig,
} from '@/config/scrollPhotos';
import { ArrowIcon } from '@/components/icons';
import { MixedTitle } from '@/components/ui';

function StagePhoto({
  photo,
  layout,
  progress,
  zIndex,
}: {
  photo: StagePhotoConfig;
  layout: ScrollPhotosLayout;
  progress: MotionValue<number>;
  zIndex: number;
}) {
  // Collapsed: every photo is centred on the stage, then scaled up to the
  // shared deck size. Scale originates from the photo's own centre, so the
  // deck stays on the stage centre while the photos fan out.
  const startLeft = layout.stage.width / 2 - photo.size / 2;
  const startTop = layout.stage.height / 2 - photo.size / 2;

  const left = useTransform(progress, [0, 1], [startLeft, photo.left]);
  const top = useTransform(progress, [0, 1], [startTop, photo.top]);
  const scale = useTransform(progress, [0, 1], [layout.collapsedSize / photo.size, 1]);
  const borderRadius = useTransform(progress, [0, 1], [16, 8]);
  const boxShadow = useTransform(
    progress,
    [0, 1],
    ['0 12px 32px -4px rgba(16,68,71,0.2)', '0 2px 8px -2px rgba(16,68,71,0.06)']
  );

  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        left,
        top,
        scale,
        width: photo.size,
        height: photo.size,
        borderRadius,
        boxShadow,
        zIndex,
        originX: 0.5,
        originY: 0.5,
      }}
    >
      <Image
        src={photo.src}
        alt=""
        aria-hidden="true"
        width={1000}
        height={1000}
        className="h-full w-full object-cover object-top"
      />
    </motion.div>
  );
}

function Stage({
  layout,
  progress,
  secondary,
}: {
  layout: ScrollPhotosLayout;
  progress: MotionValue<number>;
  secondary: { label: string; href: string };
}) {
  const contentOpacity = useTransform(progress, [0.35, 0.7], [0, 1]);
  const contentY = useTransform(progress, [0.35, 0.7], [16, 0]);

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: layout.stage.width,
        height: layout.stage.height,
        transform: `translate(-50%, -50%) scale(min(100vw / ${layout.stage.width}px, 100dvh / ${layout.stage.height}px, 1.15))`,
        transformOrigin: 'center center',
      }}
    >
      {layout.photos.map((photo, index) => (
        <StagePhoto
          key={photo.src}
          photo={photo}
          layout={layout}
          progress={progress}
          zIndex={index + 1}
        />
      ))}

      <motion.div
        className="absolute z-10 flex flex-col items-center gap-6 text-center lg:gap-[60px]"
        style={{
          opacity: contentOpacity,
          y: contentY,
          left: layout.content.left,
          top: layout.content.top,
          width: layout.content.width,
        }}
      >
        <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
          <MixedTitle
            segments={scrollPhotosConfig.titleSegments}
            className="font-sans text-[28px] lg:text-[56px] font-normal leading-none tracking-[-0.01em] text-brand-dark"
          />
          <p className="font-inter text-[14px] lg:text-[16px] font-normal leading-[1.3] tracking-[-0.01em] text-brand-teal/50">
            {scrollPhotosConfig.subtitle}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2.5 lg:w-auto lg:flex-row lg:gap-6">
          <a
            href={scrollPhotosConfig.primaryButton.href}
            className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-brand-button px-6 font-sans text-[16px] font-medium text-brand-lime transition-opacity duration-200 hover:opacity-90 lg:h-14 lg:w-auto"
          >
            {scrollPhotosConfig.primaryButton.label}
            <ArrowIcon color="#EBFFB1" />
          </a>
          <a
            href={secondary.href}
            className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full border border-brand-dark px-6 font-sans text-[16px] font-medium text-brand-dark transition-colors duration-200 hover:bg-brand-dark/5 lg:h-14 lg:w-auto"
          >
            {secondary.label}
            <ArrowIcon color="#122F35" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function ScrollPhotosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
    layoutEffect: false,
  });

  // Fan out as soon as the scene pins, hold, then gather back before the footer.
  const spread = useTransform(scrollYProgress, [0, 0.32, 0.58, 0.92], [0, 1, 1, 0]);

  const eased = useTransform(spread, (value) => {
    const clamped = Math.min(1, Math.max(0, value));
    return clamped < 0.5
      ? 2 * clamped * clamped
      : 1 - Math.pow(-2 * clamped + 2, 2) / 2;
  });

  const settled = useMotionValue(1);
  const progress = reduceMotion ? settled : eased;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-brand-green-50"
      style={{ height: reduceMotion ? '100dvh' : '280vh' }}
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <div className="relative hidden h-full w-full lg:block">
          <Stage
            layout={scrollPhotosConfig.desktop}
            progress={progress}
            secondary={scrollPhotosConfig.secondaryButton}
          />
        </div>
        <div className="relative h-full w-full lg:hidden">
          <Stage
            layout={scrollPhotosConfig.mobile}
            progress={progress}
            secondary={scrollPhotosConfig.secondaryButtonMobile}
          />
        </div>
      </div>
    </section>
  );
}

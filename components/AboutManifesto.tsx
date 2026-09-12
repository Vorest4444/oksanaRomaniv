'use client';

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { Container } from '@/components/ui';
import {
  StepIcon,
  PlantIcon,
  PersonIcon,
  WorldIcon,
} from '@/components/icons/DesignIcons';
import { aboutConfig } from '@/config/about';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const manifestoIcons = {
  step: StepIcon,
  plant: PlantIcon,
  person: PersonIcon,
  world: WorldIcon,
} as const;

const MUTED = 'rgba(235, 255, 177, 0.22)';
const PAINTED = '#EBFFB1';

type Line = (typeof aboutConfig.manifesto.lines)[number];

function splitWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean);
}

function countTokens(line: Line) {
  return (
    splitWords(line.highlight).length +
    splitWords(line.rest).length +
    1 +
    splitWords(line.tail).length
  );
}

const TOTAL = aboutConfig.manifesto.lines.reduce((sum, line) => sum + countTokens(line), 0);

function PaintedWord({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: string;
}) {
  const start = index / TOTAL;
  const end = Math.min(1, (index + 1.4) / TOTAL);
  const color = useTransform(progress, [start, end], [MUTED, PAINTED]);
  return <motion.span style={{ color }}>{children}</motion.span>;
}

function PaintedIcon({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: ReactNode;
}) {
  const start = index / TOTAL;
  const end = Math.min(1, (index + 1.4) / TOTAL);
  const color = useTransform(progress, [start, end], [MUTED, PAINTED]);
  return (
    <motion.span style={{ color }} className="flex flex-shrink-0">
      {children}
    </motion.span>
  );
}

function Phrase({
  text,
  progress,
  startIndex,
  className,
}: {
  text: string;
  progress: MotionValue<number> | undefined;
  startIndex: number;
  className?: string;
}) {
  const words = splitWords(text);
  if (words.length === 0) return null;

  return (
    <span className={className}>
      {words.map((word, i) => {
        const prefix = i > 0 ? ' ' : '';
        if (!progress) {
          return (
            <span key={`${word}-${i}`}>
              {prefix}
              {word}
            </span>
          );
        }
        return (
          <PaintedWord key={`${word}-${i}`} progress={progress} index={startIndex + i}>
            {`${prefix}${word}`}
          </PaintedWord>
        );
      })}
    </span>
  );
}

export function AboutManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isDesktop ? ['start start', 'end end'] : ['start 0.85', 'end 0.4'],
  });

  const progress = reduceMotion ? undefined : scrollYProgress;
  let tokenIndex = 0;

  return (
    <section
      ref={sectionRef}
      className={
        isDesktop && !reduceMotion
          ? 'bg-brand-green h-[175vh]'
          : 'bg-brand-green py-20 xl:py-[250px]'
      }
    >
      <div
        className={
          isDesktop && !reduceMotion
            ? 'sticky top-0 flex h-dvh w-full items-center'
            : 'w-full'
        }
      >
        <Container>
          <div className="mx-auto flex w-fit max-w-full flex-col items-center gap-4 px-4 xl:gap-5">
            {aboutConfig.manifesto.lines.map((line, lineIndex) => {
              const highlightStart = tokenIndex;
              const highlightCount = splitWords(line.highlight).length;
              tokenIndex += highlightCount;
              const restStart = tokenIndex;
              tokenIndex += splitWords(line.rest).length;
              const iconIndex = tokenIndex++;
              const tailStart = tokenIndex;
              tokenIndex += splitWords(line.tail).length;

              const Icon = manifestoIcons[line.icon];
              const icon = <Icon size={28} />;

              return (
                <p
                  key={lineIndex}
                  className="flex flex-wrap items-center justify-center gap-3 font-inter text-[18px] leading-[1.5] tracking-[-0.02em] text-brand-lime/60 xl:flex-nowrap xl:whitespace-nowrap xl:text-[24px]"
                >
                  <span>
                    <Phrase
                      text={line.highlight}
                      progress={progress}
                      startIndex={highlightStart}
                      className="font-medium"
                    />
                    {line.highlight && line.rest ? ' ' : null}
                    <Phrase text={line.rest} progress={progress} startIndex={restStart} />
                  </span>
                  {progress ? (
                    <PaintedIcon progress={progress} index={iconIndex}>
                      {icon}
                    </PaintedIcon>
                  ) : (
                    <span className="flex flex-shrink-0 text-brand-lime">{icon}</span>
                  )}
                  <Phrase text={line.tail} progress={progress} startIndex={tailStart} />
                </p>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { beliefsConfig } from '@/config/beliefs';
import { routes } from '@/config/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const CARD_W = 500;
const GAP = 24;
const TRACK_W = CARD_W * 4 + GAP * 3;

const VIEWPORT_W = 1440;
const CTA_INDEX = 3;
const CTA_CENTER_X_IN_TRACK = CTA_INDEX * (CARD_W + GAP) + CARD_W / 2;
const VIEWPORT_CENTER_X = VIEWPORT_W / 2;

const START_X = 689;
const END_X = VIEWPORT_CENTER_X - CTA_CENTER_X_IN_TRACK;

function InfinityIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      stroke="#3E857A"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M44.274 26.25C52.5585 40.599 51.714 56.595 42.387 61.98C33.06 67.365 18.7845 60.1005 10.5 45.75C2.21551 31.3995 3.06001 15.405 12.387 10.02C21.714 4.63502 35.991 11.901 44.274 26.25Z" />
      <path d="M27.3863 26.25C19.1018 40.599 19.9463 56.595 29.2733 61.98C38.6003 67.365 52.8773 60.099 61.1618 45.75C69.4463 31.401 68.6018 15.405 59.2733 10.02C49.9493 4.63501 35.6708 11.901 27.3863 26.25Z" />
      <path d="M35.6304 15.5161C38.8479 18.3781 41.8254 22.0036 44.2764 26.2501C52.5594 40.5991 51.7149 56.5951 42.3879 61.9801C40.4409 63.1051 38.2779 63.6781 35.9979 63.7501" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      stroke="#3E857A"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M28.2 63C21.48 63 18.12 63 15.552 61.692C13.2942 60.5415 11.4585 58.7058 10.308 56.448C9 53.88 9 50.52 9 43.8M63 43.8C63 50.52 63 53.88 61.692 56.448C60.5415 58.7058 58.7058 60.5415 56.448 61.692C53.88 63 50.52 63 43.8 63M43.8 9C50.52 9 53.88 9 56.448 10.308C58.7058 11.4585 60.5415 13.2942 61.692 15.552C63 18.12 63 21.48 63 28.2M28.2 9C21.48 9 18.12 9 15.552 10.308C13.2942 11.4585 11.4585 13.2942 10.308 15.552C9 18.12 9 21.48 9 28.2M45 36C45 33.6131 44.0518 31.3239 42.364 29.636C40.6761 27.9482 38.3869 27 36 27C33.6131 27 31.3239 27.9482 29.636 29.636C27.9482 31.3239 27 33.6131 27 36C27 38.3869 27.9482 40.6761 29.636 42.364C31.3239 44.0518 33.6131 45 36 45C38.3869 45 40.6761 44.0518 42.364 42.364C44.0518 40.6761 45 38.3869 45 36Z" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      stroke="#3E857A"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M36 59.8784H69.4286M36 59.8784C36 60.8192 35.8147 61.7508 35.4547 62.6199C35.0946 63.4891 34.567 64.2789 33.9017 64.9441C33.2365 65.6093 32.4467 66.137 31.5775 66.4971C30.7084 66.8571 29.7768 67.0424 28.836 67.0424C27.8952 67.0424 26.9636 66.8571 26.0945 66.4971C25.2253 66.137 24.4355 65.6093 23.7703 64.9441C23.105 64.2789 22.5774 63.4891 22.2173 62.6199C21.8573 61.7508 21.672 60.8192 21.672 59.8784C21.672 58.9376 21.8573 58.006 22.2173 57.1368C22.5774 56.2677 23.105 55.4779 23.7703 54.8127C24.4355 54.1474 25.2253 53.6197 26.0945 53.2597C26.9636 52.8997 27.8952 52.7144 28.836 52.7144C29.7768 52.7144 30.7084 52.8997 31.5775 53.2597C32.4467 53.6197 33.2365 54.1474 33.9017 54.8127C34.567 55.4779 35.0946 56.2677 35.4547 57.1368C35.8147 58.006 36 58.9376 36 59.8784ZM69.4286 59.8784L59.8783 50.3281M69.4286 59.8784L59.8783 69.4287M16.8994 9.73553C16.8994 11.6355 17.6542 13.4577 18.9977 14.8012C20.3412 16.1448 22.1634 16.8995 24.0634 16.8995C25.9634 16.8995 27.7856 16.1448 29.1291 14.8012C30.4727 13.4577 31.2274 11.6355 31.2274 9.73553C31.2274 7.83552 30.4727 6.01333 29.1291 4.66982C27.7856 3.32631 25.9634 2.57153 24.0634 2.57153C22.1634 2.57153 20.3412 3.32631 18.9977 4.66982C17.6542 6.01333 16.8994 7.83552 16.8994 9.73553ZM36 33.6138C36 35.5138 36.7548 37.336 38.0983 38.6795C39.4418 40.023 41.264 40.7778 43.164 40.7778C45.064 40.7778 46.8862 40.023 48.2297 38.6795C49.5732 37.336 50.328 35.5138 50.328 33.6138C50.328 31.7138 49.5732 29.8916 48.2297 28.5481C46.8862 27.2046 45.064 26.4498 43.164 26.4498C41.264 26.4498 39.4418 27.2046 38.0983 28.5481C36.7548 29.8916 36 31.7138 36 33.6138Z" />
      <path d="M36 33.6139H15.7063C12.2684 33.6819 8.99426 35.0954 6.58699 37.5508C4.17973 40.0061 2.83132 43.3076 2.83132 46.7462C2.83132 50.1847 4.17973 53.4862 6.58699 55.9416C8.99426 58.3969 12.2684 59.8104 15.7063 59.8785H21.672M50.328 33.6139H57.492C60.6585 33.6139 63.6952 32.356 65.9342 30.117C68.1733 27.878 69.4311 24.8412 69.4311 21.6747C69.4311 18.5083 68.1733 15.4715 65.9342 13.2325C63.6952 10.9935 60.6585 9.7356 57.492 9.7356H31.2171M16.8994 9.7356H2.57143" />
    </svg>
  );
}

function CTAArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      className={className}
    >
      <path d="M11.9108 41.4985L43.191 15.2513" />
      <path d="M21.0744 12.4883L44.0854 14.5015L42.0722 37.5124" />
    </svg>
  );
}

function BeliefCardIcon({ icon }: { icon: 'infinity' | 'target' | 'sliders' }) {
  switch (icon) {
    case 'infinity':
      return <InfinityIcon />;
    case 'target':
      return <TargetIcon />;
    case 'sliders':
      return <SlidersIcon />;
  }
}

function BeliefCard({
  title,
  subtitle,
  icon,
  compact = false,
}: {
  title: string;
  subtitle: string;
  icon: 'infinity' | 'target' | 'sliders';
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-col bg-[#F4FAF8] border border-[rgba(16,68,71,0.12)] rounded-2xl ${
        compact
          ? 'w-full gap-6 p-6'
          : 'h-[197px] w-[500px] flex-shrink-0 gap-[42px] p-8'
      }`}
    >
      <div className={`flex flex-row items-center justify-between gap-6 ${compact ? 'h-[42px]' : 'h-[72px]'}`}>
        <h3
          className={`font-playfair italic font-medium leading-[90%] tracking-[0.01em] text-[#122F35] ${
            compact ? 'text-[24px]' : 'text-[36px]'
          }`}
        >
          {title}
        </h3>
        <div
          className={`flex flex-shrink-0 items-center justify-center ${
            compact ? 'h-[42px] w-[42px] [&>svg]:h-[42px] [&>svg]:w-[42px]' : 'h-[72px] w-[72px]'
          }`}
        >
          <BeliefCardIcon icon={icon} />
        </div>
      </div>
      <p className="font-inter text-[16px] font-light leading-[120%] tracking-[-0.02em] text-[rgba(6,59,54,0.6)]">
        {subtitle}
      </p>
    </div>
  );
}

function CTACard({ title, compact = false }: { title: string; compact?: boolean }) {
  return (
    <Link
      href={routes.about}
      className={`flex flex-row items-center justify-between bg-[#3E857A] border border-[#3E857A] ${
        compact
          ? 'w-full gap-5 rounded-2xl p-6'
          : 'h-[197px] w-[500px] flex-shrink-0 gap-[42px] rounded-[16px] p-8'
      }`}
    >
      <span
        className={`font-inter font-medium leading-[120%] tracking-[-0.02em] text-[#EBFFB1] ${
          compact ? 'text-[16px]' : 'text-[20px]'
        }`}
      >
        {title}
      </span>
      <div
        className={`flex flex-shrink-0 items-center justify-center text-[#EBFFB1] ${
          compact ? 'h-8 w-8 [&>svg]:h-8 [&>svg]:w-8' : 'h-[56px] w-[56px]'
        }`}
      >
        <CTAArrowIcon />
      </div>
    </Link>
  );
}

interface BeliefsCardsSliderProps {
  progress: MotionValue<number>;
}

export function BeliefsCardsSlider({ progress }: BeliefsCardsSliderProps) {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const x = useTransform(progress, [0, 1], [START_X, END_X]);

  const cards = beliefsConfig.cards.map((card, index) =>
    card.variant === 'cta' ? (
      <CTACard key={index} title={card.title} compact={!isDesktop} />
    ) : (
      <BeliefCard
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        icon={card.icon}
        compact={!isDesktop}
      />
    )
  );

  if (!isDesktop) {
    return <div className="flex w-full flex-col gap-4">{cards}</div>;
  }

  return (
    <div className="w-full overflow-hidden -mx-4 xl:-mx-8">
      <div className="xl:mx-auto xl:w-[1440px] overflow-hidden">
        <motion.div className="flex h-[197px] w-fit gap-6 xl:w-[2072px]" style={{ x }}>
          {cards}
        </motion.div>
      </div>
    </div>
  );
}

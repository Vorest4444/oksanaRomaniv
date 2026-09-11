import { routes } from '@/config/navigation';
import type { TitleSegment } from '@/components/ui';

export interface StagePhoto {
  src: string;
  size: number;
  left: number;
  top: number;
}

/**
 * One breakpoint of the section, expressed in the coordinate space of the
 * Figma "animation" frame. The stage is scaled to fit the viewport at runtime.
 */
export interface ScrollPhotosLayout {
  stage: { width: number; height: number };
  /** Size of the stacked deck before the photos fan out. */
  collapsedSize: number;
  content: { left: number; top: number; width: number };
  photos: StagePhoto[];
}

const desktop: ScrollPhotosLayout = {
  stage: { width: 1440, height: 1000 },
  collapsedSize: 500,
  content: { left: 380, top: 364, width: 680 },
  photos: [
    { src: '/images/scroll-photo-1.webp', size: 200, left: 288, top: 60 },
    { src: '/images/scroll-photo-2.webp', size: 180, left: 380, top: 775 },
    { src: '/images/scroll-photo-4.webp', size: 200, left: 1125, top: 135 },
    { src: '/images/scroll-photo-5.webp', size: 230, left: 995, top: 615 },
    { src: '/images/scroll-photo-3.webp', size: 250, left: 86, top: 553 },
  ],
};

const mobile: ScrollPhotosLayout = {
  stage: { width: 375, height: 812 },
  collapsedSize: 343,
  content: { left: 16, top: 280, width: 343 },
  photos: [
    { src: '/images/scroll-photo-1.webp', size: 160, left: 27, top: 84 },
    { src: '/images/scroll-photo-4.webp', size: 100, left: 238, top: 34 },
    { src: '/images/scroll-photo-5.webp', size: 120, left: 16, top: 568 },
    { src: '/images/scroll-photo-3.webp', size: 150, left: 203, top: 653 },
  ],
};

export const scrollPhotosConfig = {
  titleSegments: [
    { text: 'Я допомагаю' },
    { text: ' побачити\nшлях,', italic: true },
    { text: ' коли його не видно.' },
  ] as TitleSegment[],
  subtitle:
    'Без ілюзій, тиску і порожніх обіцянок — тільки чесна робота з тим, що є насправді.',
  primaryButton: { label: 'Почати з розмови', href: routes.contacts },
  secondaryButton: { label: 'Обрати програму', href: routes.products },
  secondaryButtonMobile: { label: 'Обрати формат', href: routes.products },
  desktop,
  mobile,
};

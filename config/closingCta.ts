import { routes } from '@/config/navigation';

/** The photo CTA that closes the About, Products and offer pages. */
export const closingCtaConfig = {
  photo: { src: '/images/about-cta.webp', alt: '' },
  titleSegments: [
    { text: 'Я не обіцяю ' },
    { text: 'легкого шляху.', italic: true },
    { text: ' Я допомагаю зробити його ' },
    { text: 'зрозумілим.', italic: true },
  ],
  primary: { label: 'Почати з розмови', href: routes.contacts },
  secondary: { label: 'Обрати програму', href: routes.products },
} as const;

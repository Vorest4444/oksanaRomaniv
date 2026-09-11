import { mainNav, productNav, socialNav } from '@/config/navigation';

export const footerConfig = {
  logo: 'Оксана Романів',
  // Newlines are part of the design; italic runs come from the Figma text overrides.
  titleSegments: [
    { text: 'Допомагаю ' },
    { text: 'підприємцям \nта лідерам', italic: true },
    { text: ' знайти ' },
    { text: 'ясність \n', italic: true },
    { text: 'у бізнесі та житті.' },
  ],
  columns: [
    { title: 'Навігація', links: mainNav },
    { title: 'Продукти', links: productNav },
    { title: 'Соц-мережі', links: socialNav },
  ],
  gallery: [
    { src: '/images/footer-gallery-1.webp', alt: 'Оксана Романів під час роботи' },
    { src: '/images/footer-gallery-2.webp', alt: 'Оксана Романів з планом на ноутбуці' },
    { src: '/images/footer-gallery-3.webp', alt: 'Оксана Романів на сесії з клієнтом' },
    { src: '/images/footer-gallery-4.webp', alt: 'Instagram Оксани Романів' },
  ],
  instagramHref: 'https://instagram.com',
  copyright: '© 2026 Оксана Романів. Усі права захищено.',
  legal: [
    { label: 'Політика конфіденційності', href: '/privacy' },
    { label: 'Умови використання', href: '/terms' },
  ],
} as const;

export const heroConfig = {
  image: {
    src: '/images/hero.webp',
    alt: 'Оксана Романів - бізнес-ментор та коуч',
  },
  eyebrow: 'БІЗНЕС-МЕНТОР ТА КОУЧ',
  titleParts: ['Знайдіть', 'ясність', 'у бізнесі та житті'],
  description:
    'Допомагаю підприємцям та лідерам розкрити свій потенціал, побудувати успішний бізнес та знайти баланс між роботою і особистим життям.',
  primaryCta: {
    label: 'Почати з розмови',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Обрати свій формат',
    href: '#formats',
  },
  socialLinks: [
    { label: 'INSTAGRAM', href: '#' },
    { label: 'FACEBOOK', href: '#' },
    { label: 'LINKEDIN', href: '#' },
  ],
} as const;

export type SocialLink = (typeof heroConfig.socialLinks)[number];

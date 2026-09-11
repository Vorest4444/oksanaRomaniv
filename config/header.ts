import { mainNav, routes } from '@/config/navigation';

export const headerConfig = {
  logoText: 'ОКСАНА РОМАНІВ',
  navLinks: mainNav,
  cta: {
    label: 'Почати з розмови',
    href: routes.contacts,
  },
} as const;

export type NavLink = (typeof headerConfig.navLinks)[number];

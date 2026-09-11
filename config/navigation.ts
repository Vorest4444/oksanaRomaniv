export const routes = {
  home: '/',
  about: '/about',
  products: '/products',
  miniCourse: '/products/mini-course',
  program: '/products/program',
  retreat: '/products/retreat',
  session: '/products/session',
  contacts: '/contacts',
  freeLesson: '/#free-lesson',
} as const;

export const mainNav = [
  { label: 'Головна', href: routes.home },
  { label: 'Про мене', href: routes.about },
  { label: 'Продукти', href: routes.products },
  { label: 'Контакти', href: routes.contacts },
] as const;

export const productNav = [
  { label: 'Безкоштовний урок', href: routes.freeLesson },
  { label: 'Міні-курс', href: routes.miniCourse },
  { label: 'Ваш ріст ×5', href: routes.program },
  { label: 'Ретрит у Карпатах', href: routes.retreat },
  { label: 'Індивідуальна сесія', href: routes.session },
] as const;

export const socialNav = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'Youtube', href: 'https://youtube.com' },
] as const;

export type NavItem = { label: string; href: string };

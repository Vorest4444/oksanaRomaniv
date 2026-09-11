import { routes } from '@/config/navigation';

// The /products page. The homepage carousel has its own, narrower config in
// products.ts; the two should be merged once the homepage is reworked.
export const productsPageConfig = {
  hero: {
    titleSegments: [{ text: 'Твій шлях - ' }, { text: 'від ясності до дії', italic: true }],
    description:
      'Тут зібрані формати роботи, які допомагають зупинити хаос, навести ясність і перейти до рішень, що витримують реальне життя.',
  },

  items: [
    {
      eyebrow: 'Міні-курс',
      title: 'Річний план розвитку: \nвід ясності до дії',
      tags: ['Онлайн', 'Самостійне проходження', 'Довічний доступ'],
      description:
        'Практичний міні-курс, який допомагає зупинити хаотичне планування і зібрати зрозумілий план на рік без перевантаження.',
      price: { original: '1999 грн', current: '1499 грн' },
      primary: { label: 'Купити', href: routes.miniCourse },
      secondary: { label: 'Дізнатись більше', href: routes.miniCourse },
    },
    {
      eyebrow: 'Програма',
      title: 'Ваш ріст ×5. Система рішень, яка не розсипається',
      tags: ['Онлайн', '5 тижнів'],
      description:
        'Онлайн-програма для людей у періоді змін, які хочуть більше, ніж план - вони хочуть стабільний спосіб приймати рішення і рухатися без перевантаження.',
      price: { current: 'від $100' },
      primary: { label: 'Купити', href: routes.program },
      secondary: { label: 'Дізнатись більше', href: routes.program },
    },
    {
      eyebrow: 'Ретрит',
      title: 'Ретрит ясності, планування і внутрішньої опори',
      tags: ['Менторська робота', 'Йога', 'Природа'],
      description:
        '5 днів у Карпатах для людей, які хочуть вийти зі спіралі хаосу і повернутися до життя з ясністю та напрямом.',
      price: null,
      primary: { label: 'Приєднатись', href: routes.retreat },
      secondary: { label: 'Дізнатись більше', href: routes.retreat },
    },
    {
      eyebrow: 'Сесія',
      title: 'Індивідуальна стратегічна сесія',
      tags: ['Онлайн', '1 година'],
      description:
        'Коли потрібно зупинитись, навести ясність і побачити наступний крок.\n1 година сфокусованої роботи онлайн для людей у періоді змін і невизначеності.',
      price: { current: 'від $100' },
      primary: { label: 'Записатись на сесію', href: routes.session },
      secondary: { label: 'Дізнатись більше', href: routes.session },
    },
  ],

} as const;

export type ProductItem = (typeof productsPageConfig.items)[number];

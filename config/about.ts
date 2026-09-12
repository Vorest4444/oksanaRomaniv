import { routes } from '@/config/navigation';

export const aboutConfig = {
  hero: {
    // Italic runs follow the Figma text overrides.
    titleSegments: [
      { text: 'Я допомагаю ' },
      { text: 'людям знаходити ясність ', italic: true },
      { text: 'у періоди змін.' },
    ],
    description: 'Не через мотивацію. Через розуміння, структуру і реальні рішення.',
    photos: [
      { src: '/images/about-hero-1.webp', alt: 'Оксана Романів' },
      { src: '/images/about-hero-2.webp', alt: 'Оксана Романів за роботою' },
      { src: '/images/about-hero-3.webp', alt: 'Оксана Романів на сесії' },
    ],
  },

  manifesto: {
    // Each line mixes highlighted words, muted words and an inline icon.
    lines: [
      { highlight: 'Мій підхід', rest: ' називається ', icon: 'step', tail: 'From the' },
      { highlight: 'Ground Up', rest: ' — коли ', icon: 'plant', tail: 'ріст починається' },
      { highlight: '', rest: 'з людини', icon: 'person', tail: 'а вже потім переходить у' },
      { highlight: '', rest: 'роботу, проєкти та спільноти', icon: 'world', tail: '' },
    ],
  },

  story: {
    eyebrow: 'початок',
    titleSegments: [{ text: 'Як я прийшла \nдо ' }, { text: 'цієї роботи', italic: true }],
    photo: { src: '/images/about-story.webp', alt: 'Оксана Романів' },
    leadParagraphs: [
      'Я не планувала ставати менторкою.',
      'Я була юристкою. Потім — підприємницею. Потім — людиною, яка допомагала створювати громаду з нуля.',
    ],
    paragraphs: [
      'У різних ролях я знову і знову робила одне й те саме — допомагала людям наводити порядок у складному і рухатись далі.',
      'Саме цей досвід сформував мій спосіб мислення і те, як я працюю сьогодні.',
    ],
    cta: { label: 'Почати з розмови', href: routes.contacts },
  },

  journey: {
    eyebrow: 'Мій шлях',
    titleSegments: [{ text: 'Мій шлях', italic: true }, { text: ' — коротко' }],
    items: [
      {
        number: '01',
        icon: 'users',
        title: 'Громади',
        description:
          'Я працювала з громадами як стратег, запускала проєкти розвитку і приймала рішення там, де не було шаблонів.',
      },
      {
        number: '02',
        icon: 'briefcase',
        title: 'Підприємництво',
        description:
          'Я будувала бізнеси, команди і процеси в умовах невизначеності — і побачила, що без системи результат не тримається.',
      },
      {
        number: '03',
        icon: 'handHeart',
        title: 'Громадський сектор та ГО',
        description:
          'Я реалізовувала проєкти розвитку і працювала з людьми в кризових періодах. Це навчило мене: зміни можливі лише через реальні дії.',
      },
      {
        number: '04',
        icon: 'compass',
        title: 'Менторство сьогодні',
        description:
          'Сьогодні я працюю з людьми у періоді змін, допомагаючи знаходити ясність, фокус і систему дій. Це не швидкий процес — але результат залишається.',
      },
    ],
  },
} as const;

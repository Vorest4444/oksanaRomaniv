export const beliefsConfig = {
  eyebrow: 'ПРО МЕНЕ',
  titleParts: ['У що я', 'вірю'],
  lines: [
    'Я не працюю з мотивацією.',
    'Мотивація зникає, коли життя стає складним.',
    'Я працюю з',
  ],
  cards: [
    {
      title: 'Ясністю',
      subtitle: 'Що насправді потребує змін',
      variant: 'default' as const,
      icon: 'infinity' as const,
    },
    {
      title: 'Фокусом',
      subtitle: 'Що важливо саме зараз',
      variant: 'default' as const,
      icon: 'target' as const,
    },
    {
      title: 'Системою',
      subtitle: 'Яка витримує реальне життя, а не ідеальний план',
      variant: 'default' as const,
      icon: 'sliders' as const,
    },
    {
      title: 'Дізнатись більше про мене',
      subtitle: '',
      variant: 'cta' as const,
    },
  ],
} as const;

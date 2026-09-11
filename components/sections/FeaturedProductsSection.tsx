import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductCard } from '@/components/ui/ProductCard'

const products = [
  {
    title: 'Чек-лист "Перші кроки підприємця"',
    description: 'Безкоштовний гід для тих, хто починає свій шлях у бізнесі або хоче впорядкувати існуючі процеси.',
    features: [
      '15 ключових кроків для старту',
      'Шаблони для планування',
      'Список корисних ресурсів',
    ],
    outcome: 'Чіткий план дій для запуску або оптимізації вашого бізнесу.',
    targetAudience: 'Початківці підприємці та ті, хто хоче систематизувати бізнес.',
    badge: 'Безкоштовно',
    type: 'free' as const,
    ctaText: 'Отримати безкоштовно',
    ctaHref: '/products#free',
  },
  {
    title: 'Воркбук "Стратегічне планування"',
    description: 'Практичний посібник для створення стратегії бізнесу та особистого розвитку на рік вперед.',
    features: [
      '50+ сторінок вправ та шаблонів',
      'Методика SMART-цілей',
      'Квартальне планування',
      'Трекер прогресу',
    ],
    outcome: 'Готова стратегія на рік з чіткими квартальними цілями.',
    targetAudience: 'Підприємці, які хочуть структурувати свій розвиток.',
    price: '₴990',
    originalPrice: '₴1490',
    badge: 'Бестселер',
    type: 'paid' as const,
    ctaText: 'Придбати зараз',
    ctaHref: '/products#paid',
  },
  {
    title: 'Курс "Лідерство без вигорання"',
    description: 'Онлайн-курс про те, як бути ефективним лідером та зберігати енергію для життя.',
    features: [
      '8 модулів відео-уроків',
      'Практичні завдання',
      'Спільнота однодумців',
      'Сертифікат про проходження',
    ],
    outcome: 'Навички управління командою та особистою енергією.',
    targetAudience: 'Керівники та підприємці з командою.',
    badge: 'Скоро',
    type: 'upcoming' as const,
    ctaText: 'Приєднатись до списку очікування',
    ctaHref: '/products#upcoming',
  },
]

export function FeaturedProductsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Продукти"
          title="Інструменти для вашого росту"
          subtitle="Від безкоштовних ресурсів до глибоких програм — оберіть те, що підходить саме вам."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Metadata } from 'next'
import { ProductCard } from '@/components/ui/ProductCard'
import { CTASection } from '@/components/ui/CTASection'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { WaitlistForm } from '@/components/forms/WaitlistForm'
import { Gift, ShoppingBag, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Продукти | Оксана Романів',
  description: 'Ресурси для вашого розвитку — від безкоштовних матеріалів до глибоких програм трансформації.',
}

const freeProducts = [
  {
    title: 'Чек-лист "Перші кроки підприємця"',
    description: 'Структурований гід для тих, хто починає свій шлях у бізнесі або хоче впорядкувати існуючі процеси.',
    features: [
      '15 ключових кроків для успішного старту',
      'Шаблони для планування та аналізу',
      'Список перевірених ресурсів та інструментів',
      'Чек-лист для щомісячного аудиту',
    ],
    outcome: 'Чіткий план дій та розуміння, з чого почати або що вдосконалити у вашому бізнесі.',
    targetAudience: 'Початківці підприємці, ті хто хоче систематизувати бізнес, фрілансери.',
    badge: 'Безкоштовно',
    type: 'free' as const,
  },
]

const paidProducts = [
  {
    title: 'Воркбук "Стратегічне планування на рік"',
    description: 'Комплексний практичний посібник для створення стратегії бізнесу та особистого розвитку.',
    features: [
      '50+ сторінок вправ та шаблонів',
      'Методика SMART-цілей з прикладами',
      'Квартальне та місячне планування',
      'Трекер прогресу та рефлексії',
      'Бонус: відео-інструкція до кожного розділу',
    ],
    outcome: 'Готова стратегія на рік з чіткими квартальними цілями та системою відстеження прогресу.',
    targetAudience: 'Підприємці та керівники, які хочуть структурувати свій розвиток.',
    price: '₴990',
    originalPrice: '₴1490',
    badge: 'Бестселер',
    type: 'paid' as const,
    ctaText: 'Придбати зараз',
  },
  {
    title: 'Міні-курс "Продуктивність без стресу"',
    description: '5-денний курс з відео-уроками та практичними завданнями для підвищення ефективності.',
    features: [
      '5 відео-уроків по 20-30 хвилин',
      'Робочий зошит із завданнями',
      'Шаблони для планування дня та тижня',
      'Доступ до закритого Telegram-чату',
    ],
    outcome: 'Персональна система продуктивності, адаптована під ваш ритм життя.',
    targetAudience: 'Всі, хто хоче більше встигати без вигорання.',
    price: '₴1490',
    type: 'paid' as const,
    ctaText: 'Придбати зараз',
  },
]

const upcomingProducts = [
  {
    title: 'Курс "Лідерство без вигорання"',
    description: 'Глибока 8-тижнева програма про те, як бути ефективним лідером та зберігати енергію для життя.',
    features: [
      '8 модулів відео-уроків',
      'Живі групові сесії щотижня',
      'Практичні завдання з фідбеком',
      'Спільнота однодумців',
      'Сертифікат про проходження',
    ],
    outcome: 'Навички управління командою та особистою енергією, баланс роботи і життя.',
    targetAudience: 'Керівники, підприємці з командою, ті хто прагне до лідерства.',
    badge: 'Скоро',
    type: 'upcoming' as const,
    ctaText: 'Приєднатись до списку очікування',
  },
  {
    title: 'Membership "Коло розвитку"',
    description: 'Щомісячна підписка з ексклюзивним контентом, воркшопами та підтримкою спільноти.',
    features: [
      'Щомісячні нові матеріали та воркшопи',
      '2 групові Q&A сесії на місяць',
      'Приватна спільнота в Telegram',
      'Знижки на всі продукти та менторство',
    ],
    outcome: 'Постійний розвиток та підтримка на шляху до ваших цілей.',
    targetAudience: 'Всі, хто хоче постійно розвиватись у підтримуючому середовищі.',
    badge: 'В розробці',
    type: 'upcoming' as const,
    ctaText: 'Дізнатись першим',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <span className="badge-primary mb-4">Продукти</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-900 leading-tight">
            Ресурси для вашого росту
          </h1>
          <p className="mt-6 text-lg md:text-xl text-accent-600 max-w-2xl mx-auto">
            Від безкоштовних матеріалів для старту до глибоких програм трансформації — 
            оберіть те, що відповідає вашим потребам прямо зараз.
          </p>
        </div>
      </section>

      {/* Free Products */}
      <section id="free" className="section-padding bg-primary-50/50 scroll-mt-24">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary-100">
              <Gift className="text-primary-700" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-accent-900">
              Безкоштовні ресурси
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              {freeProducts.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>

            {/* Lead Capture Form */}
            <div className="lg:sticky lg:top-24">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Paid Products */}
      <section id="paid" className="section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary-100">
              <ShoppingBag className="text-primary-700" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-accent-900">
              Платні продукти
            </h2>
          </div>

          {/* TODO: Stripe Checkout integration via Netlify Functions */}
          <div className="grid md:grid-cols-2 gap-8">
            {paidProducts.map((product, idx) => (
              <ProductCard 
                key={idx} 
                {...product}
                ctaHref="#paid"
              />
            ))}
          </div>

          {/* Payment info */}
          <div className="mt-8 p-4 bg-primary-50 rounded-xl text-center">
            <p className="text-sm text-accent-600">
              💳 Приймаємо картки Visa, Mastercard. Безпечна оплата через Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section id="upcoming" className="section-padding bg-primary-100/30 scroll-mt-24">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary-200">
              <Clock className="text-primary-800" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-accent-900">
              Скоро в продажу
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} ctaHref="#waitlist" />
            ))}
          </div>

          {/* Waitlist Form */}
          <div id="waitlist" className="mt-12 max-w-xl mx-auto scroll-mt-24">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Не впевнені, що обрати?"
        subtitle="Подайте заявку на безкоштовну консультацію — разом знайдемо оптимальне рішення для вас."
        primaryCta={{
          text: 'Записатись на консультацію',
          href: '/mentorship',
        }}
        variant="default"
      />
    </>
  )
}

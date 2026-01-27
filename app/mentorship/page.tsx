import { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { CTASection } from '@/components/ui/CTASection'
import { Check, X, Calendar, Video, MessageSquare, FileText, Clock, Users, Target, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Менторство | Оксана Романів',
  description: 'Індивідуальне менторство для підприємців та лідерів. Глибока робота над бізнесом та особистим розвитком.',
}

const benefits = [
  {
    icon: Video,
    title: 'Персональні сесії',
    description: 'Індивідуальні онлайн-зустрічі 60-90 хвилин у зручний для вас час.',
  },
  {
    icon: MessageSquare,
    title: 'Підтримка між сесіями',
    description: 'Доступ до мене в месенджері для швидких питань та підтримки.',
  },
  {
    icon: FileText,
    title: 'Персональні матеріали',
    description: 'Адаптовані під вас вправи, шаблони та рекомендації.',
  },
  {
    icon: Target,
    title: 'Фокус на результаті',
    description: 'Чіткі цілі та метрики успіху з самого початку роботи.',
  },
]

const packages = [
  {
    name: 'Старт',
    description: 'Для тих, хто хоче спробувати та зрозуміти, чи підходить формат.',
    duration: '1 місяць',
    sessions: '4 сесії',
    features: [
      { text: '4 індивідуальні сесії по 60 хв', included: true },
      { text: 'Підтримка в месенджері', included: true },
      { text: 'Персоналізований план дій', included: true },
      { text: 'Додаткові матеріали', included: false },
      { text: 'Екстрені дзвінки', included: false },
    ],
    price: 'від ₴15,000',
    popular: false,
  },
  {
    name: 'Трансформація',
    description: 'Глибока робота для стійких змін у бізнесі та житті.',
    duration: '3 місяці',
    sessions: '12 сесій',
    features: [
      { text: '12 індивідуальних сесій по 90 хв', included: true },
      { text: 'Необмежена підтримка в месенджері', included: true },
      { text: 'Персоналізований план дій', included: true },
      { text: 'Всі мої продукти безкоштовно', included: true },
      { text: '2 екстрені дзвінки', included: true },
    ],
    price: 'від ₴40,000',
    popular: true,
  },
  {
    name: 'VIP',
    description: 'Максимальна підтримка та глибина роботи.',
    duration: '6 місяців',
    sessions: '24 сесії',
    features: [
      { text: '24 індивідуальні сесії по 90 хв', included: true },
      { text: 'Пріоритетна підтримка 24/7', included: true },
      { text: 'Персоналізована стратегія', included: true },
      { text: 'Всі мої продукти назавжди', included: true },
      { text: 'Необмежені екстрені дзвінки', included: true },
    ],
    price: 'від ₴75,000',
    popular: false,
  },
]

const forWhom = [
  'Підприємці, які хочуть вивести бізнес на новий рівень',
  'Керівники, які прагнуть стати кращими лідерами',
  'Ті, хто відчуває вигорання та шукає баланс',
  'Люди на перехідному етапі карєри чи життя',
  'Ті, хто готовий до глибокої роботи над собою',
]

const notForWhom = [
  'Тим, хто шукає чарівну таблетку без зусиль',
  'Тим, хто не готовий інвестувати час у роботу над собою',
  'Тим, хто очікує готових рішень без участі',
  'Тим, хто не готовий до чесного діалогу',
]

export default function MentorshipPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary-50 to-warm-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-primary mb-4">Індивідуальне менторство</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-900 leading-tight">
              Глибока трансформація для <span className="gradient-text">амбітних лідерів</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-accent-600">
              Персональна робота один на один для тих, хто готовий до справжніх змін 
              у бізнесі та житті. Не просто поради — а системний підхід до вашого росту.
            </p>
            <div className="mt-8">
              <Button href="#apply" size="lg" showArrow>
                Подати заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Що включено"
            title="Як проходить менторство"
            subtitle="Структурований підхід, який приносить результати."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon
              return (
                <article key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-accent-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-accent-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <SectionHeader
            badge="Для кого"
            title="Чи підходить вам менторство?"
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For whom */}
            <div className="card p-6 md:p-8 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-green-100">
                  <Check className="text-green-600" size={20} />
                </div>
                <h3 className="text-xl font-display font-semibold text-accent-900">
                  Менторство для вас, якщо ви:
                </h3>
              </div>
              <ul className="space-y-3">
                {forWhom.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-accent-700">
                    <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for whom */}
            <div className="card p-6 md:p-8 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-red-100">
                  <X className="text-red-600" size={20} />
                </div>
                <h3 className="text-xl font-display font-semibold text-accent-900">
                  Менторство не для вас, якщо ви:
                </h3>
              </div>
              <ul className="space-y-3">
                {notForWhom.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-accent-700">
                    <X size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Пакети"
            title="Оберіть свій формат"
            subtitle="Різні рівні глибини та підтримки для різних потреб."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <article
                key={idx}
                className={`card p-6 md:p-8 relative flex flex-col ${pkg.popular ? 'border-primary-300 ring-2 ring-primary-200' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-primary flex items-center gap-1">
                      <Star size={14} /> Найпопулярніший
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-semibold text-accent-900">
                    {pkg.name}
                  </h3>
                  <p className="text-accent-500 text-sm mt-1">{pkg.description}</p>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm text-accent-600 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {pkg.sessions}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-2 text-sm ${feature.included ? 'text-accent-700' : 'text-accent-400'}`}
                    >
                      {feature.included ? (
                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-accent-300 mt-0.5 flex-shrink-0" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto text-center">
                  <p className="text-2xl font-bold text-accent-900 mb-4">{pkg.price}</p>
                  <Button
                    href="#apply"
                    variant={pkg.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Обрати пакет
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-accent-500 text-sm mt-8">
            * Точна вартість визначається після безкоштовної консультації залежно від ваших цілей та потреб.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-primary-50 scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-primary mb-4">Заявка</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-accent-900">
                Подати заявку на менторство
              </h2>
              <p className="mt-4 text-accent-600">
                Заповніть форму, і я звяжусь з вами протягом 48 годин для безкоштовної 
                ознайомчої консультації.
              </p>
            </div>

            {/* TODO: Netlify Forms integration */}
            <form className="card p-6 md:p-8 space-y-6" data-netlify="true" name="mentorship-application">
              <input type="hidden" name="form-name" value="mentorship-application" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Ваше імя"
                  name="name"
                  placeholder="Як до вас звертатись?"
                  required
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Телефон"
                  name="phone"
                  type="tel"
                  placeholder="+380..."
                />
                <FormField
                  label="Який пакет вас цікавить?"
                  name="package"
                  type="select"
                  options={[
                    { value: 'start', label: 'Старт (1 місяць)' },
                    { value: 'transformation', label: 'Трансформація (3 місяці)' },
                    { value: 'vip', label: 'VIP (6 місяців)' },
                    { value: 'unsure', label: 'Ще не визначився/лась' },
                  ]}
                />
              </div>

              <FormField
                label="Чим ви займаєтесь?"
                name="occupation"
                placeholder="Ваша професія, бізнес або сфера діяльності"
                required
              />

              <FormField
                label="Опишіть вашу поточну ситуацію"
                name="situation"
                type="textarea"
                placeholder="Що привело вас до пошуку ментора? Які виклики ви зараз маєте?"
                rows={4}
                required
              />

              <FormField
                label="Які ваші цілі на найближчий рік?"
                name="goals"
                type="textarea"
                placeholder="Чого ви хочете досягти? Яким бачите результат нашої роботи?"
                rows={4}
                required
              />

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full" showArrow>
                  Надіслати заявку
                </Button>
                <p className="text-xs text-accent-400 text-center mt-4">
                  Надсилаючи форму, ви погоджуєтесь з політикою конфіденційності. 
                  Ваші дані захищені та не передаються третім особам.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Calendar Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="text-primary-500" size={28} />
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-accent-900">
                Або запишіться на дзвінок напряму
              </h2>
            </div>
            <p className="text-accent-600 mb-8">
              Якщо вам зручніше одразу обрати час для безкоштовної ознайомчої консультації — 
              скористайтесь календарем нижче.
            </p>

            {/* TODO: Calendly or Cal.com integration */}
            <div className="card p-8 md:p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-accent-400">
                <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-medium">Календар для запису</p>
                <p className="text-sm">Тут буде інтеграція з Calendly / Cal.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <CTASection
        title="Залишились питання?"
        subtitle="Перегляньте розділ FAQ або напишіть мені напряму — відповім протягом 24 годин."
        primaryCta={{
          text: 'Переглянути FAQ',
          href: '/#faq',
        }}
        secondaryCta={{
          text: 'Звязатись',
          href: '/contact',
        }}
        variant="gradient"
      />
    </div>
  )
}

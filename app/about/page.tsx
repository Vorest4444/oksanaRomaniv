import { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { CTASection } from '@/components/ui/CTASection'
import { Heart, Target, Lightbulb, Shield, Award, Users, BookOpen, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Про мене | Оксана Романів',
  description: 'Дізнайтеся більше про Оксану Романів - бізнес-ментора та коуча з 5+ роками досвіду допомоги підприємцям.',
}

const values = [
  {
    icon: Heart,
    title: 'Автентичність',
    description: 'Вірю у справжність та чесність у роботі з клієнтами. Кожна людина унікальна.',
  },
  {
    icon: Target,
    title: 'Результативність',
    description: 'Фокусуюсь на конкретних, вимірюваних результатах, а не абстрактних обіцянках.',
  },
  {
    icon: Lightbulb,
    title: 'Розвиток',
    description: 'Постійно навчаюсь та вдосконалюю свої методи для кращих результатів.',
  },
  {
    icon: Shield,
    title: 'Підтримка',
    description: 'Створюю безпечний простір для зростання та експериментів без осуду.',
  },
]

const stats = [
  { number: '100+', label: 'Клієнтів', icon: Users },
  { number: '5+', label: 'Років досвіду', icon: Award },
  { number: '500+', label: 'Годин сесій', icon: BookOpen },
  { number: '95%', label: 'Задоволених клієнтів', icon: TrendingUp },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-warm-100 to-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <ImagePlaceholder
                aspectRatio="portrait"
                label="Фото Оксани Романів"
                className="shadow-2xl shadow-accent-900/10"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="badge-primary mb-4">Про мене</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-900 leading-tight">
                Оксана Романів
              </h1>
              <p className="mt-2 text-xl text-primary-600 font-medium">
                Бізнес-ментор та коуч
              </p>
              <div className="mt-6 space-y-4 text-accent-600 leading-relaxed">
                <p>
                  Вітаю! Я - Оксана, і моя місія - допомагати людям знаходити ясність 
                  у хаосі сучасного життя та бізнесу.
                </p>
                <p>
                  За понад 5 років роботи з підприємцями, керівниками та тими, хто шукає 
                  свій шлях, я зрозуміла одне: справжній успіх приходить, коли ми знаходимо 
                  баланс між амбіціями та внутрішнім спокоєм.
                </p>
                <p>
                  Мій підхід поєднує практичні бізнес-стратегії з глибинною роботою над 
                  собою. Бо справжні зміни відбуваються, коли ми змінюємося зсередини.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-warm-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-3">
                    <IconComponent size={20} />
                  </div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-accent-900">
                    {stat.number}
                  </p>
                  <p className="text-accent-500">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              badge="Моя історія"
              title="Шлях до менторства"
              align="left"
            />

            <div className="mt-8 space-y-6 text-accent-600 leading-relaxed">
              <p>
                Мій шлях не був прямим. Як і багато хто, я пройшла через вигорання, 
                невпевненість та пошук сенсу. Саме цей досвід став основою мого підходу 
                до роботи з клієнтами.
              </p>
              <p>
                Після успішної карєри в корпоративному секторі, я зрозуміла, що моє 
                справжнє покликання - допомагати іншим уникати помилок, через які пройшла сама, 
                та знаходити коротший шлях до своїх цілей.
              </p>
              <p>
                Сьогодні я поєдную освіту в галузі бізнесу та психології з практичним 
                досвідом підприємництва. Це дозволяє мені бачити повну картину та 
                допомагати клієнтам не лише будувати бізнес, а й жити повноцінним життям.
              </p>
              
              {/* Education/Certifications placeholder */}
              <div className="mt-8 p-6 bg-warm-100 rounded-2xl">
                <h3 className="font-semibold text-accent-900 mb-4">Освіта та сертифікації</h3>
                <ul className="space-y-2 text-accent-700">
                  {/* TODO: Add actual certifications */}
                  <li>- Сертифікований коуч (ICF)</li>
                  <li>- MBA (назва університету)</li>
                  <li>- Сертифікація з НЛП</li>
                  <li>- Бізнес-консалтинг (назва програми)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <SectionHeader
            badge="Цінності"
            title="Мій підхід до роботи"
            subtitle="Принципи, які лежать в основі кожної взаємодії з клієнтами."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <article key={idx} className="card p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-accent-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-accent-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Галерея"
            title="Моменти з життя та роботи"
          />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* TODO: Replace with actual images */}
            <ImagePlaceholder aspectRatio="square" label="Фото 1" />
            <ImagePlaceholder aspectRatio="square" label="Фото 2" />
            <ImagePlaceholder aspectRatio="square" label="Фото 3" />
            <ImagePlaceholder aspectRatio="square" label="Фото 4" className="hidden md:flex" />
            <ImagePlaceholder aspectRatio="square" label="Фото 5" className="hidden md:flex" />
            <ImagePlaceholder aspectRatio="square" label="Фото 6" className="hidden md:flex" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Готові до трансформації?"
        subtitle="Давайте обговоримо, як я можу допомогти саме вам."
        primaryCta={{
          text: 'Подати заявку на менторство',
          href: '/mentorship',
        }}
        secondaryCta={{
          text: 'Звязатись зі мною',
          href: '/contact',
        }}
        variant="default"
      />
    </div>
  )
}

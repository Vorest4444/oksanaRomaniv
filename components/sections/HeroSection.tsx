import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Sparkles, Users, Target } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-primary mb-6">
              <Sparkles size={16} />
              <span>Бізнес-ментор та коуч</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-900 leading-tight text-balance">
              Знайдіть{' '}
              <span className="gradient-text">ясність</span>
              {' '}у бізнесі та житті
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-accent-600 leading-relaxed max-w-xl">
              Допомагаю підприємцям та лідерам розкрити свій потенціал, 
              побудувати успішний бізнес та знайти баланс між роботою і особистим життям.
            </p>

            {/* Value propositions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-accent-700">
                <Target size={20} className="text-primary-700" />
                <span>Бізнес-рішення</span>
              </div>
              <div className="flex items-center gap-2 text-accent-700">
                <Users size={20} className="text-primary-700" />
                <span>Самопізнання</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/products#free" size="lg" showArrow>
                Отримати безкоштовний ресурс
              </Button>
              <Button href="/mentorship" variant="secondary" size="lg">
                Подати заявку на менторство
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-up relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-accent-900/10">
                <Image
                  src="/photo/2.jpg"
                  alt="Оксана Романів - бізнес-ментор та коуч"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 text-xl font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-accent-900">100+</p>
                    <p className="text-sm text-accent-500">Задоволених клієнтів</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-accent-900">5+ років</p>
                    <p className="text-sm text-accent-500">Досвіду</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

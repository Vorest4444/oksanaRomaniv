import { SectionHeader } from '@/components/ui/SectionHeader'
import { StepCard } from '@/components/ui/StepCard'

const steps = [
  {
    number: 1,
    title: 'Відкриття',
    description: 'Визначаємо вашу поточну ситуацію, цілі та виклики. Глибоко аналізуємо, що стоїть на шляху до успіху.',
  },
  {
    number: 2,
    title: 'Планування',
    description: 'Створюємо чіткий план дій з конкретними кроками та метриками успіху для досягнення ваших цілей.',
  },
  {
    number: 3,
    title: 'Реалізація',
    description: 'Впроваджуємо план з підтримкою та зворотним звязком. Коригуємо стратегію для максимального результату.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionHeader
          badge="Процес роботи"
          title="Як ми працюємо разом"
          subtitle="Простий та ефективний підхід, який допоможе вам досягти результатів швидше."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <StepCard {...step} />
              
              {/* Connector line (hidden on mobile and last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

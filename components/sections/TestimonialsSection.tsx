import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    quote: 'Робота з Оксаною повністю змінила мій підхід до бізнесу. За 3 місяці ми подвоїли дохід і я нарешті маю час на сім\'ю.',
    author: 'Марина К.',
    role: 'Власниця салону краси',
  },
  {
    quote: 'Оксана допомогла мені зрозуміти, чого я справді хочу від життя. Тепер я не просто працюю — я живу повноцінно.',
    author: 'Андрій П.',
    role: 'IT-підприємець',
  },
  {
    quote: 'Професійно, структуровано і з душею. Вперше за роки у мене є чіткий план і впевненість у своїх силах.',
    author: 'Олена В.',
    role: 'Керівник маркетингового агентства',
  },
  {
    quote: 'Менторство з Оксаною — це найкраща інвестиція, яку я зробила у свій бізнес і себе.',
    author: 'Тетяна М.',
    role: 'Засновниця онлайн-школи',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-warm-50">
      <div className="container-custom">
        <SectionHeader
          badge="Відгуки"
          title="Що кажуть клієнти"
          subtitle="Реальні історії людей, які змінили своє життя та бізнес."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

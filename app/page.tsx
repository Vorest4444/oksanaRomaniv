import { HeroSection } from '@/components/sections/HeroSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/ui/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection
        title="Готові почати свій шлях до успіху?"
        subtitle="Отримайте безкоштовний ресурс та зробіть перший крок до змін вже сьогодні."
        primaryCta={{
          text: 'Отримати безкоштовно',
          href: '/products#free',
        }}
        secondaryCta={{
          text: 'Дізнатись про менторство',
          href: '/mentorship',
        }}
        variant="gradient"
      />
    </>
  )
}

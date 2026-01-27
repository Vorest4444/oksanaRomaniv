import { Button } from './Button'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: 'default' | 'gradient'
  className?: string
}

export function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'default',
  className = '',
}: CTASectionProps) {
  const bgStyles = {
    default: 'bg-primary-900 text-white',
    gradient: 'bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white',
  }

  return (
    <section className={`${bgStyles[variant]} ${className}`}>
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base md:text-lg opacity-90 text-balance">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant={variant === 'gradient' ? 'secondary' : 'primary'}
              href={primaryCta.href}
              size="md"
              showArrow
            >
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                href={secondaryCta.href}
                size="md"
                className={variant === 'gradient' ? 'border-white/50 text-white hover:bg-white hover:text-primary-700' : 'border-white/30 text-white hover:bg-white hover:text-accent-900'}
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

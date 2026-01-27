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
    default: 'bg-accent-900 text-white',
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white',
  }

  return (
    <section className={`${bgStyles[variant]} ${className}`}>
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl opacity-90 text-balance">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant={variant === 'gradient' ? 'secondary' : 'primary'}
              href={primaryCta.href}
              size="lg"
              showArrow
            >
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                href={secondaryCta.href}
                size="lg"
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

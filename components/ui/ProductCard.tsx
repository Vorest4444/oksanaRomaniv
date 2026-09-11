import { Check, Clock, Sparkles } from 'lucide-react'
import { Button } from './Button'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  outcome: string
  targetAudience: string
  price?: string
  originalPrice?: string
  badge?: string
  type: 'free' | 'paid' | 'upcoming'
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function ProductCard({
  title,
  description,
  features,
  outcome,
  targetAudience,
  price,
  originalPrice,
  badge,
  type,
  ctaText,
  ctaHref,
  className = '',
}: ProductCardProps) {
  const typeStyles = {
    free: {
      badge: 'badge-success',
      icon: <Sparkles size={18} className="text-primary-600" />,
      cardBorder: 'border-primary-200',
    },
    paid: {
      badge: 'badge-primary',
      icon: <Check size={18} className="text-primary-700" />,
      cardBorder: 'border-primary-300',
    },
    upcoming: {
      badge: 'badge-warning',
      icon: <Clock size={18} className="text-primary-500" />,
      cardBorder: 'border-primary-200',
    },
  }

  const styles = typeStyles[type]

  return (
    <article
      className={`card p-6 md:p-8 flex flex-col h-full ${styles.cardBorder} ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="p-2 rounded-xl bg-primary-50">
          {styles.icon}
        </div>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl md:text-2xl font-display font-semibold text-accent-900 mb-2">
        {title}
      </h3>
      <p className="text-accent-600 mb-4">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-accent-700">
            <Check size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="bg-primary-50 rounded-xl p-4 mb-4">
        <p className="text-sm font-medium text-accent-800">
          <strong>Результат:</strong> {outcome}
        </p>
      </div>

      {/* Target Audience */}
      <p className="text-sm text-accent-500 mb-6">
        <strong>Для кого:</strong> {targetAudience}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Price & CTA */}
      {(price || ctaText) && (
        <div className="mt-auto">
          {price && (
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-accent-900">{price}</span>
              {originalPrice && (
                <span className="text-lg text-accent-400 line-through">{originalPrice}</span>
              )}
            </div>
          )}

          {ctaText && (
            <Button
              variant={type === 'upcoming' ? 'secondary' : 'primary'}
              href={ctaHref}
              className="w-full"
              showArrow
            >
              {ctaText}
            </Button>
          )}
        </div>
      )}
    </article>
  )
}

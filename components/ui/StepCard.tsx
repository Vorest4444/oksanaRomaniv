interface StepCardProps {
  number: number
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function StepCard({
  number,
  title,
  description,
  icon,
  className = '',
}: StepCardProps) {
  return (
    <article className={`text-center ${className}`}>
      {/* Step Number / Icon */}
      <div className="relative inline-flex items-center justify-center mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          {icon ? (
            <div className="text-primary-700">{icon}</div>
          ) : (
            <span className="text-2xl md:text-3xl font-display font-bold text-primary-700">
              {number}
            </span>
          )}
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary-200/50 animate-pulse" />
      </div>

      <h3 className="text-xl md:text-2xl font-display font-semibold text-accent-900 mb-3">
        {title}
      </h3>
      <p className="text-accent-600 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </article>
  )
}

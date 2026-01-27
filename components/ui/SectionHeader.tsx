interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}
    >
      {badge && (
        <span className="badge-primary mb-4 inline-block">
          {badge}
        </span>
      )}
      <h2 className="section-title text-balance">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

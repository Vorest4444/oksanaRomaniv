import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  avatarPlaceholder?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatarPlaceholder,
  className = '',
}: TestimonialCardProps) {
  return (
    <article className={`card p-6 md:p-8 flex flex-col ${className}`}>
      <Quote size={32} className="text-primary-400 mb-4" />
      <blockquote className="flex-1">
        <p className="text-accent-700 leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>
      <footer className="mt-6 flex items-center gap-4">
        {/* Avatar Placeholder */}
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold"
          aria-hidden="true"
        >
          {avatarPlaceholder || author.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-accent-900">{author}</p>
          {role && <p className="text-sm text-accent-500">{role}</p>}
        </div>
      </footer>
    </article>
  )
}

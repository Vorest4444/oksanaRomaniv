'use client'

import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
  showArrow?: boolean
  className?: string
  ariaLabel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  showArrow = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 focus:ring-primary-500',
    secondary: 'bg-white text-accent-800 border border-accent-200 hover:bg-accent-50 hover:border-accent-300 shadow-sm hover:shadow-md focus:ring-accent-500',
    outline: 'bg-transparent text-primary-700 border-2 border-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full gap-1.5',
    md: 'px-6 py-3 text-base rounded-full gap-2',
    lg: 'px-8 py-4 text-lg rounded-full gap-2.5',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {loading && <Loader2 size={size === 'sm' ? 16 : 20} className="animate-spin" />}
      {children}
      {showArrow && !loading && <ArrowRight size={size === 'sm' ? 16 : 20} />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}

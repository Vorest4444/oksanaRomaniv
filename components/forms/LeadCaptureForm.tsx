'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { SuccessModal } from '@/components/ui/Modal'

interface LeadCaptureFormProps {
  formName?: string
  title?: string
  description?: string
  buttonText?: string
  successTitle?: string
  successMessage?: string
}

export function LeadCaptureForm({
  formName = 'free-resource',
  title = 'Отримати безкоштовно',
  description = 'Заповніть форму і отримайте чек-лист на вашу електронну пошту.',
  buttonText = 'Отримати безкоштовно',
  successTitle = 'Дякуємо!',
  successMessage = 'Чек-лист вже летить на вашу пошту. Перевірте вхідні та папку "Спам".',
}: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Netlify Forms integration
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)

    // Reset form
    const form = e.currentTarget
    form.reset()
  }

  return (
    <>
      <div className="card p-6 md:p-8 lg:sticky lg:top-24">
        <h3 className="text-xl font-display font-semibold text-accent-900 mb-4">
          {title}
        </h3>
        <p className="text-accent-600 mb-6">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" data-netlify="true" name={formName}>
          <input type="hidden" name="form-name" value={formName} />
          
          <FormField
            label="Ваше імя"
            name="name"
            placeholder="Як до вас звертатись?"
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
          
          <Button type="submit" className="w-full" showArrow loading={isSubmitting}>
            {isSubmitting ? 'Надсилаємо...' : buttonText}
          </Button>
          
          <p className="text-xs text-accent-400 text-center">
            Натискаючи кнопку, ви погоджуєтесь з{' '}
            <a href="/privacy" className="underline hover:text-primary-600">
              політикою конфіденційності
            </a>.
          </p>
        </form>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title={successTitle}
        message={successMessage}
      />
    </>
  )
}

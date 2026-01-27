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
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/send-free-resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Щось пішло не так')
      }

      setShowSuccess(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Помилка відправки. Спробуйте ще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="card p-6 md:p-8">
        <h3 className="text-xl font-display font-semibold text-accent-900 mb-4">
          {title}
        </h3>
        <p className="text-accent-600 mb-6">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}
          
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

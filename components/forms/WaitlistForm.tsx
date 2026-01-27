'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { SuccessModal } from '@/components/ui/Modal'

interface WaitlistFormProps {
  formName?: string
  title?: string
  description?: string
  buttonText?: string
  successTitle?: string
  successMessage?: string
  options?: { value: string; label: string }[]
}

export function WaitlistForm({
  formName = 'waitlist',
  title = 'Приєднатись до списку очікування',
  description = 'Дізнайтесь першими про запуск нових продуктів та отримайте спеціальну знижку.',
  buttonText = 'Повідомити мене',
  successTitle = 'Ви в списку!',
  successMessage = 'Ми повідомимо вас першими, коли продукт буде доступний. Дякуємо за інтерес!',
  options = [
    { value: 'leadership', label: 'Курс "Лідерство без вигорання"' },
    { value: 'membership', label: 'Membership "Коло розвитку"' },
    { value: 'both', label: 'Обидва продукти' },
  ],
}: WaitlistFormProps) {
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
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          interest: formData.get('interest'),
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
        <h3 className="text-xl font-display font-semibold text-accent-900 mb-2 text-center">
          {title}
        </h3>
        <p className="text-accent-600 mb-6 text-center">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
          <FormField
            label="Який продукт вас цікавить?"
            name="interest"
            type="select"
            options={options}
          />
          
          <Button type="submit" variant="secondary" className="w-full" loading={isSubmitting}>
            {isSubmitting ? 'Надсилаємо...' : buttonText}
          </Button>
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

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget // Store reference before async
    setIsSubmitting(true)

    // TODO: Netlify Forms integration
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)

    // Reset form
    form.reset()
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

        <form onSubmit={handleSubmit} className="space-y-4" data-netlify="true" name={formName}>
          <input type="hidden" name="form-name" value={formName} />
          
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

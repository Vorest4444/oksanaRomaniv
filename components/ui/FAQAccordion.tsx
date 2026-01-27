'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="card overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleItem(idx)}
            className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left hover:bg-warm-50 transition-colors"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            <span className="font-semibold text-accent-900">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`faq-answer-${idx}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-accent-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

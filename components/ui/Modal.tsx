'use client'

import { useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  showCloseButton?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-accent-900/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-accent-400 hover:text-accent-600 hover:bg-warm-100 transition-colors"
            aria-label="Закрити"
          >
            <X size={20} />
          </button>
        )}

        {/* Title */}
        {title && (
          <h2 id="modal-title" className="text-xl font-display font-semibold text-accent-900 mb-4 pr-8">
            {title}
          </h2>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  )
}

// Pre-built Success Modal
interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
  buttonText?: string
}

export function SuccessModal({
  isOpen,
  onClose,
  title = 'Дякуємо!',
  message = 'Вашу заявку успішно надіслано.',
  buttonText = 'Чудово',
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-accent-900 mb-2">
          {title}
        </h2>
        <p className="text-accent-600 mb-6">
          {message}
        </p>
        <Button onClick={onClose} className="w-full">
          {buttonText}
        </Button>
      </div>
    </Modal>
  )
}

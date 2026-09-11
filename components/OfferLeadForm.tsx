'use client';

import { FormEvent, useState } from 'react';
import { Container } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { isValidEmail, submitContact } from '@/lib/contact';
import type { OfferLeadForm as OfferLeadFormConfig } from '@/config/offers/types';

const inputClass =
  'h-14 w-full rounded-full border border-brand-teal/20 bg-white px-6 font-inter text-[16px] text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-green focus:outline-none';

export function OfferLeadForm({
  form,
  offerTitle,
}: {
  form: OfferLeadFormConfig;
  offerTitle: string;
}) {
  const [values, setValues] = useState({ name: '', email: '' });
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.name.trim()) {
      setError('Вкажіть, будь ласка, ваше імʼя');
      return;
    }
    if (!isValidEmail(values.email)) {
      setError('Вкажіть коректний емейл');
      return;
    }

    setError(null);
    setStatus('sending');
    try {
      await submitContact(`Запит про старт: ${offerTitle}`, {
        'Імʼя': values.name,
        Емейл: values.email,
        Запит: form.title,
      });
      setStatus('sent');
      setValues({ name: '', email: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="pb-16 xl:pb-24">
      <Container>
        <div className="flex flex-col gap-8 rounded-2xl bg-brand-green-50 p-6 xl:p-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-[24px] xl:text-[32px] font-medium leading-none tracking-[-0.01em] text-brand-dark">
              {form.title}
            </h2>
            <p className="font-inter text-[16px] font-normal leading-[1.3] tracking-[-0.02em] text-brand-dark/80">
              {form.description}
            </p>
          </div>

          <form
            className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="flex-1">
              <span className="sr-only">{form.namePlaceholder}</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(event) => setValues({ ...values, name: event.target.value })}
                placeholder={form.namePlaceholder}
                className={inputClass}
              />
            </label>
            <label className="flex-1">
              <span className="sr-only">{form.emailPlaceholder}</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(event) => setValues({ ...values, email: event.target.value })}
                placeholder={form.emailPlaceholder}
                className={inputClass}
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-brand-green px-6 font-sans text-[16px] font-medium text-brand-lime transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
            >
              <span>{status === 'sending' ? 'Відправляємо…' : form.submitLabel}</span>
              <ArrowIcon color="#EBFFB1" />
            </button>
          </form>

          <p role="status" aria-live="polite" className="font-inter text-[14px] leading-[1.4]">
            {error && <span className="text-red-700">{error}</span>}
            {status === 'sent' && (
              <span className="text-brand-green">
                Дякую! Повідомлення сформовано — надішліть його з поштової програми, що відкрилась.
              </span>
            )}
            {status === 'error' && (
              <span className="text-red-700">
                Не вдалося відправити. Напишіть, будь ласка, на hello@oksana-romaniv.com
              </span>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}

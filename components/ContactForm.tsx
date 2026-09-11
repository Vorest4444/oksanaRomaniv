'use client';

import { FormEvent, useState } from 'react';
import { ArrowIcon } from '@/components/icons';
import { contactsConfig } from '@/config/contacts';
import { isValidEmail, submitContact } from '@/lib/contact';

const fieldLabelClass =
  'font-inter text-[16px] font-medium leading-none tracking-[-0.02em] text-brand-dark';
const fieldClass =
  'h-14 w-full rounded-full border border-brand-teal/20 bg-white px-6 font-inter text-[16px] text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-green focus:outline-none';

type Errors = Partial<Record<'name' | 'email' | 'topic', string>>;

export function ContactForm() {
  const { fields, submitLabel } = contactsConfig.form;

  const [values, setValues] = useState({ name: '', email: '', topic: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const update = (key: keyof typeof values) => (value: string) => {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!values.name.trim()) nextErrors.name = 'Вкажіть, будь ласка, ваше імʼя';
    if (!values.email.trim()) nextErrors.email = 'Вкажіть емейл для відповіді';
    else if (!isValidEmail(values.email)) nextErrors.email = 'Схоже, у емейлі помилка';
    if (!values.topic) nextErrors.topic = 'Оберіть тему повідомлення';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      await submitContact(`Запит з сайту: ${values.topic}`, {
        'Імʼя': values.name,
        Емейл: values.email,
        Тема: values.topic,
        Повідомлення: values.message,
      });
      setStatus('sent');
      setValues({ name: '', email: '', topic: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  function fieldError(key: keyof Errors) {
    if (!errors[key]) return null;
    return (
      <span role="alert" className="font-inter text-[14px] text-red-700">
        {errors[key]}
      </span>
    );
  }

  const invalid = (key: keyof Errors) =>
    errors[key] ? 'border-red-600 focus:border-red-600' : '';

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <label className="flex flex-col gap-3">
        <span className={fieldLabelClass}>{fields.name.label}</span>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(event) => update('name')(event.target.value)}
          placeholder={fields.name.placeholder}
          aria-invalid={Boolean(errors.name)}
          className={`${fieldClass} ${invalid('name')}`}
        />
        {fieldError('name')}
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClass}>{fields.email.label}</span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => update('email')(event.target.value)}
          placeholder={fields.email.placeholder}
          aria-invalid={Boolean(errors.email)}
          className={`${fieldClass} ${invalid('email')}`}
        />
        {fieldError('email')}
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClass}>{fields.topic.label}</span>
        <select
          name="topic"
          value={values.topic}
          onChange={(event) => update('topic')(event.target.value)}
          aria-invalid={Boolean(errors.topic)}
          className={`${fieldClass} appearance-none ${invalid('topic')} ${
            values.topic ? '' : 'text-brand-dark/40'
          }`}
        >
          <option value="" disabled>
            {fields.topic.placeholder}
          </option>
          {fields.topic.options.map((option) => (
            <option key={option} value={option} className="text-brand-dark">
              {option}
            </option>
          ))}
        </select>
        {fieldError('topic')}
      </label>

      <label className="flex flex-col gap-3">
        <span className="flex items-center gap-2">
          <span className={fieldLabelClass}>{fields.message.label}</span>
          <span className="font-inter text-[14px] font-normal text-brand-dark/40">
            {fields.message.hint}
          </span>
        </span>
        <textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update('message')(event.target.value)}
          placeholder={fields.message.placeholder}
          className={`${fieldClass} h-auto rounded-3xl py-4`}
        />
      </label>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-14 w-fit items-center justify-center gap-2.5 rounded-full bg-brand-green px-6 font-sans text-[16px] font-medium text-brand-lime transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
        >
          <span>{status === 'sending' ? 'Відправляємо…' : submitLabel}</span>
          <ArrowIcon color="#EBFFB1" />
        </button>

        <p role="status" aria-live="polite" className="font-inter text-[14px] leading-[1.4]">
          {status === 'sent' && (
            <span className="text-brand-green">
              Дякую! Повідомлення сформовано — надішліть його з поштової програми, що відкрилась.
            </span>
          )}
          {status === 'error' && (
            <span className="text-red-700">
              Не вдалося відправити. Напишіть, будь ласка, напряму на hello@oksana-romaniv.com
            </span>
          )}
        </p>
      </div>
    </form>
  );
}

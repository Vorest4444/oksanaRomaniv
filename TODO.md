# TODO - Оксана Романів Website

## 🔴 Критично (потрібно для роботи)

### Email та Форми
- [ ] **Верифікувати домен в Resend** - щоб листи приходили всім користувачам
  - Зайти на [resend.com](https://resend.com) → Domains → Add Domain
  - Додати DNS записи (SPF, DKIM, DMARC)
  - Після верифікації змінити `FROM_EMAIL` в `netlify/functions/send-free-resource.ts`
  - Приклад: `Оксана Романів <hello@oksana-romaniv.com>`

- [ ] **Додати RESEND_API_KEY в Netlify**
  - Netlify Dashboard → Site settings → Environment variables
  - Назва: `RESEND_API_KEY`
  - Значення: `re_HD4GeVsE_2sRyArtjchgEX6nyd6T7X4Pq`

### Контент
- [ ] Замінити placeholder відео на актуальне (зараз: Baby Shark 😅)
- [ ] Оновити контактну інформацію в `app/contact/page.tsx`:
  - Email
  - Телефон
  - Посилання на Instagram, Facebook, Telegram

- [ ] Оновити посилання на соцмережі в Footer (`components/layout/Footer.tsx`)

- [ ] Написати реальний текст для Privacy Policy (`app/privacy/page.tsx`)
- [ ] Написати реальний текст для Terms of Service (`app/terms/page.tsx`)

---

## 🟡 Важливо (для повного функціоналу)

### Форми
- [ ] Налаштувати форму "Список очікування" (WaitlistForm) - аналогічно до LeadCaptureForm
- [ ] Налаштувати контактну форму на сторінці Контакти
- [ ] Налаштувати форму заявки на менторство

### Оплата (Stripe)
- [ ] Створити акаунт Stripe
- [ ] Створити Netlify Function для Stripe Checkout
- [ ] Підключити кнопки "Придбати зараз" до оплати

### SEO та Аналітика
- [ ] Додати OG Image (`public/og-image.jpg`) - 1200x630px
- [ ] Оновити домен в `app/layout.tsx` (metadata)
- [ ] Підключити Google Analytics або Plausible
- [ ] Створити sitemap.xml
- [ ] Додати robots.txt

---

## 🟢 Покращення (nice to have)

### Контент
- [ ] Додати реальні фото в галерею на сторінці "Про мене"
- [ ] Замінити placeholder логотипи в секції Social Proof
- [ ] Додати реальні відгуки клієнтів
- [ ] Оновити освіту та сертифікації на сторінці "Про мене"

### Функціонал
- [ ] Підключити Calendly або Cal.com для запису на консультацію
- [ ] Додати блог (опціонально)
- [ ] Налаштувати email-розсилку для списку очікування

### Технічне
- [ ] Налаштувати кастомний домен на Netlify
- [ ] Увімкнути HTTPS (автоматично на Netlify)
- [ ] Оптимізувати зображення (WebP формат)

---

## ✅ Готово

- [x] Створити структуру сайту (Next.js + Tailwind)
- [x] Головна сторінка
- [x] Сторінка "Про мене"
- [x] Сторінка "Продукти"
- [x] Сторінка "Менторство"
- [x] Сторінка "Контакти"
- [x] Адаптивний дизайн (mobile/tablet/desktop)
- [x] Анімований фон
- [x] Темно-зелена кольорова схема
- [x] Додати фотографії Оксани
- [x] Плавний скрол до секцій
- [x] Email autoresponder для безкоштовного ресурсу (Resend)
- [x] Sticky форма в секції "Безкоштовні ресурси"

---

## 📝 Нотатки

### Resend API
- Безкоштовний план: 3000 emails/місяць
- Для збільшення ліміту: платний план або альтернатива (SendGrid, Mailgun)

### Netlify
- Безкоштовний план включає:
  - 100GB bandwidth/місяць
  - 300 build minutes/місяць
  - Serverless functions

### Корисні посилання
- [Resend Dashboard](https://resend.com)
- [Netlify Dashboard](https://app.netlify.com)
- [Stripe Dashboard](https://dashboard.stripe.com)

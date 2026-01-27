import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Умови використання | Оксана Романів',
  description: 'Умови використання сайту та послуг.',
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-accent-900 mb-8">
            Умови використання
          </h1>

          {/* TODO: Replace with actual terms of service content */}
          <div className="prose prose-lg text-accent-700">
            <p className="text-accent-500 italic mb-8">
              Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              1. Загальні умови
            </h2>
            <p>
              Використовуючи цей сайт, ви погоджуєтесь з цими умовами використання. 
              Якщо ви не погоджуєтесь з будь-якою частиною цих умов, будь ласка, 
              не використовуйте наш сайт.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              2. Інтелектуальна власність
            </h2>
            <p>
              Весь контент на цьому сайті, включаючи тексти, зображення, логотипи 
              та матеріали, є інтелектуальною власністю та захищений законом про 
              авторське право.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              3. Послуги та продукти
            </h2>
            <p>
              Ми докладаємо всіх зусиль для точного опису наших послуг та продуктів. 
              Однак ми не гарантуємо, що описи або інший контент є повністю точними, 
              повними або актуальними.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              4. Обмеження відповідальності
            </h2>
            <p>
              Результати роботи з ментором залежать від багатьох факторів, включаючи 
              вашу участь та зусилля. Ми не гарантуємо конкретних результатів.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              5. Оплата та повернення
            </h2>
            <p>
              Умови оплати та повернення коштів визначаються окремо для кожного 
              продукту та послуги. Детальна інформація надається перед покупкою.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              6. Зміни до умов
            </h2>
            <p>
              Ми залишаємо за собою право змінювати ці умови в будь-який час. 
              Продовжуючи користуватись сайтом після змін, ви погоджуєтесь з 
              оновленими умовами.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              7. Контакти
            </h2>
            <p>
              З питань щодо цих умов використання звертайтесь за адресою:{' '}
              <a href="mailto:hello@oksana-romaniv.com" className="text-primary-600 hover:underline">
                hello@oksana-romaniv.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

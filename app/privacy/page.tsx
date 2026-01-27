import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Політика конфіденційності | Оксана Романів',
  description: 'Політика конфіденційності та обробки персональних даних.',
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-accent-900 mb-8">
            Політика конфіденційності
          </h1>

          {/* TODO: Replace with actual privacy policy content */}
          <div className="prose prose-lg text-accent-700">
            <p className="text-accent-500 italic mb-8">
              Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              1. Загальні положення
            </h2>
            <p>
              Ця політика конфіденційності описує, як ми збираємо, використовуємо 
              та захищаємо вашу персональну інформацію, коли ви користуєтесь нашим сайтом.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              2. Яку інформацію ми збираємо
            </h2>
            <p>Ми можемо збирати наступну інформацію:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Ім'я та контактна інформація</li>
              <li>Адреса електронної пошти</li>
              <li>Номер телефону (за бажанням)</li>
              <li>Інформація про ваш бізнес та цілі</li>
              <li>Технічна інформація про ваш пристрій та браузер</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              3. Як ми використовуємо інформацію
            </h2>
            <p>Зібрана інформація використовується для:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Надання послуг та продуктів</li>
              <li>Комунікації з вами</li>
              <li>Покращення нашого сервісу</li>
              <li>Надсилання релевантних матеріалів (за вашою згодою)</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              4. Захист даних
            </h2>
            <p>
              Ми вживаємо всіх необхідних заходів для захисту вашої персональної 
              інформації від несанкціонованого доступу, зміни, розкриття або знищення.
            </p>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              5. Ваші права
            </h2>
            <p>Ви маєте право:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Запитати доступ до своїх персональних даних</li>
              <li>Вимагати виправлення неточних даних</li>
              <li>Вимагати видалення ваших даних</li>
              <li>Відкликати згоду на обробку даних</li>
            </ul>

            <h2 className="text-xl font-display font-semibold text-accent-900 mt-8 mb-4">
              6. Контакти
            </h2>
            <p>
              Якщо у вас є питання щодо цієї політики конфіденційності, 
              зв'яжіться з нами за адресою:{' '}
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

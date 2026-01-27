import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакти | Оксана Романів',
  description: 'Звяжіться з Оксаною Романів. Форма зворотного звязку, email, телефон та соціальні мережі.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@oksana-romaniv.com',
    href: 'mailto:hello@oksana-romaniv.com',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+380 XX XXX XX XX',
    href: 'tel:+380XXXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Локація',
    value: 'Україна (онлайн по всьому світу)',
    href: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@oksana.romaniv',
    href: 'https://instagram.com/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'Оксана Романів',
    href: 'https://facebook.com/',
  },
  {
    icon: Send,
    label: 'Telegram',
    handle: '@oksana_romaniv',
    href: 'https://t.me/',
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-warm-100 to-warm-50">
        <div className="container-custom text-center">
          <span className="badge-primary mb-4">Контакти</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-900 leading-tight">
            Давайте поспілкуємось
          </h1>
          <p className="mt-6 text-lg md:text-xl text-accent-600 max-w-2xl mx-auto">
            Маєте питання, пропозицію або просто хочете познайомитись? 
            Я завжди рада новим знайомствам та можливостям.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-xl font-display font-semibold text-accent-900 mb-6">
                  Контактна інформація
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, idx) => {
                    const IconComponent = item.icon
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary-100 text-primary-600">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-accent-500">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-accent-900 font-medium hover:text-primary-600 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-accent-900 font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <Clock size={18} />
                  <span className="font-medium">Час відповіді</span>
                </div>
                <p className="text-sm text-green-600">
                  Зазвичай відповідаю протягом 24-48 годин у робочі дні.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-xl font-display font-semibold text-accent-900 mb-6">
                  Соціальні мережі
                </h2>
                <div className="space-y-3">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-warm-100 hover:bg-warm-200 transition-colors group"
                      >
                        <div className="text-accent-600 group-hover:text-primary-600 transition-colors">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <p className="font-medium text-accent-900 group-hover:text-primary-600 transition-colors">
                            {social.label}
                          </p>
                          <p className="text-sm text-accent-500">{social.handle}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-display font-semibold text-accent-900 mb-2">
                  Написати повідомлення
                </h2>
                <p className="text-accent-600 mb-8">
                  Заповніть форму нижче, і я відповім вам якнайшвидше.
                </p>

                {/* TODO: Netlify Forms integration */}
                <form className="space-y-6" data-netlify="true" name="contact">
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <FormField
                    label="Тема повідомлення"
                    name="subject"
                    type="select"
                    options={[
                      { value: 'general', label: 'Загальне питання' },
                      { value: 'mentorship', label: 'Питання про менторство' },
                      { value: 'products', label: 'Питання про продукти' },
                      { value: 'collaboration', label: 'Пропозиція співпраці' },
                      { value: 'media', label: 'Запит від ЗМІ' },
                      { value: 'other', label: 'Інше' },
                    ]}
                    required
                  />

                  <FormField
                    label="Ваше повідомлення"
                    name="message"
                    type="textarea"
                    placeholder="Опишіть ваше питання або пропозицію детальніше..."
                    rows={6}
                    required
                  />

                  {/* Honeypot for spam protection */}
                  <div className="hidden">
                    <input type="text" name="bot-field" />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg" className="w-full md:w-auto" showArrow>
                      Надіслати повідомлення
                    </Button>
                  </div>

                  <p className="text-xs text-accent-400">
                    Натискаючи кнопку, ви погоджуєтесь з{' '}
                    <a href="/privacy" className="underline hover:text-primary-600">
                      політикою конфіденційності
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-accent-900 mb-4">
              Часті питання? Перегляньте FAQ
            </h2>
            <p className="text-accent-600 mb-8">
              Можливо, відповідь на ваше питання вже є на сайті.
            </p>
            <Button href="/#faq" variant="secondary" showArrow>
              Перейти до FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

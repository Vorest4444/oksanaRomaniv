import Link from 'next/link'
import { Instagram, Facebook, Mail, Heart } from 'lucide-react'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Головна' },
    { href: '/about', label: 'Про мене' },
    { href: '/products', label: 'Продукти' },
    { href: '/mentorship', label: 'Менторство' },
    { href: '/contact', label: 'Контакти' },
  ],
  legal: [
    { href: '/privacy', label: 'Політика конфіденційності' },
    { href: '/terms', label: 'Умови використання' },
  ],
  social: [
    { href: 'https://instagram.com/', label: 'Instagram', icon: Instagram }, // TODO: Add actual Instagram link
    { href: 'https://facebook.com/', label: 'Facebook', icon: Facebook }, // TODO: Add actual Facebook link
    { href: 'mailto:hello@oksana-romaniv.com', label: 'Email', icon: Mail }, // TODO: Add actual email
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-900 text-warm-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Підвал сайту
      </h2>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-white hover:text-primary-300 transition-colors"
            >
              Оксана Романів
            </Link>
            <p className="mt-4 text-warm-300 max-w-md leading-relaxed">
              Допомагаю підприємцям та лідерам знайти ясність у бізнесі та житті. 
              Разом ми створимо чіткий план для вашого успіху.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent-800 text-warm-300 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навігація</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-300 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Інформація</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-300 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Newsletter placeholder */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Підписатись на оновлення</h4>
              {/* TODO: Netlify Forms integration */}
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 rounded-lg bg-accent-800 border border-accent-700 text-white placeholder-warm-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Email для підписки"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-400 text-sm">
            © {currentYear} Оксана Романів. Усі права захищено.
          </p>
          <p className="text-warm-400 text-sm flex items-center gap-1">
            Зроблено з <Heart size={14} className="text-primary-400" /> в Україні
          </p>
        </div>
      </div>
    </footer>
  )
}

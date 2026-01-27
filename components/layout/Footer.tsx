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
    <footer className="bg-primary-900 text-primary-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Підвал сайту
      </h2>

      <div className="container-custom py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-white hover:text-primary-300 transition-colors"
            >
              Оксана Романів
            </Link>
            <p className="mt-3 text-primary-200 max-w-md text-sm leading-relaxed">
              Допомагаю підприємцям та лідерам знайти ясність у бізнесі та житті.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-800 text-primary-200 hover:bg-white hover:text-primary-900 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Навігація</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Інформація</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Newsletter placeholder */}
            <div className="mt-4">
              <h4 className="text-white font-medium text-sm mb-2">Підписатись</h4>
              {/* TODO: Netlify Forms integration */}
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-300 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Email для підписки"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-white text-primary-900 text-sm font-medium hover:bg-primary-100 transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-primary-300 text-sm">
            © {currentYear} Оксана Романів. Усі права захищено.
          </p>
          <p className="text-primary-300 text-sm flex items-center gap-1">
            Зроблено з <Heart size={14} className="text-white" /> в Україні
          </p>
        </div>
      </div>
    </footer>
  )
}

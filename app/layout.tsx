import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Оксана Романів | Бізнес-ментор та коуч',
  description: 'Допомагаю підприємцям та лідерам знайти ясність у бізнесі та житті. Менторство, коучинг та практичні інструменти для вашого розвитку.',
  keywords: ['бізнес-ментор', 'коуч', 'саморозвиток', 'бізнес-консультації', 'менторство', 'Оксана Романів'],
  authors: [{ name: 'Оксана Романів' }],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://oksana-romaniv.com', // TODO: Update with actual domain
    siteName: 'Оксана Романів',
    title: 'Оксана Романів | Бізнес-ментор та коуч',
    description: 'Допомагаю підприємцям та лідерам знайти ясність у бізнесі та житті.',
    images: [
      {
        url: '/og-image.jpg', // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: 'Оксана Романів - Бізнес-ментор та коуч',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оксана Романів | Бізнес-ментор та коуч',
    description: 'Допомагаю підприємцям та лідерам знайти ясність у бізнесі та житті.',
    images: ['/og-image.jpg'], // TODO: Add actual OG image
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

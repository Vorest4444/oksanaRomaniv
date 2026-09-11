import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Fixel (MacPaw, OFL) stands in for the design's PP Neue Montreal / Satoshi,
// neither of which ships Cyrillic glyphs. See public/fonts/Fixel-OFL.txt.
const fixelText = localFont({
  src: [
    { path: '../public/fonts/FixelText-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/FixelText-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-fixel-text',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const fixelDisplay = localFont({
  src: [
    { path: '../public/fonts/FixelDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/FixelDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-fixel-display',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Оксана Романів — бізнес-ментор та коуч',
  description:
    'Допомагаю підприємцям та лідерам розкрити свій потенціал, побудувати успішний бізнес та знайти баланс між роботою і особистим життям.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${fixelText.variable} ${fixelDisplay.variable} ${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

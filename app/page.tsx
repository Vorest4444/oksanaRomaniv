import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ScrollFadeSection } from '@/components/ScrollFadeSection';
import { ScrollPhotosSection } from '@/components/ScrollPhotosSection';
import { ClaritySection } from '@/components/ClaritySection';
import { ProductsSection } from '@/components/ProductsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

const ForWhoSection = dynamic(
  () => import('@/components/ForWhoSection').then((mod) => ({ default: mod.ForWhoSection })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-header-mobile xl:pt-header">
        <Hero />
        <div className="mt-[80px] xl:mt-[90px] 2xl:mt-[100px]">
          <ScrollFadeSection />
        </div>
        <ForWhoSection />
        <ClaritySection />
        <ProductsSection />
        <TestimonialsSection />
        <ScrollPhotosSection />
      </main>
      <Footer />
    </>
  );
}

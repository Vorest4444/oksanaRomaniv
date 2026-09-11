import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OfferPage } from '@/components/OfferPage';
import { offers, offerBySlug } from '@/config/offers';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const offer = offerBySlug[params.slug];
  if (!offer) return {};

  return { title: offer.metaTitle, description: offer.description };
}

export default function ProductDetailPage({ params }: PageProps) {
  const offer = offerBySlug[params.slug];
  if (!offer) notFound();

  return <OfferPage offer={offer} />;
}

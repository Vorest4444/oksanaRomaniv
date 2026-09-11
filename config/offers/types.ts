import type { TitleSegment } from '@/components/ui';

export type StepIconName = 'cursorClick' | 'card' | 'mail' | 'checkRead';

export interface OfferPerson {
  name: string;
  role: string;
  avatar?: string;
}

export interface OfferSection {
  title: string;
  /** Paragraphs set in the darker medium weight. */
  lead?: readonly string[];
  /** Regular body paragraphs. */
  body?: readonly string[];
  list?: readonly string[];
  people?: readonly OfferPerson[];
}

/**
 * One entry inside a sidebar block. The same shape covers course contents,
 * numbered steps, weekly modules and day schedules.
 */
export interface OfferBlockItem {
  title?: string;
  /** Small accent label above the title, e.g. "Крок 1". */
  label?: string;
  icon?: StepIconName;
  intro?: string;
  list?: readonly string[];
  text?: string;
  outro?: string;
}

export interface OfferBlock {
  eyebrow: string;
  items: readonly OfferBlockItem[];
}

export interface OfferCta {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface OfferLeadForm {
  title: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  submitLabel: string;
}

export interface Offer {
  slug: string;
  metaTitle: string;
  titleSegments: readonly TitleSegment[];
  description: string;
  tags: readonly string[];
  photos: {
    wide: { src: string; alt: string };
    tall: { src: string; alt: string };
  };
  sections: readonly OfferSection[];
  sidebar: {
    blocks: readonly OfferBlock[];
    note?: string;
    price?: { label?: string; original?: string; current: string };
    ctas: readonly OfferCta[];
  };
  /** Full-width photo band below the content. */
  band?: { src: string; alt: string };
  leadForm?: OfferLeadForm;
}

import { miniCourse } from './miniCourse';
import { program } from './program';
import { retreat } from './retreat';
import { session } from './session';

export const offers = [miniCourse, program, retreat, session];

export const offerBySlug = Object.fromEntries(offers.map((offer) => [offer.slug, offer]));

export type { Offer } from './types';

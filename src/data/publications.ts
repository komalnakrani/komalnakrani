export type PublicationStatus = 'planned' | 'research' | 'draft' | 'review' | 'published';
export type CoverTone = 'indigo' | 'ink' | 'clay' | 'paper' | 'blueprint';

export interface Chapter {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
}

export interface Book {
  slug: string;
  roleSlug: string;
  series: string;
  volume: number;
  title: string;
  subtitle: string;
  description: string;
  edition: string;
  status: PublicationStatus;
  cover: CoverTone;
  chapters: Chapter[];
}

export interface Role {
  slug: string;
  title: string;
  summary: string;
  status: PublicationStatus;
}

// Production records are added only after original research and review.
// The inherited catalog was deliberately removed; no placeholder is presented
// as a Komal-authored publication.
export const ROLES: Role[] = [];
export const BOOKS: Book[] = [];

export function booksForRole(roleSlug: string): Book[] {
  return BOOKS.filter((book) => book.roleSlug === roleSlug);
}

export type PublicationStatus = 'planned' | 'research' | 'draft' | 'review' | 'published' | 'withdrawn';
export type CoverTone = 'indigo' | 'ink' | 'clay' | 'paper' | 'blueprint';

export interface Chapter {
  order: number;
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  sourceFile: string;
  objectiveIds: string[];
}

export interface Edition {
  version: string;
  label: string;
  publishedAt: string | null;
  copyrightYear: number;
  canonicalUrl: string;
}

export interface PublicationManifest {
  schemaVersion: 1;
  slug: string;
  roleSlug: string;
  series: { slug: string; title: string };
  volume: number;
  title: string;
  subtitle: string;
  description: string;
  author: 'Komal Nakrani';
  language: 'en';
  status: PublicationStatus;
  cover: CoverTone;
  edition: Edition;
  chapters: Chapter[];
  registries: { sources: string; claims: string; figures: string; errata: string };
  pdf: { enabled: boolean; filename: string };
}

export interface RoleManifest {
  schemaVersion: 1;
  slug: string;
  title: string;
  summary: string;
  status: PublicationStatus;
  boundary: { includes: string[]; excludes: string[] };
  competencies: Array<{
    id: string;
    title: string;
    description: string;
    objectives: Array<{ id: string; statement: string }>;
  }>;
}

export interface Erratum {
  id: string;
  editionVersion: string;
  status: 'open' | 'corrected' | 'declined';
  reportedAt: string;
  resolvedAt: string | null;
  chapterSlug: string;
  location: string;
  description: string;
  correction: string | null;
}

interface ErrataRegistry { schemaVersion: 1; errata: Erratum[] }

const publicationModules = import.meta.glob<{ default: PublicationManifest }>(
  '../../content/publications/*/publication.json',
  { eager: true },
);
const roleModules = import.meta.glob<{ default: RoleManifest }>('../../content/roles/*/role.json', {
  eager: true,
});
const errataModules = import.meta.glob<{ default: ErrataRegistry }>(
  '../../content/publications/*/errata.json',
  { eager: true },
);

function directorySlug(path: string): string {
  return path.split('/').at(-2) ?? '';
}

export const BOOKS = Object.entries(publicationModules)
  .map(([, module]) => module.default)
  .filter((book) => book.status === 'published')
  .sort((a, b) => a.series.title.localeCompare(b.series.title) || a.volume - b.volume);

export const ROLES = Object.values(roleModules)
  .map((module) => module.default)
  .filter((role) => role.status === 'published')
  .sort((a, b) => a.title.localeCompare(b.title));

const errataByBook = new Map(
  Object.entries(errataModules).map(([path, module]) => [directorySlug(path), module.default.errata]),
);

export function booksForRole(roleSlug: string): PublicationManifest[] {
  return BOOKS.filter((book) => book.roleSlug === roleSlug);
}

export function errataForBook(bookSlug: string): Erratum[] {
  return errataByBook.get(bookSlug) ?? [];
}

export type CourseStatus = 'draft' | 'review' | 'published' | 'withdrawn';
export type CourseModality = 'demonstration' | 'guided-lab' | 'debugging' | 'scenario-walkthrough' | 'project-checkpoint' | 'capstone';

export interface CourseModule {
  order: number;
  id: string;
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  sourceFile: string;
  labId: string;
  labCommand: string;
  objectiveIds: string[];
  modalities: CourseModality[];
}

export interface CourseManifest {
  schemaVersion: 1;
  slug: string;
  roleSlug: string;
  publicationSlug: string;
  title: string;
  subtitle: string;
  description: string;
  author: 'Komal Nakrani';
  language: 'en';
  status: CourseStatus;
  optional: true;
  delivery: 'self-paced-guided-lab';
  level: 'foundational' | 'professional' | 'advanced';
  durationMinutes: number;
  prerequisites: string[];
  outcomes: string[];
  certificationPolicy: string;
  labKit: { entry: string; testsDirectory: string; runCommand: string; testCommand: string };
  modules: CourseModule[];
}

const courseModules = import.meta.glob<{ default: CourseManifest }>('../../content/courses/*/course.json', { eager: true });

export const COURSES = Object.values(courseModules)
  .map((module) => module.default)
  .filter((course) => course.status === 'published')
  .sort((a, b) => a.title.localeCompare(b.title));

export function coursesForRole(roleSlug: string): CourseManifest[] {
  return COURSES.filter((course) => course.roleSlug === roleSlug);
}

export function courseForPublication(publicationSlug: string): CourseManifest | undefined {
  return COURSES.find((course) => course.publicationSlug === publicationSlug);
}

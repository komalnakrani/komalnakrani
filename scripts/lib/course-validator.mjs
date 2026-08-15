import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import matter from 'gray-matter';

const forbiddenDashes = /[\u2011\u2012\u2013\u2014\u2212]/u;
const requiredModalities = new Set([
  'demonstration',
  'guided-lab',
  'debugging',
  'scenario-walkthrough',
  'project-checkpoint',
  'capstone',
]);
const frontmatterKeys = new Set(['id', 'title', 'slug', 'summary', 'minutes', 'labId', 'objectiveIds']);

async function json(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

async function exists(file) {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
}

async function directories(parent) {
  try {
    return (await readdir(parent, { withFileTypes: true }))
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
      .map((entry) => path.join(parent, entry.name));
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }
}

function safeChild(root, relative, label, errors) {
  const resolved = path.resolve(root, relative);
  if (path.isAbsolute(relative) || (!resolved.startsWith(`${root}${path.sep}`) && resolved !== root)) {
    errors.push(`${label} escapes its course directory: ${relative}`);
    return null;
  }
  return resolved;
}

function duplicates(values) {
  const seen = new Set();
  return [...new Set(values.filter((value) => (seen.has(value) ? true : !seen.add(value))))];
}

export async function validateCourses(options = {}) {
  const root = path.resolve(options.root ?? process.cwd());
  const courseRoot = path.join(root, options.courseRoot ?? 'content/courses');
  const schema = await json(path.join(root, options.schemaFile ?? 'schemas/course.schema.json'));
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const errors = [];
  const courses = [];

  for (const directory of await directories(courseRoot)) {
    const manifestFile = path.join(directory, 'course.json');
    if (!(await exists(manifestFile))) {
      errors.push(`${path.relative(root, directory)} is missing course.json`);
      continue;
    }
    const manifest = await json(manifestFile);
    if (!validate(manifest)) {
      for (const error of validate.errors ?? []) {
        errors.push(`${path.relative(root, manifestFile)}${error.instancePath || '/'} ${error.message}`);
      }
    }
    if (manifest.slug !== path.basename(directory)) {
      errors.push(`${path.relative(root, manifestFile)} slug must match directory name`);
    }
    if (!(await exists(path.join(root, 'content/roles', manifest.roleSlug, 'role.json')))) {
      errors.push(`${manifest.slug} references missing role ${manifest.roleSlug}`);
    }
    if (!(await exists(path.join(root, 'content/publications', manifest.publicationSlug, 'publication.json')))) {
      errors.push(`${manifest.slug} references missing publication ${manifest.publicationSlug}`);
    }

    const modules = manifest.modules ?? [];
    if (modules.some((module, index) => module.order !== index + 1)) {
      errors.push(`${manifest.slug} module order must be contiguous and sorted from 1`);
    }
    for (const field of ['id', 'slug', 'sourceFile', 'labId']) {
      for (const duplicate of duplicates(modules.map((module) => module[field]))) {
        errors.push(`${manifest.slug} contains duplicate module ${field} ${duplicate}`);
      }
    }

    const courseModalities = new Set(modules.flatMap((module) => module.modalities ?? []));
    for (const modality of requiredModalities) {
      if (!courseModalities.has(modality)) errors.push(`${manifest.slug} is missing required modality ${modality}`);
    }

    for (const module of modules) {
      const moduleFile = safeChild(directory, module.sourceFile, `${manifest.slug} module ${module.id}`, errors);
      if (!moduleFile || !(await exists(moduleFile))) {
        errors.push(`${manifest.slug} module file does not exist: ${module.sourceFile}`);
        continue;
      }
      const raw = await readFile(moduleFile, 'utf8');
      const parsed = matter(raw);
      const unknownKeys = Object.keys(parsed.data).filter((key) => !frontmatterKeys.has(key));
      if (unknownKeys.length) errors.push(`${path.relative(root, moduleFile)} has unknown frontmatter keys: ${unknownKeys.join(', ')}`);
      for (const key of ['id', 'title', 'slug', 'summary', 'minutes', 'labId', 'objectiveIds']) {
        if (parsed.data[key] === undefined) errors.push(`${path.relative(root, moduleFile)} is missing frontmatter ${key}`);
      }
      for (const key of ['id', 'title', 'slug', 'summary', 'minutes', 'labId']) {
        if (parsed.data[key] !== module[key]) errors.push(`${path.relative(root, moduleFile)} ${key} does not match course.json`);
      }
      if (JSON.stringify(parsed.data.objectiveIds) !== JSON.stringify(module.objectiveIds)) {
        errors.push(`${path.relative(root, moduleFile)} objectiveIds do not match course.json`);
      }
      if (manifest.status === 'published' && parsed.content.trim().length < 2_000) {
        errors.push(`${path.relative(root, moduleFile)} is too short for a published guided lab module`);
      }
      if (!raw.includes('NOT FOR LIVE CERTIFICATION BANK')) {
        errors.push(`${path.relative(root, moduleFile)} is missing the certification-bank boundary`);
      }
      if (/SOURCE GAP|TODO|TBD|PLACEHOLDER/.test(raw)) {
        errors.push(`${path.relative(root, moduleFile)} contains an unresolved placeholder`);
      }
      if (forbiddenDashes.test(raw)) {
        errors.push(`${path.relative(root, moduleFile)} contains a non-ASCII dash prohibited by the content pipeline`);
      }
    }

    const entry = safeChild(directory, manifest.labKit?.entry ?? '', `${manifest.slug} lab entry`, errors);
    if (entry && !(await exists(entry))) errors.push(`${manifest.slug} lab entry does not exist: ${manifest.labKit.entry}`);
    const testsDirectory = path.resolve(directory, manifest.labKit?.testsDirectory ?? '');
    const testFiles = await directories(testsDirectory).catch(() => []);
    let namedTests = [];
    try {
      namedTests = (await readdir(testsDirectory)).filter((name) => name.endsWith('.test.mjs'));
    } catch {}
    if (testFiles.length === 0 && namedTests.length === 0) errors.push(`${manifest.slug} lab kit has no test files`);

    courses.push({ directory, manifest });
  }

  return { ok: errors.length === 0, errors, courses };
}

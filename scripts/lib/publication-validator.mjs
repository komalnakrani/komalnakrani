import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import matter from 'gray-matter';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '../..');
const schemaDirectory = path.join(repositoryRoot, 'schemas');
const forbiddenDashes = /[\u2011\u2012\u2013\u2014\u2212]/u;
const frontmatterKeys = new Set([
  'title',
  'slug',
  'summary',
  'minutes',
  'sourceIds',
  'claimIds',
  'objectiveIds',
  'figureIds',
]);

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

function formatAjvErrors(file, errors = []) {
  return errors.map((error) => `${file}${error.instancePath || '/'} ${error.message}`);
}

function duplicateValues(items) {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of items) {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  }
  return [...duplicates];
}

function safeChild(root, relative, label, errors) {
  const resolved = path.resolve(root, relative);
  if (path.isAbsolute(relative) || (!resolved.startsWith(`${root}${path.sep}`) && resolved !== root)) {
    errors.push(`${label} escapes its publication directory: ${relative}`);
    return null;
  }
  return resolved;
}

async function loadSchemas() {
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  const schemaNames = ['role', 'publication', 'sources', 'claims', 'figures', 'errata'];
  const validators = {};
  for (const name of schemaNames) {
    const schema = await json(path.join(schemaDirectory, `${name}.schema.json`));
    validators[name] = ajv.compile(schema);
  }
  return validators;
}

export async function validateWorkspace(options = {}) {
  const root = path.resolve(options.root ?? process.cwd());
  const contentRoot = path.resolve(root, options.contentRoot ?? 'content');
  const errors = [];
  const validators = await loadSchemas();
  const roleRoot = path.join(contentRoot, 'roles');
  const publicationRoot = path.join(contentRoot, 'publications');
  const roles = new Map();

  for (const directory of await directories(roleRoot)) {
    const file = path.join(directory, 'role.json');
    if (!(await exists(file))) {
      errors.push(`${path.relative(root, directory)} is missing role.json`);
      continue;
    }
    const role = await json(file);
    if (!validators.role(role)) errors.push(...formatAjvErrors(path.relative(root, file), validators.role.errors));
    if (role.slug !== path.basename(directory)) {
      errors.push(`${path.relative(root, file)} slug must match directory name`);
    }
    const competencyIds = role.competencies?.map((item) => item.id) ?? [];
    const objectiveIds = role.competencies?.flatMap((item) => item.objectives.map((objective) => objective.id)) ?? [];
    for (const duplicate of duplicateValues([...competencyIds, ...objectiveIds])) {
      errors.push(`${path.relative(root, file)} contains duplicate competency/objective id ${duplicate}`);
    }
    roles.set(role.slug, { role, objectiveIds: new Set(objectiveIds) });
  }

  const publications = [];
  for (const directory of await directories(publicationRoot)) {
    const manifestFile = path.join(directory, 'publication.json');
    if (!(await exists(manifestFile))) {
      errors.push(`${path.relative(root, directory)} is missing publication.json`);
      continue;
    }
    const manifest = await json(manifestFile);
    if (!validators.publication(manifest)) {
      errors.push(...formatAjvErrors(path.relative(root, manifestFile), validators.publication.errors));
    }
    if (manifest.slug !== path.basename(directory)) {
      errors.push(`${path.relative(root, manifestFile)} slug must match directory name`);
    }
    const roleRecord = roles.get(manifest.roleSlug);
    if (!roleRecord) errors.push(`${path.relative(root, manifestFile)} references missing role ${manifest.roleSlug}`);

    const registryRecords = {};
    for (const [kind, schemaName] of [
      ['sources', 'sources'],
      ['claims', 'claims'],
      ['figures', 'figures'],
      ['errata', 'errata'],
    ]) {
      const relative = manifest.registries?.[kind];
      if (typeof relative !== 'string') continue;
      const registryFile = safeChild(directory, relative, `${manifest.slug} ${kind} registry`, errors);
      if (!registryFile || !(await exists(registryFile))) {
        errors.push(`${manifest.slug} is missing ${kind} registry ${relative}`);
        continue;
      }
      const record = await json(registryFile);
      if (!validators[schemaName](record)) {
        errors.push(...formatAjvErrors(path.relative(root, registryFile), validators[schemaName].errors));
      }
      registryRecords[kind] = record;
    }

    const chapters = manifest.chapters ?? [];
    for (const field of ['order', 'slug', 'sourceFile']) {
      for (const duplicate of duplicateValues(chapters.map((chapter) => chapter[field]))) {
        errors.push(`${manifest.slug} contains duplicate chapter ${field} ${duplicate}`);
      }
    }
    const expectedOrders = chapters.map((_, index) => index + 1);
    if (chapters.some((chapter, index) => chapter.order !== expectedOrders[index])) {
      errors.push(`${manifest.slug} chapter order must be contiguous and sorted from 1`);
    }

    const sourceIds = new Set((registryRecords.sources?.sources ?? []).map((source) => source.id));
    const claimIds = new Set((registryRecords.claims?.claims ?? []).map((claim) => claim.id));
    const figureIds = new Set((registryRecords.figures?.figures ?? []).map((figure) => figure.id));
    const chapterSlugs = new Set(chapters.map((chapter) => chapter.slug));
    for (const collection of ['sources', 'claims', 'figures', 'errata']) {
      const key = collection === 'errata' ? 'errata' : collection;
      const idList = (registryRecords[collection]?.[key] ?? []).map((item) => item.id);
      for (const duplicate of duplicateValues(idList)) errors.push(`${manifest.slug} contains duplicate ${collection} id ${duplicate}`);
    }

    for (const source of registryRecords.sources?.sources ?? []) {
      for (const slug of source.usedIn.chapterSlugs) {
        if (!chapterSlugs.has(slug)) errors.push(`${manifest.slug} source ${source.id} maps to unknown chapter ${slug}`);
      }
      for (const claimId of source.usedIn.claimIds) {
        if (!claimIds.has(claimId)) errors.push(`${manifest.slug} source ${source.id} maps to unknown claim ${claimId}`);
      }
    }
    for (const claim of registryRecords.claims?.claims ?? []) {
      if (!chapterSlugs.has(claim.chapterSlug)) errors.push(`${manifest.slug} claim ${claim.id} maps to unknown chapter ${claim.chapterSlug}`);
      for (const sourceId of claim.sourceIds) {
        if (!sourceIds.has(sourceId)) errors.push(`${manifest.slug} claim ${claim.id} references unknown source ${sourceId}`);
      }
    }
    for (const figure of registryRecords.figures?.figures ?? []) {
      if (!chapterSlugs.has(figure.chapterSlug)) errors.push(`${manifest.slug} figure ${figure.id} maps to unknown chapter ${figure.chapterSlug}`);
      for (const sourceId of figure.sourceIds) {
        if (!sourceIds.has(sourceId)) errors.push(`${manifest.slug} figure ${figure.id} references unknown source ${sourceId}`);
      }
      const figureFile = safeChild(directory, figure.file, `${manifest.slug} figure ${figure.id}`, errors);
      if (figureFile && !(await exists(figureFile))) errors.push(`${manifest.slug} figure ${figure.id} file does not exist: ${figure.file}`);
    }
    for (const erratum of registryRecords.errata?.errata ?? []) {
      if (!chapterSlugs.has(erratum.chapterSlug)) errors.push(`${manifest.slug} erratum ${erratum.id} maps to unknown chapter ${erratum.chapterSlug}`);
      if (erratum.editionVersion !== manifest.edition.version) errors.push(`${manifest.slug} erratum ${erratum.id} targets a different edition`);
      if (erratum.status === 'corrected' && (!erratum.resolvedAt || !erratum.correction)) {
        errors.push(`${manifest.slug} corrected erratum ${erratum.id} requires resolvedAt and correction`);
      }
    }

    for (const chapter of chapters) {
      const chapterFile = safeChild(directory, chapter.sourceFile, `${manifest.slug} chapter ${chapter.slug}`, errors);
      if (!chapterFile || !(await exists(chapterFile))) {
        errors.push(`${manifest.slug} chapter file does not exist: ${chapter.sourceFile}`);
        continue;
      }
      const raw = await readFile(chapterFile, 'utf8');
      const parsed = matter(raw);
      const unknownKeys = Object.keys(parsed.data).filter((key) => !frontmatterKeys.has(key));
      if (unknownKeys.length) errors.push(`${path.relative(root, chapterFile)} has unknown frontmatter keys: ${unknownKeys.join(', ')}`);
      for (const key of ['title', 'slug', 'summary', 'minutes', 'sourceIds', 'claimIds', 'objectiveIds']) {
        if (parsed.data[key] === undefined) errors.push(`${path.relative(root, chapterFile)} is missing frontmatter ${key}`);
      }
      for (const key of ['title', 'slug', 'summary', 'minutes']) {
        if (parsed.data[key] !== chapter[key]) errors.push(`${path.relative(root, chapterFile)} ${key} does not match publication.json`);
      }
      for (const id of parsed.data.sourceIds ?? []) {
        if (!sourceIds.has(id)) errors.push(`${path.relative(root, chapterFile)} references unknown source ${id}`);
      }
      for (const id of parsed.data.claimIds ?? []) {
        if (!claimIds.has(id)) errors.push(`${path.relative(root, chapterFile)} references unknown claim ${id}`);
      }
      for (const id of parsed.data.objectiveIds ?? []) {
        if (!roleRecord?.objectiveIds.has(id)) errors.push(`${path.relative(root, chapterFile)} references unknown objective ${id}`);
      }
      for (const id of parsed.data.figureIds ?? []) {
        if (!figureIds.has(id)) errors.push(`${path.relative(root, chapterFile)} references unknown figure ${id}`);
      }
      if (manifest.status === 'published') {
        if (!(parsed.data.sourceIds?.length > 0)) errors.push(`${path.relative(root, chapterFile)} needs at least one source before publication`);
        if (!(parsed.data.claimIds?.length > 0)) errors.push(`${path.relative(root, chapterFile)} needs at least one traced claim before publication`);
        if (!(parsed.data.objectiveIds?.length > 0)) errors.push(`${path.relative(root, chapterFile)} needs at least one objective before publication`);
        if (parsed.content.trim().length < 200) errors.push(`${path.relative(root, chapterFile)} is too short for publication`);
      }
      if (forbiddenDashes.test(raw)) errors.push(`${path.relative(root, chapterFile)} contains a non-ASCII dash prohibited by the PDF pipeline`);
    }

    if (manifest.status === 'published') {
      if (!manifest.edition.publishedAt) errors.push(`${manifest.slug} published edition requires publishedAt`);
      if (!manifest.pdf.enabled) errors.push(`${manifest.slug} published edition requires PDF output`);
      if (chapters.length === 0) errors.push(`${manifest.slug} published edition requires at least one chapter`);
    }
    publications.push({ directory, manifest, registries: registryRecords });
  }

  return { ok: errors.length === 0, errors, roles: [...roles.values()], publications };
}

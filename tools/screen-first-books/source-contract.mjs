import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(packageRoot, '../..');

function readText(relativePath) {
  return readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function sha256Text(value) {
  return createHash('sha256').update(value).digest('hex');
}

function absolute(relativePath) {
  return path.join(repoRoot, relativePath);
}

function publicationPath(config, relativePath) {
  return path.posix.join(config.publicationDirectory, relativePath);
}

function bindPart(order, config) {
  let selected = config.parts[0];
  for (const part of config.parts) {
    if (order >= config.partStarts[part.number - 1]) selected = part;
  }
  return selected;
}

function assertContract(condition, message) {
  if (!condition) throw new Error(`Invalid screen-first book contract: ${message}`);
}

export function loadBookContract(config) {
  const manifestPath = publicationPath(config, 'publication.json');
  const figurePath = publicationPath(config, 'figures.json');
  const claimPath = publicationPath(config, 'claims.json');
  const sourcePath = publicationPath(config, 'sources.json');
  const manifest = readJson(manifestPath);
  const figures = readJson(figurePath).figures;
  const claims = readJson(claimPath).claims;
  const sources = readJson(sourcePath).sources;

  assertContract(manifest.slug === config.slug, `manifest slug must be ${config.slug}`);
  assertContract(manifest.author === 'Komal Nakrani', 'author must be Komal Nakrani');
  assertContract(manifest.chapters.length === 19, 'expected 19 chapters');
  assertContract(figures.length === 38, 'expected 38 figures');
  assertContract(config.parts.length === 5, 'expected five parts');
  assertContract(config.appendices.length === 5, 'expected five appendices');

  const figureIds = new Set();
  const figuresByChapter = new Map();
  for (const figure of figures) {
    assertContract(!figureIds.has(figure.id), `duplicate figure ${figure.id}`);
    figureIds.add(figure.id);
    const records = figuresByChapter.get(figure.chapterSlug) ?? [];
    records.push(Object.freeze({ ...figure }));
    figuresByChapter.set(figure.chapterSlug, records);
  }

  const chapters = manifest.chapters.map((chapter) => {
    const sourcePathname = publicationPath(config, chapter.sourceFile);
    const source = readText(sourcePathname);
    const chapterFigures = figuresByChapter.get(chapter.slug) ?? [];
    assertContract(chapterFigures.length === 2, `${chapter.slug} must map to two figures`);
    return Object.freeze({
      ...chapter,
      part: bindPart(chapter.order, config),
      source,
      sourcePath: sourcePathname,
      sourceSha256: sha256Text(source),
      figures: chapterFigures,
    });
  });

  const appendices = config.appendices.map((appendix) => {
    const sourcePathname = publicationPath(config, appendix.file);
    const source = readText(sourcePathname);
    return Object.freeze({ ...appendix, source, sourcePath: sourcePathname, sourceSha256: sha256Text(source) });
  });

  const frontMatterPath = publicationPath(config, 'front-matter/front-matter.md');
  const partIntroductionsPath = publicationPath(config, 'front-matter/part-introductions.md');
  const frontMatter = readText(frontMatterPath);
  const partIntroductions = readText(partIntroductionsPath);

  return Object.freeze({
    schemaVersion: 1,
    slug: config.slug,
    title: manifest.title,
    subtitle: manifest.subtitle,
    description: manifest.description,
    author: manifest.author,
    edition: Object.freeze({ ...manifest.edition }),
    reviewLabel: config.reviewLabel,
    closingStatement: config.closingStatement,
    palette: Object.freeze({ ...config.palette }),
    fonts: Object.freeze(Object.fromEntries(Object.entries(config.fonts).map(([key, value]) => [key, absolute(value)]))),
    publicationDirectory: absolute(config.publicationDirectory),
    reviewAssetDirectory: absolute(config.reviewAssetDirectory),
    output: absolute(config.output),
    partStarts: Object.freeze([...config.partStarts]),
    parts: Object.freeze(config.parts.map((part) => Object.freeze({ ...part }))),
    chapters: Object.freeze(chapters),
    chapterFigureIds: Object.freeze(chapters.map((chapter) => Object.freeze(chapter.figures.map((figure) => figure.id)))),
    figures: Object.freeze(figures.map((figure) => Object.freeze({ ...figure }))),
    claims: Object.freeze(claims.map((claim) => Object.freeze({ ...claim }))),
    sources: Object.freeze(sources.map((source) => Object.freeze({ ...source }))),
    appendices: Object.freeze(appendices),
    frontMatter: Object.freeze({ source: frontMatter, sourcePath: frontMatterPath, sourceSha256: sha256Text(frontMatter) }),
    partIntroductions: Object.freeze({ source: partIntroductions, sourcePath: partIntroductionsPath, sourceSha256: sha256Text(partIntroductions) }),
    protectedPublication: Object.freeze({
      manifest: Object.freeze({ ...config.protectedPublication.manifest, path: absolute(config.protectedPublication.manifest.file) }),
      pdf: Object.freeze({ ...config.protectedPublication.pdf, path: absolute(config.protectedPublication.pdf.file) }),
    }),
  });
}

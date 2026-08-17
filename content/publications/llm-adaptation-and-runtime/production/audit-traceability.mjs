import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const productionDir = path.dirname(fileURLToPath(import.meta.url));
const publicationDir = path.dirname(productionDir);
const repoRoot = path.resolve(publicationDir, "../../..");
const architecturePath = path.join(
  repoRoot,
  "project-control/roles/llm-engineer/books/llm-engineering/architecture.md",
);
const caseRegisterPath = path.join(
  repoRoot,
  "project-control/roles/llm-engineer/books/llm-engineering/case-studies/case-study-register.json",
);

const readText = (file) => fs.readFileSync(file, "utf8");
const readJson = (file) => JSON.parse(readText(file));
const publication = readJson(path.join(publicationDir, "publication.json"));
const sourceRecords = readJson(path.join(publicationDir, "sources.json")).sources;
const claimRecords = readJson(path.join(publicationDir, "claims.json")).claims;
const figureRecords = readJson(path.join(publicationDir, "figures.json")).figures;
const caseRecords = readJson(caseRegisterPath).cases;
const errors = [];

const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const parseFrontmatterArray = (raw, key, file) => {
  const line = raw.split("\n").find((candidate) => candidate.startsWith(`${key}: `));
  assert(Boolean(line), `${file}: missing ${key} frontmatter`);
  if (!line) return [];
  try {
    return JSON.parse(line.slice(`${key}: `.length));
  } catch (error) {
    errors.push(`${file}: invalid ${key} JSON (${error.message})`);
    return [];
  }
};

const duplicates = (values) => values.filter((value, index) => values.indexOf(value) !== index);
assert(duplicates(sourceRecords.map((source) => source.id)).length === 0, "sources.json: duplicate source IDs");
assert(duplicates(claimRecords.map((claim) => claim.id)).length === 0, "claims.json: duplicate claim IDs");
assert(duplicates(figureRecords.map((figure) => figure.id)).length === 0, "figures.json: duplicate figure IDs");
assert(duplicates(caseRecords.map((record) => record.case_id)).length === 0, "case-study-register.json: duplicate case IDs");

const architecture = readText(architecturePath);
const volumeTwoArchitecture = architecture
  .split("## Volume 2 architecture")[1]
  ?.split("### Volume 2 chapter existence audit")[0];
assert(Boolean(volumeTwoArchitecture), "architecture.md: Volume 2 architecture section is missing");
const expectedChapters = volumeTwoArchitecture
  ? [...volumeTwoArchitecture.matchAll(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|/gm)].map((match) => ({
      order: Number(match[1]),
      title: match[2].trim(),
    }))
  : [];
assert(
  JSON.stringify(publication.chapters.map(({ order, title }) => ({ order, title }))) === JSON.stringify(expectedChapters),
  "publication.json: chapter order/title differs from the frozen Volume 2 architecture",
);
assert(JSON.stringify(publication.partStarts) === JSON.stringify([1, 4, 9, 14, 17]), "publication.json: partStarts drifted");
assert(publication.status === "published", "publication.json: status must remain published");
assert(publication.edition.publishedAt === "2026-08-17", "publication.json: edition.publishedAt must remain 2026-08-17");
assert(publication.pdf.enabled === true, "publication.json: pdf.enabled must remain true for the canonical release");

const sourceById = new Map(sourceRecords.map((source) => [source.id, source]));
const claimById = new Map(claimRecords.map((claim) => [claim.id, claim]));
const caseById = new Map(caseRecords.map((record) => [record.case_id, record]));
const expectedSourceChapters = new Map(sourceRecords.map((source) => [source.id, []]));
const expectedSourceClaims = new Map(sourceRecords.map((source) => [source.id, []]));
const chapterRawBySlug = new Map();
let figureBindings = 0;

for (const chapter of publication.chapters) {
  const chapterPath = path.join(publicationDir, chapter.sourceFile);
  assert(fs.existsSync(chapterPath), `${chapter.sourceFile}: missing chapter source`);
  if (!fs.existsSync(chapterPath)) continue;
  const raw = readText(chapterPath);
  chapterRawBySlug.set(chapter.slug, raw);
  const sourceIds = parseFrontmatterArray(raw, "sourceIds", chapter.sourceFile);
  const claimIds = parseFrontmatterArray(raw, "claimIds", chapter.sourceFile);
  const figureIds = parseFrontmatterArray(raw, "figureIds", chapter.sourceFile);
  const inlineClaimIds = [...raw.matchAll(/\[(CLM-\d{3})\]/g)].map((match) => match[1]);
  const expectedFigureIds = figureRecords
    .filter((figure) => figure.chapterSlug === chapter.slug)
    .map((figure) => figure.id);

  assert(
    JSON.stringify([...new Set(claimIds)].sort()) === JSON.stringify([...new Set(inlineClaimIds)].sort()),
    `${chapter.sourceFile}: claimIds do not match the visible inline claim-citation set`,
  );
  assert(
    JSON.stringify(figureIds) === JSON.stringify(expectedFigureIds),
    `${chapter.sourceFile}: figureIds must exactly match the chapter's figures.json records in registry order`,
  );
  figureBindings += figureIds.length;
  for (const sourceId of sourceIds) {
    assert(sourceById.has(sourceId), `${chapter.sourceFile}: unknown source ${sourceId}`);
    expectedSourceChapters.get(sourceId)?.push(chapter.slug);
  }
  for (const claimId of claimIds) {
    const claim = claimById.get(claimId);
    assert(Boolean(claim), `${chapter.sourceFile}: unknown claim ${claimId}`);
    assert(claim?.chapterSlug === chapter.slug, `${claimId}: chapterSlug does not match ${chapter.slug}`);
  }
}

for (const claim of claimRecords) {
  assert(chapterRawBySlug.has(claim.chapterSlug), `${claim.id}: unknown chapterSlug ${claim.chapterSlug}`);
  for (const sourceId of claim.sourceIds) {
    assert(sourceById.has(sourceId), `${claim.id}: unknown source ${sourceId}`);
    expectedSourceClaims.get(sourceId)?.push(claim.id);
  }
}

for (const source of sourceRecords) {
  const expectedChaptersForSource = expectedSourceChapters.get(source.id) ?? [];
  const expectedClaimsForSource = expectedSourceClaims.get(source.id) ?? [];
  assert(
    JSON.stringify(source.usedIn.chapterSlugs) === JSON.stringify(expectedChaptersForSource),
    `${source.id}: usedIn.chapterSlugs is not the exact forward-manuscript truth`,
  );
  assert(
    JSON.stringify(source.usedIn.claimIds) === JSON.stringify(expectedClaimsForSource),
    `${source.id}: usedIn.claimIds is not the exact forward-claim truth`,
  );
}

const batchFiles = fs
  .readdirSync(productionDir)
  .filter((file) => /^v2-chapters-\d+-\d+\.json$/.test(file))
  .sort();
let declaredCaseLinks = 0;
const declaredCaseIds = new Set();

for (const batchFile of batchFiles) {
  const batch = readJson(path.join(productionDir, batchFile));
  for (const chapter of batch.chapters) {
    const canonicalChapter = publication.chapters.find((candidate) => candidate.order === chapter.number);
    assert(Boolean(canonicalChapter), `${batchFile}: unknown chapter ${chapter.number}`);
    assert(canonicalChapter?.slug === chapter.slug, `${batchFile}: chapter ${chapter.number} slug drifted`);
    const chapterId = `V2-${String(chapter.number).padStart(2, "0")}`;
    const raw = chapterRawBySlug.get(chapter.slug) ?? "";
    for (const caseId of chapter.caseIds ?? []) {
      declaredCaseLinks += 1;
      declaredCaseIds.add(caseId);
      const record = caseById.get(caseId);
      assert(Boolean(record), `${batchFile}: unknown case ${caseId}`);
      assert(record?.chapter_ids.includes(chapterId), `${caseId}: reverse register omits ${chapterId}`);
      assert(raw.includes(`\`${caseId}\``), `${chapter.slug}: declared ${caseId} is not visibly linked in manuscript prose`);
    }
  }
}

const appendixFiles = fs
  .readdirSync(path.join(publicationDir, "appendices"))
  .filter((file) => file.endsWith(".md"));
assert(appendixFiles.length === 7, `appendices: expected 7, found ${appendixFiles.length}`);

if (errors.length > 0) {
  console.error(`Volume 2 traceability symmetry FAIL (${errors.length} error(s))`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "PASS",
      chapters: publication.chapters.length,
      partStarts: publication.partStarts,
      appendices: appendixFiles.length,
      sources: sourceRecords.length,
      claims: claimRecords.length,
      figures: figureRecords.length,
      figureBindings,
      batchFiles: batchFiles.length,
      declaredCaseLinks,
      distinctDeclaredCases: declaredCaseIds.size,
      publicationState: {
        status: publication.status,
        publishedAt: publication.edition.publishedAt,
        pdfEnabled: publication.pdf.enabled,
      },
    },
    null,
    2,
  ),
);

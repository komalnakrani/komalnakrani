#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const productionDir = path.dirname(fileURLToPath(import.meta.url));
const publicationDir = path.dirname(productionDir);
const root = path.resolve(productionDir, "../../../..");
const roleBookDir = path.join(
  root,
  "project-control/roles/llm-engineer/books/llm-engineering",
);

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function unique(values) {
  return [...new Set(values)];
}

function difference(left, right) {
  return left.filter((value) => !right.includes(value));
}

function compareSets(scope, expected, actual, errors) {
  const missing = difference(expected, actual);
  const unexpected = difference(actual, expected);
  if (missing.length) errors.push(`${scope} missing: ${missing.join(", ")}`);
  if (unexpected.length) errors.push(`${scope} unexpected: ${unexpected.join(", ")}`);
}

function duplicates(values) {
  return unique(values.filter((value, index) => values.indexOf(value) !== index));
}

const publication = readJson(path.join(publicationDir, "publication.json"));
const publicationSources = readJson(path.join(publicationDir, "sources.json")).sources;
const publicationClaims = readJson(path.join(publicationDir, "claims.json")).claims;
const acceptedClaims = readJson(
  path.join(roleBookDir, "sources/claim-register.json"),
).chapters.filter((chapter) => chapter.chapter_id.startsWith("V1-"));
const cases = readJson(
  path.join(roleBookDir, "case-studies/case-study-register.json"),
).cases;

const batchFiles = fs
  .readdirSync(productionDir)
  .filter((name) => /^v1-chapter(?:s)?-.*\.json$/.test(name))
  .sort();
const productionChapters = batchFiles
  .flatMap((name) => readJson(path.join(productionDir, name)).chapters)
  .sort((left, right) => left.number - right.number);

const errors = [];
const expectedNumbers = Array.from({ length: 16 }, (_, index) => index + 1);
compareSets(
  "production chapter numbers",
  expectedNumbers,
  productionChapters.map((chapter) => chapter.number),
  errors,
);

const duplicateNumbers = duplicates(productionChapters.map((chapter) => chapter.number));
const duplicateSlugs = duplicates(productionChapters.map((chapter) => chapter.slug));
if (duplicateNumbers.length) {
  errors.push(`duplicate production chapter numbers: ${duplicateNumbers.join(", ")}`);
}
if (duplicateSlugs.length) {
  errors.push(`duplicate production chapter slugs: ${duplicateSlugs.join(", ")}`);
}

let sourceChapterLinks = 0;
let sourceClaimLinks = 0;
let productionClaimLinks = 0;
let productionCaseLinks = 0;

for (const chapter of publication.chapters) {
  const chapterId = `V1-${String(chapter.order).padStart(2, "0")}`;
  const productionChapter = productionChapters.find(
    (candidate) => candidate.number === chapter.order,
  );
  if (!productionChapter) {
    errors.push(`${chapterId} missing production record`);
    continue;
  }
  if (productionChapter.slug !== chapter.slug) {
    errors.push(
      `${chapterId} publication/production slug mismatch: ${chapter.slug} != ${productionChapter.slug}`,
    );
  }

  const sourceFile = path.join(publicationDir, chapter.sourceFile);
  const frontmatter = matter(fs.readFileSync(sourceFile, "utf8")).data;
  const chapterSourceIds = frontmatter.sourceIds ?? [];
  const chapterClaimIds = frontmatter.claimIds ?? [];
  const duplicateSourceIds = duplicates(chapterSourceIds);
  const duplicateClaimIds = duplicates(chapterClaimIds);
  if (duplicateSourceIds.length) {
    errors.push(`${chapterId} duplicate source IDs: ${duplicateSourceIds.join(", ")}`);
  }
  if (duplicateClaimIds.length) {
    errors.push(`${chapterId} duplicate claim IDs: ${duplicateClaimIds.join(", ")}`);
  }

  const reverseSourceIds = publicationSources
    .filter((source) => source.usedIn.chapterSlugs.includes(chapter.slug))
    .map((source) => source.id);
  compareSets(`${chapterId} source chapter symmetry`, chapterSourceIds, reverseSourceIds, errors);
  sourceChapterLinks += chapterSourceIds.length;

  const reverseClaimIds = publicationClaims
    .filter((claim) => claim.chapterSlug === chapter.slug)
    .map((claim) => claim.id);
  compareSets(`${chapterId} claim chapter symmetry`, chapterClaimIds, reverseClaimIds, errors);

  const productionClaimIds = productionChapter.claims.map((claim) => claim.productionId);
  compareSets(`${chapterId} production claim IDs`, chapterClaimIds, productionClaimIds, errors);

  const acceptedChapter = acceptedClaims.find(
    (candidate) => candidate.chapter_id === chapterId,
  );
  const acceptedClaimIds = acceptedChapter?.claims.map((claim) => claim.claim_id) ?? [];
  const productionAcceptedIds = productionChapter.claims.map((claim) => claim.acceptedId);
  compareSets(
    `${chapterId} accepted claim IDs`,
    acceptedClaimIds,
    productionAcceptedIds,
    errors,
  );
  productionClaimLinks += productionChapter.claims.length;

  for (const claimId of chapterClaimIds) {
    const claim = publicationClaims.find((candidate) => candidate.id === claimId);
    if (!claim) continue;
    const reverseClaimSourceIds = publicationSources
      .filter((source) => source.usedIn.claimIds.includes(claimId))
      .map((source) => source.id);
    compareSets(
      `${chapterId}/${claimId} source claim symmetry`,
      claim.sourceIds,
      reverseClaimSourceIds,
      errors,
    );
    const undeclared = difference(claim.sourceIds, chapterSourceIds);
    if (undeclared.length) {
      errors.push(
        `${chapterId}/${claimId} sources absent from chapter frontmatter: ${undeclared.join(", ")}`,
      );
    }
    sourceClaimLinks += claim.sourceIds.length;
  }

  const duplicateCaseIds = duplicates(productionChapter.caseIds);
  if (duplicateCaseIds.length) {
    errors.push(`${chapterId} duplicate case IDs: ${duplicateCaseIds.join(", ")}`);
  }
  for (const caseId of productionChapter.caseIds) {
    const caseRecord = cases.find((candidate) => candidate.case_id === caseId);
    if (!caseRecord) {
      errors.push(`${chapterId} unknown case: ${caseId}`);
    } else if (!caseRecord.chapter_ids.includes(chapterId)) {
      errors.push(`${chapterId} case reverse mapping missing: ${caseId}`);
    }
    productionCaseLinks += 1;
  }
}

const result = {
  status: errors.length ? "FAIL" : "PASS",
  volume: "LLM Behavior Engineering V1",
  chapters: publication.chapters.length,
  productionBatches: batchFiles.length,
  publicationSources: publicationSources.length,
  publicationClaims: publicationClaims.length,
  sourceChapterLinks,
  sourceClaimLinks,
  productionClaimLinks,
  productionCaseLinks,
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;

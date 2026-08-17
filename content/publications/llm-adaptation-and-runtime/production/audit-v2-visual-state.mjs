import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const productionDir = path.dirname(fileURLToPath(import.meta.url));
const publicationDir = path.dirname(productionDir);
const repoRoot = path.resolve(publicationDir, "../../..");
const stateDir = path.join(publicationDir, "chapters/state");
const assetManifestPath = path.join(
  repoRoot,
  "project-control/roles/llm-engineer/phase-10/asset-manifest.json",
);

const expectedBatchFiles = [
  "v2-chapters-01-03.json",
  "v2-chapters-04-06.json",
  "v2-chapters-07-09.json",
  "v2-chapters-10-12.json",
  "v2-chapters-13-15.json",
  "v2-chapters-16-17.json",
];
const expectedChapterNumbers = Array.from({ length: 17 }, (_, index) => index + 1);
const acceptedAssetStatus = "accepted-imagegen-png";
const stalePattern = /pending-root-imagegen|assets-pending|assets pending|root-owned|root owns imagegen production|root imagegen(?: assets)? pending/i;
const errors = [];

const readText = (file) => fs.readFileSync(file, "utf8");
const readJson = (file) => JSON.parse(readText(file));
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const duplicates = (values) => values.filter((value, index) => values.indexOf(value) !== index);
const chapterFigureIds = (chapter) => chapter.figureIds ?? chapter.figures ?? [];
const batchFigures = (batch) => batch.figures ?? batch.figureAssets ?? [];

const phaseTenAssets = readJson(assetManifestPath).assets.filter(
  (asset) => asset.publication === "llm-adaptation-and-runtime",
);
const acceptedById = new Map(phaseTenAssets.map((asset) => [asset.id, asset]));
assert(phaseTenAssets.length === 34, `Phase 10 manifest: expected 34 Volume 2 assets, found ${phaseTenAssets.length}`);
assert(duplicates(phaseTenAssets.map((asset) => asset.id)).length === 0, "Phase 10 manifest: duplicate Volume 2 IDs");
for (const asset of phaseTenAssets) {
  assert(asset.qa.startsWith("accepted"), `Phase 10 manifest: ${asset.id} is not accepted`);
}

const actualBatchFiles = fs
  .readdirSync(productionDir)
  .filter((file) => /^v2-chapters-\d+-\d+\.json$/.test(file))
  .sort();
assert(
  JSON.stringify(actualBatchFiles) === JSON.stringify(expectedBatchFiles),
  `production: expected six exact batch files, found ${actualBatchFiles.join(", ")}`,
);

const recordedFigureIds = [];
const recordedChapterNumbers = [];

for (const batchFile of expectedBatchFiles) {
  const batchPath = path.join(productionDir, batchFile);
  const raw = readText(batchPath);
  const batch = JSON.parse(raw);
  const figures = batchFigures(batch);

  assert(!stalePattern.test(raw), `${batchFile}: stale pending/root-owned image language remains`);
  assert(batch.status.includes("visual-gate-complete"), `${batchFile}: status does not record the completed visual gate`);
  assert(batch.visualGate?.status === "complete", `${batchFile}: visualGate.status must be complete`);
  assert(
    batch.visualGate?.acceptedImageGenPngs === figures.length,
    `${batchFile}: visualGate accepted PNG count does not match its figure records`,
  );
  assert(batch.visualGate?.readyFiguresPerChapter === 2, `${batchFile}: readyFiguresPerChapter must be 2`);
  assert(
    batch.visualGate?.assertsPublicationOrRuntimeBehavior === false,
    `${batchFile}: visual gate must not assert publication or runtime behavior`,
  );
  assert(figures.length === batch.chapters.length * 2, `${batchFile}: expected exactly two figures per chapter`);

  const figureIds = new Set(figures.map((figure) => figure.id));
  for (const chapter of batch.chapters) {
    const expectedIds = [
      `V2-F${String(chapter.number).padStart(2, "0")}.1`,
      `V2-F${String(chapter.number).padStart(2, "0")}.2`,
    ];
    const actualIds = chapterFigureIds(chapter);
    recordedChapterNumbers.push(chapter.number);
    assert(
      JSON.stringify(actualIds) === JSON.stringify(expectedIds),
      `${batchFile}: chapter ${chapter.number} must bind ${expectedIds.join(" and ")}`,
    );
    assert(actualIds.every((id) => figureIds.has(id)), `${batchFile}: chapter ${chapter.number} has an unrecorded figure`);
  }

  for (const figure of figures) {
    recordedFigureIds.push(figure.id);
    const accepted = acceptedById.get(figure.id);
    assert(Boolean(accepted), `${batchFile}: ${figure.id} is absent from the accepted Phase 10 manifest`);
    assert(figure.assetStatus === acceptedAssetStatus, `${batchFile}: ${figure.id} is not ${acceptedAssetStatus}`);
    assert(
      figure.path === `/assets/publications/llm-adaptation-and-runtime/${accepted?.filename}`,
      `${batchFile}: ${figure.id} does not use its accepted canonical PNG path`,
    );
  }
}

assert(
  JSON.stringify(recordedChapterNumbers.sort((a, b) => a - b)) === JSON.stringify(expectedChapterNumbers),
  "production: chapter coverage must be exactly 1 through 17",
);
assert(recordedFigureIds.length === 34, `production: expected 34 figure records, found ${recordedFigureIds.length}`);
assert(duplicates(recordedFigureIds).length === 0, "production: duplicate figure IDs");
assert(
  JSON.stringify([...recordedFigureIds].sort()) === JSON.stringify([...acceptedById.keys()].sort()),
  "production: figure IDs differ from the 34 accepted Phase 10 assets",
);

for (const chapterNumber of expectedChapterNumbers) {
  const stateFile = `chapter-${String(chapterNumber).padStart(2, "0")}-state.md`;
  const raw = readText(path.join(stateDir, stateFile));
  const expectedIds = [
    `V2-F${String(chapterNumber).padStart(2, "0")}.1`,
    `V2-F${String(chapterNumber).padStart(2, "0")}.2`,
  ];
  assert(!stalePattern.test(raw), `${stateFile}: stale pending/root-owned image language remains`);
  assert(
    raw.includes(`- Visual gate: complete; 2/2 ready accepted ImageGen PNGs: \`${expectedIds[0]}\`, \`${expectedIds[1]}\`.`),
    `${stateFile}: missing exact ready-figure visual-gate record`,
  );
  assert(
    raw.includes("This chapter-state record does not assert publication or runtime behavior."),
    `${stateFile}: missing publication/runtime assertion boundary`,
  );
}

if (errors.length > 0) {
  console.error(`Volume 2 visual state audit FAIL (${errors.length} error(s))`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "PASS",
      batchRecords: expectedBatchFiles.length,
      chapterStateRecords: expectedChapterNumbers.length,
      acceptedImageGenPngs: recordedFigureIds.length,
      readyFiguresPerChapter: 2,
      visualGate: "complete",
      assertsPublicationOrRuntimeBehavior: false,
    },
    null,
    2,
  ),
);

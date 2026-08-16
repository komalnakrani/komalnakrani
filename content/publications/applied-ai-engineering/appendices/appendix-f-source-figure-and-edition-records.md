# Appendix F - Source, Figure, and Edition Records

Publication integrity depends on stable identity. A reader should be able to determine which edition, chapter, claim, source, figure, companion artifact, and correction supports a statement. This appendix explains the records shipped with the book and the rules for changing them.

## Publication identity

The canonical manifest is `publication.json`. It records:

- publication and role slugs;
- series, volume, title, subtitle, description, author, and language;
- review or publication status;
- edition version, label, date, copyright year, and canonical URL;
- ordered chapter titles, slugs, summaries, reading times, source files, and objectives;
- source, claim, figure, and errata registry paths;
- PDF enablement and filename.

Version 1.0.0 follows semantic edition identity. A change that repairs a typo without altering meaning may be recorded as errata and included in a patch edition according to publication policy. A change that alters a behavior contract, claim meaning, chapter structure, figure teaching relationship, or companion contract requires explicit version review. A major restructuring may require an architecture-version decision and a new edition line.

The status states are not decorative:

- `draft`: content is still being assembled;
- `review`: the edition is complete enough for publication/PDF review but is not published;
- `published`: canonical web and PDF artifacts passed release checks and the publication date is recorded;
- `withdrawn`: the edition is no longer offered as current, with reason and replacement where applicable.

At the Phase 11 assembly handoff, this book is `review`, `publishedAt` is null, and PDF delivery remains disabled until the root publication process builds and inspects the exact artifact.

## Source register

The production source registry is `sources.json`. Each source record includes:

- stable ID `SRC-001` through `SRC-055`;
- type, title, authors, publisher, URL, publication date when used, and access date;
- license or source-terms note;
- limitations and scope notes;
- chapter slugs and claim IDs that use the source.

The research register under the role-control path contains the deeper research record, currentness, access-health evidence, and original chapter/source mapping. Production source IDs correspond to the research records while remaining stable inside the edition.

### Source selection rules

1. Prefer primary standards, peer-reviewed papers, official documentation, first-party technical publications, and first-party retrospectives for material claims.
2. Use an employer posting or vendor guide as evidence of observed practice or implementation, not as a universal role definition or independent proof.
3. Keep standard/framework version and scope visible. Do not reproduce copyrighted standards or imply certification.
4. Keep benchmark task, dataset, method, version, and limitation visible.
5. Give volatile API or tool facts an access date and teach the durable contract independently.
6. Record access restriction honestly. An automated `403` is not a successful body check and is not automatically a dead URL.
7. Replace a broken or misleading URL only through a reviewed registry change; preserve the edition history.
8. Do not infer endorsement from citation or access.

The Phase 09 live check recorded 48 direct `2xx`/`206` responses, seven expected automated-access restrictions, and no `404` or `5xx` failures. That result is a dated availability check, not proof that every source claim remains correct forever.

## Claim register

The production claim registry is `claims.json`. It contains 118 stable IDs. Each claim records:

- claim ID;
- owning chapter slug;
- bounded statement;
- supporting source IDs.

The chapter front matter declares its claim IDs and source IDs. The manuscript places the claim marker near the relevant statement. The source registry carries the reverse mapping.

### Claim trace procedure

To review a claim:

1. locate the claim marker in the chapter;
2. read the complete surrounding argument, qualification, and case use;
3. open the matching claim record;
4. inspect each source record and its limitation;
5. confirm the source directly supports the bounded statement rather than an adjacent stronger claim;
6. check whether version, access date, population, or implementation has changed;
7. record contradiction or uncertainty rather than selecting only favorable evidence;
8. decide whether the claim remains supported, needs narrowing, requires a refreshed source, or becomes an erratum.

Citation count is not a confidence score. Multiple sources can share the same assumption or derive from one underlying dataset. One authoritative standard can define a term without proving product effectiveness. A first-party case can accurately report its own outcome while remaining non-independent evidence.

## Case records

The role-control case-study register separates public/primary cases from the constructed Patchwork case. When a chapter uses a public case:

- attribute the organization and source;
- state whether the material is a paper, official report, engineering post, incident account, or vendor/customer story;
- use only the facts the source supports;
- preserve missing context, survivorship, selection, and attribution limits;
- do not transfer an outcome to Patchwork or the reader's product.

Patchwork is always fictional. Synthetic rates, traces, budgets, retention choices, incidents, compatibility results, portfolio decisions, and dossier states are teaching examples. The case may demonstrate how an artifact works; it cannot validate a real-world claim.

## Figure registry

The figure registry is `figures.json`. It contains 42 records, exactly two for each chapter. Every record includes:

- stable registry ID `FIG-001` through `FIG-042`;
- canonical PNG filename;
- substantive alt text;
- caption stating the teaching relationship or limitation;
- owning chapter slug;
- creator;
- supporting source IDs if a figure visualizes externally sourced evidence;
- license.

Manuscript anchors add the public path, native width and height, lazy loading, and decoding behavior. Canonical assets live under the publication's `assets/` directory. Public delivery mirrors live under `/public/assets/publications/applied-ai-engineering/`. The canonical and public files must be byte-identical before release.

### Figure provenance

`imagegen-production-log.md` records the production policy and each accepted built-in ImageGen output. For every figure it supplies:

- figure number and final filename;
- teaching relationship;
- essential label set;
- generated output identity;
- rejected-output notes where relevant.

The canonical source format is PNG. No SVG or WebP source is canonical for this edition. Delivery tooling may create optimized derivatives, but provenance continues to point to the accepted PNG. No final figure depicts Komal Nakrani or uses a generic presenter as a substitute. A future identity-bearing mascot would require approved original-photo references and a separate pedagogical reason.

### Accessibility record

Alt text should state the information structure a reader needs when the image is unavailable. It should not repeat `image of` or rely on color names alone. A caption states why the figure matters in the argument. Nearby prose carries details, caveats, and exact canonical state when a visual is schematic.

For each figure verify:

- the filename and chapter match the registry;
- the anchor dimensions match the actual pixels;
- alt and caption describe the rendered structure rather than the intended prompt alone;
- essential labels are legible at book width;
- meaning also appears through shape, order, position, lanes, gates, arrows, or state;
- illustrative numbers and tokens are explicitly bounded;
- a conceptual visual is not overstated as exact Patchwork evidence;
- source/provenance/license are recorded;
- public and canonical hashes match.

Phase 10 certified 30 figures at `1568x1003`, ten at `1586x992`, F13.1 at `1565x1005`, and F15.2 at `1619x971`.

## Companion record identity

The companion uses `PF-*` artifact IDs and semantic versions:

- `PF-01`: responsibility/task charter;
- `PF-02`: behavior and authority contract;
- `PF-03`: mechanism decision;
- `PF-04`: task data and context;
- `PF-05`: combined-system boundaries;
- `PF-06`: inspectable vertical slice;
- `PF-07`: evaluation cases, error policy, and evaluator design;
- `PF-08`: preregistered experiment;
- `PF-09`: failure, resources, and observability;
- `PF-10`: implemented controls;
- `PF-11`: readiness, release, and incident learning;
- `PF-12`: model change, reuse, leadership, and final dossier.

Artifacts may progress through minor versions as chapters add decisions. A version change should state what contract, field, fixture, test, or disposition changed. Generated evidence records the seed and input identity needed for reproduction. Do not edit a result in place to match a new plan.

The Phase 09 deterministic runner produced 17 byte-identical lines across repeated runs with SHA-256 `75a4c9eae03de5c2026deee99ab28812293c8300558ed5e5c87edec4a7aba2c3`. This hash describes that reviewed output, not all possible future companion versions.

## Errata record

The canonical errata registry is `errata.json`. A correction should contain:

- stable erratum ID;
- edition version;
- chapter slug and precise location;
- reported date and reporter channel if retained under the privacy policy;
- problem description;
- severity and consequence;
- status: reported, confirmed, rejected with reason, corrected, or deferred;
- correction or disposition;
- resolution date when corrected;
- affected web/PDF/companion/figure artifacts;
- replacement edition or patch version if applicable.

Examples of material errata include a source that does not support the registered claim, an incorrect formula, a figure whose rendered state contradicts the caption, a companion command that cannot reproduce the described behavior, or a boundary statement that assigns authority to the wrong role.

Do not silently repair the web manuscript while leaving the PDF under the same version. Either correct all canonical delivery forms and record the patch, or label the known difference and provide the replacement path.

## Edition release record

Before changing status to `published`, create a release record with:

- source commit and clean working-tree scope;
- manifest and architecture versions;
- chapter, front-matter, part, appendix, source, claim, figure, and errata counts;
- manuscript and appendix word counts;
- companion test count and deterministic output identity;
- publication validator and full repository check results;
- web route count and local-reference result;
- PDF filename, page count, file size, SHA-256, bookmarks, searchable-text result, and canonical/public mirror comparison;
- representative page render inspection at desktop/mobile or print size as applicable;
- accessibility evidence and explicit non-claims;
- known source restrictions and residual publication limitations;
- approver and publication-state transition time.

The downloadable PDF must be the exact reviewed artifact. Rebuilding after review creates a new hash and requires comparison. The manifest should not be marked `published`, `publishedAt` should not be filled, and PDF delivery should not be enabled until this record passes.

## Index conventions

Use stable references so readers can move between prose and artifacts:

- chapters: `Chapter 1` through `Chapter 21`, with canonical titles on first nearby reference;
- figures: `F01.1` through `F21.2` in prose; `FIG-001` through `FIG-042` in the registry;
- claims: `CLM-001` through `CLM-118`;
- production sources: `SRC-001` through `SRC-055`;
- research sources: `AAE-S001` through `AAE-S055`;
- objectives/domains: `AAE-K01` through `AAE-K11`;
- dossier: `PF-01` through `PF-12` plus semantic version;
- appendices: `Appendix A` through `Appendix F`.

When a term has a canonical home, later text should apply it and link back rather than restate a subtly different definition. Use Appendix E for terms and responsibility boundaries.

## Publication integrity checklist

Before release verify:

1. title, subtitle, author, edition, copyright, canonical URL, and status agree across manifest, front matter, site, PDF, and metadata;
2. all 21 chapters appear once and in order;
3. all six part introductions appear before Chapters 1, 5, 9, 13, 17, and 20;
4. all six appendices appear once and in A-F order;
5. all 118 claims and 55 sources validate with reverse links;
6. all 42 PNG figures render with alt, caption, dimensions, provenance, license, and byte-identical delivery mirrors;
7. all learning/state/QA files remain available as production records even if not printed in full;
8. all 109 companion tests pass and the runner remains deterministic;
9. Patchwork and satellite cases remain fictional/synthetic and no production claim is introduced;
10. professional and certification boundaries remain visible;
11. source access restrictions and other limitations remain explicit;
12. web and PDF references, text extraction, bookmarks, page renders, filename, hash, and download mirror pass;
13. errata is present even when empty;
14. the final state transition is recorded and reviewable.

Integrity is not achieved by a successful file build alone. It is achieved when the artifact a reader receives is the same artifact whose content, evidence, accessibility, and limitations were reviewed.

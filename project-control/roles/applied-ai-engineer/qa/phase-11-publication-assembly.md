# Applied AI Engineering - Phase 11 Publication Assembly

Status: **PASS - SOURCE ASSEMBLY AND REVIEW-PROOF QA COMPLETE; ROOT PUBLICATION TRANSITION OPEN**

Date: 2026-08-17

Issue: #66

## Scope

This record verifies the role-local source assembly for *Applied AI Engineering: From Model Capability to Dependable Product Behavior*. It adds original front matter, six architecture-locked part introductions, and six architecture-locked appendices from the accepted manuscripts, registries, figures, learning records, and deterministic Patchwork companion.

It does not enable web/PDF publication, copy a public download, mark the edition published, set a publication date, edit artwork, change the Phase 09 chapter lock, change companion behavior, or enter another role/Abhyaas. It does verify the shared manifest overrides and generate deterministic review proofs for artifact QA.

## Complete-edition inventory

| Component | Files | Words | Architecture range | Result |
| --- | ---: | ---: | ---: | --- |
| Chapters | 21 | 133,981 | Chapter/part allocations accepted in Phase 09 | PASS, unchanged |
| Front matter | 1 | 2,497 | Combined orientation below | PASS |
| Six part introductions | 1 | 1,534 | Combined orientation below | PASS |
| Front/orientation total | 2 | 4,031 | 4,000-6,000 | PASS |
| Six appendices | 6 | 12,370 | 12,000-16,000 | PASS |
| Complete manuscript | 29 | 150,382 | 140,000-165,000 | PASS |

Counts are whitespace-delimited and include Markdown headings/metadata, matching the established manuscript convention.

## Front matter

`content/publications/applied-ai-engineering/front-matter/front-matter.md` includes:

- exact title, subtitle, author, version, release-candidate label, copyright, and original-authorship statement;
- explicit fictional/synthetic Patchwork and satellite-case boundary;
- professional, specialist-authority, publication-readiness, and non-certification disclaimers;
- original preface explaining combined product behavior and the recursive evidence loop;
- reader assumptions and exit expectations without pretending to replace specialist training;
- six-part map, appendix map, full and task-specific reading paths;
- canonical evidence-state language and negative-evidence expectations;
- provider-neutral companion commands and non-proof;
- PNG figure/accessibility guidance and illustrative-token qualifications;
- source/claim/case-use guidance;
- learning-pack use and `NOT FOR LIVE CERTIFICATION BANK` boundary;
- explicit anti-compression guidance for abstention, segments, disagreement, rollback, and authority;
- edition, correction, PDF, and publication-state rules.

## Six part introductions

`content/publications/applied-ai-engineering/front-matter/part-introductions.md` contains exactly these headings and handoffs:

| Part | Starts before | Capability/handoff |
| --- | ---: | --- |
| I - Define the Behavior | Chapter 1 | `PF-01` to `PF-03`: accountability, task, behavior/authority, mechanism decision |
| II - Construct the System | Chapter 5 | `PF-04` to `PF-06`: data/context, combined boundaries, inspectable slice |
| III - Build the Evaluation Loop | Chapter 9 | `PF-07` to `PF-08`: cases, errors, judgment, preregistered experiment |
| IV - Engineer Operational Quality | Chapter 13 | `PF-09` to `PF-10`: failure, resources, observation, implemented controls |
| V - Release, Learn, and Change | Chapter 17 | `PF-11` and `PF-12` v0.1: rollout, incident learning, migration |
| VI - Compound Sound Judgment | Chapter 20 | `PF-12` v0.2/v1.0: evidence-gated reuse and authority-preserving leadership |

Each introduction explains the part's new decision capability, consumes prior evidence, preserves limits, and names the next handoff without repeating chapter instruction.

## Appendix verification

| Appendix | File | Words | Architecture job | Result |
| --- | --- | ---: | --- | --- |
| A | `appendix-a-mathematical-and-measurement-refresher.md` | 2,505 | Probability, uncertainty, confusion/error rates, thresholds, ranking, calibration, sampling, intervals, experiments, tails, decision review | PASS |
| B | `appendix-b-artifact-templates.md` | 2,063 | Copyable `PF-01` through `PF-12` structures, completion conditions, limitations, closeout | PASS |
| C | `appendix-c-system-and-threat-checklists.md` | 1,859 | Task, data/eval, retrieval, boundary, failure, resources, privacy, controls, release, incident, change, reuse review | PASS |
| D | `appendix-d-provider-neutral-companion-guide.md` | 1,568 | Local commands, directory/library/test map, adapters, data, debugging, safe extension | PASS |
| E | `appendix-e-terminology-and-adjacent-role-guide.md` | 2,415 | Canonical terms, acronyms/responsibilities, adjacent-role matrix, language prohibitions | PASS |
| F | `appendix-f-source-figure-and-edition-records.md` | 1,960 | Publication/source/claim/case/figure/companion/errata/version/index/release records | PASS |

Appendix A explicitly says it is a decision-depth refresher and not a substitute for qualified statistical review. Templates and checklists state that documents/checkmarks are not executed evidence. Appendix D refuses provider and production inference. Appendix E preserves FDE, MLE, research, product, domain, specialist, SRE, and formal-authority boundaries. Appendix F keeps the edition in review until exact rendered artifacts pass.

## Metadata and release boundary

`publication.json` now records:

- `status`: `review`;
- edition version: `1.0.0`;
- edition label: `First edition release candidate`;
- `publishedAt`: `null`;
- PDF filename reserved as `applied-ai-engineering-v1.0.0.pdf`;
- PDF `enabled`: `false` after proof generation.

The metadata therefore identifies a complete edition candidate without making the reviewed proof publicly downloadable.

## Continuity, originality, and safety review

- PASS: structural audit found exactly six ordered part headings and six ordered A-F appendix files.
- PASS: front/orientation, appendices, and full-edition word allocations fall inside the frozen architecture ranges.
- PASS: all new source files avoid the non-ASCII dash characters prohibited by the PDF pipeline.
- PASS: 220 substantial new paragraphs had zero exact matches against 5,789 other-publication paragraphs.
- PASS: 207 new paragraphs of 30 or more words had zero cross-publication candidates at normalized token-set Jaccard 0.80.
- PASS: no new material claim ID was invented and no chapter/source/claim registry was altered.
- PASS: numerical formulas and worked Patchwork results are either general definitions or explicitly synthetic examples with consequence and authority limitations.
- PASS: no new provider dependency, external action, autonomous effect, risk acceptance, certification, or production claim was introduced.
- PASS: the 21 chapter files, 118 claims, 55 sources, 42 figures, 21 learning/state/QA sets, 59 companion files, and 109-test behavior remain unchanged by this assembly.

Similarity review is a hostile-review aid, not legal proof of originality. The files were written fresh from the Applied AI architecture and canonical artifacts; no other publication prose was imported.

## Validation evidence

- `npm run validate:publications`: PASS, four role records and five publication records.
- `npm run test:publications`: PASS, 4/4 including optional assembly-field regression coverage.
- `npm run test:companion:aae`: PASS, 109/109.
- custom assembly/word/order/boundary audit: PASS with zero errors.
- exact and near cross-publication paragraph scans: PASS with zero matches at the recorded thresholds.
- full `npm run check`: PASS, including repository validators/tests, Astro production build, and 630 local references across 36 current published-site HTML pages.
- `git diff --check`: PASS.

The current Astro route count does not include Applied AI because its manifest correctly remains `review`. Root must verify the additional routes only after the final publication-state transition.

## Deterministic review-proof evidence

- Proofs G and H were built independently with the bundled PDF Python runtime and `--proof`.
- Both proofs are 633 A4 pages and 167,241,129 bytes.
- Both source digests are `bb3fe78926cca1ada640a963db38b668a2412278bfa0d0262656c8dcd3c3d07b`.
- Both PDF SHA-256 values are `a2118ba48bdedcf890a48e09171928e086afc8fdf57a74bb7f526acc643104b8`.
- PDF metadata records Komal Nakrani, the exact title/subject, invariant 2000-01-01 timestamps, A4 geometry, no encryption, and no JavaScript or embedded files.
- The outline has 39 destinations: 12 top-level entries plus 21 nested chapters and six nested appendices.
- Text extraction succeeds on all 633 pages (minimum 219 non-whitespace characters on any page), with no replacement glyph, Orchid note, or stale dossier-index text.
- Link audit finds 78 valid internal destinations and 59 valid external URI annotations representing 55 unique source URLs.

## Complete rendered-page QA

The exact proof G was rendered into 633 PNGs at 144 DPI, each 1,191 x 1,684 pixels. Automated raster checks found zero blank pages, zero marks touching the outer three-pixel edge, and zero missing author/version/footer/rule/page-number frames. Ten 64-page contact sheets (the last partial) were visually inspected for sequence, density discontinuities, clipping, broken tables/code, figure placement, blank pages, and broken glyphs. Representative full-resolution inspection covered the cover, contents, all six part starts, chapter starts, figures, appendices and each appendix transition, figure registry, sources, edition record, and pages 587-588.

The earlier page-587 defect is closed. The mechanism decision statement now fits as one complete three-line template on page 587; it does not clip or leave an orphan heading. Page 588 begins PF-04 inside the normal frame. Pixel-level checks confirm the header/footer furniture remains present on both pages.

## Root-owned artifact handoff

The shared Applied-specific overrides, deterministic generation, structure/text/link checks, and full rendered-page QA are complete. Root must now:

1. copy the exact reviewed PDF to its public download path and compare bytes;
2. enable and inspect all Applied AI web routes at desktop/mobile widths;
3. only then set `published`, fill `publishedAt`, enable PDF, record final public hashes/page count, and close #66.

Final source-assembly and review-proof disposition: **PASS**. Phase 11 publication itself remains open solely for the root-owned public mirror, web verification, and state transition.

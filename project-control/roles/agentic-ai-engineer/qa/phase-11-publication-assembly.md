# Agentic AI Engineering - Phase 11 Publication Assembly and Review Proof

Date: 2026-08-17
Issue: #73
Disposition: **PASS for review proof; not published**

## Scope and boundary

This record verifies the complete review assembly of *Agentic AI Engineering: Designing, Evaluating, and Operating Systems That Act*. It adds original front matter, six part introductions, six architecture-locked appendices, review metadata, and deterministic PDF proof evidence to the accepted twenty-chapter manuscript and forty certified PNG figures.

It does not publish the book, expose a public PDF download, set a publication date, change accepted artwork, start a course or another book, enter Abhyaas, commit, push, or close #73. The manifest ends at `review`, `publishedAt` remains null, and `pdf.enabled` is false after proof generation.

## Complete-edition inventory

| Component | Files | Words | Frozen allocation | Result |
| --- | ---: | ---: | ---: | --- |
| Accepted chapters | 20 | 176,372 | Accepted in prior phases | PASS, unchanged |
| Front matter | 1 | 2,750 | Combined orientation below | PASS |
| Six part introductions | 1 | 1,264 | Combined orientation below | PASS |
| Front/orientation total | 2 | 4,014 | 4,000-5,000 | PASS |
| Six appendices | 6 | 11,010 | 11,000-14,000 | PASS |
| Complete manuscript | 28 | 191,396 | Depth control, chapters already accepted | PASS |

Counts are whitespace-delimited and include Markdown headings, matching the existing manuscript convention.

## Architecture and continuity

- Six part introductions appear exactly once and precede Chapters 1, 4, 8, 12, 15, and 18.
- Appendices A-F match the frozen jobs: distributed failure refresher; action-system templates; threat/control/human-authority checklists; provider-neutral companion; protocol portability; terminology/provenance/edition records.
- Front matter preserves professional and formal-authority limits, non-certification status, original authorship, fictional FieldOps disclosure, synthetic-evidence limits, figure accessibility, and correction rules.
- No chapter, source, claim, figure, errata, companion behavior, or accepted PNG was modified during assembly.
- Registries remain 44 sources, 40 claims, 40 figures, and zero recorded errata.
- Canonical PNG and public mirrors remain the certified Phase 10 inputs; no SVG or stored WebP source was introduced.

## Deterministic proof

Proofs C and D were generated independently with the bundled PDF Python runtime and the proof flag. They are byte-identical.

| Property | Exact result |
| --- | --- |
| Pages | 600 A4 pages |
| Bytes | 17,106,169 |
| Source SHA-256 | `0067b745f88a1cb85e22f7f6f490cc6a33c8ada38e52525fcdcd36fa10ebc925` |
| PDF SHA-256 | `ebc7aacc416c7615a006f1c9aaa06fdcfb7e2ed8030f6475dcb0ad92df0a7419` |
| Chapter/appendix/figure/source counts | 20 / 6 / 40 / 44 |
| Recursive outline entries | 38 |
| Links | 76 internal + 46 external = 122; zero targetless |

Metadata records the exact title, author, and subject. Creation and modification times are invariant at 2000-01-01. The PDF is A4, version 1.4, unencrypted, and has no JavaScript, embedded files, or form fields. Text extraction succeeds on all 600 pages; minimum non-whitespace text is 169 characters, with zero empty pages and zero replacement glyphs.

## Renderer defect and regression closure

The first proof exposed two real defects: overlong preformatted lines on pages 451 and 529 reached past the right page edge. The accepted chapter text was not changed. `scripts/build-publication-pdf.py` now measures the longest Courier line and clones a smaller code style only when that line exceeds the usable content width. Normal code blocks retain the standard style.

Focused tests in `tests/test_publication_pdf_raster.py` prove both conditions: an overlong code line is fitted within `CONTENT_WIDTH - 6 mm`, and a normal line returns the unchanged standard style. `npm run test:pdf-artifacts` passes 3/3.

The repaired proof preserves 600 pages and passes deterministic byte comparison. Full-resolution inspection of pages 451 and 529 confirms the complete lines fit within the content frame and remain legible. The final raster scan reports zero outer-edge marks, closing the defect.

## Complete rendered-page QA

The exact repaired proof was rendered into 600 PNGs at 144 DPI. Every page is 1,191 x 1,684 pixels. Automated inspection reports:

- zero blank pages;
- zero sparse pages under the review threshold;
- zero marks touching the outer three-pixel edge;
- zero pages missing the expected header/footer/rule/page-number furniture.

Ten sixty-page contact sheets covering pages 1-600 were visually inspected for sequence, density discontinuity, blankness, clipping, broken glyphs, malformed tables or code, figure placement, captions, part starts, chapter starts, appendix transitions, figure registry, sources, and edition record. Full-resolution review included the repaired pages 451 and 529, appendices start page 552, figure-registry start page 592, and edition-record page 600. No remaining visual defect was found.

## Validation evidence

- `npm run validate:publications`: PASS, four role records and five publication records.
- `npm run test:publications`: PASS, 4/4.
- `npm run test:pdf-artifacts`: PASS, 3/3 including fitted-code regressions.
- Agentic companion suite: PASS, 60/60.
- `git diff --check`: PASS.
- Final build and built-site reference checks are recorded after the unpublished manifest state was restored.

## Root publication handoff

The complete review source and exact local proof pass. Root must copy the reviewed bytes to the public download location, enable and inspect the complete Agentic web edition, and then perform the explicit publication transition. Until that separate gate passes, the correct disposition remains **review proof passed, not published**.

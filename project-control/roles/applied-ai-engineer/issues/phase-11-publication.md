# Phase 11 - Applied AI Engineering Publication and PDF

GitHub issue: [#66](https://github.com/alpeshznakrani/komalnakrani/issues/66)

## Objective

Assemble the accepted Phase 09 prose and Phase 10 ImageGen PNG figures into a complete edition, then build and inspect the actual web/PDF artifacts before declaring version 1.0.0 published.

## Content assembly

- [x] Original front matter includes copyright, professional/certification boundary, preface, running-case boundary, audience, organization, reading paths, evidence states, companion use, figure use, source/case use, practice, edition, and errata guidance.
- [x] Six original part introductions match the architecture and advance Patchwork through the correct PF handoffs.
- [x] Six architecture-locked appendices cover measurement, artifact templates, system/threat checklists, provider-neutral companion use, terminology/adjacent roles, and source/figure/edition records.
- [x] Front/part allocation is 4,031 words; appendix allocation is 12,370 words; complete edition allocation is 150,382 words.
- [x] Publication metadata is `review` with label `First edition release candidate`, null `publishedAt`, and PDF disabled.
- [x] Patchwork and all numeric/result examples remain fictional/synthetic; professional authority and non-certification boundaries remain explicit.
- [x] Publication validation, publication tests, 109 companion tests, full repository check, Astro build, 630 built-site references, originality scan, and `git diff --check` pass for the assembled source.

## Root artifact gate

- [x] Remove three FDE-specific shared-PDF defaults for Applied AI: use six part starts `[1, 5, 9, 13, 17, 20]`; use the Applied appendix summary; and use the Patchwork/fictional-synthetic figure note. Schema, validator, and regression coverage accept and verify the optional manifest fields.
- [x] Build the complete review PDF twice and verify deterministic byte identity, source/PDF hashes, 633-page count, searchable text on every page, metadata, 39 outline destinations, 78 internal links, and 59 external links. Proofs G/H are byte-identical at SHA-256 `a2118ba48bdedcf890a48e09171928e086afc8fdf57a74bb7f526acc643104b8`; exact public download mirror remains part of the transition below.
- [x] Inspect all 633 PDF pages at 144 DPI plus representative full-resolution pages for clipping, blank pages, broken glyphs, figures, captions, tables, code, six-part/six-appendix sequence, and page furniture. Page 587's decision statement is compact, complete, and unclipped; page 588 begins PF-04 cleanly.
- [ ] Enable the complete 21-chapter web edition and verify overview, chapters, edition, errata, figure assets, navigation, canonical metadata, and desktop/mobile overflow.
- [ ] Mark `published`, set `publishedAt`, and enable PDF only after the exact rendered artifacts pass.
- [ ] Record final public-mirror/web publication QA and checksums, then close #66.

## Handoff

The Applied AI content assembly and deterministic review-proof QA are `PASS` and frozen in `project-control/roles/applied-ai-engineer/qa/phase-11-publication-assembly.md`. The manifest intentionally remains `review` with null `publishedAt` and PDF disabled. Root owns only the exact public mirror, published web-route QA, final publication-state transition, and issue closure. Do not enter Phase 13 or Abhyaas before #66 closes.

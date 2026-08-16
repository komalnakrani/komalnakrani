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

- [ ] Remove three FDE-specific shared-PDF defaults for Applied AI: use six part starts `[1, 5, 9, 13, 17, 20]` instead of `[1, 6, 11, 15, 18]`; replace the appendix summary that promises a completed fictional dossier index; and replace the figure note that names Orchid. The current publication schema does not permit the builder's optional `partStarts`, `appendicesSummary`, or `figureRegistryNote` manifest fields, so root must add reviewed schema support or generalize the pipeline compatibly.
- [ ] Build the complete PDF twice and verify deterministic byte identity, source/PDF hashes, page count, searchable text, metadata, bookmarks, internal/external links, and exact public download mirror.
- [ ] Inspect all PDF pages and representative full-resolution pages for clipping, blank pages, broken glyphs, figures, captions, tables, code, part/appendix sequence, page furniture, and accessible alternatives.
- [ ] Enable the complete 21-chapter web edition and verify overview, chapters, edition, errata, figure assets, navigation, canonical metadata, and desktop/mobile overflow.
- [ ] Mark `published`, set `publishedAt`, and enable PDF only after the exact rendered artifacts pass.
- [ ] Record final publication QA and checksums, then close #66.

## Handoff

The Applied AI content assembly is `PASS` and frozen in `project-control/roles/applied-ai-engineer/qa/phase-11-publication-assembly.md`. Root owns the shared pipeline adjustment, PDF generation, render inspection, web enablement, final hashes, and publication-state transition. Do not enter Phase 13 or Abhyaas before #66 closes.

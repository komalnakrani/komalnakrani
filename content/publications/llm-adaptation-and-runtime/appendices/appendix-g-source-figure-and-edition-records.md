# Appendix G - Source, Figure, and Edition Records

## Publication identity

The canonical publication manifest is `publication.json`. It records the series and volume, title, author, language, publication state, edition version, chapter order, part boundaries, appendix summary, registry paths, canonical URL, and PDF configuration.

For this published edition:

- series: LLM Engineering;
- volume: 2;
- edition: 1.0.0, first edition;
- chapter count: 17;
- part count: 5;
- appendix count: 7;
- publication state: published;
- published date: 2026-08-17;
- canonical PDF: enabled for `llm-adaptation-and-runtime-v1.0.0.pdf`.

The manifest records the accepted publication decision. It does not approve a model, training job, package, deployment, production outcome, or organizational risk decision.

## Source register

The canonical source register is `sources.json`. Each source has a stable identifier, title, organization or authorship, URL or locator, publication date where available, access date, source type, and bounded usage note.

The register supports traceability, not truth by association. A paper, standard, official documentation page, model card, dataset card, or vendor technical page can support a narrow mechanism, interface, or reported result. It does not establish Mosaic's population, data rights, hyperparameters, model compatibility, infrastructure, resources, or release readiness.

Source currentness reviews live under `production/`. They preserve the checked date, replacement risk, and disposition. A current URL does not make an old result current for a changed artifact or workload.

## Claim register

The canonical claim register is `claims.json`. Stable claim IDs connect chapter statements to sources and retain scope notes. A claim record should make it possible to ask:

- what exact statement is supported;
- which source and section carry the evidence;
- whether the statement reports, explains, compares, or synthesizes;
- which model, data, runtime, version, task, and limitations apply;
- whether the chapter extends the source through an explicit inference.

Unsupported operational or population claims must not be smuggled into a sourced mechanism explanation.

## Figure register and provenance

The canonical figure register is `figures.json`. The Volume 2 sequence is V2-F01.1 through V2-F17.2, with two figures per chapter. Each accepted record should preserve:

- stable figure ID and chapter anchor;
- title, caption, alt text, and long description;
- canonical PNG path and public mirror path;
- width, height, format, and SHA-256 identity;
- generation source and prompt/provenance record;
- required and forbidden labels;
- synthetic-art and evidence limitation;
- visual, semantic, typography, accessibility, and mirror QA disposition;
- correction or rejection history where applicable.

Figures are explanatory concept art. Their synthetic values, relative sizes, gauges, curves, frontiers, and states do not report measured model, training, product, user, resource, cost, or production outcomes. Color is supplemented by labels, geometry, gates, arrows, texture, icons, or position. The canonical source is PNG; delivery derivatives are not provenance sources.

## Companion evidence

The companion records under `companion/md09/` through `companion/md16/` are deterministic teaching artifacts. Their source code, tests, JSON output, commands, and execution limits belong to the evidence record.

Passing tests establish local mechanics only. Simulated candidates remain simulated. `trainingExecuted: false`, `modelExecuted: false`, `benchmarkExecuted: false`, missing adapter state, template incompatibility, release hold, and other negative evidence must remain visible in summaries and proofs.

## Errata

The canonical errata register is `errata.json`. An erratum should identify edition, location, problem, status, resolution, replacement text when applicable, and the edition or web update that carries the correction.

Review-stage corrections can be incorporated before publication while retaining review history. After publication, content must not change silently under the same edition identity. Material source, figure, code, or claim corrections require registry and proof review.

## Deterministic PDF release

A release PDF should be generated from the same chapter order, front matter, five part introductions, seven appendices, figures, source register, and edition metadata used by the web edition. Record:

- source SHA-256 over the assembled publication inputs;
- PDF SHA-256 and byte count;
- page size and page count;
- chapter, appendix, figure, source, and errata counts;
- deterministic metadata and generated-time policy;
- bookmark and link inspection;
- text extraction and empty-page checks;
- full rendered-page inspection for clipping, overlap, missing glyphs, missing figures, and broken transitions;
- independent second build and byte comparison.

The final manifest must retain `pdf.enabled: true`, `status: published`, and `edition.publishedAt: 2026-08-17`. The installed canonical download must be byte-identical to the accepted release artifact. Any later material source or edition change requires a new reviewed artifact identity rather than silent replacement.

## Complete-edition release

A truthful complete edition includes:

1. publication metadata and canonical order;
2. copyright, disclaimer, preface, audience, organization, evidence language, and companion limits;
3. all five part introductions and 17 chapters;
4. all seven appendices;
5. accepted figures with accessible descriptions and provenance;
6. source, claim, figure, and errata registries;
7. deterministic companion evidence and explicit execution limits;
8. web build and local-reference validation;
9. two deterministic final PDF builds with structural and visual inspection;
10. an explicit publication record and immutable download identity.

Publication does not imply production readiness, model approval, deployment approval, or organizational authority. It means this educational edition passed its declared source, manuscript, figure, companion, web, PDF, and release checks.

## Release record

The deliberate release change for version 1.0.0:

- changed status from review to published;
- recorded 2026-08-17 as the publication date;
- enabled the canonical PDF;
- attached the approved PDF identity and release evidence;
- exposed the edition in published catalog and route surfaces.

Any source, figure, code, registry, metadata, or builder change after proof invalidates the prior source digest and requires the affected gates to rerun.

## Objective

Build the reusable Komal publication foundation that turns fresh, source-backed manuscripts into validated web editions, versioned PDFs, and public edition/errata records without reintroducing inherited content.

## Inputs

- Clean Komal visual shell established by issue #1
- Master Abhyaas × Komal operating prompt
- Locked Komal-first execution order
- Approved light editorial UI
- PDF creation and visual-verification requirements

## Work

- Define typed role, series, book, volume, edition, chapter, source, claim, figure, erratum, and publication-manifest contracts.
- Establish canonical fresh-manuscript directories and source/figure/errata registries.
- Load only validated `published` records into public Astro routes.
- Add a deterministic validation command covering identity, mappings, provenance, chapters, figures, accessibility, status, versions, and file integrity.
- Add public edition and errata route scaffolding.
- Generate versioned PDFs from the same canonical manuscripts used by the web reader.
- Render and visually inspect a non-production pipeline verification PDF.
- Document authoring and release workflow for every future role book.

## Acceptance criteria

- [x] Schemas represent every publication truth object and reject unknown/invalid states.
- [x] Empty production catalogs still build without publishing fixtures or placeholders.
- [x] A fixture proves valid publications pass and malformed publications fail validation.
- [x] Public routes are generated only for `published` manifests.
- [x] Edition and errata URLs are stable and book-scoped.
- [x] Figure records require source file, alt text, caption, and chapter mapping.
- [x] Source records support chapter/claim traceability and access metadata.
- [x] PDF output is deterministic, versioned, checksum-addressable, rendered to PNG, and visually verified.
- [x] `npm run build` and the publication validation suite pass.
- [x] Factory state records the next role bootstrap action.

## Verification

- `npm run validate:publications`
- invalid-fixture regression tests
- `npm run build`
- PDF generation against the valid fixture
- `pdfinfo` and text extraction checks
- Poppler page rendering and PNG inspection
- `git status --short --branch`

## Outputs

- publication types/loaders and schemas
- canonical content directory contract
- validation and PDF build commands
- role/book/edition/errata route scaffolding
- authoring/release documentation
- PDF verification evidence

## Dependencies

- Komal issue #1 complete.

## Handoff

The first role issue can begin Forward Deployed Engineer research and fresh book architecture without inventing storage, provenance, release, or PDF conventions.

# Komal publication workflow

All books are original Komal work. The copied site contributes visual structure
only; no inherited manuscript, figure, source list, or commercial record may be
used as publication input.

## Canonical directory

Each role lives at `content/roles/<role-slug>/role.json`. Each book lives at:

```text
content/publications/<book-slug>/
  publication.json
  sources.json
  claims.json
  figures.json
  errata.json
  chapters/<chapter-slug>.mdx
  assets/<original-figure-file>
```

Copy the structures from `tests/fixtures/publication` only as a schema example.
That fixture is a non-production pipeline test and must never be copied into the
production content directory.

## Status gates

- `planned`: architecture only; no public route.
- `research`: evidence and role boundary in progress; no public route.
- `draft`: prose in progress; no public route.
- `review`: complete manuscript under source/editorial/visual review; no public route.
- `published`: public web routes and PDF are permitted after validation passes.
- `withdrawn`: retained for audit and errata history, excluded from public catalog generation.

Only `published` manifests are loaded by Astro.

## Required commands

```sh
npm run validate:publications
npm run test:publications
npm run build
PDF_PYTHON=/path/to/python-with-reportlab npm run build:pdf -- --slug <book-slug>
```

Install the pinned PDF dependencies from `requirements-pdf.txt` when the chosen
Python environment does not provide them.

## Release evidence

The PDF builder writes a versioned PDF and a sidecar manifest under `output/pdf/`.
The manifest records the edition, canonical-input digest, PDF SHA-256, and page
count. Rebuilding unchanged inputs must produce the same PDF checksum. Render the
final PDF with Poppler, inspect every page image, extract text as a secondary
check, and publish a download only after both automated and visual QA pass.

Errata are edition-scoped and remain available at stable book URLs. Corrections
that change the manuscript require a reviewed edition update; they are not
silently patched into an already identified release.

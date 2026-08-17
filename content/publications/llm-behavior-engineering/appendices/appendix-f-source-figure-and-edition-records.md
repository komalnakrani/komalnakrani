# Appendix F - Source, Figure, and Edition Records

Publication integrity depends on stable identity. A reader or reviewer should be able to determine which edition, chapter, claim, source, figure, companion artifact, correction, and proof supports a statement.

## Publication identity

The canonical manifest is `publication.json`. It records the publication and role slugs, series and volume, title and subtitle, author, language, review status, edition identity, ordered chapters, part boundaries, registry paths, and PDF disposition.

Version 1.0.0 is currently a first-edition review. Its `publishedAt` value is null and `pdf.enabled` remains false. A locally generated proof may be complete enough for inspection while remaining unreleased. Proof generation must not silently transition the manifest to published state or enable a canonical download.

Status meanings are:

- `draft`: source is still being assembled;
- `review`: a complete edition candidate is under editorial, visual, web, and PDF review;
- `published`: the canonical web and PDF artifacts passed release checks and the publication date is recorded;
- `withdrawn`: the edition is no longer offered as current, with reason and replacement when applicable.

## Source register

The production source registry is `sources.json`. Each source has a stable ID, title, authors, publisher, URL, date where available, access date, use scope, and limitations. The deeper role-control research records preserve currentness and chapter/source mapping.

Source review rules:

1. prefer primary standards, peer-reviewed papers, official documentation, and first-party technical publications for material claims;
2. keep benchmark task, dataset, configuration, method, and limitations visible;
3. keep provider documentation version and access date visible;
4. do not treat citation, access, or vendor publication as endorsement or universal proof;
5. record unavailable or access-restricted sources honestly;
6. replace a misleading or broken source only through a reviewed registry and claim change.

## Claim register

The production claim registry is `claims.json`. A claim record identifies its owning chapter, bounded statement, and supporting source IDs. The chapter places the claim marker near the relevant argument.

To review a claim:

1. read the complete chapter context and qualification;
2. inspect the claim record and every supporting source limitation;
3. confirm the source supports the bounded statement rather than a stronger adjacent claim;
4. recheck volatile versions or schedules;
5. record contradiction, missing evidence, or narrowing rather than selecting only favorable evidence;
6. enter a correction when the edition statement must change.

Citation count is not a confidence score. Multiple sources can share assumptions or one underlying dataset. One authoritative specification can define an interface without proving product effectiveness.

## Figure register and provenance

The production figure registry is `figures.json`. It records each figure's stable registry ID, canonical PNG file, alt text, caption, chapter slug, creator, source IDs where applicable, and license.

Volume 1 contains 32 original synthetic ImageGen PNG teaching figures, two per chapter. Their captions state the supported teaching relationship and limitation. Long descriptions remain in the chapter figure blocks. Essential meaning uses labels, paths, icons, shapes, texture, and barriers rather than color alone.

The Phase 10 production records preserve:

- forecast figure ID and final filename;
- built-in ImageGen disclosure and generated-source path;
- exact essential label inventory and QA disposition;
- final pixel dimensions and PNG disposition;
- canonical content path and byte-identical public mirror path;
- SHA-256 digest;
- mascot non-use and empty identity-reference list;
- synthetic-art disclosure and rejected-candidate notes where correction was required.

The generated images are explanatory art. They contain no measured model, product, user, or production result. A figure can explain a process while its caption and nearby prose carry the exact evidence limitation.

## Companion evidence

The companion is source, not a released service. Its tests and runner produce deterministic local evidence for synthetic fixtures. A companion review should record runtime version, exact command, source revision or digest, test count, result, and limitation.

Do not copy customer data, secrets, raw production traces, or proprietary provider content into the companion. Do not represent a passing fixture as live capability or authority.

## Errata

The errata registry is `errata.json`. A correction record should include edition version, location, reported problem, evidence, disposition, replacement text where applicable, resolution date, and edition impact.

Use an erratum for a bounded correction whose edition policy permits it. Use a reviewed patch edition when the canonical files change. Use a larger edition decision when a behavior contract, claim meaning, chapter structure, figure teaching relationship, or companion contract materially changes. Never silently replace a released PDF while retaining the same artifact identity.

## Deterministic PDF proof

The PDF builder consumes the publication manifest, front matter, part introductions, appendices, chapters, source/claim/figure/errata registries, and canonical figure assets. It records a source digest, PDF SHA-256, page count, chapter and appendix counts, figure and source counts, bookmark count, and byte size.

Two consecutive proof builds from unchanged inputs must produce the same PDF hash and source digest. Determinism does not prove editorial or visual correctness. Review also requires:

- successful publication validation;
- searchable text and expected title/edition language;
- chapter, part, appendix, figure, source, and edition bookmarks;
- valid external source links and no broken local asset references;
- full-page rendering with no clipping, overlap, black boxes, missing glyphs, or illegible labels;
- representative inspection of cover, copyright, contents, every part transition, chapters with dense tables/code, every appendix transition, figure registry, sources, and edition record;
- exact page count and PDF digest recorded in the review report.

## Release transition

A passing proof remains a proof. Publication requires an explicit transition that records the accepted canonical files, exact PDF digest, web route checks, complete render review, issue and authority state, publication date, and enabled download path. Until that transition occurs, `status: review`, `publishedAt: null`, and `pdf.enabled: false` remain the truthful manifest state.

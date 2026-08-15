# Forward Deployed Engineering Publication QA

Date: 2026-08-16  
Edition: 1.0.0  
Verdict: PASS

## Released artifacts

- Canonical PDF: `output/pdf/forward-deployed-engineering-v1.0.0.pdf`
- Public mirror: `public/downloads/forward-deployed-engineering-v1.0.0.pdf`
- PDF SHA-256: `96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050`
- PDF source SHA-256: `6eb0b05c5a2945e66ffa7f3185a08c57819c007042f55290396105445658028d`
- Publication source-tree hash: `d1353ee4fb46047efa2b36786484c276a84740aadb8c495382e10760a97b0b9a`
- Astro build-tree hash: `e86f295eb828e05586a5f33f5355e32a37b4076644567088a8bc98aa45939db6`

## PDF evidence

- Two final builds are byte-identical at 911,588 bytes and 338 A4 pages.
- Complete sequence: front matter, five parts, nineteen chapters, five appendices, figure registry, 61-source registry, and edition record.
- All 338 pages were rasterized and reviewed through nine contact sheets; representative figure, table, code, appendix, registry, and edition pages were also inspected at full resolution.
- Automated inspection found zero blank-like pages, zero characters or annotations outside page bounds, 38 distinct figure identifiers, 38 immediate `Text alternative:` blocks, 38 full `Long description:` blocks, 35 recursive outline entries, and 619,358 extracted characters.
- Link inspection found 61 external URI annotations (58 unique) and 70 internal links, all within page bounds.
- No clipping, missing figures, broken glyphs, orphan pages, unreadable tables/code, or page-furniture defects remain. The neutral palette and explicit labels do not rely on color alone.
- Metadata, bookmarks, searchable text, captions, immediate alternatives, and long descriptions are present. The file is not claimed as formally tagged PDF/UA.

## Web evidence

- Astro produced 28 static HTML pages: the site surfaces, role, library, book overview, nineteen chapters, edition index/detail, errata, and 404.
- The built-site checker resolved 440 local `href`/`src` references with no missing route or asset, including the byte-identical PDF download and all final SVGs.
- Browser proofs at 1440 by 1100 and 390 by 844 visually verified the book overview and the figure/table/code-heavy Chapter 11 route.
- An initial mobile proof exposed overflow from long inline code. The shared reader containment and inline-code wrapping rules were corrected and rebuilt.
- Automated browser inspection then checked all 27 generated index routes at 390 by 844; every route reported `scrollWidth === innerWidth` and no overflowing element. Representative desktop routes also reported no overflow.
- Canonical metadata, primary/mobile navigation, chapter navigation, edition/errata links, start-reading action, and PDF download are present.

## Executable and repository evidence

- Publication schema validation: PASS.
- Publication validation tests: 3/3 PASS.
- Provider-neutral companion tests: 64/64 PASS.
- Astro production build: PASS.
- Built-site route/asset/link check: PASS.
- Companion demo and recovery rehearsal: PASS.
- `git diff --check`: PASS.

## Release boundary

Orchid and all satellite cases remain explicitly fictional/synthetic. The edition does not claim certification, legal or compliance authority, real customer evidence, or production outcomes. Formal PDF/UA conformance was not asserted.

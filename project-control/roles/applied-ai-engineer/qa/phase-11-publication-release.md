# Applied AI Engineering - Version 1.0.0 Publication Release

Status: **PASS - PUBLISHED WEB AND PDF EDITION VERIFIED**

Date: 2026-08-17

Issues: #66 and #21

## Release identity

- Publication: *Applied AI Engineering: From Model Capability to Dependable Product Behavior*
- Author: Komal Nakrani
- Edition: First edition, version 1.0.0
- State: `published`
- Published date: `2026-08-17`
- Canonical URL: `https://komalnakrani.com/books/applied-ai-engineering/`
- Download filename: `applied-ai-engineering-v1.0.0.pdf`

## Final PDF artifact

- Pages: 633 A4 pages
- Bytes: 19,066,601
- PDF SHA-256: `0ea2dbd9a77edf30dbaffba8700e17f684ea32abb9135d0afa5a630394914fda`
- Source SHA-256: `e8f50ce27589dfa19f070bd17d32abac60bb5ec6da0f8eb01f1974384686eaf5`
- Chapter count: 21
- Appendix count: 6
- Figure count: 42
- Source count: 55
- Errata count: 0

The release PDF was built independently twice and the two outputs were byte-identical. The canonical output and public download mirror were then compared by SHA-256. The delivery build encodes raster figures as high-quality JPEG streams inside the PDF while preserving the accepted canonical PNG source assets; this reduces the downloadable file from approximately 159 MB to 19 MB without changing page count or layout.

## PDF inspection

- All 633 pages rendered at 144 DPI to 1,191 x 1,684 PNGs.
- Automated raster scan found zero blank pages and zero marks touching the outer edge.
- Ten contact sheets covering the complete edition were visually inspected.
- Representative full-resolution comparison of figure-heavy pages found no material visual loss; labels remained crisp and readable.
- Pages 587 and 588 preserve the corrected decision statement, normal frame, and clean PF-04 continuation.
- Searchable text, metadata, outline destinations, internal links, and external source links were rechecked against the final release artifact.

## Web publication QA

- Repository validation and production build passed with the Applied AI edition enabled.
- The build contains 61 HTML pages and 1,093 checked local references.
- Overview, chapter, edition, errata, figure, and PDF download routes returned successfully in local production preview.
- Desktop rendering passed visual inspection.
- Mobile device emulation at 390 CSS pixels reported matching viewport, document, and body widths with no horizontal overflow.
- Canonical publication metadata, edition identity, published date, and PDF filename agree across the manifest, front matter, Appendix F, web edition, and release record.

## Disposition

Phase 11 is `PASS`. Version 1.0.0 is published and the public PDF is the exact artifact identified above. Future corrections must use the errata and edition rules in Appendix F; the web and PDF must not be silently changed under the same edition identity.

The active-book stop boundary remains in force. Do not start Phase 13, a new Komal role/book, or Abhyaas work until the user explicitly resumes the factory.

# Field Expedition Log complete-edition QA

## Verdict

`PASS` for private review. The public Forward Deployed Engineering edition was intentionally not replaced.

## Artifact

- Path: `output/pdf/forward-deployed-engineering-screen-first-review.pdf`
- Author: Komal Nakrani
- Format: 7 by 10 inches, screen-first
- Pages: 592
- Bytes: 102,847,285
- SHA-256: `86f32e507ca9eb9c0cd6394f1c1e5a58c0891a540b98c5b1546ac20bd653595d`
- Rendered HTML SHA-256: `aae0dcfcdce00bcbc4155d8534c6fcb73fbab92047faeb28ca5c82e21eb8e893`
- Outline entries: 33
- PDF links: 88, with zero targetless annotations
- Extracted characters: 637,327

An independent build at `tmp/pdfs/fde-screen-first-review-rebuild.pdf` produced the same byte count and the same PDF SHA-256. The two PDF files compare byte-for-byte equal.

## Content and structure

- 5 part openers
- 19 chapter-coordinate openers
- 38 full-page ImageGen PNG explainers, exactly two per chapter
- 5 appendices
- source, claim, figure, accessibility, author, and closing records
- complete opening matter, route-map contents, chapter gates, exercises, and handoffs

The PDF title is `Forward Deployed Engineering - Field Expedition Log - Screen-First Review`; its author metadata is exactly `Komal Nakrani`. All pages are searchable, 504 by 720 points, and use embedded Barlow Condensed, Source Sans 3, and IBM Plex Mono fonts. There are no sparse pages, replacement glyphs, encryption, wrong page sizes, or missing outline destinations.

## Visual review

All 592 pages were rasterized at 72 DPI into 13 complete contact sheets. Every contact sheet was visually inspected. Cover, contents, part openers, chapter openers, figure pages, dense tables and code, appendix transitions, author page, and closing page were additionally inspected at higher resolution. No blank pages, clipped content, overlaps, missing figures, broken transitions, or illegible labels remain.

Two pagination defects were repaired before acceptance:

1. A long field list could leave one orphan item on its own page. The renderer now keeps field lists together.
2. A heading immediately before a forced full-page figure could become an orphan. The renderer now moves that heading into a compact figure prelude on the figure page.

## Protected public edition

- Published manifest SHA-256: `d35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb`
- Published PDF SHA-256: `96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050`

Both hashes remain identical to the frozen values. Neither published file is modified by this private-review work.

## ImageGen asset ledger

All accepted assets are PNG, 1536 by 1024 pixels, visually distinct, and mascot-free. The authoritative production record is `imagegen-production.json`.

| Figure | SHA-256 |
|---|---|
| FIG-001 | `e6f477339a46f54145433787fca5a743da40666b8761ee357032f886f78af796` |
| FIG-002 | `7537b7c012d0b12a3709375c5b0d1b4efae91adf9201dcf2b84d7abe382718d8` |
| FIG-003 | `46a40f9fc8475632fde66c3e8f5e5afe4b2855671801bbd74e207de4739b2e62` |
| FIG-004 | `8b839a5ffab87be7c13058933958b17de08d66da227386ab6355f44ae20aabae` |
| FIG-005 | `bd65575674766387b16df8b619964b4f10332258b2c4189425bd3dd8367902bd` |
| FIG-006 | `7b25116a243f405ff8109de53147fed2624560640abf5779d43d5953c37adf54` |
| FIG-007 | `f2f1520e2fea8da32ff82ea2d08a9315ac4bde31c7d2976c812451747a3103ec` |
| FIG-008 | `953ca6001c939aab50674700a15491ccae8ca2427c7bb4dc214f53a36c744157` |
| FIG-009 | `17b3b19f17eef3f1efff9b81739267bd36868d6002df417eb4e47fc63a5de442` |
| FIG-010 | `abdb0f5122b34ded3672866a31f415a204355148241e3468261d8d38b8200f5e` |
| FIG-011 | `45ada61721f673176f9030abd00314a77c4537715985fe8adf3b22a38dc4fb79` |
| FIG-012 | `e92cf5faf04c6b67a9a14cd86bff1eb5650b9dc4c3cd3033b657b1666d730e8a` |
| FIG-013 | `996a8dba89923af48dbe92800d74152711ce074748bc2041498c6736adba8bf8` |
| FIG-014 | `7670ec06c9b66166590e09dee1deb71069712492d2620095aaad30e8f9acff47` |
| FIG-015 | `a8e0c4faa391806b619b48dfc9734c68f46338814b55bf4d31806382bb0b168d` |
| FIG-016 | `f16ecae7a7d5c718e77073233dca6ab1c725096397eee231435e9b469b7433b9` |
| FIG-017 | `c8cb29170af9f0fd6e4ee212d4ecb7df0a868842184760fef567040cdb9354d7` |
| FIG-018 | `183559cfb9085493cc8092364829640e266a88b472afff3829b1856edc3d467f` |
| FIG-019 | `cb8a62f6c4260eb0ec4f4a8f3c6367b506363013accb6afe64845c58eb45dc5f` |
| FIG-020 | `96a27574433249cbcc936589ef57a1daa5d28646828edeb538ddd489abc2e5ee` |
| FIG-021 | `a4167cb0de16d8c51a2cc666d440abfdbac275e4d3a4e757e24ee8a837154ab0` |
| FIG-022 | `ed82bc109a5a2f1d2575bc85df9e763c438fa9566d0b66a33a45fa42952c0c59` |
| FIG-023 | `71caf59dbd752cfe81e4e2267d7b99ec6cc3c85bab59999baeb40de2c136def7` |
| FIG-024 | `476a877157dcaa57e4babb51f28319d5dc717376b9e9a74ba0c5d232a6fa4fe3` |
| FIG-025 | `689a78819a1842fa7f918405f91b69d030ee3a0c035a70237d26f29997d17db2` |
| FIG-026 | `1d7d90447ee5c577e9680155bdaac2a3900184f29900a1d17c2bd308135dbe89` |
| FIG-027 | `b6dd61497faf46faf5f97ada5469d2d61e6205e19b9f12bfa7938785e024117a` |
| FIG-028 | `2fec9bd251328f79011fdc49e7e72aa2eddde1474a8a16a0bb770deaf98de7c5` |
| FIG-029 | `97b8b86bdcd1e418d1907bfbffbaff5d0b8bd6571014a23495dca895a38718c7` |
| FIG-030 | `c60bcdd424550027bc6b9de49202b4fda11799b597e3b318ab752d59284c79ac` |
| FIG-031 | `8c1132bcda8569dbf606d22a3d9a134d1fa34ec632687ab2a09400df7139e46a` |
| FIG-032 | `b3350a643e8221010eaa557f2a609db1db537f6f83da4705eef90ab3301479fe` |
| FIG-033 | `037c0e583df996fd447b70a204d5880aa24c1a8cd339c603a8378a01fe593be0` |
| FIG-034 | `b4686923e9f66c067f8a71d4ffba630b791815534f9c69d22c04539b6f0055e2` |
| FIG-035 | `e64514e32ebb76b21f91212cd233b2bce43d336c3c328a20a0e1a6d79c867492` |
| FIG-036 | `1ae1c095797b8706481acf81bfdcad4d520ea1015c83318136b0f4d37c196a2f` |
| FIG-037 | `68bd5e26e07233674a31335b1cbc41228a12684e51600a0d940a21099b936b3c` |
| FIG-038 | `05fc61a834be1949abb470ff60103e1cebca0f4e127ccc5f68a5fff48dfc2dea` |

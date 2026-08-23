# Machine Learning Engineering Phase 09 — Continuity and Originality Audit

- Audit task: `TASK-03`
- Producer: `/root/mle_p9_continuity`
- Audit date: 2026-08-23
- Disposition: **BLOCKED FOR CANONICAL REPAIR**
- Canonical repair owner: Phase 09 Task 07 integration owner only

## Bound authority and scope

This is a read-only audit of the accepted Phase 08 reader package. It does not
repair a chapter, furniture file, blueprint, register, companion file, review,
validator, issue, or state authority. The audit is bound to:

| Authority | SHA-256 |
|---|---|
| Whole-book QA design | `3b256a6dac36b31e39e9a402f48a8641195b177fcf083e4ee65cc53ce2fda3b5` |
| Phase 09 implementation plan | `5d46b79f03b4eee04a3d091f0e1f46956cefddd31eb17d4e30f62982008c168e` |
| Accepted Task 01 repair review | `2ca7d495c3d5004eba1b199fecfb41eb733ec45a284d2b52ec46ace2892bf12c` |
| Phase 08 manuscript register | `b75553369ec89a65d32d97a9d05e372e29a4404785cb66c536e2b46466a430be` |

The reader corpus is exactly the 21 registered chapter files and 15 registered
furniture files: `opening-and-closing.md`, seven part openers, and Appendices
A–G. `phase-09-handoff.md` and `verification-report.md` are control evidence,
not registered reader furniture, and are not used to make reader-prose findings.
Blueprints and the manuscript register are comparison authorities, not reader
surfaces.

## Mandatory opening findings retained

| Opening ID | Audit disposition | Result |
|---|---|---|
| `P09-OPEN-01` | accepted | Reader-facing phase, blueprint, production-specification, private-package, generation/implementation-status, and next-work instructions are present. See `P09-CON-001`. |
| `P09-OPEN-02` | accepted | The three chapter lanes have incompatible H1 and metadata regimes. See `P09-CON-002` and `P09-CON-003`. |
| `P09-OPEN-03` | accepted | Identifier-stripped reconstruction confirms both named 75-word repeats and exposes additional templated authorial frames. See `P09-CON-004` and `P09-CON-005`. |

None of these opening findings is disproved or closed by this audit.

## Method

1. Read the actual bytes of all 36 reader files and compared chapter identity,
   title, slug, part, milestone, dossier state, and next-chapter projections to
   the manuscript register and chapter blueprints.
2. Inspected every adjacent chapter seam, including `07 → 08` and `14 → 15`,
   each part entry/exit, forward and backward chapter references, and every
   Markdown furniture link.
3. Scanned all reader paragraphs as normalized Unicode words in paragraph
   boundaries. The classification scan removed only identifier-shaped tokens
   (`MLE-*`, `BL-*`, `CASE-*`, `BND-*`, `SCN-*`, `PD-*`, `PORT-*`, `FIX-*`,
   `FURN-*`) and the repeated fixture-hash placeholder. It did not exempt a
   paragraph because it began with a convenient prefix.
4. Reconstructed exact normalized twenty-word windows, longest exact runs, and
   five-word-shingle near matches across all reader files. Every candidate was
   returned to its exact file and paragraph before classification.
5. Repeated the identifier-stripped twenty-word comparison against the 21
   matching research packs and 93 published other-role chapter files. No
   same-pack or published-other-role match survived.

The cross-file scan found 890 distinct shared twenty-word windows after
identifier removal. This is an overlapping-window count, not 890 independent
copy events. Exactly two whole normalized paragraphs repeat across files: the
two known 75-word groups. The rest resolve to the byte-bound frames classified
below. No file contains an internal paragraph-bounded twenty-word duplicate
after identifier removal.

## Findings

### P09-CON-001 — HIGH — Reader prose contains private production control

**Affected identities:** `MLE-CH-01` through `MLE-CH-21`, `FURN-BZ-03`, and
`Appendix G`.

The reader is repeatedly told what Phase 08 or Phase 09 may do, how a producer
must create the chapter, what a future phase may generate, and which later work
is inactive. These are package-control instructions, not teaching. Exact
examples include:

- Chapters 01–07 end with the same instruction to not activate Phase 08 or
  create code/assets "from this blueprint": `chapter-01.md:147`,
  `chapter-02.md:165`, `chapter-03.md:180`, `chapter-04.md:192`,
  `chapter-05.md:193`, `chapter-06.md:207`, `chapter-07.md:204`.
- Chapters 08–14 announce a "private Benchline dossier" at their openings and
  the inactive next phase at their endings, for example `chapter-08.md:3`,
  `chapter-08.md:175`, `chapter-09.md:3`, `chapter-09.md:176`,
  `chapter-14.md:3`, and `chapter-14.md:184`.
- Authoring directions survive inside durable handoffs: "Write MLE-CH-11 from
  this production specification" at `chapter-11.md:170`, with the same family
  at `chapter-12.md:176`, `chapter-13.md:184`, and `chapter-14.md:178`.
- Phase-specific visual production instructions occur at `chapter-05.md:66`,
  `chapter-08.md:71`, `chapter-10.md:75`, `chapter-11.md:73`,
  `chapter-14.md:79-81`, `chapter-16.md:48`, and `chapter-18.md:42`.
- The complete Lane C top-of-chapter visual-placeholder family exposes current
  phase or implementation status in reader prose: `chapter-15.md:3`,
  `chapter-16.md:3`, `chapter-17.md:3`, `chapter-18.md:3`,
  `chapter-19.md:3`, `chapter-20.md:3`, and `chapter-21.md:3`. Chapters 15, 17,
  and 19 were absent from the original affected-identity list even though their
  lines explicitly say the visual is a placeholder and/or that no asset is
  created. The other four lines belong to the same reader-visible family and
  must be reconciled under one disposition rather than treated piecemeal.
- Later-role/package status leaks at `chapter-18.md:100`,
  `chapter-20.md:104`, and `chapter-21.md:98`.
- Reader furniture identifies the edition as private Phase 08 production at
  `opening-and-closing.md:37-38`; Appendix G repeats the private manuscript
  status at `appendix-g.md:49-52`.

This is not cured by accurate teaching limits such as "a lab does not prove
production." The limitation may remain, but the historical phase number,
producer instruction, private-package status, and next-work boundary must not.

**Proposed disposition:** Task 07 should rewrite each affected passage as one
of: a reader-facing limitation, an edition-neutral visual/accessibility
contract, or a currentness trigger. Delete historical lifecycle commands and
authoring instructions. For every Chapter 15–21 top visual record, retain its
exact visual ID, decision purpose, selectable-text/accessibility meaning, and
canonical register binding while moving phase/generation/placeholder status
out of reader prose or rewriting that status as edition-neutral reader content.
Preserve teaching content, canonical IDs, and genuine non-proof boundaries.
Verification must search actual reader bytes for phase, factory,
blueprint-activation, producer/reviewer, private-package,
generation/implementation-state, and production-specification language rather
than relying on a word allowlist.

### P09-CON-002 — HIGH — Three incompatible H1 and metadata regimes

**Affected identities:** all 21 chapters, with lane boundaries at `MLE-CH-07 →
MLE-CH-08` and `MLE-CH-14 → MLE-CH-15`.

The first seven chapters use `# Chapter N — Title` plus visible `Author`,
`Chapter ID`, and `Milestone` fields (`chapter-01.md:1-5` through
`chapter-07.md:1-5`). Chapters 08–14 use `# MLE-CH-NN — Title` and no author,
milestone, or slug metadata (`chapter-08.md:1` through `chapter-14.md:1`).
Chapters 15–21 use title-only H1s and no chapter metadata
(`chapter-15.md:1` through `chapter-21.md:1`). No chapter exposes a `Slug`
field.

The underlying identities are sound: the register has 21 unique titles, 21
unique slugs, and 21 unique chapter IDs, and each displayed title matches its
registered title after removing the lane-specific prefix. The defect is the
reader convention, not canonical identity.

**Proposed disposition:** Task 07 should select one H1 pattern and one metadata
schema for every chapter. A suitable contract is `# Chapter NN — Title`, with
one consistent metadata block carrying author, chapter ID, milestone, part,
and canonical slug. Preserve each registered title, slug, order, part,
milestone, and dossier identity exactly. Rebuild the register hashes rather
than changing those canonical values.

### P09-CON-003 — HIGH — Lane voice and terminology break at both handoffs

**Affected identities:** primarily `MLE-CH-07`, `MLE-CH-08`, `MLE-CH-14`, and
`MLE-CH-15`; the regimes affect Chapters 01–07, 08–14, and 15–21.

The `07 → 08` handoff is factually coherent but stylistically abrupt. Chapter
07 closes in reader prose while also issuing a blueprint activation command
(`chapter-07.md:204`). Chapter 08 opens with a private-package status paragraph
and a "Frozen machine projection" (`chapter-08.md:3-7`), then repeatedly uses
factory terms such as "with role doctrine." The `14 → 15` handoff has the
inverse break: Chapter 14 ends with a long production specification and phase
status (`chapter-14.md:178-184`), while Chapter 15 immediately becomes a much
shorter reader chapter with a title-only H1 and top-of-file visual placeholder
(`chapter-15.md:1-9`).

Within Lane B, one invariant is relabeled in every chapter—finding/trace,
basis/ledger, gate/coverage, interpretation/support, disposition/grounds,
release/provenance, migration/compatibility proof—while the surrounding
sentences retain the same template. Chapter-specific language is useful, but
the current mixture makes stable concepts appear to change and makes the book
sound like seven generated specifications.

**Proposed disposition:** retain chapter-specific nouns only where the
mechanism genuinely differs. Normalize stable terms (`decision`, `evidence`,
`state and dossier delta`, `authority route`, `limitation`, `next evidence`),
remove factory diction (`frozen machine projection`, `role doctrine`,
`production sequence/specification`), and give all three lanes the same
reader-first opening and closing rhythm. Recheck both boundary seams after the
metadata and leakage repairs; do not edit dossier identity to manufacture
stylistic consistency.

### P09-CON-004 — HIGH — Known long repeats are accidental authorial reuse

**Affected identities:** `MLE-CH-01` through `MLE-CH-07`.

Identifier-stripped reconstruction confirms the mandatory opening finding:

| Repeated frame | Exact byte-bound paragraphs | Classification |
|---|---|---|
| 75-word outgoing-state/reopen paragraph | `chapter-02.md:161`, `chapter-03.md:176`, `chapter-04.md:188`, `chapter-05.md:189` | Accidental repetition. All four normalized paragraphs are identical, including ordinary connective prose. |
| 75-word outgoing-state/reopen paragraph | `chapter-06.md:203`, `chapter-07.md:200` | Accidental repetition. Both normalized paragraphs are identical. |

Chapter 01 shares the same 68-word core at `chapter-01.md:143`, differing only
in the outgoing state. Additional long frames survive identifier removal:

- a 40-word durable-record frame across `chapter-03.md:174`,
  `chapter-04.md:186`, and `chapter-05.md:187`, with near-identical variants at
  `chapter-01.md:141`, `chapter-02.md:159`, `chapter-06.md:201`, and
  `chapter-07.md:198`;
- a 48-word limitations frame across `chapter-01.md:145`,
  `chapter-02.md:163`, `chapter-03.md:178`, `chapter-04.md:190`,
  `chapter-05.md:191`, `chapter-06.md:205`, and `chapter-07.md:202`;
- a 35-word phase/blueprint frame across the Lane A closing paragraphs listed
  in `P09-CON-001`.

The lifecycle rule is intentional reinforcement. The repeated explanatory
paragraph is not necessary to preserve it seven times verbatim. A canonical
state/reopen table already exists in Appendix B (`appendix-b.md:29-46`), so the
chapter should teach its local state delta and link to the shared rule.

**Proposed disposition:** retain one canonical lifecycle explanation in
Appendix B and give each chapter a short, original delta stating its actual
incoming/outgoing state and trigger. Rewrite the limitations and dossier
paragraphs around the local decision. After repair, the two exact 75-word
groups must be absent and no ordinary reader paragraph may share a normalized
twenty-word window across chapters.

### P09-CON-005 — HIGH — Broad machine-record exemptions hide Lane B templates

**Affected identities:** `MLE-CH-08` through `MLE-CH-14`, plus Appendix F as
the natural canonical source/currentness home.

Phase 08 reported zero ordinary authorial duplication only after prefix-shaped
exemptions. The no-exemption reconstruction shows that the exemptions include
ordinary sentences around the machine fields. Exact byte-bound classification
is:

| Record family | Exact paragraph anchors | Classification |
|---|---|---|
| Dossier contract rows | `chapter-08.md:168`, `chapter-09.md:168`, `chapter-10.md:174`, `chapter-11.md:168`, `chapter-12.md:174`, `chapter-13.md:182`, `chapter-14.md:176` | Intentional structured reinforcement. May be retained only as these exact records or reduced to local deltas; no surrounding paragraph inherits the exception. |
| First deterministic lab contract | `chapter-08.md:105`, `chapter-09.md:105`, `chapter-10.md:111`, `chapter-11.md:105`, `chapter-12.md:109`, `chapter-13.md:117`, `chapter-14.md:111` | Fields are intentional; the 34–37-word authorial frame is templated and should be rewritten or represented as a compact schema row. |
| Truth-class bridge | `chapter-08.md:87`, `chapter-09.md:87`, `chapter-10.md:93`, `chapter-11.md:87`, `chapter-12.md:91`, `chapter-13.md:99`, `chapter-14.md:93` | Policy is intentional; prose is near-identical authorial repetition, not a machine record. Keep one canonical policy in Appendix E and localize the actual transfer limit. |
| Repeated source ledger prose | Model Cards at `chapter-09.md:42`, `chapter-10.md:38`, `chapter-11.md:46`, `chapter-12.md:38`, `chapter-13.md:50`; AI RMF at `chapter-09.md:50`, `chapter-10.md:48`, `chapter-12.md:42`, `chapter-14.md:54`; GMLP at `chapter-10.md:40`, `chapter-11.md:48`, `chapter-12.md:48`; Kubernetes at `chapter-13.md:38`, `chapter-14.md:40` | Accidental reader-visible duplication. These are prose summaries of shared records, not machine rows. Appendix F is the canonical home; chapters need only the chapter-specific claim edge and limitation. |
| Port rows | e.g. `chapter-11.md:133-142` and `chapter-12.md:139-148` | Intentional row schema, but any exception must bind an exact row and exact byte hash. It cannot exempt a whole PORT-prefixed paragraph family. |

Two additional exact runs demonstrate why prefix exemptions are insufficient:
the durable dossier contract reaches 95 identical normalized words across
`chapter-10.md:173-174` and `chapter-11.md:167-168`, and the public-case/lab
transition reaches 53 identical words across `chapter-11.md:87`,
`chapter-12.md:91`, `chapter-13.md:99`, and `chapter-14.md:93` in multiple
pairs. These are visible to readers even when a validator calls the containing
paragraph structured.

The independent control comparisons are clean: there are zero identifier-
stripped twenty-word matches with the 21 same-chapter research packs, zero with
the 93 published other-role chapters, and zero internal paragraph-bounded
duplicates inside any one of the 36 reader files. The defect is same-book
reader repetition and its overbroad classification.

**Proposed disposition:** Task 07 should establish canonical homes in
Appendices A/B/E/F for dossier schema, state rules, truth policy, and source
records. Chapters should retain only local decisions, deltas, and transfer
limits in original prose. A remaining structured overlap must be registered by
exact file, line, byte slice, SHA-256, purpose, and reviewer disposition. No
regex prefix, heading, or identifier family may exempt adjacent authorial
sentences.

### P09-CON-006 — MEDIUM — Chapter 19 drops the explicit `BL-17` identity

**Affected seam:** `MLE-CH-18 → MLE-CH-19`.

Chapter 18 explicitly hands `BL-17` in `REQUALIFIED` or `ROLLED-BACK` state to
controls (`chapter-18.md:98-100`). Part 7 preserves that exact identity
(`part-07.md:5-9`). Chapter 19's opening instead says only "After
requalification or rollback" and starts naming `BL-18` (`chapter-19.md:9-19`);
`BL-17` is absent from its S01 input statement. The states align, but the
chapter-level predecessor identity is weaker than every other adjacent seam.

**Proposed disposition:** add an explicit immutable `BL-17` input to Chapter
19's Bench Setup and Bench Sheet. Verify the opening names both legal incoming
states and the exact predecessor record. No lifecycle state or milestone may
change.

## Adjacent seam ledger

All 20 adjacent seams were inspected. Nineteen bind the predecessor record and
legal state coherently; the one identity omission is `P09-CON-006`.

| Seam | Evidence | Result |
|---|---|---|
| 01→02 | `chapter-01.md:147`; `chapter-02.md:11` | Identity/state coherent |
| 02→03 | `chapter-02.md:165`; `chapter-03.md:11` | Identity/state coherent |
| 03→04 | `chapter-03.md:180`; `chapter-04.md:11` | Identity/state coherent |
| 04→05 | `chapter-04.md:192`; `chapter-05.md:11` | Identity/state coherent |
| 05→06 | `chapter-05.md:193`; `chapter-06.md:11` | Dual-input dependency coherent |
| 06→07 | `chapter-06.md:207`; `chapter-07.md:11` | Identity/state coherent |
| 07→08 | `chapter-07.md:204`; `chapter-08.md:3-16` | Semantic handoff coherent; voice/H1 break is `P09-CON-002/003` |
| 08→09 | `chapter-08.md:168-171`; `chapter-09.md:3-16` | Dual-input dependency coherent |
| 09→10 | `chapter-09.md:168-171`; `chapter-10.md:3-16` | Identity/state coherent |
| 10→11 | `chapter-10.md:174-177`; `chapter-11.md:3-16` | Identity/state coherent |
| 11→12 | `chapter-11.md:168-171`; `chapter-12.md:3-16` | Dual-input dependency coherent |
| 12→13 | `chapter-12.md:174-177`; `chapter-13.md:3-16` | Legal-state gate coherent |
| 13→14 | `chapter-13.md:182-185`; `chapter-14.md:3-16` | Identity/state coherent |
| 14→15 | `chapter-14.md:176-179`; `chapter-15.md:1-11` | Semantic handoff coherent; voice/H1 break is `P09-CON-002/003` |
| 15→16 | `chapter-15.md:102-106`; `chapter-16.md:9-13` | Identity/state coherent |
| 16→17 | `chapter-16.md:106-108`; `chapter-17.md:9-13` | Identity/state coherent |
| 17→18 | `chapter-17.md:104-106`; `chapter-18.md:9-13` | Identity/state coherent |
| 18→19 | `chapter-18.md:98-100`; `chapter-19.md:9-19` | State coherent; predecessor identity omitted (`P09-CON-006`) |
| 19→20 | `chapter-19.md:98-102`; `chapter-20.md:9-13` | Identity/state coherent |
| 20→21 | `chapter-20.md:102-106`; `chapter-21.md:9-13` | Identity/state coherent |

Part exits also carry the expected dossiers: Part 1 `BL-02`, Part 2 `BL-05`,
Part 3 `BL-08`, Part 4 `BL-11`, Part 5 `BL-14`, Part 6 `BL-17`, and Part 7
`BL-20`. The routed contents and appendices provide 55 Markdown links across
the 36 reader files; every target resolves. Chapters contain zero local
Markdown links, but their plain-language forward/back references are
unambiguous except for the `BL-17` omission above. Linkification is editorial,
not a blocking identity defect.

## Canonical-home and navigation disposition

- Chapter titles, registered slugs, part order, milestone order, and dossier
  order are internally consistent and must be preserved.
- Appendix A is the canonical dossier-schema home; Appendix B is the canonical
  state/disposition home; Appendix E is the canonical truth/transfer home;
  Appendix F is the canonical claim/source/currentness home; Appendix G is the
  canonical edition-neutral visual/accessibility home.
- Chapter-local repetition may reinforce a rule in concise original language,
  but it should point to the canonical home rather than replay its full source
  ledger, schema prose, or production instruction.
- The full repeated-prose scan must be rerun after Task 07 because removing
  factory text and normalizing metadata changes paragraph boundaries and can
  expose new twenty-word candidates.

## Required repair verification

1. `P09-OPEN-01`, `P09-OPEN-02`, and `P09-OPEN-03` remain open until a Task 07
   revision-ledger entry binds each changed file's exact before and after hash.
2. All 21 H1/title/metadata projections must use one convention while retaining
   21 unique registered titles, slugs, IDs, parts, milestones, and order.
3. All 20 adjacent seams and seven part exits must be recomputed from actual
   bytes; Chapter 19 must explicitly consume `BL-17`.
4. Reader bytes must contain no factory, phase-control, producer/reviewer,
   private-package, production-specification, generation/implementation-state,
   or next-work instruction. The seven Chapter 15–21 top visual records must
   retain their visual IDs and accessibility meaning in edition-neutral prose.
5. Identifier-stripped, paragraph-bounded twenty-word scans must return zero
   ordinary same-book, internal, same-pack, and published-other-role matches.
   Any intentional structured match must be an exact byte-bound registered row,
   never a prefix family.
6. All furniture links must still resolve, and canonical appendix homes must
   remain reachable from routed contents.

## Result and exact corpus binding

Result: **6 findings — 5 HIGH, 1 MEDIUM.** Reader continuity is structurally
recoverable: identity order, part order, 19 adjacent seams, canonical titles and
slugs, furniture routes, same-pack originality, published-other-role
originality, and within-file originality are sound. Content lock is blocked by
private production and visual implementation-status leakage across all three
lanes, incompatible reader conventions, lane voice fracture, two confirmed
exact long-repeat groups, broader same-book templating, and the Chapter 19
predecessor omission.

The audited 36-file reader corpus totals exactly **814,757 bytes**. Its
canonical framed digest—lexicographically sorted relative path, NUL, decimal
byte count, NUL, raw bytes, NUL—is
`269d53ed76ac29107d9d8a4f5dfcfdf175e37865bc9922f90e71f0317e5b3cb4`.

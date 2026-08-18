# Machine Learning Engineer Phase 07 — Chapter Blueprint Production Plan

> **Execution boundary:** This plan advances only the current Machine Learning
> Engineering book by Komal Nakrani. It creates production blueprints and their
> validation evidence. It does not authorize manuscript prose, companion code,
> image generation, assets, publication files, a course, Abhyaas, a second
> volume, catalog position 6, or another role.

## Objective

Convert the accepted seven-part, twenty-one-chapter architecture and the final
Phase 06 research system into exactly twenty-one executable chapter blueprints,
one whole-book furniture blueprint, a machine-readable blueprint register, an
inactive Phase 08 handoff, and hostile-QA-clean closure evidence.

Every blueprint must tell a Phase 08 producer exactly what the chapter teaches,
what dossier state it consumes and changes, which evidence supports each
decision, which failures must be injected, what authority remains external,
how all five ports preserve the decision job, how the reader demonstrates the
skill, and which visual treatment is semantically justified. A blueprint is a
production specification, not draft book prose.

## Frozen entry evidence

- Phase 06 closure baseline: `e4b9af4ee2d6abd31e8160224db7a99e66b6f02a`
- Phase 05 architecture Markdown:
  `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`
- Phase 05 architecture JSON:
  `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Phase 05 visual forecast:
  `64861260b24e57342b3d56d651f5b4d55850ad4ac749cea33f1802616c952b94`
- Phase 06 integration manifest:
  `c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4`
- Phase 06 handoff:
  `98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119`
- Phase 06 verification:
  `ca0f0fb8f4385c36a7ea59c75a5ddf25960f891ee561db0354054ce71f0cd33a`
- Phase 06 integration contract:
  `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Canonical research inventory: 46 sources, 63 claims, 12 cases, 21 packs,
  160 source-claim edges, and 34 case-source uses.

Any drift in these inputs stops blueprint production until root performs an
explicit reconciliation and the affected review is rerun.

## Locked publication and design contract

- Book: *Machine Learning Engineering: From Task Contract to Operating
  Evidence*.
- Author: Komal Nakrani.
- Format: one screen-first 7 by 10 inch book.
- Creative system: `Learning Systems Test Bench`.
- Typography: Archivo SemiCondensed for display, Source Sans 3 for reading,
  IBM Plex Mono for evidence identities and compact records.
- Canonical case spine: Benchline, advancing `BL-00` through `BL-20` without
  disconnected demonstrations or silent repair of missing upstream evidence.
- Five equal context ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`,
  `PORT-EDGE`, and `PORT-SHARED`.
- Precise labels, tables, metrics, traces, and quantitative truth remain
  semantic HTML/CSS. Phase 07 generates no image file.
- The only retained ImageGen candidates are `MLE-F05.1`, `MLE-F14.1`,
  `MLE-F16.1`, and `MLE-F18.1`, each later produced as a 2400 by 1600 PNG if
  manuscript review still justifies it. No additional raster candidate, SVG,
  WebP, mascot, fake UI, cover, or decorative quota may be introduced.

## Exact global invariants

The blueprint register and validator must prove all of these semantically, not
only by aggregate counts:

- 7 parts, 21 chapters, 21 contiguous milestones, 21 chapter blueprints;
- 63 claims, exactly three canonical claims in each frozen chapter;
- 46 sources and the exact 160 registered source-claim edges;
- 12 cases, 104 case-chapter edges, 198 claim-case edges, and 34 case-source
  uses, preserving the canonical forward and reverse mappings;
- 22 architecture claims, 17 boundaries, 10 scenarios, 12 domains, 8 learning
  clusters, and 5 ports;
- chapter architecture edge totals of 103 architecture-claim, 128 boundary,
  48 scenario, and 21 domain assignments;
- 105 chapter-port assertions and all 35 accepted part-exit checks;
- 17 dossier states, 19 legal transitions, 2 forbidden transitions, and 4
  reopen triggers exactly as frozen by Phase 05;
- exactly 168 planned manuscript sections, eight contiguous sections per
  chapter; 42 deterministic labs, two per chapter; 21 assessments, one per
  chapter; 25 visual records, one semantic visual per chapter plus only the
  four frozen ImageGen candidates; and 21 Phase 08 handoffs;
- exact chapter ID, order, title, slug, part, decision job, thesis, reader
  endpoint, prerequisite artifacts, incoming state, outgoing state, milestone,
  authority owner, and MLE ceiling;
- each canonical claim has exactly one primary teaching section. Other uses are
  explicit cross-references and cannot become a second primary treatment;
- all seven appendices and all opening, part, closing, author, source,
  accessibility, edition, and dossier furniture required by the accepted
  architecture receive an explicit whole-book production blueprint.

## Required machine-readable blueprint register

Create
`project-control/roles/machine-learning-engineer/books/machine-learning-engineering/blueprints/blueprint-register.json`
with schema `mle-phase-07-blueprint-register/v1`. Its exact top-level keys are
`schema`, `identity`, `counts`, `chapters`, `claimTeaching`, `sourceUses`,
`caseUses`, `dossier`, `ports`, `sections`, `labs`, `assessment`, `visuals`,
`handoffs`, and `furniture`. No other top-level key is accepted. The record
families are:

1. `identity`: architecture, integration, manifest, handoff, and verification
   hashes; author; book title; design system; format.
2. `chapters`: twenty-one exact chapter records in canonical order.
3. `claimTeaching`: sixty-three exact claim-to-primary-section assignments.
4. `sourceUses`: the exact 160 canonical source-claim edges, each placed in one
   or more named sections without creating a new evidence edge, with evidence
   role, limitation, currentness trigger, durability, and volatile treatment.
5. `caseUses`: twelve ordered canonical case records. Each records its exact
   chapter, claim, and source edges once, then places the case into named
   chapter sections without duplicating those canonical edges. It preserves
   truth label, reported facts, attributed outcomes, allowed inference,
   forbidden inference, limitations, and transfer rule.
6. `dossier`: milestone, incoming state, produced artifact, legal outgoing
   states, reopen triggers, upstream hashes, and next chapter dependency.
7. `ports`: five exact decision-invariant transfers for every chapter.
8. `sections`: ordered section IDs, purpose, teaching action, evidence mapping,
   artifact delta, estimated depth, and primary/cross-reference disposition.
9. `labs`: synthetic truth state, fixed input contract, failure mutations,
   expected evidence, prohibited effects, and PASS/HOLD/REJECT/REOPEN outcomes.
10. `assessment`: exercise output, rubric, answer intent, observable pass
    evidence, adjacent-authority limit, and retry route.
11. `visuals`: semantic treatment, insertion anchor, accessibility contract,
    exact essential labels, caption intent, numeric-truth disposition, and any
    frozen ImageGen candidate.
12. `handoffs`: exact Phase 08 instructions, continuity bridge, word-range
    rationale, recheck triggers, and prohibited manuscript claims.
13. `furniture`: exactly ten Bench Zero/front-matter items, seven part
    navigation/gates, seven appendices, and exactly five closing dossier items
    including About Komal and the exact closing
    statement. The front matter is cover; title and author; edition and
    copyright; reader prerequisites; MLE ownership boundary; lifecycle and
    evidence legend; how to read a Bench Sheet; routed contents; project and
    case orientation; and part map. The exact selectable closing line appears
    once: `Ship the model only when its evidence can travel with it.`

The exact nested keys are frozen as follows:

- `identity`: `architectureVersion`, `architectureMdSha256`,
  `architectureJsonSha256`, `visualForecastSha256`, `integrationContract`,
  `integrationManifestSha256`, `phase06HandoffSha256`,
  `phase06VerificationSha256`, `author`, `title`, `designSystem`, `format`.
- `counts`: `parts`, `chapters`, `claims`, `sources`, `sourceClaimEdges`,
  `cases`, `caseChapterEdges`, `claimCaseEdges`, `caseSourceUses`,
  `architectureClaims`, `boundaries`, `scenarios`, `domains`, `clusters`,
  `ports`, `chapterPortAssertions`, `partExitChecks`, `states`,
  `legalTransitions`, `forbiddenTransitions`, `reopenTriggers`, `appendices`,
  `frontMatterItems`, `closingItems`, `sections`, `labs`, `assessments`,
  `visuals`, `handoffs`, `imagegenCandidates`.
- `chapters`: `chapterId`, `order`, `title`, `slug`, `partId`, `decisionJob`,
  `thesis`, `readerEndpoint`, `prerequisiteArtifacts`, `incomingState`,
  `outgoingStates`, `milestoneId`, `authorityOwner`, `mleCeiling`,
  `primaryClaimIds`, `sectionIds`, `labIds`, `assessmentIds`, `visualIds`,
  `portIds`, `nextChapterId`.
- `claimTeaching`: `claimId`, `chapterId`, `primarySectionId`,
  `crossReferenceSectionIds`, `sourceIds`, `caseIds`, `limitation`,
  `durability`, `volatilityTreatment`, `recheckTriggers`.
- `sourceUses`: `sourceId`, `claimId`, `chapterId`, `sectionIds`,
  `evidenceRole`, `limitation`, `durability`, `volatility`, `recheckTrigger`.
- `caseUses`: `caseId`, `chapterIds`, `claimIds`, `sourceUses`, `placements`,
  `truthLabel`, `reportedFacts`, `attributedOutcomes`, `allowedInferences`,
  `forbiddenInferences`, `limitations`, `transferRules`. Each `placements`
  child uses exactly `chapterId`, `sectionIds`, and `usePurpose`; each
  `sourceUses` child uses exactly `sourceId` and `evidenceRole`.
- `dossier`: `chapterId`, `milestoneId`, `incomingState`, `inputArtifactIds`,
  `inputHashes`, `producedArtifactId`, `artifactVersion`,
  `legalOutgoingStates`, `forbiddenTransitions`, `reopenTriggers`,
  `nextChapterId`.
- `ports`: `chapterId`, `portId`, `invariantDecision`, `variableMechanism`,
  `requiredEvidence`, `externalAuthority`, `failureInjection`, `limitation`,
  `transferResult`.
- `sections`: `sectionId`, `chapterId`, `order`, `purpose`, `teachingAction`,
  `claimIds`, `sourceIds`, `caseIds`, `architectureClaimIds`, `boundaryIds`,
  `scenarioIds`, `domainIds`, `portIds`, `artifactDelta`, `plannedDepth`,
  `claimDisposition`.
- `labs`: `labId`, `chapterId`, `truthState`, `inputContract`,
  `fixedFixtureIds`, `redFailures`, `expectedEvidence`, `prohibitedEffects`,
  `legalDispositions`, `acceptanceChecks`.
- `assessment`: `assessmentId`, `chapterId`, `exerciseOutput`, `rubric`,
  `answerIntent`, `observablePassEvidence`, `authorityLimit`, `retryRoute`.
- `visuals`: `visualId`, `chapterId`, `kind`, `insertionAnchor`,
  `decisionHelped`, `essentialLabels`, `captionIntent`, `altIntent`,
  `longDescriptionIntent`, `numericTruthDisposition`, `candidateStatus`,
  `reservedPath`.
- `handoffs`: `chapterId`, `phase08Instructions`, `continuityBridge`,
  `wordRange`, `wordRangeRationale`, `recheckTriggers`, `prohibitedClaims`,
  `evidenceManifest`.
- `furniture`: exact top keys `benchZero`, `parts`, `appendices`, `closing`,
  `closingStatement`; each child record uses exactly `id`, `order`, `purpose`,
  `requiredContent`, `accessibility`, and `phase08Instructions`.

ID grammar is exact: chapters `MLE-CH-NN`; sections `MLE-CH-NN-SNN`; labs
`MLE-CH-NN-LAB-NN`; assessments `MLE-CH-NN-ASMT-NN`; milestones `BL-NN`;
claims `MLE-BCLM-NNN`; sources `MLE-BSRC-NNN`; cases `CASE-NN`; Bench Zero
`FURN-BZ-01..10`; parts `FURN-PART-01..07`; appendices `APP-A..APP-G`;
closing `FURN-CLOSE-01..05`; semantic visuals `MLE-VNN.1`; and raster
candidates exactly `MLE-F05.1`, `MLE-F14.1`, `MLE-F16.1`, `MLE-F18.1`.

All JSON objects are closed. Unless a field is explicitly nullable below,
strings are nonempty UTF-8 strings, hashes are 64 lowercase hexadecimal
characters, integer fields are positive base-10 integers unless an exact zero
value is required below, arrays are
duplicate-free, and IDs must resolve to the frozen register named by their
grammar. Arrays retain the canonical order of their owning register; set
equality is not a license to reorder them. The only nullable fields are
`chapters.nextChapterId` and `dossier.nextChapterId` for `MLE-CH-21`,
`visuals.reservedPath` for the twenty-one semantic-only records, and a review's
repair path/hash when no failure occurred. No other null is accepted.

Family cardinality and order are exact:

- `chapters`, `dossier`, `assessment`, and `handoffs` each contain 21 records
  ordered `MLE-CH-01..21`; `claimTeaching` contains 63 records ordered
  `MLE-BCLM-001..063`; `sourceUses` contains the 160 canonical
  `(sourceId, claimId)` tuples sorted by claim then source.
- `caseUses` contains exactly 12 records ordered `CASE-01..12`. The union of
  each record's `chapterIds`, `claimIds`, and canonical `sourceUses` must equal
  the Phase 06 case register exactly and total 104 unique case-chapter edges,
  198 unique claim-case edges, and 34 unique case-source uses. `placements`
  may repeat a case across sections, but its unique chapter set must equal
  `chapterIds` and it can never allocate a canonical edge.
- `ports` contains 105 records ordered by chapter then the fixed port order
  MANAGED, CLASSICAL, DEEP, EDGE, SHARED. `sections` contains exactly 168
  records: `MLE-CH-NN-S01..S08` for every chapter. Their fixed production jobs
  are decision/setup, procedure, evidence interpretation, worked trace,
  failure lab, five-port transfer, assessment/qualification, and durable
  handoff. `labs` contains exactly 42 records, `LAB-01` positive and `LAB-02`
  failure/reopen for each chapter. `assessment` contains exactly one `ASMT-01`
  record per chapter.
- `visuals` contains 25 records: semantic IDs `MLE-V01.1..MLE-V21.1` in chapter
  order plus only `MLE-F05.1`, `MLE-F14.1`, `MLE-F16.1`, and `MLE-F18.1`
  immediately after their chapter's semantic record. Only those four records
  use `kind: imagegen-candidate`, `candidateStatus: reserved`, and a non-null
  2400-by-1600 PNG path; all others use `kind: semantic-html-css`,
  `candidateStatus: not-applicable`, and `reservedPath: null`.
- `furniture.benchZero`, `parts`, `appendices`, and `closing` contain exactly
  10, 7, 7, and 5 ordered records using their frozen IDs. `closingStatement`
  is the exact string already stated and is not a sixth closing record.

Enum values are closed. Durability is `durable|volatile`; claim disposition is
`primary|cross-reference`; lab truth state is `synthetic-deterministic`;
legal disposition is `PASS|HOLD|REJECT|REOPEN`; transfer result is
`PASS|HOLD`; visual kind and candidate status are the exact pairs above.
Every string array named for IDs contains only IDs; prose arrays contain only
nonempty strings. Numeric counts in `counts` must equal both these frozen
cardinalities and a recomputation from the record families.

Each chapter Markdown file contains one fenced JSON record between exact
markers `PHASE07-CHAPTER-PROJECTION-START/END`. That record is the canonical,
stable projection of its chapter, claimTeaching, sourceUses, case placements,
dossier, ports, sections, labs, assessment, visuals, and handoff records.
`whole-book-furniture.md` contains the same kind of exact projection for
`furniture`. The validator parses and deep-compares these projections; a prose
paraphrase or count-only Markdown summary cannot satisfy symmetry.

Stable hashing uses UTF-8 over JSON with object keys recursively sorted and
array order preserved, with no insignificant whitespace. The register digest
is over the complete register. The package projection is the ordered array of
`{path, sha256}` for the canonical plan, register, 21 blueprints, furniture,
report, handoff, validator, tests, and every required accepted review/repair.
It intentionally excludes only `phase-07-verification.json`, its own digest,
and the verification-only `generatedAt` timestamp. Any text mutation requires
recomputing its file hash and all dependent package/review bindings.

Every nested record family uses these exact closed field sets. Canonical
evidence edges and section placements are
separate dimensions: a section may place an accepted edge, but cannot allocate
a new edge or erase its canonical reverse mapping. Unknown properties,
duplicate IDs, missing reverse edges, reordered records, or unresolved
references must fail validation.

## Exact Phase 07 output allowlist

The only new tracked Phase 07 paths are:

- `docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md`
- `project-control/roles/machine-learning-engineer/issues/phase-07-chapter-blueprints.md`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/blueprints/blueprint-register.json`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/blueprints/chapter-01.md` through `chapter-21.md`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/blueprints/whole-book-furniture.md`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/blueprints/verification-report.md`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/blueprints/phase-08-handoff.md`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.mjs`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.test.mjs`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/phase-07-verification.json`
- the exact review and optional repair paths enumerated below.

The only existing tracked paths that Phase 07 may modify are ROLE-STATE, root
issue, FACTORY-STATE, and the Phase 07 local issue after it exists. No other
tracked or untracked production path is permitted.

## Required chapter blueprint contract

Each `chapter-NN.md` must use the same ordered headings and fields:

1. **Frozen identity and production target** — exact ID/order/title/slug/part,
   decision job, thesis, reader endpoint, milestone, incoming/outgoing state,
   and word-range rationale.
2. **Observable objectives** — measurable reader actions, not reading goals.
3. **Prerequisites and five-sentence dossier bridge** — exact artifact inputs,
   prior failure/evidence state, current delta, and next chapter dependency.
4. **Owned decision and retained authority** — MLE responsibility, authority
   owner, MLE ceiling, boundaries, escalation, and explicit non-scope.
5. **Production sequence** — ordered section IDs, teaching purpose, exact
   claims/sources/cases/traces, dossier delta, and planned depth.
6. **Bench Setup, Bench Sheet, and Qualification Gate** — screen-first reader
   furniture with decision, evidence, state, owner, and next-action fields.
7. **Skill procedure and evidence interpretation** — ordered procedure,
   strongest supportable conclusion, counterexample, and limitation.
8. **Benchline artifact contract** — inputs, version/hash, mutations, output,
   evidence, owner, authority route, legal disposition, acceptance checks.
9. **Future deterministic companion contract** — offline, synthetic,
   provider-neutral fixtures and expected records only; no code is created.
10. **Failure injections and diagnostics** — named RED failures, discriminating
    evidence, repair boundary, and illegal promotion or self-approval checks.
11. **Five-port transfer table** — the same decision job and evidence shape in
    all five ports, with port mechanics and limitations kept replaceable.
12. **Cases and truth boundaries** — constructed/public identity, reported
    facts, attributed outcomes, allowed inference, forbidden inference,
    limitation, and transfer rule.
13. **Exercises, assessment, and answer intent** — artifact output, rubric,
    observable pass evidence, HOLD/REJECT/REOPEN path, and authority limit.
14. **Visual and accessibility contract** — semantic treatment, exact labels,
    caption/alt/long-description intent, numeric truth, and candidate status.
15. **Durable doctrine, volatile context, and re-verification** — exact source
    triggers, dated mechanisms, and text that cannot enter durable doctrine.
16. **Originality and adjacent-publication boundary** — explicit ND/PUB result
    and why the chapter does not recreate another Komal endpoint.
17. **Phase 08 handoff and evidence manifest** — exact writer instructions,
    prohibited claims, dossier continuity, claims, sources, cases, architecture
    IDs, boundaries, scenarios, domains, ports, and milestone.

No heading may be satisfied by a generic paragraph repeated across chapters.
Every record must use chapter-specific decision, evidence, failure, and
authority semantics.

The accepted six-item chapter-grammar projection is literal and complete in
every chapter: `Bench Setup`, `Bench Sheet`, `Qualification Gate`,
`state and dossier delta`, `authority route`, and `next evidence`.

## Parallel ownership and task DAG

Only root edits shared files, state, Git, GitHub, the register, furniture,
verification, validator, and handoffs. Lane producers write disjoint chapter
files. A producer never accepts its own lane.

### Task 01 — Plan, issue, state, schema, and validator bootstrap

**Owner:** root implementer plus independent reviewer.

1. Independently approve this plan while Phase 07 remains inactive.
2. Commit and push the approved plan alone.
3. Open the Phase 07 child with labels
   `phase:07-chapter-blueprints`, `role:machine-learning-engineer`, and
   `status:in-progress`.
4. Create the local issue and atomically project ROLE, root, local issue, and
   FACTORY state to Phase 07 active; keep Phase 08 inactive.
5. Freeze the output allowlist, register schema, chapter schema, review paths,
   exact counts/edges, and ownership lanes before a blueprint exists.
6. Write validator mutation tests first and preserve genuine RED evidence for
   the absent validator or absent blueprint package.
7. Commit and push an activation-implementation checkpoint containing the
   child/local issue/state projection and initial validator/tests, explicitly
   excluding the not-yet-written Task 01 review.
8. Obtain an independent bootstrap review that binds checkpoint 7 and ends
   exactly `SPEC COMPLIANCE PASS` and `QUALITY APPROVED`.
9. Commit and push the accepted Task 01 review and any directed repair, then
   fetch the live remote and require clean `main == origin/main` at that review
   commit before dispatching any chapter lane.

If bootstrap review fails, root may repair only the bounded Task 01
issue/state/validator/test artifacts named by the finding and must write
`reviews/phase-07/task-01-bootstrap-repair.md`. Root then commits and pushes a
replacement activation-implementation checkpoint that still excludes the
bootstrap review. The original reviewer must bind that existing replacement
commit, every repaired artifact hash, and the repair SHA-256; preserve the
failure history; and append the exact accepted verdict only after every finding
closes. Root finally commits/pushes the accepted review and requires remote
equality before any lane starts.
The bootstrap review must bind the exact live #79 and #84 issue bodies and
labels, all four activated authority-file hashes, the approved plan commit and
SHA, the complete Phase 07 output/absence inventory, and proof that no blueprint
file existed before bootstrap acceptance.

Issue number `#84` is an entry expectation, not an inference license. Root must
create the child, require that GitHub actually returns number 84, and stop for
explicit plan reconciliation if any concurrent issue consumes that number.
The ignored plan review and repair are pre-activation evidence: their final
hashes and verdict are recorded by Task 01 and in the canonical plan commit
message, while the tracked plan itself is the authoritative execution input.

Blueprint production is prohibited until Task 01 passes.

### Tasks 02–04 — Disjoint blueprint production lanes

Run concurrently after Task 01 acceptance.

#### Task 02 — Chapters 01–07

- Files: `chapter-01.md` through `chapter-07.md` only.
- Exact claims: 21.
- Canonical chapter source union: 21 sources; 49 source-claim edges.
- Canonical case trace: 83 claim-case and 34 case-chapter assignments.
- Architecture trace: 31 claim, 42 boundary, 9 scenario, 7 domain assignments.
- Port assertions: 35.
- Dossier: `BL-00` through `BL-06`, ending with controlled comparison plan.

#### Task 03 — Chapters 08–14

- Files: `chapter-08.md` through `chapter-14.md` only.
- Exact claims: 21.
- Canonical chapter source union: 21 sources; 52 source-claim edges.
- Canonical case trace: 92 claim-case and 31 case-chapter assignments.
- Architecture trace: 30 claim, 37 boundary, 14 scenario, 7 domain assignments.
- Port assertions: 35.
- Dossier: `BL-07` through `BL-13`, ending with consumer compatibility record.

#### Task 04 — Chapters 15–21

- Files: `chapter-15.md` through `chapter-21.md` only.
- Exact claims: 21.
- Canonical chapter source union: 17 sources; 59 source-claim edges.
- Canonical case trace: 23 claim-case and 39 case-chapter assignments.
- Architecture trace: 42 claim, 49 boundary, 25 scenario, 7 domain assignments.
- Port assertions: 35.
- Dossier: `BL-14` through `BL-20`, ending with hostile-reviewed dossier and
  reusable standard.

Every lane must emit a deterministic scratch manifest of its chapter hashes and
exact semantic counts at exactly one owned ignored path:

- Lane A: `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-a-blueprint-manifest.json`
- Lane B: `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-b-blueprint-manifest.json`
- Lane C: `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-c-blueprint-manifest.json`

The bootstrap allowlist admits only these three scratch files plus exactly
`phase-07-plan.md`, `phase-07-plan-review.md`, and
`phase-07-plan-repair.md` in that scratch directory. Each lane owns only
its seven blueprint files and its own scratch manifest. Lane files remain
isolated from the shared register.

### Tasks 05–07 — Independent lane reviews and bounded repair

Run three reviews in parallel after the corresponding producer finishes.

- Recompute all chapter-specific IDs, edges, states, prerequisites, owner
  ceilings, section assignments, case truth, five ports, accessibility, and
  handoff fields from canonical inputs.
- Reject count-only coverage, repeated generic text, missing decision jobs,
  disconnected dossier state, invented sources/outcomes, and unauthorized
  authority.
- A failed review retains the failure record. Root or the original producer
  applies a bounded repair; the same reviewer verifies it and the review binds
  the repair SHA before returning exact PASS/APPROVED.

### Task 08 — Root canonical integration and whole-book furniture

1. Build the shared blueprint register from the accepted lane files.
2. Create `whole-book-furniture.md` covering exactly ten Bench Zero/front-matter
   items, seven part navigation/qualification gates, seven appendices, and
   exactly five closing dossier items. About Komal is one of the five closing
   items, not an additional item. The exact closing statement appears once.
3. Verify the exact seams CH07→CH08 and CH14→CH15, every adjacent chapter
   dossier transition, all seven part exits, and terminal `REVIEWED` state.
4. Ensure no later blueprint silently repairs missing earlier evidence.
5. Produce `verification-report.md` and `phase-08-handoff.md`, with Phase 08
   explicitly inactive.
6. Complete the validator implementation against accepted register and files.

### Task 09 — Independent canonical-integration review

An independent reviewer who did not perform Task 08 must recompute the register
from the accepted lane files and prove that the Markdown, register, furniture,
report, and handoff are exact projections. It must audit both lane seams, every
chapter transition, all seven part exits, canonical-edge versus section-use
semantics, closed schema fields, and the full review/repair chain. A failure
requires `task-09-canonical-integration-repair.md` and same-reviewer reapproval.

### Task 10 — Hostile integration review

An independent reviewer must prove:

- the exact global invariants and every forward/reverse edge;
- all 21 chapter files satisfy the full record-specific schema;
- the register, Markdown blueprints, furniture, report, and handoff are exact
  semantic projections of one another;
- all state transitions and reopen rules are legal;
- all case truth, authority, currentness, and five-port boundaries remain
  intact;
- Phase 08/manuscript/code/assets/publication/course/Abhyaas/new-role output is
  absent;
- prior accepted Phase 05 and Phase 06 commands pass against isolated accepted
  temporal snapshots without modifying frozen validators;
- Phase 07 tests, marker scan, path inventory, addition-aware whitespace/EOF,
  `git diff --check`, and full repository check pass.

Any finding requires a paired repair and same-reviewer reapproval.

### Task 11 — Two-checkpoint closure

Only root performs this checkpoint sequence; no producer or reviewer owns
state, Git, or GitHub mutation.

Checkpoint 1:

1. Commit and push the accepted blueprint package and reviews while Phase 07 is
   still active and final verification is absent.
2. Relabel the child `status:done` and close it.

Checkpoint 2:

1. Project ROLE, root, local issue, and FACTORY to Phase 07 complete, active
   child none, Phase 08 sole next gate and inactive, catalog position 6 not
   started.
2. Generate final verification binding every final artifact and state hash.
3. Run final-content validation, commit, and push.
4. Fetch live remote state; require clean `main` equal to `origin/main`, root
   issue open/in-progress, child closed/done, and Phase 08 inactive.
5. Post final evidence to the closed child.

Apply the Phase 06 lifecycle lesson: Task 09 canonical-integration review cannot
require future closure-state hashes. Final verification binds all four final
state files. Task 10 binds validator, tests, Task 09 review, and final package
inputs at their current pre-close hashes.

## Frozen review and repair paths

The only Phase 07 review paths are:

- `reviews/phase-07/task-01-bootstrap.md`
- `reviews/phase-07/task-01-bootstrap-repair.md`
- `reviews/phase-07/task-05-lane-a.md`
- `reviews/phase-07/task-05-lane-a-repair.md`
- `reviews/phase-07/task-06-lane-b.md`
- `reviews/phase-07/task-06-lane-b-repair.md`
- `reviews/phase-07/task-07-lane-c.md`
- `reviews/phase-07/task-07-lane-c-repair.md`
- `reviews/phase-07/task-09-canonical-integration.md`
- `reviews/phase-07/task-09-canonical-integration-repair.md`
- `reviews/phase-07/task-10-hostile-integration.md`
- `reviews/phase-07/task-10-hostile-integration-repair.md`

Here `reviews/phase-07/` is relative to
`project-control/roles/machine-learning-engineer/`. A repair file is required
only after its paired review records a failure, but its path is reserved from
bootstrap onward. No cross-product or unenumerated review filename is allowed.

Each of the seven part furniture records has the exact five obligations:
`Bench Setup`, `part decision question`, `incoming evidence`, `part map`, and
`part-exit Qualification Gate`. A record cannot satisfy the contract by merely
naming the part or merging these obligations into generic navigation.

## Exact review binding sets and lifecycle semantics

Review bindings are directed and task-specific; no review may substitute a
generic current-tree hash sweep:

- Task 01 binds the canonical plan commit/SHA, final ignored plan-review and
  plan-repair hashes, the actual #79/#84 body and label snapshots, the four
  activated ROLE/root/local/FACTORY hashes, initial validator/test hashes, the
  exact scratch/production absence inventories, and the existing activation-
  implementation checkpoint from Task 01 step 7. It never binds the future
  commit that first contains the review itself.
  The issue/state hashes are immutable activation-snapshot evidence and are
  not compared to the later closure-state bytes.
- Task 05 binds only Lane A's seven chapter files, Lane A scratch manifest,
  and frozen Phase 05/06 inputs. Tasks 06 and 07 use the same rule for their
  own seven chapters and scratch manifest. A failed lane review additionally
  binds only its directed repair hash.
- Task 09 binds the register, all 21 chapter files, furniture, report, handoff,
  final validator/tests, all three accepted lane review chains, and the frozen
  inputs. It explicitly excludes the four future closure-state hashes,
  verification, and itself.
- Task 10 binds final validator/tests, Task 09 and its repair if present, the
  current register/21 chapters/furniture/report/handoff, all accepted earlier
  review chains, the frozen inputs, and the pre-close path/package digest. It
  excludes future closure-state bytes, final verification, and itself.
- Final verification binds every accepted review and applicable repair, every
  package artifact, and all four final state files. It excludes only itself.

Historical failure text remains in its original review. Acceptance is the
last exact verdict pair, and a repair is required iff that review contains an
earlier failing verdict. Tests must recompute file and dependent hashes after
every fixture mutation; at least one loaded, filesystem-realistic
`final-content` fixture must pass before any negative mutation is asserted.

## Validator TDD contract

The test suite must preserve a genuine RED run before the validator exists and
then mutation-test at least these families:

- unknown fields and missing required blueprint fields;
- exact IDs, order, titles, slugs, part membership, prerequisites, states,
  milestones, owners, and authority ceilings;
- wrong, missing, duplicated, reversed, or cross-chapter claim/source/case/
  architecture/boundary/scenario/domain/port edges;
- more or fewer than three claims in a chapter or duplicate primary teaching;
- illegal state transitions, automatic promotion, self-approval, and silent
  upstream repair;
- disconnected dossier bridge or broken CH07→08 / CH14→15 seam;
- missing five-port decision parity or one privileged port;
- collapsed public-case facts/inference or constructed-case truth drift;
- generic repeated section content and manuscript-like prose;
- missing Bench Setup/Sheet/Gate, assessment, failure, accessibility, visual,
  currentness, originality, or Phase 08 handoff contract;
- changed/fifth ImageGen candidate, generated media, SVG/WebP, or numeric truth
  placed in raster;
- incomplete whole-book furniture or changed closing statement;
- review without exact final verdict, stale hashes, or missing paired repair;
- lifecycle state contradictions and verification manifest omissions;
- additions under any bounded production, publication, course, Abhyaas,
  catalog-position-6, next-role, temporary, symlink, or hidden root.

Tests must construct stage-valid fixtures before mutations and assert the newly
introduced error, not an unrelated pre-existing failure.

The frozen RED evidence is the exact command
`node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.test.mjs`,
Node `v22.23.1`, exit 1, tests 1, pass 0, fail 1,
`ERR_MODULE_NOT_FOUND`, and missing `validate-phase-07.mjs`. The accepted GREEN
contract is the same command at exactly 220 tests, 220 pass, 0 fail, 0 skipped,
and 0 todo. Adding or removing a test changes the contract and requires plan
repair plus independent reapproval.

Final verification uses schema `mle-phase-07-verification/v1` with exact
top-level keys `schema`, `role`, `book`, `phase`, `generatedAt`, `counts`,
`artifacts`, `reviews`, `architectureTrace`, `researchTrace`, `dossierTrace`,
`visualContract`, `furniture`, `tdd`, `checks`, `pathBoundaries`,
`stateTransition`, `githubExpectations`, and `nextGate`. It binds every chapter,
register, furniture, report, handoff, validator, test, accepted review/repair,
and all four final state hashes, excluding only itself. `generatedAt` must parse
as a real ISO-8601 instant. Required checks are Phase 01, Phase 04, temporal
Phase 05, temporal Phase 06, Phase 07 tests/pre-close/final-content, marker,
whitespace/EOF, path, diff, and repository check. The verification repeats the
exact RED and 220/220 GREEN evidence above; a schema-only or count-only file
fails.

Its nested field sets, order, and types are also closed:

- `counts` is the exact blueprint-register `counts` object and must deep-equal
  a fresh recomputation. `artifacts` is the package-projection order plus the
  four final state files; each record uses exactly `path`, `sha256`, `kind`,
  and `required`, with `required: true`.
- `reviews` contains exactly six ordered task records for 01, 05, 06, 07, 09,
  and 10. Each uses exactly `task`, `path`, `sha256`, `repairPath`,
  `repairSha256`, `specVerdict`, `qualityVerdict`, and `boundArtifacts`.
  Repair fields are both null iff that review has no earlier failure; verdicts
  are exactly `SPEC COMPLIANCE PASS` and `QUALITY APPROVED`.
- `architectureTrace` uses exactly `claims`, `boundaries`, `scenarios`,
  `domains`, `clusters`, and `chapterEdges`; `researchTrace` uses exactly
  `sources`, `claims`, `cases`, `sourceClaimEdges`, `caseChapterEdges`,
  `claimCaseEdges`, `caseSourceUses`, and `reverseSymmetry`; every value is an
  integer except `reverseSymmetry`, which is `PASS`.
- `dossierTrace` uses exactly `milestones`, `states`, `legalTransitions`,
  `forbiddenTransitions`, `reopenTriggers`, `firstMilestone`,
  `terminalMilestone`, and `terminalState`. `visualContract` uses exactly
  `semanticVisuals`, `imagegenCandidates`, `generatedAssets`, `svgAssets`,
  `webpAssets`, `numericTruth`, and `candidateIds`. `furniture` uses exactly
  `benchZero`, `parts`, `partObligationsEach`, `appendices`, `closing`,
  `aboutKomalIncluded`, and `closingStatement`.
- `tdd` uses exactly `red` and `green`; `red` uses `command`, `nodeVersion`,
  `exitCode`, `tests`, `pass`, `fail`, `errorCode`, and `missingPath`; `green`
  uses `command`, `exitCode`, `tests`, `pass`, `fail`, `skipped`, and `todo`.
  Values must equal the frozen RED and 220/220 contracts.
- `checks` uses exactly `phase01Validator`, `phase01Tests`,
  `phase04Validator`, `phase04Tests`, `temporalPhase05Validator`,
  `temporalPhase05Tests`, `temporalPhase06Validator`,
  `temporalPhase06Tests`, `phase07Tests`, `phase07PreClose`,
  `phase07FinalContent`, `markerScan`, `whitespaceEof`, `pathAudit`,
  `diffCheck`, and `repositoryCheck`; each child uses exactly `status` and
  `evidence`, with `status: PASS` and nonempty evidence.
- `pathBoundaries` uses exactly `allowlist`, `scratchAllowlist`,
  `preCloseInventoryDigest`, `finalInventoryDigest`, `packageDigest`,
  `unexpectedPaths`, and `symlinks`; allowlists are exact ordered path arrays,
  digests are SHA-256, and both final arrays are empty.
- `stateTransition` uses exactly `role`, `root`, `localIssue`, and `factory`;
  each child uses exactly `path`, `sha256`, and `status`, with status
  `phase-07-complete`. `githubExpectations` uses exactly `rootIssue` and
  `childIssue`; each uses exactly `number`, `state`, and `labels`, with labels
  in sorted order. `nextGate` uses exactly `name`, `status`, and
  `catalogPosition6`, fixed to Phase 08, `inactive`, and `not-started`.

`visualContract.semanticVisuals` is integer 21;
`imagegenCandidates` is integer 4; `generatedAssets`, `svgAssets`, and
`webpAssets` are the explicitly permitted non-negative integer value 0;
`numericTruth` is exactly `semantic-html-css`; and `candidateIds` is the exact
four-ID array in frozen candidate order. No other numeric `visualContract`
field may be zero. The frozen TDD zero values remain mandatory: RED `pass: 0`;
GREEN `exitCode: 0`, `fail: 0`, `skipped: 0`, and `todo: 0`.

The top-level `role`, `book`, and `phase` strings are respectively
`machine-learning-engineer`, `machine-learning-engineering`, and `07`.
`generatedAt` is the sole volatile field and must round-trip as a real ISO-8601
instant. All arrays and objects follow the stable ordering and closed-value
rules defined for the register; unknown properties or reordered artifacts fail.

## Immediate QA and evidence commands

At each relevant gate run fresh evidence, not remembered results:

```bash
node project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
node project-control/roles/machine-learning-engineer/books/validate-phase-04.mjs
node --test project-control/roles/machine-learning-engineer/books/validate-phase-04.test.mjs
```

Run frozen Phase 05 and Phase 06 final commands inside isolated accepted
closure snapshots reconstructed from their committed tracked bytes and accepted
external inventory digests. Phase 05 uses full commit
`e1705e03389d174cc107af9850cb3cb839f92b1f` and external digest
`1b3d92809cbe2279dda0e5782083882936874f4f1a458c86423593548fad8132`;
its exact final result is 7 parts, 21 chapters, 21 milestones, trace
8/22/17/10, 12 domains, 5 ports, 40 contexts, 35 exits, 5 cases, 5 reviews,
and tests 190/190. Phase 06 uses full commit
`e4b9af4ee2d6abd31e8160224db7a99e66b6f02a`, external digest
`666935f13e6aee676a3142b8c80a395adb56204dbb08abed9b42e51564a59c9d`,
role digest `02c1ff0b7ee4c9174f507511f88f2acf3c8719e96d5f71aa735bc7c564a397ec`,
and ephemeral digest
`7cfe18f9837363c9785e49728d1c3b8e060b5295dbc4763ff9d10d56d51146a3`;
its exact final result is 46 sources, 63 claims, 12 cases, 21 packs, edges
160/34, and tests 190/190. Do not run those temporal anti-premature-output
validators against the later Phase 07 tree and do not weaken them.

Snapshot reconstruction is exact and bounded:

1. Take tracked bytes only from the named full commits. Enumerate ignored and
   untracked closure bytes with
   `git ls-files --others --ignored --exclude-standard`, then copy only entries
   under the validator-walked roots `project-control`, `docs`, `schemas`,
   `src`, `tools`, `scripts`, `tests`, `public`, `content`, `dist`, `output`,
   `downloads`, `build`, `.output`, `artifacts`, `abhyaas`, `certification`,
   and `question-bank`, plus ignored regular top-level files and the separately
   filtered ephemeral roots below. This includes accepted `.DS_Store`, Python
   cache, and tool-build paths when and only when the frozen digest includes
   them. Exclude `.git`, `node_modules`, and every Phase 07 path. Never use a
   later tracked file as a snapshot source. Create an ordinary empty
   `node_modules/` directory for the validator's top-level inventory; invoke
   Node directly, so no dependency symlink or package install is required.
2. For Phase 06, make a standalone local clone, set branch `main` to full
   commit `e4b9af4ee2d6abd31e8160224db7a99e66b6f02a`, and set its `origin` to a
   temporary local bare repository whose sole `refs/heads/main` is that same
   commit. This lets the unchanged final runtime prove clean `main`, HEAD, and
   `ls-remote origin main` without consulting the later live branch or changing
   history. Export `GH_REPO=alpeshznakrani/komalnakrani` for the unchanged
   command so `gh issue view` still verifies live #79/#83 instead of trying to
   infer a GitHub repository from the temporary local origin. Restore only the
   accepted ignored production roots above, then copy
   only ignored `.superpowers`, `tmp`, and `.astro` entries from the closure
   source after excluding the entire
   `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/` prefix.
   The scratch inventory must contain the exact three Phase 06 lane files.
   Before commands, require external digest `666935f1...`, role digest
   `02c1ff0...`, ephemeral digest `7cfe18f...`, and byte equality between every
   tracked validator bundle path and `git show <full-commit>:<path>`.
3. For Phase 05, create a new `mktemp -d`, restore the accepted ignored
   production roots above so closure-time built-site/output paths are present,
   and overlay `git archive` of the full Phase 05 commit. Ensure the Machine
   Learning Engineer role subtree comes only from that archive and omit the
   single downstream path
   `docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-06.md`,
   then overlay `git archive` of the full Phase 05 commit. Do not copy Phase 06
   or Phase 07 scratch. Before commands, require exactly 2,111 bounded
   inventory paths, external digest
   `1b3d92809cbe2279dda0e5782083882936874f4f1a458c86423593548fad8132`,
   and byte equality for every Phase 05 `BUNDLE_PATHS` entry against the full
   commit. This filter is exact; no other path may be removed to force a pass.
4. Run the unchanged commands inside those snapshots, record the snapshot
   input/path digests and output counts, then discard only the `mktemp`
   directories. A digest mismatch is a blocker, never a reason to edit a
   frozen validator or copy later inventory backward.

The temporal command strings are exact. Phase 05:

```bash
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.mjs --stage=final
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs
```

Phase 06:

```bash
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=final
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs
```

Before Phase 07 activation, require clean `main` equal to the live remote at
the approved plan commit, root #79 OPEN with exact labels
`role:machine-learning-engineer` and `status:in-progress`, #83 CLOSED with exact
labels `phase:06-research`, `role:machine-learning-engineer`, and `status:done`,
no Phase 07 child, all four authorities
stating Phase 07 sole-next/inactive, catalog position 6 not started, and zero
blueprint, register, furniture, Phase 08, manuscript, code, visual,
publication, course, Abhyaas, second-volume, or next-role output. Activation
may proceed only after this runtime gate and the independent plan review pass.

Run Phase 07 stage commands against the current tree:

```bash
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.mjs --stage=pre-hostile
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.test.mjs
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.mjs --stage=pre-close
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.mjs --stage=final-content
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.mjs --stage=final
```

Also run:

```bash
PDF_PYTHON=/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 npm run check
git diff --check
```

Use an addition-aware whitespace/EOF audit for untracked files and a literal-safe
unfinished-marker scan that cannot match its own command.

## Acceptance criteria

Phase 07 is complete only when:

- exactly 21 accepted chapter blueprints and one whole-book furniture blueprint
  exist;
- the strict register and Markdown projections pass every semantic invariant;
- all three lane reviews and the root integration/hostile reviews are accepted
  against final hashes;
- all 63 claims, 46 sources, 12 cases, traces, states, ports, part exits, and
  furniture obligations are exact;
- no manuscript, code, image, asset, publication, course, Abhyaas, second
  volume, catalog position 6, or next-role output exists;
- final tests and repository checks pass;
- accepted files and final state are committed and pushed;
- the Phase 07 child is closed `status:done`, root remains open, Phase 08 is the
  sole next gate and inactive, and local `main` equals live remote `main`.

## Hold boundary

Continue only this Machine Learning Engineering book after Phase 07. Do not
start a new book or role. When this book is finally published and hostile-QA
clean, stop and hold for the user.

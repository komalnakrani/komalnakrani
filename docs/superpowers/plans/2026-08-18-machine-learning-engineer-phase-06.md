# Machine Learning Engineer Phase 06 — Source and Case Research Plan

## Goal

Create the evidence system for *Machine Learning Engineering: From Task
Contract to Operating Evidence* by Komal Nakrani. Phase 06 must produce new
technical book-source, book-claim, case, and chapter research-pack identities
that trace exactly to the accepted Phase 05 architecture. It must not begin
blueprints, manuscript prose, companion implementation, visual generation,
publication files, PDF work, a course, Abhyaas, a second volume, or another
role.

## Frozen inputs

- Entry baseline is commit `e1705e0`. Before activation, require a clean
  worktree, local `main == origin/main == e1705e0`, root #79 open, child #82
  closed with `status:done`, and this plan independently approved, committed,
  and pushed. The Phase 06 child must use exact label `phase:06-research` plus
  `role:machine-learning-engineer` and `status:in-progress`. A durable bootstrap
  review must accept the activated issue/state/schema before discovery begins.
- Phase 05 architecture Markdown and JSON at the identities recorded in
  `phase-05-verification.md`.
- Exactly 7 parts, 21 chapters, 21 Benchline milestones, 8 learning clusters,
  22 accepted architecture claims, 17 boundaries, 10 scenarios, 12 domains,
  5 ports, 40 context tests, 35 part-exit checks, and 5 constructed cases.
- Source rules: prefer current primary, official, standards, or original
  research; always record chapter use, access date, limitation, volatility,
  and case truth role.
- Existing Komal books are comparison boundaries, never technical evidence.
  Employer postings are role-market evidence, never technical authority.

## Required outputs

Under
`project-control/roles/machine-learning-engineer/books/machine-learning-engineering/`:

1. `sources/source-register.json`
2. `sources/claim-register.json`
3. `sources/claim-to-chapter.csv`
4. `case-studies/case-study-register.json`
5. `sources/research-packs/chapter-01.md` through `chapter-21.md`
6. `sources/verification-report.md`
7. `sources/phase-07-handoff.md`
8. `validate-phase-06.mjs`
9. `validate-phase-06.test.mjs`
10. `phase-06-verification.json`
11. `sources/integration-manifest.json`

Control outputs:

- `issues/phase-06-source-research.md`
- independent and hostile reviews under `reviews/phase-06/`
- coordinated final updates to `ROLE-STATE.md`, `issues/root.md`, and
  `project-control/role-factory/FACTORY-STATE.md`

## Evidence scale and identity contract

- Exactly 21 chapter research packs, one per frozen chapter.
- Exactly 63 new technical book claims, three per chapter, with IDs
  `MLE-BCLM-001` through `MLE-BCLM-063`.
- Claim allocation is formulaic and immutable: Chapter `n` owns
  `MLE-BCLM-(3n-2)` through `MLE-BCLM-(3n)`, zero-padded to three digits.
  Chapter 01 therefore owns `001`–`003`; Chapter 21 owns `061`–`063`.
- Preserve all 22 `MLE-CLM-*` Phase 05 claims as upstream architecture anchors;
  do not reuse them as technical book-claim IDs.
- Retain only evidence-bearing sources. After integration, sort accepted
  sources deterministically by evidence class, canonical organization, title,
  version/date, and canonical URL, then allocate contiguous
  `MLE-BSRC-001` through `MLE-BSRC-N`. Record final `N`; a working expectation
  of 56–66 is guidance only and never an acceptance quota.
- Exactly 12 bounded case records: the frozen constructed `CASE-01`–`CASE-05`
  plus public cases `CASE-06`–`CASE-12`, each a source-backed method, incident,
  standard, or documented production pattern. Public cases must separate
  reported fact, attributed outcome, allowed inference, limitation, and
  transfer rule; they do not become capstone through-lines.
- `CASE-01`–`CASE-05` must deep-equal every accepted Phase 05 field and mapping:
  name, `portId`, exact truth label, `realConstructedRule`, `chapterUse`,
  decision job, authority owner, limitation, `sourceResearchNeed`, and
  replaceability test. Phase 06 may add source/claim edges but may not alter
  those accepted values.
- Every chapter pack must cover its exact `sourceResearchNeeds`,
  `phase06Handoff`, accepted claim IDs, boundaries, scenarios, domains, ports,
  case uses, milestone, authority ceiling, durable doctrine, volatile examples,
  and Phase 07 handoff.

## Canonical schemas

The JSON schemas are `mle-phase-06-sources/v1`,
`mle-phase-06-claims/v1`, `mle-phase-06-cases/v1`, and
`mle-phase-06-verification/v1`. All reject unknown properties. Arrays use
canonical ID order and contain no duplicates. IDs are contiguous and stable;
dates use ISO 8601; null is allowed only where the schema explicitly permits
an unavailable publication date.

Exact top-level shapes are:

- Source register: `schema`, `role`, `book`, `architectureVersion`,
  `verifiedOn`, `sourceCount`, `sources`.
- Claim register: `schema`, `role`, `book`, `architectureVersion`,
  `claimCount`, `claims`.
- Case register: `schema`, `role`, `book`, `architectureVersion`, `caseCount`,
  `cases`.
- Integration manifest: `schema`, `architecture`, `scratchInputs`,
  `registers`, `sourceIds`, `claimAllocation`, `caseIds`,
  `chapterAssignments`, `integrationContractHash`, `packContract`,
  `generatedAt`.

Every top-level count equals its array length. `role` is exactly
`machine-learning-engineer`; `book` is exactly `machine-learning-engineering`;
`architectureVersion` is exactly `1.0.0`. The integration schema is
`mle-phase-06-integration/v1`. Its `architecture` object contains exact
Markdown/JSON paths and hashes; `scratchInputs` contains exactly Lane A/B/C
path/hash records; `registers` contains source/claim/case/CSV path/hash records;
`sourceIds` and `caseIds` are ordered exact arrays; `claimAllocation` maps all
21 chapter IDs to their formulaic three-ID arrays; `chapterAssignments` maps
each chapter to ordered source/claim/case IDs. `integrationContractHash` is the
SHA-256 of the canonical JSON projection containing exactly `schema`,
`architecture`, `scratchInputs`, `registers`, `sourceIds`, `claimAllocation`,
`caseIds`, and `chapterAssignments`, with recursively sorted object keys and
preserved canonical array order. It excludes `integrationContractHash`,
`packContract`, and `generatedAt`. `packContract` records 21 exact pack paths
and requires each pack/review to bind that projection hash. `generatedAt` is an
ISO 8601 timestamp. The manifest never contains its own file hash.

### Source record

Each source record has exactly `sourceId`, `title`, `authorOrg`, `sourceClass`,
`sourceType`, `publishedAt`, `version`, `canonicalUrl`,
`finalUrl`, `authorityStatus`, `stability`, `volatility`, `verifiedAt`,
`accessMethod`, `retrievalDisposition`, `httpStatus`, `versionFinality`,
`accessLimitation`, `replacementDecision`, `recheckTrigger`, `chapterIds`,
`claimIds`, `caseUses`, `supports`, and `limitations`. `publishedAt` and
`version` alone may be null. `httpStatus` is an integer or null only for a
documented browser-only verification. `accessLimitation` is a string and uses
`none` when there is no limitation. `caseUses` is an ordered array of exact
objects `{caseId, evidenceRole}`.
Standards and living documentation must record version state. Vendor material
may support current mechanisms, never universal outcomes or durable doctrine
by itself.

Allowed `sourceClass` values are `technical-primary`, `original-research`,
`technical-official`, `standard-or-regulator`,
`first-party-engineering-report`, and `role-market-evidence`.
`authorityStatus` is one of `primary`, `official`, `standard`, `regulator`,
`first-party`, or `role-market`. `stability` is `durable`, `versioned`,
`living`, or `volatile`; `volatility` is `low`, `medium`, or `high`;
`accessMethod` is `head`, `get`, `ranged-get`, or `browser`;
`retrievalDisposition` is `accessible`, `redirected`, `access-restricted`,
`browser-verified`, or `replaced`; `versionFinality` is `final`, `draft`,
`living`, `withdrawn`, or `not-versioned`; and `replacementDecision` is
`retained`, `replaced`, or `rejected`. `evidenceRole` is `doctrine`,
`mechanism`, `reported-fact`, `attributed-outcome`, `limitation`, or
`transfer-context`. Role-market evidence may support only an explicitly
bounded role-market claim class and can never independently support technical
doctrine. Browser-backed verification is acceptable for an official source
that blocks command-line retrieval only when the record preserves the failed
method/disposition, browser method, final URL, visible version/finality, access
limitation, and replacement decision. Triggered sources are rechecked at
blueprint freeze, manuscript freeze, and final publication freeze.

### Claim record

Each claim record has exactly `claimId`, `chapterId`, `chapterOrder`,
`claimClass`, `statement`, `sourceIds`, `architectureClaimIds`, `boundaryIds`,
`scenarioIds`, `domainIds`, `portIds`, `caseIds`, `confidence`, `limitations`,
`durability`, `volatilityTreatment`, and `phase07Instruction`. Every source edge is
bidirectional and every retained source is used.

Allowed `claimClass` values are `technical-doctrine`, `technical-method`,
`technical-mechanism`, `bounded-case-inference`, and `role-market-boundary`.
Every technical class requires at least one non-role-market primary,
official, standards, regulator, original-research, or first-party engineering
source. `role-market-boundary` claims remain bounded to current market signals.
`confidence` is `high` or `medium`; `durability` is `durable`, `contextual`, or
`volatile`. Low-confidence claims are rejected rather than handed forward.

### Case record

Each case record has exactly `caseId`, `name`, `portId`, `truthLabel`, `kind`,
`realConstructedRule`, `problem`, `context`, `constraints`, `approach`,
`tradeoffs`, `failuresOrRisks`, `reportedFacts`, `attributedOutcomes`,
`allowedInferences`, `lessons`, `chapterIds`, `claimIds`, `sourceUses`,
`decisionJob`, `authorityOwner`, `limitations`, `sourceResearchNeed`,
`replaceabilityTest`, `transferRules`, and `status`. `sourceUses` is an ordered
array of exact `{sourceId, evidenceRole}` objects using the same evidence-role
enum as source `caseUses`. Every pair is bidirectional.

`truthLabel` is `FICTIONAL SYNTHETIC CAPSTONE`, `CONSTRUCTED SATELLITE`, or
`PUBLIC REPORTED CASE`. `kind` is `constructed-capstone`,
`constructed-satellite`, `public-method`, `public-incident`, `public-standard`,
or `public-production-pattern`. `status` is `constructed-frozen` or `verified`.
Constructed records use empty reported/outcome/inference arrays and may not
claim real outcomes. Public records require nonempty distinct `reportedFacts`,
`attributedOutcomes` where an outcome is reported, `allowedInferences`,
`transferRules`, and `limitations`; they may not import prose or visuals.

### Claim-to-chapter CSV

`claim-to-chapter.csv` has schema version
`mle-phase-06-claim-chapter/v1` in its verification record and exactly 63 data
rows, one row per claim. Columns, in order, are `claim_id`, `chapter_id`,
`chapter_order`, `claim_class`, `source_ids`, `architecture_claim_ids`,
`boundary_ids`, `scenario_ids`, `domain_ids`, `port_ids`, `case_ids`,
`durability`, and `confidence`. Semicolon-separated ID cells are sorted,
duplicate-free, and resolve exactly to the JSON registers.

### Chapter research pack

Each pack must state the chapter decision job; exact three book claims;
source-to-claim table; architecture anchors; case use and truth labels;
durable versus volatile treatment; conflicting/limited evidence; current
examples with as-of dates; authority boundary; five-port transfer notes;
misuse prohibitions; planned evidence artifacts; and exact Phase 07 handoff.
It must end with `Evidence-gap disposition: release-blocking` or
`Evidence-gap disposition: none release-blocking`, followed by a rationale and
the exact affected claim/source IDs. A release-blocking gap prevents Phase 07;
`none release-blocking` is invalid if any claim lacks accepted support.

## Execution DAG

### Gate 0 — activate the phase

1. Verify the pinned entry gate and reviewed plan commit on remote `main`.
2. Open one Phase 06 child issue under #79 with exact labels
   `role:machine-learning-engineer`, `phase:06-research`, and
   `status:in-progress`.
3. Update the three local state authorities and factory state to Phase 06
   active; keep Phase 07 inactive and catalog position 6 not started.
4. Freeze these schemas, IDs, chapter partitions, and ownership boundaries.
5. Write and independently approve
   `reviews/phase-06/task-01-bootstrap.md` against exact issue/state/schema
   hashes before discovery.

### Gate 1 — parallel source discovery

Run three disjoint discovery lanes:

- Lane A: Chapters 01–07.
- Lane B: Chapters 08–14.
- Lane C: Chapters 15–21.

Each lane writes only one ignored scratch file until root integration freezes
canonical IDs:

- Lane A: `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-06/lane-a-discovery.json`
- Lane B: `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-06/lane-b-discovery.json`
- Lane C: `.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-06/lane-c-discovery.json`

Each scratch record must contain lane, chapter IDs, source candidates with the
full currentness fields, proposed claim statements/classes, proposed public
cases, architecture trace, conflicts, limitations, and rejected candidates.
Lanes may not write canonical registers, IDs, cases, CSV, validator,
verification, state, GitHub, or each other's files. Search technical questions
using primary sources only:
standards bodies, original papers, official regulator or public-sector
guidance, official project documentation, and first-party engineering reports.
Every URL must be live-checked and its support/limitation stated.

### Gate 2 — canonical integration

1. Deduplicate sources by canonical URL, version, and evidence role.
2. Reject weak, circular, inaccessible-without-replacement, or quota-padding
   sources.
3. Freeze `MLE-BSRC-*`, `MLE-BCLM-*`, and public case identities.
4. Build exact source/claim/chapter/case reverse edges.
5. Write `sources/integration-manifest.json` containing schemas,
   source/claim/case IDs, exact chapter assignments, scratch input hashes, and
   the separately computed `integrationContractHash` projection digest.
6. Return integration corrections to the owning pack lane; do not let lanes
   modify canonical registers concurrently.

### Gate 3 — pack production

After IDs freeze, the same three lanes consume the frozen
`integrationContractHash`
and write only their seven canonical pack files. Root owns registers, cases,
CSV, integration manifest, validator, verification, state, and issue files.
Any integration-manifest change invalidates affected packs and their reviews.
Each pack must pass structural and semantic checks before merge.

### Gate 4 — validation and review

1. Build `validate-phase-06.mjs` test-first. Preserve the genuine missing-
   validator RED, then add semantic mutation tests.
2. Require exact 21 packs, 63 claims, 12 cases, all architecture traces, all
   source needs, bidirectional edges, source use, currentness, limitations,
   authority ceilings, case truth, and Phase 07 handoffs.
3. Mutation-test missing/duplicate/dangling IDs, claim count drift, unused
   source, one-sided edge, altered constructed truth, overstated public outcome,
   missing volatility/recheck data, wrong chapter/case mapping, missing
   architecture anchors, and unexpected paths.
4. Independently review each lane, then run one hostile integration review
   against final hashes and repair every finding.

Review paths are exactly:

- `reviews/phase-06/task-01-bootstrap.md`
- `reviews/phase-06/task-02-lane-a.md`
- `reviews/phase-06/task-03-lane-b.md`
- `reviews/phase-06/task-04-lane-c.md`
- `reviews/phase-06/task-05-canonical-integration.md`
- `reviews/phase-06/task-06-hostile-integration.md`

Each review records reviewed paths and SHA-256 identities, scope, findings,
repair dispositions, and exact final lines `SPEC COMPLIANCE PASS` and
`QUALITY APPROVED`. A failed review requires an exact paired `*-repair.md`
record and reapproval by the same reviewer against replacement hashes.

The validator has `pre-hostile`, `pre-close`, `final-content`, and `final`
stages. It freezes an
exact Phase 06 output allowlist and a bounded external production-root inventory
digest. Mutation tests operate only on isolated temporary copies, verify
canonical bytes remain unchanged, and reject any manuscript, blueprint,
companion, media, publication, PDF, course, Abhyaas, certification,
question-bank, second-volume, or next-role path.

Stage semantics are exact:

- `pre-hostile` requires the active Phase 06 issue/state, schemas, integration
  manifest, registers, CSV, 21 packs, reports/handoff, bootstrap/lane/integration
  reviews, and zero prohibited output. Existing hostile-review or verification
  files are ignored at this stage so failed review history can remain durable
  during repair and re-review.
- `pre-close` additionally requires the final hostile review and every paired
  repair/reapproval, while the child remains open `status:in-progress`; final
  verification must still be absent.
- `final-content` requires the child closed `status:done`, final verification
  present, all four state authorities consistently projected, #79 open, Phase
  07 sole-next inactive, and catalog position 6 not started. It deliberately
  does not claim a clean worktree or local/remote equality before commit.
- `final` runs only after the final-content commit is pushed. It revalidates all
  content, requires a clean worktree and local/remote `main` equality, and
  live-checks #79 open plus the child closed `status:done`. Its exact output,
  commit/hash equality, and live issue JSON are recorded in a closing GitHub
  issue comment; no pre-push manifest claims post-push facts.

Mutation coverage explicitly rejects unknown schema properties and every enum
violation; broken claim formula allocation; noncontiguous or nondeterministic
source IDs; drift in every frozen `CASE-01`–`CASE-05` projection; any of the 63
CSV rows or JSON/CSV symmetry; role-market support leaking into technical
doctrine; incomplete browser fallback/currentness fields; a stale integration
manifest or pack-consumed hash; missing or stale pack/review/repair hashes;
verification family omissions; and drift in each of ROLE-STATE, root issue,
local Phase 06 issue, and FACTORY-STATE.

### Gate 5 — closure

Run Phase 01, 04, 05, and 06 validators/tests; source currentness; marker,
addition-aware whitespace/EOF, path, diff, and full repository checks.

Use two truthful checkpoints:

1. Commit and push the accepted pre-close package: registers, CSV, cases,
   integration manifest, 21 packs, reports, handoff, validator/tests, and final
   reviews. Before this checkpoint, run the same addition-aware whitespace/EOF
   audit against pinned baseline `e1705e0` so every Phase 06 file is covered,
   including files about to become committed. Then replace the live child label
   with `status:done` and close it.
2. Write the final state and verification record, run `final-content`, then
   commit and push that final-content package. Only after the push, run `final`
   to verify clean local/remote `main`, #79 open, child closed `status:done`,
   Phase 07 sole-next but inactive, and catalog position 6 not started. Record
   that post-push evidence in a closing child-issue comment rather than a
   pre-push file assertion.

Final state must agree across `ROLE-STATE.md`, `issues/root.md`, the local Phase
06 issue, and `FACTORY-STATE.md`.

`phase-06-verification.json` must use schema
`mle-phase-06-verification/v1` and record exact fixed counts plus actual source
count `N`; all final artifact hashes except its own; six review hashes and any
paired repairs; frozen-case deep-equality identities; complete architecture
trace; URL/currentness dispositions; the genuine RED command, exit, Node
version, TAP counts, and missing-validator error; final GREEN counts; every
executable check; prohibited-output/path boundaries; final four-authority state
  transition and expected GitHub root/child states and labels. It does not
  claim clean/local-remote/live results before push. Omitting its own hash
  prevents a cycle; the post-push issue comment carries the final live audit.

## Acceptance gates

- 21/21 packs; 63/63 new book claims; 12/12 cases.
- Every exact Chapter 01–21 research need and Phase 06 handoff covered.
- All 22 architecture claims, 17 boundaries, 10 scenarios, 12 domains, five
  ports, five frozen constructed cases, and 21 milestones trace without drift.
- Every claim has sufficient primary/authoritative evidence and every retained
  source is used through exact bidirectional edges.
- All URLs are live-checked with access date, version/finality, limitations,
  volatility, and recheck triggers.
- No unsupported universal reproducibility, model quality, safety, fairness,
  compliance, production, business, or physical-world outcome claim.
- No manuscript, blueprint, companion code/fixture, generated image, SVG/WebP,
  publication/site file, PDF, course, Abhyaas, certification, question bank,
  second volume, or next role.
- Independent task reviews and hostile integration review end with exact
  `SPEC COMPLIANCE PASS` and `QUALITY APPROVED` against final hashes.
- Phase 07 stays inactive until the Phase 06 commit is pushed and the child
  issue is closed `status:done`.

## Executable verification

Pre-close package, before its commit:

```bash
node project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
node project-control/roles/machine-learning-engineer/books/validate-phase-04.mjs
node --test project-control/roles/machine-learning-engineer/books/validate-phase-04.test.mjs
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.mjs --stage=final
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=pre-close
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs
if rg -n 'SOURCE G''AP|T''BD|TO''DO|FIX''ME' project-control/roles/machine-learning-engineer; then exit 1; else echo 'unfinished-marker scan PASS'; fi
set -o pipefail
{ git diff --name-only -z e1705e0 --; git ls-files --others --exclude-standard -z; } | while IFS= read -r -d '' file; do
  test -f "$file" || continue
  if rg -n '[[:blank:]]+$' "$file"; then exit 1; fi
  test "$(tail -c 1 "$file" | od -An -tx1 | tr -d ' \n')" = "0a"
done
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=pre-close --check=path-inventory
git diff --check
PDF_PYTHON=/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 npm run check
```

After closing the child and writing the four synchronized state records plus
verification, but before the final-content commit:

```bash
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=final-content
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs
{ git diff --name-only -z e1705e0 --; git ls-files --others --exclude-standard -z; } | while IFS= read -r -d '' file; do
  test -f "$file" || continue
  if rg -n '[[:blank:]]+$' "$file"; then exit 1; fi
  test "$(tail -c 1 "$file" | od -An -tx1 | tr -d ' \n')" = "0a"
done
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=final-content --check=path-inventory
git diff --check
PDF_PYTHON=/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 npm run check
```

Commit and push the accepted final-content package. Then run only the post-push
gate:

```bash
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=final
```

The `--stage=pre-close` and `--stage=final-content` commands run before their
respective commits; the `--stage=final` command runs after the final push.
Addition-aware whitespace/EOF and frozen path-inventory checks run separately
because `git diff --check` alone does not inspect untracked files. The baseline
comparison keeps checkpoint-one files in the audit even after they are
committed. The final verification records pre-push commands/results, and the
closing issue comment records post-push final output, commit equality, and live
issue JSON.

## Stop boundary

This plan advances only the current Machine Learning Engineering book. After
the book reaches final publication and hostile QA, stop. Do not start the next
book or catalog role without a new user instruction.

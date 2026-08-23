# Machine Learning Engineering Phase 09 — Companion, Furniture, and Visual Readiness Audit

- Task: `TASK-05`
- Producer: `/root/mle_p9_systems`
- Audit date: 2026-08-23
- Input authority: accepted Phase 09 Task 01 fail/repair/reacceptance chain at checkpoint `31ae7f8ec9bcb43b4c9459bd9d77da53be376adb`
- Canonical-entry authority: Phase 08 final verification SHA-256 `67b9ba41bdef4c048b1f74777e18ab18455ef1eedbdc491ce2a9f70cc6eb8493`
- Scope: actual 41-file companion; 21 chapters; 15 furniture files; lifecycle, ports, fixtures, contracts, tests, dossier lineage, labs, manuscript/blueprint registers, all 25 textual visual records, and the four reserved raster candidates
- Mutation boundary: audit only; no canonical manuscript, furniture, companion, validator, test, register, state, issue, review, image, PDF, or publication byte was changed

## Verdict

`SYSTEMS READINESS CHANGES REQUIRED`.

The mechanical base is strong but not content-locked. The companion inventory is
exactly 41 files and its current suite passes `33/33`. Independent execution
confirmed five-port enumerable equality, effect denial, ordered canonical
records, both BL-17 branches, immutable predecessor checks, outside-repository
materialization, process-local ownership, and byte-identical dossier records
across two complete fresh runs. Furniture is structurally complete at
`10/7/7/5`; all local Markdown routes resolve; Appendix E/F enumerate the exact
12 cases, 63 claims, and 46 sources. The visual inventory is exactly 25 textual
records, exactly four candidates remain ungenerated, and no MLE raster or PDF
asset exists.

Six defects still block a textual content lock:

1. explicit reopen accepts the prohibited forward move
   `UNORIENTED -> CONTRACTED`;
2. the declared 19-transition lifecycle and the 19 unique persisted transition
   shapes are different sets;
3. reader-facing Appendix A describes fields that the executable JSON schema
   does not contain and omits fields that it requires;
4. all 42 chapter labs and the five port sections claim domain-specific
   execution that the companion's generic record generator does not perform;
5. correct process-local ownership and random-marker behavior lacks committed
   cross-process/determinism regression coverage; and
6. the four raster candidates have two incompatible path and production-contract
   families. This retains mandatory opening finding `P09-OPEN-04`.

No finding authorizes a repair before the independently accepted Task 06 finding
freeze. Proposed boundaries below are for Task 07 only.

## Bound authorities and method

| Authority | SHA-256 |
|---|---|
| Phase 09 whole-book QA design | `3b256a6dac36b31e39e9a402f48a8641195b177fcf083e4ee65cc53ce2fda3b5` |
| Phase 09 implementation plan | `5d46b79f03b4eee04a3d091f0e1f46956cefddd31eb17d4e30f62982008c168e` |
| Task 01 failed base review | `af49701b354d64bed8343f66aa28267295d418001a2b5987d23000c46a5f48b3` |
| Task 01 paired reacceptance | `2ca7d495c3d5004eba1b199fecfb41eb733ec45a284d2b52ec46ace2892bf12c` |
| Manuscript register | `b75553369ec89a65d32d97a9d05e372e29a4404785cb66c536e2b46466a430be` |

The audit did not infer behavior from test titles. It read all six companion
libraries, all three schemas, both fixtures, all 21 expected records, all seven
test modules, the README, every chapter and furniture file, all 21 blueprints,
the blueprint/manuscript registers, and the visual forecast. It then:

1. ran the complete companion suite;
2. compared `LEGAL_TRANSITIONS` with the transition pairs actually accepted by
   `CHAPTER_CONTRACTS` and persisted by `runPort`;
3. executed the explicit BL-00 reopen counterexample;
4. independently materialized two complete primary chains outside the
   repository and compared every `BL-00` through `BL-20` byte;
5. launched a fresh Node process against an existing dossier to test adoption;
6. inspected ownership marker bytes separately from dossier record bytes;
7. reconciled each chapter's two reader-facing labs with the actual fixed
   fixtures and record-construction code;
8. verified every furniture route and identifier inventory; and
9. reconciled every registered visual with manuscript/forecast bytes and scanned
   the repository for generated MLE media.

## Companion inventory and fresh execution

The closed inventory reconstructs exactly:

| Family | Count | Result |
|---|---:|---|
| README / package metadata | `2` | present |
| JSON contracts | `3` | parseable, closed schemas |
| fixed fixtures | `2` | canonical bytes |
| expected dossier records | `21` | `BL-00` through `BL-20`, no gap |
| libraries | `6` | canonical JSON, envelope, lifecycle, ports, dossier, runner |
| tests | `7` | current suite `33/33` |
| total companion files | `41` | exact |

Fresh `npm test` result: `33` tests, `33` pass, `0` fail, `0` cancelled,
`0` skipped, `0` todo. The test suite directly verifies:

- five ports and identical enumerable result shape
  (`companion/tests/ports.test.mjs:9-24`);
- denial of network, shell, cloud, model, and secret modes before target
  creation (`companion/tests/effects.test.mjs:39-50`);
- repository, traversal, protected-root, existing-directory, symlink, escape,
  invalid-milestone, copied-marker, predecessor-tamper, and root-replacement
  failures (`companion/tests/effects.test.mjs:52-99`, `126-200`);
- canonical exact writes, no predecessor replacement, and byte-identical dossier
  records across fresh targets (`companion/tests/effects.test.mjs:101-123`);
- exact states, declared transition table, forbidden transitions, enrichment,
  and trigger lookup (`companion/tests/lifecycle.test.mjs:8-51`); and
- primary plus rollback full chains, including `OBSERVED -> ROLLED-BACK ->
  CONTROLLED`, through all five ports
  (`companion/tests/chapters-15-21.test.mjs:37-100`).

The effect boundary in implementation is also direct: `runPort` rejects the five
external-effect modes and escape mode before root opening
(`companion/lib/run.mjs:240-250`). Root resolution denies repository, traversal,
protected absolute, existing, symlink, and changed identities
(`companion/lib/run.mjs:23-59`, `83-137`). Every append uses exclusive creation,
re-reads canonical predecessor bytes, recomputes hashes, rejects inventory
changes, and verifies the root again (`companion/lib/run.mjs:139-238`). These are
real executable properties, not merely labels.

## Independent dossier, ownership, and determinism witness

An independent audit script materialized two complete `PORT-EDGE` primary
chains in distinct `mkdtemp` roots outside the repository. It then launched a
new Node process that attempted to append `BL-01` to the first root.

```json
{
  "fullChains": 2,
  "dossierRecordsPerChain": 21,
  "recordsEqual": true,
  "markersEqual": false,
  "marker1Sha": "0517043fb20cac6d29183fcb91527781f2c0c22d9e0ae9f589371477ff6f045e",
  "marker2Sha": "1345f893f61422be90bf3db83b4af2508b0b349c262ffd8b84eaae99ae990355",
  "secondProcessExit": 0,
  "secondProcessResult": "ROOT_UNOWNED"
}
```

The marker hashes are an ephemeral audit witness, not frozen expected values.
Their inequality is correct: initialization calls `randomUUID()` and binds the
token plus device/inode into `.mle-companion-root.json`
(`companion/lib/run.mjs:76-81`, `104-121`). Ownership authority also lives in
the unexported process-local `OWNED_ROOTS` map (`companion/lib/run.mjs:17`,
`83-101`), so regular marker bytes cannot authorize a later process. By
contrast, dossier record bytes are built from fixed clock/seed, canonical JSON,
fixed fixture hashes, exact state, and exact predecessor hash
(`companion/lib/dossier.mjs:5-7`, `80-115`); those 21 records were byte-equal
across the two roots. The README correctly states the same-process/later-process
boundary (`companion/README.md:7`).

This establishes the proper claim: **dossier records are deterministic under
the fixed synthetic contract; ownership markers are intentionally random and
process-local.** It does not establish that the whole output directory is
byte-identical.

## Lifecycle and branch reconciliation

The declared table contains 17 states, 19 legal transitions, two forbidden
transitions, and four reopen triggers (`companion/lib/lifecycle.mjs:3-39`). The
persisted primary and rollback scenarios both run to `REVIEWED`. However, the
declared set and executable record set differ:

| Set comparison | Exact result |
|---|---|
| declared transitions | `19` unique |
| unique `incomingStates × outgoingStates` accepted by milestone contracts | `19` unique |
| declared but not persisted by any full-chain scenario | `CANDIDATE->HOLD`, `CANDIDATE->REJECT`, `HOLD->CANDIDATE`, `REJECT->CANDIDATE` |
| persisted but absent from declared table | `CONTRACTED->CONTRACTED`, `ADMISSIBLE->ADMISSIBLE`, `CANDIDATE->CANDIDATE`, `TECHNICALLY-QUALIFIED->TECHNICALLY-QUALIFIED` |

The latter four are legitimate dossier enrichments, but they are not lifecycle
promotions. The former four are lifecycle transitions, but negative results are
returned in memory and never appended (`companion/lib/run.mjs:258-263`), and no
repair-to-candidate scenario materializes them. `runPort` does not call
`assertLegalTransition`; it enforces the separately encoded milestone state
arrays (`companion/lib/run.mjs:152-161`; `companion/lib/dossier.mjs:31-36`).
Therefore a count of 19 on both sides is not evidence of set equality.

The explicit reopen probe also returned:

```json
{"disposition":"REOPEN","sourceState":"UNORIENTED","outgoingState":"CONTRACTED","reopenTarget":"CONTRACTED","diagnostic":"REOPEN_PURPOSE_OR_INTENDED_USE"}
```

That behavior follows directly from `createNegativeRecord`: an explicit trigger
is resolved without checking whether the target is earlier than the source, then
its target is written as the outgoing state (`companion/lib/dossier.mjs:118-162`).

## All 42 lab and chapter-companion claims

All 21 positive lab identities and all 21 negative lab identities exist. The
fixed fixture identities and expected diagnostics are exact. The implementation
does **not**, however, execute the domain procedures described by the chapters.
`bl-entry.json` holds only three label-like evidence strings per positive lab,
and `mutations.json` holds only chapter ID, diagnostic, disposition, and fixture
ID per negative lab (both files are canonical one-line JSON at line 1).
`createPositiveRecord` checks fixture identity/hash and emits a generic bounded
record; `createNegativeRecord` selects the predeclared diagnostic/disposition
and emits a generic changed-evidence record (`companion/lib/dossier.mjs:38-69`,
`80-162`). The chapter test modules compare those outputs to checked-in expected
JSON and use only broad diagnostic/disposition assertions
(`companion/tests/chapters-01-07.test.mjs:15-33`,
`chapters-08-14.test.mjs:17-38`, `chapters-15-21.test.mjs:37-58`).

| Chapter | Reader lab evidence | Implemented fixed negative | Audit disposition |
|---|---|---|---|
| 01 | `chapter-01.md:90-98` | `OWNER-MISSING` / HOLD | identity exists; owner resolution, tracked-run classification, queue construction, and `STATE-SKIP` are not executed |
| 02 | `chapter-02.md:100-110` | `PURPOSE-DISPUTED` / HOLD | identity exists; purpose/population/NO-ML contract semantics are not executed |
| 03 | `chapter-03.md:102-122` | `COMPARATOR-DRIFT` / REJECT | identity exists; incumbent measurement/hash comparison is not executed |
| 04 | `chapter-04.md:115-121` | `PROVENANCE-ABSENT` / HOLD | identity exists; schema/count/permission/retention checks are not executed |
| 05 | `chapter-05.md:110-128` | `CONSUMER-UNDECLARED` / HOLD | identity exists; graph reverse trace, values, consumer discovery, and feedback timing are not executed |
| 06 | `chapter-06.md:115-128` | `TEMPORAL-LEAK` / REJECT | identity exists; groups, partitions, serving transform, entity leak, and matched values are not executed |
| 07 | `chapter-07.md:118-128` | `PREPROCESSING-CONFOUNDED` / REJECT | identity exists; rebuild, controlled intervention, digest mismatch, and seed variation are not executed |
| 08 | `chapter-08.md:105-124` | `MANIFEST_FIELD_MISSING` / HOLD | identity exists; reconstruction capsule fields and envelope mutation are not executed |
| 09 | `chapter-09.md:105-119` | `BASELINE_ERASED` / REJECT | identity exists; candidate ledger comparison/retention semantics are not executed |
| 10 | `chapter-10.md:111-129` | `AGGREGATE_OVERRIDES_SEGMENT` / HOLD | identity exists; population cells, denominators, thresholds, and aggregate precedence are not executed |
| 11 | `chapter-11.md:105-123` | `CALIBRATION_INAPPLICABLE` / HOLD | support/calibration computation and authority-promotion mutation are not executed |
| 12 | `chapter-12.md:109-127` | `EXTERNAL_OWNER_MISSING` / HOLD | identity exists; hearing grounds/signature separation and HOLD-to-release attempt are not executed |
| 13 | `chapter-13.md:117-135` | `MUTABLE_TAG_ONLY` / REJECT | identity exists; package provenance, dependency, and previous-good checks are not executed |
| 14 | `chapter-14.md:111-129` | `VERSION_AXES_COLLAPSED` / HOLD | identity exists; old/new consumer fixtures, semantic compatibility, and deprecation window are not executed |
| 15 | `chapter-15.md:70-72` | `SUBJECT_DIGEST_MISSING` / HOLD | only the named mutation exists; builder, origin, authorization, and mutable recovery variants are not executed |
| 16 | `chapter-16.md:76-78` | `MEAN_ONLY_SERVING_CLAIM` / HOLD | only the named mutation exists; distribution, canary, rollback, degraded mode, and owner variants are not executed |
| 17 | `chapter-17.md:72-74` | `BASELINE_OR_WINDOW_MISSING` / HOLD | only the named mutation exists; maturity/censoring/revision/auto-retrain variants are not executed |
| 18 | `chapter-18.md:74-76` | `COMMAND_OWNER_COLLAPSED` / REJECT | rollback branch is executable, but missing previous-good, alias, same-identity repair, paging, and closure variants are not |
| 19 | `chapter-19.md:70-74` | `CONTROL_PROVENANCE_MISSING` / REOPEN | only the named mutation exists; evidence locator, expiry, signature, and scope variants are not executed |
| 20 | `chapter-20.md:70-72` | `RESIDUAL_ENDPOINT_OR_ALIAS` / REOPEN | only the named mutation exists; credentials, consumers, device reachability, observation time, and authority variants are not |
| 21 | `chapter-21.md:66-68` | `STALE_HASH` / REJECT | hash/tamper checks exist globally, but the six named hostile-review mutation variants are not one lab fixture |

This is not a demand to build real providers or production systems. A valid
repair can narrow reader language to the actual deterministic record grammar or
add bounded local fixture fields/checks. It may not imply real-world proof.

## Five-port equality and claim boundary

The five labels and their non-enumerable adapter descriptions are exact
(`companion/lib/ports.mjs:3-11`, `19-26`). All enumerable dossier fields are
identical by design; the port name and adapter mechanism do not enter canonical
JSON. The port tests correctly prove shape equality, order, non-privilege, and
unknown-port denial (`companion/tests/ports.test.mjs:9-24`).

Appendix C correctly bounds the companion as adapter-contract mechanics only
(`manuscript/appendix-c.md:31-44`). Its preceding claim that the mechanism and
"characteristic failure injection vary" (`appendix-c.md:3-14`) is not true of
the executable companion: every port receives the same chapter fixture and
returns the same record; only hidden descriptive properties vary. Chapter
claims that each port reproduces its own provider/classical/deep/edge/shared
negative path therefore remain conceptual transfer exercises, not tested
companion behavior. This discrepancy is included in `P09-SYS-004` below.

## Furniture completeness, navigation, and accessibility

| Furniture contract | Actual | Result |
|---|---:|---|
| Bench Zero items | `10` | exact |
| part files | `7` | exact |
| required headings per part | `5/5` in each | exact |
| appendices | `7` | exact |
| closing items | `5` | exact |
| total furniture files | `15` | exact |

All 15 furniture files were read. The seven part files each contain exact Bench
Setup, decision question, incoming evidence, part map, and part-exit
Qualification Gate headings. `opening-and-closing.md` retains the exact final
line at line 320. A filesystem resolution of every local Markdown target across
all manuscript files returned zero missing targets. No furniture table lacked a
Markdown header/separator row.

Identifier routes also reconstruct exactly:

- Appendix F contains all and only `MLE-BCLM-001` through `MLE-BCLM-063` and
  all and only `MLE-BSRC-001` through `MLE-BSRC-046`; comparison with the claim
  and source registers returned `missing=[]`, `extra=[]`
  (`manuscript/appendix-f.md:3-69`).
- Appendix E contains all and only `CASE-01` through `CASE-12`; comparison with
  the case register returned `missing=[]`, `extra=[]`
  (`manuscript/appendix-e.md:9-22`).
- Appendix C exposes all five ports and 35 part-exit checks
  (`manuscript/appendix-c.md:8-29`).
- Appendix A enumerates `BL-00` through `BL-20` and the outside-repository,
  same-process command boundary (`manuscript/appendix-a.md:31-66`).

Accessibility policy is explicit: semantic text owns decision/numeric truth,
tables require headers and reading order, color is never sole encoding, complex
figures need long descriptions, and missing reading order blocks publication
(`manuscript/appendix-g.md:3-8`, `32-45`, `56-60`). The current files satisfy
the structural textual prerequisites. Actual contrast, keyboard, HTML, and PDF
reading order remain later-rendering gates and are not claimed here.

Appendix A's field table is not executable truth, however; see
`P09-SYS-003`.

## All 25 textual visual records and four reserved candidates

The blueprint register has exactly 25 visual objects: semantic records
`MLE-V01.1` through `MLE-V21.1`, plus `MLE-F05.1`, `MLE-F14.1`, `MLE-F16.1`,
and `MLE-F18.1`. Every semantic record has one chapter, the exact S03 anchor,
`semantic-html-css` kind, five essential intent fields, `candidateStatus` of
`not-applicable`, and `reservedPath: null`. Every semantic visual ID occurs in
its matching chapter. These 21 records are ready as textual contracts, subject
to later rendering/accessibility QA.

| Chapter visual set | Register/manuscript reconciliation | Result |
|---|---|---|
| 01-04: `MLE-V01.1`-`MLE-V04.1` | S03 semantic intent present; no asset/path | pass |
| 05: `MLE-V05.1`, `MLE-F05.1` | semantic record passes; candidate path/label contract conflicts | `P09-SYS-006` |
| 06-13: `MLE-V06.1`-`MLE-V13.1` | S03 semantic intent present; no asset/path | pass |
| 14: `MLE-V14.1`, `MLE-F14.1` | semantic record passes; candidate follows blueprint path while forecast/Appendix G follow publication path | `P09-SYS-006` |
| 15: `MLE-V15.1` | S03 semantic intent present; no asset/path | pass |
| 16: `MLE-V16.1`, `MLE-F16.1` | semantic record passes; candidate path/label contract conflicts | `P09-SYS-006` |
| 17: `MLE-V17.1` | S03 semantic intent present; no asset/path | pass |
| 18: `MLE-V18.1`, `MLE-F18.1` | semantic record passes; candidate path/label contract conflicts | `P09-SYS-006` |
| 19-21: `MLE-V19.1`-`MLE-V21.1` | S03 semantic intent present; no asset/path | pass |

Repository-wide media inventory found zero `MLE-F*.png`, `fig-mle-*.png`,
corresponding SVG/WebP files, or Machine Learning Engineering PDF. Thus exactly
four candidates are textual and ungenerated; no visual or PDF was created by
this audit.

## Findings

### P09-SYS-001 — HIGH — Explicit reopen advances unevidenced BL-00 state

- **Status:** open; preserves the Phase 09 requirement that
  `UNORIENTED -> CONTRACTED` must be rejected.
- **Exact evidence:**
  - lifecycle targets are defined without a source-state constraint
    (`companion/lib/lifecycle.mjs:34-39`, `53-58`);
  - `createNegativeRecord` assigns the target directly to outgoing state and
    records the caller's incoming state as `sourceState`
    (`companion/lib/dossier.mjs:118-162`);
  - the committed test explicitly expects BL-00 `UNORIENTED` to reopen to
    `CONTRACTED` (`companion/tests/effects.test.mjs:215-233`);
  - the core schema test repeats the same BL-00 trigger for all four targets
    (`companion/tests/core.test.mjs:118-128`);
  - fresh audit output was exactly
    `REOPEN/UNORIENTED/CONTRACTED/CONTRACTED`.
- **Affected artifacts/claims:** explicit reopen records; BL-00 negative mode;
  four reopen triggers; lifecycle legend; Chapters 01-21 reopen language;
  Appendix A/B; port-result expected semantics; historical review claims that
  reopen returns to earlier evidence.
- **Why it matters:** reopen is meant to invalidate later evidence and route
  backward. Advancing an un-oriented request to a contracted state fabricates
  purpose/authority evidence instead of invalidating it.
- **Proposed disposition/repair boundary:** Task 07 may add one semantic source
  ordering rule: explicit reopen is legal only when the source is later than the
  target and the named evidence could already exist. Reject BL-00 and every
  equal/earlier source with `DOSSIER_TRANSITION_INVALID`; test all four triggers
  from valid later states and invalid early states. Do not weaken trigger targets
  or mutate historical Phase 08 evidence.

### P09-SYS-002 — HIGH — Declared and persisted nineteen-transition sets diverge

- **Status:** open.
- **Exact evidence:** declared table at `companion/lib/lifecycle.mjs:10-30`;
  milestone transition arrays at `companion/lib/dossier.mjs:9-36`; independent
  set diff shown above; primary/rollback scenario arrays at
  `companion/tests/chapters-15-21.test.mjs:10-28`; lifecycle test only asserts
  the declaration at `companion/tests/lifecycle.test.mjs:17-27`.
- **Affected artifacts/claims:** README line 5; manuscript verification report
  lines 91-98; `17/19/2/4` tuple; HOLD/REJECT repair grammar; full-chain claims;
  Chapter 12 qualification; BL-11 through BL-14; lifecycle furniture.
- **Why it matters:** four declared transitions have no persisted scenario,
  while four dossier enrichments are counted only by the executable path. Equal
  cardinality masks different semantics, and `runPort` can drift independently
  from `assertLegalTransition`.
- **Proposed disposition/repair boundary:** keep the 19 legal transition table
  and classify self-state dossier enrichments separately. Either implement
  append-only HOLD/REJECT and repair-to-new-candidate records without corrupting
  the main milestone chain, or narrow every claim from “executed all 19” to
  “declares 19; executes the primary/rollback milestone scenarios.” Add a
  cross-contract test that cannot pass on cardinality alone.

### P09-SYS-003 — HIGH — Appendix A is not the executable dossier schema

- **Status:** open.
- **Exact evidence:** `manuscript/appendix-a.md:11-24` requires
  `artifactId`, `inputArtifactIds`, `inputHashes`, `decisionQuestion`, plural
  `limitations`, `authorityOwner`, and `mleCeiling`. The actual closed dossier
  schema is `companion/contracts/dossier-record.schema.json:1`; it instead
  requires `artifactVersion`, `authorityCeiling`, `authorityRoute`, `chapterId`,
  singular `limitation`, `owner`, `fixtureHash`, `fixedClock`, `fixedSeed`,
  `labId`, `truthState`, and other exact fields, while forbidding additional
  properties. Positive construction at `companion/lib/dossier.mjs:104-115`
  matches the executable schema, not Appendix A.
- **Affected artifacts/claims:** reader dossier reference; all 21 chapter
  record-shape claims; companion contracts; expected records; final hostile
  review; later publication/schema examples.
- **Why it matters:** a reader implementing Appendix A cannot validate against
  the shipped schema, and a reader inspecting a valid companion record cannot
  find several promised fields. This is a contract, not a wording preference.
- **Proposed disposition/repair boundary:** choose one edition-neutral reader
  schema and make Appendix A, JSON schemas, record generator, expected records,
  and chapter examples agree exactly. Preserve bounded authority and canonical
  hash semantics. If Appendix A intentionally describes a richer production
  dossier, label it explicitly as non-companion conceptual schema and provide a
  field-by-field mapping to the executable synthetic record rather than calling
  them the same common envelope.

### P09-SYS-004 — HIGH — Chapter lab and port prose overstates executable semantics

- **Status:** open.
- **Exact evidence:** all 21 lab rows in the matrix above; one-line fixture
  payloads in `companion/fixtures/bl-entry.json:1` and
  `companion/fixtures/mutations.json:1`; generic record constructors at
  `companion/lib/dossier.mjs:38-69`, `80-162`; broad comparison/assertion loops
  at `companion/tests/chapters-01-07.test.mjs:15-33`,
  `chapters-08-14.test.mjs:17-38`, and `chapters-15-21.test.mjs:37-58`;
  hidden-only adapter distinction at `companion/lib/ports.mjs:19-26` versus
  mechanism/failure variation claimed at `manuscript/appendix-c.md:3-14`.
- **Affected artifacts/claims:** 42 labs, 105 chapter-port assertions, Appendix
  C, project-map command intents, expected dossier files, lab currentness and
  readiness claims, Chapters 01-21 assessments.
- **Why it matters:** checking that a predeclared string equals an expected
  string does not recompute a dataset split, provenance graph, compatibility
  matrix, serving distribution, retirement inventory, or hostile review. The
  current prose teaches readers that those discriminating checks executed.
- **Proposed disposition/repair boundary:** prefer truthful narrowing unless a
  small bounded fixture can really discriminate the named defect. Every retained
  executable claim must point to input fields, computation, assertion, and RED
  mutation. Conceptual variants must be labeled reader exercises, not companion
  executions. Preserve all non-proof limits; do not add cloud/provider/real
  effects. For ports, state that the shipped companion proves equal interface
  mechanics only unless distinct local fixtures are actually implemented.

### P09-SYS-005 — MEDIUM — Correct ownership/determinism boundary lacks a committed process-level regression

- **Status:** open; runtime behavior independently passed.
- **Exact evidence:** implementation uses process-local `OWNED_ROOTS` and random
  token bytes (`companion/lib/run.mjs:17`, `76-121`); README claims later-process
  denial (`companion/README.md:7`); committed equality test compares dossier
  record objects only (`companion/tests/effects.test.mjs:117-123`); copied-marker
  test occurs within the same process and a different directory
  (`companion/tests/effects.test.mjs:172-185`). No test spawns a second process
  to reopen the same directory, and no test asserts marker inequality while
  record bytes remain equal.
- **Affected artifacts/claims:** same-process append boundary; later-process
  adoption denial; deterministic double materialization; output-directory
  interpretation; hostile verification.
- **Why it matters:** the implementation currently behaves correctly, but the
  strongest process boundary and determinism qualification can regress while
  `33/33` remains green.
- **Proposed disposition/repair boundary:** add a child-process test that
  materializes BL-00 in process A and expects `ROOT_UNOWNED` for BL-01 in process
  B. Add two complete fresh materializations proving `BL-00..20` record equality
  while explicitly requiring different ownership marker tokens. Document that
  directory equality is not promised. Keep the live capability unexported.

### P09-SYS-006 — HIGH — `P09-OPEN-04`: four raster candidates have conflicting textual contracts

- **Status:** open; mandatory opening finding retained.
- **Exact evidence:**
  - blueprint register reserves all four as
    `assets/images/machine-learning-engineering/MLE-Fxx.1-2400x1600.png`
    (`blueprints/blueprint-register.json:13274-13291`, `13474-13491`,
    `13534-13551`, `13594-13611`);
  - manuscript register repeats that path family
    (`manuscript/manuscript-register.json:6171-6287`);
  - Chapters 05, 16, and 18 instead reserve
    `src/assets/books/machine-learning-engineering/figures/fig-mle-xx-01.png`
    (`manuscript/chapter-05.md:66`, `chapter-16.md:48`, `chapter-18.md:42`);
  - Chapter 14 retains the blueprint path and only generic label/alt/description
    intent (`manuscript/chapter-14.md:79-81`);
  - Appendix G and the visual forecast use the `src/assets/books/.../figures`
    family for all four (`manuscript/appendix-g.md:18-30`;
    `visual-forecast.md:575-582`);
  - blueprint candidate labels are generic `decision/evidence/state/owner/next
    action`, whereas the visual forecast and three expanded chapters require
    `SOURCE/TRANSFORM/CONSUMER/FEEDBACK`, `PACKAGE/OLD/NEW/FALLBACK`,
    `DEMAND/PRESSURE/ABORT/DEGRADED`, and
    `INCIDENT/ROLLBACK/NEW ID/REQUALIFY`.
- **Affected artifacts/claims:** all four raster identities; blueprint and
  manuscript registers; Chapters 05/14/16/18; Appendix G; visual forecast;
  eventual Astro path; alt, long-description, caption, dimensions, prompt, and
  provenance contracts; Phase 10 handoff.
- **Why it matters:** generating from the current bytes can create the right
  figure at the wrong canonical path or a generic figure that fails its actual
  decision/label/accessibility contract. Chapter 14 is internally on the
  opposite path family from its peers.
- **Proposed disposition/repair boundary:** before any generation, freeze one
  exact canonical path convention and one per-candidate contract containing ID,
  S03 anchor, decision helped, qualitative labels, caption, alt text, long
  description, 2400 × 1600/3:2 dimensions, prompt/prohibitions, ImageGen-only
  provenance, and canonical-PNG rule. Project those exact values into both
  registers, four chapters, Appendix G, and visual forecast. Do not generate or
  rename an asset in Phase 09.

## Explicit non-findings and retained limits

- The companion current suite is green at `33/33`; this report does not convert
  content-contract findings into a claim that the runner is generally broken.
- Five-port **enumerable shape** equality is real. Port-specific production
  behavior is not.
- The primary and rollback milestone chains are real and hash-linked. That does
  not execute every declared HOLD/REJECT repair transition.
- Effect denial, path traversal, symlink, protected root, root replacement,
  copied marker, unrelated file, predecessor tamper, and exclusive append gates
  are real and passed.
- Process-local later-process denial and dossier-vs-marker determinism passed an
  independent live probe; `P09-SYS-005` requests durable regression evidence,
  not a runtime redesign.
- All furniture counts, links, identifier inventories, and textual accessibility
  policies pass. Actual rendered HTML/PDF accessibility remains a later gate.
- All 25 visual records remain textual and exactly four raster candidates remain
  ungenerated. No image/PDF work is authorized.
- Companion evidence remains synthetic-deterministic mechanics. It proves no
  model quality, production readiness, hardware reproducibility, fleet SLO,
  safety, security acceptance, privacy/legal approval, business value, or
  complete retirement of unknown paths (`companion/lib/dossier.mjs:71-72`;
  `companion/README.md:11`).

## Exact terminal evidence

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `companion/fixtures/bl-entry.json` | 3,538 | `24b2ef5873262d45c5fbf5df16386dfc7df434fc56295a35b25d32fa2a32c8c9` |
| `companion/fixtures/mutations.json` | 2,486 | `9cc1e9acca3612f4568bfc03f58a5e9155e9df8d157096cf489558b86e3af736` |
| `companion/lib/run.mjs` | 14,489 | `fc604676744418ec4dce0dcd24c9d5e12aaf92dd428bbc1eaa8cf8fff24c67a0` |
| `companion/lib/lifecycle.mjs` | 3,581 | `8ec73808b043de8c24147164d28a30b977f6ad677a2d9db3b130ccfdcdaf377e` |
| `companion/lib/dossier.mjs` | 19,023 | `7acc8ae1e7b66e5777c1e1623caba6950f1f6a91e28ba209d931eb7889126bd3` |
| `companion/lib/ports.mjs` | 1,173 | `923f3c1ad7f2dfab00fb72485b1fb89254153d944b955d53a7b129b4099feb3e` |
| `companion/README.md` | 2,327 | `0c1e386566c06c6e27bd5e02961da6faa51407110a35462f8aafe9423cbcbc1f` |
| `manuscript/appendix-a.md` | 3,455 | `01c7b986c33a44a4e5b338a2ac0cbcebb88d269214e89e86a2b06379b9d5a942` |
| `manuscript/appendix-c.md` | 3,784 | `79e81fc8c092a3d5e7ecb89c8afc5d162ed075796f33e3439885bfc453a6716b` |
| `manuscript/appendix-g.md` | 3,852 | `8c913be0bf9fb5c40f16b6febdee94427050633f7fa52a7b656b3240e752a24a` |
| `blueprints/blueprint-register.json` | 578,405 | `d05d14663fcae623faa529fa2405552752a4a7b90760de48ab9512bd4d4553b6` |
| `manuscript/manuscript-register.json` | 163,191 | `b75553369ec89a65d32d97a9d05e372e29a4404785cb66c536e2b46466a430be` |

Terminal results:

- companion inventory `41/41`;
- companion tests `33/33` pass;
- two independent full chains `21/21` dossier records each;
- dossier equality `true`; marker equality `false`;
- later-process adoption `ROOT_UNOWNED`;
- lifecycle declaration `17/19/2/4`, with the exact set divergence preserved;
- furniture `10/7/7/5`, 15 files, zero broken local links;
- Appendix identifiers `63/46/12`, zero missing or extra;
- visuals `25` textual, `4` reserved, `0` generated MLE raster/PDF assets;
- canonical repairs `0`; images/PDF/publication outputs `0`.

`TASK-05 AUDIT COMPLETE — SYSTEMS READINESS CHANGES REQUIRED`

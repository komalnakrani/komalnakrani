# Phase 08 Task 00 independent hostile plan review

Review date: 2026-08-22  
Reviewer role: independent hostile plan reviewer; no Phase 08 production ownership  
Scope: design and implementation plan only; no state, Git, GitHub, manuscript, companion, or publication mutation

## Inputs bound by this review

| Input | SHA-256 or immutable identity |
|---|---|
| `docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md` | `28c8300759e697e8d30da304457ae29ccad0a8b7871b5a4f62d7514172a3e37a` |
| `docs/superpowers/plans/2026-08-22-machine-learning-engineer-phase-08.md` | `5ddc677e7cc7486c53b63fbb5c1f69bd9c59bddf750b64d3d8de4a93e419b7aa` |
| Phase 07 closure commit, local `HEAD`, and `origin/main` | `b7105d2c061aafd8952b36f8b1355ef635887524` |
| `phase-07-verification.json` | `781b86503df3e40cf7f59424ea95e60bab5ce1cd2ae79199d3efd569d07aa454` |
| `blueprints/blueprint-register.json` | `d05d14663fcae623faa529fa2405552752a4a7b90760de48ab9512bd4d4553b6` |
| `blueprints/whole-book-furniture.md` | `42ec2b992cde815015745d9c50845b5ba83024eaf00e5c32d8434a9d47b8ae4a` |
| `blueprints/verification-report.md` | `ead317e38987f6ae8dc0ddcf2188c4bf929c70ac16569950afbecea3e027137a` |
| `blueprints/phase-08-handoff.md` | `df7c39ef9ec152d5deadde7ab31b26d0274a4b2aa6d4b3b74589f0bfd59aecb0` |
| `sources/integration-manifest.json` | `c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4` |
| `sources/phase-07-handoff.md` | `98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119` |
| `project-control/roles/machine-learning-engineer/ROLE-STATE.md` | `22adafa785eaf3306445cb86a4e43d455267e0ba63c1cf7cfef133efb1a335ec` |
| `project-control/roles/machine-learning-engineer/issues/root.md` | `db57cace9630e5120fb075ef159769a12b06ef48ad0d2da91fb7677995e4d738` |
| `project-control/roles/machine-learning-engineer/issues/phase-07-chapter-blueprints.md` | `0ada257993fa53cb805b9b17f87ab15f78674b16a4ed4da76112641b934e49b0` |
| `project-control/role-factory/FACTORY-STATE.md` | `20a3876caaa642df660c2ccfa18c3e8783d64ee61741751d99165a02bf663475` |
| Live GitHub #79 body captured through `gh issue view --json body --jq .body` | `2243f95227972553188d5908dbba5338ac21b1fb4ce48e78c4dfc089a8fa1c83` |
| Live GitHub #84 body captured through `gh issue view --json body --jq .body` | `e0a9a05eb19003ba75ded003072f712c117ca874d76a2c509cfb85f85426235e` |

The 21 chapter blueprint paths exist in numeric order and are individually bound
by the accepted Phase 07 verification artifact. The current tracked tree equals
the closure commit; the only pre-review worktree paths observed were the two
untracked candidate documents above. Live GitHub evidence was read without
mutation: #79 is open with `role:machine-learning-engineer` and
`status:in-progress`; #84 is closed with
`phase:07-chapter-blueprints`, `role:machine-learning-engineer`, and
`status:done`.

## Verified contracts

- The seven frozen-input hashes printed in the design and plan equal the
  filesystem bytes at the Phase 07 closure commit.
- The proposed lane source, case, architecture-assignment, port, section, lab,
  assessment, visual, and handoff totals equal the accepted Phase 07 lane
  contracts: A `49/83/34/31/42/9/7`, B `52/92/31/30/37/14/7`, and C
  `59/23/39/42/49/25/7`, plus 35 ports, 56 sections, 14 labs, 7 assessments,
  and 7 handoffs per lane, with visual totals `8/8/9`.
- The accepted global register is 7 parts, 21 chapters, 63 claims, 46 sources,
  160 source-claim edges, 12 cases, 104 case-chapter edges, 198 claim-case
  edges, 34 case-source uses, 168 sections, 42 labs, 21 assessments, 105
  chapter-port assertions, 25 visuals, and 21 handoffs. Furniture is exactly
  `10/7/7/5`, includes About Komal, and retains the exact closing line.
- The proposed author, title, Learning Systems Test Bench identity, screen-first
  7 by 10 direction, four reserved visual IDs, provider-neutral five-port
  boundary, synthetic-lab truth limit, no-publication boundary, and Phase 08
  private-production intent agree with the accepted Phase 07 handoff.

## Blocking findings

### P08-PLAN-001 — Approval is asserted before the independent gate

The design declares `Status: Approved design for Phase 08 planning`, while the
plan says Task 1 independently approves both the spec and plan. The design's
private-layout allowlist also starts at `task-01-bootstrap.md` and omits this
required `task-00-plan.md` and its failure-only repair. This is a hypothetical
approval and makes the evidence that grants approval illegal under the stated
layout.

Required repair: change the candidate status to pending independent review;
enumerate Task 00 review and failure-only repair paths; and permit `Approved`
only after a review bound to the repaired bytes ends PASS/APPROVED.

### P08-PLAN-002 — The output boundary is not a closed executable allowlist

The design says Phase 08 writes only beneath the private book workspace and
Phase 08 review directory, but the plan necessarily creates the Phase 08 local
issue and modifies ROLE, root, and FACTORY state outside those locations. It
also admits wildcard companion directories (`lib/*.mjs`, `contracts/*.json`,
`fixtures/*.json`, `expected/*.json`, and `tests/*.test.mjs`) without naming an
exact file inventory. An unexpected file cannot be distinguished from a legal
one, contrary to the bootstrap and hostile path tests.

Required repair: split production, lifecycle, review, plan/spec, and ignored
scratch allowlists; enumerate every allowed companion file and all three lane
manifest paths; state the exact stage at which each path may exist; and retain
paired repair paths only after a recorded failure.

### P08-PLAN-003 — Entry and activation Git/GitHub truth is neither current nor reproducible

The local authorities and #84 correctly say Phase 07 complete, but the live #79
body still names #83 as last completed, #84 as active, and Phase 07 as active.
Its open state and labels alone do not make that body current. Task 1 checks only
that #79 is open, and Task 2 never directs an activation-time update of the live
root body even though the bootstrap review later binds live issue bodies.
Moreover, Task 1 requires a clean worktree after the candidate spec and plan
already exist untracked, and Task 2 says to compare the returned child number
with a number "projected into state" without freezing that expected number
before issue creation. The current next number is #85, but the plan does not
bind it.

Required repair: require Task 00 to reject the stale #79 body; freeze the exact
expected Phase 08 child number or define a precommitted reconciliation rule;
update and hash the live root and new child bodies at activation; distinguish a
clean Phase 07 baseline from the exact candidate/review dirt allowed before the
plan commit; and require fetched local `main`, `origin/main`, and live remote
`main` equality after the plan-review commit and before issue creation.

### P08-PLAN-004 — Final verification is scheduled before final state exists

Task 9 creates `phase-08-verification.json` and calls it final verification that
binds four final state files and GitHub expectations. At that point the child is
still open and all four authorities are still Phase 08 active. Task 10 then says
the active package commit excludes final verification and final state, closes
the child, changes state, and generates final verification again. One path is
therefore assigned two incompatible temporal identities, and the hostile review
cannot honestly approve hashes for future closure bytes.

Required repair: Task 9 must bind an explicitly named active/pre-close package
digest that excludes future closure-state and final-verification bytes. Create
the sole final verification only after child closure and atomic final local
state projection in Task 10; make it bind the accepted pre-close digest plus
actual final state and live issue hashes; and mutation-test both temporal
identities.

### P08-PLAN-005 — The global graph contract omits accepted exact counts

The plan's global gates and Task 8 list only a subset of the accepted graph.
They omit explicit global requirements for 160 source-claim edges, 104
case-chapter edges, 198 claim-case edges, 34 case-source uses, 22 architecture
claims, 17 boundaries, 10 scenarios, 12 domains, 8 clusters, 35 part-exit
checks, 17 states, 19 legal transitions, 2 forbidden transitions, and 4 reopen
triggers. “Exact reverse equality” is not a substitute for freezing the
cardinalities that the validator and verification schema must reject when
self-consistently altered.

Required repair: add every accepted global count to the frozen gates,
manuscript register, validator mutations, integration review, hostile review,
and final verification; preserve the already-correct lane assignment totals.

### P08-PLAN-006 — The companion write boundary permits repository mutation

The runner may write to an “explicitly supplied temporary/output directory,”
but neither document requires that target to be outside the repository or
rejects traversal, protected absolute paths, or symlink escape. A caller could
therefore explicitly select `public`, `content/publications`, a state directory,
or an earlier dossier path while still satisfying the literal rule. The plan
also does not freeze canonical JSON serialization for the promised byte-stable
hashes.

Required repair: constrain writes to a fresh caller-supplied directory whose
resolved real path is outside the repository; reject traversal, protected
paths, pre-existing symlinks, and writes outside that root; freeze canonical
serialization and hash rules; and test attempted network, shell, cloud/model,
environment-secret, and filesystem escape effects across all five ports.

### P08-PLAN-007 — Reviewer independence and same-reviewer repair are not auditable

The documents require independent review and same-reviewer reacceptance but do
not assign producer/reviewer ownership or require durable producer identity,
reviewer identity, review order, and repair-return identity in the review
record. A producer can satisfy the current text by writing an “independent”
review of their own output, and a different reviewer can claim same-reviewer
reacceptance without a machine-checkable contradiction.

Required repair: freeze disjoint producer and reviewer identities per task,
record them in a closed review schema, prohibit equality, bind review and repair
timestamps/order plus exact artifact hashes, and require the original reviewer
identity on reacceptance.

### P08-PLAN-008 — The PDF-review stop boundary contradicts the remaining current-book phases

Task 10 says not to begin Phase 09 “until the completed current book is ready”
for the user's all-PDF direction review. The completion boundary correctly says
the current book is not ready until Phases 09, 10, 11, and 19 finish. The Task
10 sentence therefore blocks the very phases needed to reach its condition.

Required repair: stop Phase 08 with Phase 09 inactive and require a separately
approved Phase 09 activation, but explicitly allow the current book to continue
through Phases 09/10/11/19. Place the user's all-PDF direction-review stop only
after the current book's Phase 19 hostile final QA and before any new book,
course, Abhyaas work, catalog position, or role begins.

## Decision

The content direction is strong and most Phase 07 identities are copied
accurately, but the approval, path, external-state, verification-timing,
companion-effect, reviewer-independence, and terminal-stop defects are
execution-blocking. No Phase 08 issue, activation, manuscript, companion, or
downstream output is approved from these bytes.

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED

## Same-reviewer re-review — 2026-08-22

Reviewer identity: `/root/mle_p7_test_contract_repair`  
Producer identity: `/root`  
Prior verdict: `SPEC COMPLIANCE FAIL` / `QUALITY CHANGES REQUESTED`  
Re-review disposition: replacement reviewed; one directed finding remains open

### Replacement bindings

| Replacement input | SHA-256 |
|---|---|
| `docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md` | `0289c10c0e5d4d84dab2542baaf81fd5a127e17611c86125b960196e43deaa08` |
| `docs/superpowers/plans/2026-08-22-machine-learning-engineer-phase-08.md` | `ed006281748738d662fa559d35d5d049c9f3b8c2a3aa02795cd4b650ddcc2c7d` |
| `project-control/roles/machine-learning-engineer/reviews/phase-08/task-00-plan-repair.md` | `84d17687180af558201bf15c8fca33c7b792e33f8d8c31cb2e36f5f78e4d9347` |
| Live GitHub #79 body, read from the API without mutation | `db57cace9630e5120fb075ef159769a12b06ef48ad0d2da91fb7677995e4d738` |
| Local inactive root authority | `db57cace9630e5120fb075ef159769a12b06ef48ad0d2da91fb7677995e4d738` |

Local `HEAD`, `origin/main`, and live remote `main` remain the Phase 07 closure
commit `b7105d2c061aafd8952b36f8b1355ef635887524`. The live #79 body is byte-for-byte
equal to the committed local inactive root authority; #79 is open/in-progress
and #84 is closed/done. No Phase 08 child exists.

### Directed closure audit

- `P08-PLAN-001` CLOSED: the design is a candidate pending this Task 00 gate;
  Task 00 and failure-only repair paths are legal and approval remains terminal.
- `P08-PLAN-002` CLOSED: the design defines closed tracked lifecycle, production,
  review, ignored scratch, and closure sets; its enumerated companion paths are
  authoritative over the plan's task-level glob shorthand, and stage presence
  plus failure-only repair rules are explicit.
- `P08-PLAN-003` CLOSED: live #79 now equals the inactive local root; exact #85,
  activation labels/bodies, race reconciliation, candidate dirt, plan-review
  commit, fetch, clean-worktree, and three-way main equality are required.
- `P08-PLAN-004` CLOSED: Task 9 freezes only the active/pre-close digest; Task 10
  creates the sole verification after actual child closure and final state.
- `P08-PLAN-005` CLOSED: the complete accepted count families and lane totals
  appear in global, integration, hostile mutation, and final closure gates.
- `P08-PLAN-006` CLOSED: canonical serialization and hash bytes are frozen;
  effects, secrets, protected paths, traversal, symlinks, and resolved-root
  escapes are prohibited and tested across all five ports.
- `P08-PLAN-007` OPEN: reviewer records and most producer/reviewer pairs are now
  frozen, but Plan Task 7 creates `opening-and-closing.md`, seven part files, and
  seven appendices without naming its producer or reviewer. Task 8 says its
  Task 06 reviewer binds every final production file, but the only Task 06
  producer identity named is `/root/mle_p8_integration`; the plan never assigns
  Task 7's writer identity or declares that Task 06 is the independent review
  for those Task 7 bytes. The closed record therefore cannot prove that the
  furniture author differs from the reviewer, and the repair record's claim
  that every pair is named is false for this production task.
- `P08-PLAN-008` CLOSED: Phase 08 stops with Phase 09 inactive; separately
  approved current-book phases may continue, and the user's all-PDF review stop
  occurs only after Phase 19 and before any new workstream.

### Remaining directed repair

Assign Task 7 an exact producer identity and an exact disjoint reviewer identity
or explicitly route its artifact set through Task 06 with the Task 7 producer
recorded separately in the closed review schema. Require that reviewer to bind
all 20 Task 7 files and preserve the same-reviewer rule after any Task 7 repair.
Then update the plan and repair record hashes and return them to this same
reviewer. No Phase 08 issue or production output is approved before that closure.

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED

## Final same-reviewer reacceptance — 2026-08-22

The original reviewer re-audited all eight directed findings against the final
replacement bytes. Findings `P08-PLAN-001` through `P08-PLAN-006` and
`P08-PLAN-008` retain their closed dispositions from the first re-review.
`P08-PLAN-007` is now closed: Task 7 assigns its exact twenty-file furniture set
to `/root/mle_p8_furniture`; `/root/mle_p8_integration_review` independently
binds those files inside Task 06 and is explicitly disjoint from both the
furniture producer and shared integration producer `/root/mle_p8_integration`.

The final design remains candidate-only until this terminal record, the path and
stage sets remain closed, all accepted Phase 07 graph/count identities remain
exact, child `#85` and Git/GitHub reconciliation remain fail-closed, the sole
final verification remains post-closure, companion effects and canonical hash
bytes remain bounded, and the all-PDF review stop remains after Phase 19 and
before any new workstream. Live #79 remains byte-identical to the local inactive
root at `db57cace9630e5120fb075ef159769a12b06ef48ad0d2da91fb7677995e4d738`.

```json
{
  "taskId": "TASK-00",
  "producerIdentity": "/root",
  "reviewerIdentity": "/root/mle_p7_test_contract_repair",
  "reviewedAt": "2026-08-22T07:22:20+05:30",
  "artifactBindings": [
    {
      "path": "docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md",
      "sha256": "214248a9f1ee3a7fb83167483cc8fe547c753d7d157a878b4cdc6eaab6593557"
    },
    {
      "path": "docs/superpowers/plans/2026-08-22-machine-learning-engineer-phase-08.md",
      "sha256": "749917ab6663ef198d26c7b0d47ab97082bf94504c2eb46dc0962872995bee04"
    },
    {
      "path": "project-control/roles/machine-learning-engineer/reviews/phase-08/task-00-plan-repair.md",
      "sha256": "e20b830667814f875f0d7340ef6ed451e3ee46d347aacb2fa2a76a69e3c55604"
    }
  ],
  "priorVerdict": "SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED",
  "repairPath": "project-control/roles/machine-learning-engineer/reviews/phase-08/task-00-plan-repair.md",
  "repairSha256": "e20b830667814f875f0d7340ef6ed451e3ee46d347aacb2fa2a76a69e3c55604",
  "reacceptedBy": "/root/mle_p7_test_contract_repair",
  "reacceptedAt": "2026-08-22T07:28:13+05:30",
  "specVerdict": "SPEC COMPLIANCE PASS",
  "qualityVerdict": "QUALITY APPROVED"
}
```

SPEC COMPLIANCE PASS
QUALITY APPROVED

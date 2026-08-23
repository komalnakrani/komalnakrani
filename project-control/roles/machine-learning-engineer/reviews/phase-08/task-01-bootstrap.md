# Phase 08 Task 01 independent hostile bootstrap review

Review date: 2026-08-22  
Reviewer identity: `/root/mle_p8_bootstrap_review`  
Producer identity: `/root/mle_p8_bootstrap`  
Scope: activation implementation checkpoint
`c5a5357373c1f2f887a58be8f3d8b52825b1b444`; no production or external-state
mutation

## Immutable activation snapshot

- Approved plan checkpoint:
  `c9edc934e463dc2d8837244f2512d5d9fe8579e8`.
- Activation implementation checkpoint:
  `c5a5357373c1f2f887a58be8f3d8b52825b1b444`.
- Local `main`, `origin/main`, and live `refs/heads/main` all equal the
  activation checkpoint. The worktree was clean before this review file was
  created.
- The activation commit contains exactly six intended paths: ROLE, root issue,
  local Phase 08 issue, FACTORY, validator, and test. It excludes this review
  and every production path.
- Approved design SHA-256:
  `214248a9f1ee3a7fb83167483cc8fe547c753d7d157a878b4cdc6eaab6593557`.
- Approved plan SHA-256:
  `749917ab6663ef198d26c7b0d47ab97082bf94504c2eb46dc0962872995bee04`.
- Task 00 review SHA-256:
  `15e6246bf03f304d2e67cdcae3801258c531f9e427e63c3a64b5c38f1990f206`.
- Task 00 repair SHA-256:
  `e20b830667814f875f0d7340ef6ed451e3ee46d347aacb2fa2a76a69e3c55604`.
- Validator SHA-256:
  `139b27646db50d327c91730dffe6cc847589a4f6dd27e160de8ea61c3fc054e7`.
- Test SHA-256:
  `c02294627b7206043faeb98df822c522f4b02073c84abeaf07a562f3e47f2e33`.

The seven frozen Phase 07 input hashes independently equal the approved values:
`781b8650...454`, `d05d1466...3b6`, `42ec2b99...ae4`,
`ead317e3...37a`, `df7c39ef...ecb0`, `c8f2dff2...0bc4`, and
`98301e01...19a` in the exact plan order. All twenty-one chapter blueprint
bytes equal their Phase 07 verification bindings.

## Activation authorities and external state

| Authority | SHA-256 |
|---|---|
| `project-control/roles/machine-learning-engineer/ROLE-STATE.md` | `0235c1c72974aacf742ef77f0e88166dd847247e225c995e92b51f59e45380f3` |
| `project-control/roles/machine-learning-engineer/issues/root.md` | `46cee703bcfaa9408ce97861d03ff89220915d606ae4c1cf0f86395e9b6b57db` |
| `project-control/roles/machine-learning-engineer/issues/phase-08-manuscript.md` | `e659f755611682d53f7baa28d12a60868caa7c6876ab22cd673d80526a120c35` |
| `project-control/role-factory/FACTORY-STATE.md` | `28febff4c475c9bc8f0ac708938f1ce3d5b703d289f6ad0bdb1a7075834a1386` |

The four authorities project Phase 08 active under #85, Phase 09 inactive, and
catalog position 6 not started. Live #79 is OPEN with exact sorted labels
`role:machine-learning-engineer`, `status:in-progress`; its body byte-equals the
local root at `46cee703...b57db`. Live #84 is CLOSED with exact sorted labels
`phase:07-chapter-blueprints`, `role:machine-learning-engineer`, `status:done`.
Live #85 is OPEN with exact sorted labels `phase:08-manuscript`,
`role:machine-learning-engineer`, `status:in-progress`; its body byte-equals the
local Phase 08 issue at `e659f755...20c35`.

Filesystem reconstruction found zero manuscript, furniture, appendix,
companion, lane-manifest, final-verification, image, PDF, publication, course,
Abhyaas, second-volume, catalog-position-6, or next-role additions. The Phase
08 review inventory before this file contained only the accepted Task 00 base
review and repair.

## Reconstructed TDD and fresh GREEN evidence

The test file was projected by itself onto the approved plan checkpoint in a
detached temporary worktree, with the validator absent. Under Node `v22.23.1`,
the exact test command exited `1` with one test, zero passes, one failure,
`ERR_MODULE_NOT_FOUND`, and missing `validate-phase-08.mjs`. This independently
reconstructs the required genuine missing-implementation RED.

Both files pass `node --check`. The committed test suite exits zero at exactly
120 tests, 120 passes, zero failures, zero skipped, and zero todo. The real
bootstrap command exits zero with:

`PASS Phase 08 bootstrap: chapters=21; claims=63; sources=46; source-claim=160; cases=12; ports=5`

## Blocking findings

### P08-BOOT-001 — Later stages accept an entirely absent production package

The real production loader does not require any stage-specific production
inventory after bootstrap. Against the current repository, which correctly has
zero manuscript, furniture, appendix, companion, lane-manifest, integration,
or downstream review output, the real CLI nevertheless returned PASS for all
of `--stage=production`, `--stage=integration`, `--stage=pre-hostile`, and
`--stage=pre-close`. Therefore the executable gate can approve a nonexistent
book package.

Required repair: freeze exact required and forbidden path sets for every stage,
including lane and repair conditionality; make real-loader tests prove each
later stage rejects the current bootstrap-only filesystem; and require the
complete manuscript, furniture, companion, integration, and review inventories
at their first legal stages.

### P08-BOOT-002 — Real manuscript, companion, review, and verification bytes are never loaded or validated

`loadRepositorySnapshot` lists future production and review filenames but does
not read their bytes. `validatePhase08Snapshot` never invokes
`validateManuscriptChapter`, `validateCompanionBoundary`, or
`validateReviewRecord`; it never parses the manuscript register, companion
contracts/results, closed reviews, or final verification. Consequently an
allowed filename with arbitrary bytes, a self-approved or hash-false review,
an effectful companion, or a shallow manuscript cannot affect the real
repository verdict. The isolated helper unit tests do not close this loader
gap. In addition, `validateReviewRecord` only checks field presence and hash
shape; it does not compare `artifactBindings` or a repair hash to actual file
bytes.

Required repair: make the real loader read and parse every stage-legal artifact;
bind each review's exact task, identities, artifact paths/hashes, verdict,
conditional repair bytes, same-reviewer order, and acceptance state; invoke the
chapter and companion validators on the loaded package; and mutation-test the
real filesystem path from altered bytes to the intended error family.

### P08-BOOT-003 — Exact graph, teaching, truth, and effect contracts are not frozen

The register validator compares only a small chapter subset plus cardinalities.
It does not require exact source, case, architecture, lifecycle, section, lab,
assessment, visual, handoff, or reverse-edge equality, so count-preserving
substitutions can pass. The chapter helper accepts zero `Primary teaching`
placements because it rejects only duplicates, and its synthetic “realistic”
fixture is repeated filler plus token presence rather than a loaded chapter.
The companion helper trusts caller-supplied effect counters instead of
inspecting or executing the companion across five ports. Dossier continuity,
canonical output bytes, forbidden effects, and source/case authority truth are
therefore not executable production claims.

Required repair: add count-preserving mutation tests for every exact graph and
reverse edge; require exactly one primary teaching placement per claim; load
realistic filesystem fixtures with actual chapter/register/review/companion
shapes; and execute effect, path-escape, deterministic-byte, five-port, dossier,
and immutable-history probes through the production loader.

### P08-BOOT-004 — Committed leakage outside the private book tree becomes invisible

The stop-boundary validator examines only dirty Git paths supplied at runtime.
The real loader inventories the private book, Phase 08 review, and scratch
directories, but not public, output, publication, course, broader
project-control, or next-role roots. Once a prohibited image, PDF, publication,
course, Abhyaas, or next-role path is committed and the worktree becomes clean,
that path is absent from both inputs and cannot fail the gate. The unit test
injects synthetic dirty paths and therefore does not cover this committed-tree
escape.

Required repair: inventory the actual bounded repository roots or compare the
activation tree to each later tree with a closed allowlist. Add real-filesystem
mutations proving committed/clean leakage is detected independently of its
filename, nesting, or Git dirt state.

## Decision

The activation state, Git/GitHub projection, absence boundary, RED
reconstruction, syntax, and 120-test bootstrap run are valid. The executable
contract is not sufficient to authorize production because its later-stage
loader can pass no production at all and does not validate the future artifact
bytes it claims to gate. Preserve this failure, create
`task-01-bootstrap-repair.md`, harden the validator and tests test-first, commit
and push the replacement implementation without rewriting this review, then
return the replacement hashes and repair record to this same reviewer.

```json
{
  "taskId": "TASK-01",
  "producerIdentity": "/root/mle_p8_bootstrap",
  "reviewerIdentity": "/root/mle_p8_bootstrap_review",
  "reviewedAt": "2026-08-22T07:40:11+05:30",
  "artifactBindings": [
    {
      "path": "project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs",
      "sha256": "139b27646db50d327c91730dffe6cc847589a4f6dd27e160de8ea61c3fc054e7"
    },
    {
      "path": "project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.test.mjs",
      "sha256": "c02294627b7206043faeb98df822c522f4b02073c84abeaf07a562f3e47f2e33"
    },
    {
      "path": "project-control/roles/machine-learning-engineer/ROLE-STATE.md",
      "sha256": "0235c1c72974aacf742ef77f0e88166dd847247e225c995e92b51f59e45380f3"
    },
    {
      "path": "project-control/roles/machine-learning-engineer/issues/root.md",
      "sha256": "46cee703bcfaa9408ce97861d03ff89220915d606ae4c1cf0f86395e9b6b57db"
    },
    {
      "path": "project-control/roles/machine-learning-engineer/issues/phase-08-manuscript.md",
      "sha256": "e659f755611682d53f7baa28d12a60868caa7c6876ab22cd673d80526a120c35"
    },
    {
      "path": "project-control/role-factory/FACTORY-STATE.md",
      "sha256": "28febff4c475c9bc8f0ac708938f1ce3d5b703d289f6ad0bdb1a7075834a1386"
    }
  ],
  "priorVerdict": null,
  "repairPath": null,
  "repairSha256": null,
  "reacceptedBy": null,
  "reacceptedAt": null,
  "specVerdict": "SPEC COMPLIANCE FAIL",
  "qualityVerdict": "QUALITY CHANGES REQUESTED"
}
```

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED



## Same-reviewer re-review — 2026-08-22

Reviewer identity: `/root/mle_p8_bootstrap_review`

Replacement checkpoint:
`8cf1fce280ffd5932201d33470255c98bd6e3aba`

Failed-review checkpoint:
`5fc2420fb2a4ea4d82d0badcd6cafc6f5c272111`

### Replacement bindings

| Replacement artifact | SHA-256 |
|---|---|
| `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs` | `b97b840667bbca4f3d1b87e3b22d0b933eb75ba503ea0109d22e62f8b8083158` |
| `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.test.mjs` | `100abb784e8c883a886a70fd977e565abb92e9576ba60fa887dd1aa6ac82e271` |
| `project-control/roles/machine-learning-engineer/reviews/phase-08/task-01-bootstrap-repair.md` | `af015a17c20ec87d3352682375be0ae6d7137e17de71598a241da6493766d706` |

Local `main`, `origin/main`, and live remote `main` equal the replacement
checkpoint. Live #79 remains open/in-progress, #84 closed/done, and #85
open/in-progress with their exact accepted label sets. The filesystem still
contains zero manuscript, furniture, appendix, companion, lane-manifest,
final-verification, image, PDF, publication, course, Abhyaas, second-volume,
catalog-position-6, or next-role additions.

Node `v22.23.1` syntax checks pass. The replacement suite is exactly 167 tests,
167 passes, zero failures, zero skipped, and zero todo. The real current
bootstrap is PASS with lifecycle `repair-in-progress` and
`productionAuthorized=false`. The current bootstrap-only tree now correctly
fails production, integration, pre-hostile, and pre-close instead of approving
an absent package.

The claimed historical hardening RED is not independently bound by a committed
intermediate test identity. Running the final 167-test replacement suite
against the failed-review validator reconstructs 167 tests, 119 passes, and 48
failures, not the recorded 158/119/39. The nine-test delta is arithmetically
consistent with further tests added during repair, but no immutable 158-test
blob or SHA is supplied for exact reconstruction.

### Residual blocking findings

#### P08-BOOT-001 — Accepted bootstrap becomes illegal at its own stage

The later-stage absence defect is repaired, but bootstrap stage legality now
permits `task-01-bootstrap.md` only while `reviewIsFailed` is true. Appending a
same-reviewer PASS/APPROVED record makes that same path produce
`STAGE_PATH_FORBIDDEN`. Therefore the accepted bootstrap cannot pass the real
bootstrap CLI or prove the lifecycle gate that is supposed to authorize the
production lanes.

Required repair: make bootstrap accept exactly the Task 01 failed/repair-in-
progress chain before reacceptance and exactly the same base review plus its
bound repair and final accepted machine record afterward. Add a real-filesystem
test for the accepted-review state requiring zero errors,
`bootstrapLifecycle=accepted`, and `productionAuthorized=true`, while preserving
the current non-authorizing repair-in-progress test.

#### P08-BOOT-002 — Review identity and artifact sets remain path-unbound

The loader verifies hashes that a review chooses to list, but it derives the
expected identity from `record.taskId`, not from the review path. A record saved
as `task-02-lane-a.md` can claim `TASK-03` and the Lane B producer/reviewer and
pass. A production or integration review can also bind only the validator file
and omit every manuscript or furniture artifact it is required to review; the
helper returns zero errors because no exact per-task artifact set is frozen.

Required repair: map each base review path to one exact task ID, producer,
reviewer, required artifact set, and permitted conditional repair. Reject a
record whose task differs from its path, whose bindings omit or add paths, or
whose repair/prior-verdict semantics differ from the preserved base history.
Mutation-test these cases through the real loaded review path.

#### P08-BOOT-003 — The executed companion probe can approve real effects and does not prove the dossier

The probe asks the runner to self-report denial by throwing `EFFECT_DENIED`.
An independent hostile runner executed `/usr/bin/true` through
`node:child_process` and then threw `EFFECT_DENIED` for each mode; the probe
returned `errors: []`, `effectProbesDenied: 5`, and full success. The gate thus
proves a post-effect exception label, not effect freedom. It also exercises only
`BL-00`; it does not execute or validate `BL-00` through `BL-20`, previous-hash
continuity, legal dispositions/transitions, four reopen triggers, or immutable
earlier output bytes. The expected JSON loader checks only `milestoneId`.

Required repair: run the companion under enforceable or instrumented effect
guards that fail on attempted network, child process, environment-secret,
cloud/model, and unauthorized filesystem access even when the runner later
throws an approved code. Execute all five ports across the complete dossier and
negative-path sequence; compare exact canonical bytes/hashes, prior links,
dispositions, transitions, reopen triggers, and earlier-file immutability.

#### P08-BOOT-004 — The committed-clean inventory still omits prohibited roots

The new comparison inspects only `public`, `output`, two `content` subtrees,
`project-control/abhyaas`, and `project-control/roles`. The approved closed path
boundary also prohibits output under `assets`, `tools/screen-first-books`,
certification, and other publication/build surfaces. A later committed clean
file under `assets`, `tools`, `src`, `scripts`, `tests`, or `dist` is never
present in `repositoryInventory`, so it cannot reach
`STOP_BOUNDARY_COMMITTED`. The six new tests cover only the six scanned roots.

Required repair: compare the complete tracked tree at each later checkpoint to
the activation tree with the exact Phase 08 allowlist, or freeze every actual
repository root including all expressly prohibited paths. Add nested,
generic-name, committed-clean probes for each formerly unscanned family.

#### P08-BOOT-005 — The hardening RED identity is not reproducible

The repair record states an exact 158/119/39 RED but binds only the final
167-test SHA. The only reconstructible old-validator/new-test pairing is
167/119/48. A count without the exact intermediate test bytes cannot establish
which mutations produced the reported failures.

Required repair: bind an immutable intermediate hardening-test SHA and make its
exact bytes reproducible from tracked evidence, or revise the repair history to
the actually reconstructible 167/119/48 pairing. Preserve the original
missing-module RED separately.

### Re-review decision

The first repair materially improves stage inventory, byte loading, exact
frozen-register equality, and later-stage rejection. It does not yet close the
review-path identity contract, accepted-bootstrap lifecycle, real effect
boundary, complete dossier proof, or committed-tree boundary. Do not authorize
production. Append the next directed repair to
`task-01-bootstrap-repair.md`, harden validator/tests test-first, commit and
push replacement bytes without rewriting either historical failure, then
return to this same reviewer.

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED

## Same-reviewer final-iteration audit — 2026-08-22

Replacement checkpoint:
`7b37ffd064d2d9774cbde26f6c1fa64fda842f2f`

Replacement bindings:

- validator:
  `13f90d3f2f770e92047183f74224e9c1d02f01df9a647bde01aad09aeee1f323`
- tests:
  `b32055f94d9414e77ec880fe0fdad2f554121c33f2edb1e2b9d79f59b96a7c4d`
- repair record:
  `71afbdfbd2d36032a26542a01f33a67671661505f784241db8944363783c5eda`

Local `main`, `origin/main`, and live remote `main` equal the replacement
checkpoint. Node `v22.23.1` syntax checks pass. The final suite independently
returns exactly 192 tests, 192 passes, zero failures, zero skipped, and zero
todo. Its nested durable reconstruction executes the final test bytes against
the committed `8cf1fce...` validator and proves exactly 191 tests, 167 passes,
24 failures, zero skipped, and zero todo. The current repair-in-progress
bootstrap passes while remaining non-authorizing. The accepted-review
filesystem fixture passes with lifecycle `accepted`, authorization true, and
zero errors. Exact review path/task/identity/artifact-set checks and whole-tree
committed-clean additions now reject their covered mutations.

### Residual blocker — imported effects bypass the claimed enforceable guard

`P08-BOOT-003` remains open. `executeCompanionProbe` scans only the source bytes
of `companion/lib/run.mjs`; it neither traverses nor scans the runner's imported
modules and does not execute under a process, network, environment, or
filesystem sandbox. An independent hostile fixture put
`execFileSync('/usr/bin/true')` at module scope in a relative dependency and
imported that dependency from a lexically clean runner. The process effect ran
when the runner was imported. The probe still returned `errors: []`,
`effectProbesDenied: 5`, `dossierSteps: 21`, and `negativePaths: 105`.

The same execution loop does not prove dossier immutability. It passes the same
frozen `BL-ENTRY` history to all 105 positive calls, stores returned strings in
validator-owned arrays, and then compares those arrays to themselves. It never
passes the accumulated accepted records back to the runner, inventories the
caller target, or verifies that an earlier dossier file was not overwritten.
A runner can therefore mutate or replace earlier target files while returning
the expected envelope tokens. Expected JSON artifacts are still checked only
for `milestoneId`, not their canonical bytes, hashes, previous links,
dispositions, transitions, or immutable file identities.

Required repair: evaluate the complete closed companion module graph rather
than only `run.mjs`, and run the probe under enforceable effect controls so
import-time, indirect, aliased, and throw-after-effect attempts cannot execute.
Use a fresh real target outside the repository, persist the accepted chain,
pass the actual accumulated immutable history at each step, snapshot every
earlier file before and after positive/negative runs, and compare all 21
expected records to exact canonical bytes, hashes, previous links,
dispositions, transitions, and reopen evidence. Add mutations for an effect in
a relative imported module and for rewriting an earlier dossier file while
returning an otherwise valid envelope.

The lifecycle, review binding, full tracked-tree boundary, and reconstructible
RED findings are materially repaired. The explicit effect-free and immutable
dossier contract is not. Production remains unauthorized; preserve every prior
FAIL/CHANGES record, append the next repair iteration to the existing repair
record, and return the replacement pair to this same reviewer.

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED

## Terminal same-reviewer audit — 2026-08-22

Replacement checkpoint:
`fcc7ea243dd8cc62a09b3679baf02886b3a683b1`

Replacement bindings:

- validator:
  `0c58850f983b2c65c19f8bd6dcfed871ea3178d2a9c5cfd2d50f55dc3a496789`
- tests:
  `81210a75f34adbe317cb0873dfba42ab4aaacbccf417c1aa8e093b3c3d15b678`
- repair record:
  `b277b8b1e5f5b388cb2eff0d0da62be106956e12acba9e5ef661e5546c461379`

Local `main`, `origin/main`, and live remote `main` equal the replacement
checkpoint. The four authority hashes, frozen inputs, exact GitHub issue
states/labels/bodies, bootstrap absence inventory, later-stage rejection,
complete tracked-tree allowlist, exact review contracts, imported-effect
guards, and two real five-port `BL-00` through `BL-20` dossier chains all pass
their hostile probes. The real accepted-review simulation returns zero errors,
`bootstrapLifecycle=accepted`, and `productionAuthorized=true`. The terminal
repair RED independently reproduces at 200/191/9, the activation-hardening RED
at 200/167/33, and the pre-review direct suite passes 200/200 plus its 1/1
focused reconstruction gate under Node `v22.23.1`.

### P08-BOOT-006 — The bound suite fails after the review becomes accepted

The terminal acceptance record was appended with the exact validator, test,
authority, and repair hashes, then the real bootstrap and full direct test
command were rerun against that actual on-disk state. The real bootstrap passed
and classified the lifecycle as accepted, but the bound direct suite exited
`1`: exactly 200 tests, 198 passes, and 2 failures. Tests at lines 118-130 and
555-563 load the live `task-01-bootstrap.md` while unconditionally asserting
`bootstrapLifecycle=repair-in-progress` and
`productionAuthorized=false`. Once the required same-reviewer terminal record
makes the live lifecycle accepted, both assertions necessarily fail. The
separate copied accepted fixture does not repair these live-state assertions.
Therefore the claimed final 200/200 contract is not true of the terminal
accepted repository state, and the review cannot honestly bind approval.

Required repair: make the preserved failed-history test load an immutable
failed-review fixture rather than the mutable live base review. Make the live
repository test assert the lifecycle implied by the actual terminal record,
including accepted/authorizing after reacceptance, while retaining a separate
real-filesystem repair-in-progress fixture that proves non-authorization.
Commit and push the replacement test bytes, append the new exact test hash and
RED/GREEN evidence to the repair record, and return to this same reviewer. The
terminal state must pass the real bootstrap and the complete direct suite after
the acceptance record exists; pre-acceptance GREEN is insufficient.

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED

## Terminal same-reviewer re-review — 2026-08-23

Replacement checkpoint:
`53cd464e4c83449ca7d472aa3fce57f62879159a`

Replacement bindings:

- validator:
  `0c58850f983b2c65c19f8bd6dcfed871ea3178d2a9c5cfd2d50f55dc3a496789`
- tests:
  `24918a6ddbff2e3235b92b8bf9d285c3b850b15400dd46a2b6060001c4b1cfbc`
- repair record:
  `9065af0b56b36be30e6a64fafa4aae798930a2ada1a8f0606fc788ba5a7df79e`

P08-BOOT-006 is materially repaired. The failed-history fixture loads the
exact review bytes from `5fc2420fb2a4ea4d82d0badcd6cafc6f5c272111` and
verifies SHA-256
`f5956762f9db538c9d57039779f331114f60945ec0fd81032ca64427bbd6bcd1`.
The live test derives its lifecycle from the actual terminal verdict. The
accepted-review simulation binds the current validator, test, and repair bytes
and returns zero errors, `bootstrapLifecycle=accepted`, and
`productionAuthorized=true`. With an actual accepted machine record appended
to this real base review, syntax and the real bootstrap pass and the direct
suite remains exactly 200/200. All companion isolation, imported/throw-after-
effect detection, full five-port two-chain dossier, canonical-byte, immutable-
history, complete tracked-tree, review-binding, stage, authority, Git/GitHub,
and no-production findings remain closed.

### P08-BOOT-007 — Historical reconstruction still depends on the live terminal verdict

The focused reconstruction gate is not terminal-state stable. Before the
accepted record exists, the aggregate suite passes 201/201 and the nested final
tests against validator checkpoint `8cf1fce...` reproduce 200 tests, 167 passes,
and 33 failures. After appending the exact accepted machine record, the real
bootstrap and direct 200-test suite still pass, but the nested reconstruction
changes to 200 tests, 166 passes, and 34 failures. Its outer assertion still
requires 200/167/33, so the focused gate fails 0/1 and the aggregate suite exits
`1` at 200 passes and 1 failure. The nested test copies only the historical
validator and current test bytes; those tests retain the absolute live
repository path, so one historical-validator expectation continues to observe
the mutable accepted base review.

Required repair: make the embedded historical reconstruction execute against a
complete immutable historical repository/review fixture rather than the live
base review, or explicitly inject the pinned failed review and every other
historical state input into the nested run. Preserve the exact reconstructible
200/167/33 result independently of whether the live review is failed,
repair-in-progress, or accepted. Commit and push the replacement test, append
its exact identity and RED/GREEN evidence to the repair record, and return to
this same reviewer. Acceptance requires the real appended terminal record to
leave syntax, real bootstrap, direct 200/200, and focused reconstruction 1/1
all green in the same on-disk state.

SPEC COMPLIANCE FAIL
QUALITY CHANGES REQUESTED

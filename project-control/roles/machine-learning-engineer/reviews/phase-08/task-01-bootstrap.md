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

# Phase 07 Task 10 Hostile Integration Repair Record

## Trigger and boundary

The first hostile integration review evaluated the complete Phase 07
blueprint package with validator SHA-256
`39e017b58ad48b218fac431ca67597d14f0d96a7e39f3b6c72bac7ae8ea29198`
and test SHA-256
`4e9ad56957cc071012501f6623eb6435b471247409fd7508f334a3b6fd2ca234`.
It found no blueprint-content defect, but returned `SPEC COMPLIANCE FAIL` and
`QUALITY CHANGES REQUESTED` in review SHA-256
`a6e51082012bff61c1c79a3d505feaac3c32094409c31dedffb70a6b9f1547d3`.

This repair is therefore limited to the Phase 07 validator/test contract and
the directed review bindings that depend on those files. The blueprint
register, twenty-one chapter blueprints, whole-book furniture, verification
report, Phase 08 handoff, frozen inputs, lane reviews, state files, issues,
Git, and GitHub were not rewritten by the repair.

After the repair, the root-owned checkpoint-1 `git diff --check` found one
extra blank EOF line in the register, Chapters 15–21, furniture, report, and
handoff. Root removed exactly that one final LF from each file and changed no
semantic content. The Lane C manifest was refreshed, and independent Lane C
and Task 09 reviews proved the old bytes equal the current bytes plus exactly
one LF, all projections and counts remain identical, and the complete package
still passes. The same Task 10 reviewer must bind these normalized current
bytes rather than the pre-normalization identities.

## Replacement identities

- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.mjs`
  SHA-256:
  `7d196ba5c25e5270ae50da791848a3fefb3a5108dfa051c21337bdd8a893e4ae`
- `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-07.test.mjs`
  SHA-256:
  `5117fc9769c54ad4a8a2d74f472199d51c7a5e3ee220cdaac3f9a8b4f4c4b460`
- Reaccepted Task 09 canonical-integration review SHA-256:
  `b217068cd2d356aefe1befdc8a8dcd6aebbfe04e7343fc47130b36c8600f8cd8`
- Reaccepted Lane C review SHA-256:
  `0727825a59042ac63077b6ec18b1c507e04da167cd2842c74bbf0e6d123540ce`
- Refreshed ignored Lane C manifest SHA-256:
  `f10b263d7bc1f1150f58465c8e0255059134678a07661d25c0aa1a4a28d9e31b`

## Finding dispositions

### Finding 1 — independent pre-close package digest

Closed. The validator now derives the Task 10 pre-close package digest from
the ordered current pre-close inventory and its file SHA-256 values. It does
not seed the expected digest from the review under validation. The mutation
suite rejects an all-zero digest, a self-consistent false digest, and stale
package identity after a bound path changes. Path-boundary errors take
precedence when an unexpected path is introduced, so an invalid package
cannot hide behind a secondary digest mismatch.

### Finding 2 — executable active-stage Git lifecycle

Closed. `pre-hostile` and `pre-close` retain the approved active-phase
requirement that local `HEAD` equals `origin/main`, while accepting only the
exact bounded Phase 07 package additions that must exist before Task 11's
checkpoint-1 commit. Any unrelated modification, deletion, rename,
untracked path, or symlink fails. Final closure still requires a clean,
synchronized repository. Filesystem-realistic temporary-repository tests
exercise both allowed active dirt and rejected unrelated dirt.

A first lifecycle repair remained incomplete because its expected active
inventory excluded declared `*-repair.md` records and its dirty projection
treated the already-tracked Task 01 review as new while omitting the modified
validator/test pair. The final repair models the actual `d50a07d` activation
baseline: plan, local Phase 07 issue, and Task 01 review remain clean;
validator/test plus every stage-specific package, review, and declared repair
addition are dirty. It also parses Git porcelain without trimming the leading
status columns from the first record. A valid historical Task 10 failure with
its directed repair now passes pre-close, while missing, orphan, stale, extra,
or unrelated records still fail.

### Finding 3 — exact chapter Markdown structure

Closed. Markdown validation parses content outside fenced projection blocks
and requires the exact seventeen H2 sequence with no extra, duplicate, or
reordered H2. The three structural grammar headings `Bench Setup`,
`Bench Sheet`, and `Qualification Gate` must occur as H3 headings in their
approved order. The remaining Bench Sheet grammar labels `state and dossier
delta`, `authority route`, and `next evidence` must occur as visible row
labels and cannot masquerade as H3 headings. Unrelated case-specific H3
headings remain permitted by the accepted blueprint contract. Mutations cover
an eighteenth H2, duplicate/reordered H2, missing structural headings, and
labels moved into the wrong structural role.

### Finding 4 — exact report and Phase 08 handoff semantics

Closed. The validator now checks the approved verification-report and Phase
08-handoff identities and obligations against the canonical package rather
than accepting a few free-floating phrases. Mutations reject drift in chapter
counts, seams, evidence totals, visual/furniture obligations, writer-facing
handoff identity, inactive Phase 08 status, and the stop boundary. The
accepted report and handoff bytes did not require revision.

## Test-first evidence

- Hostile hardening RED against validator
  `39e017b58ad48b218fac431ca67597d14f0d96a7e39f3b6c72bac7ae8ea29198`
  and test
  `aeea75ede0f968c3d97c6868532e4000a1b905d6bc3b858f268036eab77c8c2c`:
  exactly 220 tests, 217 pass, 3 fail. The three failing direct aggregates
  covered active-stage dirty paths, exact chapter/report/handoff semantics,
  and independent Task 10 package identity.
- A subsequent real-package audit proved that one synthetic test expectation
  was stricter than the approved blueprint grammar. The test fixture was
  repaired to use the actual approved register, chapter, furniture, report,
  and handoff bytes, preserve exactly 220 tests, require the exact seventeen
  H2 headings, and distinguish the three structural H3 headings from allowed
  case-specific H3 headings.
- Contract-repair RED against the intermediate validator: exactly 220 tests,
  215 pass, 5 fail, led by `CHAPTER_MARKDOWN_CONTRACT` on the approved real
  package with downstream baseline cascades.
- Historical-repair lifecycle RED against validator
  `9ff6d4a2b367e01d6f6c4ecf4fba9cdb3f24d02ad3f7204fbf6c2017a975ff58`
  and frozen test
  `5117fc9769c54ad4a8a2d74f472199d51c7a5e3ee220cdaac3f9a8b4f4c4b460`:
  exactly 220 tests, 218 pass, 2 fail. One failure proved a valid declared
  Task 10 repair was rejected by `PATH_BOUNDARY`; the other proved the first
  modified validator path was corrupted by whole-output porcelain trimming.
- Final GREEN: exactly 220 tests, 220 pass, 0 fail, 0 skipped, and 0 todo.
- `node --check` passed for both replacement files.
- Phase 01 validation and 42/42 tests passed.
- Phase 04 validation and 30/30 tests passed.
- Addition-aware whitespace/EOF checks and `git diff --check` passed.
- The independently refreshed Task 09 review reconstructed the full package
  with zero findings and accepted the replacement validator/test identities.

## Reapproval requirement

This implementer repair record is not acceptance. The same independent Task
10 hostile reviewer must verify the replacement identities, the current Task
09 review, this repair file, the semantically unchanged EOF-normalized
package, the active-stage
lifecycle, temporal Phase 05/06 evidence, full repository gates, and every
original hostile finding. The reviewer must preserve the historical failure
and append the exact terminal verdicts only if no blocker remains.

The repair record intentionally does not contain the future updated Task 10
review hash, avoiding a reverse-hash cycle. No final verification, state
transition, commit, push, GitHub closure, Phase 08 activation, manuscript,
asset, publication, course, Abhyaas, second-volume, catalog-position-6, or
next-role work is authorized by this record.

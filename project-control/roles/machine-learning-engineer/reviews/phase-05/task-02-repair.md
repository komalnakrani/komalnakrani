# Phase 05 Task 02 Core Architecture Repair Record

## Trigger

The first independent review at `task-02-core-architecture.md` reviewed
Markdown SHA `6c011f46b64eb2ea84b7d9447535aaf2ab53a4e05046afd9c7c0e9c481b2f678`
and JSON SHA `c7ade9ec8a3396c09ee77b924fae8040577e3b440444a9453dcb900b6798f1f5`.
It returned `SPEC COMPLIANCE FAIL` and `QUALITY CHANGES REQUESTED` with seven
findings. This record does not supersede that evidence; it binds the repairs to
replacement file identities for same-reviewer re-review.

## Replacement identities

- Markdown SHA-256: `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`
- JSON SHA-256: `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`

## Finding dispositions

1. **Accepted semantics reduced to IDs — repaired.** Added exact accepted
   machine-readable cluster, claim, boundary, scenario, publication,
   non-duplication, reservation, and creative-policy records. Exact Phase 04
   claim equality passes; boundary and scenario equality passes after removing
   only their new explicit `result: PASS` field.
2. **Premature lifecycle transitions — repaired.** Chapters 4–5 remain
   `CONTRACTED`, Chapter 6 reaches `ADMISSIBLE`; Chapter 7 remains
   `ADMISSIBLE`, Chapter 8 reaches `RECONSTRUCTIBLE`; Chapters 13–14 remain
   `TECHNICALLY-QUALIFIED`, Chapter 15 reaches `RELEASABLE`.
3. **Generic chapter-existence verdict — repaired.** All 21 chapters carry ten
   named ND results, five explicit publication comparisons, exact boundary
   results, and exact scenario results with authority owners.
4. **Markdown/JSON asymmetry — repaired.** Markdown now projects every frozen
   JSON string leaf, including all chapter fields, 40 context tests, 35 part
   exits, cases, lifecycle, semantics, domains, ports, conventions, furniture,
   companion, visual, and Phase 06 records.
5. **Terminology/conventions absent — repaired.** Added ten terms plus explicit
   ID, cross-reference, artifact identity, supersession, version, Phase 06,
   and companion binding rules.
6. **SCN-08 mapping drift — repaired.** Chapter 6 is present and every scenario
   map exactly equals its chapter-record union.
7. **Non-reproducible report — repaired.** The ignored implementer report now
   binds accepted inputs and final outputs, names every semantic gate, records
   actual output, and includes exact hygiene commands.

## Additional hostile-audit dispositions

- Removed the obsolete `chapterExistenceSummary` rather than preserving its
  generic pre-repair verdict. The executable `chapterExistence` matrices are
  now the sole canonical chapter-existence evidence.
- Added the exact guardrail rule to Markdown and expanded the runnable
  projection audit from an allowlisted subset to every JSON top-level field.
- Reconciled each cluster's accepted-claim array to the exact inverse of all 22
  claim `retained_clusters` mappings, adding eight previously omitted edges.
- Added evidence-compatible secondary clusters to Chapters 4, 9, 18, and 19
  so every cited claim and boundary belongs to at least one declared chapter
  cluster. No accepted trace was deleted.

## Root verification

- Counts: 7 parts, 21 chapters, 21 unique milestones, 12 domains, 5 ports, 40
  context tests, 35 part-exit checks, 5 cases, 10 scenario maps, 21 chapter
  existence records.
- Accepted semantics: 8 clusters, 22 claims, 17 boundaries, 10 scenarios, 5
  publications, 10 ND tests, 11 reservations, 14 creative policies.
- Phase 04 semantic equality: PASS.
- Legal chapter lifecycle and milestone timing: PASS.
- ND/PUB/BND/SCN chapter evidence and authority equality: PASS.
- Markdown frozen-string projection: zero missing leaves.
- JSON parse, marker scan, trailing whitespace, CR, exact EOF, and
  `git diff --check`: PASS.

This is an implementer repair record, not acceptance. Tasks 3–5 remain blocked
until the same independent reviewer verifies these replacement hashes and
returns both required approval verdicts.

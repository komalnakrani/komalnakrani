# [PHASE 09] QA the complete Applied AI Engineering book

Parent: #21

Depends on: Phase 08 parent #27 accepted and closed

## Scope

Run hostile full-book QA across all 21 chapters, 118 claims, 55 sources, 42 figures, learning/state/QA records, and the complete Patchwork companion/dossier. Fix only evidence-backed, role-local defects discovered.

## Required checks

- [x] chapter order, cross-chapter continuity, terminology, originality, depth, and duplication
- [x] claim-to-source resolution, source limitations/currentness, and bounded case use
- [x] figure IDs/files/dimensions/alt/captions/evidence role; PNG only with ImageGen provenance
- [x] all illustrative values and fictional Patchwork outcomes explicitly bounded
- [x] behavior/authority/adjacent-role boundaries and no hidden autonomous effects
- [x] companion schema/fixture/version/hash continuity and all 109 tests
- [x] publication validation, all repository tests, Astro build, local references, and `git diff --check`

## Verification result

`PASS` on 2026-08-16. The durable evidence is in `project-control/roles/applied-ai-engineer/qa/phase-09-verification.md`.

- 21 chapters, 133,981 words, all inside frozen blueprint ranges
- 118 claims and 55 sources with reconciled forward/reverse traceability
- 42 ImageGen PNG figures with two anchors per chapter, matching MIME/dimensions/provenance and byte-identical public mirrors
- 21 learning/state/immediate-QA sets
- 59-file provider-neutral companion, 18 parseable JSON files, 109/109 passing tests
- deterministic runner output: 17 byte-identical lines, SHA-256 `75a4c9eae03de5c2026deee99ab28812293c8300558ed5e5c87edec4a7aba2c3`
- no blocking residual; draft publication/appendix/PDF assembly remains later-phase work

## Exit

Produce a durable Phase 09 verification report with exact counts, residual limitations, and a `PASS` or blocking disposition. Do not enter Abhyaas, create new artwork, publish the draft, or mutate other roles/shared factory/GitHub.

Exit satisfied locally. Root acceptance and GitHub issue closure remain intentionally outside this task's mutation scope.

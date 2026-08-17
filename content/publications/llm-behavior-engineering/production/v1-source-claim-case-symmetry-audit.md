# LLM Behavior Engineering V1 Source, Claim, and Case Symmetry Audit

Date: 2026-08-17

Status: **PASS**

## Purpose

This audit prevents forward chapter records from drifting away from their
reverse source, claim, and case indexes. It is limited to the sixteen accepted
chapters of *LLM Behavior Engineering* Volume 1.

Executable audit:

`node content/publications/llm-behavior-engineering/production/audit-v1-source-claim-case-symmetry.mjs`

## Checked invariants

- Production batches contain exactly one record for Chapters V1-01 through
  V1-16, with no duplicate chapter number or slug.
- Each chapter's MDX `sourceIds` exactly matches the reverse chapter links in
  `sources.json`.
- Each publication claim's `sourceIds` exactly matches the reverse claim links
  in `sources.json`, and every claim source is declared by its chapter.
- Each chapter's MDX `claimIds` exactly matches `claims.json` and the production
  record's `productionId` values.
- Each production `acceptedId` exactly matches the role-local accepted claim
  register for the same V1 chapter.
- Every production `caseId` exists in the case-study register and includes the
  chapter in its reverse `chapter_ids` mapping. The case register may retain
  additional research-planning chapter links; the production-to-register link
  must never be missing.

## Red-green regression evidence

The first audit run failed with exactly three missing case reverse mappings:

- V1-01 -> `LLME-CASE-014`
- V1-02 -> `LLME-CASE-014`
- V1-13 -> `LLME-CASE-006`

The case-study register was repaired by inserting those chapter IDs while
preserving every existing mapping and its relative order. The second audit run
passed with no errors.

## Passing inventory

| Check | Result |
|---|---:|
| V1 chapters | 16 |
| Production batches | 6 |
| Publication source records | 43 |
| Publication claim records | 48 |
| Source-to-chapter links | 99 |
| Source-to-claim links | 117 |
| Production claim links | 48 |
| Production case links | 19 |
| Audit errors | 0 |

## Boundary

This repair changes only the reverse case mapping and adds this durable audit.
It does not change manuscripts, figures, asset manifests, publication state,
other roles, Git history, or GitHub state.

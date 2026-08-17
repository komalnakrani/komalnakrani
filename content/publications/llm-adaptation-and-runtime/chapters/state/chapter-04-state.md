# Chapter 4 State - Specify the Data Recipe

- Status: complete manuscript draft; immediate QA recorded separately.
- Mosaic milestone: `MD-10` opened from accepted `MD-09`.
- Production claims: `CLM-010` through `CLM-012` map exactly to `V2-C04-CL01` through `V2-C04-CL03`.
- Bounded cases: `LLME-CASE-006`, `LLME-CASE-007`, and `LLME-CASE-008`, used for documented data-pipeline, multilingual, and staged-recipe patterns only.
- Visual gate: complete; 2/2 ready accepted ImageGen PNGs: `V2-F04.1`, `V2-F04.2`.
- Record boundary: This chapter-state record does not assert publication or runtime behavior.
- Companion: authority-aware data recipe plus deterministic validator; four Chapter 4 tests.

## Locked decisions

The recipe uses synthetic fixtures only, preserves the MD-09 no-training boundary, maps records to behavior clauses, treats mixtures as hypotheses, and rejects `production-export-convenient.csv` for missing authority/retention, personal data, and holdout overlap. Documentation grants no rights.

## Outgoing handoff

Chapter 5 receives `MD10-RECIPE-001` at `recipe-specified-data-gate-pending`. It may execute curation on synthetic fixtures but may not acquire real customer data or train.

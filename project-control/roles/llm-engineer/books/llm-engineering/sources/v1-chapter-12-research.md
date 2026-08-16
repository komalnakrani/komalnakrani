# V1 Chapter 12 Research Pack — Evaluate Retrieval and Generation Together

## Frozen identity

- Milestone: MD-06.
- Purpose: diagnose retrieval and answer failures without collapsing them into one score.
- Reader outcome: design component and end-to-end measurements with traceable evidence.

## Evidence and claims

`V1-C12-CL01` (`LLME-BSRC-019`, `020`, `022`, `025`) supports measuring retrieval and generation as linked but distinct components. `V1-C12-CL02` (`024`, `025`) supports metric choice by failure question rather than convenience. `V1-C12-CL03` (`008`, `025`, `026`) supports human review and explicit limits for faithfulness and domain-sensitive judgment.

The diagnostic matrix should distinguish: relevant evidence absent, relevant evidence ranked too low, wrong evidence authorized, relevant evidence ignored, unsupported synthesis, citation mismatch, and correct abstention. Automated RAG metrics are indicators, not ground truth.

## Mosaic Desk evaluation

Use the Chapter 10 corpus and Chapter 11 provenance bundle. Failure injection pairs a correct retrieved passage with an unsupported answer, then an incorrect retrieval with a cautious abstention. This demonstrates why answer-only scoring confounds causes. Apply `LLME-CASE-003` and `004`; record case-level traces and adjudication notes.

## Limits and disputes

- RAGAS and similar frameworks rely on metric models and assumptions that require calibration.
- Retrieval metrics require relevance labels whose granularity and annotator agreement matter.
- “Faithfulness” does not establish correctness if the source is wrong.
- Domain experts adjudicate source correctness; the engineer owns trace collection and measurement integrity.

## Phase 07 blueprint handoff

Blueprint the failure matrix, metric selection worksheet, and paired diagnostic exercise. Claims: `V1-C12-CL01..03`; sources: `008`, `019`, `020`, `022`, `024–026`; cases: `003`, `004`. Figures: two-stage diagnostic grid and metric-to-question map. Non-scope: universal score thresholds or automated-judge authority.

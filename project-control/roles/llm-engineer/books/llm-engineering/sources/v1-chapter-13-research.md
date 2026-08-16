# V1 Chapter 13 Research Pack — Build Representative Evaluation Cases

## Frozen identity

- Milestone: MD-06.
- Purpose: build an evaluation set that reflects intended use, meaningful slices, edges, and abuse.
- Reader outcome: document case provenance, sampling logic, labels, splits, and coverage limits.

## Evidence and claims

`V1-C13-CL01` (`LLME-BSRC-009`, `010`, `036`) supports representative intended-use cases plus traceable data documentation. `V1-C13-CL02` (`035`, `034`) supports deduplication and contamination controls. `V1-C13-CL03` (`037`, `009`) supports reporting language and subgroup slices rather than only aggregates.

A durable case record includes scenario, input provenance, expected properties, prohibited outcomes, rubric, slice tags, difficulty, annotator/adjudicator, split, and known ambiguity. Public benchmarks are supplements, not substitutes for task evidence.

## Mosaic Desk case design

Sample short/long threads, code-switched language, attachments referenced but absent, conflicting dates, policy questions, sensitive data, prompt injection, and no-action cases. Failure injection: near-duplicate customer threads leak from development into the holdout. Use `LLME-CASE-006` for data-pipeline documentation and `007` for multilingual stratification, without importing corpus-scale methods mechanically.

## Limits and authority

- “Representative” is a reasoned sampling claim, not statistical proof without a defined population.
- Synthetic cases can expand coverage but may repeat model blind spots and must be labeled.
- Domain experts author/adjudicate domain correctness; privacy owners authorize data use.
- Evaluation data must not silently become training data.

## Phase 07 blueprint handoff

Teach case schema, slice matrix, deduplication, split integrity, and dataset card. Skill check: repair a biased case inventory. Sources: `009`, `010`, `034–037`; cases: `006`, `007`. Figures: evaluation mosaic and leakage barrier. Non-scope: production data collection implementation or fairness certification.

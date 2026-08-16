# V1 Chapter 14 Research Pack — Name Errors and Judgment Methods

## Frozen identity

- Milestone: MD-06.
- Purpose: create a failure taxonomy and match each quality question to an appropriate judge.
- Reader outcome: combine deterministic checks, human rubrics, model graders, and adjudication with calibrated limits.

## Evidence and claims

`V1-C14-CL01` (`LLME-BSRC-009`, `011`, `031`) supports explicit error categories and risk-linked evaluation. `V1-C14-CL02` (`028`, `030`) supports preference/reward evidence as criterion- and data-dependent. `V1-C14-CL03` (`027`, `029`, `032`, `033`) supports calibrating model judges for position, verbosity, self-preference, and rubric sensitivity.

Use `LLME-CASE-005` as the central bounded case. Durable principle: the judge is another measurement instrument. Current judge models and grader APIs are volatile; store their versions, prompts, and order randomization.

## Mosaic Desk taxonomy

Classify omission, unsupported claim, wrong action, wrong evidence, stale-source use, unsafe disclosure, tone defect, schema failure, latency failure, and appropriate abstention. Failure injection: two semantically equivalent drafts differ in length and order; a model judge prefers the verbose or first response. Compare deterministic validators, blinded human review, and randomized model grading.

## Limits and disputes

- Human judgment is not automatically objective; rubrics, training, and agreement matter.
- Reward-model or judge scores are proxies, not user benefit or safety.
- Automated graders should not adjudicate high-stakes domain correctness alone.
- Phase 07 must distinguish metric uncertainty from model uncertainty.

## Phase 07 blueprint handoff

Blueprint the taxonomy workshop, judge selection table, calibration set, and disagreement protocol. Claims: `V1-C14-CL01..03`; sources: `009`, `011`, `027–033`; case: `005`. Figures: error tree and judge calibration balance. Non-scope: crowdsourcing operations, domain-policy verdicts, or a universal grader threshold.

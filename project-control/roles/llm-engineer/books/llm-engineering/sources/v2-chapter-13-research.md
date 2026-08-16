# V2 Chapter 13 Research Pack — Decide on Distillation or Continued Pretraining

## Frozen identity

- Milestone: MD-13.
- Purpose: distinguish behavior transfer from domain/language distribution adaptation and justify either escalation.
- Reader outcome: write a decision record with teacher/data authority, retention controls, and compute/quality evidence.

## Evidence and claims

`V2-C13-CL01` (`LLME-BSRC-046`, `047`) supports distillation as teacher-to-student transfer under task- and capacity-dependent limits. `V2-C13-CL02` (`048`, `034`) supports continued pretraining when the evidence points to distributional language/knowledge gaps, with documented corpus risks. `V2-C13-CL03` (`005`, `009`, `039`) supports comparing candidate behavior and cost rather than assuming scale or stage guarantees.

## Mosaic Desk decision

Diagnose whether the remaining gap is latency/capacity, task format, or domain-language representation. Failure injection: continued pretraining is proposed to memorize frequently changing policy that belongs in retrieval; alternatively, a teacher generates fluent but unsupported distillation targets. Use evidence-linked examples and independent holdouts.

## Limits and authority

- Distillation can transfer teacher errors and cannot guarantee capability preservation.
- Continued pretraining raises data rights, contamination, forgetting, and compute concerns.
- Domain/legal/privacy authorities approve corpus use; the engineer owns method fit and measured outcomes.
- Published scaling relations are descriptive under studied regimes, not a Mosaic Desk forecast.

## Phase 07 blueprint handoff

Blueprint a three-way decision: no escalation, distill, or continue pretraining; include data/teacher gates and retention evidence. Sources: `005`, `009`, `034`, `039`, `046–048`; cases: `006`, `008`. Figures: forked adaptation path and teacher-error echo. Non-scope: collecting a new pretraining corpus.

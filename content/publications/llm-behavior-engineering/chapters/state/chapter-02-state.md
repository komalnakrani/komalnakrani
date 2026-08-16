# Chapter 02 State - Write the Language-Task Contract

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-01` complete at task-contract version 0.2.0.
- Dossier artifacts: task sentence, six behavior states, twelve clauses, segment matrix, non-goals, prohibited effects, judgment/authority map, uncalibrated-threshold marker.
- Production claims: `CLM-004` through `CLM-006` map exactly to `V1-C02-CL01` through `V1-C02-CL03`.
- Bounded case: `LLME-CASE-014`, used only as a constructed adversarial pattern.
- Figure anchors: `V1-F02.1`, `V1-F02.2`; assets pending root ImageGen production.
- Companion: `mosaic-language-task-contract.json`; four Chapter 2 tests.

## Locked terminology

Language-task contract, input, semantic output, consequence, quality dimension, required, uncertain, abstain, escalate, degraded, prohibited, criterion, judge, segment, non-goal, prohibited effect.

## Locked decisions

- The task produces proposals for authorized review, not effects.
- Criteria precede thresholds; current thresholds remain `calibrate after representative baseline`.
- English, Gujarati, Gujarati-English code-switching, evidence conflict, and safety-critical ambiguity are explicit slices, not claims of complete coverage.
- Human review is a designed evidence/interface/workload/competence/authority relationship, not a safety guarantee.

## Non-repeat instruction

Later chapters consume the six states and twelve clauses. They may refine criteria with evidence but must not collapse them into success/failure or replace them with provider policy.

## Open assumptions handed to Chapter 3

- Token and template consequences have not been measured for any real candidate.
- The segment matrix is a requirement, not evidence of candidate capability.
- Structured syntax, retrieval, and production budgets remain later work.

## Exact next chapter action

Build the mechanism-consequence sheet for tokens, templates, attention-based contextual computation, next-token scores, decoding, and finite context without anthropomorphism or model selection.

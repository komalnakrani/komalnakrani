# V2 Chapter 6 Research Pack — Build Instruction and Demonstration Data

## Frozen identity

- Milestone: MD-11.
- Purpose: encode desired task behavior in auditable instruction-response examples.
- Reader outcome: design example schemas, quality rubrics, language coverage, and generation/review controls.

## Evidence and claims

`V2-C06-CL01` (`LLME-BSRC-006`, `037`, `039`) supports instruction data as behavior-shaping evidence with explicit coverage. `V2-C06-CL02` (`015`, `040`) supports rendering examples through the exact training chat template. `V2-C06-CL03` (`008`, `039`) supports safety, provenance, and rejected/abstention examples.

## Mosaic Desk dataset

Each record carries task intent, authorized input, target summary/actions, evidence links, abstention state, language/slice, provenance, author/reviewer, and template revision. Failure injection: polished synthetic answers cite facts absent from the email. Require evidence checks and mark synthetic origin. Use `LLME-CASE-007` and `008` for multilingual and staged-recipe lessons.

## Limits and authority

- Demonstrations teach patterns, not guaranteed rules.
- Synthetic generation can amplify the base model's style and blind spots.
- Domain reviewers establish correctness; engineers own schema, sampling, traceability, and measured effects.
- Template mismatches can train control tokens as content.

## Phase 07 blueprint handoff

Blueprint record schema, author/review workflow, evidence validation, and template rendering test. Sources: `006`, `008`, `015`, `037`, `039`, `040`; cases: `007`, `008`. Figures: example anatomy and synthetic-data review loop. Non-scope: manuscript examples presented as production data.

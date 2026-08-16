# V2 Chapter 2 Research Pack — Inspect the Model and Tokenizer Boundary

## Frozen identity

- Milestone: MD-09.
- Purpose: inspect weights/config/tokenizer/template compatibility before data or training decisions.
- Reader outcome: build an artifact-compatibility record and detect silent boundary changes.

## Evidence and claims

`V2-C02-CL01` (`LLME-BSRC-001`, `002`, `015`, `051`) supports treating architecture, tokenizer, chat template, dtype, and runtime as linked. `V2-C02-CL02` (`002`, `003`, `037`) supports measuring tokenization across languages and task formats. `V2-C02-CL03` (`001`, `016`, `054`) connects sequence length to attention and memory pressure without promising a single formula for every architecture.

## Mosaic Desk investigation

Inspect special tokens, padding side, end-of-sequence behavior, chat template, vocabulary coverage, maximum positions, dtype, and license/model card. Failure injection: training examples are rendered with a template different from serving, or a pad token is misconfigured. Compare English and Hindi-English token traces.

## Limits and authority

- Config files document intended compatibility but must be verified in the actual runtime.
- Tokenizer fertility is not a complete quality measure.
- License interpretation belongs to legal authority; the engineer records artifact facts and restrictions.
- Use `LLME-CASE-001` only for the foundational mechanism boundary.

## Phase 07 blueprint handoff

Blueprint an artifact inspection checklist, template round-trip test, and multilingual token audit. Sources: `001–003`, `015`, `016`, `037`, `051`, `054`; case: `001`. Figures: artifact compatibility lock and template mismatch. Non-scope: legal conclusions, training, or inference tuning.

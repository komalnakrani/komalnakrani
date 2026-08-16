# Chapter 2 State - Inspect the Model and Tokenizer Boundary

- Status: complete manuscript draft; immediate QA recorded separately.
- Mosaic milestone: `MD-09` artifact compatibility audit complete; milestone remains open.
- Production claims: `CLM-004` through `CLM-006` map exactly to `V2-C02-CL01` through `V2-C02-CL03`.
- Bounded case: `LLME-CASE-001`, used only for foundational Transformer mechanisms and historic limits.
- Figure anchors: `V2-F02.1`, `V2-F02.2`; assets pending root ImageGen.
- Companion: model/tokenizer inspection fixture plus deterministic validator; four Chapter 2 tests.

## Locked decisions

Weights, configuration, tokenizer, template, context mechanism, precision, runtime, and hardware are separately identified. Managed opacity is recorded rather than fabricated. Token fragmentation is not a quality score. Architecture predicts plausible surfaces only. The synthetic candidate is `inspection-blocked` on template family, golden serialization, and pad/EOS serving assumptions.

## Outgoing handoff

Chapter 3 receives the frozen hypothesis and an explicitly blocked compatibility tuple. It may reject and condition methods but cannot train while blockers remain.

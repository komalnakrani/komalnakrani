# V1 Chapter 8 Research Pack — Budget Context Deliberately

## Frozen identity

- Milestone: MD-04.
- Purpose: allocate finite context among control, evidence, history, and output while measuring quality, latency, and cost.
- Reader outcome: construct a context budget and evaluate truncation, ordering, caching, and untrusted-content risk.

## Evidence and claims

`V1-C08-CL01` (`LLME-BSRC-016`) supports the distinction between nominal context capacity and reliable evidence use. `V1-C08-CL02` (`063`, `066`) supports input length and caching as latency/cost variables, subject to provider conditions. `V1-C08-CL03` (`008`, `017`) supports treating added context as added risk surface.

Durable concepts: tokens are allocated; evidence selection and placement matter; output headroom is reserved; untrusted context is isolated; caching economics are measured. Current context-window sizes, cache discounts, and latency features are volatile and belong in dated examples only.

## Mosaic Desk experiment

Partition a long email thread into system/control, user request, retrieved policy, message history, and reserved output. Failure injection: place the decisive fact in the middle among duplicated signatures and stale replies. Apply `LLME-CASE-002`; measure evidence use as position and distractor load vary. A second injection places adversarial instructions in quoted history to test trust labeling.

## Limits and disputes

- “Fits in the window” is not equivalent to “is used reliably.”
- Long-context research results are model- and task-specific; no universal optimal ordering is asserted.
- Cache availability and billing rules change; Phase 07 should teach measurement, not quote durable savings.
- Summarization can reduce tokens while deleting provenance or qualifications.

## Phase 07 blueprint handoff

Blueprint around a token ledger and position-sensitivity experiment. Claims: `V1-C08-CL01..03`; case: `LLME-CASE-002`; sources: `008`, `016`, `017`, `063`, `066`. Figures: labeled context suitcase and evidence-position curve. Non-scope: retrieval algorithms, provider price tables, or security guarantees.

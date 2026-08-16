# V1 Chapter 10 Research Pack — Build the Retrieval and Reranking Path

## Frozen identity

- Milestone: MD-05.
- Purpose: build and measure candidate generation, ranking, and reranking as separable stages.
- Reader outcome: compare lexical, dense, hybrid, late-interaction, and cross-encoder choices using task-specific evidence.

## Evidence and claims

`V1-C10-CL01` (`LLME-BSRC-020`, `021`, `022`, `024`) supports distinct lexical and learned relevance signals. `V1-C10-CL02` (`019`, `022`, `024`) supports separating first-stage recall from later precision/latency decisions. `V1-C10-CL03` (`023`) supports late interaction as one accuracy-efficiency design point, not a universal winner.

Use `LLME-CASE-004` to preserve benchmark scope. Durable principles are staged measurement, relevant-unit definition, and explicit latency/quality tradeoffs. Index products, embedding releases, dimensions, and benchmark leaderboards are volatile.

## Mosaic Desk experiment

Create a small authorized corpus with exact product codes, paraphrased policy language, near-duplicate versions, and tenant boundaries. Compare BM25, dense, hybrid, and reranked candidates under the same query set. Failure injection: a newer but lexically weaker policy loses to an obsolete exact match. Measure recall at candidate depth, ranking quality, freshness, authorization violations, and latency per stage.

## Limits and disputes

- Offline ranking gains may not improve generated answers.
- Chunking and metadata filtering can dominate retriever choice.
- Cross-encoder reranking adds compute and can inherit language/domain bias.
- Published results do not authorize a “best stack” claim for Mosaic Desk.

## Phase 07 blueprint handoff

Blueprint a controlled retrieval bake-off with stage-level traces. Claims: `V1-C10-CL01..03`; case: `LLME-CASE-004`; sources: `019–024`. Figures: candidate funnel and lexical/dense signal map. Non-scope: managed vendor comparison, production indexing operations, or generated-answer evaluation beyond the handoff to Chapter 12.

# Volume 1 Chapter 10 Blueprint — Build the Retrieval and Reranking Path

## Frozen identity and dependency

- Chapter: `V1-10`; milestone: `MD-05`; domains: `LLME-K05`, `LLME-K06`, `LLME-K09`.
- Prerequisite: Chapter 9 retrieval/source contract.
- Forward dependency: Chapter 11 packs selected candidates with provenance; Chapter 12 diagnoses joint quality.
- Reader transformation: from opaque search results to stage-level retrieval evidence.

## Measurable objectives

The reader can define ingestion/chunking identity; compare lexical, dense, hybrid, late-interaction, and cross-encoder stages; measure candidate recall and ranking; trace filters/reranking/latency; and diagnose stale, unauthorized, missing, or noisy evidence.

## Concept sequence and skill procedure

Corpus/chunks → query representation → candidate generation → metadata authorization/freshness filters → reranking → selected evidence → trace. Procedure: freeze corpus/query labels; run lexical and dense baselines; inspect misses; combine only with a hypothesis; add reranking; record per-stage quality/latency; choose a bounded path.

## Mosaic Desk transition and failure injection

- Incoming: source map and synthetic authorized corpus.
- Failure injection: lexical search finds the exact part in a revoked bulletin while dense search returns a similar wrong appliance family.
- Outgoing: corpus card, ingestion/chunk config, candidate/reranking interfaces, filters, trace, comparison and decision for `MD-05`.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C10-CL01` | `LLME-BSRC-020`, `LLME-BSRC-021`, `LLME-BSRC-022`, `LLME-BSRC-024` | Benchmark ranking effects are dataset-specific. |
| `V1-C10-CL02` | `LLME-BSRC-019`, `LLME-BSRC-022`, `LLME-BSRC-024` | Added stages trade recall/precision against latency/complexity. |
| `V1-C10-CL03` | `LLME-BSRC-023` | Late interaction is one design point, not a universal winner. |

Use `LLME-CASE-004`; preserve all cited benchmark and workload bounds.

## Dual path, authority, and non-scope

Retriever evidence is independent of managed/open-weight generator access. Search/data/platform roles may own production indexes; LLM engineering owns the task-facing relevance trace and joint handoff. Non-scope: declaring a best database/embedding, platform operations, or answer-quality conclusions from retrieval alone.

## Practice and assessment

Exercise: Run a paper/synthetic bake-off with exact codes, paraphrases, duplicates, stale revisions, and tenant metadata. Pass when every selected candidate is traceable and a wrong result can be attributed to corpus, chunk, query, filter, candidate, or reranker.

## Figures

- `V1-F10.1` — Intent: support the chapter learner decision. Composition: ingestion→chunks→candidate lanes→filters→reranker→evidence; matching short stage labels. Alt: retrieval stages form a traceable funnel. Evidence role: failure localization for claims 01–02.
- `V1-F10.2` — Intent: support the chapter learner decision. Composition: lexical, vector, hybrid trays hold different useful/noisy documents; those labels. Alt: three retrieval signals produce overlapping but distinct candidates. Evidence role: complementarity without “best” claim.

## Durability, prohibitions, and Phase 08 handoff

Durable: stage isolation, traceability, task labels. Volatile: models, indexes, dimensions, leaderboards. Reverify implementations. Prohibit benchmark portability and single-score selection. Phase 08 receives the bake-off, trace schema, and bounded case.

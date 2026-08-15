# Chapter 06 State - Engineer Context and Retrieval

- Status: complete draft; immediate QA recorded
- Dossier: `PF-04` context contract and retrieval/ranking design v0.2
- Companion: lexical, vector-like, and hybrid retrieval; canonical deduplication; deterministic ranker; eligibility controls; grounding trace; nine new tests
- Locked distinction: similarity, relevance, evidence sufficiency, compatibility, and behavior eligibility are separate
- Claims: `CLM-027` through `CLM-031`
- Figures: `F06.1` / `FIG-011`; `F06.2` / `FIG-012`
- Case status: all records, scores, vectors, traces, and outcomes are fictional/synthetic.

## Non-repeat instruction

Later chapters invoke the query/candidate/rank/context/trace contracts and evidence-state precedence without reteaching retrieval families. RAG is never used as a synonym for retrieval, and citations never become proof.

## Locked runtime decisions

- Permission, scope, freshness, conflict, and deterministic incompatibility precede ranking/presentation.
- Canonical clusters deduplicate channel results.
- Empty eligible evidence abstains; no generated replacement exists.
- Instruction-like source text is inert data.
- Structured evidence remains useful without generation.
- No cross-session memory or external action exists.

## Chapter 07 prerequisite

Place the explicit context path inside a complete combined-system boundary with services, trust zones, state, failure propagation, ownership, and human decisions.

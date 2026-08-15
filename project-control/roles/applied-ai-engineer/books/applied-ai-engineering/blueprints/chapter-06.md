# Chapter 06 Blueprint — Engineer Context and Retrieval

## Purpose and exit capability

Design and evaluate an authorized context path that distinguishes query/input transformation, candidates, ranking, permission, freshness, assembly, grounding, and empty/conflicting evidence behavior.

## Prerequisites and non-scope

- Prerequisite: `PF-04` task data card and selected retrieval/ranking path.
- Non-scope: universal vector-database guide, LLM-only RAG tutorial, enterprise knowledge governance, or proof that citations make outputs correct.

## Concepts, skills, and decision models

- Candidate generation versus ranking versus context assembly versus downstream use.
- Lexical, structured, dense, multimodal, and hybrid retrieval; recall/effectiveness/efficiency tradeoffs.
- Provenance, permission, staleness, contradiction, empty result, and memory/retention states.
- Skill: localize a product failure to retrieval, ranking, context, or model/application behavior.

## Architecture, implementation, and stability

- Companion: lexical plus simple vector-like candidate retrieval, deterministic ranker, provenance/permission/freshness fields, grounding trace, and empty-evidence test.
- Retrieval stages and contracts are `durable`; embedding models, ANN libraries, and databases are `replaceable/volatile`.

## Scenario and artifact progression

Extend `PF-04` to v0.2 with context contract, retrieval/ranking design, source freshness, permission filter, conflict/empty behavior, and trace schema. Patchwork must remain useful without generation.

## Cases and bounded use

- `AAE-C002`: multimodal embedding and ANN product case, first-party limits preserved.
- `AAE-C003`: candidate retrieval then ranking.
- `AAE-C012`: fictional stale, conflicting, missing, and unauthorized catalog evidence.

## Failures, disputes, and tradeoffs

Similarity equals relevance; relevant evidence guarantees grounded output; dense always beats lexical; more context is better; memory without purpose/deletion. Exactness, latency, freshness, privacy, and recall conflict.

## Exercise, companion work, and completion evidence

Implement two retrieval paths and one hybrid, evaluate component and end-to-end behavior, then inject stale/unauthorized/no-evidence cases. Pass when traces explain inclusion/exclusion and the system abstains safely.

## Figures

- `F06.1`: retrieval pipeline; locates candidate, ranking, permission, context, and provenance failures.
- `F06.2`: evidence-state decision tree; locks stale/conflicting/unauthorized/absent behavior.

## Evidence, competencies, depth, and handoff

- Claims: `C06.1`–`C06.5`; sources `AAE-S009`, `AAE-S015`, `AAE-S016`, `AAE-S017`, `AAE-S018`, `AAE-S019`, `AAE-S020`, `AAE-S021`, `AAE-S038`, `AAE-S040`, `AAE-S041`.
- Domains: primary `AAE-K03`, `AAE-K04`, `AAE-K07`; secondary `AAE-K06`, `AAE-K08`.
- Depth: major context/retrieval chapter; target 7,000–8,500 words.
- Handoff: Chapter 7 places this path inside the complete trust, state, failure, and ownership boundary.
- Prohibitions: no RAG-as-all-retrieval, citation guarantee, vector-similarity-as-relevance, or vendor database prescription.

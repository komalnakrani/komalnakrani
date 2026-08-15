# Chapter 06 Research — Engineer Context and Retrieval

## Architecture anchors

- Primary domains: `AAE-K03`, `AAE-K04`, `AAE-K07`
- Dossier milestone: `PF-04`
- Forecast figures: `F06.1`, `F06.2`

## Research question

How should task inputs become authorized, current, relevant, and inspectable context—and how can retrieval failure be separated from downstream model failure?

## Claim and evidence map

- **C06.1 — Retrieval commonly separates candidate generation from more expensive scoring or use.** `AAE-S016`, `AAE-S017`, and `AAE-S021` support candidate/re-ranking architectures and different effectiveness-efficiency choices.
- **C06.2 — Approximate similarity search trades exactness and resource use for scalable retrieval.** `AAE-S018` supports index/performance design; similarity itself is not relevance or compatibility.
- **C06.3 — Retrieved evidence can augment generation while remaining a separate source of error.** `AAE-S019` supplies the original RAG formulation; the chapter must add permission, staleness, conflict, and faithful-use checks from system context.
- **C06.4 — Multimodal retrieval is a complete Applied AI path independent of an LLM.** `AAE-S015` and `AAE-S020` support image/text representation and a product search case.
- **C06.5 — Context paths need structural, semantic, privacy, and security controls.** `AAE-S009`, `AAE-S038`, `AAE-S040`, and `AAE-S041` support data anomalies, privacy risk, injection, and adversarial input treatment.

## Context contract

Specify source, owner, permission, query transformation, candidate rule, ranker, freshness, version, evidence display, conflict handling, empty-result behavior, limits, retention, and signals. Keep retrieval metrics and end-to-end task metrics separate but connected.

## Cases

- `AAE-C002` provides multimodal embedding and ANN retrieval.
- `AAE-C003` demonstrates candidate retrieval before personalized ranking.
- `AAE-C012` must distinguish no catalog evidence, stale seller evidence, conflicting evidence, and unauthorized evidence.

## Disputes and limits

Dense retrieval is not always superior to lexical, structured filtering, or hybrid methods. A relevant document does not guarantee a supported conclusion; an answer citation does not prove faithful use. “Memory” is context/state with purpose, retention, permission, and deletion requirements—not a magical user model.

## Remaining gaps

No release-blocking gap. Fresh 2026 vendor embedding and vector-database comparisons are intentionally excluded from durable claims and may enter versioned companion notes only.

## Blueprint constraints

Include separate retrieval, ranking, context-assembly, and answer/result evaluations. The exercise must force an empty/unauthorized/stale evidence decision before any generated fallback.

## Manuscript prohibitions

Do not use RAG as a synonym for all retrieval, claim citations eliminate hallucination, or define vector similarity as product relevance.

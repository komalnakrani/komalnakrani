# V1 Chapter 9 Research Pack — Design the Retrieval Question

## Frozen identity

- Milestone: MD-05.
- Purpose: decide whether retrieval is needed and specify the evidence unit before choosing a vector database.
- Reader outcome: write a retrieval contract covering corpus, query, freshness, permissions, provenance, and abstention.

## Evidence and claims

`V1-C09-CL01` (`LLME-BSRC-019`, `008`) supports retrieval when external, updateable, or attributable knowledge is required. `V1-C09-CL02` (`008`, `017`, `026`) supports source authorization and trust boundaries. `V1-C09-CL03` (`019`, `025`) supports separate retrieval and answer-quality evaluation.

The durable decision is epistemic: what evidence must the system have, who authorizes it, and how is absence represented? “Use RAG” is not a requirement. Embedding models, stores, and API products are volatile implementation choices.

## Mosaic Desk scenario

The desk needs current account policy and message-specific facts. Define document authority, tenant visibility, freshness, evidence granularity, and a no-evidence path. Failure injection: a semantically similar policy belongs to another tenant. Retrieval relevance cannot override authorization. Use `LLME-CASE-003` to explain the method boundary without importing its benchmark outcomes.

## Limits and authority

- Retrieval can expose a model to stale, poisoned, or unauthorized text.
- Parametric memory and retrieval evidence can conflict; the task contract must specify which wins and when to abstain.
- Domain owners designate authoritative corpora; privacy/security owners define access constraints.
- Phase 07 should not imply that vector similarity equals factual support.

## Phase 07 blueprint handoff

Teach retrieve/not-retrieve decision, evidence-unit definition, authorization, freshness, and no-evidence behavior. Skill check: convert a vague “search company docs” request into a retrieval contract. Sources: `008`, `017`, `019`, `025`, `026`; case: `LLME-CASE-003`. Figures: knowledge-source decision tree and retrieval contract card. Non-scope: chunking optimization and database selection.

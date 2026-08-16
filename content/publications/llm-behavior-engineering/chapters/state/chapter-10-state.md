# Chapter 10 State - Build the Retrieval and Reranking Path

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-05` retrieval pipeline selected with stage evidence.
- Dossier artifacts: corpus card, ingestion/chunk identity, frozen labels, lexical/dense/hybrid candidates, eligibility filters, deduplication, reranking trace, selected-evidence envelope.
- Production claims: `CLM-028` through `CLM-030` map exactly to `V1-C10-CL01` through `V1-C10-CL03`.
- Bounded case: `LLME-CASE-004`, used only for separable retrieval-stage lessons under benchmark limits.
- Figure anchors: `V1-F10.1`, `V1-F10.2`; assets pending root ImageGen.
- Companion: retrieval-pipeline fixture and helper; four Chapter 10 tests.

## Locked decisions

Corpus, ingestion, chunk, query, eligibility, candidate, fusion, reranking, and selection identities remain separate. Eligibility precedes relevance. Hypothetical documents are unciteable query experiments. No method is universally best.

## Non-repeat instruction

Chapter 11 consumes selected evidence envelopes and must not flatten them into strings or change source authority to simplify context packing.

## Exact next action

Assemble selected evidence under the `MD-04` budget while retaining source, revision, permission, span, trust, and source-state behavior.

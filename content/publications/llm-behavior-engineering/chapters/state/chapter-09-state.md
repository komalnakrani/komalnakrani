# Chapter 09 State - Design the Retrieval Question

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-05` retrieval problem opened.
- Dossier artifacts: claim-to-evidence path tree, source/authority map, eligibility contract, evidence-unit specification, query intent, answerability states, independent retrieval/generated-behavior claims.
- Production claims: `CLM-025` through `CLM-027` map exactly to `V1-C09-CL01` through `V1-C09-CL03`.
- Bounded case: `LLME-CASE-003`, used only as the original RAG method boundary; no Mosaic or production result.
- Figure anchors: `V1-F09.1`, `V1-F09.2`; assets pending root ImageGen.
- Companion: retrieval-question fixture and `retrieval-question.mjs`; four Chapter 9 tests.

## Locked decisions

Retrieval is justified by an evidence need, not fashion. Eligibility precedes relevance. Exact lookup and human search remain valid alternatives. No eligible evidence leads to abstain/escalate rather than unauthorized or parametric substitution.

## Non-repeat instruction

Chapter 10 implements candidate generation and reranking against this contract; it must not change source authority, permission, freshness, evidence-unit, or answerability rules to flatter retrieval results.

## Exact next action

Build lexical, vector, and hybrid candidate paths plus optional reranking, preserving eligibility, provenance, the `MD-04` budget, and independent retrieval evidence.

# Volume 1 Chapter 9 Blueprint — Design the Retrieval Question

## Frozen identity and dependency

- Chapter: `V1-09`; milestone: `MD-05`; domains: `LLME-K01`, `LLME-K05`, `LLME-K10`.
- Prerequisite: behavior and context contracts.
- Forward dependency: Chapters 10–11 implement candidate/reranking and provenance-aware assembly.
- Reader transformation: from “add RAG” to a falsifiable evidence-access decision.

## Measurable objectives

The reader can decide retrieve versus parametric answer, deterministic lookup, search, or abstention; define evidence units; document corpus owner/freshness/permissions; separate retrieval from generation claims; and specify no-evidence/conflict behavior.

## Concept sequence and skill procedure

Knowledge requirement → updateability/attribution → source authority → permissions/freshness → evidence unit/query → independent claims → empty/conflict outcome. Procedure: enumerate claims needing evidence; identify authoritative corpora; reject unauthorized sources; define query and relevant unit; write retrieval acceptance cases; preserve an abstention route.

## Mosaic Desk transition and failure injection

- Incoming: `MD-04` context budget and source inventory.
- Failure injection: a semantically relevant service bulletin belongs to another tenant or is revoked.
- Outgoing: retrieval problem statement, source/authority map, permission/freshness contract, answerability states, and metric questions for `MD-05`.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C09-CL01` | `LLME-BSRC-019`, `LLME-BSRC-008` | Retrieval is justified by external evidence needs, not fashion. |
| `V1-C09-CL02` | `LLME-BSRC-008`, `LLME-BSRC-017`, `LLME-BSRC-026` | Relevance cannot override authorization/trust. |
| `V1-C09-CL03` | `LLME-BSRC-019`, `LLME-BSRC-025` | Retrieval and answer evidence remain distinct. |

Use `LLME-CASE-003` as the original RAG method boundary, not a production recipe.

## Dual path, authority, and non-scope

Retrieval contracts remain common across managed and open-weight model paths; adapters may differ. Domain owners define authority, privacy/security define access, and search/data specialists may own indexes. Non-scope: vector-store selection, chunking optimization, policy adjudication, or claiming similarity means support.

## Practice and assessment

Exercise: Convert “search manuals” into a retrieval contract and reject two unjustified RAG cases. Pass when corpus, relevant unit, permissions, freshness, metrics, no-evidence state, and owners are explicit.

## Figures

- `V1-F09.1` — Intent: support the chapter learner decision. Composition: decision tree to parametric answer, deterministic lookup, search, retrieval-generation, abstain; those short labels. Alt: evidence need selects among five paths. Evidence role: operationalizes claims 01 and 03.
- `V1-F09.2` — Intent: support the chapter learner decision. Composition: source shelves grouped by owner, freshness, permission; labels “owner,” “fresh,” “allowed.” Alt: manuals, bulletins, warranty, parts, notes have different authority. Evidence role: claim 02.

## Durability, prohibitions, and Phase 08 handoff

Durable: evidence-first retrieval decision, source authority, independent claims. Volatile: stores, embeddings, APIs. Prohibit RAG-by-default and similarity-as-authority. Phase 08 receives decision tree, contract worksheet, and unauthorized-source failure.

# Volume 1 Chapter 11 Blueprint — Assemble Context With Provenance

## Frozen identity and dependency

- Chapter: `V1-11`; milestone: `MD-05`; domains: `LLME-K04`, `LLME-K05`, `LLME-K10`.
- Prerequisite: selected retrieval path and `MD-04` budget.
- Forward dependency: Chapter 12 evaluates retrieval/assembly/generation jointly.
- Reader transformation: from concatenated chunks to an attributable, authorized evidence bundle.

## Measurable objectives

The reader can preserve source ID/revision/authority/permission/span/rank through assembly; separate instructions from retrieved data; resolve ordering/deduplication under budget; represent conflict/staleness/absence; and validate citation entailment rather than formatting alone.

## Concept sequence and skill procedure

Selected candidate → provenance envelope → authorization/freshness gate → deduplicate/order → delimit as untrusted data → pack under budget → cite/abstain/escalate. Procedure: attach metadata; reject unauthorized versions; preserve qualifying spans; simulate conflicts/missing evidence; emit an assembly trace; check each claim against cited text.

## Mosaic Desk transition and failure injection

- Incoming: candidate/reranking trace.
- Failure injection: a retrieved page contains instruction-like text and a superseded policy contradicts the current bulletin.
- Outgoing: context assembler contract, provenance/citation record, source-state behavior, and completed `MD-05` evidence path.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C11-CL01` | `LLME-BSRC-019`, `LLME-BSRC-026` | Citation formatting does not prove entailment/correctness. |
| `V1-C11-CL02` | `LLME-BSRC-008`, `LLME-BSRC-017`, `LLME-BSRC-026` | Retrieved text remains untrusted. |
| `V1-C11-CL03` | `LLME-BSRC-016`, `LLME-BSRC-012` | Ordering effects require current model/task tests. |

Use `LLME-CASE-002`, `LLME-BSRC-003`, and `LLME-BSRC-014` only for position, RAG, and trust-boundary lessons respectively.

## Dual path, authority, and non-scope

The same provenance bundle feeds managed and open-weight paths; token/layout adapters vary. Domain owners resolve source authority/conflict; security/privacy own access; the engineer transports evidence and tests use. Non-scope: declaring source truth, citations-as-proof, or prompt delimiters as complete defense.

## Practice and assessment

Exercise: Audit and repair a bundle containing stale, conflicting, unauthorized, duplicated, and instruction-bearing chunks. Pass when every included span retains identity and each source state produces the prescribed answer/abstain/escalate behavior.

## Figures

- `V1-F11.1` — Intent: support the chapter learner decision. Composition: document tiles with source/freshness/permission tabs packed into context; those labels. Alt: selected evidence retains identity inside the context. Evidence role: claims 01–02.
- `V1-F11.2` — Intent: support the chapter learner decision. Composition: support/conflict/stale/missing/unauthorized paths lead to answer, abstain, escalate; short state labels. Alt: source conditions lead to distinct bounded outcomes. Evidence role: assembly behavior evidence.

## Durability, prohibitions, and Phase 08 handoff

Durable: provenance envelopes, trust labels, entailment checks, explicit source states. Volatile: citation APIs and context limits. Prohibit citations-equal-truth and similarity-equal-authority. Phase 08 receives the assembly trace, state junction, and conflict exercise.

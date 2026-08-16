# Volume 1 Chapter 8 Blueprint — Budget Context Deliberately

## Frozen identity and dependency

- Chapter: `V1-08`; milestone: `MD-04`; domains: `LLME-K02`, `LLME-K04`, `LLME-K06`.
- Prerequisite: complete `MD-03` baseline and typed boundary.
- Forward dependency: Chapters 9–11 replace ad hoc evidence inclusion with authorized retrieval and assembly.
- Reader transformation: from filling a context window to allocating a measured, trust-aware evidence budget.

## Measurable objectives

The reader can inventory context sources, calculate token/headroom budgets, test position/truncation/conflict effects, distinguish nominal capacity from reliable use, and specify reduced-capability/abstention behavior.

## Concept sequence and skill procedure

Context sources/trust → token accounting → mandatory/optional allocation → ordering and position → compression/deduplication → reserved output → overflow/conflict/absence policy → trace. Procedure: measure exact templated tokens; rank by authority/need; reserve output; inject long/stale/conflicting data; observe omissions and evidence use; document the context contract.

## Mosaic Desk transition and failure injection

- Incoming: messages, schema, and synthetic thread/manual inputs.
- Failure injection: a long technician thread pushes the current safety bulletin into the middle or out of the usable context; quoted text also contains an injection.
- Outgoing: inventory, token ledger, selection/ordering policy, truncation/conflict tests, trace fields, and `MD-04` state boundary.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C08-CL01` | `LLME-BSRC-016` | Position effects are model/task-specific. |
| `V1-C08-CL02` | `LLME-BSRC-063`, `LLME-BSRC-066` | Latency/caching behavior and economics are volatile. |
| `V1-C08-CL03` | `LLME-BSRC-008`, `LLME-BSRC-017` | More context also enlarges the trust/risk surface. |

Use `LLME-CASE-002` only for tested position sensitivity; rerun on current candidates.

## Dual path, authority, and non-scope

Managed and open-weight paths expose a common semantic context budget, but token counting, caching, and limits vary. Privacy/security authorize content; domain owners rank source authority. Non-scope: retrieval selection, provider price tables, or claiming long context replaces evidence design.

## Practice and assessment

Exercise: Pack one Mosaic request under a fixed synthetic budget, then inject oversize/conflict/unauthorized/absent states. Pass when essential evidence is not silently lost and each omission/state appears in the trace with bounded behavior.

## Figures

- `V1-F08.1` — Intent: support the chapter learner decision. Composition: finite case packed with instruction, history, evidence, output reserve; labels “control,” “history,” “evidence,” “output.” Alt: finite context space is allocated among competing components. Evidence role: token-budget artifact.
- `V1-F08.2` — Intent: support the chapter learner decision. Composition: oversized, stale, conflicting, unauthorized, and absent objects use distinct cracks/locks/gaps; matching labels. Alt: five context failures lead to bounded system responses. Evidence role: claims 01 and 03.

## Durability, prohibitions, and Phase 08 handoff

Durable: explicit budget, position tests, output headroom, traceable omissions. Volatile: window sizes, cache rules, latency. Reverify official docs. Prohibit “fits equals used,” universal ordering, and cache savings promises. Phase 08 receives the ledger, stress cases, and link into retrieval design.

# Chapter 06 Research — Draw the Real System Boundary

## Research question

How should architecture express responsibility, trust, data, runtime, and failure boundaries in addition to structural components?

## Claim and evidence map

- **C06.1 — C4 provides hierarchical context and container abstractions without requiring one notation or tool.** `R06-S016`.
- **C06.2 — Architecture decisions balance operational excellence, security, reliability, performance, cost, and other quality concerns.** `R06-S017`, `R06-S018`, and `R06-S019`.
- **C06.3 — Network position alone is not an adequate trust decision.** `R06-S026`.
- **C06.4 — A deployment boundary must identify ownership and failure propagation, not only call paths.** Book synthesis supported by `R06-S019` and postmortem evidence `R06-C001`–`R06-C003`.

## Durable principles

Pair structural diagrams with responsibility/trust annotations and a failure-mode table. Name runtime owner, data controller/steward where supplied by the customer, interface owner, support owner, and approver. Record build/buy/reuse alternatives and the consequence of each boundary assumption.

## Cases

- `R06-C001` shows configured state and operational state diverging across a distributed system.
- `R06-C002` shows control-plane/data-plane separation limiting one kind of impact while the impaired control plane still matters operationally.
- `R06-C010` requires explicit boundaries among Orchid Assist, ticketing, equipment registry, identity, inventory, and regional data domains.

## Disputes and limits

A logical boundary is not automatically a deployment, security, ownership, or legal boundary. Cloud frameworks are useful question sets, not proof that a design is “well architected.” Exact data-controller terminology is jurisdictional and must be supplied by appropriate specialists.

## Remaining gaps

No release blocker. The blueprint must define a concise annotation legend and prevent diagrams from implying undocumented ownership.

## Manuscript prohibitions

Do not infer trust from a VPC, claim compliance from a diagram, or present provider reference architectures as mandatory.

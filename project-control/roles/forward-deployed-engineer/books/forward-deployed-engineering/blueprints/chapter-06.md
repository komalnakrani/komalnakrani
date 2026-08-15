# Chapter 06 Blueprint — Draw the Real System Boundary

## Purpose and exit capability

The reader can produce context/container and responsibility-boundary views with explicit runtime, data, trust, ownership, failure propagation, assumptions, and build/buy/reuse decisions.

## Prerequisites and non-scope

- Prerequisite: selected `OA-04` vertical scope and dependency/risk records.
- Non-scope: enterprise architecture authority, compliance certification, provider-reference-architecture copying, or diagrams that imply undocumented ownership.

## Concepts, skills, and decision models

- Structural boundary versus deployment, trust, data, ownership, and failure boundaries.
- Responsibility/failure matrix: failure → propagation → detection → containment → correction → owner.
- Build/buy/reuse record: capability, constraint, alternatives, consequence, reversibility, owner, evidence.
- Skill: challenge each arrow, store, trust assumption, and shared responsibility.

## Architecture, implementation, and tools

- C4 context/container abstractions (`durable method`) with book-specific responsibility/trust annotations.
- Mermaid, Structurizr, or vector tools (`current/replaceable`) may render; canonical source must remain editable and versioned.
- Apply cloud well-architected frameworks as question sets (`provider-specific/volatile`), not compliance claims.

## Scenario and artifacts

- Begin `OA-05`: Orchid actors, Assist components, ticketing, equipment registry, inventory/ERP, manuals, identity, telemetry, regional data stores, owners, trust boundaries, and failure paths.
- Record assumptions about intermittent connectivity and configured versus operational state.

## Cases and bounded use

- `R06-C001`: divergent configured/operational state.
- `R06-C002`: control/data separation limits one impact but leaves operational dependency.
- `R06-C010`: original architecture case.

## Failures, mistakes, and tradeoffs

- Box-and-arrow completeness illusion; VPC equals trust; shared component equals shared owner; architecture by logo.
- Tradeoff: isolation/reliability versus cost/complexity; document the consequence and evidence threshold.

## Exercise and completion evidence

Annotate a structurally correct but operationally incomplete diagram. Pass when all important components/arrows have owner, trust/data semantics, failure behavior, assumption, and review decision.

## Figures

- `F06.1` Orchid C4-style context with ownership/trust overlays.
- `F06.2` failure/ownership matrix tied to `OA-05`.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S010`, `R06-S016`–`R06-S019`, `R06-S026`; cases `R06-C001`, `R06-C002`.
- Domains: primary `FDE-K04`, `FDE-K08`, `FDE-K09`; secondary `FDE-K03`.
- Depth: major architecture chapter; target 10,000–13,000 words.
- Handoff: Chapter 7 makes each crossed interface and data path explicit.
- Prohibitions: no topology-as-security, framework-as-proof, or ownerless boundary.

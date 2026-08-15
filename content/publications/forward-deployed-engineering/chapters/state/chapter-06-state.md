# Chapter 06 State - Draw the Real System Boundary

## Concepts introduced

- C4 context/container structure plus six deployment boundaries
- proposition-specific data authority and relationship sentences
- request-level trust annotation
- failure/ownership matrix, correlated failure, control/data/operating planes
- expirable architecture decision records and scenario walkthroughs

## Terminology locked

- Structural diagram does not prove trust, runtime, data, failure, recovery, or ownership.
- Desired, accepted, applied, observed, and reconciled state are distinct.
- Responsibility is decomposed into code/runtime/interface/data/control/support/decision actions.

## Examples and cases used

- Orchid context/containers and Region West boundary
- read-only ERP architecture decision
- Cloudflare 2026 configured/operational-state and 2025 control-plane cases, attributed only
- registry/manual/inventory/model/approval/telemetry failures

## Claims not to repeat in full

- Do not re-teach the six boundaries or architecture review walkthroughs.
- Chapter 7 turns the material arrows/data propositions into contracts.
- Chapter 8 adds concrete environment/identity topology without redrawing the entire context.

## Figures

- `F06.1` annotated C4-style context placeholder present.
- `F06.2` failure/ownership matrix placeholder present.

## Project progress

- First structural portion of `OA-05` complete: context, containers, boundaries, proposition authority, failures/owners, build/buy/reuse and ADR requirements.

## Unresolved gaps

- Interface/data, environment/identity, AI, and governance portions remain Chapters 7-10.
- No blocking source gap.
- Final figures wait for Phase 10.
- Phase 09 blueprint mapping found boundaries, walkthroughs, cases, failures, exercise evidence, figures, sources, and handoff represented in complete prose; no unambiguous first-pass content gap was added.
- 3,834 manuscript words; a second duplication/continuity/depth review remains open.

## Chapter 07 may assume

- all material components/arrows/owners/failure boundaries are known;
- ERP writes remain deferred and reads still need semantic/freshness/error contracts;
- equipment ambiguity, provenance, approval, and reconciliation are first-class requirements;
- interfaces must preserve proposition authority and workflow state.

# Chapter 07 Blueprint — Make Interfaces and Data Explicit

## Purpose and exit capability

The reader can design API/event/data contracts that survive ambiguous completion, late/duplicate/invalid data, retry, partial failure, version change, and reconciliation.

## Prerequisites and non-scope

- Prerequisite: `OA-05` context, boundary, and ownership decisions.
- Non-scope: enterprise data-platform design, schema-equals-semantics claims, “exactly once” by label, or universal quality thresholds.

## Concepts, skills, and decision models

- Interface catalog anatomy; data semantic contract; provenance/lineage; canonical ID mapping; reconciliation and exception ownership.
- Retry decision: operation semantics, caller intent, request ID, result persistence, expiry, conflict, late arrival.
- Compatibility model: public contract, consumer impact, migration window, deprecation evidence.
- Skill: turn ambiguous external behavior into explicit testable assumptions and safe failure handling.

## Architecture, implementation, and tools

- OpenAPI 3.2.0, AsyncAPI 3.0.0, JSON Schema 2020-12, HTTP RFC 9110, SemVer 2.0.0 (`versioned standards/specifications`).
- Companion begins: TypeScript/Node local API and adapters (`current implementation choice`), JSON fixtures (`durable format`), controllable timeout/duplicate/late-write harness. Provider adapters remain optional.

## Scenario and artifacts

- Extend `OA-05`: interface catalog, equipment/ticket/inventory data contract, ID reconciliation, quality rules, exception queue, ERP idempotency/ambiguous-write protocol.
- Companion implements synthetic records, schema validation, correlation/request IDs, and reconciliation report.

## Cases and bounded use

- `R06-C009`: AWS idempotent API pattern, attributed and bounded.
- `R06-C001`: accepted configuration versus operational state.
- `R06-C008`: executable query versus correct result.
- `R06-C010`: duplicate IDs and timeout-after-write injection.

## Failures, mistakes, and tradeoffs

- Schema-only contract, retry storm, unit/timezone ambiguity, silent null coercion, platform-wide canonical model too early.
- Tradeoff: strict rejection versus availability/manual exception; decide by consequence and reconciliation capacity.

## Exercise and completion evidence

Implement and test duplicate, late, conflicting, invalid, and ambiguous-completion requests. Pass with contract fixtures, deterministic tests, reconciliation output, ownered exception path, and no duplicate side effect.

## Figures

- `F07.1` integration sequence with retry/reconciliation.
- `F07.2` data-contract anatomy beyond schema.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S020`–`R06-S025`, `R06-S028`; cases `R06-C001`, `R06-C008`, `R06-C009`.
- Domains: primary `FDE-K04`, `FDE-K06`, `FDE-K09`; secondary `FDE-K05`.
- Depth: major technical chapter; target 11,000–14,000 words.
- Handoff: Chapter 8 places these contracts inside the real environment and identity topology.
- Prohibitions: no retry-safety, semantic-quality, or exactly-once guarantee without executable evidence.

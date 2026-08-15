# Chapter 11 State - Build a Production Vertical Slice

## Concepts introduced

- user-intent vertical slice and coverage test
- repository component/owner/test/config/signal/runbook map
- explicit ready/blocked/fallback/reconcile states
- dependency double non-proof, feature-control lifecycle, review lens
- cross-boundary debugging, safe defaults, migration seams, debt decision record

## Terminology locked

- Vertical slice is small in breadth and complete in consequence.
- Clean local reproducibility is not representative production evidence.
- Unknown external completion requires reconciliation, not blind retry.
- An unowned TODO is not a debt decision.

## Examples and cases used

- Orchid synthetic ticket-to-evidence-to-inventory-to-bounded-suggestion path
- approved evidence followed by inventory rejection
- ambiguous equipment blocked before dependencies
- unknown completion routed with the original intent ID
- deterministic fixture explicitly bounded as non-production proof

## Figures

- `F11.1` end-to-end vertical-slice trace placeholder present.
- `F11.2` component-to-owner/test/config/signal/runbook map placeholder present.

## Project and companion progress

- `OA-06` runnable synthetic vertical slice, repository map, review lens, and debt register complete.
- Companion adds injected evidence/inventory boundaries, orchestrator, fixture, demo command, and five tests; 24 cumulative tests pass.

## Unresolved gaps

- Real adapters, customer environment, workload identity, production UI, telemetry exporter, performance, and recovery remain future representative evidence.
- No blocking source gap.
- Final figures wait for Phase 10.
- Phase 09 added a reviewer trace, consequential failure drill, clean-checkout supportability test, and explicit implementation failure repairs.
- 4,102 manuscript words plus executable code after repair; final Phase 09 blueprint-depth, duplication, source, and continuity review passes.

## Chapter 12 may assume

- one bounded path runs deterministically and exposes consequential states;
- every double/non-proof, risk, contract, control, and acceptance claim can be mapped to verification evidence.

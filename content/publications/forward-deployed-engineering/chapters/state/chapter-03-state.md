# Chapter 03 State - Map the Workflow That Actually Exists

## Concepts introduced

- operational-result boundary
- coordinated journey, swimlane/state, decision/evidence, system/data, and exception views
- state contracts and proposition-specific systems of record
- exception taxonomy, waiting/invisible work, incentive/metric risk
- resolution test and map-to-downstream-decision trace

## Terminology locked

- Current state contains evidence-backed present behavior; proposed future behavior is marked separately.
- A workflow state names what is true, evidence/owner/actions, transitions, time behavior, authority, visibility, and failure/recovery.
- Exception handling includes detection, decision, owner, state, reconciliation, return/terminal path, not an error message alone.

## Examples and cases used

- Orchid multi-channel request, identifier ambiguity, evidence gathering, safety approval, inventory, resolution/escalation, low connectivity
- timeout after part reservation and ambiguous completion
- conflicting ticket/inventory/service-history states
- ticket-closure versus safe first-visit incentive conflict
- AWS idempotent API article used as attributed engineering pattern, not outcome evidence

## Claims not to repeat in full

- Do not re-teach the five coordinated views or resolution test.
- Chapter 4 uses mapped populations/incentives to define metrics; it must not redraw the workflow.
- Chapter 7 designs interface/data contracts from the mapped ambiguity; it should reference the current-state case.

## Figures

- `F03.1` Orchid swimlane/state map final vector asset and manifest record PASS.
- `F03.2` exception topology final vector asset and manifest record PASS.

## Project progress

- `OA-02` required contents and fictional findings are complete in prose.
- Revised problem: fragmented, inconsistently identified, variably available evidence at the point of service decision, with explicit approval/provenance/exception/region/operations constraints.

## Unresolved gaps

- Fictional-case measurement gaps remain deliberate inputs to Chapter 4; no public outcome is claimed.
- No blocking source gap.
- Phase 10 final vector assets, manifest records, accessibility text, grayscale differentiation, and small-size review PASS.
- Phase 09 blueprint mapping found all workflow/state/evidence/exception/case/failure/figure/handoff elements and added an explicit multi-view mapping and validation exercise.
- 4,729 manuscript words after repair; final Phase 09 depth, duplication, source, and continuity review passes.

## Chapter 04 may assume

- the current workflow, exception types, state ambiguity, and incentive conflict are understood;
- the “AI copilot” request is not the problem statement;
- measurement populations and transition semantics must be defined before targets;
- remaining gaps stay explicit in the outcome contract.

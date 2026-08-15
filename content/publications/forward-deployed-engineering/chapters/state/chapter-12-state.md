# Chapter 12 State - Prove Behavior Before Production

## Concepts introduced

- cheapest credible evidence and risk-to-evidence matrix
- typed evidence: deterministic/statistical/expert/UAT
- layered verification stack and semantic contract tests
- AI eval anatomy, capability/regression, provenance/leakage, segments/uncertainty
- grader calibration, adversarial evidence, task-based UAT, limitations/waivers

## Terminology locked

- Test/evaluation passage samples recorded behavior; it is not proof of absence.
- “Not tested,” inconclusive, failed, waived, and passed remain distinct.
- Aggregate results never erase a consequential segment.
- UAT is task observation, not informal demo or risk transfer.

## Examples and cases used

- Orchid common-pass/safety-critical-fail disposition
- deterministic double non-proof mapped to representative evidence
- successful SQL/retrieval versus correct answer/equipment binding
- grader disagreement and flaky-test evidence handling

## Figures

- `F12.1` layered verification stack placeholder present.
- `F12.2` risk/criterion-to-evidence traceability placeholder present.

## Project and companion progress

- `OA-07` verification matrix, evidence taxonomy, AI eval/UAT protocol, and limitation packet complete.
- Companion adds verification-record validation, segmented release disposition, evidence typing, and grader calibration; 28 cumulative tests pass.

## Unresolved gaps

- Representative adapter, performance, customer identity, UI/accessibility/UAT, provider model, monitoring, migration, and recovery evidence remain explicitly open.
- No blocking source gap.
- Final figures wait for Phase 10.
- Phase 09 added a worked UAT scenario, five-risk verification exercise, layered evidence design, grader calibration, critical-segment disposition, and failure repairs.
- 3,529 manuscript words plus executable verification code after the first depth repair; a second blueprint-depth review remains open.

## Chapter 13 may assume

- every material release claim/limitation has an evidence type, segment, owner, and disposition;
- production signals must detect behavior that pre-release verification cannot prove.

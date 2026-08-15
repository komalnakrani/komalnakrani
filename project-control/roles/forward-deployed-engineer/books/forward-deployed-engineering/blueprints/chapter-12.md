# Chapter 12 Blueprint — Prove Behavior Before Production

## Purpose and exit capability

The reader can connect workflow risk and acceptance criteria to unit, contract, integration, end-to-end, AI evaluation, adversarial, security/accessibility, UAT, and known-limitation evidence.

## Prerequisites and non-scope

- Prerequisite: runnable `OA-06`, source contracts, error taxonomy, outcome/guardrail criteria.
- Non-scope: proof of no failure, one-number model quality, informal demo-as-UAT, certification, or model-grader objectivity by assumption.

## Concepts, skills, and decision models

- Verification stack and cheapest-credible-evidence rule.
- Requirement/risk → criterion → method/data → expected result → observed result → limitation → release disposition.
- Eval anatomy; dataset provenance/version/splits; leakage; grader calibration; segment and uncertainty; waiver authority.
- Skill: design high-cost exception tests and distinguish deterministic assertion, statistical estimate, expert judgment, and user acceptance.

## Architecture, implementation, and tools

- Node test runner and fixtures (`current/replaceable`), contract/schema checks (`versioned`), deterministic model double as regression baseline; optional provider eval adapter (`volatile`).
- ASVS 5.0.0/WCAG 2.2 selected criteria (`versioned`) and AI guidance with stated scope. Avoid reliance on the deprecating OpenAI Evals platform.

## Scenario and artifacts

- Produce `OA-07`: verification matrix, automated suite, AI task/eval set, adversarial cases, UAT protocol, limitations, release evidence packet.
- Reveal aggregate pass with a critical equipment-family failure; require segmented disposition.

## Cases and bounded use

- `R06-C005`: noisy evals missed production quality issues.
- `R06-C006`: attributed regulated evaluation/adoption story.
- `R06-C008`: successful SQL execution versus answer correctness.

## Failures, mistakes, and tradeoffs

- Coverage percentage as confidence; shared train/test cases; prompt-only tests; representative-users omitted; waived failure hidden.
- Tradeoff: test breadth/depth versus time/cost; prioritize consequence and uncertainty, preserve gaps.

## Exercise and completion evidence

Build the matrix/suite and calibrate two graders against human labels. Pass when high-cost exceptions are covered, segments visible, UAT is task-based, provenance/version frozen, and limitations ownered.

## Figures

- `F12.1` verification stack.
- `F12.2` risk/criterion-to-evidence traceability map.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S020`–`R06-S025`, `R06-S031`–`R06-S035`, `R06-S038`–`R06-S046`.
- Domains: primary `FDE-K05`, `FDE-K07`, `FDE-K08`, `FDE-K09`; secondary `FDE-K06`.
- Depth: major verification chapter; target 13,000–15,000 words plus tests/evals.
- Handoff: Chapter 13 carries release claims into production signals and diagnostic paths.
- Prohibitions: no aggregate concealment, test-passage safety claim, or uncalibrated grader authority.

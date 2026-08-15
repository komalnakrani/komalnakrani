# Chapter 12 Research — Prove Behavior Before Production

## Research question

How should requirements and workflow risk trace to automated tests, contracts, AI evaluations, adversarial cases, UAT, accessibility/security checks, and known limitations?

## Claim and evidence map

- **C12.1 — Interface specifications and schemas can anchor contract tests, while semantics need additional assertions.** `R06-S020`–`R06-S025`.
- **C12.2 — AI evaluation needs an explicit task, trials/data, graders, outcome/trace evidence, harness, and capability/regression purpose.** `R06-S032`, `R06-S033`, `R06-S035`.
- **C12.3 — Production-like simulation and production monitoring catch different failure classes than static evaluation.** `R06-S038`, `R06-S046`.
- **C12.4 — Versioned security, software-quality, and accessibility criteria can be selected as release evidence.** `R06-S041`, `R06-S043`, `R06-S044`, `R06-S045`.
- **C12.5 — Safety and GenAI security guidance supports layered testing and safeguards, not a complete guarantee.** `R06-S031`, `R06-S034`, `R06-S039`.

## Durable principles

Build a requirements-to-evidence matrix. Segment by workflow risk and user/context rather than relying on one aggregate score. Separate deterministic assertions, statistical estimates, expert judgment, UAT observation, and unresolved limitation. Freeze test/eval data provenance and version the system under test. Make release criteria and waiver authority explicit.

## Cases

- `R06-C005` demonstrates noisy evaluation and production quality gaps.
- `R06-C006` provides an attributed regulated-workflow evaluation/adoption story.
- `R06-C008` distinguishes executable SQL from correct data answers.
- `R06-C010` injects aggregate accuracy that hides a safety-critical equipment-family failure.

## Disputes and limits

Passing tests samples behavior; it does not prove absence of failure. Model-based graders can share failure modes with the system under test. UAT is not an informal demo and cannot transfer formal risk authority to users. Accessibility conformance and usability evidence overlap but are not identical.

## Remaining gaps

No release blocker. Phase 07 must define dataset splits, leakage checks, grader calibration, confidence/uncertainty language, and known-limitations handling.

## Manuscript prohibitions

Do not call a single benchmark “accuracy,” hide segment failures inside an average, or imply test passage proves safety, security, or regulatory approval.

# Chapter 03 Blueprint — Write the Behavior Contract

## Purpose and exit capability

Translate product intent into versioned required, allowed, uncertain, abstaining, escalating, degraded, and prohibited behavior with explicit evidence and authority.

## Prerequisites and non-scope

- Prerequisite: `PF-01` task, consequence, baseline, and non-goals.
- Non-scope: model-provider behavior policy, legal policy drafting, domain authorization, or a deterministic specification of every valid output.

## Concepts, skills, and decision models

- Behavior state model; criteria versus exact answer; uncertainty and selective prediction.
- Review versus authority; competence, evidence, time, reversibility, and escalation.
- Contract clauses: behavior, segments, non-goals, degradation, prohibited effects, evidence, update triggers.
- Skill: convert persuasive but vague quality language into testable clauses.

## Architecture, implementation, and stability

- Architecture content: application behavior boundary and authority flow; schemas begin in Chapter 8.
- Durable format: versioned behavior contract with examples/counterexamples and decision-rights map.
- Provider model specifications and structured-output APIs are `volatile examples`, never the application contract.

## Scenario and artifact progression

Create `PF-02` behavior/authority contract v0.1. Patchwork may propose candidates and evidence; it must abstain or ask for missing measurements, cannot overrule known incompatibility, cannot claim guaranteed fit, and cannot execute seller contact or purchase.

## Cases and bounded use

- `AAE-C001`: missing sycophancy category shows a contract/eval blind spot; preserve first-party limits.
- `AAE-C005`: separates domain label expertise from application authorization.
- `AAE-C009`: schema conformance is not semantic correctness.
- `AAE-C012`: fictional contract implementation target.

## Failures, disputes, and tradeoffs

“Helpful and safe” without observable clauses; confidence equals correctness; generic human-in-loop; never-abstain requirements; hiding uncertainty behind fluent explanations. Coverage competes with risk and user effort.

## Exercise, companion work, and completion evidence

Write and red-team 15 clauses, including ordinary variation, critical segment, abstention, degradation, authority, and change. Companion begins with a machine-readable contract schema only. Pass when each clause maps to evidence and a release implication.

## Figures

- `F03.1`: behavior state model; turns uncertainty into explicit system states.
- `F03.2`: authority map; separates suggestion, review, domain decision, and formal authorization.

## Evidence, competencies, depth, and handoff

- Claims: `C03.1`–`C03.5`; sources `AAE-S001`, `AAE-S003`, `AAE-S004`, `AAE-S024`, `AAE-S025`, `AAE-S030`, `AAE-S043`, `AAE-S045`, `AAE-S051`, `AAE-S054`.
- Domains: primary `AAE-K02`, `AAE-K08`; secondary `AAE-K01`, `AAE-K06`.
- Depth: major specification/authority chapter; target 6,000–7,500 words.
- Handoff: Chapter 4 compares mechanisms against the contract rather than intuition.
- Prohibitions: no deterministic semantic guarantee, generic reviewer, self-authorization, or provider spec treated as product contract.

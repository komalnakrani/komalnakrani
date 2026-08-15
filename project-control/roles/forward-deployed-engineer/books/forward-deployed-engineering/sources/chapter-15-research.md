# Chapter 15 Research — Cross the Production Threshold

## Research question

How should evidence, unresolved risk, cohorting, blast radius, communications, authority, success signals, and rollback triggers produce a defensible go/no-go decision?

## Claim and evidence map

- **C15.1 — Canarying uses partial/time-limited exposure and needs both comparative and absolute health criteria.** `R06-S049`.
- **C15.2 — Progressive deployment should use small quality-gated changes, health checks, stop conditions, and recovery.** `R06-S050`.
- **C15.3 — Reliable launches require operability and ownership review scaled to risk.** `R06-S052`.
- **C15.4 — Service objectives and versioned quality/security criteria can supply release evidence, but selection remains contextual.** `R06-S043`, `R06-S044`, `R06-S047`.
- **C15.5 — Deployment-like simulation complements rather than replaces production evidence.** `R06-S046`.

## Durable principles

A readiness review shows required evidence, gaps, risk owner, decision options, cohort/ramp, blast radius, command schedule, support/user preparation, observation window, success/guardrail signals, and rollback/stop triggers. The record must allow go, conditional go, reduced scope, delay, or stop.

## Cases

- `R06-C001` shows staged rollout limiting impact but not eliminating recovery complexity.
- `R06-C002` shows the cost of bypassing a normal rollout system.
- `R06-C003` tests break-glass readiness.
- `R06-C005` tests quality canaries for AI behavior.
- `R06-C010` arrives at deadline with one documented but unexecuted control.

## Disputes and limits

A canary is informative only if cohort, duration, load, signals, and decision rule can reveal the target failure. Deadline pressure is context, not evidence. “Risk accepted” requires the authorized owner and stated consequence.

## Remaining gaps

No release blocker. The blueprint must include a completed go/no-go record with a defensible conditional or delayed decision, not a ceremonial checklist.

## Manuscript prohibitions

Do not assume a pilot is safe because it is small, treat missing evidence as passed evidence, or let the FDE unilaterally accept customer risk.

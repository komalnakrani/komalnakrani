# Chapter 05 Research — Scope the First Safe Production Path

## Research question

How does an FDE choose the smallest end-to-end path that yields production evidence while bounding risk and dependency uncertainty?

## Claim and evidence map

- **C05.1 — Current deployment practice includes diagnosing and prioritizing workflows before building.** `R06-S001` and `R06-S004`; employer/company evidence.
- **C05.2 — Benefits evidence should support continue, change, or stop decisions.** `R06-S013`.
- **C05.3 — Architecture quality is a tradeoff across reliability, security, operational excellence, performance, and cost rather than a maximal checklist.** `R06-S017` and `R06-S018`.
- **C05.4 — Scope should reduce the most consequential uncertainty through reversible, observable milestones.** Book synthesis from the preceding evidence and Phase 05 capstone requirements; it is a decision method, not an empirical law.

## Durable principles

Select a vertical slice crossing representative user, data, integration, control, and operating boundaries. Map dependencies to owners and dates. Separate must-prove, must-build, defer, and reject. Give each milestone evidence, exit, and stop conditions; price uncertainty as a range or experiment rather than false certainty.

## Cases

- `R06-C010` bounds the pilot to an equipment family, region, and user cohort. The executive request for multilingual voice and automated ordering tests change control.
- `R06-C006` is a regulated-workflow transfer case; a broad feature rollout without controls or task evidence would not be “smaller” merely because the UI is simple.

## Disputes and limits

“MVP” can mean minimum marketable product, prototype, or unsafe shortcut. The book uses “first safe production path” to require operational and guardrail evidence. Some risks cannot be piloted on real users and need simulation, review, or specialist approval.

## Remaining gaps

No release blocker. Phase 07 must specify a dependency-map and risk-register format and a stopped-deployment satellite case.

## Manuscript prohibitions

Do not recommend production exposure solely to learn whether a safety, privacy, or authorization control works.

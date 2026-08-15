# Chapter 18 Blueprint — Diagnose Real Use and Incidents

## Purpose and exit capability

Reconstruct behavior regressions and incidents across product, data/context, model, tool, control, and runtime; contain consequence; preserve authority; and verify durable learning.

## Prerequisites and non-scope

- Prerequisite: bounded release, trace/signal catalog, failure model, control matrix.
- Non-scope: general incident-command certification, public disclosure policy, or root-cause certainty without evidence.

## Concepts, skills, and decision models

- Symptom-to-layer diagnostic tree; hypotheses, evidence, disconfirmation, contributing conditions.
- Detection, declaration, containment, communication, correction, recovery, verification, learning.
- Metric gaming, feedback selection, distribution/context change, misuse/adversary paths.
- Skill: contain before optimize and change an artifact/control/eval, not code only.

## Architecture, implementation, and stability

- Companion: incident fixture, corrupted seller signal, trace bundle, false lead, kill/rollback controls, timeline and corrective-action generator.
- Incident method is `durable`; vendor observability/response tools are `replaceable`.

## Scenario and artifact progression

Extend `PF-11` to v0.2 with incident timeline, diagnostic trace, containment, correction, evaluation/control/runbook change, verification, and learning record. Seller gaming raises engagement while compatibility complaints rise.

## Cases and bounded use

- `AAE-C001`: qualitative warning, rollback, evaluation-process change.
- `AAE-C007`: upstream data cause.
- `AAE-C008`: user correction/recovery behavior.
- `AAE-C012`: synthetic incident and metrics.

## Failures, disputes, and tradeoffs

Model blame; single root cause; optimize before contain; sensitive logs; patch without evidence change; metric recovery equals user recovery. Speed, investigation depth, privacy, communication, and reversibility conflict.

## Exercise, companion work, and completion evidence

Triage a layered evidence bundle with one false lead, contain locally, and produce correction plus regression/control/runbook updates. Pass when timeline, affected segment, versions, authority, evidence, residual, and verification reconcile.

## Figures

- `F18.1`: layered diagnostic tree; locates the responsible layer before change.
- `F18.2`: incident learning loop; requires verified artifact/system change.

## Evidence, competencies, depth, and handoff

- Claims: `C18.1`–`C18.6`; sources `AAE-S003`, `AAE-S004`, `AAE-S013`, `AAE-S014`, `AAE-S030`, `AAE-S034`, `AAE-S035`, `AAE-S036`, `AAE-S039`, `AAE-S040`, `AAE-S041`, `AAE-S046`.
- Domains: primary `AAE-K06`, `AAE-K07`, `AAE-K08`, `AAE-K09`.
- Depth: major diagnosis/incident chapter; target 6,500–8,000 words.
- Handoff: Chapter 19 treats a planned/forced provider change with the same evidence discipline.
- Prohibitions: no unsupported model blame, single-cause certainty, sensitive trace publication, or code-only learning.

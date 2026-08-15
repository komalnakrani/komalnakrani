# Chapter 10 Blueprint — Name the Errors That Matter

## Purpose and exit capability

Define a consequence-oriented error taxonomy, criteria, severity/detectability, segment reporting, calibration/abstention tradeoffs, thresholds, controls, and release implications.

## Prerequisites and non-scope

- Prerequisite: frozen evaluation cases and behavior clauses.
- Non-scope: universal metric choice, fairness/safety certification, or conversion of raw model confidence into user probability.

## Concepts, skills, and decision models

- Error type versus cause; consequence, frequency, severity, detectability, reversibility, affected segment.
- Metric/task alignment; threshold and operating point; calibration; risk-coverage/abstention.
- Aggregate versus slice/intersection; evaluator bias; product proxy failure.
- Skill: issue a release disposition under conflicting metrics.

## Architecture, implementation, and stability

- Companion: metric library wrapper, segment/error report, reliability plot data, threshold sweep, abstention policy, failing regression gate.
- Metric definitions are `durable`; exact thresholds/models/judges are `task/version-specific`.

## Scenario and artifact progression

Extend `PF-07` to v0.2 with taxonomy, criterion rubrics, segment report, threshold record, and critical-error gate. Distinguish irrelevant, incompatible, unsupported, stale, overconfident, and correct abstention.

## Cases and bounded use

- `AAE-C001`: taxonomy/feedback blind spot.
- `AAE-C003`: engagement versus relevance/exposure.
- `AAE-C006`, `AAE-C011`: aggregate/segment and operating-point limits.
- `AAE-C012`: fictional severity and threshold policy.

## Failures, disputes, and tradeoffs

One aggregate score; severity after results; calibrated equals correct; threshold selected to pass; fairness as adjective; user preference as long-term value. Coverage, abstention, false-match cost, and user effort conflict.

## Exercise, companion work, and completion evidence

Evaluate two configurations where the aggregate winner harms a critical segment. Pass when the reader selects go/revise/reduce/reject with a preserved taxonomy, threshold rationale, uncertainty, and authority escalation.

## Figures

- `F10.1`: error topology; connects category to consequence, segment, control, and disposition.
- `F10.2`: threshold surface; makes false match, abstention, coverage, and segment tradeoffs visible.

## Evidence, competencies, depth, and handoff

- Claims: `C10.1`–`C10.6`; sources `AAE-S023`, `AAE-S024`, `AAE-S025`, `AAE-S026`, `AAE-S027`, `AAE-S029`, `AAE-S046`, `AAE-S049`, `AAE-S050`, `AAE-S053`.
- Domains: primary `AAE-K01`, `AAE-K06`, `AAE-K08`; secondary `AAE-K02`.
- Depth: major error/decision chapter; target 6,500–8,000 words.
- Handoff: Chapter 11 chooses credible judgment methods for each criterion.
- Prohibitions: no default F1/AUC, one-score safety/fairness claim, uncalibrated probability, or average masking a critical segment.

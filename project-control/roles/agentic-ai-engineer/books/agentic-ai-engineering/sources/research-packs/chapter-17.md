# Chapter 17 Research Pack — Release, Interrupt, Recover, and Learn

## Frozen job and evidence question

Increase exposure through replay, simulation, shadow, read-only,
approval-required and bounded cohorts only when evidence supports the next
question. Decide release, ramp, hold, autonomy reduction, rollback, repair or
retirement. Output is `AR-12`.

## Claims to carry

- `AGE-BCLM-033`: a canary is partial, time-limited exposure evaluated against
  a control.
- `AGE-BCLM-034`: real-effect exposure requires a named question, exit gate and
  reachable stop/containment authority.

## Source findings

- `AGE-BSRC-028` is the primary release source: partial/time-limited canary,
  control comparison, false-positive tradeoff and automated rollout decisions.
- `AGE-BSRC-014`/`AGE-BSRC-015` support duplicate/retry incident mechanics.
- `AGE-BSRC-029` is a bounded monitoring/response case.
- `AGE-BSRC-030` and `AGE-BSRC-043` document staged oversight controls in one
  agent product family.
- `AGE-BSRC-036`/`AGE-BSRC-037` support lifecycle risk management, incident
  documentation and improvement.

## Release ladder

For every stage: hypothesis; environment; traffic/task slice; allowed actions;
effect boundary; authority; control/baseline; metrics and uncertainty; duration;
promotion/hold/rollback criteria; stop mechanism/owner; data handling; incident
path; and evidence updated. Shadow mode must not secretly perform effects.

## FieldOps Relay incident

Dependency slowdown triggers layered retries and duplicate synthetic
reservations. Detect via effect ledger and tail signals; halt new effects;
preserve read/propose mode; reconcile duplicates; identify retry-layer flaw;
patch/test/replay; update AR-04/08/09/11/12; then perform bounded re-release.
Compensation is reported as a new action with residual cost, not rollback magic.

## Phase 07 blueprint seed

Sequence: release questions -> exposure ladder -> gates/stop authority ->
incident lifecycle -> verified correction -> dossier update. Required `F17.1`
and `F17.2`. The chapter must include a hold/retire outcome, not treat broader
release as inevitable.

## Gaps to keep visible

Production and synthetic environments differ. Canary success does not prove
unseen tasks safe, and some effects cannot be rolled back. Incident command,
security disclosure and domain response remain with named organizational owners.

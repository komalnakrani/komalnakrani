# Chapter 19 Research — Change Models Without Losing the Product

## Architecture anchors

- Primary domains: `AAE-K03`, `AAE-K06`, `AAE-K07`, `AAE-K10`
- Dossier milestone: `PF-12`
- Forecast figures: `F19.1`, `F19.2`

## Research question

How can model, provider, data, context, evaluator, or policy change be inventoried, replayed, compared, released, and rolled back while preserving product behavior and evidence?

## Claim and evidence map

- **C19.1 — Provider deprecation creates forced change independent of product readiness.** `AAE-S047` supplies volatile first-party lifecycle evidence; dates must be edition-visible.
- **C19.2 — Interface versioning helps express compatibility intent but cannot specify probabilistic behavior.** `AAE-S048` supplies semantic-versioning vocabulary; behavior contracts and evaluation replay add missing evidence.
- **C19.3 — Registry records improve model/version traceability but do not prove fitness.** `AAE-S052` supplies lifecycle mechanisms; `AAE-S012` and `AAE-S055` supply limitation/documentation records.
- **C19.4 — Production changes require canary/control evidence and rollback.** `AAE-S032` supports bounded comparison; `AAE-S036` supports correlated versions/traces.
- **C19.5 — Multi-metric, segment, calibration, and task evidence can reveal regressions hidden by an aggregate gain.** `AAE-S024`, `AAE-S026`, `AAE-S028`, and `AAE-S049` support replay dimensions.
- **C19.6 — Model updates may change behavior in ways existing evals miss.** `AAE-S046` supplies a concrete first-party example.

## Change dossier

Trigger, current/candidate versions, dependency inventory, interface/schema differences, behavior-contract impact, data/context/evaluator compatibility, offline replay, segment/error/calibration evidence, latency/cost/capacity, control/threat review, shadow/canary plan, rollback, new limitations, disposition, owner, and retirement evidence.

## Cases

- `AAE-C001` is the primary behavior-regression and rollback case.
- `AAE-C002` reminds that representation, index, and catalog versions can move together.
- `AAE-C004` tests shared-model blast radius.
- `AAE-C005` prevents silent dataset/context transfer.
- `AAE-C009` exposes provider/API constraint changes.
- `AAE-C012` forces a four-week provider retirement with better average relevance but worse abstention and tail cost.

## Disputes and limits

No replay set proves future equivalence. Hosted providers can change behavior or infrastructure outside application control. “Same API” is not same product. Permanent dual-running may be too costly; reversibility needs explicit investment.

## Remaining gaps

No release-blocking gap. No current provider/model comparison is locked; Phase 07 must use synthetic candidate versions in the core case.

## Blueprint constraints

Require a compatibility matrix that includes unchanged, improved, regressed, unknown, and untestable clauses. Migration must support delay, scope reduction, or alternate deterministic path.

## Manuscript prohibitions

Do not promise vendor independence from an adapter alone, treat a provider recommendation as evaluation, or silently rewrite the behavior contract to make a migration pass.

# Appendix D - Provider-Neutral Companion Guide

## Purpose and boundary

The companion turns selected book decisions into deterministic local artifacts. It demonstrates how behavior contracts, representative-state warnings, retrieval, boundaries, evaluation, operations, controls, release, incidents, migration, reuse, and leadership can compose without making a provider account the prerequisite for understanding the system.

It uses Node.js built-ins, repository files, fixed seeds, and synthetic Patchwork records. It needs no API key, paid service, customer data, network access, or external effect. The default runner cannot contact a seller, purchase an item, mutate a real system, or authorize release.

A passing companion run proves only that the included implementation satisfies its included tests for the supplied versions and fixtures. It does not prove real data coverage, model quality, identity, permission, latency, cost, accessibility, privacy, safety, security, user value, production reliability, provider portability, or organizational authority.

## Commands

From the repository root:

```sh
npm run test:companion:aae
node content/publications/applied-ai-engineering/companion/run.mjs
```

The test command runs the complete 109-test suite. The runner prints a compact final synthetic dossier view. Repeated runs should be byte-identical for the same repository state. If output changes, treat the change as evidence requiring review: identify the changed fixture, generator, policy, library, or artifact version rather than updating an expected snapshot blindly.

The broader repository gate is:

```sh
npm run check
```

It includes publication validation, repository tests, the site build, and built-site reference checks. A full repository pass still does not replace Applied AI content review or final web/PDF inspection.

## Directory map

### `contracts/`

- `behavior-contract.schema.json` defines the machine-readable clause envelope.
- `patchwork-behavior-contract.json` supplies fifteen synthetic clauses with evidence, authority, and change triggers.
- `applied-ai-interfaces.schema.json` describes combined-system interfaces.
- `patchwork-interface-set.json` records the eight Patchwork boundaries and their trust, state, validation, failure, owner, and authority fields.
- `evaluation-case.schema.json` defines versioned case structure.

The schemas test shape. The libraries and fixtures add semantic policy. A structurally valid object may still be unauthorized, incompatible, stale, unsupported, or prohibited.

### `data/`

- `generate-dataset.mjs` creates fixed synthetic task records.
- `patchwork-data-card.json` records construction, segments, leakage warnings, unsupported groups, and prohibited claims.

The generator deliberately exposes the danger of a naive row split and shows a grouped clean split for the known duplicate route. It does not establish representativeness. A clean synthetic split can still omit real long-tail populations, user behavior, language, geography, device, seller practice, or label ambiguity.

### `evaluation/`

- `generate-cases.mjs` builds versioned cases and coverage evidence.
- `generate-decision-fixtures.mjs` creates deterministic metric, grader, and decision examples.
- `pf-07-error-policy.json` preserves error taxonomy, thresholds, critical gates, and limitations.
- `pf-07-evaluator-design.json` assigns claims to deterministic checks, reference comparison, calibrated rater/grader use, specialist review, or formal authority.

The biased model-grader fixture is intentionally bounded. It demonstrates position or verbosity sensitivity and preserves disagreement. It is not a recommended universal evaluator.

### `experiments/`

`pf-08-experiment-plan.json` records a preregistered synthetic paired comparison. The plan has a stable identity before result generation. The associated library verifies plan/result ordering, pairing, critical-segment behavior, negative evidence, and ablation identity.

### `operations/`

- `pf-09-failure-recovery.json` records layered failure injections, retry and circuit policy, fallback ladder, stop, recovery, and reconciliation.
- `pf-09-resource-budget.json` records three synthetic quality/latency/capacity/cost configurations and request segments.
- `pf-09-observability-policy.json` records purpose-limited signals, allowlisted trace fields, forbidden raw fields, retention examples, deletion evidence, and blind spots.

All numeric budgets and retention values are fictional teaching policy. They are not Patchwork production measurements or universal recommendations.

### `controls/`

`pf-10-control-matrix.json` connects six threats or harms to objectives, implementation, tests, monitors, residual limits, reviewers, and authority. The companion contrasts prompt-only policy with deterministic seller-content isolation and tests permission, compatibility, evidence, confirmation, idempotency, unknown outcome, reconciliation, and audit behavior.

### `releases/`

- `pf-11-readiness.json` defines a restricted synthetic rollout whose image-heavy and ambiguous segments remain excluded.
- `pf-11-incident.json` records a bounded fictional incident, chronological evidence, a disconfirmed model hypothesis, contributing data/context and metric conditions, containment, correction, privacy-conscious traces, recovery, and durable learning.

No release or incident occurred outside the fixture. The records teach state and evidence structure.

### `change/`

- `pf-12-change-dossier.json` compares baseline and candidate behavior, preserves critical regression, and controls migration/rollback.
- `pf-12-reuse-ledger.json` classifies ten assets, preserves local decisions, and rejects one tempting abstraction.
- `pf-12-leadership.json` compares three fictional systems, preserves distinct authority, communicates at six altitudes, and verifies the final dossier without making a production claim.

## Library responsibilities

The `lib/` modules are intentionally small and provider-neutral:

- `validate-contract.mjs` and `validate-data.mjs` enforce structural and semantic preconditions;
- `retrieval.mjs` provides lexical, vector-like, and hybrid candidate channels with evidence;
- `interfaces.mjs` validates trust/state/authority boundaries;
- `vertical-slice.mjs` composes the inspectable request path;
- `evaluation.mjs`, `metrics.mjs`, and `judgment.mjs` build coverage, errors, thresholds, graders, and disagreement evidence;
- `experiment.mjs` binds plan, fixtures, result, ablation, and disposition;
- `reliability.mjs`, `budgets.mjs`, and `observability.mjs` implement bounded failure, resource, trace, retention, and diagnostic behavior;
- `controls.mjs` enforces implemented control and effect sequencing;
- `release.mjs` routes cohort, readiness, stop, and rollback;
- `incidents.mjs` orders evidence, hypotheses, containment, correction, and learning;
- `migration.mjs` preserves contract compatibility and recovery during change;
- `reuse.mjs` tests evidence-gated portability;
- `leadership.mjs` preserves portfolio reasons, delegation, altitude, authority, and final non-proof.

Each module has a narrower job than the product. This keeps failure localization possible and prevents a framework-like wrapper from becoming hidden product policy.

## Test map

Tests are organized by the chapter that introduced the behavior. They cover:

- schema and behavior-state completeness;
- deterministic data generation and known leakage;
- retrieval channel evidence, permission, freshness, conflict, empty evidence, and inert seller instructions;
- boundary ownership, untrusted proposals, zero effect, invalid output, timeout, and authorization failure;
- evaluation coverage, split hashes, contamination, errors, thresholds, and segment gates;
- evaluator calibration, bias, disagreement, and authority separation;
- experiment preregistration, paired cases, ablations, and negative dispositions;
- retry, idempotency, unknown effects, circuits, fallback, and recovery;
- latency/capacity/cost tails and critical segments;
- redaction, retention deletion, feedback bias, and decision-bearing signals;
- implemented controls, exact confirmation, permission, audit, and risk authority;
- restricted rollout, deterministic cohort, stop, rollback, incident chronology, disconfirmation, and durable learning;
- compatibility migration, rollback, reuse rejection, portfolio ordering, delegation, and final production-claim refusal.

A test name should state the protected behavior. Avoid snapshot tests that merely preserve wording. When a test changes, record which behavior contract clause or artifact version changed and why.

## Adding a provider adapter

Provider integration is optional. If added, keep the deterministic local adapter as the reference and follow this sequence:

1. define the provider boundary behind the existing request/result schema;
2. record provider, model/API version, adapter version, access date, configuration, and region;
3. keep secrets outside source, fixtures, logs, and test output;
4. validate partial, malformed, delayed, refused, and policy-blocked responses;
5. keep retrieved or model-produced instructions untrusted;
6. map provider errors into stable product states without erasing detail needed for diagnosis;
7. rerun frozen and challenge cases by segment;
8. measure latency, capacity, and cost under representative conditions;
9. test fallback, cancellation, retry, and circuit behavior;
10. update threat/control, observation, release, and change artifacts;
11. record regressions, unknowns, untestable behavior, and prohibited inferences;
12. obtain the required review and authority before exposure.

Do not weaken the contract because a provider schema is inconvenient. Do not expose raw provider output directly to users or tools. Do not make a provider score into correctness. Do not place an effect behind a model response without deterministic permission, validation, confirmation, idempotency, audit, and reconciliation.

## Adding representative evidence

Real evidence should enter through governed boundaries, not by replacing synthetic files casually.

- Create a separate data card with purpose, permission, provenance, retention, access, segments, missingness, and deletion plan.
- Keep customer or personal data outside the publication repository.
- Preserve construction groups and freeze a release evaluation version.
- Separate development, evaluator calibration, challenge, and release evidence.
- Add tests for excluded, unauthorized, stale, conflicting, and absent states.
- Record which synthetic assumptions were confirmed, rejected, or remain unknown.
- Update only the claims the representative evidence can support.

If the data cannot be used legitimately or the population cannot be described, stop. More records do not repair an undefined claim.

## Failure and debugging protocol

When the runner or test suite changes unexpectedly:

1. identify the first failing behavior, not the most visible downstream symptom;
2. compare contract, fixture, data, schema, policy, and library versions;
3. reproduce with the smallest deterministic case;
4. inspect trust, state, permission, and failure-layer evidence;
5. test competing hypotheses and record disconfirmation;
6. contain any effect path before retrying;
7. correct the responsible artifact and add a regression case;
8. rerun the focused chapter tests, then all 109 tests, publication validation, and the full repository check;
9. compare runner output and hash;
10. update limitations and handoff records.

Do not regenerate fixtures until a failure disappears. That erases evidence.

## Safe extension checklist

An extension is ready for review only when:

- local deterministic behavior still runs without credentials;
- schemas and product states remain stable or are explicitly versioned;
- permission, freshness, compatibility, uncertainty, and zero-effect behavior remain visible;
- representative cases include failure and critical segments;
- raw sensitive content is not logged by default;
- retries, timeouts, cancellation, and unknown effects are bounded;
- provider-specific facts are versioned and source-limited;
- negative evidence and unsupported claims remain in the dossier;
- fallback and rollback are executable;
- review and formal authority remain separate.

The companion earns its value by being inspectable. If an extension makes the system more realistic but less reviewable, it has moved away from the book's purpose.

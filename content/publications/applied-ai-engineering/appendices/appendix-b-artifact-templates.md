# Appendix B - Artifact Templates

These templates turn chapter decisions into durable, reviewable records. Copy and version them. An empty template is not evidence, and a completed document is not proof that the described test, review, control, or recovery was executed.

Every artifact should begin with a common header:

- artifact ID, semantic version, status, and last review time;
- purpose, decision supported, scope, population, segments, and environment;
- owner, evidence contributors, reviewers, and separate decision authority;
- input artifacts with versions, provenance, and hashes where useful;
- facts, observations, inferences, assumptions, unknowns, and prohibited inferences;
- evidence, negative evidence, limitations, and unresolved gaps;
- disposition, dissent, expiry, change triggers, next gate, and links to issue/build/source.

Use `draft`, `under review`, `accepted for stated scope`, `superseded`, or `retired` rather than an unlabeled `complete`. Preserve previous versions. If a later result changes the decision, append or supersede; do not rewrite history.

## PF-01 - Responsibility charter and task brief

### Purpose

Establish why the task matters, what current behavior exists, which decisions belong to the Applied AI Engineer, and what evidence could narrow or stop the opportunity before mechanism choice.

### Inputs

Initial request, permitted user/workflow evidence, current baseline, affected groups, known constraints, named product/domain/formal authorities, and evidence-access limitations.

### Complete when

The team can describe the task without naming an AI mechanism; distinguish observed baseline from assumed value; state consequences and non-goals; classify core/shared/supporting/out-of-scope responsibilities; and identify the cheapest next evidence that can change build, narrow, defer, or stop.

### Structure

```text
Task actor and affected groups:
Trigger and context:
Current decision/action:
Current baseline and evidence:
Friction and consequence:
Value hypothesis and proxy ladder:
Non-goals and prohibited claims:
Assumption / disconfirmation / owner / next test:
Engineering responsibility:
Shared and adjacent-role responsibility:
Formal decision authority:
Stop conditions:
```

### Patchwork example

The narrow task is helping a user discover evidence-supported repair-part candidates when seller listings are inconsistent. The charter excludes automatic purchase, guaranteed compatibility, invention of missing dimensions, and safety approval. If users cannot provide or recover the evidence needed to distinguish candidate families, the correct decision may be non-AI guidance, narrower scope, or stop.

## PF-02 - Behavior and authority contract

### Purpose

Translate product intent into observable clauses that cover success, uncertainty, failure, degraded behavior, prohibited behavior, evidence, ownership, and change.

### Complete when

Every consequential clause names trigger, input state, required or prohibited output/effect, evidence, validator, owner, authority, fallback, telemetry, test, limitation, and revision trigger.

### Clause template

| Field | Record |
| --- | --- |
| Clause ID/version | Stable identity and current version |
| Trigger and actor | Who initiates which task state |
| Preconditions | Permission, evidence, context, product state |
| Required behavior | Observable result and reason |
| Uncertain/abstain behavior | Clarification, abstention, escalation, degradation |
| Prohibited behavior/effect | What must never cross the boundary |
| Evidence and validator | What supports the state and how it is checked |
| Owner and authority | Implementation owner versus decision right |
| Test and signal | Offline case, runtime state, alert or review |
| Fallback/recovery | Safe next state and reconciliation |
| Limit/change trigger | Unsupported scope and refresh condition |

Include an authority map that separates suggestion, user correction, trained review, specialist evidence, domain decision, formal authorization, and execution.

## PF-03 - Mechanism decision record

### Purpose

Compare the simplest plausible mechanisms against the behavior contract and select the least complex adequate portfolio.

### Candidate table

For rules, structured lookup, lexical retrieval, learned retrieval, ranking, prediction, generation, bounded tools, and hybrids, record:

- contract clauses supported and unsupported;
- required data and evaluation evidence;
- consequential error surface;
- latency tail, capacity, and total cost;
- privacy, security, abuse, and permission surface;
- operability, observability, fallback, and provider-change burden;
- uncertainty that remains;
- cheapest falsifying experiment;
- disposition: use, test, defer, reject, or keep as fallback.

### Decision statement

```text
For task scope ___ and contract version ___, choose ___ because evidence ___ supports clauses ___ within limits ___. Reject/defer ___ because ___. Preserve fallback ___. Reopen when trigger ___ occurs. Owner ___ recommends; authority ___ decides the product scope.
```

Do not use a maturity ladder. More complex mechanisms are not later or better by default.

## PF-04 - Data card and context contract

### Purpose

Separate evaluation/task-data evidence from runtime context behavior while preserving provenance, permission, freshness, sampling, segments, and missing states.

### Data card sections

- intended task population and unit of analysis;
- source, collection purpose, permission, license/terms, and access controls;
- observed sample, construction method, dates, versions, and hashes;
- labels, guidance, reviewers, disagreements, missingness, and uncertainty;
- segments, intersections, rare/consequential cases, excluded and unknown groups;
- duplicate/construction groups, split policy, leakage paths, and freeze;
- known bias, coverage limit, misuse risk, refresh, retention, deletion, and retirement;
- supported and prohibited claims.

### Context contract sections

- query/input transformation;
- eligible sources and source-selection policy;
- candidate interface shared across retrieval channels;
- permission and freshness enforcement;
- ranking/deduplication and known incompatibility dominance;
- assembly budget and provenance returned to downstream behavior;
- fresh, stale, conflicting, unauthorized, absent, and insufficient evidence states;
- trace fields, raw-content policy, owner, fallback, and recovery.

Task data may support an evaluation claim without being eligible runtime context. Runtime context may be current and authorized without representing the release population. Keep the records separate and linked.

## PF-05 - Combined-system boundary set

### Purpose

Make trust, state, failure, ownership, and authority transitions visible across the complete product path.

For each boundary record:

```text
Boundary ID and direction:
Caller / receiver / owner:
Input schema and trust state:
Authentication and permission context:
Validation and semantic policy:
State read/write and finality:
Learned proposal or deterministic decision:
Possible external effect:
Failure and timeout states:
Retry/idempotency/reconciliation:
Evidence/trace fields:
Fallback and recovery:
Authority and escalation:
```

Add system/context, trust, state, failure-propagation, and authority views. A single architecture diagram rarely answers all five questions.

## PF-06 - Inspectable vertical slice record

### Purpose

Prove that one production-shaped path can execute locally, succeed, abstain, degrade, fail safely, and explain its state without provider secrets or external effects.

### Record

- exact user task and contract clauses implemented;
- repository map and clean-run command;
- fixtures, deterministic seeds, schemas, and component versions;
- request-to-result trace with boundary states;
- success, abstention, invalid output, timeout, authorization failure, and empty-evidence cases;
- zero-effect rule and reversible draft behavior;
- expected test output and hash where stable;
- doubles and adapters;
- known non-proof: real provider, identity, performance, data, user, control, or release evidence;
- debt, owner, exit condition, and next evaluation need.

A second reviewer should be able to run and explain the slice from a clean checkout. Hidden author steps are a defect.

## PF-07 - Evaluation set, error policy, and evaluator design

### Evaluation-set card

Record case ID, source/provenance, construction group, behavior clauses, segments, data/context state, mechanism path, consequence class, expected state, evaluation method, split, freeze version, and limitation. Include ordinary, edge, adversarial, interaction, and failure cases without claiming synthetic frequency represents prevalence.

### Coverage matrix

Map behavior clause x segment x data state x mechanism x consequence. Keep empty cells visible. State whether a gap is accepted for a narrower scope, requires construction, is untestable by the current method, or blocks the claim.

### Error policy

For each error or correct abstention state record consequence, severity, affected segment, detectability, reversibility, control, metric, threshold, disposition, owner, and authority. Keep critical gates separate from aggregate scores.

### Evaluator design

| Claim type | Cheapest credible evaluator | Calibration/maintenance | Limit | Authority |
| --- | --- | --- | --- | --- |
| Structural invariant | Deterministic check | Versioned fixtures | Shape is not meaning | Application owner |
| Reference-grounded match | Reference comparison | Reference freshness | Reference may be incomplete | Domain owner |
| Bounded qualitative criterion | Calibrated grader/rater | Blind sample and disagreements | Bias and scope remain | Review owner |
| Specialist fact | Qualified specialist | Evidence and scope review | Specialist limits apply | Domain authority |
| Release/risk acceptance | Evidence packet | Current gate | Not an evaluator score | Named authority |

Preserve disagreement and failed calibration. Never convert reviewer majority into formal authorization.

## PF-08 - Experiment packet

### Preregistered plan

- decision and allowed dispositions;
- hypothesis and falsifying result;
- baseline identity;
- one controlled change or named factor design;
- frozen suite, version, seed, groups, and hash;
- primary metric, guardrails, critical segments, and practical threshold;
- pairing, randomization where applicable, stopping, and missing-data handling;
- planned uncertainty method;
- ablations and confounds;
- prohibited inferences;
- owner, reviewer, and authority;
- plan version/hash created before results.

### Result packet

Record executed plan hash, deviations, per-case pairing, aggregate and segment results, guardrails, uncertainty, failures, negative evidence, confounds, operational envelope, and disposition. If the plan changes after result inspection, create a new exploratory record. Do not relabel it preregistered.

## PF-09 - Failure, resource, and observation packet

### Failure register

For each failure injection record layer, symptom, user consequence, signal, owner, propagation, retry safety, idempotency key, circuit behavior, fallback, stop, recovery, reconciliation, and verified evidence.

### Resource envelope

Record end-to-end and component budgets, critical path, cold/warm state, p50/p95/p99 method, concurrency, capacity, queue, fan-out, retries, caching semantics, quality, cost units, critical segments, selected frontier point, and degradation policy. Synthetic numbers remain synthetic.

### Observation policy

For each signal record purpose, sensitivity, fields, owner, decision, threshold, segment, version association, retention, access, deletion evidence, blind spot, and raw-content rule. Feedback is selected evidence, not population truth. Drift or correlation is not cause.

## PF-10 - Implemented control and authority packet

For each threat/harm:

```text
Affected party and consequence:
Control objective:
Policy statement:
Implementation location/version:
Prevent/detect/respond behavior:
Test fixture and observed evidence:
Runtime monitor and owner:
Bypass/failure mode:
Residual limitation:
Qualified reviewer:
Formal authority disposition:
Expiry/change trigger:
```

For an effectful tool, add proposed-effect identity, validation, permission, exact confirmation binding, idempotency, submission, audit allowlist, completion/unknown state, reconciliation, and recovery. A policy sentence disconnected from implementation and tests is not control evidence.

## PF-11 - Readiness, release, and incident packet

### Readiness record

Record exact release identity, contract/evaluation/control/resource evidence, unresolved gaps, eligible and restricted segments, exposure mode, cohort attribution, control population, observation window, support/command, stop triggers, rollback, reconciliation, recommendation, authority, and communication plan.

Allowed dispositions are `go`, `conditional`, `reduce scope`, `delay`, or `stop`. A blended readiness score is prohibited when unlike dimensions or blocking gaps would disappear inside it.

### Incident record

- symptom, affected behavior/segment/consequence, and detection evidence;
- command/roles and authority;
- chronological facts, unknowns, decisions, and communications;
- containment before optimization;
- redacted trace bundle and version identity;
- hypotheses by product, data/context, model, control, tool, runtime, instrumentation, and human-process layer;
- evidence for, evidence against, supported, disconfirmed, and unresolved status;
- restoration, correction, recovery verification, and residual limits;
- durable changes to evaluation, controls, runbook, code, ownership, and release evidence;
- renewed-exposure gate.

Do not close an incident merely because a metric returned to baseline.

## PF-12 - Change, reuse, and leadership dossier

### Change dossier

Inventory provider/model/data/context/policy dependencies. Freeze the product contract. Run paired replay and classify each clause/segment/operational row as improved, unchanged, regressed, unknown, or untestable. Record migration states, review, shadow, cohort, fallback, rollback, reconciliation, retirement criteria, owner, and authority. Never rewrite the contract to fit the candidate result.

### Reuse ledger

For every candidate asset record current local use, independent contexts, invariant, variance, stable seam, configuration, local decisions retained, consumer contract, isolation, owner, fallback, compatibility, migration, maintenance cost, adoption evidence, disconfirmation, and disposition: keep local, test again, adapt, share, or reject.

### Leadership record

For each system preserve consequence, evidence gap, active change, operational burden, leverage, control/ownership gap, negative evidence, recommendation, next gate, decision right, and escalation. Then produce communication at the required altitude without changing the underlying facts. Delegation must name scope, evidence, gate, owner, review, escalation, authority, and declined responsibility.

## Artifact closeout

End every artifact with:

```text
Supported narrow claim:
Unsupported or prohibited claim:
Negative/disconfirming evidence retained:
Residual limitation:
Disposition and authority:
Next owner and trigger:
Supersedes / superseded by:
Source, build, test, and issue references:
```

The dossier is complete when its decisions are reviewable and resumable. Completeness does not mean production success, zero uncertainty, or universal portability.

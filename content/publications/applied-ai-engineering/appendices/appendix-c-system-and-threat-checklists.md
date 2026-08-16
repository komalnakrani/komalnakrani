# Appendix C - System and Threat Checklists

Checklists are prompts for evidence, not evidence themselves. For each item record `met`, `gap`, `exception`, `reduced scope`, `block`, or `not applicable with reason`; link the current artifact and version; name the owner and separate decision authority; state the affected consequence and segment; and define the next trigger. A checked box without executed evidence is a gap.

## Task and behavior review

- Is the task stated without assuming an AI mechanism?
- Are actor, trigger, context, current decision/action, baseline, friction, consequence, and affected groups explicit?
- Are observed facts separated from reports, inferences, assumptions, and unknowns?
- Can evidence reject the value hypothesis or choose a non-AI path?
- Does every important behavior clause define success, uncertainty, abstention, escalation, degradation, and prohibition as needed?
- Are non-goals and prohibited claims visible to implementation and evaluation?
- Does every clause name evidence, validator, fallback, owner, authority, test, limitation, and change trigger?
- Can a user correct, challenge, or exit the behavior where the task requires it?
- Is the simplest adequate mechanism selected by evidence rather than novelty?
- Are stop, defer, and narrow-scope outcomes genuine options?

## Data and evaluation evidence review

- Is the intended population distinct from the observed sample?
- Are source, purpose, permission, provenance, dates, versions, and retention explicit?
- Are labels, guidance, reviewer qualification, disagreement, ambiguity, and missingness documented?
- Are important segments and intersections visible, including excluded and unknown groups?
- Are duplicate, template, time, label, feature, reviewer, and evaluator-development leakage paths controlled?
- Are construction groups kept together across splits?
- Is the release set frozen and identified by version or hash?
- Does every evaluation case map behavior clauses, segments, data states, mechanisms, and consequences?
- Are ordinary, rare, edge, adversarial, interaction, and dependency-failure cases present without synthetic prevalence claims?
- Are correct abstention and degraded behavior separated from error?
- Are critical errors reported separately from aggregate quality?
- Are thresholds versioned as consequence policies with segment views?
- Is each claim assigned to the cheapest credible evaluator?
- Are graders and raters calibrated on blind, relevant cases with bias and disagreement visible?
- Does specialist evidence remain distinct from formal authority?
- Are uncertainty, practical importance, confounds, negative results, and prohibited inferences retained?

## Context and retrieval review

- Are query transformation, source selection, candidate generation, filtering, ranking, assembly, and downstream use separately inspectable?
- Does the candidate interface expose evidence ID, provenance, permission, freshness, and channel score or reason?
- Are permission and freshness enforced before content becomes eligible?
- Do known incompatibilities dominate similarity or ranking scores?
- Are duplicate or canonical item clusters handled explicitly?
- Are seller or retrieved instructions treated as inert data rather than trusted commands?
- Does missing evidence lead to clarification, abstention, safe fallback, or escalation instead of generated substitution?
- Are stale, conflicting, unauthorized, absent, and insufficient states distinguishable?
- Does context assembly have a budget and a traceable exclusion reason?
- Are memory and cache keys scoped by identity, permission, tenant, version, and freshness where applicable?
- Can the team localize a regression before blaming the model?

## Combined-system boundary review

- Does the architecture include user/interface, application, policy/control, data/context, learned component, tools/effects, runtime, and human authority?
- For every boundary, are caller, receiver, schema, trust state, validation, owner, failure, and authority explicit?
- Is learned output untrusted until deterministic and domain validation passes?
- Are product state and external effect separate from a model or tool proposal?
- Are authentication, authorization, tenant, region, purpose, resource, operation, and expiry checked at the effect boundary?
- Are partial output, invalid shape, invalid semantics, timeout, cancellation, duplication, and unknown completion represented?
- Does every retry state whether the operation is read-only or idempotent?
- Is ambiguous external completion reconciled before any repeated effect?
- Are feature/config/model/data/schema/policy/control versions traceable in the result?
- Can one request be traced through every consequential transition without retaining prohibited raw content?
- Does the path run locally without secrets, paid services, customer data, or hidden author steps?

## Probabilistic failure and recovery review

- Is failure classified by layer before a corrective change is chosen?
- Does the record connect cause, symptom, propagation, consequence, detection, containment, owner, and recovery?
- Are timeouts bounded and distinct from confirmed failure?
- Are retries limited by attempts, backoff, jitter, deadline, capacity, and idempotency?
- Can retry amplification open a circuit or trigger reduced capability?
- Does the fallback ladder move by consequence rather than convenience?
- Are alternate path, reduced capability, abstention, human review, and stop distinct?
- Is recovery evidence executed for the current artifact and state?
- Does recovery include reconciliation of in-flight or externally visible state?
- Can the system remain safely stopped when evidence or authority is absent?
- Are rollback, roll-forward, isolate, restore, and retire chosen according to actual state rather than preference?

## Latency, capacity, and cost review

- Is the budget end-to-end from user action to usable state?
- Are p50, p95, p99, failure, cold/warm, and critical-segment paths separated?
- Are fan-out, parallelism, queues, timeouts, and retries included?
- Is capacity measured under representative concurrency and traffic mix?
- Are caches permission- and freshness-correct?
- Does batching preserve request isolation, deadline, and attribution?
- Are quality, latency, capacity, cost, privacy, and failure considered on one decision frontier?
- Can a fast aggregate configuration still fail a critical-segment or permission gate?
- Are provider charges separated from total cost, including storage, review, operations, and maintenance?
- Are synthetic units and illustrative timings explicitly bounded?
- Does over-budget behavior degrade visibly instead of hiding latency or expense?

## Privacy-conscious observability review

- Does every signal name purpose, sensitivity, owner, decision, threshold, retention, access, and blind spot?
- Are user outcome, product use, behavior, context, model, tool, control, service, capacity, cost, and feedback signals distinguished?
- Can green service health coexist visibly with failed product behavior?
- Are trace fields allowlisted rather than collected by default?
- Are raw prompts, outputs, documents, images, names, contact details, secrets, and full network identifiers excluded unless separately justified and authorized?
- Are evidence IDs, behavior states, failure layers, versions, latency/cost units, and policy flags sufficient for the intended diagnosis?
- Are minimization, redaction, purpose, access, retention, aggregation, deletion, and deletion evidence implemented?
- Does feedback remain selected, potentially biased evidence rather than population truth?
- Are drift and correlation treated as hypotheses rather than causes?
- Are privacy, security, legal, and records decisions routed to their authorities?

## Threat and control review

- Are affected party, harm, asset, trust boundary, attacker capability, misuse, and consequence explicit?
- Are prompt/input injection, retrieved-content manipulation, data exposure, permission bypass, cross-tenant leakage, tool misuse, denial, fraud, and overreliance considered where relevant?
- Does each control connect objective, implementation, version, test, monitor, owner, residual, reviewer, and authority?
- Is a policy sentence prevented from being counted as implemented control evidence?
- Does typed output still pass permission, evidence, compatibility, and prohibited-claim validation?
- Are untrusted instructions kept inert across context and tool boundaries?
- Does confirmation bind the exact proposed effect, target, parameters, and current state?
- Are effect requests idempotent and minimally audited?
- Does unknown effect outcome reconcile before retry?
- Are audit records allowlisted and free of secrets or raw sensitive content?
- Can the engineer recommend but not accept residual risk outside delegated authority?
- Do controls have expiry, monitoring, failure response, and retest triggers?

## Release and readiness review

- Is release identity complete across feature, code, configuration, model adapter, data, schema, policy, controls, evidence, and cohort?
- Does the exposure mode answer a named uncertainty with the smallest justified blast radius?
- Are shadow outputs and effects truly invisible or disabled?
- Are eligible and restricted segments enforced in routing?
- Is the control population and attribution method explicit?
- Are quality, behavior, operations, controls, privacy, qualitative evidence, and recovery reviewed separately?
- Are unresolved gaps preserved rather than averaged into a readiness score?
- Are go, conditional, reduce scope, delay, and stop all available?
- Are stop triggers absolute where consequence requires it?
- Are rollback mechanism, state reconciliation, owner, authority, and communication rehearsed?
- Can deadline or revenue pressure be recorded without becoming evidence?
- Does the decision record distinguish engineering recommendation from release authority?

## Incident and learning review

- Is consequence contained before optimization begins?
- Are command, roles, decision rights, and communication cadence explicit?
- Does the timeline separate confirmed facts, unknowns, decisions, and hypotheses?
- Are traces minimized and access-controlled?
- Are hypotheses generated across product, data/context, model, control, tool, runtime, instrumentation, and human-process layers?
- Does every hypothesis list supporting and disconfirming evidence and the next discriminating test?
- Can the tempting model hypothesis be disconfirmed and retained as a false lead?
- Are restoration, correction, recovery, and renewed exposure separate states?
- Does recovery verification include affected segments and behavior, not service metrics alone?
- Does durable learning update evaluation cases, controls, runbooks, code, ownership, and release evidence as appropriate?
- Are residual limitations and authority required before exposure resumes?

## Model/provider change review

- Is every direct and transitive provider/model/data/context dependency inventoried?
- Is the product behavior contract frozen before candidate results are inspected?
- Does paired replay preserve case, segment, evaluator, and versions?
- Are improved, unchanged, regressed, unknown, and untestable rows all visible?
- Can aggregate improvement be blocked by a critical regression?
- Are operational changes in latency, cost, capacity, privacy, observability, controls, and fallback included?
- Do replay, review, shadow, bounded cohort, migration, retirement, delay, stop, and rollback retain explicit transitions?
- Does fallback restore contract identity and reconcile state?
- Does retirement require dependency removal, owner acceptance, runbook change, and retained recovery evidence?

## Reuse and leadership review

- Are at least two independent contexts available before a repeated pattern is claimed?
- Is the invariant separated from local data, thresholds, segments, policy, authority, and workflow meaning?
- Is the proposed seam stable, versioned, isolated, owned, observable, reversible, and maintainable?
- Are consumers, migration, compatibility, fallback, economics, and disconfirmation explicit?
- Is one-case platform promotion rejected?
- Is rejected abstraction retained as negative evidence?
- Does portfolio attention follow consequence and evidence gap rather than hype, title, or revenue alone?
- Does every recommendation preserve limitation, uncertainty, owner, next gate, decision right, and escalation?
- Does delegation state scope, evidence, review, authority, and declined responsibility?
- Do communications at different altitudes preserve the same facts and evidence identity?
- Is growth demonstrated through decisions and systems improved rather than heroics?

## Review closeout

End any checklist review with:

- exact scope, version, cohort, and date;
- participants, evidence owners, reviewers, and decision authority;
- met items with current evidence links;
- gaps, exceptions, reduced scope, and blocks with consequence and segments;
- options, recommendation, dissent, and final authority disposition;
- immediate containment or communication actions;
- widen, hold, stop, recover, refresh, or retire triggers;
- next review and source/build/issue identity.

The checklist closes when the next decision is supported and the unresolved state is explicit. It does not close because every line is marked green.

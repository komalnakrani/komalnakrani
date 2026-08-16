# Appendix E - Terminology and Adjacent-Role Guide

Terminology is part of system behavior. When teams use `model`, `AI`, `agent`, `evaluation`, `safe`, `ready`, or `owner` as interchangeable shorthand, they hide different evidence and authority. This guide defines the book's canonical use. An organization may use different titles; responsibility evidence matters more than title matching.

## Role terms

- **Applied AI Engineer:** product-oriented engineer who turns available AI capability into useful, measurable, reliable, and governable behavior for a defined task. The role owns combined-system implementation and evidence within delegated scope, not every adjacent specialist or formal decision.
- **AI Engineer / Applied AI Software Engineer:** possible employer aliases. Treat them as equivalent only when the responsibilities match the book boundary.
- **Machine Learning Engineer (MLE):** role centered on model/data lifecycle engineering such as training, feature/data pipelines, serving, monitoring, and model performance. An MLE may also do applied product work, but the title alone does not transfer product, specialist, or formal authority.
- **LLM Engineer:** narrower specialization focused on language-model behavior, instruction/context construction, evaluation, adaptation, and integration. Language models are one possible mechanism inside Applied AI Engineering.
- **Agentic AI Engineer:** narrower specialization focused on systems that choose or sequence actions, use tools, maintain state, and operate under autonomy boundaries. Agentic mechanisms are not the default maturity stage.
- **Forward Deployed Engineer (FDE):** customer-embedded engineer who owns ambiguous workflow discovery through production, adoption, stabilization, handoff, and field-to-product learning. Applied AI may be part of an FDE engagement, but customer-engagement ownership is not imported into this role.
- **AI/ML Researcher:** role that creates new capability or knowledge through research questions, methods, experiments, and publication or transfer. Applying available capability does not become research merely because uncertainty exists.
- **Data Engineer / Analytics Engineer:** roles responsible for data movement, modeling, quality, transformation, and analytical availability. Applied AI Engineers consume and help specify these boundaries but do not silently absorb enterprise data ownership.
- **Product Manager:** role accountable for product problem framing, prioritization, strategy, and product decisions in its organizational context. Applied AI Engineers supply technical and behavioral evidence; product authority remains explicit.
- **Domain specialist:** person qualified to judge task-specific facts or consequences. Specialist evidence can establish or dispute a domain claim but does not automatically authorize product exposure or accept organizational risk.
- **Security, privacy, safety, legal, compliance, and accessibility specialist:** qualified reviewer for the relevant discipline. Engineering implements and tests controls, but specialist and formal authority remain distinct.
- **Site Reliability / Production Engineer:** role focused on service reliability, capacity, incident practice, and operability. Applied AI operational quality extends these concerns into behavior and evidence; it does not erase production ownership boundaries.

## Product and system terms

- **AI capability:** behavior a learned model or service can exhibit under some conditions. Capability is not yet a product promise.
- **model component:** versioned learned component and adapter inside the combined system.
- **combined system:** interface, application, policy, data/context, learned components, tools, infrastructure, operators, feedback, and authorities that together create product behavior.
- **product behavior:** observable response, abstention, degradation, escalation, or effect for a defined task state.
- **outcome:** change in the user or organizational task that product behavior is intended to support. Outcome authorization and attribution extend beyond model evaluation.
- **baseline:** current method or behavior used for comparison. A baseline includes its population, version, window, and limitations.
- **behavior contract:** versioned clauses defining required, uncertain, abstaining, escalating, degraded, prohibited, and effect behavior with evidence, owner, authority, tests, and change triggers.
- **non-goal:** explicit behavior or outcome outside the supported claim. A non-goal is not a backlog promise.
- **mechanism:** rules, lookup, search, ranking, prediction, generation, tools, or a hybrid used to produce behavior.
- **simplest adequate mechanism:** least complex mechanism portfolio supported by current evidence to satisfy the behavior contract within constraints.
- **vertical slice:** smallest production-shaped end-to-end path that crosses consequential boundaries and exposes success and safe failure.
- **adapter:** replaceable translation boundary around a provider, context source, policy integration, runtime, or interface. An adapter does not prove provider portability.
- **provider-neutral:** product contract and reference behavior do not require one provider. It does not mean all providers are equivalent or interchange without evaluation.

## Data, context, and retrieval terms

- **task population:** events or users for which a behavior claim is intended.
- **observed sample:** records available for measurement; it may not represent the task population.
- **unit of analysis:** entity treated as one observation, such as request, user, session, seller, item family, or incident.
- **segment:** meaningful subset used to expose different behavior or consequence. Intersections may matter more than single attributes.
- **provenance:** origin, collection/creation method, version, custody, and transformation history of evidence.
- **label:** recorded target or judgment under defined guidance and authority. A label can be ambiguous, disputed, or wrong.
- **construction group:** records sharing source material, template, identity, or generation lineage that must not leak across splits.
- **leakage:** information crosses from evaluation/release evidence into development or evaluator creation in a way that inflates the claim.
- **context:** authorized information supplied to behavior at runtime. Context is not automatically representative evaluation data.
- **retrieval:** process that selects candidate evidence from eligible sources.
- **grounding:** constraining or explaining behavior with identified evidence. Grounding does not prove the evidence is correct, sufficient, current, or authorized.
- **freshness:** whether evidence is current enough for the claim and task.
- **permission state:** whether identity, purpose, resource, operation, tenant, region, and expiry allow use.
- **empty evidence:** no eligible evidence remains. It is a product state, not permission to generate a substitute.
- **conflicting evidence:** eligible sources disagree in a way that requires abstention, clarification, or domain resolution.

## Evaluation and measurement terms

- **evaluation case:** versioned task state with provenance, clauses, segments, expected behavior, consequence, method, and limitation.
- **evaluation set:** governed collection of cases with sampling, grouping, split, freeze, coverage, and refresh policy.
- **coverage:** which clause/segment/state/mechanism/consequence combinations have credible cases. Case count alone is not coverage.
- **criterion:** property judged for a claim, with method and decision use.
- **metric:** defined numerical summary with numerator, denominator, population, segment, version, and method.
- **aggregate:** summary across cases or segments. It must not hide critical failures.
- **critical gate:** boundary whose failure determines a disposition regardless of aggregate improvement.
- **threshold:** versioned operating policy that maps a score or measurement to behavior or a gate.
- **calibration:** agreement between a declared score and observed event rate for a defined event/population, or bounded agreement/maintenance evidence for an evaluator. Calibration is not correctness.
- **model grader:** learned evaluator used for a narrow claim under calibration and bias limits. It is not formal authority.
- **rater:** human evaluator using guidance and a defined criterion. Human judgment is not automatically valid, unbiased, or authoritative.
- **specialist review:** qualified domain or discipline evidence review.
- **disagreement:** evidence that evaluators differ. It should be investigated or preserved, not averaged into false certainty.
- **preregistration:** plan identity frozen before results, including decision, change, cases, metrics, guardrails, segments, and stopping.
- **ablation:** comparison that removes or changes a component to test its contribution, subject to confounds.
- **confound:** factor that prevents a clean interpretation of the change under study.
- **disposition:** adopt, revise, limit, reject, investigate, go, conditional, reduce scope, delay, stop, roll back, retire, or another explicit decision state.

## Reliability and operation terms

- **probabilistic failure:** failure whose occurrence or form varies across inputs, state, or repeated execution. It does not mean failure is unmanageable.
- **failure layer:** product, interface, orchestration, tool, learned component, context, data, dependency, runtime, instrumentation, or human process where a contributing condition may exist.
- **symptom:** observed manifestation; it is not automatically the cause.
- **timeout:** deadline exceeded without confirmed success. It may leave state unknown.
- **retry:** another attempt under bounded policy. It is safe only when state and idempotency support it.
- **idempotency:** repeated execution for the same semantic intent produces no additional effect beyond the first accepted effect.
- **unknown effect:** external completion cannot be confirmed; reconcile before retry.
- **circuit breaker:** stateful control that stops calls after failure conditions and allows bounded recovery probes.
- **fallback:** alternate behavior used when the primary path cannot support the contract. It has its own evidence and consequence limits.
- **degraded mode:** reduced but explicit capability with visible limitation.
- **reconciliation:** compare intended, requested, accepted, and observed state before deciding the next action.
- **recovery:** restore or establish a safe supported state and verify it for affected behavior/segments.
- **rollback:** return to an earlier known artifact/state where actual system state permits it.
- **roll-forward:** correct current state with a later change when rollback cannot truthfully restore prior state.
- **tail latency:** slow end of a latency distribution, often reviewed through p95 or p99 with method and segment.
- **capacity:** supported work rate under declared concurrency, service time, dependencies, and degradation.
- **total cost:** provider, compute, storage, data, review, operations, support, maintenance, and failure cost relevant to the decision.

## Observation, control, and authority terms

- **signal:** purpose-defined observation tied to an owner, decision, threshold, segment, retention, and blind spot.
- **trace:** correlated, minimized state across one behavior path. A trace is not a license for raw-content surveillance.
- **feedback:** selected user or operator evidence. Feedback volume does not establish population prevalence.
- **drift:** change in a measured distribution or behavior. Drift is a symptom requiring diagnosis, not a cause by itself.
- **threat:** condition or actor capability that can exploit a boundary and create harm.
- **harm:** adverse consequence to an affected party. Engineering must name the consequence without claiming formal assessment authority it does not hold.
- **control objective:** intended prevention, detection, response, or recovery property.
- **implemented control:** versioned mechanism with test, monitor, owner, residual limit, and failure response.
- **policy:** declared rule or requirement. Policy alone is not implementation evidence.
- **human review:** human evaluation or intervention. Its quality depends on task, qualification, information, workload, authority, and escalation.
- **confirmation:** explicit user or authority agreement bound to the exact proposed effect and current state.
- **audit record:** minimized allowlisted evidence of consequential action/state. Auditability is not synonymous with compliance.
- **residual limitation:** uncertainty or exposure remaining after controls and evidence.
- **authority:** designated right to make a decision. Expertise, review, ownership, and recommendation do not imply authority.
- **escalation:** route unresolved evidence or consequence to the role holding the next decision right.

## Release, change, and reuse terms

- **readiness:** current evidence plus unresolved gaps and named authority for an exact release identity and cohort. It is not one blended score.
- **shadow:** candidate executes for evidence without user-visible output or effect.
- **bounded cohort:** restricted eligible population with attribution, observation, stop, and rollback.
- **blast radius:** people, tasks, data, systems, and consequences that can be affected.
- **stop trigger:** precommitted condition that halts or contains exposure.
- **incident:** event requiring coordinated containment, evidence, communication, correction, recovery, and learning under named roles.
- **model/provider change:** change to learned capability or delivery dependency that must be evaluated as product behavior change.
- **compatibility matrix:** comparison of contract, segment, control, and operational states across current and candidate versions.
- **migration:** controlled transition of traffic/state/dependencies with evidence, fallback, rollback, and retirement.
- **retirement:** removal of the old path after dependencies, ownership, recovery, and records are reconciled.
- **reuse:** applying a mechanism beyond its original context while preserving local evidence and authority.
- **stable seam:** interface whose invariant and variation have been demonstrated across independent contexts.
- **platform candidate:** shared capability whose consumers, ownership, isolation, economics, migration, maintenance, fallback, and disconfirmation evidence justify broader blast radius.
- **negative evidence:** failed, inconclusive, regressed, rejected, stopped, or disconfirming result retained for later decisions.

## Adjacent-role decision matrix

| Decision | Applied AI Engineer | Shared evidence partners | Decision authority remains with |
| --- | --- | --- | --- |
| Define behavior and combined-system implementation | Core within delegated product scope | Product, design/research, domain, MLE/platform | Named product/domain authority for product intent |
| Build model/data training lifecycle | Contribute requirements and integration evidence | MLE, data engineering, research | Model/data lifecycle owner |
| Create new research capability | Consume, reproduce, and transfer evidence | Researchers, research engineers | Research owner and publication/research governance |
| Discover and own customer engagement | Support applied-AI work when assigned | FDE, customer teams, product | Engagement/customer authority |
| Set product priority or commercial commitment | Provide options, cost, consequence, and evidence | Product/business leadership | Product/business authority |
| Approve privacy/security/safety/legal posture | Implement/test controls and report residuals | Qualified specialists | Designated formal authority |
| Authorize release or accept residual risk | Recommend disposition and preserve gaps | Operations, product, specialists | Named release/risk authority |
| Operate incidents | Diagnose/contain within role and evidence | Incident command, SRE, support, domain | Designated incident commander/authority |
| Standardize a shared service/platform | Propose only after repeated evidence | Platform, consumers, operations, security | Platform/product governance owner |

## Boundary tests

Ask these questions when a title or responsibility is ambiguous:

1. What decisions is the person expected to make?
2. What artifact or system state do they own after the decision?
3. Which evidence must they produce or maintain?
4. Which consequences can their implementation create?
5. Which decisions require a different specialist or formal authority?
6. Who owns production operation, support, and change?
7. Does the work create new capability, apply available capability, own a customer engagement, or govern a portfolio?
8. Is an alias being treated as equivalence without responsibility evidence?

Use the answers to assign work. Do not resolve ambiguity by giving one engineer every responsibility.

## Language to avoid

Avoid unsupported shorthand such as:

- `the model knows` when the evidence only shows output behavior;
- `grounded` when permission, freshness, sufficiency, or correctness is unknown;
- `safe`, `secure`, `private`, `compliant`, `approved`, or `ready` without scope, evidence, reviewer, authority, and limitation;
- `human in the loop` without task, timing, qualification, evidence, workload, decision right, and escalation;
- `agent` for any multi-step code path;
- `confidence` for an uncalibrated score;
- `production proven` for a local test, synthetic fixture, benchmark, or demo;
- `portable` because two providers share an API shape;
- `platform` because one team reused a helper;
- `root cause` before alternatives and contributing conditions are tested;
- `owner` when the person can recommend but not decide.

Prefer the precise state. Precision makes collaboration easier because it shows what can proceed, what must stop, and who must decide next.

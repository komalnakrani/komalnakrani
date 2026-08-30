# Chapter 2 — Contract the Task and Decision Rights

Author: Komal Nakrani
Chapter ID: `MLE-CH-02`
Slug: `contract-the-task-and-decision-rights`
Part: `PART-01`
Milestone: `BL-01`

## MLE-CH-02-S01 — Decision and Bench Setup

### Bench Setup

An oriented workload is legible, but it is not yet a justified use of machine learning. `BL-00` tells us what Benchline is, what evidence arrived, and who owns consequential decisions. It does not state an approved intended use, excluded uses, target population, operating context, consequence model, or reason to prefer learning over a deterministic rule. Chapter 2 places that gap on the bench. The decision is whether an approved purpose can be converted into a bounded, reviewable task contract without allowing technical momentum to invent authority.

The task contract is an airlock. On one side is an aspiration such as “detect surface defects sooner.” On the other is a measurable workload: identify a defined class of observations for a named user in stated conditions, produce a specified output, preserve an escalation path, and exclude unsupported decisions. The airlock opens only when purpose, population, consequence, evidence, and owners agree. If the purpose is disputed, a consequential owner is missing, or a simple rule already satisfies the contract, the correct output may be HOLD or NO-ML rather than a model plan.

The decision evidence includes `BL-00`, the approved purpose statement, intended and excluded uses, users and affected population, operating context, expected impacts, baseline, constraints, and owner records. The state and dossier delta is `ORIENTED` to `CONTRACTED`, producing `BL-01`. The authority route keeps product ownership of purpose and priority, domain ownership of validity, evaluation ownership of gate adequacy, and formal authority with safety, privacy, legal, governance, and risk owners. The next evidence is a retained incumbent and a consequence-aware acceptance contract.

### Bench Sheet

| Field | Required record |
|---|---|
| decision | Contract, HOLD, REJECT, REOPEN, or NO-ML |
| evidence | `BL-00`, purpose, population, context, consequences, constraints, owners |
| state and dossier delta | `ORIENTED` → `CONTRACTED`; create `BL-01` |
| authority route | Product, domain, evaluation, and formal owners retain their decisions |
| next evidence | Executable incumbent plus owned consequence thresholds |

The recurring grammar remains Bench Setup, decision, evidence, state and dossier delta, authority route, and next evidence. It forces the reader to distinguish a well-written requirement from an authorized one. A task contract can be precise and still remain HOLD if its purpose or consequence owner is absent.

The architecture projection defines what the airlock must hold. `MLE-CLM-008` requires a reviewable task, population, baseline, acceptance evidence, constraints, and owners before complexity. `MLE-CLM-002` and `MLE-CLM-015` keep that contract attached to the end-to-end learning workload rather than an isolated experiment. `MLE-CLM-006` makes stakeholder translation evidence-bearing, while `MLE-CLM-020` prevents that translation from becoming unilateral authorization. The boundary assignments make the stop conditions concrete: `BND-13` leaves roadmap and value acceptance with Product; `BND-15` leaves hazard and safe-use decisions with safety authorities; `BND-16` leaves privacy, governance, legal, and compliance determinations external; and `BND-17` leaves domain validity with a named domain owner. `SCN-06` tests the boundary with an agent that may initiate a refund: this chapter can contract the model component but cannot grant payment-tool authority or own effect recovery. `SCN-08` tests a technically passing medical model after its population changes: the old pass is invalidated and new evidence is routed to domain and formal owners. Both scenarios remain decision probes, not claims about deployed systems. Within `PD-01`, the resulting `BL-01` must bind purpose, population, incumbent, consequence, and authority without product, domain, or risk self-authorization.

## MLE-CH-02-S02 — Procedure: build the contract airlock

### Source notes and currentness: purpose evidence

Begin with the approved purpose from `BL-00`, not with the model’s observed capability. Reversing that order invites capability-driven scope: the team sees what a model can predict and then invents a use. The contract instead asks what decision or user outcome is authorized, which population and conditions it covers, and what evidence would show that the intervention helps without exceeding the permitted use. Each answer cites its owner and source record.

Primary teaching MLE-BCLM-004: before qualification, the task contract records intended and excluded uses, users or population, operating context, expected impacts, assumptions, limitations, and evidence needed to judge the purpose. Model Cards, AI RMF 1.0, and the 2021 joint Good Machine Learning Practice principles—`MLE-BSRC-006`, `MLE-BSRC-028`, and `MLE-BSRC-038`—support contextual reporting and lifecycle consideration. They do not prescribe a universal field set or authorize Benchline. The contract’s depth follows consequence: a low-impact internal routing aid and a consequential safety-related decision cannot inherit the same review burden merely because they share an interface.

Primary teaching MLE-BCLM-005: decision rights, risk responsibilities, and lines of communication must be documented. When a required authority is absent or the purpose cannot be evaluated, the honest technical disposition is HOLD. `MLE-BSRC-027` and `MLE-BSRC-028` support explicit governance, context, and responsibility, but HOLD is this book’s technical vocabulary, not a NIST status. A HOLD record names the missing decision, owner route, affected fields, and next evidence. It is not a vague request for stakeholder alignment.

Primary teaching MLE-BCLM-006: preserve a NO-ML branch by executing a simple heuristic or incumbent first. Google’s living Rules of Machine Learning, `MLE-BSRC-015`, supports starting with simple approaches, but it does not decide that Benchline should avoid ML. The task contract asks what learning contributes beyond a deterministic method, what cost and risk it introduces, and who accepts that trade. If a fixed threshold satisfies the measurable purpose within accepted constraints, NO-ML is a successful engineering result, not a failure of ambition.

Write the contract in six layers. The purpose layer names the desired decision and its accepting product owner. The population layer defines included and excluded observations, users, sites, time periods, and conditions, plus the domain owner. The output layer defines the prediction or representation, how it is consumed, and what it must never authorize. The consequence layer states false-positive, false-negative, abstention, delay, and unavailability effects, each with an accepting owner. The evidence layer names baseline, evaluation, operating, and formal evidence. The change layer defines triggers that invalidate the contract.

Every field needs a status. PROPOSED means the field exists but has not been accepted. ACCEPTED means the named owner accepted the exact version and limitations. DISPUTED means owners disagree or evidence conflicts. MISSING means the field has no support. SUPERSEDED means a new immutable version replaced it. The workload reaches CONTRACTED only when release-critical fields are ACCEPTED and the unresolved queue contains no disguised approval gap.

Next, make exclusions executable. “Not for autonomous shutdown” becomes a consumer and permission rule. “Not validated for reflective surfaces” becomes a population constraint and a segment requirement. “Not a safety certification” becomes an authority rule. “No personal identification” becomes an output and data constraint. Prose exclusions are useful only when later gates can test whether an artifact, interface, population, or decision crossed them.
The primary-treatment currentness ledger is part of the contract. `MLE-BSRC-006` is the final FAT* 2019 Model Cards paper, verified 2026-08-18; its reporting categories are not a mandatory standard or proof of suitability. Recheck the Google Research record and final-paper link at each publication freeze while preserving the 2019 identity. `MLE-BSRC-028` is final NIST AI 100-1, AI RMF 1.0, verified 2026-08-18; it remains voluntary, non-sector-specific, and under announced revision rather than an authorization. Recheck at each publication freeze, keep version 1.0 explicit, and replace or dual-cite only after a revised framework is published.

`MLE-BSRC-038` is fixed October 2021 joint-regulator guidance, verified 2026-08-18. It is nonbinding and medical-device-specific, not universal regulation or current N88 guidance. Recheck direct-PDF availability at every freeze; retain the October 2021 identity only for historical joint principles and prefer IMDRF N88 FINAL:2025 for current guidance. `MLE-BSRC-027` is the living AI RMF 1.0 Core rendering accessed and verified 2026-08-18. Its contextual outcomes do not certify or assign workload authority. Recheck every freeze and immediately upon revision-notice, Core-outcome, or revised-RMF publication changes.

> **Currentness record — `MLE-BSRC-015`.** Official Google Rules of ML page updated 2025-08-25; retrieved 2026-08-23. Living first-party guidance from Google systems, not universal doctrine; recheck the page update date and material rule changes at each publication freeze.

## MLE-CH-02-S03 — Evidence interpretation

The strongest conclusion from a complete `BL-01` is that candidate work has a bounded question. It does not mean the dataset is admissible, the proposed model is useful, or the intended use is formally permitted. Contracting defines what later evidence must answer and who may judge it. That is enough to prevent expensive optimization around an unauthorized or unmeasurable target.

Purpose language often hides multiple decisions. “Reduce missed defects” combines detection, workflow, consequence, and business value. The contract separates them. The technical output might be a review-priority score. A human supervisor might own the final disposition. A domain owner might define valid defect classes. Product might accept queue latency. Safety might prohibit autonomous action. Once separated, the team can see which evidence a model can supply and which decisions it cannot make.

`MLE-V02.1` is a semantic task-contract airlock at `MLE-CH-02-S03`. Its essential labels are purpose, excluded use, population, consequence, owner, evidence, and state. The long description follows each field through PROPOSED, ACCEPTED, DISPUTED, or MISSING and identifies the HOLD bar. All decision truth is selectable; no arrow implies automatic promotion.

A passing schema is weak evidence if its meaning is wrong. A complete population field containing “all future sites” is syntactically valid but unsupported. An owner field containing “MLE team” is present but may violate authority. A threshold can be numeric yet unowned. Evidence interpretation therefore checks semantic support, identity, scope, limitations, and owner acceptance rather than completeness alone.

NO-ML requires the same rigor. A deterministic rule that passes one fixture does not establish suitability. Its identity, conditions, errors, maintenance, and owner acceptance travel with the result. The value of the branch is comparative discipline: the simplest supportable intervention remains visible, and learning must earn its added complexity under the same contract.

The evidence ceiling is explicit. `BL-01` may establish a bounded task, owners, exclusions, and evidence obligations. It cannot claim domain sign-off not present in the record, legal permission, risk acceptance, product priority beyond the cited decision, or that ML is required. When evidence conflicts, the contract records the conflict and issues HOLD instead of choosing the convenient interpretation.

CASE-06 transfers only through four explicit rules. Tests are selected from failure modes and consequences, never to satisfy a count quota. Point totals are replaced by evidence-bearing PASS, HOLD, or REJECT decisions with named owners. Current official mechanisms may illustrate a test category but do not become doctrine. The same decision job must work on managed, classical, deep, edge, and shared ports without assuming a shared platform. Applied here, a missing consequence owner dominates a high rubric score, while an irrelevant check cannot earn credit merely by passing. This preserves the paper’s diagnostic contribution without importing certification or product authority.

The interpretation exercise asks the reader to choose between two contracts with equal field counts. One contains consequence-specific checks and an owner-routed HOLD; the other contains more checks but no link to intended use. Only the former provides decision evidence. The difference shows why quantity, dashboard completeness, and semantic sufficiency must remain separate.

## MLE-CH-02-S04 — Worked trace and case truth

The Benchline trace begins with a proposed purpose: help a trained reviewer prioritize synthetic inspection images. Intended use is queue ordering for the fixed fixture. Excluded uses include automatic shutdown, safety certification, employee evaluation, and use on uncontracted surface types. The included population is the two named synthetic surface classes under the recorded lighting envelope. The output is a priority band with abstention. The human reviewer retains disposition authority.

The first draft fails because “reduce risk” has no consequence definition and no accepting owner. The MLE does not rewrite the phrase as a metric and approve it. The result is HOLD. Product clarifies that the desired outcome is reduced review delay within a fixed queue, domain owners define valid classes, and safety confirms the output cannot control equipment. A new contract identity is created. The deterministic incumbent is then executed against the same fixture. It satisfies the narrow queue-ordering objective, so one valid disposition is NO-ML for that scope.

> **Case-truth record — `CASE-01`.** `CASE-01` is a FICTIONAL SYNTHETIC CAPSTONE with no reported facts or attributed outcomes. The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. Its limitation remains no real production, industrial, safety, performance, or business claim.

> **Case-truth record — `CASE-02`.** `CASE-02`, managed demand forecast, is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed managed fixture may test exportable identity and evidence under provider opacity. Do not infer provider capability or outcome, real accuracy or use, approval, or a cloud tutorial. Reproduce the same dossier fields without provider names using the selected service's actual evidence. Its limitation remains that it is not a cloud-provider tutorial.

> **Case-truth record — `CASE-03`.** `CASE-03`, classical credit triage, is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. Its limitation remains that it is not financial advice or credit authorization.

> **Case-truth record — `CASE-05`.** `CASE-05`, shared ranking platform tenant, is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed shared-tenant fixture may test separation of workload evidence from tenant, fleet, and platform authority. Do not infer platform-wide SLO or performance, business effect, isolation assurance, or approval. Preserve workload evidence when the substrate changes and recheck every substrate-bound relation. Its limitation remains that it is not a platform-engineering curriculum. `CASE-06` is a PUBLIC REPORTED CASE whose facts and attributed outcomes remain bounded to the ML Test Score paper.

For `CASE-06`, the reported facts are the authors’ 28-test taxonomy, production-experience statement, and coverage beyond offline evaluation. The attributed outcome is their characterization of the rubric as a readiness roadmap, not a universal measured effect. The allowed inference is that missing system evidence can justify HOLD. The forbidden inference is that a point total, named test, or Google practice certifies Benchline. Limitations include age, first-party experience, and absence of universal thresholds. Transfer chooses tests from failures and consequences, replaces scores with owner-bound dispositions, uses current official mechanisms only as examples, and preserves the same decision across all five ports without presuming a shared platform.

The worked comparison shows a key pattern. Each port can change how the incumbent is implemented, but the contract questions remain stable: what purpose, which population, which consequence, why learning, which owner, and what next evidence? This is book synthesis, not copied vendor practice. The same airlock can return CONTRACTED, HOLD, REJECT, REOPEN, or NO-ML without treating model production as the only success path.

Walk the positive Benchline trace in order. The synthetic request is hashed and linked to `BL-00`. Product accepts the queue-prioritization purpose. Domain owners accept the two-class fixture only for the exercise. Safety and operations retain all equipment-action decisions. The output contract permits a priority band and abstention, while prohibiting autonomous action. The consequence table records synthetic review-load and delay measures without calling them real business or safety effects. The deterministic heuristic and proposed learning path receive separate identities. The record then asks whether the learned path has an evidenced advantage under the same fixture.

In the NO-ML branch, the heuristic meets the bounded queue-ordering acceptance fields. `BL-01` records NO-ML as the intervention decision but still reaches CONTRACTED because the task is bounded and owned. The next chapter retains the incumbent record. In the model-work branch, the heuristic fails an accepted segment and the team records a testable reason learning might help. The contract still does not promise improvement; it authorizes controlled comparison under the same evidence obligations.

## MLE-CH-02-S05 — Failure lab

Chapter 2’s executable surface is a synthetic record builder, not a purpose arbiter. Fixed fixture labels become hashed metadata, a bounded disposition, limitations, ownership fields, an authority route, and truth state. Readers must perform the task-contract analysis themselves; PASS, HOLD, REJECT, REOPEN, and NO-ML below specify answer expectations only.

Now inject a seductive but invalid change: the supplied model predicts an additional surface class with high apparent accuracy. The class is outside the accepted population. Adding it to intended use would change population, consequences, and domain evidence. The correct result is REOPEN or HOLD, even if the metric is impressive. Capability discovery may motivate a new proposal, but it cannot edit the current contract.

Another failure occurs when product accepts purpose but no one owns the false-negative consequence. The team might be tempted to set a conservative threshold and proceed. That would be MLE self-authorization hidden as caution. The contract instead records the proposed threshold, technical evidence, missing owner, HOLD disposition, and exact escalation route. Caution without authority is not approval.

The public case contributes a method contrast. The ML Test Score encourages broad test coverage, but `BL-01` selects tests only after purpose and consequence are known. A data test matters because a particular input failure affects the task. A monitoring test matters because a particular signal supports an operating decision. This ordering prevents test count from replacing judgment and prevents a score from certifying an uncontracted use.

Case truth labels appear beside every result. The Benchline and satellite numbers are synthetic-deterministic or constructed. They have no attributed outcomes because no real event occurred. Public reported facts remain attributed to their sources. Allowed inference is written separately from forbidden inference and limitations. A reader never has to infer whether a convenient example is evidence of real performance.

Both laboratories are `synthetic-deterministic`, offline, immutable, and effect free. `MLE-CH-02-LAB-01` uses `FIX-MLE-CH-02-1`. It consumes `BL-00`, a complete purpose and population record, explicit exclusions, consequence owners, and an incumbent result. It emits canonical `BL-01` with CONTRACTED state or the recorded NO-ML recommendation for the narrow scope. Repeated execution yields identical bytes and hashes.

`MLE-CH-02-LAB-02` uses `FIX-MLE-CH-02-2` and injects illegal promotion or self-approval. PURPOSE-DISPUTED changes the requested action so it conflicts with the accepted purpose. The evidence is the mismatch between versioned purpose and proposed consumer action; disposition is HOLD. Repair belongs to product and affected authorities, not to the MLE’s wording.

POPULATION-CHANGED introduces an uncontracted surface type. The existing contract cannot silently expand. The result is REOPEN to CONTRACTED, with population evidence, consequence review, and owner acceptance named as next evidence. A model that happens to score well on the new type does not repair the contract. Observed capability and permitted scope remain separate.

OWNER-MISSING removes the consequence-acceptance owner. The validator finds a numeric threshold without authority and returns HOLD. The repair adds a valid external decision record under a new artifact identity. It cannot replace the owner with the MLE or a generic stakeholder label.

The negative path also tests NO-ML integrity. If the heuristic passes only because the fixture excludes the critical segment, the recommendation is rejected as unsupported. If it passes the complete contracted fixture, the record may recommend NO-ML while preserving limitations and owner acceptance. The lab does not prove a real heuristic or model works; it demonstrates the decision mechanics.

The positive trace binds the purpose statement, constraint set, owner table, and resulting contract by their input and output hashes. Each negative trace names its mutation, observed contradiction, disposition, responsible owner, limitation, and required repair. PASS is local to the contract gate. HOLD and REOPEN preserve prior history. REJECT blocks forbidden state changes. No network, provider account, production system, credential, real person, or authority is touched.
## MLE-CH-02-S06 — Five-port transfer

Across ports, only the task-contract field interface is held equal. The local adapter hides a changed port tag rather than exercising service opacity, classical code, deep training, edge runtime, or fleet mechanics. Claims about those mechanisms require separately obtained evidence.

`PORT-MANAGED` may hide training details behind a service. The contract therefore requires exportable purpose, population, baseline, constraints, evaluation obligations, and owner routes. Provider recommendation cannot establish ML necessity or accept product consequences. Opaque evidence creates HOLD.

`PORT-CLASSICAL` demonstrates the NO-ML boundary most visibly. A rule or statistical estimator may satisfy the task, but simplicity does not excuse data, evaluation, interface, or authority evidence. Feature order and preprocessing still matter. The port passes only when the same contract survives without deep-learning assumptions.

`PORT-DEEP` may offer representational capacity and a checkpointed training path. Novelty or scale does not justify the intervention. The contract must still compare an incumbent, bound the population, name consequences, and preserve research and evaluation authority. A promising offline model remains outside the airlock until those fields are accepted.

`PORT-EDGE` uses the Benchline fixture with constrained device runtime and delayed feedback. The contract distinguishes the model’s priority output from any equipment-control decision. Hardware, operations, domain, safety, security, platform, and product owners remain external. No fictional result implies industrial performance or safe use.

`PORT-SHARED` separates tenant purpose from platform capability. The platform may provide reusable features, training, registry, serving, and observation, but tenant owners define intended use and consequence. Platform/SRE/security retain shared-system decisions. A tenant contract cannot claim fleet assurance, and platform enrollment cannot qualify the workload.

The invariant decision is whether purpose, population, incumbent, consequence, constraints, evidence, and owners form a reviewable task contract. Each adapter receives the same common envelope and returns the same disposition schema. Mechanics may change; authority and semantics may not. A port-specific approval button, score, or model family never becomes the canonical concept.

Transfer is tested with two fixtures. The complete fixture should yield the same contract decision on all five ports, even though artifact fields vary. The missing-owner fixture should yield HOLD everywhere. If one port returns PASS because the provider assumes an owner, or another returns REJECT merely because no deep model exists, the port has distorted the contract.

Replaceability protects currentness. Managed services, estimator libraries, accelerators, device runtimes, and multi-tenant platforms evolve. The manuscript names mechanism examples only with versions and limitations. Durable doctrine remains the task airlock and owner separation.

Port transfer also catches accidental curriculum bias. If the contract requires a training job identifier, it may exclude a deterministic rule that has no training job. The durable field is execution identity, which both paths can supply. If it requires a model checkpoint, it may exclude a managed endpoint or classical estimator. The durable field is executable candidate identity. Writing fields at the workload level keeps the evidence strict without making one mechanism normative.

The managed port tests opacity. The adapter must export enough evidence to bind inputs, configuration, result, and limitations. If it exposes only a friendly dashboard, the record cannot pass. The classical port tests whether teams excuse simple systems from lifecycle duties. The deep port tests whether benchmark novelty overwhelms the incumbent and consequence model. The edge port tests delayed feedback and authority separation. The shared port tests whether platform enrollment is mistaken for workload acceptance.

For each port, the negative fixture changes only one contract fact. This is important because a broad failure can hide the cause. A missing owner should not be conflated with a missing artifact export. A changed population should not be reported as generic validation failure. Precise discrimination produces a precise next action and prevents teams from “repairing” technical fields when the actual gap is authority.

The transfer result is portable only if an independent reader can compare records. Keep field names, dispositions, state semantics, and limitation grammar stable. Put port-specific details inside the mechanism record. This allows one Qualification Gate to inspect all ports and enables later chapters to trace how the same task survives data, experiment, package, serving, control, and retirement changes.

## MLE-CH-02-S07 — Assessment and Qualification Gate

`MLE-CH-02-ASMT-01` asks the reader to convert an oriented request into a `BL-01` evidence artifact. The packet contains an approved high-level purpose, partial population, model demo, deterministic incumbent, and incomplete consequence table. The reader must issue CONTRACTED, HOLD, REJECT, REOPEN, or NO-ML and justify the decision using exact identities.

### Qualification Gate

PASS requires intended and excluded uses, user and population, operating context, output and consumer action, assumptions, consequences, baseline, constraints, evidence obligations, owners, limitations, change triggers, and next evidence. The observable evidence is canonical `BL-01` with no release-critical MISSING or DISPUTED field. A missing owner or disputed purpose yields HOLD. An attempt to reuse an old contract after population change yields REOPEN. An illegal claim of authorization yields REJECT.

The answer intent is explanatory. The reader states why the evidence supports the disposition, what remains unproven, and why another disposition would cross the authority ceiling. A correct NO-ML answer includes the incumbent identity and the conditions under which the decision must reopen. A correct model-work answer states what learning is expected to add and how that claim will be tested.

The authority rubric is strict. Product owns purpose and priority. Domain and formal authorities own validity and permissibility. Evaluation owns independent adequacy. The MLE translates the approved purpose into technical evidence requirements but cannot authorize it. A polished contract with an MLE-signed safety or legal field fails.

Retry creates a new version linked to the failed record. It changes only supported fields, identifies new evidence and owner decisions, and preserves old limitations. Silent repair, generic stakeholder language, or changing the fixture to make the incumbent look weaker fails the gate.

The exact Answer intent is: Explain the decision, evidence, state, owner, and next action. A defensible response therefore names the queue-prioritization decision, cites the accepted purpose and excluded-use evidence, reports whether the contract is PROPOSED, ACCEPTED, DISPUTED, or MISSING, routes consequence acceptance to its owner, and requests the next bounded incumbent evidence. Listing fields without that causal explanation is incomplete. So is a fluent rationale whose owner or input identity cannot be resolved.

The reviewer tests two counterexamples. In the first, purpose and population are precise but the false-negative consequence has no accepting owner; the only lawful disposition is HOLD. In the second, all owners are present but the candidate capability has silently widened intended use; the response must REOPEN the contract rather than praise the new capability. These examples distinguish evidence completeness from authorization. Observable PASS evidence is exact: BL-01 passes its named qualification gate. It does not prove admissible data, a suitable candidate, or product approval.

The authority limit remains: the MLE translates an approved purpose into technical evidence requirements but cannot authorize it. Retry is HOLD or REOPEN with new evidence; never self-approve. A retry creates a new contract identity, links the rejected or held version, changes only the owned field, and records why the additional evidence changes the disposition. The previous bytes remain inspectable.

## MLE-CH-02-S08 — Durable handoff

`BL-01` version 1.0.0 takes the unchanged `BL-00` orientation record and advances its task basis from ORIENTED to CONTRACTED. Hash `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa` identifies the accepted input linkage, not a rerun. The new record carries purpose, exclusions, population, consequences, assumptions, constraints, incumbent branch, owners, limitations, and next evidence, supported by `MLE-BCLM-004` through `MLE-BCLM-006`. A repair supersedes; it never edits history.

This gate’s supported destination is CONTRACTED. Reopen follows Appendix B and is backward-looking only: the source must sit beyond the target, with evidence that could predate the request. An `UNORIENTED` source therefore cannot reopen to CONTRACTED. At this chapter, a purpose, intended-use, authority, constraint, or permitted-use change returns later work to the contract while retaining the trigger and invalidated descendants.

The chapter-specific rechecks travel with the record: the task-contract airlock stays closed when intended use, excluded use, population, consequence, or owner is missing; missing-owner, disputed-purpose, and changed-population exercises fail closed with an explicit next owner; and the deterministic-rule branch may support NO-ML for the bounded fixture. These are evidence obligations, not claims about an external system. The dossier supports only this chapter’s decision under named inputs; PASS cannot certify later gates, public-case outcomes remain attributed, and synthetic evidence remains synthetic-deterministic.

The evidence ceiling excludes product prioritization, domain sign-off, risk acceptance, legal interpretation, and any declaration that ML must be used. Consume `BL-00` without silent repair and produce `BL-01` for Chapter 3. The next chapter may use the accepted task contract only to retain and execute an incumbent; it cannot infer data admissibility or candidate quality. The evidence manifest, legal state, limitations, rechecks, lineage, and exact next dependency travel together.

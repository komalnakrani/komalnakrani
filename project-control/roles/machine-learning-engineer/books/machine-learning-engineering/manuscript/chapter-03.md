# Chapter 3 — Retain the Incumbent and Name Consequences

Author: Komal Nakrani
Chapter ID: `MLE-CH-03`
Slug: `retain-the-incumbent-and-name-consequences`
Part: `PART-01`
Milestone: `BL-02`

## MLE-CH-03-S01 — Decision and Bench Setup

### Bench Setup

`BL-01` gives Benchline a bounded task, population, excluded uses, and decision owners. The next risk is comparative amnesia. Teams often describe a candidate as an improvement while the incumbent is informal, measured on different inputs, or discarded after the candidate appears promising. Without a retained comparator, “better” has no stable referent. Without named consequences, a metric gain has no decision meaning. This chapter asks whether the workload has a runnable incumbent, one measurement contract, consequence-aware segments, and owned acceptance fields before candidate work begins.

The decision is to bind an executable incumbent and consequence model to the exact task contract. Evidence includes incumbent identity, input snapshot, executable procedure, measure definitions, segment rows, observed results, limitations, replacement conditions, and accepting owners. The state remains `CONTRACTED`; the state and dossier delta creates `BL-02`, the incumbent and consequence record. Product and domain owners accept consequences, evaluation owns independent gate adequacy, and the MLE implements and measures without setting tolerance alone. The next evidence is an admissible data and label basis.

### Bench Sheet

| Field | Required record |
|---|---|
| decision | Retain incumbent, HOLD, REJECT, or REOPEN |
| evidence | Incumbent bytes/procedure, identical input snapshot, measures, segments, limits |
| state and dossier delta | `CONTRACTED` → `CONTRACTED`; create `BL-02` |
| authority route | Product/domain accept consequence; evaluation accepts gate adequacy |
| next evidence | Contractual data and labels for the same task |

Bench Setup, decision, evidence, state and dossier delta, authority route, and next evidence keep the comparison honest. The record can say that an incumbent is weak, but it cannot weaken the incumbent’s test conditions to make a candidate look strong.

This bench begins with two architecture obligations. `MLE-CLM-008` keeps the incumbent inside the reviewable task contract, so its purpose, population, measures, and consequences cannot drift away from `BL-01`. `MLE-CLM-015` treats conversion from analysis to a supportable learning workload as the durable center; an incumbent is valuable because it makes that conversion contestable, not because it ends experimentation. `BND-01` therefore routes generalized statistical inference and business analysis to Data Science and domain/product partners. `BND-13` leaves roadmap priority, customer value, and business acceptance with Product. `BND-17` leaves domain validity and consequential-use authorization with the named domain authority. The MLE may execute and measure the incumbent, but cannot move any of those decisions into a metric cell.

`SCN-09` supplies the discriminating pressure: an applied scientist proposes a novel architecture with promising offline results. The correct setup does not dismiss novelty, yet it retains the existing branch and demands controlled qualification, package, envelope, release, and recovery evidence before replacement. Applied Science owns the research claim; the MLE owns the integrity of the workload comparison; later independent gates retain their authority. This scenario is a reasoning fixture, not a report of a real model outcome. `PD-01` then supplies the domain rule for `BL-02`: purpose, population, incumbent, consequence, and authority stay bound together. A missing segment or tolerance owner is not repaired by a better aggregate, and a weak incumbent is still preserved as evidence until a lawful decision replaces it.

The setup passes only when another engineer can run the incumbent branch before seeing a candidate result; otherwise the “baseline” is merely a remembered number.

## MLE-CH-03-S02 — Procedure: make improvement interpretable

### Source notes and currentness: incumbent evidence

Start by identifying what currently handles the task. The incumbent may be a manual process, deterministic rule, classical estimator, previously released model, or explicit “do nothing” policy. Give it an immutable identity and execution contract. Record source or artifact version, preprocessing, parameters, input schema, runtime context, output meaning, owner, and limitations. If it cannot be rerun, state that limitation and define the strongest comparison still possible. Do not replace a missing incumbent with an invented score.

Primary teaching MLE-BCLM-007: retain a runnable simple model, heuristic, or current system and evaluate it under the same input and measurement contract as every candidate. The ML Test Score and Rules of Machine Learning, `MLE-BSRC-007` and `MLE-BSRC-015`, support baseline retention and simple approaches. They do not select the right incumbent for Benchline. Changing the comparator, preprocessing, population, or measurement while claiming improvement makes attribution uninterpretable.

Primary teaching MLE-BCLM-008: acceptance evidence connects measures to intended purpose, relevant conditions, population segments, and named consequences. Model Cards, AI RMF 1.0, and the joint GMLP principles—`MLE-BSRC-006`, `MLE-BSRC-028`, and `MLE-BSRC-038`—support contextual, condition-aware reporting. They do not provide universal metrics or thresholds. An aggregate increase can coexist with unacceptable failure on a consequential segment; the segment cannot be averaged away.

Primary teaching MLE-BCLM-009: the MLE may implement and measure thresholds, but product, domain, and independent evaluation owners accept the consequence model and gate adequacy. `MLE-BSRC-027` and `MLE-BSRC-028` support accountable role separation without prescribing this organization. A threshold with no accepting owner is unresolved evidence, even when it is numerically conservative.

Build the incumbent record in five passes. First, bind identity: executable, input snapshot, environment, and output schema. Second, bind purpose: which `BL-01` decision the incumbent serves and which uses remain excluded. Third, bind measurement: formulas, direction, units, aggregation, segments, missing-data treatment, and uncertainty limits. Fourth, bind consequence: what each error or delay means, who accepts it, and which condition blocks progression. Fifth, bind replacement: what new evidence could justify superseding the incumbent and what must remain comparable.

Targets and thresholds stay separate. A target expresses an aim, such as reducing review delay. A threshold determines a gate, such as a maximum tolerated failure for a named synthetic segment. An observed value reports evidence. A consequence explains why the difference matters. An owner accepts the gate. A status records PROPOSED, ACCEPTED, DISPUTED, MISSING, or SUPERSEDED. One unlabeled number cannot carry all six meanings.

Construct the measurement contract before seeing candidate results. Choose measures because they represent the task and consequence, not because they flatter the candidate. Record metric direction and calculation over fixed identities. If a measure is undefined for sparse rows, preserve that fact. If a population slice is missing, mark it MISSING rather than treating absence as zero failures. If a threshold is proposed after results are visible, record that timing and require independent review.

Retain segment rows alongside the aggregate. Benchline’s synthetic fixture uses lighting condition and surface class as bounded segments. The manuscript does not claim those are sufficient for a real inspection system. It demonstrates precedence: a consequence-linked segment can HOLD the workload even when the aggregate improves. Segment selection and sufficiency remain domain and evaluation decisions.
> **Currentness record — `MLE-BSRC-007` / `MLE-BSRC-015`.** The ML Test Score is final IEEE Big Data 2017, verified 2026-08-18; its rubric is a dated diagnostic, not certification, a universal threshold, or an audited outcome. Recheck publication-record and final-paper availability at every freeze and translate its tests into current workload evidence rather than copying a score. Official Google Rules of ML page updated 2025-08-25; retrieved 2026-08-23. Living first-party guidance from Google systems, not universal doctrine; recheck the page update date and material rule changes at each publication freeze.

`MLE-BSRC-006` is the final FAT* 2019 Model Cards paper, verified 2026-08-18. Reporting fields cannot prove suitability or impose a mandatory standard. Recheck the research record and final-paper link at all three freezes while preserving the 2019 identity. `MLE-BSRC-028` is final NIST AI 100-1, AI RMF 1.0, verified 2026-08-18; it is voluntary, under announced revision, and cannot authorize this workload. Recheck at all three freezes and keep 1.0 explicit until a revision is published.

`MLE-BSRC-038` is fixed October 2021 joint-regulator guidance, verified 2026-08-18. It is nonbinding medical-device context, not universal regulation. Recheck its direct PDF at every freeze and prefer N88 FINAL:2025 for current guidance. `MLE-BSRC-027` is the living AI RMF 1.0 Core rendering accessed and verified 2026-08-18; its contextual outcomes neither certify nor assign local owners. Recheck every freeze and immediately if the revision notice, Core outcomes, or a revised AI RMF changes.

## MLE-CH-03-S03 — Interpret baseline evidence

The strongest conclusion from `BL-02` is not that the incumbent is good or bad. It is that later differences can be measured against a retained basis and interpreted under an owned consequence model. This distinction matters because an incumbent may fail the desired target yet remain the correct comparator. Replacing it with a weaker straw baseline would make candidate gains look larger while reducing decision value.

An executable incumbent has several identities. Artifact identity names its bytes or rule version. Input identity names the evaluated snapshot. Procedure identity names preprocessing and execution. Measurement identity names formulas and segment definitions. Authority identity names accepted consequence fields. If any one changes, the comparison basis changes. The dossier records the difference rather than calling two distinct bases “the baseline.”

`MLE-V03.1` is a semantic baseline-versus-target decision table anchored at `MLE-CH-03-S03`. It labels incumbent, candidate placeholder, input snapshot, aggregate, consequential segments, target, threshold, consequence, owner, status, and limitation. The long description reads the aggregate and each segment, then explains why one failing owned gate dominates the improved mean. Numeric truth remains selectable text.

Evidence can mislead when it is measured correctly but compared incorrectly. An incumbent scored on older inputs cannot support a direct difference against a candidate scored on newer inputs. A threshold chosen after inspecting results may reflect selection bias. A missing segment may make the aggregate appear better. A manually reviewed incumbent and automatically labeled candidate may use different truth standards. The record identifies these asymmetries before drawing conclusions.

The absence of an owner is itself evidence about decision readiness. It does not imply the threshold is wrong; it implies no one with retained authority has accepted it. The correct action is HOLD and a named route, not a guess. Conversely, owner acceptance cannot repair a broken comparator. Authority and technical validity are both necessary and neither substitutes for the other.

The evidence ceiling remains narrow. `BL-02` establishes incumbent identity, measurement, consequences, and owners. It does not nominate a candidate, validate data, prove population representativeness, or grant release authority. The baseline record is a durable reference, not an early qualification score.

CASE-06 transfers through a bounded baseline rule. Select tests from the incumbent’s failure modes and accepted consequences, never from a count quota. Replace the rubric total with evidence-bearing PASS, HOLD, or REJECT decisions and named owners. Treat current mechanisms only as examples of a test category. Carry the same comparison semantics across all five ports without presuming a shared platform. A missing consequential segment can therefore HOLD the incumbent record even when many unrelated checks pass.

The evidence reader should also distinguish a weak but usable incumbent from an invalid one. Weakness is an observed, bounded result under a resolvable procedure; invalidity is a missing identity, contaminated basis, unowned tolerance, or contradicted contract. The former can anchor comparison. The latter cannot be repaired by calling it conservative. That diagnostic difference prepares the worked trace without preselecting a candidate.

A cold reader must be able to state that distinction and point to the exact field that changes the disposition.

## MLE-CH-03-S04 — Worked trace and truth boundaries

> **Case-truth record — `CASE-01`.** `CASE-01` is the FICTIONAL SYNTHETIC CAPSTONE with no reported facts or attributed outcomes. The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. Its limitation remains no real production, industrial, safety, performance, or business claim.

> **Case-truth record — `CASE-03`.** `CASE-03`, classical credit triage, is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. Its limitation remains that it is not financial advice or credit authorization. `CASE-06` is the PUBLIC REPORTED ML Test Score method.

Benchline retains the deterministic heuristic from Chapter 2 as incumbent `INC-BL-001`. Its input is the exact synthetic snapshot named in `BL-01`. Its output is a priority band and abstention. The measure set includes a synthetic aggregate match rate, low-light segment result, abstention count, and processing-time observation. The numbers exist only to exercise the contract; they do not describe an industrial process.

The first trace shows an aggregate that meets its proposed target while the low-light row fails a consequence-linked threshold. The disposition is HOLD. The MLE cannot average the row away or declare the threshold conservative. Product and domain owners accepted the consequence model, and evaluation retained gate adequacy. The record names the failed row, observed evidence, limitation, owner, and next evidence.

The second trace changes the input snapshot for the proposed candidate but keeps the incumbent result from the earlier snapshot. The apparent gain is larger. The comparator drift is detected by input hashes and the comparison is REJECTED. Repair reruns both on a common accepted snapshot or explicitly states that no direct improvement claim is supportable. It never edits the old result.

In the classical credit triage satellite, a simple estimator still receives exact feature order, preprocessing, population, segment, and consequence records. Its simplicity does not authorize a lending decision.

For `CASE-06`, the reported facts are the paper’s 28-test taxonomy, its system-wide categories, and the authors’ experience claim. Attributed outcomes are limited to their roadmap characterization. The allowed inference is that a missing incumbent or consequence test can expose readiness gaps. The forbidden inference is that a point value selects Benchline’s threshold. Limitations include dated organization-specific practice and no universal causal outcome. Transfer derives tests from failure and consequence, issues owner-bound dispositions instead of point totals, treats current mechanisms only as illustrative implementations, and keeps the decision portable across all five ports without requiring a shared platform.

The trace teaches restraint. A candidate result cannot repair a missing consequence owner. A complete consequence table cannot repair comparator drift. A passing aggregate cannot waive a failing consequential segment. Each failure has its own evidence and owner route, which is why the dossier preserves structured fields instead of a single score.

Now suppose the incumbent is a human workflow rather than code. The record can still be executable enough for comparison: sampling rule, routing procedure, decision form, reviewer qualification, timing definition, output schema, limitations, and observed result. The dossier should not pretend human work is deterministic, nor should it reduce people to an informal “baseline.” It records the bounded process and its variability with the appropriate owners.

A “do nothing” incumbent can also be valid. Its outcome might be no automated prioritization and current queue order. The comparison then measures the intervention against the actual status quo rather than an imaginary weak rule. Consequences and ethics of the comparison remain externally owned. The MLE’s task is to make the basis observable.

The Benchline example remains careful about causal language. Because the fixture is synthetic and the experiment has not yet been designed, `BL-02` cannot say the heuristic causes a change in review delay. It records observed fixture results under a procedure. Causal attribution, external validity, and business effects are outside this record. That ceiling makes the later controlled-comparison chapter necessary.

## MLE-CH-03-S05 — Failure lab

The companion does not run an incumbent. It converts fixed scenario labels into a deterministic evidence envelope with hashes, generic fields, disposition, owner route, limitation, and truth state. Recalculation, segment interpretation, and threshold ownership remain conceptual work for the reader, so the results below describe the answer contract.

The two labs are `synthetic-deterministic`, offline, fixed, and free of external effects. `MLE-CH-03-LAB-01` executes `FIX-MLE-CH-03-1`, recomputes the incumbent record, binds its input and measurement hashes, and emits deterministic `BL-02`. Repetition produces byte-identical evidence.

`MLE-CH-03-LAB-02` uses `FIX-MLE-CH-03-2`. COMPARATOR-DRIFT changes the candidate input snapshot while retaining the incumbent result. Hash comparison identifies the mismatch and disposition is REJECT. Repair requires a new comparison over a common basis, not a narrative caveat attached to the old difference.

SEGMENT-HIDDEN removes the low-light row from an improved aggregate. Reverse mapping detects that the accepted consequence table requires the row. The result is HOLD because evidence is incomplete; if the omission was represented as a complete pass, the qualification claim is rejected. Repair restores the segment or narrows scope through the proper owner route.

TOLERANCE-UNOWNED inserts a numeric gate with no accepting owner. The result is HOLD. A technical calculation cannot self-approve consequence. Repair adds an external decision record with exact scope, evidence, limitation, and date under a new identity.

Each diagnostic isolates the injected failure. The fixture already contains known limitations, which remain visible but do not replace the new reason. The record includes input/output hashes, mutation, observed evidence, disposition, owner route, limitation, and next evidence. PASS means only that `BL-02` satisfies this gate.

The positive lab checks more than schema completeness. It recomputes the incumbent hash, verifies that the measurement procedure references the same snapshot, checks that every required segment has a row, confirms threshold ownership, and resolves the task-contract parent. It then serializes the record canonically. A second run compares exact bytes, not a loosely equivalent object.

The negative lab demonstrates repair boundaries. Comparator drift can be repaired only by rebuilding the comparison basis. A hidden segment can be repaired by restoring evidence or narrowing scope through the right owner, not by editing the aggregate. An unowned tolerance can be repaired only by an external owner decision. Each repair creates a new identity and links the failed record; no mutation is silently erased.

Mutation order is also controlled. Run one mutation at a time against the fixed positive fixture so the diagnostic remains discriminating. A fixture with both comparator drift and a missing owner might return two legitimate failures and obscure whether each check works. Hostile integration may later combine failures, but the chapter lab first proves each mechanism separately.

The lab’s fixed clock matters for owner decisions and expiration fields. The fixed seed matters for any synthetic sampling. Neither produces universal reproducibility. It produces deterministic contract evidence for the local fixture. Real frameworks, hardware, and data introduce other variation that later chapters record explicitly.

Finally, the lab verifies that no result can change authority. A PASS record cannot populate an absent evaluation signature. A repair function cannot accept a consequence. A port adapter cannot convert platform metadata into product approval. These effect boundaries make the lab safe and preserve the distinction between demonstrating evidence mechanics and making a real decision.

Illegal promotion and self-approval are always tested. A HOLD or REJECT cannot jump to RELEASABLE. The MLE cannot sign the evaluation or consequence owner field. No network, provider, production, credential, real person, or authority mutation occurs.

## MLE-CH-03-S06 — Five-port transfer

Five-port equality means the same incumbent evidence fields can be reviewed side by side. It does not mean the adapter executed provider benchmarks, local estimators, checkpoint workloads, constrained hardware, or platform releases. Each port’s actual measurements remain outside the fixture.

`PORT-MANAGED` must export the incumbent configuration, input basis, results, limits, and owner decisions. A provider benchmark is not the workload baseline. Opaque preprocessing or snapshot identity blocks comparison.

`PORT-CLASSICAL` may make the incumbent especially simple, but it still requires immutable feature order, preprocessing, estimator or rule identity, measures, segments, and recovery. Simplicity does not make consequence ownership optional.

`PORT-DEEP` may compare checkpointed candidates with a smaller incumbent. Scale and novelty do not weaken common inputs or independent evaluation. Hardware or preprocessor changes belong in the comparison record.

`PORT-EDGE` uses Benchline’s synthetic device context. Resource constraints may shape measures, while hardware, domain, operations, safety, and product decisions remain external. The case cannot imply real device performance.

`PORT-SHARED` retains a tenant-specific incumbent and consequence table while platform owners retain shared mechanisms and fleet decisions. A platform-wide aggregate cannot replace the workload’s segment evidence.

The invariant decision is whether the incumbent is retained and every claimed difference uses the same accepted basis. Each port receives task, population, incumbent, input identity, measure contract, authority map, and perturbation. Each returns disposition, evidence, state, limitation, owner route, and next evidence. No port is privileged.

Transfer testing uses a positive fixture and comparator-drift fixture across all ports. Mechanics vary, but the positive path emits equivalent `BL-02` meaning and drift is rejected everywhere. A managed platform cannot waive input identity; a classical path cannot waive segments; a deep path cannot use novelty as authority; an edge path cannot convert constraint into safety evidence; a shared path cannot substitute fleet statistics.

Replaceability keeps current mechanisms out of durable doctrine. Tracker fields, provider dashboards, estimator APIs, accelerator names, and platform services may change. Exact identity, common comparison, consequence ownership, and limitations remain stable.

The ports also reveal different forms of comparator drift. A managed service may update preprocessing or a default model behind a stable endpoint. A classical pipeline may reorder features. A deep workflow may change checkpoint, tokenizer, library, or accelerator. An edge device may use an older package or sensor configuration. A shared platform may change a feature definition or runtime for multiple tenants. The same comparison contract detects these changes through port-specific identities.

Evidence export is part of replaceability. The managed port must provide enough information to reconstruct the comparison claim even if the service is later replaced. The edge port must retain evidence despite delayed connectivity. The shared port must distinguish tenant and platform changes. If the only evidence is a live dashboard that cannot be exported, the dossier records opacity and HOLD rather than taking a screenshot as durable proof.

The classical satellite exposes a temptation around simple models. Reviewers may treat an interpretable coefficient or short pipeline as self-explanatory, yet input identity, preprocessing, population, threshold, and consequence can still drift. Interpretability of one mechanism does not establish workload fitness. The baseline record asks the same questions without forcing deep-learning artifacts onto this port.

Owner routes vary but remain explicit. Platform owners address service defaults and fleet changes. Data owners address shared source truth. Research owners retain novelty claims. Evaluation owners retain gate adequacy. Product and domain owners accept consequences. The MLE coordinates workload evidence across these routes without becoming their substitute.

The transfer test concludes with a semantic comparison. Can a reviewer place five port records side by side and identify the same decision, evidence categories, state, limitation, and next action? If yes, the doctrine travels. If one record relies on provider jargon or assumes deep-learning concepts that other ports cannot express, the interface needs repair.

## MLE-CH-03-S07 — Assessment and Qualification Gate

`MLE-CH-03-ASMT-01` supplies two incumbent runs, one proposed candidate summary, a consequence table, and an aggregate that hides a segment. The reader must construct `BL-02`, identify the valid comparator, recompute measures, expose segment evidence, and issue PASS, HOLD, REJECT, or REOPEN.

### Qualification Gate

PASS requires executable incumbent identity, exact input snapshot, procedure, measure definitions, segment coverage, observed values, limitations, replacement conditions, consequences, thresholds, accepting owners, and next evidence. The observable evidence is canonical `BL-02`. Comparator drift yields REJECT. Missing consequential segment or owner yields HOLD. Changed task basis yields REOPEN.

The answer intent explains both support and ceiling. A passing record establishes a comparison basis, not model quality or release. A failing aggregate does not require a candidate. A passing aggregate does not waive segments. The reader names what new evidence could change the disposition.

Authority is scored independently. Product and domain owners accept the consequence model; evaluation owns gate adequacy. The MLE implements and measures the incumbent but cannot set business or domain tolerance alone. An MLE-signed threshold fails even if every calculation is correct.

Retry produces a new artifact identity and preserves the old result. It changes only the failed basis, segment, or owner field. Silently swapping snapshots, deleting a row, or relabeling a target as a threshold fails the gate.

The exact Answer intent is: Explain the decision, evidence, state, owner, and next action. For this chapter, the decision is whether the retained incumbent is a usable comparison branch under the accepted task. Evidence must resolve its rule or model identity, input snapshot, procedure, aggregate and segment results, resource behavior, limitations, and tolerance owners. The state is CONTRACTED only when that evidence is usable; otherwise the response names HOLD, REJECT, or REOPEN. The next action is a controlled candidate comparison request, not an unsupported declaration that learning is required.

The assessor introduces three near misses. An aggregate improvement with a missing consequential segment cannot displace the incumbent. A deterministic rule with complete metrics but an expired population contract must REOPEN rather than PASS. A weak incumbent whose procedure and limits are honest can still be retained, because its purpose is to make improvement interpretable. The reader must identify the first discriminating failure and show which new evidence could change it. Observable PASS evidence is exact: BL-02 passes its named qualification gate.

The authority limit remains: the MLE implements and measures the incumbent but does not set business or domain tolerance alone. Product owns business acceptance; the domain owner accepts consequential meaning; evaluation later retains its independent voice. Retry is HOLD or REOPEN with new evidence; never self-approve. It allocates a new baseline record, preserves the prior result and segment rows, binds only the repaired input, and explains why the disposition changed.

## MLE-CH-03-S08 — Durable handoff

`BL-02` version 1.0.0 extends the accepted CONTRACTED task in `BL-01` without modifying its bytes. The recorded link hash is `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, an accepted identity rather than new execution proof. Incumbent identity, snapshot, procedure, aggregate and segment observations, tolerances, owners, limitations, and replacement conditions form the delta, with support from `MLE-BCLM-007` through `MLE-BCLM-009`. Later corrections branch from this record.

Retaining an incumbent does not move the lifecycle beyond CONTRACTED. The Appendix B precondition prevents forward motion disguised as reopen: source must be later than target and the named evidence must be historically possible. `UNORIENTED` to `CONTRACTED` is therefore illegal. A changed purpose or consequence basis returns downstream comparison work to its owned contract without erasing the incumbent observation.

The chapter-specific rechecks travel with the record: the incumbent record retains executable identity, input snapshot, measure set, limitations, and replacement conditions; the baseline-versus-target table exposes aggregate gain beside any failing consequence segment; and threshold cells retain proposed value, evidence, accepting owner, status, and unresolved assumption. These are evidence obligations, not claims about an external system. The dossier supports only this chapter’s bounded decision; PASS cannot certify later gates, public-case outcomes remain attributed, and synthetic evidence remains synthetic-deterministic.

The evidence ceiling excludes unilateral business tolerance, domain consequence judgment, evaluation self-certification, and candidate selection. Consume `BL-01` without silent repair and produce `BL-02` for Chapter 4. The next chapter receives a bounded incumbent comparison and must establish snapshot and label admissibility without changing accepted tolerances. The evidence manifest, legal state, limitations, rechecks, lineage, and exact next dependency travel together.

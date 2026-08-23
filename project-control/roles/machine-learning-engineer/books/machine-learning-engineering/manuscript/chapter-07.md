# Chapter 7 — Build Baselines and Controlled Comparisons

Author: Komal Nakrani
Chapter ID: `MLE-CH-07`
Milestone: `BL-06`

## MLE-CH-07-S01 — Decision and Bench Setup

### Bench Setup

`BL-05` makes Benchline’s data, split, and train-serve meaning admissible. The next danger is a comparison that changes more than the claimed intervention. A candidate may use different preprocessing, inputs, thresholds, or evaluation code while the team attributes the observed difference to architecture. A tracker can faithfully store an incomplete run. A rerun can differ across contexts without invalidating the original evidence, yet teams may either hide variation or promise universal determinism.

The decision is to design a controlled experiment that retains the incumbent and changes only the claimed intervention. Evidence includes hypothesis, incumbent and candidate identity, frozen inputs, preprocessing, evaluation procedure, run manifest, observed results, confound checks, repeated-run envelope, limitations, and owners. The state remains ADMISSIBLE while `BL-06` records the controlled comparison. Applied Science owns scientific novelty claims; evaluation retains suite adequacy. The MLE owns workload experiment integrity, not the research agenda or independent gate.

### Bench Sheet

| Field | Required record |
|---|---|
| decision | Valid comparison, HOLD, REJECT, or REOPEN |
| evidence | Hypothesis, controls, inputs, runs, results, confounds, limits |
| state and dossier delta | `ADMISSIBLE` → `ADMISSIBLE`; create `BL-06` |
| authority route | Applied Science owns novelty; evaluation owns adequacy |
| next evidence | Bounded reconstructible run capsule |

Bench Setup, decision, evidence, state and dossier delta, authority route, and next evidence prevent a successful execution from becoming an unsupported causal or release claim.

The controlled bench implements four frozen architecture claims. `MLE-CLM-004` keeps experiment and data evidence traceable through change. `MLE-CLM-008` preserves the task, population, incumbent, criteria, and reason for learning before candidate complexity. `MLE-CLM-010` requires immutable run context—code, dependencies, data, parameters, seeds, hardware, metrics, and artifacts—while bounding reconstruction to the recorded platform and release. `MLE-CLM-017` exposes an undeclared preprocessing change or configuration interaction as an interface failure, not an inconvenient footnote. Together they make attribution a property of the dossier rather than of a winning score.

Four ownership boundaries constrain the comparison. `BND-01` leaves generalized statistical and business inference with Data Science and domain/product partners. `BND-03` and `BND-04` leave scientific novelty, algorithm research, and publication claims with Applied Science and Research Engineering. `BND-09` and `BND-10` leave tracker infrastructure, shared runtime, and fleet mechanisms with MLOps and platform owners. The MLE owns the workload’s controls and run evidence, not those adjacent decision centers. `SCN-09` tests a novel architecture with promising offline results: it retains the incumbent and requests controlled, packaged, recoverable evidence while science owns the novelty claim. The scenario is constructed and proves no model outcome. `PD-04` names the domain contract—make interventions attributable and reruns reconstructible within bounded contexts, without taking ownership of the research agenda. `BL-06` is therefore a controlled comparison plan, never a candidate qualification.

The bench sheet is written before execution and has two visibly separate columns. The invariant column binds data, split, preprocessing, evaluation, thresholds, environment expectations, and required segments. The change-budget column names the one intended intervention and any context difference that must be disclosed rather than controlled away. A third row states what observation would falsify the proposed mechanism. This structure prevents an attractive result from retroactively redefining the experiment. Another engineer must be able to inspect the sheet, predict which fields may differ, and identify the owner of every threshold without opening the tracker. If that cold read fails, the experiment remains unready even when both executables run.

## MLE-CH-07-S02 — Procedure: isolate the intervention

### Source notes and currentness: experiment evidence

Write the hypothesis before running the candidate. Name the intervention, expected direction, mechanism rationale, measures, segments, and failure conditions. The hypothesis should be falsifiable on the accepted `BL-05` basis. “New model is better” is not sufficient. “Replacing only the estimator while retaining inputs, preprocessing, split, evaluation, and threshold is associated with a stated change in named fixture measures” is reviewable and bounded.

Primary teaching MLE-BCLM-019: a candidate comparison retains the incumbent and records whether data, preprocessing, evaluation procedure, thresholds, or other factors changed. The ML Test Score, selection-bias research, and Rules of Machine Learning—`MLE-BSRC-007`, `MLE-BSRC-010`, and `MLE-BSRC-015`—support baselines, controls, and evaluation discipline. They do not convert an observational or confounded difference into a universal causal claim. If the design does not isolate the intervention, label the result confounded.

Primary teaching MLE-BCLM-020: experiment tracking can preserve parameters, code versions, metrics, datasets, models, and artifacts, but records only what was logged. MLflow Tracking and Uber’s 2017 report, `MLE-BSRC-018` and `MLE-BSRC-043`, illustrate current and dated mechanisms. A successful tracker run cannot prove controls, completeness, attribution, reproducibility, qualification, or release.

Primary teaching MLE-BCLM-021: reconstruction claims are bounded to recorded code, data, dependency, hardware, and randomness context because exact results are not guaranteed across releases or platforms. `MLE-BSRC-018` and pinned PyTorch 2.13 reproducibility documentation, `MLE-BSRC-021`, support recorded context and framework-specific limits. Repeated variation, deterministic controls, unsupported operations, and performance costs belong in evidence. One framework cannot establish every context.

Freeze the comparison basis from `BL-05`: data and label hashes, split membership, transformation versions, example IDs, evaluation procedure, measures, segments, and accepted thresholds. Bind the incumbent from `BL-02`. If either basis changes, allocate a new comparison identity and explain the change. Never reuse a baseline result from different inputs as if it were simultaneous control.

Create an intervention ledger. For each candidate, record candidate identity, claimed change, expected mechanism, fields intentionally changed, fields required invariant, owner, and status. Compute an invariant diff before execution. Any unplanned difference—preprocessing, input snapshot, evaluation code, threshold, or runtime assumption—marks the comparison confounded until repaired.

Build a complete run manifest. Record source revision, data and split identities, preprocessing, dependencies, environment, parameters, seeds, hardware or execution context, start/end time under fixed fixture clock, metrics, segments, logs, and artifact hashes. A tracker ID is one locator in this manifest, not the manifest itself. Required fields are validated independently.

Execute incumbent and candidate through one harness. Use identical input identities, preprocessing, evaluation, measure calculation, and reporting. Where mechanics must differ, record the difference as part of the intervention or a limitation. Preserve raw outputs and calculations so a reviewer can recompute results rather than trust a dashboard.

Inspect segment and consequence rows before the aggregate. A candidate can improve the mean while failing a critical segment. This chapter does not qualify the candidate; it records comparison evidence and known failures. Never delete the incumbent or losing candidates after observing a winner.

Run repeated trials when randomness affects the claim. Record seed, context, result distribution or range, tolerance, and performance cost. Distinguish same-context repeatability from reconstruction under a recorded context and from unsupported cross-context identity. Chapter 8 will formalize the run capsule; `BL-06` must not overclaim now.
The experiment ledger carries exact source clocks. `MLE-BSRC-007` is final IEEE Big Data 2017, verified 2026-08-18; its diagnostic rubric is not certification, a universal gate, or audited readiness. Recheck record and paper availability at publication freezes and translate tests into workload evidence. `MLE-BSRC-010` is final JMLR 11(70), verified 2026-08-18; its empirical settings are bounded while selection bias is the transferable mechanism. Recheck its URL at publication freeze and retain limitations if a later method replaces it.

`MLE-BSRC-015` is unversioned living Google guidance verified 2026-08-18; its rules remain contextual. Recheck all three freezes and record material changes. `MLE-BSRC-018` is MLflow 3 living documentation accessed and verified 2026-08-18; logging does not make a run complete, controlled, reconstructible, qualified, or approved. Recheck every freeze and pin a concrete MLflow version before manuscript freeze if an API, field, storage behavior, or executable example is named.

`MLE-BSRC-043` is Uber’s dated 2017 first-party report, browser-verified 2026-08-18 after ranged GET returned HTTP 406. Browser-recheck all three freezes, retain 2017 with every quantity, and replace only if withdrawn. `MLE-BSRC-021` is pinned PyTorch 2.13 documentation, verified 2026-08-18; reproducibility remains release-, platform-, and hardware-bounded with determinism tradeoffs. Recheck the pinned 2.13 page at every freeze and whenever PyTorch, CUDA, cuDNN, platform, hardware, or deterministic-operation context changes; never substitute the mutable stable URL.

## MLE-CH-07-S03 — Interpret controlled evidence

The strongest conclusion from `BL-06` is that an observed difference is interpretable within a recorded comparison design, or is explicitly labeled confounded. It does not mean the candidate generalizes, is independently qualified, or should be released.

Control is a property of the recorded design and execution, not a ceremonial baseline row. If inputs, preprocessing, metric code, thresholds, or selection exposure differ, the design may not support attribution. The dossier records the difference before explaining results.

`MLE-V07.1` is a semantic invariant-diff and result table at `MLE-CH-07-S03`. It labels hypothesis, incumbent, candidate, data, preprocessing, evaluation, threshold, run, segment, observed difference, confound, owner, limitation, and next evidence. The long description identifies every invariant and changed field. Numeric truth remains selectable.

Tracking completeness is not automatic. A system can log hundreds of fields and omit the one environment or input identity needed to interpret the result. Conversely, a small local manifest can be complete for a bounded fixture. Evaluate required evidence, not tool prestige or field count.

Reproducibility language is calibrated. Same bytes under the same fixed fixture can be deterministic in the companion. Real training may vary across operations, releases, hardware, and scheduling. Record what repeated, within which tolerance and cost, and where evidence ends. Hiding variation and promising universal identity are both failures.

The evidence ceiling keeps candidate work nonterminal. `BL-06` supports experiment integrity and a bounded observed difference. It cannot establish scientific novelty, independent evaluation, production readiness, safety, or business effect. The next chapter freezes run identity and the strongest supportable rerun claim.

Interpret observed differences in layers. The first layer asks whether execution and measurement are valid. The second asks whether required invariants held. The third reports magnitude and direction under the fixture. The fourth connects the observation to the predeclared hypothesis. The fifth states limitations and authority. Skipping directly to the fourth layer invites a compelling story built on a broken basis.

An invariant diff is not merely a debugging tool. It is evidence about attribution. Store expected and observed identity for data, split, preprocessing, evaluation, threshold, environment, and contender. A PASS means no unplanned difference was found under the comparison coverage. It does not prove absence of every hidden dependency.

Run completeness and reproducibility are different. A complete manifest can record an irreproducible or variable run honestly. A repeated result can arise from an incomplete manifest that cannot be reconstructed elsewhere. The dossier requires both identity completeness and bounded empirical evidence, without collapsing them.

Variation may be decision relevant even when the mean is stable. One repeated run may cross a segment threshold or resource limit. Preserve the distribution and consequence rather than smoothing it away. Evaluation later determines adequacy; the MLE ensures evidence remains visible.

The phrase causal improvement is avoided unless the design truly supports it and the relevant owner accepts the interpretation. The book’s default is an observed difference associated with a controlled intervention under named conditions. This language is not timid. It precisely matches the evidence.

Current mechanisms can mislead through familiarity. A tracker’s green status, a framework’s deterministic flag, or a provider’s reproducibility feature describes mechanism behavior. It does not decide whether the workload manifest is complete, controls held, or cross-context identity is supported. The currentness note keeps those mechanisms bounded.

The visual table lets a reviewer spot one changed field beside a strong metric. This design choice resists outcome bias: evidence about control is visible before the result. All fields and values remain semantic text so a later figure cannot hide the confound.

## MLE-CH-07-S04 — Worked trace and case truth

`CASE-01` is the FICTIONAL SYNTHETIC CAPSTONE. `CASE-02`, `CASE-03`, and `CASE-04` are CONSTRUCTED SATELLITES. `CASE-06` and `CASE-07` are PUBLIC REPORTED CASES. Every Benchline run, metric, segment, and outcome is synthetic.

The positive trace retains `INC-BL-001`, freezes `BL-05`, and introduces one constructed candidate whose only intended change is estimator behavior. The harness verifies data, split, preprocessing, evaluation, and thresholds are identical. Raw outputs produce a bounded synthetic result with a visible low-light segment and limitations. `BL-06` records the observed difference without nomination or qualification language.

PREPROCESSING-CONFOUNDED changes normalization only for the candidate. The invariant diff detects it and returns REJECT. RUN-INCOMPLETE omits environment or incumbent identity from a successful tracker record and returns HOLD. REPRODUCTION-OVERCLAIM demands exact cross-platform equality outside the recorded envelope and returns REOPEN with new context evidence required.

The managed satellite requires exportable comparison evidence despite provider opacity. The classical satellite retains controls for a simple estimator and makes no credit claim. The deep satellite stresses checkpoint, preprocessor, hardware, and randomness identity without making a field-performance claim.

`CASE-06` truth record: reported facts are the 2017 paper’s 28-test taxonomy, system categories, and author experience claim; attributed outcomes are limited to the authors’ roadmap framing. Allowed inference is that selected tests can expose a missing control or run-evidence obligation. Forbidden inference is universal scoring, qualification, or certification. Limitations retain the dated method and absence of an audited causal outcome. Transfer selects by failure and consequence, replaces points with owner-bound dispositions, treats tools only as mechanisms, and preserves the decision across all five ports.

`CASE-07` truth record: reported facts are Uber’s separately dated workflow, experiment-store gap, and later validation descriptions; attributed outcomes are limited to first-party scale statements. Allowed inference is that provider-neutral run, feature, and comparison fields improve inspectability. Forbidden inference is reproduced performance, reliability, safety, or business outcome. Limitations keep 2017 and 2025 states distinct, retain browser-verification scope, and prohibit imported Uber design. Transfer keeps as-of dates, uses provider-neutral fields, requires equivalent evidence on every port, and never claims a feature store or tracker reproduces Uber outcomes.

The output preserves incumbent, candidate, losing or failed attempts, invariant diff, raw results, segment rows, run manifests, limitations, owners, and next evidence. No evidence is deleted because one candidate looks promising.

Walk the positive trace precisely. The harness resolves `BL-02` incumbent, `BL-05` data and split, and the proposed candidate identity. It computes the expected invariant set, executes both paths, stores raw outputs, calculates the same measures, and compares every required segment. The only planned difference is the estimator. The record describes the observed synthetic difference and carries a limitation that the fixture proves no real model quality.

The preprocessing mutation is deliberately plausible: candidate normalization uses statistics fit on a different basis. The aggregate improves. Without the invariant diff, the team might credit the estimator. The validator finds the changed transformation hash and marks the comparison confounded. High performance cannot repair design.

The incomplete-run mutation shows a different failure. Every numeric result may be internally consistent, yet the environment or incumbent identity is missing. HOLD preserves the outputs but refuses a reconstructible comparison claim. Repair requires a new evidenced run, not guessed metadata entered after the fact.

The overclaim mutation takes stable local repeats and declares bitwise equality on every platform. The actual evidence supports only the fixed context. REOPEN requests a named new context and bounded tolerance. It does not call the local result false; it corrects the scope of the claim.

The managed case pressures export, the classical case pressures overlooked preprocessing, the deep case pressures hardware/randomness, and the edge case pressures constrained execution. The shared case pressures platform changes. Each remains constructed and provider-neutral.

## MLE-CH-07-S05 — Failure lab

`MLE-CH-07-LAB-01` rebuilds a candidate from `FIX-MLE-CH-07-1` and proves each resolved identity. `MLE-CH-07-LAB-02` applies missing-code, missing-image, and digest-mismatch pressures to `FIX-MLE-CH-07-2`. The offline `synthetic-deterministic` pair uses fixed fixtures, clock, and seed to produce canonical `BL-06` evidence or an exact reconstruction failure; it cannot touch a network, provider, production system, credential, or authority.

The positive lab validates parent hashes, hypothesis, incumbent/candidate identity, invariant fields, complete manifests, raw results, segments, limitations, and owners. Repetition is byte-identical. PASS applies only to comparison integrity.

PREPROCESSING-CONFOUNDED changes normalization and requires REJECT. RUN-INCOMPLETE removes environment or incumbent identity and requires HOLD. REPRODUCTION-OVERCLAIM asserts unsupported exact equality and requires REOPEN. Diagnostics isolate the intended defect.

Repairs allocate new comparison or run identities, preserve failed evidence, and change only the owned field. A tracker cannot fill missing context retroactively without a new record. The MLE cannot approve scientific novelty or evaluation. HOLD/REJECT cannot jump to release.

For each injected break, the record binds the candidate and reconstruction hashes to the concrete missing or mismatched object. It then names the disposition, repair owner, residual limitation, and next proof. Effect tests prohibit hidden shell, network, cloud, model, or secret access and silent upstream repair.

The positive fixture is executed twice to test canonical bytes, then the repeated-run fixture varies only the controlled seed field and records expected results. This distinction teaches deterministic companion behavior without pretending real training is universally deterministic. The companion mechanics are fixed; the manuscript claim remains bounded.

The manifest audit uses an allowlist of required fields derived from the blueprint. Extra tracker metadata may remain, but cannot compensate for a missing parent identity. This guards against field-count theater and makes repair precise.

Mutation records preserve parents. The preprocessing-confounded output points to the positive fixture and changed transform. The incomplete run points to the missing field. The overclaim points to the unsupported context. A reviewer can recompute why each disposition occurred.

No lab function can promote state or sign external authority. A valid experiment remains ADMISSIBLE. Novelty, evaluation, product, domain, and formal decisions stay outside the deterministic record. This is an essential effect boundary, not just a role note.

Failure diagnosis begins with the invariant diff. For PREPROCESSING-CONFOUNDED, the reader resolves expected and observed transform identities and stops at the first unplanned change. For RUN-INCOMPLETE, the reader tests the manifest allowlist and names the missing environment or incumbent field instead of treating tracker success as completeness. For REPRODUCTION-OVERCLAIM, the reader compares the claimed envelope with the recorded platform, hardware, release, seeds, repeats, and tolerance. Each diagnosis produces a distinct disposition because each missing fact changes a different claim.

The negative path protects evidence that teams are tempted to discard. Failed runs, losing candidates, timeouts, unstable repeats, and segment regressions remain in the candidate ledger. Their presence reveals selection pressure and gives later reviewers the denominator needed to interpret a winner. A repair never backfills guessed context into an old run. It creates a new run or comparison identity, links the failed evidence, and reruns the relevant path.

The lab’s deterministic claim stays narrow. Fixed fixtures can produce canonical bytes and verify manifest logic. Real training may vary with hardware, dependencies, kernels, order, and nondeterminism. The evidence record therefore distinguishes rerun identity, observed local stability, bounded tolerance, and unresolved cross-context variation. This turns reproducibility from a ceremonial checkbox into a claim with explicit support and limits.

## MLE-CH-07-S06 — Five-port transfer

`PORT-MANAGED` requires exportable run and comparison identities. Provider optimization or a dashboard does not prove controls.

`PORT-CLASSICAL` keeps feature order, preprocessing, estimator, and input basis exact. Simplicity does not make tracking completeness optional.

`PORT-DEEP` binds checkpoint, preprocessor, dependency, accelerator, seed, and repeated variation. Novelty and benchmark results do not authorize qualification.

`PORT-EDGE` binds device package, constrained runtime, sensor context, and delayed evidence. Benchline can demonstrate whether a package is reconstructible from those identities, never whether a real device performs safely.

`PORT-SHARED` distinguishes tenant experiments from shared platform changes and fleet authority. Platform metrics cannot replace workload controls.

The invariant decision is whether the comparison isolates the claimed intervention and preserves complete bounded run evidence. Every adapter receives the same task, incumbent, input, hypothesis, invariant set, authority map, perturbation, and expected evidence. Every result returns the same disposition grammar.

The positive, preprocessing-confound, incomplete-run, and overclaim fixtures transfer across ports. Mechanisms differ, but unplanned change is confounded, missing evidence is HOLD, and unsupported cross-context identity is refused everywhere. No port is privileged.

Current tracker APIs, provider services, estimators, deep frameworks, accelerators, device runtimes, and platforms remain dated examples. Durable doctrine is controlled change, complete identity, bounded reconstruction language, retained evidence, and external authority.

Port equality is tested through the invariant diff. Managed mechanics may expose a service configuration; classical mechanics expose local code and estimator; deep mechanics expose checkpoint and accelerator; edge mechanics expose device package; shared mechanics expose tenant and platform release. Each maps into allowed-change and invariant fields.

Opaque fields remain limitations. A managed provider may not reveal hardware or exact dependencies. The comparison can support only the claim allowed by exported evidence. It cannot fill fields with provider marketing. A shared platform may update under the workload; that change becomes context rather than being ignored.

Classical and edge ports protect against the assumption that experiment rigor belongs only to deep training. A deterministic rule change can be confounded by preprocessing. A device candidate can be confounded by package or sensor context. The same evidence grammar applies.

The deep port protects against novelty bias. A new architecture with promising offline results is still a candidate intervention under controls. Applied Science owns the research claim, and evaluation later owns adequacy. The MLE’s contribution is the evidence-bearing comparison.

The transfer result passes when a reviewer can compare all five records without translating their decision semantics. It fails when one mechanism becomes the required reference or when platform capability silently changes authority.

Port transfer uses one invariant diff schema. Managed execution exports service configuration and hidden-context limitations; classical execution binds local feature order and preprocessing; deep execution binds checkpoint, dependencies, accelerator, randomness, and repeats; edge execution binds device package, sensor context, and resource envelope; shared execution separates tenant change from platform change. Each port must show expected and observed identities for every controlled field and name the one planned intervention.

The hostile transfer changes an apparently harmless mechanism field. A managed default, classical preprocessing order, deep library release, edge package, or shared feature definition can all confound attribution. The adapter may describe different mechanics, but the disposition remains REJECT until the changed field is either controlled or declared as part of a new hypothesis. Opaque context becomes a limitation or HOLD, never an invented constant.

The cold-read test places five records side by side. Another engineer must identify the incumbent, candidate, invariant basis, planned delta, failed attempts, observed evidence, context envelope, owner route, and next action without knowing the tool. That is the meaning preserved by PORT-MANAGED, PORT-CLASSICAL, PORT-DEEP, PORT-EDGE, and PORT-SHARED; no port gets a weaker evidence standard because its interface looks familiar.

## MLE-CH-07-S07 — Assessment and Qualification Gate

`MLE-CH-07-ASMT-01` provides incumbent and candidate runs, one preprocessing difference, incomplete tracker fields, repeated results, and a strong aggregate. The reader must build `BL-06`, compute the invariant diff, preserve segments and losing evidence, and issue PASS, HOLD, REJECT, or REOPEN.

### Qualification Gate

PASS requires falsifiable hypothesis, retained incumbent, exact candidate, common data/split/preprocessing/evaluation/threshold basis, complete run manifest, raw and segment results, invariant diff, repeated-run limits, owners, and next evidence. Confounded preprocessing yields REJECT. Missing context yields HOLD. Unsupported reproducibility claim yields REOPEN.

The answer must point from an observed difference to the exact missing or mismatched identity, select the legal disposition, and route the repair without rewriting history. Its conclusion must remain narrow: a tracker record is not completeness, a controlled fixture is not independent qualification, and repeated local results are not universal cross-platform identity.

Applied Science owns novelty; evaluation owns suite adequacy. The MLE owns workload experiment integrity and cannot self-certify either. Retry creates new identities, preserves failed runs, and never edits the incumbent or input basis silently.

The exact Answer intent is: Explain the decision, evidence, state, owner, and next action. The response names the intervention and retained incumbent, cites the frozen data, split, preprocessing, evaluation, threshold, run, and segment evidence, states whether the observed difference is controlled or confounded, and routes the next reconstruction request. It must identify the exact changed field that supports or defeats attribution. A tracker link, a strong aggregate, or repeated local results without that explanation cannot pass.

The assessor presents three candidate packets. One improves the mean while using different normalization; it is REJECT because the intervention is not isolated. One preserves controls but omits the environment and losing runs; it is HOLD because selection and reconstruction evidence are incomplete. One repeats under a fixed local context and claims universal bitwise identity; it must narrow the claim or REOPEN under the changed runtime. Observable PASS evidence is exact: BL-06 passes its named qualification gate, which supports controlled comparison integrity but not candidate qualification.

The authority limit remains: the MLE owns workload experiment integrity, not the research agenda or independent gate. Applied Science owns novelty, evaluation owns suite adequacy, and product/domain owners retain consequence decisions. Retry is HOLD or REOPEN with new evidence; never self-approve. It creates new comparison or run identities, preserves failed attempts, changes only the owned field, and explains the disposition from the new evidence.

Scoring separates control, completeness, interpretation, and restraint. A candidate may earn control credit yet fail completeness because losing runs are absent. It may be complete yet fail interpretation because the claimed causal scope exceeds the design. A technically exact response still fails authority if it nominates or qualifies the candidate instead of routing the next gate.

## MLE-CH-07-S08 — Durable handoff

Durable dossier record: BL-06 version 1.0.0 consumes BL-05 from incoming state ADMISSIBLE without silent repair. Its frozen planning linkage binds the accepted input identity to hash aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa; that accepted linkage is not presented as a newly executed hash. The record carries hypothesis, incumbent, candidate, change budget, invariant diff, run manifests, raw and segment results, confounds, owners, and limitations. Its evidence manifest is MLE-BCLM-019, MLE-BCLM-020, MLE-BCLM-021. Earlier dossier bytes remain immutable, and any correction creates a new artifact identity and lineage edge.

The only legal outgoing state is ADMISSIBLE. HOLD to RELEASABLE and REJECT to RELEASABLE are forbidden transitions. The four reopen routes are exact: purpose or intended use goes to CONTRACTED; data, labels, features, or population goes to ADMISSIBLE; runtime, dependencies, interface, or serving envelope goes to RECONSTRUCTIBLE; authority, constraint, or permitted use goes to CONTRACTED. A reopen invalidates only affected downstream evidence, retains the triggering record, names its authority owner, and cannot silently promote state.

The chapter-specific rechecks travel with the record: Blueprint a baseline/candidate harness with a mutation that changes preprocessing and must invalidate the comparison. Make completeness executable: a tracker may report success, yet the record must fail if runtime environment, input-snapshot identity, or the retained incumbent is absent. Blueprint a rerun envelope that records context, repeated results, tolerance, performance cost, and the strongest remaining reproducibility limitation. These are evidence obligations, not claims that an illustration, lab, or external system has run. The limitations also travel: the dossier proves only this chapter’s bounded decision under its named inputs and fixtures; PASS cannot certify later gates, public-case outcomes remain attributed, and synthetic evidence remains synthetic-deterministic.

Prohibited claims remain explicit: No causal claim from confounded evidence, scientific novelty acceptance, independent qualification, or promise of cross-platform exact reproduction. Do not invent public-case facts, outcomes, authority, production results, or certification. Do not activate Phase 08, create code, or generate assets from this blueprint. The continuity rule is: Consume BL-05 without silent repair; produce BL-06 for MLE-CH-08. Chapter 8 receives the controlled comparison plan and must construct a bounded reconstruction claim; it cannot treat the observed difference as qualification. This exact next dependency, together with the evidence manifest, legal state, limitations, rechecks, and lineage, is the handoff; no asset, external approval, or production result is implied.

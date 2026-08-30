# Chapter 6 — Split Without Leakage and Test Train-Serve Conformance

Author: Komal Nakrani
Chapter ID: `MLE-CH-06`
Slug: `split-without-leakage-and-test-train-serve-conformance`
Part: `PART-02`
Milestone: `BL-05`

## MLE-CH-06-S01 — Decision and Bench Setup

### Bench Setup

`BL-03` and `BL-04` give Benchline exact data, label, transformation, consumer, and feedback identities. Those records do not prove that the evidence used to develop a candidate is separated from the evidence used to judge it, or that serving computes the same meaning as training. Leakage can cross time, repeated entities, groups, outcomes, preprocessing, or feedback. A convenient random split may create a persuasive result from information unavailable at prediction time.

The decision is to choose population-aware splits and prove train-serve conformance over matched identities. Evidence includes prediction cutoff, entity and group keys, population and time coverage, anticipated shift, transformation versions, matched examples, schema/value/missingness comparisons, exceptions, and owners. The state moves from CONTRACTED to ADMISSIBLE through `BL-05`. Domain and evaluation owners judge representativeness; data and platform owners retain shared source/runtime authority. The MLE designs workload splits and conformance tests but cannot self-certify population validity.

### Bench Sheet

| Field | Required record |
|---|---|
| decision | ADMISSIBLE, HOLD, REJECT, or REOPEN |
| evidence | Cutoff, groups, split hashes, matched values, limits, owners |
| state and dossier delta | `CONTRACTED` → `ADMISSIBLE`; create `BL-05` |
| authority route | Domain/evaluation judge population; data/platform own shared context |
| next evidence | Controlled baseline/candidate experiment |

Bench Setup, decision, evidence, state and dossier delta, authority route, and next evidence keep a technically clean split from becoming an unsupported population claim.

Four architecture claims govern the bench. `MLE-CLM-004` binds the split and feedback basis to traceable change evidence. `MLE-CLM-009` requires executable schema, provenance, transformation, environment, skew, and drift contracts. `MLE-CLM-010` requires immutable code, dependency, data, parameter, seed, hardware, metric, and artifact context while bounding reproducibility to a platform and release. `MLE-CLM-017` treats temporal leakage, entity crossing, undeclared consumers, and transform drift as system-interface failures, even when individual steps look reasonable. These assignments make the split rule evidence rather than an analyst preference.

The ownership projection is just as exact. `BND-02` leaves generalized ingestion and storage architecture with Data Engineering. `BND-09` and `BND-10` leave reusable automation, serving infrastructure, schedulers, stores, and fleet controls with MLOps and platform owners. `BND-17` leaves population validity and consequential use with the domain authority. `SCN-03` tests a run that cannot reproduce bit for bit on different hardware: the response is a bounded context claim plus platform routing, not a universal determinism promise. `SCN-08` tests population change after technical success and invalidates the old admissibility basis. Both are decision fixtures, not field outcomes. `PD-03` joins these checks into one domain: transformations, consumers, feedback, splits, and train-serve meaning must be traceable, while generalized data-platform authority stays external. Only that evidence can support `BL-05`.

The setup begins by drawing two clocks. The first marks when each feature becomes knowable; the second marks when the prediction must be made. Every candidate field is placed on both before rows are assigned. Next, the bench names repeated entities and groups that must remain on one side of the split, plus the population cells whose absence would defeat the intended claim. Finally, it selects matched example identities that can traverse both training and serving transforms. These decisions are recorded before a library chooses partitions. That order matters: a convenient random split can be perfectly reproducible while leaking time, identity, or future information. The cold-read test gives the setup to a reviewer who must identify the learn-predict boundary, grouping rule, claimed population, and conformance predicate without inspecting candidate metrics.

## MLE-CH-06-S02 — Procedure: enforce the learn-predict boundary

### Source notes and currentness: split evidence

Start from the prediction event. State what is known at that moment, for which entity or group, in which population and context, and what becomes known only later. Draw the learn-predict boundary before choosing a split algorithm. Any feature, label, transformation, or selection rule crossing that boundary needs explicit justification and evidence.

Primary teaching MLE-BCLM-016: a valid split prevents information unavailable at prediction time from crossing the learn-predict boundary and preserves the time, entity, and group independence required by the task. Leakage research and Rules of Machine Learning, `MLE-BSRC-014` and `MLE-BSRC-015`, support leakage mechanisms and time-aware discipline. They do not supply a generic algorithm that proves absence of leakage. Workload and domain knowledge determine relevant boundaries.

Primary teaching MLE-BCLM-017: split and conformance evidence names target population, time period, grouping keys, and anticipated shifts. WILDS and current IMDRF/FDA GMLP guidance, `MLE-BSRC-013` and `MLE-BSRC-025`, support selected distribution-shift and representative-evaluation principles. Neither sets universal representativeness criteria. A historical or identically distributed holdout cannot by itself establish performance in a changed deployment context.

Primary teaching MLE-BCLM-018: train-serve conformance compares schema, feature values or distributions, transformation identity, missing-value behavior, and prediction context. `MLE-BSRC-015`, `MLE-BSRC-024`, and `MLE-BSRC-044` support current mechanisms and dated first-party examples. Passing a comparator does not prove model quality, external validity, or authorization. Coverage and thresholds remain mechanism- and domain-specific.

Write a split dossier. Record source snapshots, population definition, observation interval, prediction cutoff, label maturity, entity/group keys, partition method, random seed where applicable, partition hashes, sizes, segment coverage, anticipated shifts, exclusions, owners, and limitations. Every row or object should resolve to one partition under the declared grouping rules. A seed is not a substitute for the rules.

Choose the split from the task. Time-ordered decisions need temporal separation. Repeated devices, patients, users, sites, or products may require group separation. Spatial or environmental generalization may require location-based holdout. Feedback and delayed labels may require maturity windows. The chapter does not declare one method universally best; it requires the method to preserve the information boundary and evaluation claim.

Search for post-outcome features. Use the `BL-04` graph to identify fields created after the decision, labels leaked through preprocessing, aggregate statistics computed over future data, or decision-dependent feedback. Record the path from unavailable information to model input. A feature can look plausible and still violate timing.

Search for repeated-entity leakage. Hash entity or group identities and verify partitions do not share a group where independence is required. The right key may be device, site, individual, session, batch, or a composite. A random row split does not protect a group boundary. If identity is unavailable, record the limitation and HOLD unsupported claims.

Preserve population evidence. Compare partition composition, time, groups, segments, and missingness to the intended population. State what changed and what remained invariant. Sparse or absent conditions remain visible. Domain and evaluation owners decide whether evidence is adequate; the MLE supplies the dossier and cannot sign their decision.

Build matched train-serve fixtures. Select exact example IDs with known training-path inputs and simulate the serving path offline. Compare schema, transformation hash, feature names and values, missing-value/imputation behavior, timestamp semantics, and context. Use exact equality where required and explicit tolerances where justified. Record raw differences before summary.
> **Currentness record — `MLE-BSRC-014` / `MLE-BSRC-015`.** The leakage source is final KDD 2011, DOI 10.1145/2020408.2020496, verified 2026-08-18; its general method does not set workload thresholds. Recheck the institutional record and DOI at publication freezes, replacing it only with author-controlled full text if withdrawn. Official Google Rules of ML page updated 2025-08-25; retrieved 2026-08-23. Living first-party guidance from Google systems, not universal doctrine; recheck the page update date and material rule changes at each publication freeze.

`MLE-BSRC-013` is final PMLR volume 139, the bounded 2021 WILDS benchmark, verified 2026-08-18; selected datasets and shifts do not represent every population or consequence. Recheck the PMLR record at publication freezes and do not import benchmark visuals. `MLE-BSRC-025` is IMDRF/AIML WG/N88 FINAL:2025, verified 2026-08-18; its sector principles confer no device authorization or clinical validity. Recheck FDA/IMDRF publication status at every freeze and retain the FINAL:2025 identity.

> **Currentness record — `MLE-BSRC-024` / `MLE-BSRC-044`.** Official TensorFlow Data Validation tutorial updated 2024-04-30; retrieved 2026-08-23. The living tutorial demonstrates schema, anomaly, drift, and skew mechanisms but does not determine semantic validity, acceptable shift, outcome degradation, or permission to retrain or promote; recheck tutorial/API semantics at each freeze. Uber’s dated 2025 first-party report was browser-verified 2026-08-18 after ranged GET returned HTTP 406. Browser-recheck each publication freeze and keep every scale, rollout, or improvement statement explicitly as-of 2025.

## MLE-CH-06-S03 — Interpret admissibility evidence

The strongest conclusion from `BL-05` is that the accepted snapshot and transformations support a bounded split and train-serve conformance claim under stated population and context. It does not prove the candidate will generalize, future distributions will match, the population is formally valid, or the model is safe.

Leakage evidence is path specific. A temporal leak identifies information after cutoff entering inputs. Entity leakage identifies a group crossing partitions. Post-outcome leakage identifies results used as predictors. Removing one path does not prove all leakage is absent. The dossier records searched paths and blind spots.

`MLE-V06.1` is a semantic split-and-conformance matrix at `MLE-CH-06-S03`. It labels cutoff, entity/group key, partition, population, shift, training value, serving value, transformation, result, owner, limitation, and next evidence. The long description explains each failed path. Numeric truth stays selectable.

Representativeness is retained authority. The MLE can show coverage and gaps, but only domain and evaluation owners can judge whether the test basis supports the intended population. A balanced fixture may still omit a real condition. A historical holdout may be clean but stale. A benchmark may demonstrate a method without authorizing use.

Parity has its own ceiling. Matched values can support conformance for tested examples and contexts. They do not prove distributional stability, model quality, or platform-wide assurance. Different values can be expected under an accepted tolerance or indicate a defect; raw evidence and semantics determine which.

The state `ADMISSIBLE` means candidate experiments may rely on this basis. It is not qualification. Any data, label, feature, population, or transformation change invalidates the claim and triggers REOPEN to ADMISSIBLE.

Interpret a rejection at the smallest valid scope. A temporal leak may invalidate the experiment basis while leaving the task and data identity intact. A serving mismatch may invalidate conformance while leaving the split intact. A changed population may invalidate both split adequacy and prior contract fields. The changed-evidence map tells reviewers which artifacts must be rebuilt rather than restarting blindly or preserving too much.

The term holdout can mislead by suggesting that mere non-use during fitting guarantees independent evidence. If model choices, feature engineering, or thresholds repeatedly inspect the holdout, it becomes part of selection. The dossier records evaluation exposure and keeps later candidate selection separate from independent qualification. Chapter 9 deepens this separation.

An IID split is also a claim, not a neutral default. It estimates performance under a sampling assumption that may not match future time, group, or environment. State the assumption and evidence. If the deployment context differs, retain the IID result as bounded information while refusing a broader interpretation.

Leakage checks can produce false comfort. A list of known leakage patterns does not prove none remain. The strongest statement names checked paths, evidence, and limitations. Domain review may reveal a semantic path no technical scanner can infer. This is why ownership and cold-read explanation remain part of the gate.

Conformance comparisons can be correct yet irrelevant if matched examples omit the conditions where paths diverge. Fixture selection therefore names segments, missingness, extremes, and context. A sparse fixture produces a limitation. It cannot be described as representative simply because every row matches.

The visual matrix supports interpretation by keeping split and conformance evidence adjacent. A reader can see that one is about independence and the other about meaning across execution contexts. Neither arrow or color implies the other passed. The long description states failed rows and their owner routes.
## MLE-CH-06-S04 — Worked trace and case truth

> **Case-truth record — `CASE-01`.** `CASE-01` is the FICTIONAL SYNTHETIC CAPSTONE with no reported facts or attributed outcomes. The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. Its limitation remains no real production, industrial, safety, performance, or business claim.

> **Case-truth records — `CASE-03` / `CASE-04`.** `CASE-03` is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. Its limitation remains that it is not financial advice or credit authorization. `CASE-04` is also constructed: The constructed deep fixture may test checkpoint, preprocessor, runtime, uncertainty, and serving identity bindings. Do not infer real accuracy, acoustic safety, field performance, production behavior, or approval. Preserve the same decision/evidence job when the model family or runtime changes. Its limitation remains that it is not a deep-learning recipe book.

> **Case-truth record — `CASE-05`.** `CASE-05` is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed shared-tenant fixture may test separation of workload evidence from tenant, fleet, and platform authority. Do not infer platform-wide SLO or performance, business effect, isolation assurance, or approval. Preserve workload evidence when the substrate changes and recheck every substrate-bound relation. Its limitation remains that it is not a platform-engineering curriculum. `CASE-06` and `CASE-07` are PUBLIC REPORTED CASES. Every Benchline split, value, mismatch, and outcome is synthetic.

Benchline defines a synthetic prediction cutoff before simulated review outcome, groups repeated images by device-like fixture ID, and separates time windows. The split manifest references `BL-03` and `BL-04`, records exact membership hashes, and exposes a sparse low-light row. Domain and evaluation fixture owners accept only the exercise scope.

TEMPORAL-LEAK moves a post-review field before the cutoff and expects REJECT. ENTITY-LEAK places repeated IDs across partitions and expects HOLD until a grouped split is built. SERVE-MISMATCH changes missing-value handling for a matched ID and expects REJECT. Each result names the leaked path or mismatched field.

The satellites apply those fixed truth boundaries to time and entity duties, checkpoint and preprocessor identity, repeated-event grouping, and workload-versus-platform authority.

`CASE-06` truth record: reported facts are the 2017 paper’s 28-test taxonomy, system categories, and author experience statement; attributed outcomes are limited to the authors’ roadmap characterization. Allowed inference is that selected data and feature tests can expose a missing split or conformance obligation. Forbidden inference is readiness certification, a universal score, or a workload threshold. Limitations are dated, organization-specific method and no audited causal outcome. Transfer selects tests from failure and consequence, replaces points with owner-bound dispositions, treats tools only as mechanisms, and preserves the decision on all five ports.

`CASE-07` truth record: reported facts are Uber’s separately dated 2017 workflow and 2025 schema, imputation, statistics, report, and deployment-validation descriptions; attributed outcomes are limited to first-party 2025 scale statements. Allowed inference is that matched lineage and transformation evidence remains necessary even with shared code. Forbidden inference is incident prevention, safety, reliability, business value, or outcome transfer. Limitations retain first-party scope, distinct system dates, browser verification, and no imported Uber design. Transfer uses provider-neutral fields, keeps as-of dates, requires equivalent evidence on every port, and never claims a feature store or tracker reproduces Uber outcomes.

The positive output `BL-05` records split, conformance, owners, disposition, limits, and next evidence. It moves the workload to ADMISSIBLE only within the frozen task and identities.

The positive Benchline path groups the constructed repeated IDs, holds the later window for evaluation, and excludes simulated review outcomes unavailable at prediction. Partition hashes and segment counts are recomputed. The matched fixture executes both transformation paths and shows equal values under exact rules. The result does not state that the model will work; it states that this basis is admissible for controlled comparison.

In the temporal mutation, the leaked field is tempting because it correlates strongly with the synthetic label. The dossier traces its creation after the decision cutoff. High apparent predictive value makes the failure more important, not less. REJECT names the field, time path, affected partitions, and repair route.

In the entity mutation, the same constructed device identifier appears on both sides. Whether that matters follows the accepted claim about unseen devices. The fixture says it does, so HOLD requests a grouped split. A different task might document why repeated entities are expected, but it would need a different contract and evidence.

The serving mismatch holds schema and feature name fixed and changes only missing-value behavior. This shows why name or signature equality is insufficient. The raw matched trace reveals the first divergent step. Repair updates the path or accepted contract under a new identity, reruns evidence, and preserves the failed result.

The satellites expose port variation without adding outcomes. A classical task may leak entity identity through handcrafted aggregates. A deep acoustic example may repeat recordings from one event. A shared platform may compute transforms under different tenant contexts. An edge system may delay timestamps or use a stale package. Each is constructed and remains inside its stated limitation.

## MLE-CH-06-S05 — Failure lab

The offline companion does not derive groups, detect leakage, or compare train and serve values. It deterministically records fixture labels, identities, general evidence fields, a disposition, limits, owner routing, and truth state. Readers execute the named reasoning against supplied data; listed failures and repairs define assessment behavior rather than companion-computed findings.

`MLE-CH-06-LAB-01` derives groups and split hashes from `FIX-MLE-CH-06-1`; `MLE-CH-06-LAB-02` uses `FIX-MLE-CH-06-2` to inject an entity crossing and unmatched serving transformation. Both labs are offline and `synthetic-deterministic`. A fixed clock, seed, and local fixture must yield canonical `BL-05` evidence or a discriminating failure, without network, provider, production, credential, or authority mutation.

The positive lab verifies parent hashes, cutoff, groups, partition membership, segment coverage, transformation identities, matched values, tolerances, owners, and limitations. Repeat execution is byte-identical. PASS applies only to admissibility.

TEMPORAL-LEAK crosses cutoff and returns REJECT. ENTITY-LEAK shares repeated IDs and returns HOLD. SERVE-MISMATCH changes imputation for a matched example and returns REJECT. Diagnostics identify the new path or field rather than a generic failure.

Repair rebuilds partitions or transformation evidence under new identities and preserves earlier records. It cannot edit labels, waive population authority, or promote the workload. The illegal path tests HOLD/REJECT to RELEASABLE and MLE self-approval.

Every result includes exact hashes, evidence, disposition, owner route, limitation, and next evidence. No hidden upstream repair is allowed.

The lab validates partition exclusivity and coverage mechanically. It also checks the semantic contract: required group key exists, cutoff is before outcome availability, and segment obligations from `BL-02` are present. A mathematically disjoint split can still fail these semantic checks.

Mutation fixtures derive from immutable positive bytes. Each changes one field and receives a new hash. This allows the expected diagnostic to be tested exactly. Repairs derive again rather than restoring the old identity under changed bytes. Canonical serialization makes repeated results comparable.

The effect boundary rejects any call to a live training service, dataset, device, or registry. The serving path is an offline adapter over fixed fixtures. This means the lab demonstrates contract mechanics only. It cannot claim real framework, hardware, fleet, or production behavior.

Authority checks ensure the MLE cannot mark population adequate, accept a domain exception, or certify a platform. The result may carry technical evidence and a recommendation. External owner fields must resolve to accepted fixture records or disposition remains HOLD.

Failure evidence is preserved through retry. A successful grouped split does not erase the earlier entity leak. A corrected imputation path does not erase mismatch evidence. History supports later review of why the basis changed and whether similar defects recur.

Diagnosis begins from the leaked information path, not from the final metric. For TEMPORAL-LEAK, the reader traces event time, availability time, prediction cutoff, and first consuming transformation until the post-outcome value crosses the boundary. For ENTITY-LEAK, the reader resolves the repeated key and proves its membership on both sides. For SERVE-MISMATCH, the matched example trace is compared step by step until the first unequal transformation or configuration appears. Naming that first discriminating edge prevents a broad “data problem” label from hiding the repair owner.

The negative evidence also has scope. A known-pattern scanner that finds no leak supports only “none of the named patterns fired on these identities.” A matched fixture that agrees supports only the tested examples, paths, versions, and tolerance. Neither permits “no leakage” or “training and serving are identical.” The lab output therefore carries the detector version, tested predicates, fixture coverage, blind spots, and owner route beside the disposition.

Repair is verified adversarially. After regrouping, the old crossed-entity record remains immutable and the new split must fail if the repeated key is reintroduced. After aligning transforms, the old mismatch remains linked and a deliberate configuration change must again fail. This proves that the repair changed evidence rather than only the narrative. Population validity, domain label meaning, and evaluation adequacy still remain external even when every synthetic-deterministic check passes.

## MLE-CH-06-S06 — Five-port transfer

Only split-and-conformance fields transfer uniformly. Changing an internal port tag does not exercise provider opacity, handcrafted preprocessing, accelerator context, delayed device evidence, or tenant isolation. Mechanism-specific results remain unsupported until a real local fixture supplies them.

`PORT-MANAGED` demands exportable split, context, and parity evidence despite opacity. Provider claims cannot establish population validity.

`PORT-CLASSICAL` preserves feature order, grouping, time, and preprocessing. Simplicity does not eliminate leakage.

`PORT-DEEP` binds checkpoint, preprocessor, hardware context, and repeated-event groups. Scale and benchmark results do not establish admissibility.

`PORT-EDGE` records sensor/device grouping, field-time boundaries, package identity, and delayed feedback. The constructed Benchline partition can reveal a crossed device or time boundary, but it cannot establish field performance or physical safety.

`PORT-SHARED` distinguishes tenant splits and transforms from shared pipeline/runtime authority. Workload parity cannot claim fleet assurance.

The invariant decision is whether split and conformance evidence preserve the accepted information and population boundary. All ports receive task, data, groups, context, transforms, matched fixtures, owners, perturbation, and expected evidence; all return the same decision grammar.

Positive, temporal-leak, entity-leak, and serve-mismatch fixtures transfer across ports. Mechanics vary, but equivalent defects receive equivalent dispositions. A provider default, local random split, deep benchmark, device manifest, or shared validation badge cannot waive the gate.

Current split libraries, TFDV APIs, serving runtimes, accelerators, and provider comparisons remain dated mechanisms. Durable doctrine is information boundary, population-aware separation, matched conformance, limitations, and retained authority.

Managed transfer asks what the service can export: training-data identity, split logic, preprocessing configuration, output fixture, and limitations. If intermediate values are opaque, state that scope. A provider assertion may support mechanism availability but cannot decide representativeness.

Classical transfer protects against familiarity. Local dataframe code can fit preprocessing globally, leak target-derived aggregates, or reorder features. The same manifest and matched fixture apply. The absence of an accelerator or checkpoint does not simplify the evidence decision.

Deep transfer records preprocessor, checkpoint, dependency, hardware context, and repeated-event grouping. Exact bitwise equality across hardware is not assumed. Conformance is stated within the recorded context and tolerance. Reproducibility claims wait for Chapter 8.

Edge transfer adds device and field time. A device package may lag the training transform; delayed connectivity may make evidence unavailable. The dossier records package identity, observation time, limitation, and recheck. It does not infer that every field device matches.

Shared transfer separates tenant evidence from platform changes. A runtime upgrade may affect many workloads, but each tenant still needs its own conformance and consequence record. Platform owners manage rollout and fleet risk; the MLE owns workload-specific evidence.

Cross-port comparison tests that the same temporal, entity, and mismatch defects remain visible. Error mechanics differ, but no port may turn capability into authority or opacity into PASS. This equal status is part of the curriculum contract.

Port equality is tested from one contradiction, not from five success demonstrations. A post-cutoff field must be rejected whether it arrives through a managed feature service, local classical dataframe, deep input pipeline, delayed edge synchronization, or shared tenant transform. The adapter names different mechanics, but each record preserves availability time, consuming transform, affected partition, owner, limitation, and repair request. If one port can hide the path behind a provider status, the transfer fails.

The same method handles conformance. Managed execution must export matched identities and configuration; classical execution must preserve feature order and preprocessing; deep execution binds checkpoint, preprocessor, dependencies, seed, and hardware context; edge execution binds package and sensor-time context; shared execution distinguishes tenant evidence from a fleet change. Exact bitwise equality is not demanded across unlike hardware unless the claim requires it. What must remain equal is the evidence interface and the strength of the supported conclusion.

A five-record cold read completes the transfer. The reviewer should locate the same split claim, the same known leak classes, the same parity predicate, and the same external authority ceiling without translating provider jargon. An opaque mechanism becomes a named limitation or HOLD; it never becomes an invented value. This makes replaceability a testable property of BL-05 rather than a promise about interchangeable tools.

## MLE-CH-06-S07 — Assessment and Qualification Gate

`MLE-CH-06-ASMT-01` supplies snapshots, a random split, repeated entity keys, a post-outcome field, and matched train/serve values. The reader must produce `BL-05`, identify leaks, redesign the split, test conformance, and issue PASS, HOLD, REJECT, or REOPEN.

### Qualification Gate

PASS requires prediction cutoff, population and time scope, group keys, immutable partition identities, segment coverage, anticipated shifts, transformation identity, matched-value/schema/missingness evidence, tolerance, owners, limitations, and next evidence. Temporal leak or serving mismatch yields REJECT. Unresolved entity grouping or representativeness yields HOLD. Changed basis yields REOPEN.

The answer intent states what the evidence supports and does not support. Passing parity is not quality. A clean split is not population authorization. A benchmark is not deployment evidence. Domain/evaluation own representativeness; platform/data own shared context; the MLE cannot self-certify.

Retry creates new split or conformance identities, links failed evidence, and changes only owned fields. Silent row movement, deleted segment, or threshold waiver fails.

The exact Answer intent is: Explain the decision, evidence, state, owner, and next action. The response names the learn-predict boundary, cites prediction cutoff, group keys, immutable partitions, population coverage, transformation identities, matched train-serve examples, exceptions, and limitations, then states whether the basis is ADMISSIBLE. It routes each failing row to the owner who can supply new evidence and requests the controlled experiment dependency. Listing a random seed or parity percentage without the governing predicate does not answer the decision.

The assessor includes a deceptively clean packet: aggregate train and test values match, yet one entity crosses partitions and a post-outcome field is available only after prediction time. The reader must reject the contaminated basis even if the candidate metric improves. A second packet has clean grouping but omits the consequential sparse segment; it remains HOLD pending population evidence. A third has matched code but different serving configuration; it requires conformance evidence rather than approval language. Observable PASS evidence is exact: BL-05 passes its named qualification gate.

The answer must identify the exact evidence that invalidated the tempting aggregate result and preserve that contradiction.

The authority limit remains: the MLE designs workload splits and conformance tests but cannot self-certify population validity. Domain, evaluation, data, and platform authorities retain their decisions. Retry is HOLD or REOPEN with new evidence; never self-approve. It creates new split or conformance identities, preserves contaminated evidence, changes only the owned field, repeats affected tests, and records why the resulting disposition differs.

Scoring separates discovery from repair. The reader earns evidence credit only by naming the leaked or mismatched path and showing the predicate that detects it. Repair credit requires a new identity, a linked failed record, and a rerun of affected checks. Authority credit requires the population and domain decisions to remain routed even when the technical evidence is complete.

## MLE-CH-06-S08 — Durable handoff

`BL-05` version 1.0.0 combines unchanged `BL-03` and `BL-04` inputs, moving their CONTRACTED basis to ADMISSIBLE only for the accepted fixture. Hash `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa` names the inherited planning link, not a new run. Prediction cutoff, group keys, partitions, population coverage, transformation identities, matched comparisons, exceptions, owners, and limitations form the evidence under `MLE-BCLM-016` through `MLE-BCLM-018`. Repair records retain contaminated ancestors.

ADMISSIBLE is the sole successful output of this gate. Appendix B forbids an explicit reopen unless the source is later than its target and the missing evidence could already exist, which rules out UNORIENTED-to-CONTRACTED promotion. A changed population, grouping rule, transform, permission, or authority retains the failed path and reopens only evidence downstream of that exact basis.

The chapter-specific rechecks travel with the record: temporal, repeated-entity, and post-outcome feature exercises each name the leaked information path; the split dossier states what changed, what remained invariant, who judges representativeness, and the strongest remaining limitation; and matched-identity parity fixtures display residual uncertainty separately. These are evidence obligations, not claims about an external system. The dossier supports only this chapter’s bounded decision; PASS cannot certify later gates, public-case outcomes remain attributed, and synthetic evidence remains synthetic-deterministic.

The evidence ceiling excludes population-validity self-certification, domain label approval, external-validity claims, model-quality claims, and platform-wide parity assurance. Consume `BL-03` and `BL-04` without silent repair and produce `BL-05` for Chapter 7. The next chapter receives the admissible experiment basis and must isolate the candidate intervention while retaining the incumbent and every failed attempt. The evidence manifest, legal state, limitations, rechecks, lineage, and exact next dependency travel together.

# Chapter 06 Research Pack — Split Without Leakage and Test Train-Serve Conformance

## Integration binding

- Chapter: `MLE-CH-06`
- Architecture: version `1.0.0`, frozen Phase 05 Markdown and JSON recorded by the canonical integration manifest
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Decision job: Choose population-aware splits and prove that training and serving transformations conform.
- Milestone: `BL-05` — Split and conformance evidence

## Frozen research handoff

- Exact source research needs: Leakage; Dataset shift; Train-serving skew.
- Exact Phase 06 handoff: Research primary evidence for splitting, leakage, and conformance.
- Durable doctrine: Split identity, leakage tests, and train-serve conformance are release evidence.
- Volatile examples: Current data-frame library; Current serving transform API.

## Exact book claims

1. `MLE-BCLM-016` (`technical-method`, high confidence, durable): A valid split prevents information unavailable at prediction time from crossing the learn-predict boundary and preserves time, entity, and group independence required by the task; a convenient random split is not presumptively safe.
2. `MLE-BCLM-017` (`technical-doctrine`, high confidence, durable): Split and conformance evidence must name the target population, time period, grouping keys, and anticipated distribution shifts; an identically distributed or historical holdout cannot by itself establish that a split or train-serve comparison represents a changed deployment context.
3. `MLE-BCLM-018` (`technical-method`, high confidence, contextual): Train-serve conformance should compare schema, feature values or distributions, transformation identity, missing-value behavior, and prediction context; thresholds are domain- and mechanism-specific, and a passing comparator is not proof of model quality.

## Source-to-claim evidence map

| Claim | Accepted sources | Evidence carried | Authority limit |
|---|---|---|---|
| `MLE-BCLM-016` | `MLE-BSRC-014`, `MLE-BSRC-015` | Original leakage research supplies the learn-predict separation; Google's living guide supports time-aware pipeline practice and simple measurement. | No generic split algorithm proves the absence of all leakage; grouping and cutoff semantics require workload and domain knowledge. |
| `MLE-BCLM-017` | `MLE-BSRC-013`, `MLE-BSRC-025` | WILDS documents named real-world shift contexts; IMDRF N88 FINAL:2025 supports intended-population representation and independent test data. | WILDS covers selected shifts; medical-device guidance is sector-specific; neither sets universal representativeness criteria. |
| `MLE-BCLM-018` | `MLE-BSRC-015`, `MLE-BSRC-024`, `MLE-BSRC-044` | Living official guidance, executable validation comparisons, and Uber's dated report support schema, value/distribution, transformation, missing-value, and context checks. | First-party mechanisms and comparator thresholds do not establish external validity, model quality, or authorization. |

## Architecture trace

- Architecture claims: `MLE-CLM-004`, `MLE-CLM-009`, `MLE-CLM-010`, `MLE-CLM-017`.
- Boundaries: `BND-02`, `BND-09`, `BND-10`, `BND-17`.
- Scenarios: `SCN-03`, `SCN-08`.
- Domain: `PD-03`.
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- Cases: `CASE-01`, `CASE-03`, `CASE-04`, `CASE-05`, `CASE-06`, `CASE-07`.
- Five-port invariant: All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.

## Case truth and permitted use

| Case | Truth label | Chapter use and transfer limit |
|---|---|---|
| `CASE-01` — Benchline Inspection Dossier | FICTIONAL SYNTHETIC CAPSTONE | Construct temporal, entity, and post-outcome leakage mutations plus matched conformance evidence. No result is real. |
| `CASE-03` — Classical credit triage | CONSTRUCTED SATELLITE | Test time/entity split obligations without offering financial advice or credit authorization. |
| `CASE-04` — Deep acoustic event classifier | CONSTRUCTED SATELLITE | Stress checkpoint/preprocessor identity and repeated-event grouping; not a deep-learning recipe. |
| `CASE-05` — Shared ranking platform tenant | CONSTRUCTED SATELLITE | Separate workload split/conformance evidence from shared pipeline authority; not a platform curriculum. |
| `CASE-06` — Google ML Test Score production-readiness method | PUBLIC REPORTED CASE | Transfer selected data/feature test decision jobs and PASS/HOLD/REJECT evidence, not Google scoring. |
| `CASE-07` — Uber Michelangelo feature and deployment evidence pattern | PUBLIC REPORTED CASE | Use reported conformance mechanisms as dated, first-party examples; require provider-neutral fields and no outcome transfer. |

Frozen constructed-case truth projections preserve zero reported facts, attributed outcomes, and source uses. `CASE-01`: allowed inference — The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Forbidden inference — Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Transfer rule — Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. `CASE-03`: allowed inference — The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Forbidden inference — Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Transfer rule — Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. `CASE-04`: allowed inference — The constructed deep fixture may test checkpoint, preprocessor, runtime, uncertainty, and serving identity bindings. Forbidden inference — Do not infer real accuracy, acoustic safety, field performance, production behavior, or approval. Transfer rule — Preserve the same decision/evidence job when the model family or runtime changes. `CASE-05`: allowed inference — The constructed shared-tenant fixture may test separation of workload evidence from tenant, fleet, and platform authority. Forbidden inference — Do not infer platform-wide SLO or performance, business effect, isolation assurance, or approval. Transfer rule — Preserve workload evidence when the substrate changes and recheck every substrate-bound relation. Each existing case-specific limitation and authority owner remains unchanged.

`CASE-06` carries a method, not certification. `CASE-07` carries reported mechanisms and attributed scale/outcomes; the 2017 and 2025 states stay separate and no claim is made that similar checks universally prevent incidents.

## Durable, volatile, and conflicting evidence treatment

- Keep learn-predict separation, named population/time/group identities, anticipated shifts, matched train-serve identities, and explicit comparator limits as durable requirements.
- Version concrete keys, cutoff times, split algorithms, exception policies, thresholds, library APIs, serving transforms, and prediction contexts.
- Recheck `MLE-BSRC-015` and `MLE-BSRC-024` at every freeze. Preserve `MLE-BSRC-025` as IMDRF N88 FINAL:2025 and do not conflate it with the October 2021 principles.
- Uber's 2025 report is a dated first-party mechanism account, not independent evidence that its controls prevent incidents or transfer to another organization.
- Random splitting, historical holdouts, and matched train-serve checks answer different questions. A split can be internally clean yet unrepresentative; parity can pass while model quality fails.

## Dated current examples

- IMDRF N88 FINAL:2025 (`MLE-BSRC-025`, published 2025-01-29) is used only for representative intended-population and independent-test principles.
- Official Google Rules of ML page updated 2025-08-25; retrieved 2026-08-23. Living first-party guidance from Google systems, not universal doctrine; recheck the page update date and material rule changes at each publication freeze.
- Official TensorFlow Data Validation tutorial updated 2024-04-30; retrieved 2026-08-23. The living tutorial demonstrates schema, anomaly, drift, and skew mechanisms but does not determine semantic validity, acceptable shift, outcome degradation, or permission to retrain or promote; recheck tutorial/API semantics at each freeze.
- Uber's deployment-safety report (`MLE-BSRC-044`) is dated 2025-10-30 and remains a first-party account of schema, imputation, offline distribution, reporting, and validation mechanisms.

## Authority ceiling

Authority owner: Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority.

MLE ceiling: The MLE designs workload splits and conformance tests but cannot self-certify population validity.

Domain and evaluation owners judge representativeness; platform and data owners retain shared runtime and source authority. The MLE designs workload splits, names leakage paths, and produces conformance evidence but cannot self-certify population validity, label validity, external validity, quality, or release permission.

## Five-port transfer

- `PORT-MANAGED`: require exportable split keys, cutoff, population, and matched conformance evidence under provider opacity.
- `PORT-CLASSICAL`: test time/entity/group leakage even when random tabular splits are convenient.
- `PORT-DEEP`: bind repeated entities, checkpoints, preprocessors, hardware context, and serving transforms.
- `PORT-EDGE`: include device, field, synchronization, delayed-label, and temporal context.
- `PORT-SHARED`: keep tenant split identity and parity evidence distinct from platform-wide pipelines and thresholds.

## Misuse prohibitions

- Do not presume a random split is safe or a historical holdout represents a changed context.
- Do not claim that one leakage taxonomy or test proves the absence of every leakage path.
- Do not interpret schema or feature parity as model quality, representativeness, domain validity, or authorization.
- Do not generalize medical-device guidance into non-medical approval.
- Do not transfer Google or Uber methods, scales, or attributed outcomes as universal results.
- Do not let the MLE self-approve population validity or external gate adequacy.

## Planned evidence artifacts

- `BL-05` split and conformance evidence with target population, time window, entity/group keys, cutoff, anticipated shifts, matched example identities, thresholds, owners, and strongest remaining limitation.
- Temporal, repeated-entity, and post-outcome feature mutations, each naming the leaked information path.
- Split dossier stating what changed, what remained invariant, who judges representativeness, and the strongest limitation.
- Matched train-serve parity checks plus a separate limitation panel forbidding quality or authorization inference.

## Exact Phase 07 handoff

- For `MLE-BCLM-016`: Blueprint temporal, repeated-entity, and post-outcome feature mutations that each fail with a named leaked information path.
- For `MLE-BCLM-017`: Blueprint a split dossier that states what changed, what remained invariant, who judges representativeness, and the strongest remaining limitation.
- For `MLE-BCLM-018`: Blueprint parity checks with matched example IDs and a separate limitation panel that forbids interpreting parity as quality or authorization.
- Phase 07 must preserve exact architecture and case mappings, source edition distinctions, external representativeness authority, the five-port invariant, and `BL-05` milestone. Tool mechanisms remain dated and replaceable.

Evidence-gap disposition: none release-blocking

Rationale: Accepted original research, official engineering guidance, current project documentation, regulator guidance, and a bounded first-party report cover leakage, shift context, independent testing, and conformance mechanisms. Their non-universal coverage and sector limits are explicit in the planned evidence.

Affected claim/source IDs: `MLE-BCLM-016`, `MLE-BCLM-017`, `MLE-BCLM-018`; `MLE-BSRC-013`, `MLE-BSRC-014`, `MLE-BSRC-015`, `MLE-BSRC-024`, `MLE-BSRC-025`, `MLE-BSRC-044`.

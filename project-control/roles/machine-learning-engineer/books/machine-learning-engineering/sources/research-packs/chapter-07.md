# Chapter 07 Research Pack — Build Baselines and Controlled Comparisons

## Integration binding

- Chapter: `MLE-CH-07`
- Architecture: version `1.0.0`, frozen Phase 05 Markdown and JSON recorded by the canonical integration manifest
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Decision job: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.
- Milestone: `BL-06` — Controlled comparison plan

## Frozen research handoff

- Exact source research needs: Controlled experiments; Baseline comparison; Experiment tracking limitations.
- Exact Phase 06 handoff: Research primary sources for controlled ML experiments and baselines.
- Durable doctrine: Retained baselines and controlled variables make candidate evidence attributable.
- Volatile examples: Experiment trackers; Current model libraries.

## Exact book claims

1. `MLE-BCLM-019` (`technical-method`, high confidence, durable): A candidate comparison record retains the incumbent and records whether data, preprocessing, evaluation procedure, decision thresholds, or other factors changed; it may attribute an observed difference to the claimed intervention only when the recorded comparison design supports that attribution, otherwise it records the result as confounded.
2. `MLE-BCLM-020` (`technical-mechanism`, high confidence, contextual): Experiment tracking can preserve parameters, code versions, metrics, datasets, models, and artifacts for comparison, but the tracker records only what was logged and therefore cannot by itself prove controls, completeness, attribution, or reproducibility.
3. `MLE-BCLM-021` (`technical-doctrine`, high confidence, durable): Reconstruction claims must be bounded to a recorded code, data, dependency, hardware, and randomness context because exact results are not guaranteed across framework releases or platforms; repeated-run variation and determinism tradeoffs belong in the evidence record.

## Source-to-claim evidence map

| Claim | Accepted sources | Evidence carried | Authority limit |
|---|---|---|---|
| `MLE-BCLM-019` | `MLE-BSRC-007`, `MLE-BSRC-010`, `MLE-BSRC-015` | Production-readiness tests, original selection-bias research, and simple-baseline practice support retained controls, independent evaluation logic, and recording changed variables. | These sources do not turn observational comparison into causality or choose the correct workload design. |
| `MLE-BCLM-020` | `MLE-BSRC-018`, `MLE-BSRC-043` | MLflow's living documentation enumerates trackable run metadata; Uber's 2017 report supplies a dated first-party experiment-store/comparison pattern. | A tracker preserves only logged fields and does not prove completeness, held controls, attribution, reproducibility, or qualification. |
| `MLE-BCLM-021` | `MLE-BSRC-018`, `MLE-BSRC-021` | MLflow can record run context, while pinned PyTorch 2.13 documentation bounds reproducibility across releases and platforms and describes seeded/deterministic controls. | PyTorch covers one framework and no tool captures every external nondeterminism source or proves reconstructability. |

## Architecture trace

- Architecture claims: `MLE-CLM-004`, `MLE-CLM-008`, `MLE-CLM-010`, `MLE-CLM-017`.
- Boundaries: `BND-01`, `BND-03`, `BND-04`, `BND-09`, `BND-10`.
- Scenario: `SCN-09`.
- Domain: `PD-04`.
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-04`, `CASE-06`, `CASE-07`.
- Five-port invariant: Every port preserves the intervention, control variables, incumbent, and evidence contract.

## Case truth and permitted use

| Case | Truth label | Chapter use and transfer limit |
|---|---|---|
| `CASE-01` — Benchline Inspection Dossier | FICTIONAL SYNTHETIC CAPSTONE | Create controlled comparisons, confounded mutations, and rerun envelopes. No measured result is real. |
| `CASE-02` — Managed demand forecast | CONSTRUCTED SATELLITE | Require exportable run and comparison evidence under managed opacity; not a cloud-provider tutorial. |
| `CASE-03` — Classical credit triage | CONSTRUCTED SATELLITE | Preserve controls and reconstruction limits for simple models; not financial advice or authorization. |
| `CASE-04` — Deep acoustic event classifier | CONSTRUCTED SATELLITE | Stress checkpoint, preprocessor, hardware, randomness, and repeated-run identity; not a deep-learning recipe. |
| `CASE-06` — Google ML Test Score production-readiness method | PUBLIC REPORTED CASE | Transfer test decision jobs and missing-evidence disposition, never universal points or certification. |
| `CASE-07` — Uber Michelangelo feature and deployment evidence pattern | PUBLIC REPORTED CASE | Use its dated experiment-comparison pattern as reported fact only; reduce it to provider-neutral run and comparison fields. |

Frozen constructed-case truth projections preserve zero reported facts, attributed outcomes, and source uses. `CASE-01`: allowed inference — The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Forbidden inference — Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Transfer rule — Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. `CASE-02`: allowed inference — The constructed managed fixture may test exportable identity and evidence under provider opacity. Forbidden inference — Do not infer provider capability or outcome, real accuracy or use, approval, or a cloud tutorial. Transfer rule — Reproduce the same dossier fields without provider names using the selected service's actual evidence. `CASE-03`: allowed inference — The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Forbidden inference — Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Transfer rule — Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. `CASE-04`: allowed inference — The constructed deep fixture may test checkpoint, preprocessor, runtime, uncertainty, and serving identity bindings. Forbidden inference — Do not infer real accuracy, acoustic safety, field performance, production behavior, or approval. Transfer rule — Preserve the same decision/evidence job when the model family or runtime changes. Each existing case-specific limitation and authority owner remains unchanged.

`CASE-06` is a public method, not a universal experiment gate. `CASE-07` remains a first-party production pattern: its reported workflow and experiment-store gaps are facts attributed to Uber, and its scale/adoption outcomes do not transfer.

## Durable, volatile, and conflicting evidence treatment

- Keep incumbent retention, changed-variable ledger, attribution ceiling, required run fields, bounded reconstruction context, repeated-run variation, and limitation recording as durable requirements.
- Keep MLflow APIs and fields contextual and high-volatility; pin a concrete MLflow version before manuscript freeze if any executable example is named.
- Preserve PyTorch 2.13 (`MLE-BSRC-021`) as the exact versioned identity and never substitute the mutable stable URL. Recheck on framework, CUDA, cuDNN, platform, hardware, or deterministic-operation changes.
- Uber's 2017 platform report is historical first-party evidence, not a current tracker specification or independent outcome audit.
- Deterministic controls can improve repeatability but may affect performance and cannot guarantee cross-platform identity. A complete-looking tracker run can still omit decisive state.

## Dated current examples

- `MLE-BSRC-018` is MLflow 3.15.1 versioned Tracking documentation; release 2026-08-03; retrieved 2026-08-23 at `https://mlflow.org/docs/3.15.1/ml/tracking/`. Tracking preserves only recorded metadata and confers no qualification or release authority. Recheck on MLflow release, Tracking field/API/storage change, or publication freeze; retain 3.15.1 for this edition.
- PyTorch 2.13 reproducibility documentation (`MLE-BSRC-021`, published 2026-05-14) is the exact versioned current example; it explicitly does not guarantee exact results across releases or platforms.
- Uber's Michelangelo report (`MLE-BSRC-043`) is dated 2017 and is used only as a first-party experiment-store and comparison-pattern report.

## Authority ceiling

Authority owner: Applied Science owns scientific novelty claims; evaluation retains suite adequacy.

MLE ceiling: The MLE owns workload experiment integrity, not the research agenda or independent gate.

Applied Science owns scientific novelty claims; evaluation retains suite adequacy. The MLE owns workload experiment integrity, run identity, controls, comparison evidence, and explicit attribution limits, not the research agenda, independent gate, or formal release decision. A tracked result can be complete enough for inspection yet remain confounded or unqualified.

## Five-port transfer

- `PORT-MANAGED`: require exported data, code/configuration, environment, incumbent, metric, and limitation records despite hidden internals.
- `PORT-CLASSICAL`: record preprocessing, seeds, library versions, and comparator symmetry even for deterministic-looking algorithms.
- `PORT-DEEP`: bind checkpoints, preprocessors, hardware/accelerator state, randomness controls, and repeated-run envelopes.
- `PORT-EDGE`: include device runtime, quantization/build, field input, and hardware context in the comparison record.
- `PORT-SHARED`: separate tenant experiment integrity from tracker, fleet, and platform authority.

## Misuse prohibitions

- Do not attribute a difference to the candidate when data, preprocessing, measures, thresholds, or other controls changed.
- Do not claim a successful tracker run proves completeness, controls, causality, reproducibility, qualification, or release.
- Do not promise exact cross-version or cross-platform reproduction.
- Do not generalize PyTorch-specific controls to every framework, service, driver, or hardware path.
- Do not transfer Google scoring or Uber scale/adoption outcomes.
- Do not let the MLE claim scientific novelty or independent evaluation authority from experiment ownership.

## Planned evidence artifacts

- `BL-06` controlled comparison plan with incumbent, claimed intervention, changed-variable ledger, fixed controls, data/input identity, measures, thresholds, environment, owners, and attribution status.
- Baseline/candidate harness whose preprocessing mutation invalidates the comparison.
- Run-completeness test that fails if environment, input snapshot, or incumbent identity is absent despite a successful tracker run.
- Rerun envelope recording code/data/dependency/hardware/randomness context, repeated results, tolerance, performance cost, and strongest remaining limitation.

## Exact Phase 07 handoff

- For `MLE-BCLM-019`: Blueprint a baseline/candidate harness with a mutation that changes preprocessing and must invalidate the comparison.
- For `MLE-BCLM-020`: Blueprint a run record completeness test that fails when environment, input snapshot, or incumbent identity was omitted despite a successful tracker run.
- For `MLE-BCLM-021`: Blueprint a rerun envelope that records context, repeated results, tolerance, performance cost, and the strongest remaining reproducibility limitation.
- Phase 07 must preserve exact architecture and case mappings, tool-version/currentness constraints, attribution and authority ceilings, the five-port invariant, and `BL-06` milestone. It must not turn mechanism records into proof.

Evidence-gap disposition: none release-blocking

Rationale: Accepted original research, official engineering guidance, living tracker documentation, pinned framework documentation, and a bounded first-party report cover controlled comparison, tracker limits, and reconstruction boundaries. Every mechanism claim carries a currentness trigger and a non-proof limitation.

Affected claim/source IDs: `MLE-BCLM-019`, `MLE-BCLM-020`, `MLE-BCLM-021`; `MLE-BSRC-007`, `MLE-BSRC-010`, `MLE-BSRC-015`, `MLE-BSRC-018`, `MLE-BSRC-021`, `MLE-BSRC-043`.

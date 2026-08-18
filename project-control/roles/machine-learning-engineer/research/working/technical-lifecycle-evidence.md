# Machine Learning Engineer — Technical Lifecycle Evidence

Access date: 2026-08-18
Allocated records: `MLE-SRC-013`–`MLE-SRC-024`; `MLE-CLM-008`–`MLE-CLM-014`

## Scope and interpretation

This lane asks what makes a learning system technically reviewable from task
definition through retirement. It does not use vendor features to define the
Machine Learning Engineer role. Standards, primary research, official project
documentation, and engineering reference architectures establish durable
decisions; product mechanisms show how some teams implement them. Product,
domain, data, security, safety, privacy, governance, legal, platform, and SRE
authorities keep their own decision rights.

The evidence supports one lifecycle thesis: a model is not qualified because a
training run produced a favorable score. It is qualified only when the task,
data, run, evaluation, package, serving envelope, operating signals, recovery
path, security posture, and final disposition are connected by inspectable
records.

## Source set

| ID | Primary or official source | Organization | Evidence used | Currentness and boundary |
|---|---|---|---|---|
| `MLE-SRC-013` | [Artificial Intelligence Risk Management Framework (AI RMF 1.0)](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10) | NIST | Lifecycle risk framing; MAP, MEASURE, MANAGE, and GOVERN records | Published 2023-01-26. Live on access date, but NIST says a revision is in progress. Voluntary and not an implementation standard. |
| `MLE-SRC-014` | [Rules of Machine Learning: Best Practices for ML Engineering](https://developers.google.com/machine-learning/guides/rules-of-ml) | Google | Objectives, simple baselines, pipeline integrity, time-aware evaluation, train/serve skew | Live official engineering guidance. Google-specific experience; no universal thresholds. |
| `MLE-SRC-015` | [Get started with TensorFlow Data Validation](https://www.tensorflow.org/tfx/data_validation/get_started) | TensorFlow | Feature schemas, environments, anomaly checks, skew and drift comparators | Live official docs. TFDV-specific; inferred schemas and thresholds require review. |
| `MLE-SRC-016` | [MLflow Tracking](https://mlflow.org/docs/latest/tracking) | MLflow Project / LF Projects | Experiment and run records, parameters, code versions, metrics, models, artifacts | Live `latest` documentation, so behavior is version-sensitive and the URL is intentionally unpinned. |
| `MLE-SRC-017` | [Reproducibility](https://docs.pytorch.org/docs/stable/notes/randomness.html) | PyTorch | Randomness controls, deterministic operations, explicit reproducibility limits | Last updated 2025-10-03. Framework and platform bounded; determinism can cost performance. |
| `MLE-SRC-018` | [Probability calibration](https://scikit-learn.org/stable/modules/calibration.html) | scikit-learn | Reliability diagrams, proper scores, calibration and uncertainty interpretation | Stable docs identified as 1.9.0 on access. Classification-focused; stable URL moves with releases. |
| `MLE-SRC-019` | [Model Cards for Model Reporting](https://research.google/pubs/model-cards-for-model-reporting/) | Google Research | Intended use, evaluation procedure, conditions, subgroups, limitations | 2019 primary paper. Durable reporting proposal, not an enforcement system or complete release manifest. |
| `MLE-SRC-020` | [Use AI securely and responsibly](https://docs.cloud.google.com/architecture/framework/security/use-ai-securely-and-responsibly) | Google Cloud Architecture Center | Data and artifact protection, pipeline integrity, asset/run tracking, detection and response | Last reviewed 2025-02-05. Provider guidance aligned to SAIF, not neutral mandatory policy. |
| `MLE-SRC-021` | [Horizontal Pod Autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/) | Kubernetes / CNCF | Metric-driven capacity control, readiness, stabilization, custom metrics | Live documentation for stable `autoscaling/v2`. Infrastructure mechanism, not a model-quality or latency specification. |
| `MLE-SRC-022` | [Deployment guardrails for updating models in production](https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails.html) | AWS | Canary, linear, rolling and all-at-once updates; alarms, bake periods, capacity, rollback | Live official docs. Restricted to supported SageMaker endpoint types and configurations. |
| `MLE-SRC-023` | [Machine learning operations](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/machine-learning-operations-v2) | Microsoft Azure Architecture Center | Development-to-retirement reference flow, role boundaries, gated promotion, monitoring, retraining, rollback | Last updated 2024-07-12. Azure reference architecture, not a universal topology. |
| `MLE-SRC-024` | [Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf) | NIST | Threats to data, models, training, deployment, infrastructure, privacy; mitigation vocabulary | Approved 2024-01-02. Voluntary taxonomy, not exhaustive controls or certification. |

The set contains 12 official or primary sources across nine organizational
projects or bodies. Every exact URL returned HTTP 200 after redirects on the
access date.

## Durable lifecycle decisions and professional outputs

| Lifecycle decision | Machine Learning Engineer responsibility | Professional output or artifact | Evidence that makes the decision reviewable |
|---|---|---|---|
| 1. Should this task use ML? | Translate the user or operational decision into an observable target; retain a simple non-ML or incumbent baseline; surface constraints and failure consequences with the accountable owners. | Task contract and baseline brief | Intended population and context, target and proxy rationale, baseline measurement, acceptance metrics and thresholds, constraints, owners, consequence table, unresolved assumptions, and dated approval. `MLE-CLM-008` |
| 2. What data and features are admissible? | Turn expected inputs and transformations into executable contracts while coordinating semantic validity, provenance, access, privacy, and label meaning with their owners. | Versioned dataset/feature contract and validation report | Dataset/version identifiers, schema and domains, required/missing-value rules, transformation version, train/serve environments, lineage, label specification, anomaly results, skew/drift comparators and thresholds, exceptions, and owner disposition. `MLE-CLM-009` |
| 3. What is the minimum credible candidate? | Build and retain a simple baseline before increasing model or feature complexity; define an experiment that isolates the proposed change. | Baseline implementation and experiment plan | Baseline run ID, frozen splits or split-generation rule, comparison hypothesis, controlled variables, target metrics, compute budget, stop condition, and expected operational effect. `MLE-CLM-008` `MLE-CLM-010` |
| 4. Can the training result be reconstructed? | Capture the complete run context and state reproducibility honestly within a named environment rather than claiming universal determinism. | Immutable experiment/run record and reproducibility statement | Code revision, dependency and framework versions, data IDs, parameters, seeds, hardware/runtime, determinism flags, logs, metrics, artifacts, rerun result, and documented divergence. `MLE-CLM-010` |
| 5. Is the candidate qualified for the intended use? | Compare candidate and retained baseline on representative evaluation data; inspect meaningful segments and failures; quantify uncertainty or calibration where applicable; connect acceptance to consequences. | Qualification report and gate disposition | Evaluation dataset/version and exclusions, leakage checks, baseline comparison, confidence intervals or resampling method where appropriate, calibration/reliability evidence, segment metrics and sample sizes, error analysis, threshold rationale, limitations, owner, and `PASS`, `HOLD`, or `REJECT`. `MLE-CLM-011` |
| 6. What exactly is being released? | Package a reproducible inference unit and bind it to lineage, interface expectations, documented uses, evaluation evidence, approval state, and recovery target. | Versioned model release bundle, registry record, and model card | Artifact hash, dependency/environment lock, inference schema, code/run/data lineage, intended and excluded uses, evaluated conditions, known limitations, approval evidence, compatibility tests, retained baseline, previous-good release, and rollback instructions. `MLE-CLM-012` |
| 7. Can it serve within an explicit envelope? | Test the complete inference path under representative traffic and payloads; establish latency, throughput, saturation, error, readiness, and capacity limits with platform/SRE partners. | Serving-envelope and capacity-test report | Workload model, payload classes, concurrency and arrival pattern, warm/cold behavior, latency percentiles, throughput, error rate, resource saturation, scaling target and limits, dependency failures, cost observation, test environment, and acceptance result. `MLE-CLM-013` |
| 8. Can a new release fail safely? | Stage traffic, monitor a defined bake period, keep the last-known-good target deployable, and verify rollback rather than recording only a rollback intention. | Deployment plan and rollback rehearsal record | Candidate and previous release IDs, traffic steps, bake duration, alarms and thresholds, abort rules, endpoint state, rollback trigger, observed recovery time and data consistency, decision owner, and deployment event log. `MLE-CLM-013` |
| 9. Is the live system still within qualification? | Monitor data, predictions, delayed ground-truth quality, segments, model age, latency, errors, capacity, and security signals against named references. Distinguish a proxy alert from confirmed degradation. | Monitoring contract, dashboard/alerts, and incident evidence packet | Signal definition, baseline/reference window, threshold and statistical test, freshness and label delay, alert routing, false-positive review, affected model/data versions, trace/log links, segment impact, and owner response. `MLE-CLM-009` `MLE-CLM-013` `MLE-CLM-014` |
| 10. What change follows an alert? | Diagnose whether the cause is data, transformation, model, dependency, serving, abuse, or business change; choose observe, repair, rollback, retrain, requalify, or escalate. Never let retraining bypass qualification. | Change decision record and, when justified, retraining dossier | Triggering evidence, root-cause hypothesis and tests, new data inclusion/exclusion rationale, labeling review, run lineage, repeated qualification results, security/privacy review where implicated, approval, release/rollback link, and post-change observation. `MLE-CLM-010` `MLE-CLM-011` `MLE-CLM-013` `MLE-CLM-014` |
| 11. How is the learning system secured? | Inventory ML assets and attack surfaces; implement controls for access, provenance, integrity, dependencies, training data, model artifacts, endpoints, monitoring, and incident response with security and privacy authorities. | ML threat model, control evidence, software/model bill of materials, and incident runbook | Data/model/code inventory, trust boundaries, attacker capabilities, poisoning/evasion/privacy/supply-chain cases, access decisions, signatures or hashes, vulnerability and tamper checks, audit logs, detection coverage, red-team results where authorized, escalation contacts, and tested recovery. `MLE-CLM-014` |
| 12. Should the model remain active? | Periodically re-evaluate value, use, risk, cost, staleness, supportability, and obligations; retire cleanly when the evidence no longer justifies operation. | Retirement decision and decommission record | Usage and quality trend, superseding release or non-ML fallback, stakeholder approval, traffic removal, endpoint and credential shutdown, registry status, retained records and retention basis, downstream consumer notice, monitoring closure, recovery window, and confirmation that the model is no longer serving. `MLE-CLM-014` |

## Claim synthesis

### Task and baseline contract — `MLE-CLM-008`

NIST's MAP and MEASURE orientation, Google's insistence on metrics and simple
heuristics before complexity, and Microsoft's gated lifecycle all converge on
one durable practice: define the decision, baseline, population, consequence,
and owner before selecting model complexity. The professional output is not a
vague project brief; it is a task contract whose acceptance conditions can be
tested. The product or domain owner still owns the desired outcome, while the
Machine Learning Engineer makes the technical measurement and qualification
path executable.

### Data and feature contracts — `MLE-CLM-009`

TFDV makes feature expectations concrete through schemas, environments, and
comparators. Google documents the damage caused by training-serving skew, and
Microsoft's reference lifecycle connects data checks to staging and operating
signals. Together they support a versioned contract and a validation report,
not an assumption that a successful training read implies valid production
inputs. Statistical conformance cannot establish consent, lawful use, semantic
truth, representativeness, or label validity; those require other authorities.

### Training and reproducibility — `MLE-CLM-010`

MLflow demonstrates the run entities that make experiments comparable, while
PyTorch explicitly limits the meaning of reproducibility across releases and
platforms. The defensible artifact is therefore an immutable run record plus a
bounded reproducibility statement. A seed without data, code, dependency,
hardware, and determinism context is not a reproducibility claim.

### Evaluation and uncertainty — `MLE-CLM-011`

The qualification record binds the intended context to candidate-versus-
baseline evidence. Model Cards require evaluated conditions and relevant
subgroups; scikit-learn's calibration guidance shows why probability quality
needs separate inspection and why a composite score can obscure calibration;
NIST requires risk measurement in context. Uncertainty treatment must match the
task: confidence intervals, repeated splits, calibration, abstention evidence,
or other justified methods may apply, but no single technique is universal.

### Packaging and release evidence — `MLE-CLM-012`

Model Cards bind a released model to intended use and evaluated limitations;
Microsoft's reference architecture connects registered models and dependencies
to gated promotion, containerized environments, and rollback-capable CI/CD.
Their durable intersection is a release bundle whose executable artifact and
evidence share a versioned identity. A registry entry alone does not prove
compatibility, integrity, approval, or readiness.

### Serving, monitoring, revision, and rollback — `MLE-CLM-013`

Kubernetes demonstrates metric-driven capacity control, AWS demonstrates
staged traffic, bake gates, and rollback, and Microsoft connects endpoint,
model, data, and infrastructure signals to investigation or retraining. Google
and TFDV add train/serve consistency and drift comparators. These are mechanisms,
not universal policy. The Machine Learning Engineer must first write the
serving envelope, monitoring contract, and decision thresholds. Drift is a
diagnostic signal rather than proof of harm, and automatic retraining must not
bypass data review and requalification.

### Security, records, and retirement — `MLE-CLM-014`

NIST's AML taxonomy makes data, model, pipeline, privacy, and infrastructure
attack surfaces explicit. Google Cloud's SAIF-aligned guidance adds protected
artifacts, tamper-resistant pipelines, asset/run tracking, and detection and
response. Model Cards, AI RMF, and Microsoft's reference flow preserve context,
limitations, ownership, rollback, and retirement evidence. The Machine Learning
Engineer implements and supplies evidence for controls inside the learning
system; security, privacy, safety, governance, legal, product, and domain owners
retain their formal authority.

## Currentness and evidence limits

- AI RMF 1.0 remains an official NIST publication, but NIST states that it is
  being updated. Any later book chapter must re-check the revision state and
  cite the edition actually used.
- `latest` and `stable` documentation URLs for MLflow, PyTorch, scikit-learn,
  Kubernetes, AWS, and TensorFlow can change without preserving the exact
  inspected text. A publication research pack should pin product/library
  versions or archived revisions when exact behavior matters.
- Google, AWS, and Microsoft mechanisms illustrate current engineering
  practice; they do not establish universal role ownership or mandate a stack.
- Model Cards (2019) and Microsoft's MLOps v2 page (last updated 2024) are older
  but still live. Their durable lifecycle concepts should be separated from
  current product details.
- Calibration evidence is task-dependent; monitoring without timely labels
  often uses proxies; drift thresholds require domain context; deterministic
  training is bounded and can trade off with performance.
- None of these sources independently proves legal compliance, fair impact,
  safety, security sufficiency, or domain fitness. The technical dossier makes
  those decisions inspectable to the authorities who own them.

# MLE-CH-17 — Observe Without Inventing Ground Truth

- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Architecture: version `1.0.0`; Markdown SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; JSON SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Research verification date: `2026-08-18`
- Decision job: Bind observation signals, delayed labels, proxies, drift, segments, owners, and alert-to-decision routes without automatic truth claims.

## Canonical book claims

1. `MLE-BCLM-049` (`technical-doctrine`, high confidence, durable): Training-serving skew and input drift are distributional observations that can justify investigation, but they do not by themselves establish outcome degradation, causal failure, or permission to retrain or promote.
2. `MLE-BCLM-050` (`technical-doctrine`, high confidence, durable): When outcomes arrive after predictions, observations inside the label-delay window are censored rather than confirmed negatives; monitoring and learning records must preserve event time, observation time, maturity window, and revision history instead of silently overwriting provisional truth.
3. `MLE-BCLM-051` (`technical-method`, high confidence, durable): An observation contract must separate signal, proxy, unavailable truth, segment, threshold, uncertainty, owner, and permitted action so alerts route to investigation or formal decision without automatically retraining, promoting, or declaring real-world harm.

## Source-to-claim map

| Claim | Canonical sources | Evidence role | Ceiling |
|---|---|---|---|
| `MLE-BCLM-049` | `MLE-BSRC-024` | Official living TFDV mechanism for schema, drift, and skew comparisons | Detection does not establish semantic validity, outcome degradation, causation, or permission to retrain/promote. |
| `MLE-BCLM-050` | `MLE-BSRC-001` | Original research establishing inaccurate temporary labels under delayed outcomes | Its conversion estimator and maturity window do not transfer automatically to other workloads. |
| `MLE-BCLM-051` | `MLE-BSRC-005`, `MLE-BSRC-007`, `MLE-BSRC-024`, `MLE-BSRC-027`, `MLE-BSRC-039` | System-debt and production-test doctrine, current drift mechanisms, lifecycle/authority outcomes, and bounded incident facts | The synthesized contract routes evidence; it neither supplies ground truth nor usurps evaluation, domain, product, or incident authority. |

## Architecture trace

- Architecture claims: `MLE-CLM-003`, `MLE-CLM-004`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-017`, `MLE-CLM-018`, `MLE-CLM-019`
- Boundaries: `BND-05`, `BND-09`, `BND-10`, `BND-11`, `BND-12`
- Scenarios: `SCN-04`, `SCN-05`
- Production domain: `PD-10`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-05`, `CASE-12`
- Milestone: `BL-16` — Observation and decision-routing contract
- Dossier transition: `OPERABLE → OBSERVED`
- Source-research needs: `ML monitoring`; `Drift`; `Delayed labels`; `Proxy limitations`
- Exact Phase 06 handoff: `Research observation under delayed ground truth and drift limits.`

## Case truth and use

- Architecture carriers: `CASE-01` (FICTIONAL SYNTHETIC CAPSTONE), `CASE-02` (CONSTRUCTED SATELLITE, managed), `CASE-03` (CONSTRUCTED SATELLITE, classical), and `CASE-05` (CONSTRUCTED SATELLITE, shared). Their signals, delays, outcomes, and decisions are synthetic.
- Claim-linked public case: `CASE-12` (PUBLIC REPORTED CASE, Knight Capital, `PORT-SHARED`). `MLE-BSRC-039` supplies regulator-reported signal/control facts and limitations; `MLE-BSRC-027` is transfer context.
- Allowed use: show that emitted messages are not effective alerts unless threshold, owner, action, and authority are explicit; route observations without making an ML or causal claim about the incident.
- Prohibited use: label Knight Capital as ML, infer a universal alert design, claim that drift caused outcome harm, or automate retraining/promotion from a proxy.

## Durable doctrine, volatility, and currentness

- Durable doctrine: Signals, truth delay, proxy limits, drift, owners, and actions are explicit contracts.
- Volatile examples: observability vendors, drift formulas and thresholds, TFDV APIs, alert products, and estimator choices.
- Dated current examples: the AAAI `2021` delayed-feedback paper is final and was verified `2026-08-18`; the living TFDV tutorial was accessed `2026-08-18`; the living AI RMF 1.0 rendering was accessed `2026-08-18` and explicitly reports an update in progress; SEC release `2013-222` was browser-verified `2026-08-18`.
- Recheck triggers: check TFDV schemas/comparators/APIs and AI RMF Govern/Map/Measure/Manage outcomes at every freeze; recheck the SEC page through a browser; reassess every workload's maturity window and proxy limitations.
- Conflict resolution: drift/skew tools legitimately expose distributional differences, while the delayed-label evidence shows why current records may not yet carry outcome truth. The observation contract retains both signal value and truth limits.

## Authority ceiling

- Exact architecture MLE ceiling: The MLE diagnoses workload evidence but cannot invent ground truth or automate formal disposition.
- Evaluation and domain owners define sufficient outcome evidence; SRE/platform own shared telemetry and incident mechanisms; product and formal authorities retain disposition.
- The MLE diagnoses workload evidence and routes an investigation but cannot invent ground truth, declare harm, or automate formal retraining/promotion decisions.

## Five-port transfer

| Port | Observation identity | Required truth limitation |
|---|---|---|
| `PORT-MANAGED` | Provider signal, export timestamp, named baseline/window, segment, owner | Provider metric/proxy cannot substitute for unavailable outcome truth. |
| `PORT-CLASSICAL` | Feature/score distributions, event and observation time, segment, revision | Simple models do not remove label delay or causal limits. |
| `PORT-DEEP` | Input/embedding/output signals, model/runtime identity, maturity rail | Opaque representations require named proxy and interpretation limits. |
| `PORT-EDGE` | Device/local signal, connectivity state, delayed upload/outcome, revision | Offline devices create explicit censoring and recheck states. |
| `PORT-SHARED` | Tenant-attributed signal, candidate/control identity, owner and action | Fleet aggregates must not hide tenant failure or grant workload disposition. |

## Misuse prohibitions

- Do not call censored observations negative labels or silently overwrite provisional records.
- Do not equate drift, skew, anomaly, or a proxy threshold with causal failure, real-world harm, retraining permission, or release authority.
- Do not encode one metric, vendor, estimator, or deep-learning representation as the five-port invariant.

## Planned evidence artifacts

- Observation contract with signal, proxy, truth availability, event time, observation time, maturity window, revision, segment, threshold, uncertainty, owner, and permitted action.
- Delayed-label rail containing provisional, mature, revised, and unavailable states.
- Fixed replay stream in which proxy drift fires before labels mature and automated retrain/promotion is rejected.
- Mutations for silent overwrite, absent baseline/window, missing segment, ownerless alert, proxy-as-truth, and premature negative labeling.

## Exact Phase 07 handoff

- `MLE-BCLM-049`: `Require every drift alert to record baseline, comparison window, segment, threshold, proxy limitation, owner, and investigation route.`
- `MLE-BCLM-050`: `Blueprint a delayed-label rail with provisional, mature, revised, and unavailable states plus a replay that forbids premature negative labels.`
- `MLE-BCLM-051`: `Build one replay stream where proxy drift fires before labels mature and verify that automated retrain/promotion remains prohibited.`

## Evidence-gap disposition

Evidence-gap disposition: none release-blocking

Rationale: Original research, official project documentation, system-level research, regulator facts, and a living public framework support the signal/truth boundary. Workload-specific ground truth, thresholds, and authority remain explicitly local.

Affected claim/source IDs: `MLE-BCLM-049`, `MLE-BCLM-050`, `MLE-BCLM-051`; `MLE-BSRC-001`, `MLE-BSRC-005`, `MLE-BSRC-007`, `MLE-BSRC-024`, `MLE-BSRC-027`, `MLE-BSRC-039`.

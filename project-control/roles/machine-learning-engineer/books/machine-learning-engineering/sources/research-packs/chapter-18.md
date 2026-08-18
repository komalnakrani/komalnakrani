# MLE-CH-18 — Contain, Roll Back, Repair, and Requalify

- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Architecture: version `1.0.0`; Markdown SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; JSON SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Research verification date: `2026-08-18`
- Decision job: Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.

## Canonical book claims

1. `MLE-BCLM-052` (`technical-doctrine`, high confidence, durable): During a model-related incident, incident command and fleet action remain with the named operations authority while the MLE owns workload-specific diagnosis, evidence change, and repair; evaluation and formal risk owners retain their gates.
2. `MLE-BCLM-053` (`technical-method`, high confidence, durable): Rollback contains exposure by returning deployment to a named previous-good state; it does not establish incident closure or qualification of a repair. A repaired or retrained workload receives a new candidate identity with a changed-evidence record and returns through the applicable technical and external gates before release.
3. `MLE-BCLM-054` (`technical-method`, high confidence, durable): A post-incident record should bind observed impact, detection, containment, recovery, causal evidence, contributing conditions, corrective actions, owners, and follow-up verification; service restoration without owned learning leaves recurrence risk untested.

## Source-to-claim map

| Claim | Canonical sources | Evidence role | Ceiling |
|---|---|---|---|
| `MLE-BCLM-052` | `MLE-BSRC-027`, `MLE-BSRC-031`, `MLE-BSRC-042` | Lifecycle role/risk outcomes, incident/control vocabulary, and first-party incident facts | Local organizations supply roles; the MLE does not acquire command or risk-acceptance authority. |
| `MLE-BCLM-053` | `MLE-BSRC-007`, `MLE-BSRC-016`, `MLE-BSRC-027`, `MLE-BSRC-040` | Production-readiness tests, current deployment rollback mechanics, lifecycle gates, and canary rollback context | Platform rollback may restore only a deployment template; repair still needs new identity and applicable requalification. |
| `MLE-BCLM-054` | `MLE-BSRC-030`, `MLE-BSRC-039`, `MLE-BSRC-041` | Secure-development response, regulator-reported incident/control facts, and first-party postmortem practice | A postmortem is a routed learning record, not proof of action completion or repaired-model qualification. |

## Architecture trace

- Architecture claims: `MLE-CLM-003`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-017`, `MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-022`
- Boundaries: `BND-05`, `BND-09`, `BND-10`, `BND-11`, `BND-12`, `BND-14`
- Scenarios: `SCN-01`, `SCN-04`, `SCN-07`, `SCN-09`
- Production domain: `PD-11`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-04`, `CASE-05`, `CASE-11`, `CASE-12`
- Milestone: `BL-17` — Incident and requalification packet
- Dossier transition: `OBSERVED → REQUALIFIED|ROLLED-BACK`
- Source-research needs: `ML incidents`; `Rollback`; `Post-incident learning`; `Requalification`
- Exact Phase 06 handoff: `Research model-specific incident, rollback, repair, and requalification evidence.`

## Case truth and use

- Architecture carriers: `CASE-01` (FICTIONAL SYNTHETIC CAPSTONE), `CASE-02` (CONSTRUCTED SATELLITE, managed), `CASE-04` (CONSTRUCTED SATELLITE, deep), and `CASE-05` (CONSTRUCTED SATELLITE, shared). All incident traces and outcomes are synthetic.
- Public cases: `CASE-11` (PyTorch nightly dependency-chain compromise, first-party report) and `CASE-12` (Knight Capital deployment/control failure, regulator/issuer report). They are `PUBLIC REPORTED CASE` records, not interchangeable outcome studies.
- Allowed use: `CASE-11` tests affected-scope, containment, consumer cleanup, credential/access response, and residual uncertainty; `CASE-12` tests deployment identity, alert ownership, hard limits, containment, changed evidence, control review, and follow-up.
- Prohibited use: invent population-wide PyTorch cleanup/loss; describe Knight as ML; transfer trading thresholds/regulatory conclusions; claim rollback, software removal, or restored service proves incident closure or requalification.

## Durable doctrine, volatility, and currentness

- Durable doctrine: Containment, rollback, repair, and requalification preserve identity and authority under change.
- Volatile examples: incident tools, paging products, deployment mechanisms, rollback commands, and organization role names.
- Dated current examples: Kubernetes deployment guidance was last modified `2026-03-15`; AI RMF 1.0's living rendering, NIST SSDF 1.1, and SP 800-53 Rev. 5 release 5.2.0 were verified `2026-08-18`; PyTorch's advisory was updated `2024-11-14`; the SEC release was browser-verified `2026-08-18`; Google SRE canary/postmortem chapters are `2018` final guidance.
- Recheck triggers: at every freeze recheck AI RMF revisions, Kubernetes rollback semantics, NIST releases, public-incident amendments, and any implementation command.
- Conflict resolution: platform rollback documentation supports restoration mechanics, while the lifecycle, testing, and incident sources require broader evidence. The pack therefore separates containment, previous-good restoration, repair identity, and requalification.

## Authority ceiling

- Exact architecture MLE ceiling: The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.
- SRE/operations own incident command and fleet action; evaluation and formal authorities retain qualification and risk gates; security owns exceptions; public reporters own their facts.
- The MLE owns workload diagnosis, evidence change, candidate repair, and requalification packet assembly, not fleet command, incident closure, or risk acceptance.

## Five-port transfer

| Port | Containment and identity | Requalification boundary |
|---|---|---|
| `PORT-MANAGED` | Disable/route provider endpoint, capture provider version and previous-good export | Provider action is evidence, not independent qualification. |
| `PORT-CLASSICAL` | Restore named code/model/preprocessor package and isolate affected consumers | Repair receives a new candidate identity and full affected-evidence diff. |
| `PORT-DEEP` | Contain checkpoint/runtime/dependency path and preserve affected scope | Framework/package remediation cannot prove consumer cleanup or model qualification. |
| `PORT-EDGE` | Isolate devices, account for offline fleet, preserve firmware/model identities | Disconnected devices require delayed containment evidence and scheduled recheck. |
| `PORT-SHARED` | Separate tenant workload action from fleet command and shared rollback | Platform/SRE retain fleet authority; tenant repair re-enters workload gates. |

## Misuse prohibitions

- Do not reuse the released identity for a retrained or repaired candidate.
- Do not treat rollback, restoration, package removal, or a postmortem as incident closure, consumer cleanup, or model qualification.
- Do not make the MLE incident commander, fleet authority, evaluator, or risk acceptor through the workbook design.

## Planned evidence artifacts

- Incident state table with command owner, MLE diagnosis owner, formal decision owner, state, action, evidence identity, and timestamp.
- Same-identity repair mutation that fails, followed by a new candidate, changed-evidence diff, previous-good link, and requalification packet.
- Postmortem-to-requalification chain with observed impact, causal evidence, contributing conditions, corrective actions, owner, due state, verification artifact, and affected evidence link.
- Five-port containment replay including a disconnected edge consumer and a shared-platform authority challenge.

## Exact Phase 07 handoff

- `MLE-BCLM-052`: `Blueprint an incident state table with command owner, MLE diagnosis owner, formal decision owner, action, evidence, and timestamp.`
- `MLE-BCLM-053`: `Require a same-identity repair mutation to fail, then construct a new candidate, changed-evidence diff, and requalification packet.`
- `MLE-BCLM-054`: `Blueprint a postmortem-to-requalification chain in which each corrective action has an owner, due state, verification artifact, and affected evidence link.`

## Evidence-gap disposition

Evidence-gap disposition: none release-blocking

Rationale: Official lifecycle/control guidance, project mechanics, first-party engineering practice, original production-readiness research, and two bounded incidents support the separation of command, containment, repair identity, learning, and requalification.

Affected claim/source IDs: `MLE-BCLM-052`, `MLE-BCLM-053`, `MLE-BCLM-054`; `MLE-BSRC-007`, `MLE-BSRC-016`, `MLE-BSRC-027`, `MLE-BSRC-030`, `MLE-BSRC-031`, `MLE-BSRC-039`, `MLE-BSRC-040`, `MLE-BSRC-041`, `MLE-BSRC-042`.

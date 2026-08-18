# MLE-CH-19 — Trace Controls, Exceptions, and Formal Decisions

- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Architecture: version `1.0.0`; Markdown SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; JSON SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Research verification date: `2026-08-18`
- Decision job: Integrate workload-specific control tests, exceptions, residual limits, and formal decisions accumulated since the task contract.

## Canonical book claims

1. `MLE-BCLM-055` (`technical-doctrine`, high confidence, durable): Workload controls, tests, owners, evidence, and formal decisions must be carried through dossier deltas from task contract to retirement; a late control inventory cannot reveal whether controls were effective under plausible malfunction or whether earlier evidence became invalid.
2. `MLE-BCLM-056` (`technical-method`, medium confidence, contextual): Every control exception should state the exact control and workload scope, rationale, compensating evidence, residual limit, approving external authority, start and expiry conditions, and revalidation trigger; an unsigned or ownerless exception is not valid evidence.
3. `MLE-BCLM-057` (`technical-doctrine`, high confidence, durable): The MLE may implement and test workload controls and assemble their evidence, but cannot self-approve security exceptions, privacy or legal determinations, safety or domain acceptance, fleet policy, or formal release; the dossier must name the retained authority for each decision.

## Source-to-claim map

| Claim | Canonical sources | Evidence role | Ceiling |
|---|---|---|---|
| `MLE-BCLM-055` | `MLE-BSRC-027`, `MLE-BSRC-030`, `MLE-BSRC-031`, `MLE-BSRC-036`, `MLE-BSRC-039` | Lifecycle outcomes, secure-development and supply-chain practices, versioned controls, and regulator-reported control failure | Catalog/framework mappings are not implementation, operating-effectiveness, or approval evidence. |
| `MLE-BCLM-056` | `MLE-BSRC-027`, `MLE-BSRC-031` | Official lifecycle and control context for a synthesized minimum exception record | The exact fields are a workload design; local formal owners define binding approval and cadence. |
| `MLE-BCLM-057` | `MLE-BSRC-027`, `MLE-BSRC-031` | Explicit role, responsibility, control, authorization, and risk-response context | Organization structures vary; sources do not appoint the MLE or replace formal authority. |

## Architecture trace

- Architecture claims: `MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-020`
- Boundaries: `BND-05`, `BND-08`, `BND-13`, `BND-14`, `BND-15`, `BND-16`, `BND-17`
- Scenarios: `SCN-06`, `SCN-08`, `SCN-10`
- Production domain: `PD-11`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Cases: `CASE-01`, `CASE-03`, `CASE-05`, `CASE-11`, `CASE-12`
- Milestone: `BL-18` — Control, exception, and formal-decision trace
- Dossier transition: `REQUALIFIED|ROLLED-BACK → CONTROLLED`
- Source-research needs: `ML security`; `Lifecycle controls`; `Exception governance`; `Formal approval boundaries`
- Exact Phase 06 handoff: `Research continuous control evidence and formal-decision traceability.`

## Case truth and use

- Architecture carriers: `CASE-01` (FICTIONAL SYNTHETIC CAPSTONE), `CASE-03` (CONSTRUCTED SATELLITE, classical), and `CASE-05` (CONSTRUCTED SATELLITE, shared). Synthetic records may test missing/expired/unsigned exceptions but cannot claim regulatory or organizational approval.
- Public cases: `CASE-11` (`PUBLIC REPORTED CASE`) supplies a bounded supply-chain incident for provenance/control trace; `CASE-12` (`PUBLIC REPORTED CASE`) supplies bounded regulator/issuer facts on deployment, malfunction-oriented control review, alerts, and formal remedy.
- Allowed use: trace control identity, test result, owner, exception, residual limit, formal authority, supersession, and follow-up across dossier deltas.
- Prohibited use: claim SLSA/SSDF controls were present in `CASE-11`; call `CASE-12` ML; turn the SEC action into a universal ML control catalog; infer approval from a mapped control name.

## Durable doctrine, volatility, and currentness

- Durable doctrine: Control evidence and formal authority are threaded through the lifecycle, not bolted on at release.
- Volatile examples: control-catalog releases, policy names, signature systems, review cadences, committee titles, and local approval workflows.
- Dated current examples: NIST AI RMF 1.0's living rendering, SSDF 1.1, SP 800-53 Rev. 5 release 5.2.0, and SLSA 1.2 were verified `2026-08-18`; the SEC `2013-222` page was browser-verified `2026-08-18` after command-line HTTP `403`.
- Recheck triggers: recheck AI RMF immediately on revision, SP 800-53 at each release/freeze, SSDF and SLSA for successors, and the SEC page via browser. Local exception fields must be reconciled with the actual authority process before use.
- Conflict resolution: a stable control vocabulary enables traceability, but neither a catalog name nor framework outcome proves local tailoring, effective operation, or approval. The evidence record requires all three to remain separate.

## Authority ceiling

- Exact architecture MLE ceiling: The MLE implements/tests workload controls and routes exceptions but cannot self-approve them.
- Security, safety, privacy, governance, legal, product, domain, evaluation, platform, and incident owners retain their formal decisions.
- The MLE implements/tests workload controls, assembles evidence, identifies an exception need, and routes it; the MLE cannot self-approve exceptions, acceptance, fleet policy, or release.

## Five-port transfer

| Port | Control-evidence invariant | Local mechanism boundary |
|---|---|---|
| `PORT-MANAGED` | Control/exception links include provider evidence, workload scope, owner, expiry, and external approval | Provider certifications and console state are inputs, not workload proof. |
| `PORT-CLASSICAL` | Data/model/code/access controls retain tests, owners, residual limits, and decision history | Model simplicity does not waive formal domain/privacy/legal authority. |
| `PORT-DEEP` | Checkpoint/runtime/dependency controls preserve provenance, tests, exceptions, and supersession | Framework controls and SLSA fields do not prove model or domain acceptance. |
| `PORT-EDGE` | Device, signing, access, update, offline, and recovery controls include bounded fleet evidence | Disconnected devices and physical paths require local owner/recheck fields. |
| `PORT-SHARED` | Tenant workload evidence is separated from platform/fleet controls and shared authority | The MLE cannot convert workload evidence into platform policy. |

## Misuse prohibitions

- Do not treat a late checklist, control ID, framework mapping, signature, or exception ticket as proof of effective operation or approval.
- Do not accept unsigned, ownerless, expired, scope-mismatched, or MLE-self-approved exceptions.
- Do not collapse security, safety, privacy, legal, product, domain, evaluation, fleet, and release authorities into one generic approver.

## Planned evidence artifacts

- Lifecycle control trace linking control, test, result, owner, evidence identity, exception, residual limit, formal decision, supersession, and affected dossier deltas.
- Exception schema with exact scope, rationale, compensating evidence, approving external authority, start/expiry, and revalidation trigger.
- Failure mutations for missing provenance, missing owner/result, expired exception, unsigned exception, scope mismatch, and MLE-signed formal decision.
- Authority matrix covering each retained specialist decision across the five ports.

## Exact Phase 07 handoff

- `MLE-BCLM-055`: `Blueprint a lifecycle control trace that fails missing provenance, owner, test result, supersession, or formal-decision links.`
- `MLE-BCLM-056`: `Blueprint one expired, one unsigned, and one scope-mismatched exception mutation and require all three to fail.`
- `MLE-BCLM-057`: `Require an authority matrix and a hostile challenge where an MLE-signed formal decision fails validation.`

## Evidence-gap disposition

Evidence-gap disposition: none release-blocking

Rationale: Versioned standards, a living public framework, supply-chain specification, secure-development guidance, and bounded regulator facts support continuous control traceability and non-self-approval. Local approval procedure remains intentionally external.

Affected claim/source IDs: `MLE-BCLM-055`, `MLE-BCLM-056`, `MLE-BCLM-057`; `MLE-BSRC-027`, `MLE-BSRC-030`, `MLE-BSRC-031`, `MLE-BSRC-036`, `MLE-BSRC-039`.

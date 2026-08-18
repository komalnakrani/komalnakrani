# MLE-CH-20 — Retire the Workload and Prove Non-Serving State

- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Architecture: version `1.0.0`; Markdown SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; JSON SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Research verification date: `2026-08-18`
- Decision job: Execute retirement across consumers, endpoints, credentials, monitoring, registry, retention, recovery, and archive, then prove no serving path remains.

## Canonical book claims

1. `MLE-BCLM-058` (`technical-doctrine`, high confidence, durable): Retirement’s technical non-serving claim is bounded to an inventoried set of workload paths—endpoints, routes, known consumers, credentials, package or registry references, monitors, and recovery paths—and requires recorded disablement or removal evidence for each; deleting one deployment or applying a RETIRED label proves only that action.
2. `MLE-BCLM-059` (`technical-doctrine`, high confidence, durable): Service deactivation, artifact retention, media sanitization, and recovery preservation are separate decisions: retirement must preserve required evidence while the named product, domain, privacy, legal, security, or records authority determines what may be retained, sanitized, or destroyed.
3. `MLE-BCLM-060` (`technical-method`, medium confidence, contextual): A terminal retirement audit enumerates known and fallback workload paths, records the disable, revoke, or remove action for each, runs bounded negative probes where a path is testable, preserves the immutable evidence and authority record, and schedules rechecks for named delayed or disconnected consumers; its conclusion is limited to the inventory and observation time.

## Source-to-claim map

| Claim | Canonical sources | Evidence role | Ceiling |
|---|---|---|---|
| `MLE-BCLM-058` | `MLE-BSRC-016`, `MLE-BSRC-026`, `MLE-BSRC-027`, `MLE-BSRC-031` | Deployment removal mechanics, issuer-reported removal, lifecycle deactivation outcomes, and control vocabulary | A deployment deletion or issuer statement does not prove all endpoints, consumers, credentials, aliases, monitors, or recovery copies are non-serving. |
| `MLE-BCLM-059` | `MLE-BSRC-027`, `MLE-BSRC-029` | Lifecycle deactivation/recovery context and current media-sanitization guidance | The book cannot decide retention law, records schedule, or medium-specific sanitization for a real organization. |
| `MLE-BCLM-060` | `MLE-BSRC-026`, `MLE-BSRC-027`, `MLE-BSRC-029`, `MLE-BSRC-031`, `MLE-BSRC-042` | Bounded removal/containment facts plus lifecycle, sanitization, control, and residual-path context | Negative probes establish only enumerated paths at the observation time; no unknowable global negative is claimed. |

## Architecture trace

- Architecture claims: `MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-020`, `MLE-CLM-022`
- Boundaries: `BND-08`, `BND-12`, `BND-14`, `BND-15`, `BND-16`, `BND-17`
- Scenarios: `SCN-08`, `SCN-10`
- Production domain: `PD-12`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-04`, `CASE-05`, `CASE-11`, `CASE-12`
- Milestone: `BL-19` — Retirement and non-serving proof
- Dossier transition: `CONTROLLED → RETIRED`
- Source-research needs: `Model decommissioning`; `Retention`; `Credential revocation`; `Endpoint retirement`
- Exact Phase 06 handoff: `Research evidence-preserving retirement and non-serving verification.`

## Case truth and use

- Architecture carriers: `CASE-01` (FICTIONAL SYNTHETIC CAPSTONE) plus `CASE-02`, `CASE-03`, `CASE-04`, and `CASE-05` (each `CONSTRUCTED SATELLITE`). They provide synthetic residual-path and retirement mutations across all five ports, not real deletion outcomes.
- Public cases: `CASE-11` (`PUBLIC REPORTED CASE`) reports PyTorch project-side package/dependency remediation but no population-wide consumer cleanup; `CASE-12` (`PUBLIC REPORTED CASE`) reports issuer software removal but no complete terminal-path audit. The official SEC search result exposed `MLE-BSRC-026`'s exact issuer removal and approximate pre-tax loss passage; the accession and passage require recheck at every later freeze because full-document extraction is size-limited.
- Allowed use: contrast a reported removal/containment action with the stronger inventory, negative-probe, authority, retention, and recheck evidence required for bounded non-serving proof.
- Prohibited use: claim every PyTorch consumer was clean, claim Knight published complete retirement evidence, describe Knight as ML, or infer deletion of a shared platform from workload retirement.

## Durable doctrine, volatility, and currentness

- Durable doctrine: Retirement requires consumer, endpoint, credential, monitoring, registry, retention, and recovery proof.
- Volatile examples: deployment APIs, registry/archive products, credential systems, device-management tools, and media-specific sanitization methods.
- Dated current examples: NIST SP 800-88 Rev. 2 is final dated `2025-09-26` and was verified `2026-08-18`; Kubernetes guidance was last modified `2026-03-15`; AI RMF 1.0's living rendering and SP 800-53 Rev. 5 release 5.2.0 were verified `2026-08-18`; the PyTorch advisory was updated `2024-11-14`.
- Recheck triggers: recheck SP 800-88 and its living FAQ, AI RMF revisions, SP 800-53 releases, Kubernetes deletion/rollback semantics, public-case amendments, and every product-specific revoke/delete/probe command at each freeze. Manually re-open `MLE-BSRC-026` before publication.
- Conflict resolution: media sanitization can make target data access infeasible for a defined effort, while service deactivation concerns live paths and recovery. The pack records these as distinct authority-bearing decisions.

## Authority ceiling

- Exact architecture MLE ceiling: The MLE verifies workload non-serving evidence but cannot set legal retention or shared-system policy.
- Product/domain/formal authorities approve retirement; privacy/legal/records/security authorities determine retention, sanitization, and destruction; platform/security owners execute shared shutdown controls.
- The MLE inventories and verifies workload non-serving evidence but cannot set legal retention, destroy records without authorization, or retire a shared platform.

## Five-port transfer

| Port | Enumerated retirement paths | Required bounded proof |
|---|---|---|
| `PORT-MANAGED` | Provider endpoints, aliases, exports, credentials, scheduled jobs, monitors, recovery references | Provider deletion receipts plus consumer/credential checks; not provider-platform retirement. |
| `PORT-CLASSICAL` | Batch jobs, service routes, files/packages, consumers, credentials, monitors, archives | Disable/remove actions and negative probes for named paths. |
| `PORT-DEEP` | Model server, checkpoint/package registries, accelerator jobs, caches, dependencies, consumers | Registry deletion alone is insufficient; copied artifacts and serving aliases remain inventoried. |
| `PORT-EDGE` | Devices, offline packages, firmware/model slots, credentials, update routes, fallback images | Delayed/disconnected consumers require scheduled rechecks and bounded conclusion time. |
| `PORT-SHARED` | Tenant routes, shared aliases, caches, credentials, monitors, fallbacks, recovery state | Workload paths retire without asserting shutdown of shared fleet/platform. |

## Misuse prohibitions

- Do not use a `RETIRED` label, deleted deployment, package removal, or sanitization record as complete non-serving proof.
- Do not claim a global negative beyond the enumerated inventory and observation time.
- Do not merge deactivation, retention, sanitization, destruction, archive, and recovery into one MLE-owned decision.

## Planned evidence artifacts

- Five-port non-serving matrix covering endpoints, routes, consumers, credentials, packages/registries, monitors, caches, fallbacks, recovery, retention, and archive.
- Terminal audit with action, owner, timestamp, evidence identity, negative-probe result, limitation, and recheck date per path.
- Separate serving-state, retention, archive, sanitization, destruction, and recovery fields with distinct authorities.
- Mutations for residual alias, live credential, undeclared consumer, reachable endpoint, disconnected device, copied artifact, and absent authority record.

## Exact Phase 07 handoff

- `MLE-BCLM-058`: `Blueprint a port-specific non-serving matrix and inject one residual alias, credential, consumer, endpoint, and disconnected-device path.`
- `MLE-BCLM-059`: `Blueprint separate serving-state, retention, archive, sanitization, and recovery fields with distinct owners and approvals.`
- `MLE-BCLM-060`: `Make RETIRED contingent on exact inventory coverage, negative-probe evidence, retained authority record, and a bounded recheck schedule.`

## Evidence-gap disposition

Evidence-gap disposition: none release-blocking

Rationale: Official lifecycle/control/sanitization guidance, current project mechanics, and two explicitly incomplete public removal records support a bounded, evidence-preserving non-serving audit. The size-limited SEC filing is retained only after exact indexed-passage verification, with a later-freeze recheck requirement and no global-retirement inference.

Affected claim/source IDs: `MLE-BCLM-058`, `MLE-BCLM-059`, `MLE-BCLM-060`; `MLE-BSRC-016`, `MLE-BSRC-026`, `MLE-BSRC-027`, `MLE-BSRC-029`, `MLE-BSRC-031`, `MLE-BSRC-042`.

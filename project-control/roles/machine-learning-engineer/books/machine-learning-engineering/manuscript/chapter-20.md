# Retire the Workload and Prove Non-Serving State

> **Visual placeholder — MLE-V20.1.** Text-only retirement inventory matrix for endpoints, consumers, credentials, packages, monitors, recovery, retention, and rechecks. No asset is created.

## MLE-CH-20-S01 — Decision and Bench Setup

### Bench Setup

Retirement is a technical decision about an inventoried workload, not a label placed on one deployment. BL-18 provides controls and retained authorities. This chapter asks whether every known serving and fallback path has a recorded disable, revoke, remove, or preserved recovery action, together with bounded negative probes and rechecks for delayed consumers. The incoming state is CONTROLLED; BL-19 may move it to RETIRED. That terminal state must be recorded before Chapter 21 can review it as REVIEWED.

The Bench Sheet fixes inventory time, observation time, endpoints, routes, known consumers, credentials, packages or registry references, monitors, aliases, caches, recovery paths, retention decisions, authority records, actions, probes, and recheck schedule. The **state and dossier delta** is `CONTROLLED → RETIRED`. Its **authority route** separates workload non-serving verification from retention, sanitization, destruction, legal, privacy, security, records, product, domain, and shared-platform decisions. Its **next evidence** is hostile review of the terminal dossier, not a new deployment.

Traceability is explicit: architecture `MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-020`, and `MLE-CLM-022`; boundaries `BND-08`, `BND-12`, `BND-14`, `BND-15`, `BND-16`, and `BND-17`; scenarios `SCN-08` and `SCN-10`; domain `PD-12`. The architecture set preserves lifecycle evidence, ownership, limitations, and terminal disposition. The boundaries separate records/retention, shared operations, security, privacy, safety, legal, governance, and formal decisions; the scenarios stress consequential controls and restricted-access shutdown; the domain names retirement and evidence standards. This maps the terminal decision without duplicating the claims.

| Bench Sheet field | Required record |
|---|---|
| decision | Execute retirement across consumers, endpoints, credentials, monitoring, registry, retention, recovery, and archive, then prove no serving path remains in the inventory. |
| evidence | Separate disablement, revocation, removal, monitoring closure, registry state, retention, archive, sanitization, recovery, probes, and rechecks. |
| state and dossier delta | `CONTROLLED` → `RETIRED` through `BL-19`. |
| owner | Product/domain/formal authorities approve retirement and retention; platform/security execute shared shutdown controls. |
| authority route | The MLE verifies workload non-serving evidence but cannot set legal retention or shared-system policy. |
| next evidence | The terminal dossier with residual limits and delayed/disconnected rechecks for hostile review. |

## MLE-CH-20-S02 — Procedure: Prove the Enumerated Negative

**Primary teaching MLE-BCLM-058.** Retirement’s non-serving claim is bounded to an inventory: endpoints, routes, known consumers, credentials, package or registry references, monitors, and recovery paths. Each receives recorded disablement or removal evidence. Deleting one deployment or writing RETIRED proves only that action. Start by enumerating paths, then record action, owner, timestamp, evidence identity, negative-probe result where testable, limitation, and next recheck. The inventory is the scope of the claim.

Its canonical edges are MLE-BSRC-016 for deployment-path mechanics, MLE-BSRC-026 for the bounded removal statement, MLE-BSRC-027 for lifecycle/authority context, and MLE-BSRC-031 for control evidence. None establishes a global negative.

This is deliberately weaker than “nothing can serve.” Unknown paths remain outside the conclusion; delayed and disconnected consumers receive named rechecks. A copied artifact, residual alias, live credential, reachable endpoint, or undeclared consumer is a meaningful failure because it identifies a remaining path. MLE-BSRC-016, MLE-BSRC-027, MLE-BSRC-031, and MLE-BSRC-042 support bounded lifecycle, control, and removal context, not a global negative.

**Primary teaching MLE-BCLM-059.** Service deactivation, artifact retention, media sanitization, and recovery preservation are separate decisions. Retirement preserves required evidence while product, domain, privacy, legal, security, or records authorities decide retention, sanitization, and destruction. A sanitization record may say that target data access is infeasible for a defined effort; it does not prove endpoints, credentials, consumers, aliases, or recovery copies are inactive. MLE-BSRC-029, NIST SP 800-88 Rev. 2, is a media-sanitization source, not a service-deactivation certificate.

MLE-BSRC-027 is the other canonical edge: it supplies contextual lifecycle and authority framing, while MLE-BSRC-029 remains limited to media. Neither lets the MLE choose retention or destruction.

**Primary teaching MLE-BCLM-060.** A terminal audit enumerates known and fallback paths, records each disable/revoke/remove action, runs bounded negative probes where paths are testable, preserves immutable evidence and authority records, and schedules rechecks for delayed or disconnected consumers. Its conclusion is limited to the inventory and observation time. This time boundary is essential. A successful probe at 10:00 against a declared endpoint does not prove that an offline device, unlisted copy, or future route can never serve.

The complete edge set is MLE-BSRC-026 for removal limits, MLE-BSRC-027 for lifecycle authority, MLE-BSRC-029 for sanitization boundaries, MLE-BSRC-031 for control evidence, and MLE-BSRC-042 for residual consumer/package paths. Those roles support a bounded terminal audit, not universal cleanup.

Give every row a stable path identity, type, owner, status, action, evidence locator, probe target and time where testable, limitation, and recheck. Use precise verbs: disable a route, revoke a credential, remove a package or job, preserve authorized evidence, and sanitize defined media. None implies the others. A previous-good artifact may be preserved while every credential, alias, consumer, and route that could serve it is disabled. A newly discovered consumer is a gap requiring a new retirement action, not permission to rewrite what the earlier inventory observed.

Run a counterexample check before PASS. Select the path most likely to contradict non-serving state—a fallback alias, scheduled job, cached package, copied credential, disconnected device, or shared tenant route—and ask whether the inventory exposes its status and owner. A probe records target, method, result, time, and limitation. Failure to observe a delayed device is not a negative result; it is an unavailable observation with a bounded recheck and retained operations owner.

## MLE-CH-20-S03 — Evidence Interpretation and Currentness

The strongest conclusion is: at the recorded inventory and observation time, the listed workload paths had the listed actions and probe evidence, with named delayed-path rechecks and separate retention/recovery authority records. The counterexample is a deleted deployment paired with a live credential or mutable recovery alias. The deployment action can be true while the terminal non-serving conclusion is unsupported.

Source notes: MLE-BSRC-026 is a regulator-hosted issuer filing whose indexed removal statement must be rechecked because full extraction is limited; it does not prove full retirement. MLE-BSRC-029 supports media sanitization only. MLE-BSRC-016, MLE-BSRC-027, MLE-BSRC-031, and MLE-BSRC-042 provide bounded removal, lifecycle, control, and dependency context. Recheck deployment APIs, archive/registry products, credential systems, sanitization guidance, AI RMF revisions, public-case amendments, and every product-specific revoke/delete/probe command at each freeze.

**Accepted currentness ledger — verified 2026-08-18.** `MLE-BSRC-016` is living Kubernetes deployment documentation; recheck version semantics, revision defaults, and commands, retaining that mechanism proves no terminal workload state. `MLE-BSRC-026` is the durable SEC-hosted issuer filing; recheck the accession and exact indexed removal/loss passage because extraction was size-limited, and retain that removal proves no full audit. `MLE-BSRC-027` is the living AI RMF Core; recheck every freeze or revision notice and retain that it certifies no system or authority. `MLE-BSRC-029` is SP 800-88 Rev. 2 living media-sanitization guidance; recheck every freeze and its linked FAQ, retaining that media access says nothing about endpoints or consumers. `MLE-BSRC-031` is SP 800-53 Rev. 5 release 5.2.0; recheck new 5.x text, mappings, or baselines and retain that catalog presence proves no control. `MLE-BSRC-042` is the living PyTorch advisory; recheck corrections, scope, indicators, or a final report and retain that stated remediation proves no consumer-wide cleanup.

The limitations are the substance of the chapter. No audit proves an unknowable global negative. The MLE cannot set a legal records schedule, destroy material without authority, retire a shared platform, or convert sanitization into deactivation proof. A terminal record is honest only if its inventory and observation time remain visible beside its RETIRED state.

Retained recovery evidence needs an especially clear boundary. A previous-good package can remain for an authorized archive or investigation while every active endpoint, alias, credential, schedule, and consumer route to it is disabled. If a recovery path remains operational by design, it is a serving-capable inventory row with its own authority and limitation, not an archival exception. This separation lets records and recovery owners preserve evidence without allowing preservation to become a hidden fallback.

## MLE-CH-20-S04 — Worked Trace: The Last Serving Path

CASE-01 is a FICTIONAL SYNTHETIC CAPSTONE. Its retirement fixture inventories an edge endpoint, a device package, a credential, a monitor, a cached alias, a recovery package, and a delayed device. Each gets a fictional action and fixed negative-probe result. A disconnected-device row is not marked clean; it receives a recheck date. This synthetic-deterministic result has no reported facts, attributed outcomes, or real industrial, safety, performance, or business claim.

CASE-02, CASE-03, CASE-04, and CASE-05 are constructed satellites covering managed aliases, classical batch paths, deep registry copies, and shared tenant routes. CASE-11 is a public reported dependency-remediation case and CASE-12 is an issuer-reported removal case. They show bounded action and limitation, not complete consumer cleanup, platform shutdown, or ML retirement prevalence. The allowed inference is precisely that one reported action must not be inflated into a terminal audit.

For `CASE-11`, **reported facts** are PyTorch’s affected nightly Linux/pip window, same-name package, indicator, and stated project-side mitigations; **attributed outcomes** are PyTorch’s precedence explanation and response, without a complete cleaned-population count; **allowed inference** is to inventory origin, digest, installed copies, caches, credentials, consumers, and residual paths; **forbidden inference** is prevalence, universal resolver behavior, prevention by unevidenced controls, or complete cleanup; **limitations** are first-party reporting, stable packages outside scope, and no population-wide result; **transfer rule** replaces pip/index mechanics with the port’s actual package and consumer paths while preserving bounded verification and external authority.

For `CASE-12`, **reported facts** are the SEC deployment/control findings and issuer-stated software removal; **attributed outcomes** remain only the SEC’s or issuer’s statements and settled action; **allowed inference** is that one removal statement is weaker than endpoint, alias, credential, consumer, fallback, and recovery evidence; **forbidden inference** is an ML rate, trading threshold, regulatory conclusion, full restoration, or terminal proof; **limitations** are non-ML software, no-admit/no-deny settlement, size-limited filing extraction, and no published full path audit; **transfer rule** replaces router/order mechanics with actual port paths and retains product, platform, security, records, legal, and formal owners.

For the constructed fixtures, reported facts are none and attributed outcomes are none; their allowed inference concerns only inventory semantics. The forbidden inference is a real deletion, safety, performance, business, or platform-retirement outcome. The currentness notes and source notes keep volatile mechanics separate from the bounded doctrine.

## MLE-CH-20-S05 — Failure Labs

`MLE-CH-20-LAB-01` runs a synthetic-deterministic positive terminal audit: every fixture path has action, evidence identity, owner, limitation, and a negative probe where testable. It writes inventory and observation time into BL-19. Removing the inventory time makes the conclusion HOLD because later readers cannot know the scope of the non-serving claim.

`MLE-CH-20-LAB-02` injects a residual alias, live credential, undeclared consumer, reachable endpoint, copied artifact, disconnected device, and absent authority record. Each receives a distinct failure route. A disconnected device schedules recheck rather than a false PASS. A sanitization token cannot cure a live route. The labs do not delete anything, revoke any real credential, touch a provider, or claim a real cleanup. They test record semantics and the refusal of premature RETIRED.

`FIX-MLE-CH-20-1` is the closed complete-retirement-inventory input; `FIX-MLE-CH-20-2` is the closed mutation input. Inputs are BL-18, enumerated path identities, actions, evidence, probes, inventory and observation time, authority, limitation, and recheck only. Legal dispositions are PASS, HOLD, REJECT, or REOPEN. Named diagnostics are “residual endpoint or alias,” “active credential,” “undeclared consumer,” “disconnected device,” and “retention collapsed into deletion.” Acceptance requires every known path resolved or explicitly bounded and scheduled. Prohibited effects are network, shell, provider, credential revocation, deletion, sanitization, archive, production, and authority mutation.

The fixture makes absence of evidence distinguishable from evidence of absence. A successful negative probe against the named endpoint at the fixed time is bounded evidence; a missing row or unavailable device is absence of evidence. The runner must not convert the latter into PASS. It records the discovery method used, the known-consumer boundary, the owner, and the next check, allowing a later reviewer to add a newly discovered path without falsifying the older observation-time statement.

## MLE-CH-20-S06 — Five-Port Transfer

All five ports—`PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, and `PORT-SHARED`—must inventory serving, consumer, credential, package, monitor, fallback, recovery, retention, and archive paths. Managed services add exports and provider aliases; classical workloads add jobs and files; deep workloads add checkpoints, caches, and registries; edge workloads add offline packages and delayed devices; shared workloads separate tenant paths from fleet shutdown. Mechanisms differ; the bounded inventory, action evidence, limitation, owner route, and observation-time rule do not.

Managed requires exportable endpoints, aliases, configuration, and recovery records; unavailable export routes to provider/platform owners and provider status is not retirement proof. Classical requires feature jobs, files, estimator packages, credentials, and schedules; residual preprocessing or job paths route to data/operations and simplicity is no waiver. Deep requires checkpoint, cache, runtime, preprocessor, registry, and fallback identities; a live copy routes to research/platform and scale proves nothing. Edge requires device inventory, package, connectivity, credential, and bounded recheck; a disconnected device routes to hardware/operations/domain and cannot receive global PASS. Shared requires tenant/workload routes, shared credentials, aliases, consumers, and fleet separation; collision or fleet pressure routes to platform/SRE/security and workload retirement is not platform shutdown. Every row returns only its bounded non-serving observation.

The transfer review chooses the path each mechanism hides most easily. For managed, follow provider aliases and exports after the primary endpoint disappears. For classical, inspect batch schedulers, feature files, and embedded estimator copies. For deep, trace registry tags, checkpoints, caches, preprocessors, and fallback runtimes. For edge, compare device inventory with acknowledgements and keep offline units unresolved. For shared, reverse the tenant-to-fleet relationship so a workload route cannot be missed inside a shared credential or controller. These are enumeration prompts, not claims that every workload uses every mechanism.

Evidence formats can differ while semantics remain equal. A provider receipt, local job record, registry query, device acknowledgement, or manual operational record may support a row when its path identity, action, observation time, limitation, and owner are visible. Product-specific commands remain currentness-sensitive. If a port cannot expose a requested status, that absence becomes a limitation and owner route; it never becomes a quieter retirement standard.

## MLE-CH-20-S07 — Assessment and Qualification Gate

`MLE-CH-20-ASMT-01` presents a deleted deployment, live credential, copied registry package, scheduled job, disconnected device, sanitization receipt, and missing records owner. The reader must build an inventory, distinguish serving state from retention and sanitization, select probes, route each owner, and state the observation-time limit. The correct answer cannot call the workload retired while a known serving path remains.

**Answer intent:** enumerate every path, reject the live credential, copy, and schedule, preserve the disconnected device as an unknown with recheck, separate sanitization from deactivation, name retained owners, and bound the conclusion to inventory and observation time.

A complete answer assigns distinct actions rather than one “delete” instruction. The deployment route is disabled, the credential is routed for revocation, the package copy and job are removed or held with evidence, the disconnected device stays unresolved, and the sanitization receipt remains evidence only for defined media. The missing records owner prevents a retention/destruction conclusion. RETIRED remains unavailable until every known serving-capable row is resolved or truthfully bounded.

The response must state the inventory time separately from the observation time. It must also name the next check for the disconnected device and any delayed consumer. These fields make the terminal statement falsifiable: a later discovery can add a new row and action without pretending that the earlier audit observed what it could not reach.

### Qualification Gate

Issue BL-19 only when exact inventory coverage, action evidence, bounded negative probes, immutable records, retained authorities, separate retention/recovery treatment, limitation, inventory time, observation time, and rechecks for delayed paths are present. Otherwise HOLD, REJECT, or REOPEN. PASS establishes RETIRED only for the enumerated workload evidence and must precede REVIEWED.

## MLE-CH-20-S08 — Durable Handoff

BL-19 carries terminal inventory, actions, probes, owners, limitations, retention/recovery separation, recheck schedule, source notes, currentness triggers, and exact inventory and observation time. Its outgoing state is RETIRED. Chapter 21 may hostile-review this immutable record; it may not mark REVIEWED before this retirement contract exists. The chapter ends with no actual deletion, publication, policy, or next-role work.

The final distinction is between absence of evidence and evidence of absence. The first requires inventory work, an owner route, or a recheck; the second is a bounded observation against a named path and time. Only after every known row carries that status may BL-19 state RETIRED and hand the immutable record to the review that can later produce REVIEWED.

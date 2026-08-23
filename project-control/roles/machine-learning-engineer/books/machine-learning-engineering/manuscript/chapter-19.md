# Trace Controls, Exceptions, and Formal Decisions

> **Visual placeholder — MLE-V19.1.** Text-only control-to-dossier trace with exception expiry and retained authority lanes. No asset is created.

## MLE-CH-19-S01 — Decision and Bench Setup

### Bench Setup

After requalification or rollback, the question is whether the workload’s controls, evidence, exceptions, and formal decisions can be traced from task contract through retirement. The incoming state is REQUALIFIED or ROLLED-BACK. BL-18 records CONTROLLED only when the evidence thread is visible and each retained decision has an owner. The Bench Sheet fixes control identity, workload scope, evidence locator, test, owner, decision, exception state, expiry, revalidation trigger, and limitation. Its **state and dossier delta** is `REQUALIFIED|ROLLED-BACK → CONTROLLED`; its **next evidence** is a bounded retirement audit.

The MLE implements and tests workload controls, preserves evidence, and exposes gaps. Security, privacy, safety, governance, legal, domain, platform, and formal release owners decide their own matters. A late spreadsheet of controls cannot repair missing historical evidence or self-authorize an exception. The authority route is a first-class field, not a footer.

Traceability is explicit: architecture `MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-019`, and `MLE-CLM-020`; boundaries `BND-05`, `BND-08`, `BND-13`, `BND-14`, `BND-15`, `BND-16`, and `BND-17`; scenarios `SCN-06`, `SCN-08`, and `SCN-10`; domain `PD-11`. The architecture set preserves control history, external authority, uncertainty, and visible limitations. The boundaries keep evaluation, data, security, privacy, safety, legal, governance, and formal decisions with their specialists; the scenarios stress exception, consequential-control, and security-review paths; the domain connects the record to recovery and continuous controls. This mapping does not duplicate the primary claims.

| Bench Sheet field | Required record |
|---|---|
| decision | Integrate workload control tests, exceptions, residual limits, and formal decisions accumulated since the task contract. |
| evidence | Thread provenance, tests, results, supersession, exceptions, residual limits, authority, and revalidation through the dossier. |
| state and dossier delta | `REQUALIFIED|ROLLED-BACK` → `CONTROLLED` through `BL-18`. |
| owner | Security, safety, privacy, governance, legal, product, domain, and evaluation owners retain formal decisions. |
| authority route | The MLE implements and tests workload controls and routes exceptions but cannot approve them. |
| next evidence | A retirement plan grounded in the accepted control history and serving-path inventory. |

## MLE-CH-19-S02 — Procedure: Carry the Decision Thread

**Primary teaching MLE-BCLM-055.** Controls, tests, owners, evidence, and formal decisions must travel through dossier deltas from the task contract to retirement. A late control inventory cannot show whether a control operated under plausible malfunction or whether changed data, runtime, or permitted use invalidated earlier evidence. For every control, record the workload scope, test or observation, result, limitation, owner, linked decision, and recheck trigger. MLE-BSRC-027, MLE-BSRC-030, MLE-BSRC-031, MLE-BSRC-036, and MLE-BSRC-039 supply lifecycle, secure-development, control, provenance, and review context; they do not make a mapping proof of operation.

**Primary teaching MLE-BCLM-056.** Treat an exception as a bounded decision record. Identify the affected control and candidate or use boundary; explain the justification; cite the compensating test; state the remaining constraint; name the external approver; record when validity begins and ends; and list the changes that force another review. A missing signature, absent owner, elapsed window, or mismatched scope makes the record unusable as current evidence. These fields make the exception inspectable without inventing a local security, privacy, safety, governance, legal, or domain process. The compensating result supports only its stated residual boundary and never becomes a general waiver.

The canonical edges are MLE-BSRC-027 for contextual authority and MLE-BSRC-031 for control/exception vocabulary. Their limitations prevent a framework mapping from becoming an approval.

**Primary teaching MLE-BCLM-057.** The MLE’s role is to implement workload controls, test their behavior, and assemble the resulting evidence. It does not include signing its own security waiver, rendering a privacy or legal judgment, accepting a safety or domain risk, setting fleet-wide policy, or authorizing release. Every formal decision row therefore points to the specialist who retains that authority. An MLE signature in such a field is a validation failure even when local tests are green. Non-self-approval is the durable rule; titles and workflow products are replaceable examples.

The canonical edges are MLE-BSRC-027 and MLE-BSRC-031: both require contextual ownership and evidence, and neither assigns formal authority to the MLE.

Walk the thread in both directions. From a formal decision, locate the evidence it was allowed to consider, then locate the workload scope, test or observation, candidate, environment, limitation, and validity window. From a test result, locate the declared control, decision route, exception if any, and revalidation trigger. A one-way link is a defect because a later reviewer can lose either the purpose of the evidence or the support behind a decision. Preserve superseded records as history, but mark why they no longer support the current state.

Treat applicability as a dated predicate, not a permanent badge. A runtime change can leave yesterday’s result historically true and make it insufficient today. An exception can be valid until its expiry yet fail earlier when purpose, population, interface, or permitted use changes. The dossier records the trigger, the invalidated dependency, and the route after expiry: renew through the same external authority, repair the control, or stop relying on the exception. This avoids both erasing history and treating it as current evidence.

## MLE-CH-19-S03 — Evidence Interpretation and Currentness

The strongest conclusion is that the enumerated workload controls have linked evidence, limitations, owners, and decision routes through the dossier. The counterexample is a late inventory with attractive control names but no proof of what was tested, when a decision became stale, or who approved an exception. A catalog reference is vocabulary, not a functioning control or an authorization.

Source notes: AI RMF Core (MLE-BSRC-027) is living and must be rechecked; SSDF 1.1 (MLE-BSRC-030), SP 800-53 Rev. 5 release 5.2.0 (MLE-BSRC-031), and SLSA/provenance material (MLE-BSRC-036) are bounded standards context; MLE-BSRC-039 supplies operational review context. Recheck control-catalog versions, vendor policy names, signature systems, and review cadence at every freeze. Currentness affects identifiers and mechanics, not the need for an evidence thread.

**Accepted currentness ledger — verified 2026-08-18.** `MLE-BSRC-027` is the living AI RMF Core; recheck every freeze or revision notice and retain that it certifies no system or local authority. `MLE-BSRC-030` is SSDF 1.1; recheck successor or material errata and retain that framework scope grants no risk acceptance. `MLE-BSRC-031` is SP 800-53 Rev. 5 release 5.2.0; recheck a new 5.x release, mapping, baseline, or control-text change and retain that catalog presence proves no workload control. `MLE-BSRC-036` is SLSA 1.2; recheck a superseding approved version while retaining that supply-chain evidence proves no model or domain decision. `MLE-BSRC-039` is the durable SEC Knight Capital release; recheck the accession and retain that the non-ML event transfers only bounded deployment, alerting, control, incident, and review methods.

Limitations are clear. Framework mappings require local tailoring. This chapter cannot determine risk acceptance, retention law, security policy, or a real organization’s approval procedure. It can require that the missing authority be visible. A HOLD with an honest owner route is stronger evidence than an unsigned PASS.

The evidence status is three-valued. Established means the declared scope, fixture, result, limitation, and owner resolve. Contradicted means a discriminating failure is preserved with its repair boundary. Untested means the record exposes a gap rather than presenting a blank as success. This distinction matters when teams exchange dossiers: a reviewer can route unknown evidence without confusing it with a failed control, and can preserve a failure without claiming that every other control is invalid.

## MLE-CH-19-S04 — Worked Trace: An Exception That Cannot Outlive Its Evidence

CASE-01 is a FICTIONAL SYNTHETIC CAPSTONE. Its synthetic control record links a sensor-input constraint to a fixture test, a fictional security owner, and a recheck condition. An injected exception has a scope, residual limit, and expiry. It is not a real safety or compliance result. Reported facts and attributed outcomes are none; allowed inference is limited to the record structure; forbidden inference includes a real control approval.

The trace begins with the declared control rather than a catalog family. Its scope is the named candidate’s promotion authorization for the declared consumer set. The evidence is a fixed fixture result plus the identity of the authorization record; its limitation is that the fixture cannot establish a real security decision. The exception covers only that workload identity, cites a compensating check, names the residual limit, and expires at the earlier of its date or any change to consumer, runtime, purpose, or permitted use. This construction lets a reviewer test applicability instead of admiring a control label.

Reverse the trace from the fictional formal-decision field. The reviewer must find the external owner, the exact evidence considered, the exception and compensating test if used, and the workload identity to which they apply. Now mutate the candidate runtime. The historical test and exception remain preserved, but the decision thread becomes stale because the runtime is outside their scope. The correct outcome is REOPEN to the owning evidence and authority, not a silent edit to the scope. This demonstrates supersession without pretending that the earlier evidence was false.

The same method handles an untested control. Record the intended scope, why evidence is absent, which owner can provide or waive nothing, and what next observation would resolve it. Do not mark an empty result as failure if no test ran, and do not mark it PASS because a framework recommends the category. Established, contradicted, and untested states remain distinct so a later retirement review can identify which duties still have unresolved evidence.

CASE-03 and CASE-05 are constructed satellite cases. They show respectively a classical preprocessing limit and a shared-tenant boundary. CASE-11 and CASE-12 are PUBLIC REPORTED CASE records used only to remind the reader that a bounded remediation or removal statement does not certify a full control system. Neither case supplies a formal decision. Their limitations remain in the trace.

For `CASE-11`, **reported facts** are the disclosed nightly Linux/pip window, same-name package, indicator, and PyTorch-stated mitigations; **attributed outcomes** are the precedence explanation and project response, not a cleaned-population result; **allowed inference** is that origin, digest, provenance, containment, and residual paths belong in a control thread; **forbidden inference** is prevalence, universal resolver behavior, prevention by an unevidenced framework, or complete cleanup; **limitations** are that the advisory is PyTorch’s own account, explicitly excludes stable releases, and never measures how many consumer environments were ultimately cleared; **transfer rule** generalizes the identity-and-verification shape to each port’s real dependency-delivery route while security, incident response, consumer verification, and formal decisions remain external.

For `CASE-12`, **reported facts** are the SEC deployment/control findings, automated messages, and issuer-stated removal; **attributed outcomes** remain only those of the SEC and issuer; **allowed inference** is that malfunction-oriented tests, signal ownership, action evidence, and residual paths must be linked; **forbidden inference** is an ML rate, trading threshold, regulatory result, full restoration, or complete retirement; **limitations** are non-ML software, no-admit/no-deny settlement, size-limited filing extraction, and no public terminal-path proof; **transfer rule** replaces order/router details with the port’s actual packages, endpoints, devices, aliases, consumers, credentials, and fallbacks while retaining external formal authority.

## MLE-CH-19-S05 — Failure Labs

`MLE-CH-19-LAB-01` creates a synthetic-deterministic control map with evidence, owner, limitation, decision, and recheck trigger. Removing the evidence locator or changing the workload scope yields HOLD; a control name alone is insufficient. `MLE-CH-19-LAB-02` injects an expired exception, an unsigned exception, a scope mismatch, and an MLE-signed formal decision. All fail with their specific diagnosis and route to the named external authority. The labs have no network, policy mutation, approval action, provider call, or production claim.

The positive lab also samples the reverse edge: given a result, it must recover the control purpose and decision that consume it. The mutation lab changes one field at a time so expiry cannot be confused with scope mismatch and missing signature cannot be confused with an unauthorized MLE signature. Each failure retains the original record and identifies whether the next evidence is a renewed external decision, a corrected scoped record, or a rerun after the changed workload identity.

`FIX-MLE-CH-19-1` is the closed complete-control-trace input; `FIX-MLE-CH-19-2` is the closed mutation input. Inputs are the bound BL-17 identity, control scope, test, result, evidence locator, limitation, owner, decision, exception state, expiry, and recheck only. Legal dispositions are PASS, HOLD, REJECT, or REOPEN. Named diagnostics are “missing control provenance or result,” “expired exception,” “unsigned exception,” “scope-mismatched exception,” and “MLE-signed formal decision.” Acceptance requires reverse trace, current validity, external signature where required, and next route. Prohibited effects are network, shell, provider, credential, policy, production, approval, and authority mutation.

## MLE-CH-19-S06 — Five-Port Transfer

`PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, and `PORT-SHARED` share a control schema: workload scope, test, evidence, limitation, owner, decision, exception, expiry, and revalidation. Managed controls may depend on exportable provider evidence; classical controls may bind preprocessing; deep controls bind checkpoint/runtime; edge controls bind device and delayed paths; shared controls separate tenant scope from fleet policy. No port gains a waiver from complexity or simplicity.

Managed requires exportable configuration, control use, and recovery evidence; opaque-provider failure routes to provider/platform owners and provider claims are no qualification. Classical binds feature order, preprocessing, and estimator scope; mismatch routes to data/evaluation and simplicity removes no duty. Deep binds data, run, checkpoint, preprocessor, runtime, and decision evidence; wrong identity routes to research/platform and scale grants no approval. Edge binds sensor, device package, delayed path, control, and recheck; disconnection or stale package routes to hardware/operations/domain and fictional Benchline implies no safety. Shared binds tenant/workload scope, compatibility, control use, and recovery; tenant collision or fleet pressure routes to platform/SRE/security and workload evidence is not fleet assurance. Each row returns only the scoped CONTROLLED result with its own limitation.

Port equality is tested by asking the same reverse-trace question in every row: which exact evidence supports this workload control, what does it fail to establish, and who decides the residual condition? If a managed export is unavailable, record the limitation. If an edge device is unreachable, schedule evidence rather than waive the field. If a classical transformation lacks the identity detail given to a deep checkpoint, that is a gap. Equal semantics do not require identical tools; they require the same decision burden.

## MLE-CH-19-S07 — Assessment and Qualification Gate

`MLE-CH-19-ASMT-01` contains one late control inventory, one ownerless exception, one expired exception, one compensating test, and one MLE-signed release field. The reader must determine which evidence remains valid, identify the retained authority, and write a revalidation route. The correct response refuses self-approval and does not use a framework citation as an approval substitute.

**Answer intent:** reverse-trace every decision, mark missing or stale evidence, reject the ownerless and expired exceptions, preserve the compensating test’s narrow limit, route formal signatures externally, and state the exact revalidation trigger.

The reader must also say why the late inventory cannot repair the historical gap. The valid compensating test remains evidence only for its bound candidate, environment, scope, and time. The ownerless record is unestablished; the expired record is historical; the self-signed decision is unauthorized. A correct response produces a precise HOLD and route rather than converting the framework name, green log, or management urgency into approval.

To make that answer independently checkable, list the evidence locator and validity condition beside every conclusion. The compensating test points to its fixed fixture and residual limit. The expired exception points to its former window and the authority needed for any renewal. The ownerless exception points to no valid decision and therefore cannot be consumed. The self-signed field points back to the MLE and fails the authority matrix. These links let a second reviewer reproduce the HOLD without relying on title, urgency, or narrative confidence.

### Qualification Gate

Issue BL-18 only when every declared workload control has a traceable scope, evidence, limitation, owner, and decision route; every exception has bounded authority, date, scope, residual limit, and revalidation; and formal decisions remain external. Otherwise HOLD, REJECT, or REOPEN. PASS establishes CONTROLLED for this evidence thread, not policy compliance or release authorization.

## MLE-CH-19-S08 — Durable Handoff

BL-18 carries the control map, exception records, formal-decision routes, evidence identities, limitations, currentness triggers, and revalidation conditions into retirement. A changed workload scope, purpose, data, runtime, interface, authority, constraint, or permitted use invalidates the relevant record and reopens the applicable gate. The chapter creates no policy, approval, publication, image, or external system change.

Before handoff, classify each declared control as established, contradicted, or untested; name the evidence, limitation, and owner for that status; and state whether it persists after serving stops. The record remains useful because later retirement can distinguish active-path controls from evidence-preservation, recovery, exception-expiry, and delayed-recheck duties without inventing a policy decision.

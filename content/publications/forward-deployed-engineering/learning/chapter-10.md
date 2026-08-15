# Chapter 10 Learning Pack - Build Security and Governance Into Delivery

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Walk from asset/obligation through threat, risk, control objective, implementation, verification, evidence, and owner disposition.
2. Why is a framework name not a control or certification claim?
3. Distinguish operating owner, evidence preparer, and formal decision authority.
4. Why must threat modeling join workflow states with system boundaries?
5. What belongs in a data-handling record beyond storage?
6. How can auditability create additional security/privacy risk?
7. What makes separation of duties and break-glass proportionate rather than ceremonial?
8. What changes can invalidate control evidence?

## Scenario questions

- A private network is used as proof of tenant authorization. Identify missing decisions/tests.
- An audit store contains complete prompts and documents. Redesign for investigation and minimization.
- A security exception says “temporary” but has no authority, expiry, or compensating control. Route it.
- A qualified reviewer approves every suggestion rapidly. Diagnose identity, interface, workload, and evidence gaps.
- Emergency access depends on the failed identity service. Design and exercise a bounded recovery path.

## Applied exercise and lab

1. Run `npm run test:companion`.
2. Turn the five vague controls in the chapter into complete records.
3. Add one negative verification and one recovery verification per record.
4. Route the regional-logging exception and exposure decision without self-approval.
5. Create an allowlisted audit event and demonstrate that secrets/raw payloads are absent.

Pass only when evidence-complete is distinct from formally approved and every decision authority is named and scoped.

## Optional practice MCQs

1. A framework mapping proves control effectiveness: **false**; implementation and verification evidence are required.
2. More audit content always improves accountability: **false**; purpose, minimization, access, retention, and usability matter.
3. The FDE may accept risk because the FDE owns delivery: **false**; formal authority must be explicitly delegated.

## Advanced challenge

Design a versioned control-evidence graph for one cross-tenant interface. Include data, identity, idempotent intent, AI/tool paths, logs, recovery, evidence invalidation, exception expiry, and the designated authority for each residual decision.

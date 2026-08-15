# Chapter 10 Research — Build Security and Governance Into Delivery

## Research question

How can an FDE integrate security, privacy, auditability, evidence, approvals, and escalation without impersonating formal authorities?

## Claim and evidence map

- **C10.1 — Zero trust removes implicit trust based solely on network location and focuses protection on resources.** `R06-S026`.
- **C10.2 — OAuth 2.0 security should follow RFC 9700 where applicable.** `R06-S027`.
- **C10.3 — Cybersecurity, secure development, and privacy frameworks define outcome/practice structures that require contextual implementation.** `R06-S040`, `R06-S041`, `R06-S042`.
- **C10.4 — ASVS 5.0.0 and WCAG 2.2 provide versioned verification criteria for application security and web accessibility.** `R06-S043`, `R06-S045`.
- **C10.5 — GenAI risk/security guides add AI-specific prompts but do not replace a system threat model.** `R06-S031`, `R06-S034`, `R06-S039`.

## Durable principles

Start with assets, actors, trust boundaries, misuse/failure scenarios, consequence, existing controls, and accountable owners. Map each selected control to implementation and evidence. Minimize data/access, separate duties where consequence requires it, and record approval/exception paths. The FDE prepares evidence and escalates; designated authorities accept risk.

## Cases

- `R06-C003` tests the tension between normal access controls and recoverable break-glass operation.
- `R06-C006` and `R06-C007` are regulated-workflow stories whose control claims remain vendor/customer reported.
- `R06-C010` requires regional data handling, qualified approval, and audit records without fictional certification claims.

## Disputes and limits

Compliance, security, privacy, safety, accessibility, and ethics overlap but are not interchangeable. Framework alignment is not certification, legal compliance, or risk acceptance. Threat likelihood and control sufficiency are contextual.

## Remaining gaps

Jurisdiction- and industry-specific regulations remain specialist-owned and outside the core text. Phase 07 must include an explicit escalation boundary and evidence-vs-approval exercise.

## Manuscript prohibitions

Do not provide legal advice, declare compliance, reproduce copyrighted standards, or claim that encryption, a VPC, or a checklist makes a deployment secure.

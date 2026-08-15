# Chapter 16 Research — Implement Controls and Preserve Authority

## Architecture anchors

- Primary domains: `AAE-K02`, `AAE-K05`, `AAE-K08`
- Dossier milestone: `PF-10`
- Forecast figures: `F16.1`, `F16.2`

## Research question

How should an engineer translate privacy, security, safety, misuse, human-authority, and governance requirements into implemented, tested controls while preserving the people who may authorize use?

## Claim and evidence map

- **C16.1 — AI risk management is contextual, continuous, and governance-linked.** `AAE-S001`, `AAE-S002`, and `AAE-S054` support lifecycle action and explicit roles.
- **C16.2 — Privacy risk is created by data processing and requires purpose/role-aware management.** `AAE-S038` supports privacy governance; it is not legal advice.
- **C16.3 — Secure development needs provenance, integrity, vulnerability response, and protected release practices.** `AAE-S037` supplies general software controls.
- **C16.4 — AI threats include evasion, poisoning, privacy, supply-chain, prompt/input injection, unsafe output handling, and excessive agency.** `AAE-S039`, `AAE-S040`, `AAE-S041`, and `AAE-S042` supply complementary taxonomies and frameworks.
- **C16.5 — Schema and tool interfaces require separate semantic, permission, confirmation, audit, and recovery controls.** `AAE-S043` and `AAE-S044` support mechanics; provider guarantees stop at stated interface properties.
- **C16.6 — Segment and dataset evidence inform controls but do not authorize deployment.** `AAE-S010`, `AAE-S049`, `AAE-S050`, and `AAE-S051` support documentation and context-specific evaluation.

## Control evidence chain

Threat/harm and affected party -> control objective -> implementation location -> configuration/version -> test/adversarial evidence -> monitor -> residual limitation -> reviewer -> named authority/disposition. A policy, prompt sentence, or vendor toggle alone is not sufficient.

## Cases

- `AAE-C005`, `AAE-C006`, and `AAE-C011` connect data/segment evidence to specialist review without transferring domain authority.
- `AAE-C009` separates typed output from authorized effect.
- `AAE-C012` requires seller-manipulation defenses, evidence display, compatibility rules, review, access minimization, and no autonomous purchase/contact.

## Disputes and limits

Risk likelihood and acceptable residual vary by use and organization. Control effectiveness degrades under change. Framework coverage does not equal compliance, and red-team findings do not by themselves choose business risk tolerance.

## Remaining gaps

No release-blocking research gap. Industry-specific law and certification are deliberately outside core scope; Phase 07 must state fictional case policy and route real legal questions outward.

## Blueprint constraints

Require at least one test that defeats a prompt-only “guardrail,” one excessive-agency path, and one control whose residual limitation blocks release until an accountable owner responds.

## Manuscript prohibitions

Do not say compliant, safe, unbiased, private, or secure without scope and evidence; do not let the engineer self-approve formal risk.

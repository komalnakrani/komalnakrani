# Chapter 10 Blueprint — Build Security and Governance Into Delivery

## Purpose and exit capability

The reader can discover threats/risks, design proportionate controls, map implementation to verification, minimize data/access, produce evidence, and escalate approval without impersonating legal, security, privacy, safety, audit, or business authority.

## Prerequisites and non-scope

- Prerequisite: complete `OA-05` structural, interface, environment, identity, and AI decisions.
- Non-scope: legal advice, certification, independent audit, universal risk scoring, or FDE risk acceptance.

## Concepts, skills, and decision models

- Evidence chain: asset/threat/risk → control objective → implementation → verification → evidence → owner approval/exception.
- Data-handling record; least privilege; separation of duties; auditability; approval and escalation map.
- Framework-use rule: version, selected scope, mapping, evidence, gap, accountable owner; alignment is not certification.
- Skill: articulate risk/consequence and prepare decision-quality evidence at the right authority boundary.

## Architecture, implementation, and tools

- NIST ZTA/CSF/SSDF/Privacy Framework, RFC 9700, OWASP ASVS 5.0.0, WCAG 2.2, NIST AI RMF/GenAI profile (`versioned`); OWASP LLM guide (`community/versioned`).
- Threat-modeling and scanning tools (`volatile/replaceable`) may support evidence; canonical control/evidence matrix is tool-neutral. Companion adds authorization tests, audit events, sensitive-field redaction, dependency/static checks, and approval fixture.

## Scenario and artifacts

- Complete `OA-05`: threat/risk model, control matrix, data-handling record, access design, AI controls, verification evidence plan, formal approval/exception path.
- Record regional data, qualified-human approval, audit retention, secret handling, and break-glass boundaries.

## Cases and bounded use

- `R06-C003`: security/access dependency versus recoverability.
- `R06-C006`, `R06-C007`: regulated vendor stories, attributed only.
- `R06-C010`: fictional evidence chain; never declare compliance.

## Failures, mistakes, and tradeoffs

- Checklist theater, framework-name compliance, security at final gate, excessive logging, ownerless exception.
- Tradeoff: control friction versus consequence; decision belongs to accountable owner with evidence and alternatives.

## Exercise and completion evidence

Turn five vague controls into objective/implementation/test/evidence/owner records and route two formal decisions. Pass when gaps are visible and no FDE approval is fabricated.

## Figures

- `F10.1` risk-to-control-to-evidence chain.
- `F10.2` authority/escalation map.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S026`, `R06-S027`, `R06-S029`–`R06-S031`, `R06-S034`, `R06-S039`–`R06-S045`.
- Domains: primary `FDE-K01`, `FDE-K04`, `FDE-K08`; secondary `FDE-K07`, `FDE-K09`.
- Depth: major risk/governance chapter; target 12,000–15,000 words.
- Handoff: Chapter 11 implements one end-to-end path under the approved design constraints.
- Prohibitions: no legal/compliance declaration, copyrighted-standard reproduction, or checklist-as-security claim.

# Chapter 16 Blueprint — Implement Controls and Preserve Authority

## Purpose and exit capability

Translate privacy, security, safety, misuse, human-authority, and governance requirements into implemented/tested controls, residual limitations, and review packets without self-authorizing risk.

## Prerequisites and non-scope

- Prerequisite: behavior/authority contract, architecture, failures, evaluation, signals.
- Non-scope: legal advice, audit, red-team specialization, clinical judgment, compliance certification, or organizational risk acceptance.

## Concepts, skills, and decision models

- Threat/harm -> objective -> mechanism -> test -> monitor -> residual -> reviewer -> authority.
- Data minimization, provenance, supply chain, evasion/poisoning, injection, unsafe output, excessive agency.
- Human review mechanics; proposal/validation/authorization/effect/audit/recovery.
- Skill: distinguish policy sentence, configured mechanism, tested control, and accepted residual risk.

## Architecture, implementation, and stability

- Companion: permission checks, prohibited-claim/compatibility policy, injection fixtures, structured validation, draft-only tool, explicit confirmation, audit record, control test runner.
- Threat/control principles are `durable/versioned`; provider filters/framework controls are `volatile supplementary layers`.

## Scenario and artifact progression

Create `PF-10` threat/harms model, data-handling record, control matrix, tests, human-review procedure, residual-limitations and approval packet v0.1.

## Cases and bounded use

- `AAE-C005`, `AAE-C006`, `AAE-C011`: domain/segment evidence, not authority transfer.
- `AAE-C009`: typed output before semantic/effect controls.
- `AAE-C012`: seller manipulation, prohibited claims, permissions, no autonomous contact/purchase.

## Failures, disputes, and tradeoffs

Prompt as security boundary; policy as control; checklist as compliance; human as failsafe; risk matrix as truth; engineer as approver. Control strength competes with usability, latency, coverage, privacy, and operator capacity.

## Exercise, companion work, and completion evidence

Defeat a prompt-only guardrail, block excessive agency, test six controls, and leave one residual decision to an authority. Pass when every control has code/config, evidence, monitor, owner, and residual limit.

## Figures

- `F16.1`: control evidence chain; prevents documentation-only assurance.
- `F16.2`: bounded tool sequence; places permission, validation, confirmation, audit, and recovery.

## Evidence, competencies, depth, and handoff

- Claims: `C16.1`–`C16.6`; sources `AAE-S001`, `AAE-S002`, `AAE-S010`, `AAE-S037`, `AAE-S038`, `AAE-S039`, `AAE-S040`, `AAE-S041`, `AAE-S042`, `AAE-S043`, `AAE-S044`, `AAE-S049`, `AAE-S050`, `AAE-S051`, `AAE-S054`.
- Domains: primary `AAE-K02`, `AAE-K05`, `AAE-K08`; secondary `AAE-K04`, `AAE-K07`.
- Depth: major controls/authority chapter; target 7,000–8,500 words.
- Handoff: Chapter 17 assembles behavior, operational, control, and authority evidence into a bounded release.
- Prohibitions: no unscoped safe/secure/private/compliant claim, prompt-only control, or engineer self-approval.

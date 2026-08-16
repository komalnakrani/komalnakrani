# Chapter 14 Blueprint — Attack Assumptions and Inject Failure

## Identity and target

- Part IV; primary `AGE-K09`, secondary `AGE-K03`, `AGE-K04`, `AGE-K05`, `AGE-K07`, `AGE-K08`
- Dossier: create `AR-10 v1.0.0`
- Purpose/decision: contain injection, tool, identity, state, approval, runtime,
  and deceptive-success failures at the narrowest credible boundary.
- Expected depth: advanced control testing; 10,000–12,000 words

## Objectives, prerequisites, and bridge

Reader constructs threat/fault cases, maps objective to mechanism/test/residual
owner, disables controls to test depth, and escalates unsupported risk.
Prerequisite: `AR-02`–`09`, basic threat modeling.

1. Chapter 13 showed where ordinary evaluation evidence is strong or missing.
2. Those gaps become explicit adversarial and fault hypotheses.
3. The system must enforce controls outside untrusted model/context channels.
4. Passing tests demonstrates bounded containment, never universal safety.
5. Chapter 15 receives control events and residual risks that must be diagnosable in operation.

## Scope and sequence

Own implementation/control tests for this agent. AI Security/Safety/privacy/legal
own formal assurance and risk acceptance; do not present OWASP as certification.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Assets/trust boundaries | Build threat/fault model | `AGE-BCLM-027`; `AGE-BSRC-022`, `023`, `037` | model | 1,400–1,700 |
| Injection/tool poisoning | Treat retrieved/tool content as untrusted | `AGE-BCLM-027`; `AGE-BSRC-024`, `030`; `AGE-CASE-004`, `011` | fixtures | 1,600–1,900 |
| Identity/state/approval attacks | Token misuse, tenant crossover, replay | both claims; `AGE-CASE-009`, `012` | negative suite | 1,500–1,800 |
| Fault and deceptive success | Timeout, partial effect, false completion | `AGE-BCLM-027`; prior cases | fault suite | 1,300–1,600 |
| Defense in depth | Scope, validation, isolation, approval, monitor, revoke | `AGE-BCLM-028`; `AGE-BSRC-007`, `024`, `030` | control matrix | 1,700–2,000 |
| Residual review | Test disabled layers, name specialist/limit | both claims; `AGE-CASE-003` | `AR-10 v1.0.0` | 1,300–1,600 |

## Procedure, mistakes, trade-offs

Name asset/boundary -> define attacker/fault/precondition -> execute path ->
state consequence -> map control objective/mechanism/enforcement -> test ->
detect/respond -> record residual limit/owner. Durable: independent enforcement
and least capability. Volatile: threat taxonomies, product monitors, protocol
advice.

Inject malicious manual requesting secret/cross-tenant reservation, poisoned
tool metadata, token passthrough, approval replay, memory contamination, timeout,
false success. Mistakes: prompt-only guardrail, checklist security, every layer
using same model, hidden residual risk, agent engineer accepting security risk.
Trade-off: control depth adds latency/friction; containment can reduce autonomy.

Current examples: OWASP Agentic Top 10/Excessive Agency, MCP security guidance,
OAuth BCP 240, and the Operator system card are dated threat/control inputs,
not a security tool recommendation or assurance result.

## Exercise, assessment, figures

- Exercise: 12-case matrix and disable-one-control experiment. Rubric: threat
  path 5, independent enforcement 6, executable test 5, residual owner 4.
- Required `F14.1`: labels `Untrusted Data`, `Validate`, `Scope`, `Approval`,
  `Effect`; alt explains malicious instruction blocked at multiple layers.
  Optional `F14.2`: shells `Sandbox`, `Tenant`, `Network`, `Budget`, `Revoke`.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `027–028`, sources `007`, `022–024`, `029`, `030`, `037`, cases
`003`, `004`, `009`, `011`, `012`. No sufficiency claim. End with `AR-10`
control-event requirements and residual limits for Chapter 15.

## Exact evidence manifest

- Claims: `AGE-BCLM-027`, `AGE-BCLM-028`
- Sources: `AGE-BSRC-007`, `AGE-BSRC-022`, `AGE-BSRC-023`, `AGE-BSRC-024`,
  `AGE-BSRC-029`, `AGE-BSRC-030`, `AGE-BSRC-037`
- Cases: `AGE-CASE-003`, `AGE-CASE-004`, `AGE-CASE-009`, `AGE-CASE-011`,
  `AGE-CASE-012`

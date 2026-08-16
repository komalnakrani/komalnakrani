# Chapter 14 Research Pack — Attack Assumptions and Inject Failure

## Frozen job and evidence question

Attack tool, identity, memory, topology, approval and runtime assumptions in a
controlled environment. Decide whether each control contains a failure and who
accepts residual risk. Output is `AR-10`.

## Claims to carry

- `AGE-BCLM-027`: indirect injection, tool manipulation, excessive agency,
  token misuse and session confusion are relevant attack surfaces.
- `AGE-BCLM-028`: prompt rules alone are not a sufficient control for privileged
  effects; independent enforcement layers are required according to risk.

## Source findings

- `AGE-BSRC-022` and `AGE-BSRC-023` provide community risk taxonomies and
  excessive-agency mitigations. They are checklists, not assurance.
- `AGE-BSRC-024` gives protocol-specific token, session, SSRF, sandbox, scope
  and audit guidance.
- `AGE-BSRC-007` provides current OAuth BCP controls.
- `AGE-BSRC-030` documents prompt-injection risk and layered product mitigations
  with residual limitations.
- `AGE-BSRC-037` supports lifecycle risk treatment and disclosure.
- `AGE-BSRC-029` is an operational monitoring case, not preventive proof.

## Threat/control record

For each case record: asset; trust boundary; attacker/fault capability;
precondition; attack path; consequence; expected containment; control objective;
mechanism; enforcement point; executable test; detection; response owner;
residual limit; specialist review; and evidence version. Cover direct/indirect
injection, malicious tool output/metadata, confused identity, token passthrough,
cross-tenant state, memory poisoning, approval replay, data exfiltration,
timeout/partial effect and deceptive success.

## FieldOps Relay lab

A synthetic manual note instructs the agent to reveal a secret and reserve for
another tenant. Independent parsing/provenance, context instruction separation,
tool scope, tenant authorization, exact approval, egress denial and monitoring
must each have a test. Disable one control at a time to show defense-in-depth
without claiming invulnerability.

## Phase 07 blueprint seed

Sequence: threat model -> injection versus ordinary fault -> capability/identity
controls -> memory/tool attacks -> fault injection -> residual-risk review.
Required `F14.1`; `F14.2` useful. `AGE-CASE-011` generates tests only; formal
security/safety sign-off remains outside the role.

## Gaps to keep visible

Threat catalogs are incomplete and change rapidly. Passing a suite is not proof
against unknown attacks, collusion or real-world adversaries. Do not publish
exploitable secrets or pretend the synthetic sandbox is a penetration test.

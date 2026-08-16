# Chapter 18 Research Pack — Interoperate Without Surrendering Semantics

## Frozen job and evidence question

Place tool/context and remote-agent protocols behind local contracts. Decide
what MCP/A2A can standardize and which capability, authority, effect and
completion semantics must remain local. Output starts `AR-13`.

## Claims to carry

- `AGE-BCLM-035`: MCP and A2A occupy distinguishable tool/context versus
  remote-agent/task layers.
- `AGE-BCLM-036`: adapters preserve and locally enforce identity, authority,
  effect, timeout, cancellation, version and evidence semantics.

## Source findings

- `AGE-BSRC-004` is the MCP 2025-11-25 tool specification; annotations are not
  automatically trusted.
- `AGE-BSRC-006`, `AGE-BSRC-007`, `AGE-BSRC-008`, `AGE-BSRC-024` and
  `AGE-BSRC-044` establish current transport authorization/security constraints.
- `AGE-BSRC-031` and normative schema `AGE-BSRC-039` define A2A v1.0.0 agent
  discovery, tasks, messages, artifacts, status and bindings.
- `AGE-BSRC-032` explains protocol layers from a maintainer perspective.
- `AGE-BSRC-038` is only a concept paper for agent identity concerns.

## Adapter contract

Pin protocol edition/tag/commit; remote identity and endpoint; discovered
capability and trust source; local capability mapping; input/output/artifact
schemas; principal/delegation mapping; audience/scope; task/status mapping;
timeout/retry/cancel semantics; effect class; approval requirement; ownership;
evidence/correlation; compatibility test; revocation; and fallback. Discovery is
a claim to verify, not permission to invoke.

## FieldOps Relay interoperability lab

Map local read-only manual tool to MCP conceptually and a remote synthetic
inventory specialist to A2A. Change the remote capability metadata, output
schema and cancellation behavior. The compatibility jig must block or quarantine
the adapter. No network connection or external agent is required by default.

## Phase 07 blueprint seed

Sequence: protocol layer map -> MCP tool adapter -> A2A task adapter -> identity/
authority preservation -> discovery/version failure -> compatibility test.
Required `F18.1`; `F18.2` useful. Pin versions; describe MCP 2026-07-28 only as
an RC if mentioned.

## Gaps to keep visible

Interoperability is not semantic equivalence, trust or safety. Both ecosystems
move quickly. Publication must re-verify current stable editions; remote systems
remain independently operated and partially opaque.

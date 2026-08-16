# Chapter 18 Blueprint — Interoperate Without Surrendering Semantics

## Identity and target

- Part VI — Evolve Without Losing Control
- Primary `AGE-K11`, secondary `AGE-K03`, `AGE-K05`, `AGE-K06`, `AGE-K09`
- Dossier: start `AR-13 v0.1.0`
- Purpose/decision: determine what MCP/A2A/custom adapters standardize and what
  capability, identity, effect, authority, ownership, and evidence stay local.
- Expected depth: advanced interoperability; 9,000–11,000 words

## Objectives, prerequisites, and bridge

Reader maps local contracts to protocols, pins versions, verifies discovery,
preserves authority, rejects incompatible remote capabilities, and distinguishes
wire conformance from semantic trust. Prerequisites: `AR-04`, `05`, `07`, `08`,
`12`, protocol/API literacy.

1. Chapter 17 bounded the released FieldOps system by local contracts and evidence.
2. Protocol adoption now threatens to hide or weaken those semantics behind remote metadata.
3. MCP and A2A can standardize exchanges but cannot grant application authority.
4. Adapters therefore translate and verify while local gates remain authoritative.
5. Chapter 19 receives pinned adapters and compatibility tests to replay through change.

## Scope and sequence

Own local adapter semantics and compatibility evidence. Platform/architecture/
procurement own broader service choice; IAM/security own trust infrastructure;
remote agent remains independently operated.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Protocol layer map | MCP tool/context versus A2A remote task/artifact | `AGE-BCLM-035`; `AGE-BSRC-004`, `031`, `032`, `039` | concept map | 1,300–1,600 |
| MCP adapter | Tool schema/result/auth and untrusted annotations | both claims; `AGE-BSRC-004`, `006`, `024`, `044`; `AGE-CASE-009` | adapter contract | 1,500–1,800 |
| A2A adapter | Discovery, Task, Message, Artifact, status/cancel | `AGE-BCLM-035`; `AGE-BSRC-031`, `039`; `AGE-CASE-010` | mapping | 1,500–1,800 |
| Preserve authority/effects | Local principal, scope, approval, owner, timeout | `AGE-BCLM-036`; `AGE-BSRC-007`, `038` | enforcement map | 1,300–1,600 |
| Capability/version drift | Verify metadata/schema/cancel behavior | `AGE-BCLM-036`; both cases | compatibility jig | 1,300–1,600 |
| FieldOps local simulation | Block changed remote inventory specialist | all; `AGE-CASE-012` | `AR-13 v0.1.0` | 1,200–1,500 |

## Procedure, currentness, mistakes

Pin edition/tag/commit -> verify endpoint/identity -> discover capability as
claim -> map schema/task/artifact -> map delegation/audience/scope -> preserve
effect/approval/owner -> test timeout/cancel/version -> quarantine mismatch ->
record evidence. Durable: local semantic enforcement. Volatile: MCP/A2A specs,
bindings, discovery metadata. MCP July 2026 is RC; 2025 Tasks experimental; A2A
must pin v1.0.0 tag/commit rather than main.

Failure injection: stale Agent Card, output schema drift, changed effect class, timeout,
cancellation ambiguity, malicious metadata. Mistakes: protocol equals trust,
discovery equals permission, remote success equals local completion, main branch
as stable. Trade-off: standards reduce integration friction but adapters and
verification add maintenance.

## Exercise, assessment, figures

- Exercise: map local manual tool and remote inventory specialist, then classify
  six compatibility changes. Rubric: layer accuracy 4, local semantics 7,
  version/test 5, residual limits 4.
- Required `F18.1`: adapters labels `Local Contract`, `MCP`, `A2A`, `Local
  Authority`. Optional `F18.2`: labels `Advertised`, `Verified`, `Compatible`,
  `Blocked`. Alt stresses metadata is a claim.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `035–036`, sources `004`, `006–008`, `024`, `031`, `032`, `038`,
`039`, `044`, cases `009`, `010`, `012`. Re-verify stable editions and pin
immutable refs. End with `AR-13 v0.1.0` component/version inventory for Chapter 19.

## Exact evidence manifest

- Claims: `AGE-BCLM-035`, `AGE-BCLM-036`
- Sources: `AGE-BSRC-004`, `AGE-BSRC-006`, `AGE-BSRC-007`, `AGE-BSRC-008`,
  `AGE-BSRC-024`, `AGE-BSRC-031`, `AGE-BSRC-032`, `AGE-BSRC-038`,
  `AGE-BSRC-039`, `AGE-BSRC-044`
- Cases: `AGE-CASE-009`, `AGE-CASE-010`, `AGE-CASE-012`

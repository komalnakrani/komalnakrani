# Chapter 05 Blueprint — Treat Tools as Capabilities, Not Functions

## Identity and production target

- Part II; primary `AGE-K03`, secondary `AGE-K02`, `AGE-K05`, `AGE-K07`, `AGE-K09`
- Dossier: create `AR-04 v1.0.0`
- Purpose/decision: determine whether each capability is narrow, legible,
  authorized, testable, and recoverable enough to expose.
- Expected depth: advanced implementation; target 9,000–11,000 words

## Objectives, prerequisites, and five-sentence bridge

Reader can classify capability effects, write model-facing and enforcement
contracts, validate observations/arguments, define errors/retryability,
reconcile ambiguous effects, and build deterministic doubles. Prerequisites:
`AR-02`, `AR-03`, typed APIs, distributed failure basics, authorization.

1. FieldOps now has a contract and inspectable loop.
2. It still has no safe means to observe or change the synthetic world.
3. Each tool becomes a bounded capability with explicit effect semantics.
4. The harness consumes only validated results and effect records.
5. Chapter 06 receives `AR-04` and binds every invocation to identity and delegation.

## Scope and sequence

Own capability catalog, schemas, errors, effect classes, idempotency,
reconciliation, compensation limits, and doubles. Tool-service internals remain
with their software/platform owner; security owns formal review; no generic SQL,
shell, browser, or arbitrary API instruction.

| Section | Production purpose | Evidence and artifact | Words |
| --- | --- | --- | ---: |
| Tool as contract | Distinguish callable function from delegated capability | `AGE-BCLM-009`; `AGE-BSRC-004`, `005`; catalog skeleton | 1,200–1,500 |
| Legibility and schemas | Name, describe, validate input/output and returned context | `AGE-BCLM-009`; `AGE-CASE-002`; schema suite | 1,300–1,600 |
| Effect and authority classes | Separate read/compute/propose/communicate/effect | `AGE-BCLM-010`; `AGE-BSRC-024`; effect map | 1,200–1,500 |
| Errors and ambiguous success | Define timeout, retry, key, reconciliation, compensation | `AGE-BCLM-010`; `AGE-BSRC-014`; `AGE-CASE-005` | 1,600–1,900 |
| FieldOps catalog | Design five narrow capabilities and reject master keys | both claims; `AGE-CASE-012` | `AR-04` contracts | 1,600–1,900 |
| Contract evaluation | Selection, args, duplicate, scope, context burden | `AGE-BSRC-005`; all cases | `AR-04 v1.0.0` | 1,100–1,300 |

## Skill procedure, examples, and evidence

Specify stable ID/version -> intent -> effect class -> schemas -> preconditions ->
principal/scope -> freshness/timeout -> errors/retryability -> idempotency key ->
reconciliation -> compensation -> audit/effect record -> redaction -> double ->
failure fixtures -> deprecation. Current example: MCP 2025-11-25 Tools, whose
annotations remain untrusted unless server trust is established. Durable:
capability semantics and downstream enforcement. Volatile: MCP editions,
framework decorators, provider tool formats.

FieldOps tools: `read_equipment`, `search_manual`, `check_inventory`,
`propose_reservation`, `reserve_part`. Inject successful reservation with lost
response, same key/different intent, malformed structured result, stale read,
denied scope, failed compensation. Diagnose validation before model reasoning.

Common mistakes: broad tool, description-as-control, retrying every error,
calling compensation rollback, trusting annotations, mixing read/effect. Trade-
offs: narrower tools improve control but increase catalog size; richer context
helps selection but consumes budget and can leak data.

## Exercise, assessment, and figures

- Exercise: author five contracts plus ambiguous-effect decision table.
  Assessment 20 points: intent/schema 5, authority/effect 5, failure semantics 6,
  tests/limits 4. Pass requires timeout-after-effect reconciliation.
- Required `F05.1`: cabinet; labels `Read`, `Compute`, `Propose`, `Effect`.
  Required `F05.2`: ambiguous effect; labels `Committed`, `Timeout`, `Retry`,
  `Ledger`. Alt text explains duplicate prevention; caption carries exact logic.
  Later ImageGen raster only.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use exact claims `009–010`, sources `004`, `005`, `014`, `024`, cases `002`,
`005`, `012`. Do not claim idempotency means exactly once or compensation erases
effects. End with `AR-04 v1.0.0` identity/scope fields for Chapter 06. Re-verify
MCP version/security docs.

## Exact evidence manifest

- Claims: `AGE-BCLM-009`, `AGE-BCLM-010`
- Sources: `AGE-BSRC-004`, `AGE-BSRC-005`, `AGE-BSRC-014`, `AGE-BSRC-024`,
  `AGE-BSRC-034`
- Cases: `AGE-CASE-002`, `AGE-CASE-005`, `AGE-CASE-012`

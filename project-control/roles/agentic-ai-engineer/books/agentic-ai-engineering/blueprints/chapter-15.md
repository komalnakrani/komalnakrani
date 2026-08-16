# Chapter 15 Blueprint — Trace Runs Without Turning Logs Into Surveillance

## Identity and target

- Part V — Operate What Acts
- Primary `AGE-K10`, secondary `AGE-K02`, `AGE-K04`, `AGE-K09`
- Dossier: start `AR-11 v0.1.0`
- Purpose/decision: find the responsible transition across model, tool, state,
  approval, and effect without collecting sensitive payloads by default.
- Expected depth: advanced observability/privacy-aware operation; 8,000–10,000 words

## Objectives, prerequisites, and bridge

Reader designs causal correlation, minimal safe fields, evidence references,
redaction/access/retention tests, and a layer-first investigation. Prerequisite:
run/event schemas and `AR-10` control events.

1. Chapter 14 produced controls and residual failures.
2. Operations now needs to locate which transition caused a symptom.
3. Full prompts and tool payloads would increase privacy and security risk.
4. The trace therefore records causal structure and controlled evidence references.
5. Chapter 16 receives trustworthy signals and gaps from `AR-11 v0.1.0` for budgeting.

## Scope and sequence

Own agent trace semantics/run explorer and local minimization tests. Platform
owns telemetry service; privacy/security/legal own policy and access authority.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Diagnostic question first | Separate user symptom from responsible cause | `AGE-BCLM-030`; `AGE-BSRC-027`; signal goals | 1,000–1,300 |
| Trace graph/schema | Run/action/state/approval/effect correlation | `AGE-BCLM-029`; `AGE-BSRC-025`, `040` | schema | 1,500–1,800 |
| Minimal data/access | Redaction, sealed references, retention | both claims; `AGE-CASE-003` | policy/tests | 1,400–1,700 |
| Current implementations | Bound OTel/OpenAI/AWS examples and stability | `AGE-BCLM-029`; `AGE-BSRC-025`, `026`, `040` | adapter notes | 1,100–1,300 |
| FieldOps investigation | Backtrack wrong reservation | `AGE-BCLM-030`; `AGE-CASE-012` | queries/run explorer | 1,500–1,800 |
| Gap audit | Missing IDs, overcollection, access violations | all | `AR-11 v0.1.0` | 1,100–1,300 |

## Procedure, failures, trade-offs

State diagnostic question -> correlate run/attempt/event/span/effect -> inspect
state transitions and policy results -> retrieve privileged evidence only when
authorized -> record conclusion/uncertainty -> update signal. Durable: causal
IDs and minimization. Volatile: OTel GenAI attribute stability, SDK tracing,
vendor dashboards.

Inject missing effect ID, broken parent link, full prompt collection, leaked
credential, cross-tenant query, misleading trace. Mistakes: log everything,
trace equals truth, model latency only, no effect record, permanent retention.
Trade-off: minimization reduces forensic detail; richer evidence increases risk.

## Exercise, assessment, figures

- Exercise: diagnose three symptoms using redacted event sets and propose the
  minimum added field. Rubric: causal chain 6, minimization 5, access/retention 5,
  uncertainty 4.
- Required `F15.1`: transit map labels `Model`, `Tool`, `State`, `Approval`,
  `Effect`; sealed payloads. Optional `F15.2`: backward path labeled `Symptom`,
  `Effect`, `Action`, `State`, `Decision`. Alt never exposes actual content.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `029–030`, sources `025–027`, `029`, `040`, cases `003`, `012`.
Pin semantic-convention version and state sensitive-data limits. End with
`AR-11 v0.1.0` signal catalog for Chapter 16.

## Exact evidence manifest

- Claims: `AGE-BCLM-029`, `AGE-BCLM-030`
- Sources: `AGE-BSRC-025`, `AGE-BSRC-026`, `AGE-BSRC-027`, `AGE-BSRC-029`,
  `AGE-BSRC-040`
- Cases: `AGE-CASE-003`, `AGE-CASE-012`

# Volume 1 Chapter 7 Blueprint — Make Outputs Typed and Bounded

## Frozen identity and dependency

- Chapter: `V1-07`; milestone: `MD-03`; domains: `LLME-K01`, `LLME-K04`, `LLME-K09`, `LLME-K10`.
- Prerequisite: baseline manifest and prompt/message contract.
- Forward dependency: Chapter 8 allocates context; later retrieval must populate provenance fields.
- Reader transformation: from consuming prose to enforcing a validated proposal interface with explicit failure states.

## Measurable objectives

The reader can distinguish constrained generation, parse, schema, semantic/provenance, and authorization validation; version a schema; define bounded retry/fallback; and prove that valid syntax does not establish factual or authorized content.

## Concept sequence and skill procedure

Output contract → constrained decoding where available → parser → structural schema → semantic/provenance checks → authority gate → repair/abstain/escalate/fail closed. Procedure: define types and invariants; create invalid/unsupported fixtures; run each gate; cap retries; preserve errors; prevent unvalidated fields from reaching consequential actions.

## Mosaic Desk transition and failure injection

- Incoming: prompt/message outputs from Chapter 6.
- Failure injection: schema-valid JSON invents a warranty authorization and cites a nonexistent source ID.
- Outgoing: versioned proposal schema, validator chain, uncertainty/citation fields, error taxonomy, fallback table, and completed `MD-03` typed baseline.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C07-CL01` | `LLME-BSRC-013` | Structured-output features have provider/schema-subset limits. |
| `V1-C07-CL02` | `LLME-BSRC-008`, `LLME-BSRC-013`, `LLME-BSRC-026` | Valid form proves neither truth nor safe authority. |
| `V1-C07-CL03` | `LLME-BSRC-008`, `LLME-BSRC-011` | Retry/fallback policies still require tested bounds and owners. |

Use `LLME-CASE-014` for untrusted-output/authority risk only.

## Dual path, authority, and non-scope

Managed paths may expose native constrained output; open-weight paths may use grammar/runtime constraints. Both must pass common postconditions. Product owns permissible effects; security/software own authorization enforcement. Non-scope: database design, tool execution, or claims that JSON eliminates hallucination.

## Practice and assessment

Exercise: Classify failures by gate and implement a paper state machine for valid, repair, abstain, escalate, fail closed. Pass when all injected invalid/unsupported cases reach the specified state without acquiring product authority.

## Figures

- `V1-F07.1` — Intent: support the chapter learner decision. Composition: generated output crosses typed fields, structural and semantic gates before display; labels “parse,” “schema,” “semantic,” “display.” Alt: prose is progressively constrained and validated. Evidence role: claims 01–02.
- `V1-F07.2` — Intent: support the chapter learner decision. Composition: five bounded branches with distinct shapes; labels “valid,” “repair,” “abstain,” “escalate,” “fail closed.” Alt: invalid or uncertain output follows explicit terminal paths. Evidence role: claim 03 and fallback artifact.

## Durability, prohibitions, and Phase 08 handoff

Durable: validation ladder, fail-closed authority, schema versioning. Volatile: native constrained-output APIs and supported schema syntax. Reverify docs. Prohibit parseable-equals-correct and retry-until-valid. Phase 08 receives schema anatomy, fixtures, and fallback decision table.

# V1 Chapter 11 Research Pack — Assemble Context With Provenance

## Frozen identity

- Milestone: MD-05.
- Purpose: transform retrieved candidates into an attributable, bounded, and trust-labeled evidence bundle.
- Reader outcome: preserve source identity, version, permissions, and quotations through context assembly.

## Evidence and claims

`V1-C11-CL01` (`LLME-BSRC-019`, `026`) supports grounding outputs in retrieved evidence with provenance. `V1-C11-CL02` (`008`, `017`, `026`) supports treating retrieved text as untrusted and separating it from instructions. `V1-C11-CL03` (`016`, `012`) supports deliberate ordering and formatting because long-context use is position-sensitive.

Durable context-assembly fields: source ID, revision/date, authority class, tenant/access decision, excerpt span, rank/score provenance, trust label, and token cost. Citation formatting APIs and maximum windows are volatile adapters.

## Mosaic Desk scenario

Assemble policy excerpts beside relevant email spans. Failure injection: one retrieved page contains an instruction-like sentence and another is a superseded version. The assembler must retain both provenance and authority metadata, prefer the current authorized version by policy, and delimit content as data. Use `LLME-CASE-002`, `003`, and `014` only for the position, retrieval, and trust-boundary lessons respectively.

## Limits and gaps

- A citation can be well formatted yet fail to entail the generated claim.
- Source authority is a domain decision, not a similarity score.
- Compression or deduplication can remove qualifying language.
- The LLM engineer designs evidence transport and validation; domain owners resolve contradictory policy.

## Phase 07 blueprint handoff

Teach context records, trust labels, ordering, deduplication, and citation entailment. Skill check: audit a context bundle for provenance loss. Sources: `008`, `012`, `016`, `017`, `019`, `026`; cases: `002`, `003`, `014`. Figures: provenance-carrying context blocks and trust-zone assembly line. Non-scope: policy adjudication or claims that citations guarantee truth.

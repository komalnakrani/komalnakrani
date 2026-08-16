# Chapter 08 State - Budget Context Deliberately

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-04` complete.
- Dossier artifacts: source/trust inventory, budget ledger, output reserve, priority classes, ordering/compression rules, omission trace, position and five failure-state tests, cache measurement requirements.
- Production claims: `CLM-022` through `CLM-024` map exactly to `V1-C08-CL01` through `V1-C08-CL03`.
- Bounded case: `LLME-CASE-002`, used only for position sensitivity in studied setups and requiring current-candidate replay.
- Figure anchors: `V1-F08.1`, `V1-F08.2`; assets pending root ImageGen.
- Companion: context ledger and `context-packer.mjs`; four Chapter 8 tests.

## Locked boundary

Nominal capacity is not reliable use. Unauthorized records never enter context; mandatory evidence cannot disappear silently; compression and caching preserve provenance, scope, and invalidation evidence.

## Non-repeat instruction

Later chapters consume the context budget and omission trace. They do not treat longer input, ordering, or cache behavior as universal or stable.

## Exact next action

Decide which Mosaic claims require external, updateable, attributable evidence and freeze source authority, permission, freshness, evidence-unit, and no-evidence requirements before retrieval implementation.

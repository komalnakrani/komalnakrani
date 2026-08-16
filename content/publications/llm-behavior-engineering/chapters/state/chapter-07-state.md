# Chapter 07 State - Make Outputs Typed and Bounded

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-03` typed baseline complete.
- Dossier artifacts: proposal schema v0.1.0, parse/structural/semantic/provenance/authorization ladder, validator events, error taxonomy, bounded retry, valid/repair/abstain/escalate/fail-closed table.
- Production claims: `CLM-019` through `CLM-021` map exactly to `V1-C07-CL01` through `V1-C07-CL03`.
- Bounded case: `LLME-CASE-014`, used only for untrusted-output and authority risk; no prevention claim.
- Figure anchors: `V1-F07.1`, `V1-F07.2`; assets pending root ImageGen.
- Companion: output schema/fixtures and `proposal-validator.mjs`; four Chapter 7 tests.

## Locked boundary

Schema and constrained generation improve form only within supported subsets. Every candidate remains untrusted until semantic, provenance, and authorization gates pass, and even a valid result remains a proposal with no effect.

## Non-repeat instruction

Later chapters use the typed result and terminal states without equating parseability, citations, or schema validity with truth, permission, or authority.

## Exact next action

Allocate control, evidence, history, and output reserve through a traceable context contract that cannot silently remove required evidence.

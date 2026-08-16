# Chapter 12 Research Pack — Build a Representative Task Environment

## Frozen job and evidence question

Create the environment in which claims about FieldOps Relay can be tested:
initial state, tools, users, hidden constraints, policies, perturbations,
consequence segments and held-out tasks. Output starts `AR-09`.

## Claims to carry

- `AGE-BCLM-023`: environment, tools, policy, users and budgets condition agent
  evaluation results.
- `AGE-BCLM-024`: a task-set card must disclose the system and omissions behind
  each claim.

## Source findings

- `AGE-BSRC-018` demonstrates heterogeneous interactive environments and warns
  implicitly against treating capability as environment-free.
- `AGE-BSRC-019` combines policies, users, tools and database state and checks
  more than natural-language output.
- `AGE-BSRC-020` provides current primary provider guidance on task construction,
  trials, graders and transcript inspection.
- `AGE-BSRC-021` emphasizes harness fidelity, access, budgets, validity and
  reproducibility.
- `AGE-BSRC-036` supports contextual mapping and documented measurement limits.

## Environment card

Record generator/version/seed; initial authoritative state; task distribution;
user simulator limits; available tool versions/scopes/errors/latencies; hidden
constraints; policy/authority; success and failure predicates; consequence
class; time/turn/tool/cost budgets; perturbations; expected recovery; train/dev/
held-out split; contamination check; exclusions; and production-transfer limits.

## FieldOps Relay environment

Generate synthetic equipment, issues, manuals, inventory, technicians, slots,
users, approvals and incidents. Perturb stale manual, contradictory data,
permission denial, timeout, partial effect, approval delay, duplicate event and
dependency slowdown. Do not simulate physical equipment control or claim safety
realism. Satellite tasks test code, IT access, remedy, research and a document
workflow where an agent should be rejected.

## Phase 07 blueprint seed

Sequence: harness as part of the claim -> task anatomy -> data generation ->
policy/user/tool realism -> held-out/perturbation design -> environment card
audit. Required `F12.1`; `F12.2` useful to contrast toy and production-like
worlds. `AGE-CASE-006` and `AGE-CASE-007` are methodology cases, not score tables.

## Gaps to keep visible

Synthetic users and data omit organizational behavior, adversaries, legal
constraints and physical operations. Representative means representative of a
bounded claim, not production equivalence.

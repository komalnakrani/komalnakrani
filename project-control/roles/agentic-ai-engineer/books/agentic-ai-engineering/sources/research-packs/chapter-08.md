# Chapter 08 Research Pack — Start With One Agent

## Frozen job and evidence question

Build a measurable single-agent vertical slice using the existing harness,
capabilities, authority and state contracts. Decide what complexity can be
removed before adding agents. Output starts `AR-07`.

## Claims to carry

- `AGE-BCLM-015`: measure a single-agent baseline before routing/multi-agent
  orchestration.
- `AGE-BCLM-016`: the OpenAI SDK is one bounded example of an abstraction that
  exposes loop, tool, handoff, session and trace controls.

## Source findings

- `AGE-BSRC-001` and `AGE-BSRC-002` favor incremental and simple patterns.
- `AGE-BSRC-003` shows one implemented agent loop and configuration surface;
  the book must not depend on it.
- `AGE-BSRC-005` connects tool organization/descriptions with agent performance.
- `AGE-BSRC-010` connects context curation to long-horizon behavior.
- `AGE-BSRC-013` and `AGE-BSRC-042` document multi-agent options, but neither
  removes the need for a baseline.

## Baseline specification

Use one deterministic model double, one run owner, local tools and explicit
policy variables. Measure task completion, completion predicate, allowed
actions, unnecessary calls, invalid arguments, state correctness, effect
correctness, recovery, elapsed steps, simulated token/tool cost and trace
coverage. Freeze task set and component versions so Chapter 9 changes only the
topology.

## FieldOps Relay tests

Vertical slice: read issue/equipment, locate valid manual passage, ask one
missing-information question, check inventory and technician slot, prepare a
proposal, await bound approval, reserve synthetically and verify. Faults:
missing manual, stale availability, typed tool error, ambiguous effect and
cancellation. No live provider is required.

## Phase 07 blueprint seed

Sequence: baseline as scientific control -> one-agent architecture -> policy
variables/tool grouping -> vertical slice -> diagnostic failures -> freeze
results for Chapter 9. Required `F08.1`. Provider SDKs may appear in a short
adapter comparison with edition date, not as the chapter's spine.

## Gaps to keep visible

One agent is not always simpler if it accumulates incompatible privileges or an
unmanageable context. Those are hypotheses for separation, not permission to
skip measurement or local authority boundaries.

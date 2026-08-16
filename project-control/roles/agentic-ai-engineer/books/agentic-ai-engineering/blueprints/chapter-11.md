# Chapter 11 Blueprint — Design Human Checkpoints That Can Actually Work

## Identity and target

- Part III; primary `AGE-K05`, `AGE-K07`, `AGE-K09`
- Dossier: complete `AR-08 v1.0.0`
- Purpose/decision: place a timely, evidence-rich, authorized human checkpoint
  and define rejection, expiry, takeover, cancellation, and resume.
- Expected depth: advanced human-authority workflow; 8,000–10,000 words

## Objectives, prerequisites, and bridge

Reader distinguishes request, review, confirmation, approval, intervention,
takeover, formal authorization; designs reviewer evidence; resumes safely after
delay/change. Prerequisite: `AR-05`, `AR-08 v0.1.0`.

1. Chapter 10 made machine execution durable across interruptions.
2. A human pause is now a long-running state with its own authority and timing failures.
3. The reviewer needs a bounded proposal and validated evidence, not chain-of-thought.
4. Approval must expire and state must be revalidated before effect.
5. Chapter 12 receives a complete executable system including human checkpoints to represent in evaluation.

## Scope and sequence

Own checkpoint types, evidence view, queue/expiry, takeover, resume contract.
Human factors, staffing/labor policy, legal consent and formal domain authority
remain with appropriate owners.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Seven checkpoint types | Match interaction to authority | `AGE-BCLM-022`; `AGE-BSRC-009`, `030`, `043` | type matrix | 1,200–1,500 |
| Interrupt/resume | Serialize, approve/reject, resume | `AGE-BCLM-021`; `AGE-BSRC-003`, `017`, `041` | state transitions | 1,300–1,600 |
| Reviewer evidence | Exact proposal, consequence, alternatives, uncertainty | both claims; `AGE-CASE-004` | evidence schema | 1,300–1,600 |
| Timing/expiry/revalidation | Handle changed state and unavailable reviewer | both claims | queue/SLA policy | 1,200–1,500 |
| Takeover/cancel/escalate | Preserve one accountable owner | `AGE-BCLM-022`; `AGE-CASE-009` | runbook | 1,100–1,300 |
| FieldOps drill | Delay, wrong authority, deploy, rejection, takeover | all; `AGE-CASE-012` | `AR-08 v1.0.0` | 1,500–1,800 |

## Procedure, mistakes, trade-offs

Classify checkpoint -> name decision/authority -> bind proposal -> assemble
minimal evidence -> set expiry/SLA -> pause durably -> record disposition ->
revalidate state/scope -> resume or takeover -> audit. SDK HITL and MCP
elicitation are current primitives, not authority systems. Durable: checkpoint
meaning and binding. Volatile: SDK resume APIs and product confirmation UX.

Inject approval after availability changed, expired token, unauthorized
reviewer, no response, incompatible deployment, rejection, takeover. Mistakes:
generic “human in loop,” confirmation fatigue, exposing chain-of-thought,
approval without exact proposal, executing before response. Trade-off: human
control versus queue latency/attention; high friction can create bypass behavior.

## Exercise, assessment, figure

- Exercise: build type matrix and resolve six pending runs. Rubric: type 4,
  authority 5, evidence 4, timing/revalidation 4, takeover 3.
- Required `F11.1`: identity-preserving Komal reviewer. Essential labels:
  `Proposal`, `Evidence`, `Approve`, `Reject`, `Take Over`. Alt states reviewer
  does not control the system magically. Later ImageGen with original-photo
  references only; no asset now.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `021–022`, sources `003`, `009`, `017`, `030`, `041`, `043`, cases
`004`, `009`, `012`. Keep formal authority caveat. End with complete `AR-08`
checkpoint/failure fixtures for Chapter 12's environment.

## Exact evidence manifest

- Claims: `AGE-BCLM-021`, `AGE-BCLM-022`
- Sources: `AGE-BSRC-003`, `AGE-BSRC-009`, `AGE-BSRC-017`, `AGE-BSRC-030`,
  `AGE-BSRC-041`, `AGE-BSRC-043`
- Cases: `AGE-CASE-004`, `AGE-CASE-009`, `AGE-CASE-012`

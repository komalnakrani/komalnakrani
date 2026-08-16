# Chapter 11 Research Pack — Design Human Checkpoints That Can Actually Work

## Frozen job and evidence question

Distinguish information request, review, confirmation, approval, intervention,
takeover and formal authorization. Place a human where the decision is timely,
informed and operationally reachable. Complete `AR-08`.

## Claims to carry

- `AGE-BCLM-021`: SDK/protocol mechanisms can pause, serialize and resume work
  around approval.
- `AGE-BCLM-022`: checkpoint types have different evidence, authority and timing
  requirements and must not be collapsed into “human in the loop.”

## Source findings

- `AGE-BSRC-017` demonstrates tool approval requests, rejection and resume from
  serializable state. `AGE-BSRC-003` adds run-state resumption.
- `AGE-BSRC-009` specifies user response states and sensitive-data constraints
  for elicitation; elicitation is not formal authorization.
- `AGE-BSRC-030` and `AGE-BSRC-043` document confirmation/active-supervision
  patterns and residual product risks.
- `AGE-BSRC-041` exposes experimental long-running task states but cannot prove
  checkpoint durability or authority.

## Checkpoint contract

Fields: checkpoint type; trigger; exact decision; proposal/effect hash; evidence
summary and drill-down references; uncertainty; consequence; alternatives;
recommended disposition; named reviewer/authority; SLA/expiry; delegation and
conflict rules; approve/reject/modify/escalate/takeover actions; cancelability;
resume compatibility; audit record; and fallback if no response.

## FieldOps Relay tests

Show an exact synthetic part/slot proposal to the reviewer; hide irrelevant
model chain-of-thought and expose validated facts, uncertainty and consequence.
Inject delayed approval after availability changed, expired approval, reviewer
without authority, unavailable reviewer, incompatible checkpoint after deploy,
rejection and operator takeover. Execution must revalidate state after approval.

## Phase 07 blueprint seed

Sequence: seven checkpoint types -> authority/evidence matrix -> interruption
and resume -> reviewer interface -> timeout/takeover -> FieldOps drill. Required
visual `F11.1` is a Komal review scene only because human authority is the
learning relationship; it must use original-photo identity references and
ImageGen raster production later. Exact labels remain outside the image.

## Gaps to keep visible

Human review can be unavailable, inattentive, overloaded or unauthorized. It is
not a safety proof. Formal authorization rules, labor design and human-factors
validation require the appropriate specialists.

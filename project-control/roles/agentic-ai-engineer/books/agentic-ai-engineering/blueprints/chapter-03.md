# Chapter 03 Blueprint — Contract the Goal, Actions, and Authority

## Identity and production target

- Part: I — Decide What May Act
- Competencies: `AGE-K01` primary; `AGE-K05`, `AGE-K09` secondary
- Dossier milestone: create `AR-02 v1.0.0`
- Purpose: convert an approved autonomy ceiling into a machine-checkable
  goal/action/authority contract.
- Professional decision: which actions FieldOps may read, propose, execute, or
  never attempt, under which principal and completion evidence.
- Expected depth: advanced contract/schema chapter
- Target manuscript range: 8,000–10,000 words

## Observable objectives

The reader can define completion, non-goals, consequence classes, action
classes, budgets, approval, expiry, uncertainty, stop/escalation, and evidence;
separate confirmation from formal authority; and reject mutated proposals.

## Prerequisites and five-sentence dossier bridge

Prerequisites: `AR-01 v0.2.0`, typed schema literacy, authorization concepts, and
risk/consequence classification.

1. Chapter 02 approved only a maximum autonomy level.
2. FieldOps still lacks a contract that turns “resolve the request” into observable work.
3. This chapter binds goals to allowed actions and named authority before tools exist.
4. The contract becomes the invariant checked by harness, tools, approvals, evaluation, and release.
5. Chapter 04 receives `AR-02 v1.0.0` as executable state-transition policy.

## Owned concepts and explicit non-scope

Own: task contract schema, action/effect classes, completion evidence,
stop/escalation, local approval binding requirements. Product/domain owners set
goals and consequence tolerances; IAM/security implement enterprise identity;
legal/safety/privacy determine formal acceptability; Chapter 06 implements
identity/delegation mechanics.

## Production sequence

| Section | Purpose | Claims/sources/cases | Artifact delta | Words |
| --- | --- | --- | --- | ---: |
| 1. Autopsy the vague brief | Find missing completion, effect, authority | `AGE-BCLM-005`; `AGE-BSRC-001`, `023`, `036`, `037`; `AGE-CASE-012` | draft missing-field report | 900–1,100 |
| 2. Goal and completion | Define observable predicate and non-goals | `AGE-BCLM-005` | contract goal block | 1,200–1,500 |
| 3. Action and consequence | Separate read, compute, propose, communicate, effect, prohibited | `AGE-BCLM-005`; `AGE-BSRC-023`, `037` | action matrix | 1,300–1,600 |
| 4. Authority and confirmation | Separate proposal/review/authorization/execution/verification | `AGE-BCLM-006`; `AGE-BSRC-030`, `043`; `AGE-CASE-004` | authority/approval block | 1,400–1,700 |
| 5. Budgets, stop, uncertainty | Make limits and escalation deterministic | both claims; `AGE-BSRC-036` | policy assertions | 1,100–1,400 |
| 6. Mutation lab | Replay/expiry/prohibited-action tests | both claims; `AGE-CASE-012` | signed local fixture set and `AR-02 v1.0.0` | 1,500–1,800 |

## Skill procedure and implementation content

1. Define beneficiary, principal, goal, evidence-backed completion, non-goals.
2. Enumerate actions and classify consequence/effect.
3. Attach preconditions, budgets, uncertainty, stop and escalation.
4. Assign approver authority and exact proposal-binding fields.
5. Specify expiry, cancellation, revalidation, audit and terminal disposition.
6. Compile contract to deterministic assertions.
7. Mutate proposal, principal, scope, run and time; every mutation must fail.

Provider-neutral schema/pseudocode should show `TaskContract`, `ActionRule`,
`ApprovalRequirement`, and `CompletionPredicate`. Current tool examples are
Operator/ChatGPT agent confirmations as bounded cases only. Durable: effect
authority and completion are explicit. Volatile: vendor confirmation UX and
current NIST/provider guidance.

## Scenario, failures, mistakes, trade-offs

FieldOps may read synthetic records and propose a plan; one exact synthetic
reservation requires approval. It may never control equipment, diagnose safety,
contact a real person, or change a real system. Inject altered part/slot after
approval, approval replay, expired approval, missing completion, budget overrun,
and prohibited safety diagnosis. Common mistakes: equating user request with
unbounded delegation, hiding non-goals, approving a category rather than an
effect, and letting the model enforce its own limits. Trade-off: contract
specificity improves control but can become brittle; expose policy variables
without vague escape clauses.

## Exercises and assessment

- Exercise: build `AR-02` for three consequence classes and mutation fixtures.
  Expected failure: a semantically changed proposal passes the same approval.
- Assessment: schema completeness 6, machine checks 6, authority accuracy 4,
  limitations/escalation 4. Formal safety/legal decisions are out of scope.
- Acceptance: every effect has principal, scope, precondition, approval,
  verification, failure disposition, and test.

## Figure allocation

- Required `F03.1`: contract table. Essential labels: `Goal`, `Actions`,
  `Limits`, `Approval`, `Stop`, `Complete`. Alt/long description maps each object
  to a schema field; evidence is conceptual relationship only.
- Required `F03.2`: authority airlock. Labels: `Propose`, `Review`, `Authorize`,
  `Execute`, `Verify`. Show blocked bypass; caption names owner at each stage.
  Later ImageGen raster only, with exact text QA.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Writer must carry the exact `AGE-BCLM-005/006` limitations, avoid implying that
confirmation creates authority, and produce a complete `AR-02 v1.0.0` example
plus mutation table. Chapter 04 receives stable assertion names and event needs.
Re-verify product confirmation behavior and NIST revision; keep consequence
thresholds explicitly synthetic.

## Exact evidence manifest

- Claims: `AGE-BCLM-005`, `AGE-BCLM-006`
- Sources: `AGE-BSRC-001`, `AGE-BSRC-023`, `AGE-BSRC-030`, `AGE-BSRC-036`,
  `AGE-BSRC-037`, `AGE-BSRC-043`
- Cases: `AGE-CASE-004`, `AGE-CASE-012`

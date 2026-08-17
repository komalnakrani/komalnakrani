# Appendix B - Behavior-System Artifacts and Review Gates

These structures turn chapter decisions into durable records. Copy and version them. An empty template is not evidence, and a completed document is not proof that the described test, review, or control was executed.

Every artifact should name its ID, version, status, purpose, task, population, segments, environment, owner, evidence contributors, reviewers, separate decision authority, input versions, observations, inferences, assumptions, unknowns, negative evidence, limitations, disposition, expiry, and next trigger.

Use `draft`, `under review`, `accepted for stated scope`, `superseded`, or `retired`. Preserve prior versions. Do not overwrite history after seeing a candidate result.

## MD-01 - Responsibility charter and language-task contract

Record:

```text
Task actor and affected groups:
Trigger and downstream use:
Current baseline:
Required inputs and allowed sources:
Typed proposal and terminal behaviors:
Required, uncertain, abstain, escalate, degraded, prohibited:
Consequences by state and segment:
Non-goals and prohibited effects:
LLM Engineer ownership:
Adjacent owners and formal authorities:
Evidence needed to build, narrow, defer, or stop:
```

Complete when a reviewer can describe the task without naming a model, test every behavior clause, and identify who decides the consequential outcome.

## MD-02 - Mechanism and access decision

Compare at least the non-model baseline and plausible managed, hosted, self-hosted, adapted, or hybrid paths.

```text
Candidate and exact identity:
Task evidence used:
Hard constraints and rejection reason:
Behavior fit and unknowns:
Privacy and data path dependencies:
Latency, cost, and capacity evidence:
Inspectable and configurable surfaces:
Operational owner and support path:
Change, migration, and rollback seam:
Selected posture and rejected alternatives:
Expiry and re-evaluation trigger:
```

Do not use a leaderboard rank as task evidence. Do not select an access posture whose operational or authority dependencies lack owners.

## MD-03 - Reproducible language interface

Bind the behavior-facing unit:

```text
Model/checkpoint or provider snapshot:
Tokenizer and message template:
System/developer/user message mapping:
Examples and trusted/untrusted zones:
Context source and ordering policy:
Decoding and stop configuration:
Output schema and validator version:
Repair, abstain, escalate, fail-closed rules:
Evaluator and reference versions:
Runtime/adapter/library versions:
Fixtures, seeds, trials, and raw evidence paths:
```

The ablation record changes one message component while keeping the rest frozen. The typed-output record separates parse, schema, semantic, provenance, and authority gates.

## MD-04 - Context budget and stress record

```text
Actual tokenizer/template identity:
Maximum and reserved-output budget:
Protected control allocation:
Authorized evidence allocation:
History or state allocation:
Compression and omission policy:
Included identities and omitted identities:
Oversized behavior:
Stale behavior:
Conflict behavior:
Unauthorized behavior:
Absent-evidence behavior:
Observed counts and limitations:
```

Complete when every omitted item has a reason and each stress state reaches a bounded behavior rather than silent truncation.

## MD-05 - Retrieval and provenance dossier

Begin with the evidence-path decision:

```text
Task claim needing external evidence:
Why parametric, lookup, search, retrieve, or abstain:
Knowledge owners and source classes:
Permission, freshness, revision, and scope rules:
Evidence unit and answerability definition:
No-evidence, conflict, and unauthorized behavior:
```

Then record each pipeline stage:

```text
Source and ingestion identity:
Chunk identity and parent relationship:
Lexical/vector/other candidate traces:
Eligibility filters before relevance:
Deduplication and reranking configuration:
Selected evidence and excluded evidence:
Source, revision, span, freshness, permission transport:
Context assembly order and omission trace:
Citation handle and supported claim span:
```

Do not permit a context assembler to detach content from its source state.

## MD-06 - Evaluation population and joint case record

```text
Intended-use population:
Inclusion, exclusion, and sampling method:
Language, domain, risk, and evidence-state segments:
Rare, adversarial, abstention, and prohibited cases:
Source family and duplicate groups:
Train/development/evaluation barriers where applicable:
Frozen version, refresh trigger, and retirement rule:
Coverage and declared gaps:
```

For each joint case, preserve:

```text
Eligible evidence expected:
Candidates and rank evidence:
Filter and source-state result:
Packed context identities:
Generated typed proposal:
Citation and supported-span result:
Retrieval judgment:
Generation judgment:
Joint behavior judgment:
Abstention/escalation correctness:
Causal questions and unresolved layer:
```

## MD-07 - Error, judge, and experiment packet

The error record separates criterion, consequence, severity, detectability, segment, control, and disposition. The evaluator record names what each judge can and cannot establish, its calibration cases, disagreement policy, and owner.

The experiment packet records:

```text
Observed error and hypothesis:
Predicted evidence and rejection conditions:
Baseline identity:
One named change:
Frozen controls:
Paired cases and protected slices:
Trial/repetition plan:
Evaluator and raw evidence:
Thresholds and stopping rule:
Resource evidence and confounds:
Result with uncertainty:
Retain, revise, reject, scope, or release-review disposition:
```

## MD-08 - Release, observation, and migration dossier

```text
Qualified behavior-system identity:
Readiness evidence and unresolved gaps:
Eligible cohort and excluded segments:
Human decision and formal authority gates:
Signals: purpose, sensitivity, bucket, owner, decision, retention:
Stop and degradation triggers:
Fallback, rollback, and reconciliation path:
Incident hypothesis layers:
Current and candidate identities:
Frozen replay set and shadow path:
Changed limits and compatibility gaps:
Migration disposition and rollback eligibility:
Adaptation referral evidence and rejection conditions:
```

Release remains a review handoff until the named authority records a decision. A proof PDF, passing companion test, or successful replay is evidence for its stated scope only.

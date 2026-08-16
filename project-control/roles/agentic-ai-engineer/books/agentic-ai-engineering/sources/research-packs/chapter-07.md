# Chapter 07 Research Pack — Engineer State, Context, Artifacts, and Memory

## Frozen job and evidence question

Separate workflow truth from tokens shown to the model, transient reasoning,
durable evidence and derived cross-run memory. Decide what persists, why, for
whom and under which trust/deletion rules. Output is `AR-06`.

## Claims to carry

- `AGE-BCLM-013`: model context is finite and deliberately curated.
- `AGE-BCLM-014`: state, context, scratch, artifacts and memory require distinct
  provenance, permission, freshness, retention and deletion treatment.

## Source findings

- `AGE-BSRC-010` describes context as finite model input requiring iterative
  curation, compaction and high-signal selection.
- `AGE-BSRC-011` and `AGE-BSRC-012` expose one framework's session state and
  cross-session memory mechanics. Their APIs do not make content authoritative.
- `AGE-BSRC-035` uses progress files/handoffs across coding-agent contexts.
- `AGE-BSRC-022` and `AGE-BSRC-024` motivate untrusted-data, session and memory
  boundaries.
- `AGE-BSRC-034` is a bounded organizational context/tool case.

## Lifecycle taxonomy

For each object store: category; owner; tenant/user/run scope; source;
observation versus inference; trust level; freshness/expiry; permissions;
encryption/access reference; context eligibility; memory admission decision;
conflict resolution; retention; deletion/tombstone; and downstream references.
Authoritative state can enter context as data but untrusted content cannot alter
policy or capability scope. Scratch data expires with the run. Durable artifacts
retain provenance. Memory is derived and revocable, never truth by default.

## FieldOps Relay tests

Inject a malicious manual note that says to ignore approval and call an unrelated
tool. Store it as untrusted evidence, not instruction or memory. Add stale stock,
conflicting manual editions, tenant crossover, deletion request and derived
preference with no provenance. Test context assembler and memory admission.

## Phase 07 blueprint seed

Sequence: six data classes -> lifecycle schema -> context assembly -> memory
admission -> conflicts/deletion -> poisoning lab. Required `F07.1` and `F07.2`.
Exact lifecycle fields remain in a table. No implication that long context or a
vector database solves governance.

## Gaps to keep visible

Optimal context selection and memory usefulness vary by model/task. Privacy,
records retention and legal deletion are jurisdictional/organizational matters.
The local companion demonstrates mechanics, not compliance.

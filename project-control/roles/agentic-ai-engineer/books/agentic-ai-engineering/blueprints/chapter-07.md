# Chapter 07 Blueprint — Engineer State, Context, Artifacts, and Memory

## Identity and production target

- Part II; primary `AGE-K04`, secondary `AGE-K02`, `AGE-K05`, `AGE-K09`
- Dossier: create `AR-06 v1.0.0`
- Purpose/decision: decide what persists, why, for whom, and under which
  provenance, freshness, permission, isolation, retention, and deletion rules.
- Expected depth: advanced state/data architecture; 9,000–11,000 words

## Objectives, prerequisites, and bridge

Reader separates authoritative workflow state, prompt context, scratch state,
artifacts, preferences, and derived memory; builds a context assembler and
memory-admission gate; resolves conflict, expiry, isolation, and deletion.
Prerequisites: `AR-03`–`05`, data lifecycle and retrieval basics.

1. Identity and capabilities now bound every action.
2. Their observations still risk collapsing into one undifferentiated “memory.”
3. This chapter assigns trust and lifecycle semantics before data re-enters the model.
4. Untrusted text can inform a decision but cannot become policy or authority.
5. Chapter 08 receives `AR-06` and builds the first complete one-agent slice.

## Scope and production sequence

Own application state taxonomy, context assembly, provenance, memory admission,
tenant isolation and deletion mechanics. Data platforms own generalized storage;
privacy/legal own retention requirements; LLM Engineering owns model-specific
context optimization.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Six data classes | Give each class trust/lifecycle semantics | `AGE-BCLM-014`; `AGE-BSRC-011`, `012`; taxonomy | 1,400–1,700 |
| Context as finite input | Select high-signal authorized tokens | `AGE-BCLM-013`; `AGE-BSRC-010`, `035` | context assembler | 1,300–1,600 |
| Provenance/freshness/conflict | Preserve observation versus inference | `AGE-BCLM-014`; `AGE-CASE-002`, `008` | record schema | 1,400–1,700 |
| Memory admission/deletion | Scope, expiry, correction, tombstone | `AGE-BCLM-014`; `AGE-BSRC-012`, `022`, `024` | lifecycle policy | 1,300–1,600 |
| Poisoning/isolation lab | Block manual instruction and tenant crossover | both claims; `AGE-CASE-011`, `012` | negative fixtures | 1,500–1,800 |
| State review | Validate context without turning memory into truth | all | `AR-06 v1.0.0` | 1,000–1,200 |

## Skill procedure, examples, failures

Classify object -> attach source/observation/inference -> assign owner/scope ->
set trust/freshness/expiry -> determine context eligibility -> decide memory
admission -> handle conflicts -> enforce isolation -> delete/tombstone and trace
downstream references. Current examples: Anthropic context engineering and
Google ADK state/memory are illustrative APIs. Durable: authoritative state is
not model context or memory. Volatile: context windows, framework prefixes,
memory service behavior.

Inject malicious manual note, stale stock, conflicting manual editions,
cross-tenant record, provenance-free preference, deletion request. Common
mistakes: vector database equals memory, retrieved text equals instruction,
conversation history equals state, no deletion, global memory by default.
Trade-off: more retained context may aid continuity while increasing cost,
staleness, privacy, and injection surface.

## Exercise, assessment, and figures

- Exercise: lifecycle matrix and context/memory admission decisions for 15
  records. Assessment: taxonomy 5, provenance/trust 5, permission/isolation 5,
  retention/deletion 5. Pass requires malicious note never reaches policy.
- Required `F07.1`: drawers labeled `State`, `Context`, `Scratch`, `Artifacts`,
  `Preferences`, `Memory`. Required `F07.2`: labels `Untrusted`, `Validate`,
  `Context`, `Policy`, `Memory`; alt explains blocked instruction path.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `013–014`, sources `010–012`, `022`, `024`, `035`, cases `002`,
`008`, `011`, `012`. Do not imply a framework storage API provides governance.
End with `AR-06` schemas/context builder inputs for Chapter 08. Re-verify current
framework documentation and model-specific examples.

## Exact evidence manifest

- Claims: `AGE-BCLM-013`, `AGE-BCLM-014`
- Sources: `AGE-BSRC-010`, `AGE-BSRC-011`, `AGE-BSRC-012`, `AGE-BSRC-022`,
  `AGE-BSRC-024`, `AGE-BSRC-034`, `AGE-BSRC-035`
- Cases: `AGE-CASE-002`, `AGE-CASE-008`, `AGE-CASE-011`, `AGE-CASE-012`

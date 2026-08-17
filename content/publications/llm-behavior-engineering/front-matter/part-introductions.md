# Part Introductions

## Part I - Make Language Behavior Explicit

The first failure often occurs before a prompt is written. A team points to a fluent response, names a model, and assumes the language task, acceptable variation, consequence, and authority are obvious. The resulting system can produce impressive examples while nobody can state what behavior is required, what must trigger abstention, or who may approve an outcome.

Part I establishes the unit of accountability. Chapter 1 separates the model from the configured system, observed outcome, adjacent engineering roles, and formal authority. Chapter 2 turns a request into a falsifiable language-task contract with explicit behavior states and non-goals. Chapter 3 connects tokens, attention, generation, and decoding to engineering consequences without anthropomorphism or research cosplay. Chapter 4 selects a model and access posture from task evidence, constraints, reversibility, inspection, and lifecycle responsibility.

Mosaic Desk advances from an informal assistant request to `MD-01` and `MD-02`: a responsibility charter, evidence-ledger map, language-task contract, mechanism consequence sheet, and model/access decision. The part may end with a stop, narrower task, deterministic lookup, managed model, open-weight model, or hybrid. Choosing less model is a valid result.

The handoff into Part II is a behavior promise and an access decision, not a reproducible system. The next part must bind every behavior-facing input, keep trust zones separate, type the output, and allocate finite context without hiding omissions.

## Part II - Build the Language Interface

A language-task contract cannot be tested when the model name is the only recorded configuration. Instructions may change between environments, message roles may collapse, examples may become untrusted control, context may overflow, decoding may drift, and a fluent string may pass directly into product state.

Part II treats the language interface as versioned software. Chapter 5 freezes model, messages, context, decoding, schema, evaluator, runtime, fixtures, and repeated trials into one baseline. Chapter 6 engineers instruction hierarchy and trust separation, then uses ablation to test one component at a time. Chapter 7 constrains generated output through parsing, schema, semantic, provenance, and authority gates. Chapter 8 makes context capacity, prioritization, omission, conflict, authorization, and reserved output visible.

Mosaic Desk advances through `MD-03` and `MD-04`: a baseline manifest, message contract, ablation record, typed proposal schema, validator, fallback table, context budget, and stress tests. The deterministic companion proves these interface mechanics only for synthetic fixtures. It establishes no live provider behavior or factual correctness.

The handoff into Part III is a bounded interface that can represent evidence and abstention. It still lacks a justified knowledge path. The next part decides whether retrieval is needed, which sources are authoritative, how candidates are formed, and how evidence identity survives context assembly.

## Part III - Ground Behavior in Evidence

"Add RAG" is not a problem statement. Some tasks need deterministic lookup, some need search, some need attributable retrieval for generation, and some should remain parametric or abstain. Even when retrieval is justified, semantic similarity does not establish permission, freshness, authority, or answerability.

Part III makes the evidence path inspectable. Chapter 9 decides whether external evidence is needed and maps source ownership, permission, freshness, and no-evidence behavior. Chapter 10 separates ingestion, chunking, lexical and vector candidates, filters, deduplication, reranking, and selected evidence. Chapter 11 preserves source, revision, permission, freshness, and qualifying spans while packing context. Chapter 12 evaluates retrieval and generation independently and jointly, then traces failure through corpus, query, candidates, rank, context, model, citation, and evaluator.

Mosaic Desk advances through `MD-05` and `MD-06`: a retrieval problem statement, source-authority map, corpus card, pipeline trace, provenance-aware context assembler, joint evaluation, and failure-attribution matrix. An answer with a citation can still be unsupported. A failed answer can originate upstream of the model. Correct abstention can be a successful behavior.

The handoff into Part IV is a traceable evidence system, not credible release evidence. The next part must define the target population, preserve gaps and leakage barriers, assign each claim to a credible judge, and isolate changes before acting on results.

## Part IV - Make the Evidence Credible

A score becomes dangerous when its population, segments, consequences, evaluator, or changed variables remain implicit. A convenient case set can omit the language or evidence state where the task matters. A model grader can agree for the wrong reason. A candidate can improve an aggregate while a protected segment regresses.

Part IV constructs decision-grade evidence. Chapter 13 turns intended use into a versioned, segmented, provenance-rich case population with family-aware splits, frozen holdouts, refresh, retirement, and visible gaps. Chapter 14 separates criterion, consequence, severity, detectability, segment, control, and disposition, then escalates from deterministic checks to references, graders, trained humans, domain specialists, and accountable authority. Chapter 15 preregisters one changed variable, repeats paired trials, preserves uncertainty and confounds, and ends in an explicit disposition.

Mosaic Desk advances through `MD-06` and `MD-07`: an evaluation-set card, coverage matrix, error taxonomy, rubric, calibration and disagreement record, controlled experiment packet, regression gate, and decision log. Synthetic values teach the artifact and transition mechanics. They do not establish a real population, evaluator validity, or causal product outcome.

The handoff into Part V is a complete behavior dossier with known limits. The final part must bind that dossier to release, observation, human authority, diagnosis, provider change, rollback, and the optional adaptation referral without granting the model or engineer a new decision right.

## Part V - Cross the Production Threshold

Release is not the moment uncertainty disappears. It is the moment evidence, limits, ownership, exposure, signals, stop triggers, and recovery must remain connected under consequence. A provider change can alter tokenization, context limits, structured output, abstention, latency, and cost even when the interface name stays the same.

Chapter 16 integrates the whole volume. One Mosaic Desk case crosses interface, retrieval, model, validation, and human gates while privacy-minimized signals preserve version, state, segment, reason, and duration buckets. The release packet names evidence, residual gaps, cohort, stop conditions, fallback, rollback, owner, and separate authority. Layered diagnosis keeps model, retrieval, context, validation, evaluator, runtime, and product hypotheses distinct. A candidate provider crosses the same frozen replay bridge, shadow path, changed-limit ledger, and rollback rail.

Mosaic Desk completes `MD-08`: a provider-neutral service boundary, signal and control matrix, readiness record, rollout and migration dossier, incident hypotheses, and Volume 2 handoff. The adaptation referral is initially rejected because system-level remedies have not been exhausted. A later repeated residual gap may justify a bounded experiment, but Volume 1 does not assume that changing weights is necessary or successful.

The volume closes with a complete managed-or-open-weight behavior-system endpoint. Volume 2 consumes frozen artifacts only when adaptation and runtime work is justified. It is further study, not a missing half of the professional capability taught here.

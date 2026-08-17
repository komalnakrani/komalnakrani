# Appendix E - Terminology and Adjacent-Role Boundaries

Use these terms consistently. Local teams may use different names, but a review should preserve the distinctions.

## Behavior and evidence terms

**Language-task contract:** a versioned statement of input, downstream use, required output, behavior states, consequences, non-goals, evidence, and authority.

**Model:** a versioned learned artifact or accessed service that produces token probabilities or outputs under a configuration. It is not the complete behavior system.

**Behavior system:** the model plus messages, context, retrieval, deterministic software, validators, evaluators, runtime, users, controls, and authority paths that determine observable task behavior.

**Behavior state:** an explicit terminal or intermediate condition such as required, uncertain, abstain, escalate, degraded, prohibited, repair, or fail closed.

**Baseline:** the frozen behavior-facing configuration and raw evidence used for comparison. A model name alone is not a baseline.

**Evidence unit:** the smallest source object whose identity, permission, freshness, revision, scope, and qualifying span can be reviewed.

**Candidate:** an item produced by a retrieval or model stage before final eligibility or disposition.

**Eligibility:** deterministic or authority-backed conditions that an item must satisfy before relevance or use, such as tenant permission, source class, revision, or freshness.

**Relevance:** evidence that an item addresses the query or information need. Relevance does not establish authority, permission, truth, or current applicability.

**Provenance:** the identity and transformation history needed to trace an artifact or claim to its source and version.

**Grounded proposal:** a typed proposal whose claims remain linked to eligible evidence and bounded behavior. Grounding does not make the evidence true or grant approval.

**Evaluator:** a method or actor that judges a stated criterion for a stated claim. An evaluator is not automatically a formal authority.

**Disposition:** an explicit action on evidence, such as retain, revise, reject, scope, or send to release review.

**Replay:** execution of a frozen case and judgment package against an identified behavior configuration.

**Shadow:** candidate execution whose output is not exposed as the product result or external effect.

**Rollback:** restoration of eligibility to a previously qualified configuration, plus reconciliation of state and evidence affected during the change.

## Retrieval terms

**Ingestion:** transformation of an authorized source into indexed representations while preserving identity and scope.

**Chunk:** a derived evidence unit tied to its parent source, revision, location, and transformation method.

**Lexical retrieval:** candidate formation based primarily on term or token matching.

**Vector retrieval:** candidate formation based on learned or computed representation similarity.

**Hybrid retrieval:** an explicit combination of multiple candidate signals. Hybrid does not mean automatically superior.

**Reranking:** ordering a candidate set with a separate method after candidate generation and eligibility controls.

**Context assembly:** selection and packing of trusted control and evidence into a finite model input while recording included and omitted identities.

## Adjacent-role boundary

The role boundary is based on accountability, not tool access. The LLM Engineer may contribute evidence to an adjacent decision without owning it.

### Applied AI Engineer

Owns product-oriented AI system behavior across user task, interface, learned and deterministic components, tools, controls, release, and product change. The LLM Engineer owns deeper language-model behavior contracts, context/retrieval/evaluation, and model-facing change evidence. In a shared system, product behavior remains broader than language behavior.

### Agentic AI Engineer

Owns autonomous or semi-autonomous goal, action, tool, state, memory, delegation, approval, and effect loops. The LLM Engineer may specify a model proposal or tool-description behavior but does not own action authority or autonomous-loop safety merely because a model selects text.

### Machine Learning Engineer

Owns learned-system implementation and lifecycle more broadly, including features, training pipelines, deployment, and model integration. The LLM Engineer specializes in measured language behavior, language data/context, evaluation, adaptation evidence, and inference-facing contracts. Organization-specific boundaries should be explicit.

### AI Researcher

Owns novel methods, scientific hypotheses, experimental contribution, and research validity. The LLM Engineer applies established mechanisms at engineering decision depth and must not present implementation experiments as research contributions.

### AI Evaluation Engineer

Owns evaluation systems, measurement validity, evaluator design, and cross-system assessment where established as a distinct role. The LLM Engineer must still construct behavior-specific cases and evidence, but should not self-validate a consequential evaluation method outside delegated expertise.

### Platform or MLOps Engineer

Owns reliable shared infrastructure, deployment mechanisms, model serving platforms, capacity, scheduling, artifact distribution, and recovery. The LLM Engineer specifies behavior-facing versions, resource needs, fallbacks, evidence, and migration gates but does not claim platform implementation by writing a manifest.

### Security, privacy, safety, legal, and governance specialists

Own their qualified analyses, controls, approvals, and formal interpretations. The LLM Engineer implements delegated requirements, supplies behavior evidence, preserves data minimization and effect boundaries, and escalates. Passing an engineering test is not specialist approval.

### Product and domain owners

Own product value, intended use, domain truth, policy, accepted tradeoffs, and customer or organizational consequence. The LLM Engineer can show which behavior is supported, unsupported, unknown, or regressed. The role cannot accept the business or domain consequence on behalf of its owner.

### Release authority

Owns the formal decision to expose a named behavior version to a named population under named controls. An engineer can recommend, block under delegated criteria, or prepare the packet. A release-review disposition is not a release approval.

## Boundary questions

Before accepting work, ask:

1. What observable behavior and artifact is this role accountable for?
2. Which decision changes a model-facing behavior system, and which changes product, platform, action, or formal policy?
3. What evidence can the LLM Engineer prepare credibly?
4. Which qualified specialist or authority must review or decide?
5. What handoff proves the adjacent owner can resume the work?
6. What must remain explicitly declined?

Clear boundaries improve collaboration. They do not prevent shared work; they prevent a shared tool from silently transferring accountability.

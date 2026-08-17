# Appendix F - Terminology and Adjacent-Role Boundaries

## Adaptation and data terms

- **adaptation:** a deliberate change intended to alter model-system behavior; it may or may not change weights.
- **fine-tuning:** continued optimization of some or all model parameters on a specified objective and dataset.
- **supervised fine-tuning (SFT):** token-level optimization against constructed target sequences.
- **parameter-efficient fine-tuning (PEFT):** adaptation that learns a smaller parameter delta or module while retaining a base model.
- **adapter:** a learned component applied to a particular base and compatibility tuple.
- **preference optimization:** optimization using comparative or scored behavior evidence as a proxy objective.
- **distillation:** transfer from a teacher signal into a student under a declared objective.
- **continued pretraining:** additional language-model training on a specified corpus, distinct from direct instruction targets.
- **data recipe:** versioned definition of population, sources, rights, purpose, transforms, quality, exclusions, splits, retention, and outputs.
- **example family:** records related closely enough that cross-split placement could create leakage.
- **contamination:** prohibited or decision-invalidating overlap between learning evidence and evaluation, benchmark, or protected evidence.
- **retention case:** evidence for behavior the adaptation should preserve.
- **control case:** evidence for required fail-closed, abstention, escalation, permission, safety, privacy, schema, or authority behavior.
- **synthetic data:** constructed data whose generation, review, representativeness, and rights limitations remain explicit.

## Model and experiment terms

- **base model:** immutable weights identity against which an adapter or adapted checkpoint is defined.
- **checkpoint:** captured training state at a named step; it may include more than weights.
- **model-system tuple:** weights, tokenizer, template, adapter, schema, defaults, runtime, precision, controls, and routing that jointly affect behavior.
- **template:** deterministic serialization from structured messages or examples into model-facing tokens or text.
- **loss mask:** rule selecting target positions that contribute to an optimization objective.
- **effective batch:** actual examples or tokens contributing to an update across packing, accumulation, devices, and distributed semantics.
- **ablation:** controlled comparison removing or changing one component to test its contribution.
- **proxy metric:** a measure related to the target decision but not identical to the behavior or product claim.
- **hard gate:** a criterion whose failure blocks the declared transition.
- **simulated candidate:** deterministic teaching data used to exercise comparison logic without model execution or artifact creation.
- **lineage:** directed record of parent artifacts, operations, configurations, and resulting identities.
- **merge:** operation applying or combining an adapter with a base; merged and unmerged forms are distinct artifacts.

## Runtime terms

- **prefill:** processing of the input context before autoregressive generation.
- **decode:** iterative generation of output tokens.
- **KV cache:** retained key/value attention state used across decode steps.
- **continuous batching:** scheduling that admits and removes sequences dynamically during generation.
- **prefix cache:** reusable state for an identical authorized prefix under a complete behavior-bearing key.
- **quantization:** representation and arithmetic change using lower precision under a named method and configuration.
- **throughput:** completed work per time under a stated workload and boundary.
- **latency tail:** high-percentile delay that may reveal queue, context, segment, or overload behavior hidden by an average.
- **capacity:** workload that a complete system can sustain under declared behavior, latency, error, resource, and recovery objectives.
- **behavior-resource frontier:** non-dominated candidates considered jointly on protected behavior and resource evidence.
- **graceful degradation:** predefined reduction in service that preserves critical behavior and authority rather than failing unpredictably.

## Evidence and lifecycle terms

- **integrity:** evidence that bytes match a recorded digest.
- **compatibility:** evidence that components can be combined under a named interface and runtime.
- **qualification:** bounded evidence that a complete candidate meets stated gates for a stated population and environment.
- **promotion:** state transition in an artifact or deployment lifecycle; it is not automatically release approval.
- **shadow:** execution whose outputs are withheld from the user or external effect while evidence is collected under authorization.
- **canary or bounded cohort:** limited exposure with named eligibility, signals, stop triggers, fallback, and authority.
- **rollback:** restoration of a prior complete model-system tuple with reconciliation of non-reversible state.
- **requalification:** replay required after a checkpoint, tokenizer, template, runtime, quantization, data, evaluator, or workload change.
- **hold:** explicit disposition that prevents the next transition while preserving the evidence and trigger for reconsideration.

## Adjacent-role boundaries

### LLM Engineer

Owns the language-behavior contract, model-system evidence, adaptation hypothesis, target and protected evaluation, and technical recommendation within delegated scope. Does not self-authorize data use, infrastructure risk, product value, or release.

### Applied AI Engineer

Owns the broader AI-enabled product behavior and integration across model and non-model components. The role may consume adaptation evidence but does not make a training result sufficient for product readiness.

### Machine Learning Engineer

May own training pipelines, feature/data systems, optimization implementation, artifact production, and ML lifecycle operations. The LLM Engineer supplies and evaluates the language-behavior contract; ownership is explicit per team.

### AI Researcher

Develops or studies new objectives, architectures, algorithms, and empirical explanations. Engineering use of a published method does not transfer the paper's claims to Mosaic or turn the engineer into the research authority.

### AI Evaluation Engineer

Designs and validates evaluation systems, judges, rater programs, populations, and measurement infrastructure. The LLM Engineer remains responsible for connecting those measures to the stated behavior decision.

### Data owner or steward

Decides permitted source use, purpose, quality, retention, deletion, and access within organizational policy. Technical ability to copy data is not authorization to adapt a model with it.

### Privacy and legal specialists

Interpret privacy obligations, rights, licenses, terms, retention, deletion, and jurisdiction. Dataset availability or an open-weight label is not sufficient legal approval.

### Security and supply-chain specialists

Own threat analysis, artifact acquisition controls, scanning, signing policy, isolation, secret handling, and risk acceptance. Checksums support integrity but do not replace this work.

### Platform, MLOps, and infrastructure engineers

Own registries, deployment systems, accelerators, schedulers, networking, capacity, availability, recovery, and supported runtime configurations. A task-level resource model is an interface to their work, not a production capacity claim.

### Performance engineer

Owns rigorous workload design, profiling, kernel/runtime investigation, bottleneck analysis, and performance qualification. The LLM Engineer supplies behavior gates so acceleration does not silently change the product contract.

### Reliability or SRE specialist

Owns service objectives, observability, incident systems, on-call readiness, capacity and recovery practices within the organization. The book's tabletop artifacts are not evidence that those systems exist.

### Product and domain owners

Decide whether the target matters, what tradeoffs are acceptable, which behavior needs qualified human review, and whether a candidate serves the workflow. Model scores do not confer domain authority.

### Safety, governance, and risk authorities

Define required controls, evidence, exceptions, and acceptance within their remit. The LLM Engineer implements and tests assigned controls but cannot accept residual risk for them.

### Release authority

Makes the formal exposure decision using the complete readiness packet. The engineer can recommend go, conditional go, reduce scope, delay, or hold; the artifact cannot approve itself.

## Boundary questions

Before acting, ask:

1. Is this a behavior-evidence decision or a formal organizational decision?
2. Which artifact and method support the claim?
3. Which specialist owns the unresolved technical boundary?
4. Who owns data purpose, rights, retention, and deletion?
5. Who decides product/domain value and acceptable tradeoffs?
6. Who accepts security, privacy, safety, infrastructure, or operational risk?
7. Who may authorize training, artifact handling, cohort exposure, or release?
8. What must stop if that authority or evidence is absent?

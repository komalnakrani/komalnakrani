# Appendix B - Model, Data, and Artifact Identity

Adaptation evidence is interpretable only when every behavior-facing object has a stable identity. This appendix defines a minimum content-addressed record. It does not prescribe a registry product, storage system, or security control.

## Model-system tuple

Bind these components as one candidate identity:

| Component | Minimum identity |
| --- | --- |
| base weights | publisher, family, immutable revision, digest, format, dtype |
| tokenizer | immutable revision, digest, vocabulary and special-token behavior |
| template | digest, allowed roles, serialization, golden token sequence |
| adapter or delta | method, config, base binding, digest, merge state |
| schema | request/response version and digest |
| generation defaults | decoding and stop configuration digest |
| runtime | engine, version, build, device/driver compatibility |
| precision/quantization | method, parameters, calibration identity, accumulation policy |
| control configuration | validation, permission, abstention, escalation, routing identity |

A friendly model name or mutable registry tag can point to this tuple, but it cannot replace it. Resolve mutable names to immutable revisions before an experiment and preserve the resolution evidence.

## Integrity is not compatibility

A valid checksum establishes that bytes match the recorded bytes. It does not establish that:

- the tokenizer belongs to the weights;
- the template matches training and serving expectations;
- an adapter was trained against the base revision;
- the runtime supports the artifact format and operations;
- precision or quantization preserves protected behavior;
- the license or purpose permits the intended use;
- the package has release approval.

Run integrity, provenance, compatibility, behavior, security, rights, runtime, and authority gates separately. Preserve which gate stopped the transition.

## Data identity

A dataset version should identify the recipe, source snapshot, rights/purpose state, transforms, code, accepted and rejected record manifests, deduplication method, family grouping, split assignment, rendering template, tokenizer, loss mask, and aggregate counts.

Store content identities for records or bounded shards where policy permits. A row count and filename are not sufficient. If raw content cannot be retained, preserve the permitted metadata, transformation evidence, deletion lineage, and limitations needed for audit.

## Split identity and leakage barriers

Train, development, evaluation, retention, and control partitions serve different decisions. Their manifest should record:

- record and family identifiers;
- source and time boundaries;
- exact and near-duplicate results;
- cross-partition overlap checks;
- benchmark and prompt-template overlap checks where observable;
- inaccessible or unknowable pretraining overlap;
- frozen versus refreshable status;
- owner and change trigger.

Passing a known-overlap check proves only that the implemented method found no prohibited overlap in the inspected artifacts. It does not prove global non-contamination.

## Run identity

A training run manifest should bind:

- code commit or immutable source bundle;
- environment and dependency lock;
- model-system tuple;
- data and split manifests;
- objective, target construction, and loss mask;
- optimizer, schedule, precision, clipping, regularization, and seeds;
- batch, accumulation, packing, sequence, and distributed configuration;
- logging, checkpoint, evaluation, stop, and recovery policy;
- device and resource boundary;
- authority, limitations, and current disposition.

Every checkpoint points back to the run and forward to its evaluations. A resume creates a lineage edge that names the checkpoint and restored state. A failed resume remains in the record.

## Checkpoint and adapter lineage

For each checkpoint, adapter, merge, export, or quantized variant, preserve:

| Field | Purpose |
| --- | --- |
| parent | exact upstream artifact or artifacts |
| operation | training step, merge, conversion, quantization, or export |
| configuration | parameters and tool/runtime versions |
| digest | bytes and digest algorithm |
| compatibility | model/tokenizer/template/runtime results |
| evaluation | target, retention, control, and resource evidence links |
| limitations | missing tests, unsupported hardware, unresolved rights, or unknown behavior |
| state | candidate, rejected, blocked, review, promoted, deprecated, or revoked |

Merged and unmerged adapters are distinct artifacts. Exported and quantized forms are distinct artifacts. Do not assign a pretend digest to an artifact that was not created.

## Package manifest

A release candidate package should inventory every required component and fail closed when one is absent. It should include lineage, checksums, source and model cards, licenses and notices, compatibility matrix, protected evaluation, workload/resource evidence, security and privacy review references, known limitations, promotion state, rollback identity, and named owners.

The package status is not approval. `complete`, `compatible`, and `behavior-qualified` are evidence states; `release-approved` requires the designated authority.

## Rollback identity

Rollback restores the prior complete model system, not just earlier weights. Record prior weights, tokenizer, template, adapter, schema, defaults, runtime, control configuration, routing, and data/evaluator versions used for verification. Name state that cannot be rolled back and the required reconciliation path.

## Change replay

For checkpoint, tokenizer, template, runtime, quantization, or router change:

1. freeze the current and candidate tuples;
2. state the reason and expected behavior/resource effect;
3. resolve licenses, provenance, rights, and security gates;
4. replay compatibility and golden serialization;
5. replay target, retention, language, control, and failure cases;
6. run workload-specific resource qualification;
7. compare shadow or bounded-cohort evidence if authorized;
8. preserve stop, fallback, rollback, and reconciliation;
9. record disposition and next trigger.

If a component cannot be identified or replayed, the package is not change-ready.

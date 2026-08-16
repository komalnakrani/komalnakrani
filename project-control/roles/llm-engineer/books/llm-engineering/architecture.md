# LLM Engineering — Series Architecture

## Series identity

- **Series:** *LLM Engineering*
- **Role:** LLM Engineer
- **Format:** two-volume professional series
- **Series thesis:** Language-model behavior becomes engineerable when task contracts, data, context, adaptation, evaluation, inference, and change are connected by replayable evidence.
- **Canonical series slug:** `llm-engineering`
- **Architecture version:** 1.0.0
- **Edition line:** 1.x for each volume; shared series evidence schema 1.x

## Volumes

### Volume 1

- **Title:** *LLM Behavior Engineering*
- **Subtitle:** *Contracts, Context, Retrieval, and Evaluation*
- **Canonical slug:** `llm-behavior-engineering`
- **Format:** five parts, sixteen chapters, six appendices
- **Thesis:** A dependable LLM system begins by turning language behavior into explicit contracts, authorized context, and representative evaluation—not by searching for a perfect prompt.

### Volume 2

- **Title:** *LLM Adaptation and Runtime*
- **Subtitle:** *Data, Post-Training, Inference, and Model Change*
- **Canonical slug:** `llm-adaptation-and-runtime`
- **Format:** five parts, seventeen chapters, seven appendices
- **Thesis:** Changing language-model behavior through weights or runtime is an evidence-controlled systems discipline in which data, optimization, inference, and operations must preserve an explicit behavior contract.

## Reader promise

Across the series, the reader learns to treat an LLM as a changeable component inside a measured language-behavior system. They will define behavior and authority, understand the model mechanisms that affect engineering choices, construct authorized data and context, build retrieval and structured interfaces, design representative evaluation, diagnose the responsible failure layer, choose the smallest credible intervention, execute and assess post-training when justified, integrate inference under resource constraints, implement controls, release gradually, and change models or runtimes without losing the evidence that justified the system.

The series does not promise mastery of every model family, training stack, GPU, cloud, framework, benchmark, or research method. It teaches contracts, experiments, artifacts, failure models, and decision practices that remain useful when those implementations change.

## Audience and prerequisites

### Series audience

Primary readers are software, ML, Applied AI, data, search, platform, research, or product engineers who have built at least one model-backed prototype and want professional depth in language-model systems.

Expected foundations:

- production programming in Python or a comparable language;
- APIs, schemas, testing, version control, CI/CD, data stores, identity/access, and structured logs;
- introductory probability, statistics, linear algebra, optimization, and ML evaluation;
- ordinary supervised-learning vocabulary and train/validation/test separation;
- comfort reading technical papers and running reproducible command-line experiments.

Volume 1 does not require weight access, accelerator hardware, or prior fine-tuning. Volume 2 expects Volume 1 capabilities or use of the supplied baseline dossier. Mathematical and distributed-systems appendices support recall; they do not replace missing foundational study.

## Capability at exit

After Volume 1, the reader can:

1. define a language task, behavior contract, authority boundary, and evaluation claim;
2. explain the transformer/token/context/generation mechanisms necessary for model-system decisions without pretending to be a model researcher;
3. select model and access posture using representative task evidence;
4. engineer prompts, messages, structured outputs, retrieval, context, provenance, citations, and abstention as versioned system components;
5. build representative multidimensional evaluation with calibrated judgment and explicit limitations;
6. implement a provider-neutral model boundary with deterministic controls, privacy-conscious observability, fallback, and bounded release;
7. diagnose whether a failure belongs to task, data, context, retrieval, prompt, model, decoding, grader, interface, control, or runtime;
8. migrate a model/provider without silent behavior regression;
9. produce a defensible adaptation handoff—or conclude that adaptation is not justified.

After Volume 2, the reader can additionally:

1. convert a diagnosed behavior gap into a falsifiable adaptation hypothesis;
2. build traceable instruction, preference, domain, retention, and evaluation datasets;
3. design and reproduce supervised, parameter-efficient, preference, distillation, continued-pretraining, or quantization experiments at appropriate depth;
4. measure target gain, retention, segment regressions, control behavior, calibration, and resource cost;
5. package and integrate adapted models through stable interfaces;
6. reason about inference memory, context/KV state, batching, caching, routing, throughput, tails, capacity, and cost;
7. collaborate correctly with MLOps, platform, infrastructure, performance, reliability, evaluation, research, safety, and security specialists;
8. release, observe, diagnose, roll back, and change adapted models/checkpoints/tokenizers/runtimes while preserving the behavior contract;
9. lead an evidence-backed adaptation/runtime portfolio without crossing formal authority boundaries.

## Provisional Komal publication domains

These are publication-planning domains, not an Abhyaas standard.

| ID | Domain | Required capability |
| --- | --- | --- |
| LLME-K01 | Language tasks and behavior contracts | Define task, consequence, output, uncertainty, non-goals, abstention, escalation, authority, and measurable claims. |
| LLME-K02 | Transformer, token, and generation literacy | Use model internals at engineering depth to predict context, adaptation, inference, and failure consequences. |
| LLME-K03 | Model and access-posture selection | Compare managed, hosted, open-weight, adapted, and hybrid paths under evidence and constraints. |
| LLME-K04 | Prompt, context, and structured interfaces | Engineer versioned instructions, messages, decoding, output schemas, validation, and context budgets. |
| LLME-K05 | Retrieval and grounding | Build and evaluate retrieval, reranking, context assembly, provenance, permission, freshness, citation, conflict, and empty-evidence behavior. |
| LLME-K06 | Language-model evaluation | Construct representative datasets, criteria, error taxonomies, segments, graders, human/domain judgments, adversarial cases, and regression gates. |
| LLME-K07 | Language data and adaptation evidence | Build traceable data recipes, baselines, splits, contamination controls, experiments, and promotion evidence. |
| LLME-K08 | Post-training methods | Select and execute supervised, parameter-efficient, preference, distillation, continued-pretraining, or hybrid methods at appropriate depth. |
| LLME-K09 | Inference and operational quality | Engineer task-level quality, context, latency, throughput, memory, capacity, cost, observability, fallback, and recovery. |
| LLME-K10 | Responsible controls and authority | Implement and test security, privacy, misuse, provenance, safety, and governance controls while preserving owner authority. |
| LLME-K11 | Release, change, and incident learning | Bound releases, diagnose incidents, replay evidence, migrate models/runtimes, and preserve rollback and limitations. |
| LLME-K12 | Advanced model-system leadership | Set evidence standards, choose access/adaptation strategy, coordinate specialists, communicate uncertainty, and mentor without absorbing adjacent roles. |

## Learning progression and artifact spine

The series uses one recursive evidence ledger rather than two disconnected projects:

`task -> behavior/authority contract -> model/access decision -> context/retrieval system -> evaluation -> production boundary -> release evidence -> adaptation hypothesis -> data recipe -> training experiment -> inference envelope -> adapted release -> change replay`

Later evidence is allowed to revise earlier decisions, but never silently. Every return records the trigger, prior version, new evidence, changed artifact, and disposition.

## Volume 1 architecture — LLM Behavior Engineering

### Part I — Make Language Behavior Explicit

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 1 | The Model Is Not the Behavior | Establishes role accountability, the evidence ledger, access postures, adjacent boundaries, and why a response sample is not a system claim. | Classify model, language-behavior, product, agent, platform, research, evaluation, and authority decisions correctly. | responsibility charter; evidence-ledger map | K01, K12 |
| 2 | Write the Language-Task Contract | Defines user/downstream task, consequence, input/output, baseline, variation, non-goals, abstention, escalation, and authority. | Produce falsifiable behavior clauses and reject vague “helpful assistant” requirements. | task brief; behavior and authority contract | K01, K10 |
| 3 | Reason About Tokens, Attention, and Generation | Builds engineering-depth mental models of tokenization, embeddings, attention, position/context, next-token generation, decoding, and probabilistic variation. | Predict how formatting, length, language, context, and decoding can change behavior without claiming research depth. | mechanism consequence sheet | K02, K04 |
| 4 | Select a Model and Access Posture | Compares managed, hosted, open-weight, adapted, small/large, specialized/general, and hybrid paths. | Choose an initial model path from representative evidence, privacy/control needs, latency/cost, inspection, change risk, and operational capacity. | model/access decision record; migration seam | K03, K09, K10 |

### Part II — Build the Language Interface

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 5 | Establish a Reproducible Baseline | Turns prompt, message, model, decoding, context, schema, fixtures, and versions into one replayable configuration. | Reproduce a baseline and separate sampling variation from configuration change. | baseline manifest; deterministic fixture | K03, K04, K06 |
| 6 | Engineer Instructions and Messages | Teaches instruction hierarchy, examples, delimiters, context separation, multilingual behavior, prompt injection boundary, and versioning. | Design and ablate prompts/messages as interfaces rather than prose incantations. | prompt/message contract; ablation report | K04, K06, K10 |
| 7 | Make Outputs Typed and Bounded | Teaches structured outputs, schemas, validation, constrained generation, repair, uncertainty fields, citations, refusal/abstention, and deterministic postconditions. | Prevent free-form text from silently acquiring product authority. | response schema; validator; fallback table | K01, K04, K09, K10 |
| 8 | Budget Context Deliberately | Teaches context composition, token accounting, salience, compression, ordering, conflicts, truncation, long-context tests, and state boundaries. | Create a context contract that exposes what enters, what is omitted, and how the system behaves when evidence is too large or inconsistent. | context budget; truncation/conflict tests | K02, K04, K06 |

### Part III — Ground Behavior in Evidence

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 9 | Design the Retrieval Question | Separates retrieval need, knowledge ownership, freshness, authorization, granularity, query, and answerability from “add RAG.” | Decide whether retrieval is justified and define independent retrieval/generation claims. | retrieval problem statement; source/authority map | K01, K05, K10 |
| 10 | Build the Retrieval and Reranking Path | Teaches ingestion interfaces, chunking, representations, lexical/vector/hybrid candidates, metadata, filters, reranking, and traceability. | Build an inspectable retrieval baseline and diagnose missed, noisy, unauthorized, or stale evidence. | corpus card; retrieval pipeline; trace | K05, K06, K09 |
| 11 | Assemble Context With Provenance | Teaches evidence selection, packing, source identity, citations, freshness, permission, conflict, missing evidence, and grounding instructions. | Construct context that supports or withholds claims explicitly rather than hiding uncertainty. | context assembler; provenance/citation record | K04, K05, K10 |
| 12 | Evaluate Retrieval and Generation Together | Teaches staged retrieval metrics, answerability, attribution, groundedness, faithfulness limits, abstention, end-to-end cases, and causal diagnosis. | Identify whether a bad answer is caused by the corpus, query, retrieval, reranking, context, model, or evaluator. | joint evaluation; failure attribution matrix | K05, K06 |

### Part IV — Make the Evidence Credible

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 13 | Build Representative Evaluation Cases | Teaches provenance, sampling, segments, rare/adversarial cases, multilingual coverage, leakage, splits, freeze/refresh, and dataset cards. | Build a versioned case set that represents behavior clauses and consequential gaps. | evaluation-set card; coverage matrix | K01, K06, K10 |
| 14 | Name Errors and Judgment Methods | Teaches criteria, error taxonomy, severity, detectability, deterministic assertions, references, model graders, human/domain raters, calibration, disagreement, and uncertainty. | Assign each claim to the cheapest credible evaluator and expose what the evaluator cannot establish. | rubric; taxonomy; grader calibration; rater guide | K06, K10 |
| 15 | Run Experiments That Isolate Change | Teaches hypotheses, baselines, ablations, paired comparisons, stochastic trials, segments, confounds, stopping, reproducibility, and dispositions. | Select, reject, or scope a prompt/context/model/retrieval change without laundering weak evidence. | experiment packet; decision log; regression gate | K03, K04, K05, K06 |

### Part V — Cross the Production Threshold

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 16 | Release, Observe, and Change the Model | Integrates provider-neutral boundaries, reliability, latency/cost, privacy-aware traces, controls, bounded rollout, incidents, model/provider migration, and adaptation handoff. | Release a complete language-behavior system, diagnose regressions, replay evidence for a provider change, and decide whether adaptation is justified. | service adapter; signal/control matrix; rollout/migration dossier; V2 handoff | K03, K09, K10, K11, K12 |

### Volume 1 chapter existence audit

- Chapters 1 and 2 separate professional accountability from the concrete task/behavior specification; merging them hides the decision authority boundary.
- Chapter 3 exists because token/context/generation mechanisms change engineering outcomes; it avoids a general deep-learning survey.
- Chapter 4 is a model/access decision before configuration work; it cannot be buried in a vendor appendix.
- Chapters 5–8 create four different interface capabilities: reproducibility, instructions/messages, typed output, and context budgets.
- Chapters 9–12 form one retrieval arc with four necessary decisions: whether, candidate path, evidence assembly, and joint evaluation.
- Chapters 13–15 separate case coverage, judgment validity, and causal experimentation.
- Chapter 16 is an integration chapter, not an operations dump: it proves a complete release/change loop and creates the exact Volume 2 handoff.
- Each chapter changes the Mosaic dossier or executable companion; none exists for framework fashion.

## Volume 2 architecture — LLM Adaptation and Runtime

### Part I — Earn the Right to Change Weights

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 1 | Start From a Frozen Behavior Baseline | Reconstructs the V1 contract, configuration, evaluation, operational budgets, and diagnosed gap; forbids adaptation by intuition. | Produce a falsifiable adaptation hypothesis and stopping/rejection criteria. | adaptation handoff audit; hypothesis | K01, K06, K07 |
| 2 | Inspect the Model and Tokenizer Boundary | Deepens architecture, tokenizer, embedding/output head, attention, positional behavior, normalization, precision, and checkpoint literacy only where choices require it. | Identify which model surfaces can plausibly affect the target failure and what cannot be inferred from architecture alone. | model/tokenizer inspection record | K02, K03, K07 |
| 3 | Choose the Smallest Adaptation Ladder | Compares prompt/context repair, SFT, PEFT, preference optimization, distillation, continued pretraining, retrieval changes, and model replacement. | Select an intervention with disconfirmation evidence and explicit access/resource constraints. | adaptation decision record; experiment ladder | K03, K07, K08, K09 |

### Part II — Engineer the Learning Data

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 4 | Specify the Data Recipe | Defines example unit, input/output template, language/domain balance, source rights, quality criteria, exclusions, privacy, and version identity. | Write a data recipe that another engineer can reproduce and audit. | data recipe; data card | K07, K10 |
| 5 | Curate, Deduplicate, and Separate | Teaches sampling, filtering, normalization, deduplication, near-duplicate detection, split strategy, contamination, benchmark leakage, and provenance. | Build defensible train/development/evaluation/retention separation. | pipeline; overlap report; split manifest | K06, K07, K10 |
| 6 | Build Instruction and Demonstration Data | Teaches task coverage, demonstration quality, negative/abstention cases, formatting, loss masking, multilingual representation, and synthetic-data review. | Construct SFT data that targets diagnosed behavior instead of teaching accidental shortcuts. | instruction dataset; coverage/quality report | K07, K08 |
| 7 | Build Preference and Feedback Data | Teaches pairwise/listwise signals, rubric/rater design, disagreement, position/style bias, reward hacking, implicit feedback limits, and privacy. | Create preference evidence without mistaking popularity or verbosity for desired behavior. | preference dataset; rater/calibration report | K06, K07, K08, K10 |
| 8 | Preserve Retention and Control Cases | Teaches capability retention, catastrophic forgetting, domain shift, safety/control cases, multilingual segments, and held-out challenge sets. | Define what an adaptation is forbidden to break and make regressions release-blocking. | retention suite; protected segment/control matrix | K06, K07, K10 |

### Part III — Run Post-Training Experiments

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 9 | Establish the Training Experiment | Teaches objective, batch/sequence choices, optimizer/schedule, precision, seeds, logging, checkpoints, resource budget, failure recovery, and reproducibility statement. | Run a bounded experiment whose configuration, artifacts, cost, and limits are inspectable. | run manifest; checkpoint lineage; resource log | K07, K08, K09 |
| 10 | Supervise the Model | Teaches full and selective supervised fine-tuning, target construction, learning curves, overfitting, loss/behavior separation, and checkpoint selection. | Execute and diagnose SFT without equating lower loss with better product behavior. | SFT runs; ablation and selection report | K07, K08 |
| 11 | Adapt Efficiently With PEFT | Teaches adapters, low-rank methods, target modules, rank/scale/dropout, merging/hotswap, quantized bases, storage, and inference consequences. | Select and validate PEFT against full/no-tune baselines under memory and behavior constraints. | adapter configs; merge/compatibility report | K07, K08, K09 |
| 12 | Optimize Preferences Carefully | Teaches preference objectives including DPO-like methods, reference behavior, beta/regularization, data bias, reward overoptimization, and evaluation. | Run a preference experiment while detecting style shortcuts, capability regression, and grader/rater coupling. | preference runs; bias/retention analysis | K06, K07, K08, K10 |
| 13 | Decide on Distillation or Continued Pretraining | Compares teacher/student transfer, synthetic targets, domain adaptation, vocabulary/token issues, knowledge vs behavior goals, cost, and risk. | Reject or execute a bounded advanced adaptation only when its thesis and evidence differ from SFT/PEFT. | advanced-method decision; pilot report | K02, K07, K08, K09 |

### Part IV — Engineer the Runtime Envelope

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 14 | Package and Version the Model System | Teaches model/tokenizer/adapter/config identity, artifact formats, licenses, provenance, signatures/checksums, model cards, interfaces, and promotion state. | Produce a deployable, traceable model-system release candidate without confusing an artifact with approval. | release manifest; model-change card; artifact inventory | K07, K09, K10, K11 |
| 15 | Reason About Inference Memory and Throughput | Teaches weights/precision, activations, KV state, context, batching, caching, parallelism concepts, routing, model loading, and tail behavior. | Build a task-level memory/latency/throughput/capacity model and know when to escalate to performance/platform specialists. | resource model; load plan; specialist interface | K02, K09, K12 |
| 16 | Compress, Serve, and Preserve Behavior | Teaches quantization, compilation/runtime choices, continuous/dynamic batching, prefix/KV caching, speculative ideas, routing, autoscaling interfaces, and quality replay. | Select a serving configuration from a measured quality-resource frontier, not maximum throughput alone. | serving experiment; behavior/resource frontier; fallback ladder | K06, K09, K11 |

### Part V — Operate Adapted Models Through Change

| Ch. | Title | Meaningful job | Reader capability at exit | Mosaic dossier artifact | Domains |
| ---: | --- | --- | --- | --- | --- |
| 17 | Release, Diagnose, and Evolve Adapted Models | Integrates promotion gates, shadow/canary, observability, drift, feedback, control evidence, incidents, rollback, checkpoint/tokenizer/runtime migration, deprecation, portfolio decisions, and authority. | Release an adapted model, isolate behavior/runtime regressions, roll back safely, replay change evidence, and lead the next model-system decision. | readiness packet; cohort record; incident/change replay; portfolio review | K06, K09, K10, K11, K12 |

### Volume 2 chapter existence audit

- Chapters 1–3 separate the evidence gate, inspectable model surface, and intervention decision. Adaptation cannot start before all three.
- Chapters 4–8 build five distinct data capabilities: specification, separation, instruction data, preference data, and protected retention/control evidence.
- Chapters 9–13 distinguish experimental machinery, supervised adaptation, parameter-efficient adaptation, preference optimization, and advanced alternatives. Each has different data/objective/resource/failure semantics.
- Chapters 14–16 separate artifact identity, capacity reasoning, and serving intervention/evidence.
- Chapter 17 is the adapted-model lifecycle integration and leadership test; it requires a real release/change/incident disposition.
- No chapter exists merely to teach a library command. Each changes a versioned Mosaic artifact and decision.

## Running project — Mosaic Desk

### Fictional context

Mosaic Desk supports a fictional appliance service network. Inputs include customer descriptions, technician notes, manuals, service bulletins, warranty terms, parts metadata, and language preferences. It must produce a structured proposed case summary and next-step recommendation with evidence citations, uncertainty, and explicit escalation. Humans retain warranty authorization and safety-critical repair decisions.

### Why this case is structurally useful

- language is messy, multilingual, domain-specific, and consequential;
- structured and unstructured sources have different permissions and freshness;
- retrieval quality and generation quality can be tested separately and together;
- citations can be checked against synthetic sources;
- abstention, conflict, and escalation are meaningful;
- provider-managed and open-weight paths are plausible;
- adaptation can target domain shorthand and low-resource-language formatting without claiming medical/legal automation;
- operational constraints support latency/cost/inference experiments;
- all data can be synthetic and Komal-owned.

### Volume 1 endpoint

Mosaic Desk runs through a provider-neutral interface with deterministic test doubles and optional provider adapters. It retrieves from a synthetic authorized corpus, produces a validated structured proposal, cites sources, exposes conflicts, abstains when evidence is insufficient, records privacy-minimized traces, passes a representative evaluation suite, and completes a model/provider migration replay.

Its handoff concludes that adaptation is not initially justified. New evidence then introduces a bounded gap: technicians use stable domain shorthand and two lower-resource languages where prompt/context interventions consume too much context and still produce malformed structured fields. The evaluation shows sufficient repeated examples, value, and control coverage to justify a small adaptation experiment—without assuming it will succeed.

### Volume 2 endpoint

The reader builds traceable instruction/preference/retention datasets, compares no-tune, SFT, PEFT, and other justified interventions, rejects at least one, packages a selected candidate, measures target/retention/control/resource effects, selects an inference configuration, releases to a synthetic cohort, diagnoses an injected regression, and completes a checkpoint/tokenizer/runtime change replay.

## Satellite cases and contrast obligations

### CodePatch Notes

Use for long mixed code/text contexts, structured transformation, model-version compatibility, and cases where retrieval is not the main answer. It prevents Mosaic's support domain from defining all language behavior.

### Clinic Leaflet Plain

Use only with fictional approved source leaflets. The system transforms text into bounded plain-language variants and must preserve semantic constraints, citations, uncertainty, and domain-review authority. It cannot diagnose or advise. It stress-tests high-consequence retention and authority.

### Archive Voices

Use noisy fictional historical documents and multilingual metadata to test open-weight adaptation, tokenizer effects, provenance, uncertainty, and resource-constrained inference.

### Required contrasts

- at least one chapter in each part must test a satellite case;
- at least four Volume 1 chapters must show that retrieval is not automatically appropriate;
- at least four Volume 2 chapters must compare “do not tune” or “use a smaller intervention” seriously;
- at least two chapters per volume must expose multilingual/low-resource-language evidence without claiming universal coverage;
- at least two chapters per volume must exercise formal authority boundaries;
- agent-like tool use is limited to a draft-only follow-up-question interface with no external side effect.

## Project progression

The detailed milestone map is in `project-map.md`. The sequence is:

1. MD-01 responsibility, task, behavior, authority;
2. MD-02 mechanism and access posture;
3. MD-03 reproducible baseline and typed boundary;
4. MD-04 context budget and failure behavior;
5. MD-05 authorized retrieval/provenance path;
6. MD-06 representative joint evaluation;
7. MD-07 decision-changing experiments;
8. MD-08 production release, provider change, adaptation handoff;
9. MD-09 adaptation hypothesis and model/tokenizer inspection;
10. MD-10 data recipe and separation;
11. MD-11 instruction/preference/retention datasets;
12. MD-12 reproducible SFT/PEFT experiments;
13. MD-13 advanced-method rejection or pilot;
14. MD-14 model-system packaging;
15. MD-15 inference/serving frontier;
16. MD-16 adapted release, incident, change replay, leadership review.

## Executable companion boundary

### Shared principles

- provider-neutral interfaces and deterministic default execution;
- no paid key, external side effect, private data, or accelerator required for the base path;
- optional network/provider and open-weight labs are explicitly gated;
- synthetic fixtures have versioned seeds and provenance;
- schemas, evaluation cases, run manifests, and expected failure injections are testable;
- examples show failure and rejection, not only success;
- no live certification questions or leaked assessment material.

### Volume 1 companion

- synthetic multilingual case, manual, bulletin, warranty, part, and permission generator;
- provider-neutral `LanguageModel` interface with deterministic fixture and optional adapters;
- tokenizer-estimate and context-budget utilities with model-specific caveats;
- lexical/vector-like/hybrid retrieval baselines and reranking interface;
- provenance-aware context assembler;
- structured result schema, validator, abstention/escalation paths;
- evaluation case schema, coverage checker, deterministic and recorded grader fixtures;
- experiment runner, segment/error report, regression gate;
- privacy-minimized event/trace records, failure injection, feature cohort, migration replay.

### Volume 2 companion

- small synthetic/derived instruction, preference, retention, and control datasets;
- data recipe validator, deduplication/overlap reports, split manifests;
- deterministic training-run simulator for default tests plus optional small open-weight labs;
- provider/library adapters isolated behind stable run/checkpoint/evaluation schemas;
- run manifest, resource log, checkpoint/adapter inventory, model-change card;
- behavior comparison and retention/segment/control regression reports;
- task-level memory/latency/throughput/cost calculator and recorded serving traces;
- quantization/serving experiment fixture, cohort release, rollback, incident, and change replay.

Deep distributed training, model server implementation, GPU kernel work, and production cluster operations remain external systems accessed through contracts.

## Case-study requirements

Phase 06 must find primary, public, teachable evidence for these case-study classes without copying diagrams or prose:

1. a model-behavior change caused by model snapshot/provider change;
2. a retrieval-grounded system with separate retrieval/generation evidence;
3. an evaluation or grader failure caused by contamination, bias, or invalid measurement;
4. a fine-tuning/adaptation result with explicit baseline and regression limits;
5. preference optimization or human-feedback work with documented data/judgment limitations;
6. quantization/inference optimization with quality and hardware assumptions;
7. a generative-AI security, privacy, or misuse failure with an implemented control lesson;
8. multilingual or domain adaptation with honest limits;
9. a release or incident where model behavior and runtime evidence had to be separated;
10. a deprecation/migration that demonstrates version and rollback discipline.

Every record must include context, constraints, architecture, method, evidence, tradeoffs, failures, outcome only where verified, chapter mapping, and limitations. Employer names may be used only for verified facts; Mosaic remains fictional and cannot borrow unverified outcomes.

## Terminology standard

- **LLM:** a large language model; use “model” only when the language-model context is already unambiguous.
- **language-model behavior:** observed outputs or distributions under a versioned model-system configuration; not an essential personality or guaranteed capability.
- **model system:** model/checkpoint plus tokenizer, prompt/messages, context/retrieval, decoding, adapters, schemas, controls, and runtime necessary to interpret behavior.
- **behavior contract:** testable required, allowed, uncertain, abstaining, escalating, degraded, and prohibited behavior plus authority clauses.
- **access posture:** what the team can inspect/change and where inference occurs: managed, hosted open-weight, self-hosted, adapted, or hybrid.
- **context:** runtime information supplied to the model; do not use as a synonym for training data or durable agent memory.
- **retrieval:** selecting external evidence; **RAG** only when retrieved evidence is actually coupled to generation.
- **grounded:** supported by identified evidence under a defined criterion; never a synonym for true.
- **prompt:** versioned instruction/message input; not a universal control boundary.
- **adaptation:** any deliberate behavior intervention; use **weight adaptation/post-training** when weights or learned parameters change.
- **fine-tuning:** training a pretrained model for a target; specify full, selective, supervised, preference, or parameter-efficient method.
- **PEFT:** parameter-efficient fine-tuning family; name the actual method when relevant.
- **preference optimization:** learning from comparative preference signals; do not imply alignment, safety, or truth automatically.
- **evaluation case:** versioned input, context/setup, expected criteria, and provenance; not a live certification item.
- **grader:** a mechanism producing evaluation judgments; a model grader must be labeled and calibrated.
- **checkpoint/model version/tokenizer/adapter/runtime:** maintain separate identities; “the model” is insufficient in a change record.
- **inference envelope:** measured quality, context, latency, throughput, memory, capacity, cost, and failure behavior under a configuration.
- **control:** objective + implemented mechanism + verification + residual limitation + accountable owner.
- **approval/acceptance:** reserved for the designated authority; engineering recommendations are dispositions or evidence.

## Cross-reference convention

- Internal chapter references use `Volume N, Chapter M, “Title”` on first mention, then `V1 Ch. M` or `V2 Ch. M`.
- Dossier milestones use `MD-01` through `MD-16`.
- Publication domains use `LLME-K01` through `LLME-K12` and are explicitly provisional.
- Figures use volume-qualified IDs such as `V1-F03.1` and `V2-F11.2`.
- Tables use `V1-T...` / `V2-T...`; examples use `V1-EX...` / `V2-EX...`; labs use `V1-L...` / `V2-L...`.
- Source claims use `LLME-CLM-*`; Phase 06 chapter claims get volume-qualified IDs.
- Cross-volume references must state what artifact is consumed, not merely “see the other book.”
- No reference may imply Volume 2 is required to use or benefit from Volume 1's complete managed-model endpoint.

## Version and edition scheme

- Each volume has independent semantic edition identity, beginning at `1.0.0`.
- Shared dossier/evidence schemas use `series-schema 1.x`; a breaking schema change requires both volumes to record compatibility.
- Main-text durable concepts change in minor/major editions; volatile provider/model/library examples live in versioned companion notes where possible.
- Every reproducible run records code commit, data version, model/checkpoint, tokenizer, adapter, prompt/context, decoding, evaluator, runtime, hardware class where relevant, and timestamp.
- Errata distinguish factual error, code defect, broken source, model/provider drift, and edition update.
- A provider deprecation does not automatically require a new book edition if the durable decision remains valid and the example can be updated transparently.

## Visual language and forecast boundary

The detailed plan is in `visual-forecast.md`.

Locked direction from the user:

- final illustrations are raster assets generated through ImageGen only;
- no SVG creation or delivery;
- visual style is colorful, crisp, artistic, tactile 3D/realistic, fun, and easy to read;
- technical meaning remains primary and cannot depend on decorative imagery or unreliable generated text;
- a recurring fictional Komal guide/mascot may appear sparingly to orient the reader, never as a substitute for labels, evidence, or accessibility text;
- final captions, alt text, long descriptions, and precise text overlays are authored and verified separately in the publication pipeline.

## Appendices

### Volume 1

- A. Probability, sampling, and interval refresher
- B. Transformer and token notation
- C. Behavior/evaluation artifact templates
- D. Provider-neutral interface and schema reference
- E. Source, claim, and model-version provenance
- F. Adjacent-role and authority quick reference

### Volume 2

- A. Optimization and gradient refresher
- B. Training memory and precision worksheet
- C. Data recipe, run manifest, and checkpoint templates
- D. Adaptation method comparison constraints
- E. Inference resource and capacity worksheet
- F. Model-system release/change card
- G. Optional lab hardware/access matrix

Appendices refresh prerequisites and standardize artifacts. They may not hide chapters that fail the existence test.

## Assessment modes

Every milestone supports:

1. **Artifact audit** — identity, internal consistency, provenance, limits, owner, and change history.
2. **Executable check** — schemas, deterministic fixtures, tests, evaluation cases, failure injection, and replay.
3. **Decision defense** — alternatives, evidence, uncertainty, operational/control consequences, and disposition.
4. **Contradictory change** — new model/data/context/runtime evidence forces an update without erasing the prior rationale.
5. **Boundary check** — identify which adjacent specialist or authority owns the next generalized or formal decision.

## Final series pass condition

The final Mosaic dossier and companion must prove this coherent chain:

`language task -> behavior/authority contract -> model/access posture -> reproducible interface -> authorized context/retrieval -> representative evaluation -> decision-changing experiment -> bounded release/model migration -> adaptation hypothesis -> traceable learning data -> reproducible post-training comparison -> target/retention/control/resource evidence -> packaged model system -> inference frontier -> adapted release/incident/change replay`

Any missing link is an explicit evidence gap. A fluent sample, public benchmark, low training loss, provider claim, model card, security prompt, or throughput number cannot substitute for it.

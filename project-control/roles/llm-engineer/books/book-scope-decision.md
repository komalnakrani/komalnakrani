# LLM Engineer — Book Scope and Volume Decision

## Decision

**2-VOLUME SERIES**

The smallest coherent publishing structure is two books:

1. **LLM Behavior Engineering** — *Contracts, Context, Retrieval, and Evaluation*
2. **LLM Adaptation and Runtime** — *Data, Post-Training, Inference, and Model Change*

The split is not “beginner versus advanced,” “application versus operations,” or “closed versus open source.” It separates two independently substantial professional transformations with a real seam:

- Volume 1 teaches a reader to make language-model behavior explicit, grounded, measurable, and dependable **without requiring weight access**.
- Volume 2 teaches a reader to change or host model behavior through data, post-training, compression, inference, and controlled model change **after a behavior/evaluation contract exists**.

Both volumes include production software, evaluation, controls, and operational evidence at the depth needed for their thesis. Volume 2 reuses the contracts and evaluation assets from Volume 1; it does not reteach them.

## Inputs and evidence posture

This decision uses:

- Phase 01 role validation and adjacent-role boundary;
- 23 primary/authoritative sources in `../research/evidence-register.json`;
- the locked separation from Applied AI, Agentic AI, Machine Learning Engineering, AI Research, AI Evaluation, MLOps/platform, performance/reliability, safety/security/governance, FDE, and product roles;
- the absence of any existing Komal-owned LLM Engineer manuscript to preserve.

No independent Abhyaas competency standard or objective map exists yet because Abhyaas is intentionally deferred. The provisional publication clusters below are book-planning constructs, not certification claims. Phase 18 must later reconcile them against the independently built standard.

## Role depth analysis

| Competency cluster | Conceptual depth | Practical depth | Prerequisite burden | Architecture complexity | Operational depth | Security/reliability depth | Natural projects | Narrative relationship |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| 1. Language-task and behavior contracts | High | High | Moderate | Moderate | Moderate | High | 2 | Starts both volumes; fully taught in V1 and consumed by V2 |
| 2. Transformer, token, attention, and generation literacy | High | Moderate | High | High | Moderate | Moderate | 2 | Required mental model for context, adaptation, and inference decisions |
| 3. Model and access-posture selection | High | High | Moderate | High | High | High | 3 | Branch point between managed, hosted, and adapted paths |
| 4. Prompt, output, and context interfaces | High | Very High | Moderate | High | High | High | 4 | Core V1 behavior-construction arc |
| 5. Retrieval, reranking, provenance, and grounding | Very High | Very High | Moderate | Very High | High | Very High | 4 | Independent, substantial V1 subsystem with joint evaluation |
| 6. Language-model evaluation and error diagnosis | Very High | Very High | High | High | High | Very High | 5 | Central evidence spine; V1 builds it, V2 extends it |
| 7. Instruction, preference, and domain data | Very High | Very High | High | High | High | Very High | 4 | Opens the V2 adaptation arc; not reducible to V1 context data |
| 8. Supervised and parameter-efficient adaptation | Very High | Very High | High | Very High | High | High | 4 | Distinct model-change workflow with reproducibility/resource burden |
| 9. Preference optimization, distillation, and continued pretraining | Very High | Very High | Very High | Very High | High | Very High | 4 | Advanced but role-defining adaptation choices |
| 10. Inference, compression, performance, and serving integration | Very High | Very High | High | Very High | Very High | High | 5 | Distinct runtime envelope; bounded from platform/kernel ownership |
| 11. Controls, release, observability, and incident diagnosis | High | Very High | Moderate | High | Very High | Very High | 4 | Appears in each volume at the relevant model-system layer |
| 12. Model/provider/checkpoint/runtime change | Very High | Very High | High | Very High | Very High | High | 3 | Closes the full series and proves evidence continuity |
| 13. Advanced model-system leadership | High | High | High | High | High | Very High | 2 | Integrates portfolio/access/adaptation strategy without absorbing authority |

These clusters produce two dense dependency graphs, not one linear list. Context/retrieval/evaluation can create a professionally valid LLM system without training. Post-training/inference/change needs a pre-existing behavior contract and evaluator but then introduces a second transformation: changing weights/runtime while retaining and operating behavior.

## Why one book is too compressed

A single lifecycle book initially appears attractive: task -> context -> evaluation -> adaptation -> inference -> operation -> change. It fails the usability test at professional depth.

1. **Two different access postures require full treatment.** Many LLM engineers can select, prompt, retrieve, evaluate, and migrate managed models but cannot inspect weights or run training. Others own open-weight data, tuning, quantization, and serving. Treating the first as a preface to the second would incorrectly make weight access the role's “real” endpoint.
2. **Evaluation has two distinct jobs.** Volume 1 builds task and behavior evaluation. Volume 2 uses that evidence to isolate adaptation effects, retention, regressions, contamination, and runtime changes. Compressing both usually reduces evaluation to generic scorekeeping.
3. **Post-training has real prerequisite and project burden.** Data recipes, tokenization, checkpoints, parameter-efficient tuning, preference methods, distillation, quantization, reproducibility, and resource experiments cannot be covered responsibly in a handful of chapters.
4. **Inference is not a deployment appendix.** Context length, KV state, batching, caching, precision, model loading, throughput, tail latency, capacity, and cost interact with behavior. Enough depth to make choices and collaborate with performance/platform teams needs a complete arc.
5. **One oversized reference would be harder to enter and maintain.** Model-facing examples age at different rates from behavior contracts and evaluation principles. Two editions allow runtime/adaptation material to change without destabilizing the first book's durable behavior arc.

The single-book option would need roughly 28–32 chapters and 200,000+ words to avoid superficial treatment. That is technically possible but pedagogically weaker than two bounded transformations.

## Why two books pass the distinct-thesis test

### Volume 1 thesis

**A dependable LLM system begins by turning language behavior into explicit contracts, authorized context, and representative evaluation—not by searching for a perfect prompt.**

Reader transformation: from model/API experimenter to engineer of measurable, grounded, model-change-ready language behavior.

This is a valid professional endpoint. The reader can ship high-quality managed-model or hosted-model systems, build retrieval and context, evaluate failures, implement controls, release safely, and migrate providers without performing fine-tuning.

### Volume 2 thesis

**Changing language-model behavior through weights or runtime is an evidence-controlled systems discipline in which data, optimization, inference, and operations must preserve an explicit behavior contract.**

Reader transformation: from consumer/tuner of an LLM endpoint to engineer who can justify, execute, evaluate, serve, and change task-specific model adaptations.

This is independently substantial. The reader learns data recipes, adaptation ladders, experiment/reproducibility design, post-training methods, retention and regression, compression, inference envelopes, release, incidents, and model/runtime evolution.

The theses are distinct in one sentence each and each produces an observable capability. The two-volume acceptance test passes.

## Option comparison

| Option | Apparent benefit | Structural cost | Independent transformations | Decision |
| --- | --- | --- | --- | --- |
| One comprehensive book | One artifact chain and purchase; simple catalog | 28–32 dense chapters; managed-model endpoint treated as incomplete; adaptation and inference likely shallow; difficult edition maintenance | Two transformations forced into one oversized object | Reject |
| Two books: behavior systems + adaptation/runtime | Honors managed and weight-access postures; preserves one evidence spine; allows deep post-training/inference; clean project seam | V2 depends on V1 contracts/evals; requires strict no-reteaching rule | Two distinct professional endpoints | **Retain** |
| Two books: prompting/RAG + fine-tuning | Familiar market labels | Makes prompting and RAG look like the whole behavior discipline; omits evaluation, controls, operation, and model change; adaptation boundary too tool-like | Product categories, not professions | Reject and broaden theses |
| Three books: foundations, adaptation, production | More topical room | Foundations lacks a professional endpoint; operation is inseparable from both behavior and adaptation; duplicates evaluation/reliability | Only two real transformations | Reject and merge operations into both |
| Four books: prompt, RAG, tuning, serving | Easy keyword marketing | Framework/tool silos, severe repetition, rapid aging, collision with Search/MLOps/Performance roles | Four techniques, not four reader transformations | Reject |

## Domain ownership by volume

### Volume 1 — LLM Behavior Engineering

Owns:

- language-task and behavior contracts;
- necessary transformer/token/context/generation literacy;
- task evidence and model/access-posture selection;
- prompt, message, structured output, decoding, and model-adapter interfaces;
- token/context budgets and context failure behavior;
- retrieval, chunking, representations, indexing interfaces, ranking, provenance, freshness, permissions, citations, conflict, and abstention;
- representative evaluation sets, multidimensional criteria, error taxonomies, segments, deterministic checks, calibrated model graders, human/domain judgment, adversarial cases, and regression gates;
- model-boundary production code, reliability, latency/cost budgets, privacy-conscious traces, controls, bounded release, provider/model migration;
- behavior-system leadership across multiple applications.

Does not own:

- training data recipes or weight adaptation beyond deciding whether they are the next justified intervention;
- deep supervised/preference training implementation;
- generalized model-serving platforms or kernel optimization;
- agent autonomy and action-system engineering;
- independent evaluation, security, safety, governance, or formal risk authority.

### Volume 2 — LLM Adaptation and Runtime

Owns:

- adaptation problem definition tied to a frozen V1 behavior/evaluation baseline;
- tokenizer and model-architecture consequences necessary for data/training/inference choices;
- instruction, preference, domain, retention, safety/control, and evaluation data recipes;
- sampling, filtering, deduplication, contamination, formatting, provenance, versioning, and dataset documentation;
- supervised fine-tuning, parameter-efficient methods, preference optimization, distillation, continued pretraining, and hybrid intervention selection;
- training experiment design, checkpoints, reproducibility, resource accounting, ablations, target/retention/segment evaluation, and promotion decisions;
- quantization and model packaging decisions with behavior replay;
- inference architecture, context/KV memory, batching, caching, routing, model loading, latency, throughput, memory, capacity, cost, and safe degradation at task depth;
- adapted-model observability, release, rollback, incidents, deprecation, and checkpoint/tokenizer/runtime change;
- adaptation/runtime strategy and specialist collaboration boundaries.

Does not own:

- novel foundation-model architecture or post-training research as a required output;
- frontier pretraining infrastructure from first principles;
- generalized multi-tenant training/serving platforms, schedulers, distributed storage, compiler, or kernel development;
- complete autonomous-agent design;
- independent assurance or formal authority.

## Cross-volume dependency

Volume 2 requires the reader to bring or construct these Volume 1 artifacts:

- behavior contract and non-goals;
- representative evaluation-set card and frozen baseline split;
- multidimensional rubric/error taxonomy;
- model/context/prompt/output configuration identity;
- model-boundary schema and deterministic tests;
- latency/cost/reliability/control requirements;
- explicit adaptation hypothesis.

Volume 2 may include a concise artifact schema reminder and completed example. It must not reteach task framing, RAG fundamentals, generic prompting, or grader calibration. A reader entering Volume 2 directly can use an appendix bridge and supplied capstone baseline, but the series will be honest that the reasoning is fully taught in Volume 1.

Volume 1 ends with a legitimate “do not tune” decision in its main case and one bounded adaptation handoff. Volume 2 begins by challenging that handoff with new evidence that makes adaptation worth testing.

## Non-overlap rules

1. One running case and evidence ledger span the series; artifacts extend rather than restart.
2. Volume 1 can recommend adaptation but stops before training-data recipe and weight-change implementation.
3. Volume 2 consumes a frozen behavior/evaluation baseline and cannot claim improvement without replaying it.
4. Retrieval remains in Volume 1 except where Volume 2 tests how an adaptation changes retrieval use or context dependence.
5. Agents appear only as a contrast/case at the model interface; autonomous control-plane depth is excluded.
6. Model-based grading is taught in Volume 1; Volume 2 uses it only with recorded calibration and independent checks.
7. Deep platform, distributed-systems, compiler, kernel, and hardware work appears only far enough to specify requirements, measure behavior/resource effects, and collaborate.
8. Research papers are reproduced for adoption decisions, not presented as universal methods.
9. Vendor APIs and model names belong in versioned labs/notes. Main-text contracts and decisions must survive provider change.
10. Control implementation maps objective -> mechanism -> evidence -> residual limitation -> owner. Neither volume claims formal approval authority.

## Natural project model

Use one original series capstone: **Mosaic Desk**, a multilingual evidence-grounded case-resolution assistant for a fictional appliance service network.

Mosaic Desk receives customer descriptions, technician notes, manuals, service bulletins, and structured warranty/parts data. It must classify the request, retrieve authorized evidence, produce a structured proposed resolution with citations and uncertainty, abstain or escalate when evidence conflicts, and support multilingual users without silently changing warranty authority.

Why it supports both volumes:

- Volume 1 can produce a complete managed-model behavior system with retrieval, evaluation, controls, release, and provider migration.
- Volume 2 receives a justified failure: recurring domain shorthand, low-resource-language formatting, and cost/latency constraints that prompting/retrieval alone cannot resolve. It builds and evaluates adaptation and runtime options.
- The case has meaningful context, provenance, permissions, structured output, multilingual segments, human authority, safety/security, and operational constraints without requiring real customer data.
- It remains non-agentic at core. A bounded “draft a follow-up question” tool demonstrates the agent boundary without owning actions.

Satellite cases:

- **CodePatch Notes:** controlled transformation of code-review discussions into structured change summaries; stresses long context, code/text tokens, structured output, and model change.
- **Clinic Leaflet Plain:** multilingual plain-language transformation of approved fictional health leaflets; stresses semantic retention, domain review, abstention, and authority without diagnosing patients.
- **Archive Voices:** historical-document transcription cleanup and metadata extraction; stresses noisy input, provenance, uncertainty, and open-weight adaptation.

## Expected publication size

### Volume 1

- 16 chapters in five parts
- approximately 105,000–135,000 original words
- 32 planned technical/artistic figures
- one executable provider-neutral companion with deterministic model/retrieval fixtures and optional provider adapters

### Volume 2

- 17 chapters in five parts
- approximately 115,000–150,000 original words
- 34 planned technical/artistic figures
- one bounded open-weight adaptation/runtime lab companion with CPU-safe deterministic defaults, small optional experiments, recorded fixtures, and no assumption of expensive accelerator access

The ranges are planning constraints, not page-count quotas. Phase 07 may merge a chapter if its existence test fails. It may not add chapters to chase symmetry.

## Deferred material

- Abhyaas competency standard, objective map, exam blueprint, preparation library, certification, question bank, simulation, and cross-platform mapping remain deferred under Komal-first execution.
- Phase 06 must create chapter-level source packs and case records before prose.
- Phase 10 will create all visual assets through ImageGen as colorful, crisp, artistic 3D/realistic raster work. No SVG asset is permitted.
- The course remains an AUTO decision for Phase 13. A course is justified only if it provides hands-on adaptation/runtime practice that the books and companions cannot adequately provide.

## Phase 05 handoff

Design one series with two books and one evidence spine. Volume 1 must terminate in a complete dependable LLM behavior system. Volume 2 must start from that system's frozen behavior/evaluation artifacts and prove when, how, and whether data/weight/runtime change improves it. Preserve the theses, access-posture honesty, non-overlap rules, ImageGen-only raster direction, and explicit authority boundaries.

## Acceptance-test result

Each retained volume has a distinct one-sentence thesis, a professionally meaningful reader transformation, substantial projects, and a non-duplicative center. One volume would compress or subordinate a valid access posture; three or more would split operations from the systems it must govern or create tool-shaped products. **2-VOLUME SERIES is confirmed.**

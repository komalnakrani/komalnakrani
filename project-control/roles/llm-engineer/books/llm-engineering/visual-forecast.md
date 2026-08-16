# LLM Engineering — Visual Forecast

## Locked production direction

All final book artwork must be created or edited through **ImageGen** and delivered as high-resolution raster assets such as PNG/WebP plus print-ready raster derivatives. **Do not create SVG artwork.** Do not convert generated art into vector tracings.

The intended visual language is colorful, crisp, artistic, tactile 3D/realistic, energetic, and easy to read. It should make difficult systems feel approachable without turning technical claims into decorative metaphor.

Explanatory figures should include **short essential labels** when labels materially disambiguate components, states, or paths. Keep text sparse: generally one to three words per label and no paragraph text inside an image. Generated text must be verified and, when necessary, corrected through an ImageGen editing pass before publication. Captions, alt text, and long descriptions carry precision that does not fit inside the artwork.

## Komal identity rule

The Komal mascot is optional and must appear only when pedagogically useful—for example to orient the reader at a decision point, show a human authority boundary, or make a recurring diagnostic method easier to remember.

If used:

- preserve Komal's identity by supplying the original-photo references from `/Applications/ServBay/www/komal/mascot` to ImageGen;
- inspect and choose the necessary reference images before generation/editing;
- do not invent a generic “Indian woman engineer” substitute or approximate lookalike;
- do not place the mascot in every figure or use her as decoration;
- do not let the mascot represent a legal, security, safety, clinical, or organizational authority unless the figure explicitly depicts a fictional role and the caption explains it;
- record the exact reference paths and generation/edit provenance in the final figure manifest.

This forecast does not create any image asset.

## Meaning and accessibility rules

Every final figure must:

- materially improve understanding of a boundary, sequence, state, comparison, tradeoff, evidence relationship, failure path, or change;
- have a unique ID, title, insertion anchor, caption, short alt text, long-description disposition, source/provenance record, and final raster dimensions/hash;
- use consistent visual tokens across both volumes for model, tokenizer, prompt/message, data, context, retrieval, deterministic software, evaluator, human authority, control, risk, artifact version, and observed evidence;
- not encode essential meaning only by color, depth, position, texture, or facial expression;
- use direct labels, shape/icon differences, and reading order where required;
- remain legible in grayscale and at normal web reading width and printed A4/Letter scale;
- use only original/synthetic data unless a licensed primary source supports reproduction;
- avoid provider logos, copied architecture diagrams, inherited Alpesh assets, generic robot brains, glowing circuit heads, and ornamental dashboards;
- distinguish observation from inference and current state from proposed change;
- avoid tiny pseudo-code or unreliable generated UI text; exact code and tables remain native text outside the raster.

## Visual grammar

- **Language model/checkpoint:** tactile translucent block with an inner layered core; essential label such as “model” or version token.
- **Tokenizer:** bead/string gate transforming text pieces; label “tokens.”
- **Prompt/message/context:** stacked cards with distinct edges and source tags.
- **Retrieval candidate/source:** physical document tile with provenance tab and permission/freshness markers.
- **Deterministic software/schema:** precise solid frame or mechanical gate.
- **Evaluation case/evidence:** specimen card or tray with observed-result marker.
- **Training/adaptation:** before/after model cores connected through a data-and-objective rig, not a magical transformation cloud.
- **Runtime/resource:** physical memory shelves, queues, batches, caches, and measured gauges with exact values moved to caption/table where complex.
- **Human or accountable authority:** human figure/hand at a clearly labeled decision gate; Komal only under the identity rule above.
- **Control:** visible barrier/lock/checkpoint with verification trace.
- **Failure/risk:** cracked, blocked, contaminated, stale, or diverging object plus label; never color alone.
- **Version change:** paired artifacts with an explicit replay bridge and rollback path.
- **Observed evidence:** solid lit path; **assumption/inference:** dotted or translucent path, also named in caption/long description.

## Planned figures — Volume 1

| ID | Ch. | Form | Working concept and essential labels | Understanding enabled | Mosaic relationship |
| --- | ---: | --- | --- | --- | --- |
| V1-F01.1 | 1 | layered object | A model core inside context, software, evaluation, user, and authority shells; labels “model,” “system,” “outcome” | Separates model capability from complete behavior accountability | MD-01 charter |
| V1-F01.2 | 1 | role-boundary table-scene | Shared LLM workbench with distinct ownership stations; labels “behavior,” “agent effects,” “platform,” “assurance” | Prevents role/tool confusion | MD-01 boundary map |
| V1-F02.1 | 2 | task anatomy | Customer input flowing to proposal, human decision, and consequence; labels “input,” “proposal,” “decision,” “effect” | Makes task and authority explicit | MD-01 task brief |
| V1-F02.2 | 2 | behavior state ring | Required, uncertain, abstain, escalate, degraded, prohibited as distinct stations | Turns vague quality into testable states | MD-01 contract |
| V1-F03.1 | 3 | transformer cutaway | Text pieces through token gate, attention field, and next-token output; minimal labels “tokens,” “attention,” “next” | Connects internals to engineering consequences | MD-02 mechanism sheet |
| V1-F03.2 | 3 | decoding landscape | Same probability landscape with greedy, sampled, and constrained routes | Explains acceptable variation and decoding effects | MD-02/03 configuration |
| V1-F04.1 | 4 | access-posture comparison | Managed API, hosted weights, self-hosted, adapted, hybrid as five inspectable booths | Shows what each posture can change/control | MD-02 decision |
| V1-F04.2 | 4 | constraint frontier | Model candidates balanced across behavior, privacy, latency, cost, control, and change | Replaces leaderboard selection with task evidence | MD-02 comparison |
| V1-F05.1 | 5 | configuration lockbox | Model, prompt, context, decoding, schema, evaluator, runtime version tokens locked together | Defines a reproducible baseline | MD-03 manifest |
| V1-F05.2 | 5 | replay comparison | Identical configuration replayed through several stochastic trials around an expected band | Distinguishes variation from configuration change | MD-03 baseline runs |
| V1-F06.1 | 6 | message hierarchy | System/developer/user/context cards with explicit trust/separation edges | Makes instruction priority and untrusted content visible | MD-03 message contract |
| V1-F06.2 | 6 | ablation workbench | One instruction component removed per test while others remain fixed | Teaches causal prompt experiments | MD-03/07 ablation |
| V1-F07.1 | 7 | schema gate | Free-form model output passing through typed fields, validation, and allowed product display | Prevents prose from becoming authority | MD-03 schema |
| V1-F07.2 | 7 | bounded outcome path | Valid, repair, abstain, escalate, and fail-closed branches with short labels | Shows explicit malformed/uncertain behavior | MD-03 fallback table |
| V1-F08.1 | 8 | context packing | A finite context case packed with instruction, history, evidence, and reserved output space | Makes token budgeting tangible | MD-04 budget |
| V1-F08.2 | 8 | context failure states | Oversized, stale, conflicting, unauthorized, and absent context shown as distinct physical conditions | Forces non-happy-path context behavior | MD-04 tests |
| V1-F09.1 | 9 | retrieval decision tree | Parametric answer, deterministic lookup, search, retrieval-generation, abstain branches | Prevents “add RAG” as default | MD-05 problem statement |
| V1-F09.2 | 9 | source authority shelves | Manuals, bulletins, warranty, parts, notes organized by owner, freshness, permission | Makes knowledge authority distinct from relevance | MD-05 source map |
| V1-F10.1 | 10 | retrieval pipeline | Source ingestion to chunks, candidate lanes, filters, reranker, selected evidence; essential stage labels | Locates retrieval failure precisely | MD-05 pipeline |
| V1-F10.2 | 10 | candidate comparison | Lexical, vector, and hybrid candidate trays containing different useful/noisy items | Explains complementarity and tradeoffs | MD-05 baseline |
| V1-F11.1 | 11 | provenance-aware assembly | Selected document tiles packed into context with source/freshness/permission tabs | Shows evidence retains identity inside context | MD-05 assembler |
| V1-F11.2 | 11 | evidence state junction | Supporting, conflicting, stale, missing, unauthorized paths leading to answer/abstain/escalate | Makes grounding failure behavior explicit | MD-05 behavior |
| V1-F12.1 | 12 | two-stage evaluation | Retrieval evidence tray and generated proposal judged separately then jointly | Avoids blaming the model for every bad answer | MD-06 joint evaluation |
| V1-F12.2 | 12 | causal failure tree | Bad answer traced through corpus, query, candidates, rank, context, model, evaluator | Supports responsible diagnosis | MD-06 attribution |
| V1-F13.1 | 13 | evaluation population | Realistic case population sampled into language, appliance, risk, and evidence-condition segments | Shows representativeness and missing coverage | MD-06 case set |
| V1-F13.2 | 13 | split lifecycle | Source to annotate, split, freeze, refresh, retire with contamination barriers | Makes evaluation data a versioned asset | MD-06 splits |
| V1-F14.1 | 14 | error topology | Error specimen linked to consequence, severity, detectability, segment, control, disposition | Moves beyond one aggregate score | MD-06 taxonomy |
| V1-F14.2 | 14 | judgment stack | Deterministic, reference, model grader, human, domain specialist, authority as escalating layers | Assigns claims to credible judges | MD-06 evaluator design |
| V1-F15.1 | 15 | experiment rig | Baseline and candidate under one controlled variable with repeated trials and segment lenses | Teaches isolation and stochastic evidence | MD-07 experiment packet |
| V1-F15.2 | 15 | evidence-to-decision gate | Results and uncertainty entering retain, revise, reject, scope, release dispositions | Requires action from evidence | MD-07 decision log |
| V1-F16.1 | 16 | production trace | One Mosaic case through interface, retrieval, model, validation, human gate, and privacy-minimized signals | Integrates the complete behavior system | MD-08 release |
| V1-F16.2 | 16 | migration replay bridge | Current and candidate models connected by frozen evaluation, shadow path, rollback, and changed limits | Makes model/provider change controlled | MD-08 migration/handoff |

## Planned figures — Volume 2

| ID | Ch. | Form | Working concept and essential labels | Understanding enabled | Mosaic relationship |
| --- | ---: | --- | --- | --- | --- |
| V2-F01.1 | 1 | frozen baseline vault | Contract, config, eval, budgets, and controls sealed as baseline; labels “frozen,” “candidate” | Prevents adaptation without a comparison | MD-09 audit |
| V2-F01.2 | 1 | adaptation hypothesis chain | Observed error -> suspected mechanism -> intervention -> predicted evidence -> rejection | Makes hypothesis falsifiable | MD-09 hypothesis |
| V2-F02.1 | 2 | model/tokenizer cutaway | Tokenizer gate, embedding plane, repeated blocks, output head, precision shell | Shows inspectable surfaces without research cosplay | MD-09 inspection |
| V2-F02.2 | 2 | tokenizer contrast | Same multilingual/domain input fragmented differently by two tokenizers | Exposes sequence length and representation consequences | MD-09 tokenizer record |
| V2-F03.1 | 3 | adaptation ladder | Repair data/context/prompt, SFT, PEFT, preference, distill, continue train, replace | Selects smallest credible intervention | MD-09 decision |
| V2-F03.2 | 3 | access-resource map | Interventions positioned by weight access, data, compute, control, and reversibility | Prevents impossible or unjustified choices | MD-09 budget |
| V2-F04.1 | 4 | data recipe kitchen/workbench | Sources transformed by explicit recipe into example units with provenance tags | Makes dataset construction reproducible | MD-10 recipe |
| V2-F04.2 | 4 | population balance | Language/domain/error/abstention cases balanced against target distribution and gaps | Shows convenience-data bias | MD-10 data card |
| V2-F05.1 | 5 | duplicate contamination map | Near-identical examples crossing train/dev/eval barriers with alarms | Makes indirect leakage visible | MD-10 overlap review |
| V2-F05.2 | 5 | split manifest vaults | Train, development, evaluation, retention, control sets physically separated and hashed | Preserves claim validity | MD-10 splits |
| V2-F06.1 | 6 | instruction example anatomy | Input, authorized context, desired output, mask/loss region, metadata | Shows what the model learns from one example | MD-11 instruction data |
| V2-F06.2 | 6 | coverage quilt | Task clauses and error categories covered by positive, negative, abstention, multilingual examples | Prevents one-note SFT | MD-11 coverage |
| V2-F07.1 | 7 | preference pair bench | Two outputs judged against a rubric with blinded order and disagreement marker | Separates preference signal from truth | MD-11 preference data |
| V2-F07.2 | 7 | bias traps | Length, position, style, familiarity, and grader coupling shown as deceptive magnets | Makes rater/model-grader bias memorable | MD-11 calibration |
| V2-F08.1 | 8 | protected capability shield | Target improvement surrounded by retention, multilingual, abstention, safety/control guardrails | Defines forbidden regressions | MD-11 retention suite |
| V2-F08.2 | 8 | regression surface | Target gain rising while protected capabilities diverge by checkpoint | Explains why one score cannot select a model | MD-11/12 gate |
| V2-F09.1 | 9 | training run lineage | Data/version, config, seed, code, hardware class, checkpoints, logs linked end to end | Makes a run inspectable and repeatable | MD-12 manifest |
| V2-F09.2 | 9 | training resource flow | Batch/sequence through memory for weights, activations, gradients, optimizer, checkpoint | Builds resource intuition | MD-12 resource log |
| V2-F10.1 | 10 | SFT learning path | Base model, supervised examples, checkpoints, behavior evaluation, selection gate | Separates training loss from behavior evidence | MD-12 SFT |
| V2-F10.2 | 10 | overfit diagnostic | Train loss falling while held-out/retention behavior bends away | Makes early stopping and rejection legible | MD-12 selection |
| V2-F11.1 | 11 | low-rank adapter cutaway | Frozen base layers with small trainable adapter inserts; labels “frozen,” “adapter” | Explains PEFT mechanism at decision depth | MD-12 PEFT |
| V2-F11.2 | 11 | PEFT tradeoff rig | Rank/targets/memory/storage/quality/runtime compared across candidates | Shows efficient does not mean consequence-free | MD-12 comparison |
| V2-F12.1 | 12 | preference optimization loop | Preference data, policy/reference models, objective, candidate behavior, evaluation | Makes objective/data coupling visible | MD-13 preference run |
| V2-F12.2 | 12 | reward shortcut scene | Model finds verbosity/style shortcut around intended rubric with regression alarms | Explains overoptimization and coupling | MD-13 bias analysis |
| V2-F13.1 | 13 | method fork | Distillation, continued pretraining, SFT/PEFT, and model replacement mapped to distinct goals | Prevents advanced methods from becoming escalation by fashion | MD-13 decision |
| V2-F13.2 | 13 | teacher/domain transfer | Teacher or domain corpus feeding student/base with provenance and evaluation barriers | Exposes assumptions and contamination risk | MD-13 pilot |
| V2-F14.1 | 14 | model-system package | Base, tokenizer, adapter, config, schema, runtime, license, hash assembled as one release crate | Defines deployable identity | MD-14 manifest |
| V2-F14.2 | 14 | compatibility lock | Correct and mismatched base/tokenizer/adapter/runtime combinations at a fail-closed gate | Prevents silent artifact mismatch | MD-14 compatibility |
| V2-F15.1 | 15 | inference memory shelves | Weights, activations, KV state, batch, context competing for finite memory | Builds task-level capacity reasoning | MD-15 resource model |
| V2-F15.2 | 15 | request queue and batching | Arrivals grouped through batching/cache/routing paths with tail-latency marker | Shows throughput-tail tradeoff | MD-15 load plan |
| V2-F16.1 | 16 | quality-resource frontier | Candidate serving configs across behavior, tail latency, throughput, memory, cost | Prevents maximum-throughput selection | MD-15 frontier |
| V2-F16.2 | 16 | serving degradation ladder | Full model, quantized/alternate path, reduced context, queue, abstain, fallback/stop | Bounds runtime failure behavior | MD-15 fallback |
| V2-F17.1 | 17 | adapted release gate | Target, retention, control, runtime, owner, rollback evidence entering cohort release | Integrates promotion without self-approval | MD-16 readiness |
| V2-F17.2 | 17 | incident and change loop | Detect, contain, diagnose model/runtime, correct, verify, replay, deprecate, learn | Connects operations to durable model-system change | MD-16 final replay |

## Figure count and balance

- 66 planned explanatory figures: 32 in Volume 1 and 34 in Volume 2.
- No chapter-opening decorative image is required; artwork earns its place through a learning decision.
- At least 42 figures directly instantiate Mosaic Desk artifacts or failures.
- At least 10 figures use a satellite case or a mechanism-neutral abstraction to test transfer.
- No mascot is planned as mandatory. Phase 10 may nominate a small number only after applying the pedagogical and identity rules.
- Precise multi-field comparisons remain native tables when raster spatial encoding would reduce accuracy.

## ImageGen prompt and edit requirements for Phase 10

Each production brief must specify:

- figure ID, chapter claim, learner decision, and dossier artifact;
- required objects, spatial relationship, reading order, short essential labels, and forbidden ambiguity;
- colorful crisp 3D/realistic editorial-technical style, clean light background, high contrast, print-safe composition, generous negative space, no watermark, no provider logo;
- target aspect ratio and high-resolution raster output;
- whether any human/Komal figure is pedagogically necessary;
- if Komal is used, exact inspected reference paths from `/Applications/ServBay/www/komal/mascot` and an identity-preservation instruction;
- an explicit instruction not to invent extra labels, pseudo-code, equations, icons, or product UI text;
- expected edit passes for label correction, semantic omissions, anatomy/artifact errors, consistency, and accessibility.

Generated artwork is a draft until semantic QA confirms every object/path/state against the manuscript. Artistic quality cannot rescue a wrong diagram.

## Phase 10 QA and manifest fields

Each final record must include:

- figure ID/version, title, volume/chapter, insertion anchor;
- supported claim IDs, `LLME-K*` domains, and `MD-*` milestones;
- final format, pixel dimensions, color profile, print/web derivative paths, and hashes;
- ImageGen generation/edit dates and model/tool disclosure;
- complete prompt/edit history or durable production summary;
- referenced local image paths and identity QA when Komal appears;
- essential label inventory and spelling verification;
- caption, short alt, long description or justified omission;
- source/provenance and synthetic-data disclosure;
- semantic/evidence review, identity review if applicable, visual consistency, contrast, grayscale, small-size, reading order, web/PDF render, and publication dispositions.

## Creation order

1. Complete the chapter research and blueprint.
2. Write a semantic figure brief and low-fidelity text description—no SVG sketch or asset.
3. Test whether a native table or prose would be clearer; cancel the figure if so.
4. Generate the raster artwork through ImageGen.
5. Inspect semantic accuracy and run ImageGen edits for missing/incorrect objects, labels, identity, and visual consistency.
6. Produce final web/print raster derivatives without vectorization.
7. Add verified caption, alt text, long description, provenance, and manifest record.
8. Render in web and PDF; check grayscale, small size, contrast, label legibility, cropping, and page breaks.
9. Mark complete only after evidence, identity where relevant, visual, accessibility, and publication QA pass.

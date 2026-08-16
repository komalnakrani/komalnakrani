# Phase 07 Handoff — LLM Engineering Chapter Blueprints

## Entry condition

Phase 07 may begin only after the coordinator reviews and accepts Phase 06 under issue #41. Inputs are frozen Phase 05 architecture/project map/visual forecast plus the Phase 06 source, claim, case, and chapter-pack system. Phase 07 produces blueprints, not manuscript prose, code, or image assets.

## Canonical inputs

- `architecture.md` — immutable two-volume/33-chapter sequence and Mosaic Desk milestones.
- `project-map.md` — dependencies, artifacts, and continuity.
- `visual-forecast.md` — 66 future figure specifications and ImageGen-only raster policy.
- `sources/source-register.json` — canonical 66-source vocabulary and 22 series claims.
- `sources/claim-register.json` — 99 limitation-aware claims, exactly three per chapter.
- `case-studies/case-study-register.json` — 14 bounded published-method/risk/lifecycle cases.
- `sources/v1-chapter-XX-research.md` and `v2-chapter-XX-research.md` — one pack per frozen chapter.
- `sources/verification-report.md` — integrity verdict and mandatory rechecks.

## Required blueprint schema

Each chapter blueprint must contain: frozen identity and milestone; prerequisite/forward dependency; reader transformation; 3–6 measurable objectives; concept sequence; skill procedure; Mosaic Desk state transition; at least one failure injection; claim ledger using the chapter's exact three claim IDs; source/case ledger with limitation notes; managed/open-weight treatment; authority and adjacent-role boundary; examples/exercises; assessment evidence; planned figures using accepted forecast IDs; durable-versus-volatile callouts; prohibited claims; chapter deliverables; and Phase 08 manuscript handoff.

Blueprints must not add/remove/reorder chapters, renumber MD-01…MD-16, collapse the volume boundary, invent production outcomes, prescribe a provider, or convert volatile numbers into durable teaching claims.

## Chapter production matrix

| Chapter | Milestone | Claim ledger | Preferred cases | Blueprint emphasis |
|---|---|---|---|---|
| V1-01 The Model Is Not the Behavior | MD-01 | V1-C01-CL01..03 | CASE-014 | system boundary; observation vs evidence |
| V1-02 Write the Language-Task Contract | MD-01 | V1-C02-CL01..03 | CASE-014 | acceptance, exclusions, authority |
| V1-03 Reason About Tokens, Attention, and Generation | MD-02 | V1-C03-CL01..03 | CASE-001 | mechanism-to-failure reasoning |
| V1-04 Select a Model and Access Posture | MD-02 | V1-C04-CL01..03 | CASE-013 | managed/open-weight responsibility split |
| V1-05 Establish a Reproducible Baseline | MD-03 | V1-C05-CL01..03 | — | configuration and run manifest |
| V1-06 Engineer Instructions and Messages | MD-03 | V1-C06-CL01..03 | CASE-014 | trusted control vs untrusted data |
| V1-07 Make Outputs Typed and Bounded | MD-03 | V1-C07-CL01..03 | CASE-014 | validation ladder and failure paths |
| V1-08 Budget Context Deliberately | MD-04 | V1-C08-CL01..03 | CASE-002 | position, token, cost, risk budget |
| V1-09 Design the Retrieval Question | MD-05 | V1-C09-CL01..03 | CASE-003 | evidence contract before tooling |
| V1-10 Build the Retrieval and Reranking Path | MD-05 | V1-C10-CL01..03 | CASE-004 | stage-isolated retrieval experiment |
| V1-11 Assemble Context With Provenance | MD-05 | V1-C11-CL01..03 | CASE-002/003/014 | provenance and trust labels |
| V1-12 Evaluate Retrieval and Generation Together | MD-06 | V1-C12-CL01..03 | CASE-003/004 | two-stage diagnosis |
| V1-13 Build Representative Evaluation Cases | MD-06 | V1-C13-CL01..03 | CASE-006/007 | slices, splits, contamination |
| V1-14 Name Errors and Judgment Methods | MD-06 | V1-C14-CL01..03 | CASE-005 | taxonomy and judge calibration |
| V1-15 Run Experiments That Isolate Change | MD-07 | V1-C15-CL01..03 | CASE-004/005 | controls, slices, tradeoffs |
| V1-16 Release, Observe, and Change the Model | MD-08 | V1-C16-CL01..03 | CASE-013/014 | managed release and migration |
| V2-01 Start From a Frozen Behavior Baseline | MD-09 | V2-C01-CL01..03 | CASE-008 | evidence continuity from Volume 1 |
| V2-02 Inspect the Model and Tokenizer Boundary | MD-09 | V2-C02-CL01..03 | CASE-001 | artifact/template compatibility |
| V2-03 Choose the Smallest Adaptation Ladder | MD-09 | V2-C03-CL01..03 | CASE-008/009/010 | diagnosed escalation and stop rules |
| V2-04 Specify the Data Recipe | MD-10 | V2-C04-CL01..03 | CASE-006/007 | lineage, mixtures, authority |
| V2-05 Curate, Deduplicate, and Separate | MD-10 | V2-C05-CL01..03 | CASE-006/008 | curation and split firewall |
| V2-06 Build Instruction and Demonstration Data | MD-11 | V2-C06-CL01..03 | CASE-007/008 | examples, evidence, template |
| V2-07 Build Preference and Feedback Data | MD-11 | V2-C07-CL01..03 | CASE-005/010 | rubric and bias controls |
| V2-08 Preserve Retention and Control Cases | MD-11 | V2-C08-CL01..03 | CASE-007/008/014 | regression safety net |
| V2-09 Establish the Training Experiment | MD-12 | V2-C09-CL01..03 | CASE-008 | manifest, smoke test, resume |
| V2-10 Supervise the Model | MD-12 | V2-C10-CL01..03 | CASE-007/008 | loss vs behavior evidence |
| V2-11 Adapt Efficiently With PEFT | MD-12 | V2-C11-CL01..03 | CASE-009 | adapter resource and lineage |
| V2-12 Optimize Preferences Carefully | MD-13 | V2-C12-CL01..03 | CASE-005/010 | proxy optimization controls |
| V2-13 Decide on Distillation or Continued Pretraining | MD-13 | V2-C13-CL01..03 | CASE-006/008 | method-to-gap decision |
| V2-14 Package and Version the Model System | MD-14 | V2-C14-CL01..03 | CASE-009/013 | complete artifact identity |
| V2-15 Reason About Inference Memory and Throughput | MD-15 | V2-C15-CL01..03 | CASE-011 | workload-specific budget |
| V2-16 Compress, Serve, and Preserve Behavior | MD-15 | V2-C16-CL01..03 | CASE-011/012 | behavior-preserving bake-off |
| V2-17 Release, Diagnose, and Evolve Adapted Models | MD-16 | V2-C17-CL01..03 | CASE-008/009/011–014 | staged release and layered diagnosis |

## Mosaic Desk continuity contract

Every blueprint must state the incoming and outgoing Mosaic Desk artifact. MD-01 defines the task; MD-02 selects/understands candidates; MD-03 freezes an application baseline; MD-04 budgets context; MD-05 builds attributable retrieval; MD-06 creates diagnostic evaluation; MD-07 isolates a change; MD-08 releases the managed path; MD-09 freezes the open-weight adaptation starting point; MD-10 defines/curates data; MD-11 builds behavior evidence; MD-12 runs SFT/PEFT; MD-13 evaluates preference or deeper adaptation; MD-14 packages the model system; MD-15 qualifies serving/compression; MD-16 releases and evolves it.

Mosaic Desk remains constructed, colorful, and outcome-free. Measurements used in exercises must be clearly synthetic or generated by a future reproducible companion; they may not be presented as real customer results.

## Provider neutrality and dual-path rule

Volume 1 should demonstrate common behavior contracts across managed and open-weight candidates while explaining their different observable/configurable surfaces. Volume 2 operates primarily on the open-weight path because data adaptation, weights, packaging, and serving are its subject; managed providers may appear only as comparison or dependency examples. No brand becomes the conceptual spine.

## Authority boundary required in every blueprint

LLM Engineer: measured language-model-system behavior, task/data/adaptation evidence, and behavior-facing release gates. Adjacent authorities retain product priority, domain truth, legal/license decisions, privacy approval, security architecture/incident authority, platform reliability/capacity, MLOps shared infrastructure, AI research capability creation, FDE customer-embedded delivery, and autonomous-agent orchestration.

## Visual handoff

Use the accepted 66-figure forecast only. Future assets must be ImageGen-created colorful, crisp, artistic 3D/realistic raster; never SVG. Short essential labels are encouraged for explanatory figures. A Komal mascot is used only when it materially teaches the concept and must be identity-preserving from authorized original-photo references, never generic. Phase 07 writes figure intent, labels, composition, accessibility description, and evidence role; it creates no image.

## Blueprint QA gate

Before Phase 08: 33/33 blueprints; all 99 claim IDs used once in their chapter; every claim source resolves; case limitations are adjacent; 66 forecast figures allocated without changing IDs; each chapter has a Mosaic Desk transition, failure injection, skill artifact, assessment, authority boundary, durable/volatile split, and non-scope; no manuscript passages or assets; JSON/links rechecked where touched.

## Exact first action

Create the Volume 1 Chapter 1 blueprint from `sources/v1-chapter-01-research.md`. Use the three frozen claims and MD-01 system-boundary figures, then run blueprint QA before proceeding in architecture order. Do not draft Volume 2 early or parallelize chapters in a way that breaks Mosaic Desk artifact continuity.

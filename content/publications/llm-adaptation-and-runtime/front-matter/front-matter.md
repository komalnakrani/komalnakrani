# LLM Adaptation and Runtime

## Data, Post-Training, Inference, and Model Change

Komal Nakrani

First edition review, version 1.0.0 (2026)

Copyright (c) 2026 Komal Nakrani. All rights reserved except where separately stated for cited sources or companion dependencies. This book is original. Mosaic Desk and all satellite cases are fictional. Their datasets, runs, resource values, failures, decisions, and outcomes are synthetic teaching material, not evidence about a real product, customer, employer, model, provider, training job, accelerator, or deployment.

## Professional boundary and disclaimer

This book is technical and professional education. It is not legal, privacy, security, safety, accessibility, medical, financial, regulatory, audit, licensing, or compliance advice. A model card is not approval. A checksum is not supply-chain assurance. A simulated training curve is not a trained checkpoint. A passing local test is not production evidence. Readers must involve qualified specialists and explicitly designated organizational authorities when a decision requires their expertise or authority.

The LLM Engineer owns measured language-model-system behavior within delegated scope: preserve a behavior contract, diagnose a change-sensitive gap, construct traceable evidence, run bounded adaptation and runtime investigations, and recommend a disposition. The role does not acquire product, domain, data-rights, privacy, security, safety, legal, infrastructure, procurement, risk, or release authority by preparing the dossier.

The learning packs shipped with the volume are marked `NOT FOR LIVE CERTIFICATION BANK`. They support practice and review. Buying, reading, or completing this book is not required for any independent Abhyaas certification, and the book does not claim to confer certification.

## Preface

Changing weights is easy to describe and difficult to justify. A recurring failure can originate in the task contract, data population, prompt, template, tokenizer, retrieval path, output validator, judge, runtime, or product workflow. Training before locating that layer can produce a costly artifact that changes nothing important or damages behavior the team forgot to protect.

LLM adaptation and runtime engineering treats weights, data, optimization, packaging, inference, and operations as one evidence-controlled system. The system begins from a frozen behavior baseline and asks a narrow question: what is the smallest intervention that could plausibly change the diagnosed residual without breaking the contract? Every later claim must retain the exact model, tokenizer, template, data, objective, evaluator, runtime, resource, and authority identity that made it interpretable.

This volume follows one recursive evidence loop:

1. reconstruct the Volume 1 behavior contract, baseline, evaluation, budgets, and unresolved gap;
2. inspect model, tokenizer, template, precision, checkpoint, and runtime compatibility before choosing a method;
3. compare no-change, system repair, supervised adaptation, PEFT, preference optimization, advanced methods, and replacement on mechanism and evidence;
4. specify rights, purpose, population, provenance, quality, exclusion, retention, and deletion behavior before constructing data;
5. separate train, development, evaluation, retention, and control evidence while making overlap and contamination limits visible;
6. freeze the objective, seeds, optimizer state, precision, effective batch, checkpoints, resource envelope, behavioral hooks, and recovery plan;
7. distinguish optimization loss and proxy preference from held-out target, retention, language, control, and resource behavior;
8. package weights, tokenizer, template, adapter, schema, runtime, configuration, lineage, licenses, checksums, and rollback as one compatibility-bound identity;
9. select inference and serving configurations on a measured behavior-resource frontier rather than throughput alone;
10. release only through named authority, bounded exposure, privacy-minimized signals, diagnosis, rollback, and complete change replay.

The loop permits rejection. A data recipe may reveal insufficient rights or coverage. A compatibility inspection may stop before a batch. A no-tune baseline may outperform a complex candidate on protected behavior. A smaller runtime intervention may dominate a weight change. A complete evidence process can end in hold without manufacturing a checkpoint or release.

## The running system

The reader continues Mosaic Desk, a fictional appliance-support workflow assistant. Volume 1 established a typed, citation-bearing proposal path with authorized retrieval, explicit evidence state, uncertainty, abstention, escalation, deterministic validation, and a human decision gate before any external effect.

Volume 2 investigates a bounded synthetic residual: stable appliance shorthand and two lower-resource-language formatting segments remain difficult after credible prompt, context, schema, retrieval, and evaluator repairs. The proposed open-weight path is initially blocked by template and padding compatibility gaps. The chapters preserve that block. They specify data and experiments, compare deterministic simulated candidates, reject mismatched advanced methods, bind an incomplete package, model workload-specific capacity, and conduct a tabletop release/change incident. No real training, model execution, benchmark, artifact creation, deployment, or production outcome is claimed.

Humans retain warranty authorization and safety-critical repair decisions. Product and domain owners decide value and acceptable behavior. Data owners and privacy/legal authorities decide whether examples may be used and retained. Security owns threat acceptance. Platform and SRE own infrastructure, capacity, reliability, and recovery. Release authority decides exposure. The LLM Engineer makes the behavior and change evidence legible without absorbing those decisions.

## Who this volume is for

The primary reader is a software, ML, data, evaluation, platform, performance, research, or product engineer who already understands the Volume 1 behavior-system discipline or can reconstruct the supplied frozen baseline dossier. You should be comfortable with Python or comparable programming, schemas, version control, tests, structured logs, ordinary supervised-learning vocabulary, train/development/test separation, introductory probability, linear algebra, optimization, and ML evaluation.

This volume does not replace a deep-learning course, distributed-training specialization, accelerator-performance curriculum, privacy or security review, licensing analysis, or production SRE practice. Appendix A refreshes only the mathematics and measurement needed to interpret the decisions. Appendix E refreshes runtime concepts at task-decision depth. Escalation to specialists is an intended capability, not a failure.

## How the volume is organized

The five parts follow the adaptation and runtime evidence loop.

- Part I earns the right to consider a weight change through a frozen baseline, compatibility inspection, and smallest-intervention decision.
- Part II engineers authorized learning evidence through a reproducible recipe, separation, instruction data, preference data, and protected retention/control cases.
- Part III runs bounded post-training investigations across experiment machinery, supervised adaptation, PEFT, preference optimization, and advanced-method rejection.
- Part IV binds the model-system package and qualifies its workload-specific inference and serving envelope.
- Part V operates the adapted-model dossier through release review, diagnosis, rollback, requalification, and change.

Each chapter has four layers. The main argument explains a decision and its tradeoffs. Mosaic Desk advances one durable dossier. Figures make boundaries, paths, and states visible without replacing the surrounding prose. The deterministic companion turns selected contracts into local fixtures and tests while retaining `trainingExecuted`, `modelExecuted`, `benchmarkExecuted`, and artifact-creation limits where applicable.

The seven appendices serve different jobs:

- Appendix A refreshes optimization, adaptation, uncertainty, and behavioral measurement concepts.
- Appendix B defines model, tokenizer, template, data, checkpoint, adapter, runtime, and package identity.
- Appendix C supplies copyable Mosaic adaptation/runtime artifacts and review gates.
- Appendix D explains the provider-neutral companion and safe extension rules.
- Appendix E refreshes inference, capacity, caching, queueing, and distributed-systems boundaries.
- Appendix F defines canonical terminology and adjacent-role boundaries.
- Appendix G explains source, claim, figure, edition, errata, and proof records.

## Reading paths

For a complete first read, follow the chapter order. Later experiments are interpretable only because earlier identity, data, evaluation, and authority records remain frozen.

For adaptation triage, read Chapters 1-3 together. Do not choose a method until the residual, artifact tuple, smaller interventions, access limits, stopping rules, and disconfirmation evidence are explicit.

For learning data, read Chapters 4-8 in order. A large dataset is not defensible when rights, purpose, population, duplicate families, split isolation, template rendering, rater bias, retention, and control cases remain implicit.

For post-training, read Chapters 9-13 with Appendix A. Treat the included SFT, PEFT, preference, distillation, and continued-pretraining values as synthetic mechanics fixtures. The chapters teach comparison and rejection, not a recipe that predicts a real candidate.

For packaging and serving, read Chapters 14-16 with Appendices B and E. Integrity and compatibility are different gates. A capacity model is workload-specific. A fast variant must replay protected behavior before it enters a release packet.

For lifecycle and leadership, read Chapter 17 with the complete dossier. The chapter ends in hold because the package is incomplete. Its incident and migration paths are tabletop evidence, not a disguised deployment claim.

## Working with evidence states

Use bounded evidence language in notes and reviews:

- `observed`: recorded by the named method for a named artifact, population, segment, runtime, and time;
- `inferred`: a reasoned interpretation that remains separable from the observation;
- `synthetic`: constructed teaching or test evidence that cannot establish a real-world outcome;
- `simulated`: a deterministic comparison that does not imply model execution or artifact creation;
- `supported`: current evidence is adequate for the stated narrow claim;
- `unsupported`: the claim exceeds current evidence or population coverage;
- `unknown`: necessary evidence is absent or cannot yet be reconciled;
- `untestable`: the current method cannot credibly evaluate the claim;
- `disconfirmed`: evidence contradicts the working hypothesis;
- `blocked`: a named prerequisite prevents the next transition;
- `retain`, `revise`, `reject`, `scope`, `hold`, and `release review`: explicit dispositions rather than confidence adjectives.

A useful adaptation claim names the behavior contract, residual, artifact tuple, data recipe, population, segment, method, version, evaluator, runtime, resource measure, limitation, owner, authority, and next trigger. A lower loss does not establish better behavior. A checksum does not establish compatibility. Passing aggregate behavior does not erase a protected-segment failure.

## Running the companion

From the repository root, use:

```sh
node --test content/publications/llm-adaptation-and-runtime/companion/tests/*.test.mjs
node content/publications/llm-adaptation-and-runtime/companion/run.mjs
```

The companion uses Node.js built-ins, local files, deterministic fixtures, and no provider secret or accelerator. Do not paste customer data, secrets, raw production traces, proprietary training examples, or restricted model artifacts into it. Do not add a real training or provider call merely to make the example feel realistic. Any extension must preserve the same behavior contract, artifact identities, protected evaluation, authority gates, and failure oracle.

## Figures and accessible use

The edition's figure sequence is V2-F01.1 through V2-F17.2: 34 original synthetic ImageGen PNG teaching illustrations. Layout, lanes, gates, locks, shapes, arrows, textures, and short labels supplement color. Read each image with its caption, nearby argument, and long description.

The figures explain relationships and decision states. They do not report measured training, model, product, user, capacity, cost, or production outcomes. The canonical sources are PNG. Delivery tooling may create derivatives, but derivatives are not the provenance source. Appendix G explains figure identity, dimensions, hash records, mirrors, corrections, and review status.

## Sources, claims, and corrections

Material chapter claims use stable claim IDs that resolve through `claims.json` to `sources.json`. Sources include primary papers, standards, official documentation, model and dataset disclosures, and bounded first-party technical evidence. A source may support one narrow statement without proving Mosaic's population, rights, infrastructure, hyperparameters, capacity, or release fitness. Vendor evidence remains vendor evidence. A public recipe is not a transferable authorization or result.

This edition remains under review. `publishedAt` is intentionally null and the canonical PDF is disabled until complete web/PDF review and release authority are recorded. Review proofs are not released editions.

Corrections must enter `errata.json` or a reviewed edition change. A correction identifies edition, location, problem, disposition, resolution, and replacement text when applicable. No web page or PDF should silently change while retaining the same released edition identity.

## A note on judgment

Adaptation systems invite shortcuts: an architecture feature becomes a quality prediction, a token loss becomes a behavior claim, parameter efficiency becomes product fitness, a data license becomes sufficient purpose authority, a hash becomes compatibility, throughput becomes capacity, and a completed package becomes release approval. This volume refuses those substitutions.

The discipline is not opposition to adaptation. It is the ability to change weights and runtimes when justified while keeping the contract, evidence, regressions, resources, ownership, recovery, and formal authority inspectable to the people responsible for the consequences.

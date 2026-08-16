# LLM Engineer — Adjacent-Role Boundary

## Boundary rule

Classify work by its **primary technical decision and unit of accountability**, not by employer title, model family, framework, or shared tool.

- **LLM Engineer primary decision:** Which language-model, data, context, adaptation, evaluation, and inference changes will satisfy a defined behavior contract under operational and control constraints?
- **LLM Engineer unit of accountability:** measured language-model behavior and its change across the task-specific model system.

An LLM engineer can build application code, retrieval, evaluations, agent model interfaces, tuning workflows, and runtime adapters. Those activities do not automatically transfer ownership of the whole product, agent action system, generalized ML platform, research agenda, independent assurance program, or formal risk decision.

## Classification vocabulary

- **CORE HERE** — the LLM Engineer owns the decision and must produce behavior evidence.
- **SHARED AT DIFFERENT DEPTH** — both roles participate, but their object, evidence, or lifecycle accountability differs.
- **SUPPORTING** — enough depth to integrate, diagnose, and collaborate; the adjacent specialist owns the generalized system or formal decision.
- **OUT OF SCOPE** — collaboration context only; not LLM Engineer professional mastery.

## Adjacent-role map

| Adjacent role | Relationship | Adjacent role center | LLM Engineer distinction | Exam-item difference |
| --- | --- | --- | --- | --- |
| Applied AI Engineer | SHARED AT DIFFERENT DEPTH; broader parent-like role | Engineer useful, measurable AI-powered product/system behavior across model families and deterministic mechanisms | Goes deeper on token/context behavior, language data, retrieval-generation coupling, post-training, language evaluation, and inference consequences | Applied AI item may choose rules, predictive ML, vision, or an LLM and focuses on product-system evidence; LLM item assumes a language-model path is plausible and asks which model/context/adaptation/evaluation/runtime change is justified. |
| Agentic AI Engineer | SHARED AT DIFFERENT DEPTH | Engineer controlled autonomy: plans, tools, permissions, state, effects, interruption, multi-agent coordination, and recovery | Owns the model behavior inside or beside an agent; does not own the complete autonomous action system merely because the model emits tool calls | LLM item diagnoses tool-call formatting or fine-tunes function selection; agentic item diagnoses authorization, state, action semantics, idempotency, recovery, or multi-step policy. |
| Machine Learning Engineer | SHARED AT DIFFERENT DEPTH; broader model-lifecycle role | Build and operate data/model training, serving, feature, and monitoring systems across ML tasks and model families | Specializes in language-model data, token/context interfaces, generative behavior, post-training, retrieval-generation, and open-ended evaluation | MLE item can concern a vision classifier, ranking model, feature pipeline, or generalized training service; LLM item requires language-model behavior and adaptation evidence. |
| AI Research Engineer | SHARED AT DIFFERENT DEPTH | Create or validate novel/generalizable model methods, capabilities, experiments, and research infrastructure | Reproduces, adapts, and operationalizes methods for a defined behavior contract and production constraint | Research item asks whether a method is experimentally valid, novel, or generalizes; LLM item asks whether reproduced evidence justifies a system change and survives operational constraints. |
| AI Evaluation Engineer | SHARED AT DIFFERENT DEPTH; independent assurance surface | Design measurement systems, benchmark/evaluation methodology, grader validation, statistical evidence, and quality governance across models/systems | Must build task evaluation to develop and release its system, but does not own an independent organization-wide evaluation program | LLM item uses an error taxonomy to select adaptation or model change; evaluation item tests validity, reliability, bias, leakage, power, or grader calibration of the measurement system itself. |
| Applied Scientist | SHARED AT DIFFERENT DEPTH | Apply scientific methods and modeling to ambiguous product/domain problems; may invent or compare methods and quantify impact | Centers engineering ownership of language-model behavior and production integration rather than broad scientific problem ownership | Applied Scientist item emphasizes experimental inference or modeling validity; LLM item emphasizes reproducible behavior change and production consequences. |
| Data Engineer | SUPPORTING / SHARED AT INTERFACE | Own reliable enterprise ingestion, transformation, storage, contracts, quality, and governed data products | Owns task-specific instruction/preference/evaluation data recipes, tokenization effects, retrieval corpora interfaces, and model-behavior consequences | Data item restores a durable pipeline/contract; LLM item detects how data selection, formatting, duplication, leakage, or preference construction changes behavior. |
| Search / Retrieval Engineer | SHARED AT DIFFERENT DEPTH | Own retrieval systems, ranking quality, indexing, query understanding, and search serving as a generalized capability | Owns context/retrieval choices insofar as they change LLM grounding, generation, citation, and behavior contract | Retrieval item optimizes relevance/recall/latency for search; LLM item jointly evaluates retrieval evidence and generated behavior, including abstention on absent/conflicting context. |
| MLOps Engineer | SUPPORTING / SHARED AT INTERFACE | Own repeatable ML delivery, lineage, registries, deployment automation, monitoring, and governance mechanisms across teams | Owns task-specific model/adaptation/evaluation release criteria and behavior evidence; consumes or co-designs lifecycle mechanisms | MLOps item repairs reproducibility, lineage, promotion, or monitoring platform behavior; LLM item decides whether an adapter/model/context version has earned promotion. |
| ML Platform Engineer | SUPPORTING | Build self-service model/data/evaluation/serving capabilities for many ML teams | Supplies requirements and validates behavior on the task-specific path; does not own the shared platform product | Platform item chooses a generalized tenant, API, isolation, or extensibility design; LLM item chooses a model-system configuration using that platform. |
| ML Infrastructure Engineer | SUPPORTING | Build distributed compute, training, storage, networking, scheduling, and reliability systems | Understands resource effects and collaborates on training/inference experiments without making infrastructure construction universal core | Infrastructure item diagnoses collective communication, checkpoint, scheduler, or accelerator failure; LLM item diagnoses behavior/resource tradeoffs of a training run. |
| AI Performance Engineer | SUPPORTING / SHARED AT INTERFACE | Optimize kernels, compilers, runtimes, quantization implementations, memory, and hardware efficiency | Chooses behavior-preserving performance targets and validates model quality; deep kernel/runtime invention remains adjacent | Performance item selects kernel/fusion/layout/runtime optimizations; LLM item determines whether quantization, batching, caching, or model size meets quality-latency-cost constraints. |
| AI Reliability Engineer / SRE | SHARED AT DIFFERENT DEPTH | Engineer reliability, resilience, observability, incident practice, capacity, and recovery across AI services | Owns model-behavior fallback, version compatibility, and evaluation replay; generalized fleet/SLO/incident systems remain adjacent | Reliability item restores service objectives and systemic resilience; LLM item distinguishes model/context/adaptation regression from runtime failure and selects bounded behavior. |
| AI Security Engineer | SUPPORTING / SHARED AT DIFFERENT DEPTH | Own threat models, security architecture, testing, vulnerabilities, controls, incident/security assurance across AI systems | Implements model-system security controls and evidence, but does not self-certify the security posture | Security item discovers/exploits or remediates prompt injection, data exfiltration, model theft, supply-chain, or tool-boundary risk; LLM item redesigns context/model/output behavior under the security requirement. |
| AI Red Team Engineer | SUPPORTING | Adversarially probe systems, design attacks, validate exploitability, and communicate findings independently | Provides artifacts, attack surfaces, remediation changes, and regression tests; cannot replace independent adversarial challenge | Red-team item finds novel or realistic failure paths; LLM item turns a confirmed finding into a model/context/data/control change and verifies non-regression. |
| AI Safety Engineer | SUPPORTING / SHARED AT DIFFERENT DEPTH | Define and test safety properties, safeguards, evaluations, deployment constraints, and incident learning | Implements task/model controls and reports residual limitations; formal safety claims and cross-system methods remain independent | Safety item chooses an assurance or deployment restriction from risk evidence; LLM item implements and measures behavior within that restriction. |
| AI Governance Specialist | SUPPORTING / authority boundary | Own policies, accountability structures, documentation requirements, review workflows, risk records, and regulatory alignment | Produces accurate model/data/evaluation/change evidence and implements approved controls; does not interpret law or accept organizational risk | Governance item determines process, documentation, owner, or compliance action; LLM item supplies traceable technical evidence and changes the model system. |
| Forward Deployed Engineer | SHARED AT DIFFERENT DEPTH | Own customer-embedded delivery from ambiguous workflow through integration, adoption, stabilization, and handoff | Owns language-model behavior depth; may support a customer deployment without owning commercial scope, adoption, or entire engagement outcome | FDE item balances customer workflow, integration, stakeholders, deployment constraints, and handoff; LLM item diagnoses data/context/model/adaptation evidence within that engagement. |
| AI Solutions Architect | SHARED AT DIFFERENT DEPTH | Establish feasibility, target architecture, service/model choices, governance posture, and implementation guidance | Must implement experiments, evaluation, integration, and behavior change rather than stop at the design recommendation | Architect item selects and defends target architecture; LLM item proves a model-system change through reproducible behavior evidence. |
| Product / Software Engineer | SHARED AT DIFFERENT DEPTH | Own product experience, deterministic services, state, interfaces, and software lifecycle | Adds model/data/context/adaptation/evaluation/inference accountability; does not own product priorities solely because it owns model behavior | Product item fixes deterministic feature/state/usability behavior; LLM item isolates probabilistic language behavior and selects an evidence-backed intervention. |
| AI Product Manager | SUPPORTING / authority boundary | Own user problem, priorities, roadmap, outcomes, and product tradeoffs | Converts product intent into technical behavior evidence and constraints; does not own roadmap or commercial authority | PM item prioritizes outcomes and scope; LLM item determines whether model-system evidence supports the requested behavior and what technical limitations remain. |

## Core, shared, supporting, and out-of-scope decisions

### CORE HERE

- language-task and behavior contract at the model-system boundary
- model family and access posture for the defined task
- prompt/template/context and decoding configuration as versioned engineering assets
- task-specific retrieval/context-generation coupling and grounded-behavior evaluation
- instruction, preference, domain, and evaluation data recipes at language-model depth
- adaptation choice, training experiment, retention/regression evidence, and promotion disposition
- language-model evaluation criteria, datasets, error taxonomy, grader use, and behavior regression gates
- stable model request/response/error/telemetry interfaces
- task-level inference tradeoffs and behavior-preserving optimization
- model/provider/checkpoint/adapter/tokenizer/context/runtime change compatibility

### SHARED AT DIFFERENT DEPTH

- user-task framing and product behavior with Applied AI/product teams
- agent model/tool-call behavior with Agentic AI teams
- data pipelines and quality with Data Engineering
- generalized training/serving lifecycle with MLE/MLOps/platform teams
- retrieval/index/ranking systems with Search Engineers
- performance, capacity, and reliability with infrastructure/performance/SRE
- evaluation validity with AI Evaluation Engineers and domain raters
- threat, safety, privacy, and governance evidence with accountable specialists
- research reproduction with Research Engineers and Scientists
- customer deployment with Forward Deployed Engineers

### SUPPORTING

- generalized distributed systems, accelerator scheduling, storage, networking, kernels, compilers, and fleet platforms
- enterprise data governance and canonical data-product ownership
- product roadmap, UX research, pricing, adoption, and commercial success
- independent red-team, safety-assurance, audit, privacy, legal, and compliance functions
- organization-wide incident command and reliability governance
- procurement and vendor-contract decisions

### OUT OF SCOPE

- claiming novel foundation-model research as a required professional output
- pretraining frontier foundation models from first principles as universal role core
- building a multi-tenant ML platform, distributed scheduler, compiler, or accelerator kernel as universal role core
- owning an autonomous agent's complete permissions, durable state, business effects, and recovery solely because an LLM selects tools
- formal legal, regulatory, privacy, safety, security, clinical, audit, or organizational risk acceptance
- product roadmap, customer contract, or commercial ownership by default
- guaranteeing truth, safety, fairness, or compliance from a benchmark, model card, or prompt

## Scenario classification tests

### Scenario 1 — Retrieval improved, answers worsened

A new reranker increases retrieval relevance but the assistant now combines conflicting policy versions into confident answers.

- **LLM Engineer:** CORE HERE. Separate retrieval and generation evaluation, expose provenance/freshness/conflict state, revise context and abstention behavior, and replay the behavior contract.
- **Search Engineer:** shared; owns generalized reranker/index behavior.
- **Applied AI Engineer:** shared; owns complete user/product behavior if the role exists separately.
- **Exam distinction:** an LLM item asks for the next diagnostic experiment across evidence/context/generation; a search item asks how to improve ranking evidence; an Applied AI item may decide to redesign the product or use a non-generative path.

### Scenario 2 — Fine-tuning beats the prompt baseline on average

An adapter improves tone and instruction following but factual correctness falls for a low-resource language and inference cost rises.

- **LLM Engineer:** CORE HERE. Audit data representation and leakage, measure segmented target/retention behavior, compare intervention alternatives, and reject or scope promotion until evidence supports it.
- **AI Evaluation Engineer:** shared; validates segment methodology and uncertainty.
- **MLOps/Platform:** supporting; makes training/promotion reproducible.
- **Exam distinction:** the LLM item asks for the experiment and release disposition, not the CI pipeline design or independent measurement-program governance.

### Scenario 3 — Tool calls are syntactically valid but duplicate payments

- **Agentic AI Engineer:** CORE HERE for idempotency, permission, confirmation, durable state, recovery, and action semantics.
- **LLM Engineer:** shared for tool selection, schema validity, and model/tool-call evaluation.
- **AI Security Engineer:** shared if exploitability or unauthorized effects exist.
- **Exam distinction:** the LLM item may improve structured call accuracy; the agentic item must prevent duplicate real-world effects even when the model repeats a valid call.

### Scenario 4 — Quantization doubles throughput

The runtime team proposes lower precision that doubles throughput but subtly changes refusal and structured-output behavior.

- **AI Performance Engineer:** CORE HERE for quantization/runtime implementation and hardware efficiency.
- **LLM Engineer:** CORE HERE for the behavior compatibility decision and evaluation replay.
- **SRE/AI Reliability:** shared for capacity/SLO and rollout.
- **Exam distinction:** performance item diagnoses memory/kernel/runtime bottlenecks; LLM item decides whether measured behavior changes are acceptable and how to bound rollout.

### Scenario 5 — A paper reports a new preference method

- **AI Research Engineer:** CORE HERE if the goal is novelty, method validation, or generalization.
- **LLM Engineer:** CORE HERE only when reproducing it against a defined system baseline, data, behavior contract, and operational constraint.
- **Exam distinction:** research item critiques experimental validity and novelty; LLM item chooses whether reproduction evidence earns adoption.

### Scenario 6 — The provider retires a model

- **LLM Engineer:** CORE HERE for inventory, behavior/evaluation replay, prompt/context/schema compatibility, shadow comparison, changed limits, and model-system migration disposition.
- **Applied AI Engineer:** shared for overall product outcome and non-LLM alternatives.
- **Platform/SRE:** shared for traffic migration, reliability, capacity, and rollback mechanism.
- **Procurement/legal:** authority over contract terms and regulatory interpretation.

### Scenario 7 — A model grader approves unsafe outputs

- **AI Evaluation Engineer:** CORE HERE for grader validity, calibration, independence, and measurement controls.
- **AI Safety/Security:** CORE HERE for the relevant assurance and risk decision.
- **LLM Engineer:** CORE HERE for removing unsupported reliance, adding appropriate evaluators, changing the model system, and verifying regression evidence.
- **Exam distinction:** the LLM item asks how the development/release decision changes; the evaluator item asks why the measurement is invalid and how to establish credible evidence.

### Scenario 8 — A legal-document assistant needs sensitive context

- **LLM Engineer:** CORE HERE for minimization in model/context/log interfaces, grounded/abstaining behavior, and evaluation under approved controls.
- **Privacy/legal/security:** authority over lawful basis, policy, control sufficiency, and risk acceptance.
- **Data Engineer:** shared for governed source systems and data contracts.
- **Exam distinction:** the LLM engineer cannot declare compliance; the correct answer includes technical evidence and escalation to accountable owners.

## Non-overlap rules for future standards and book work

1. Every core objective must require language-model-specific data, context, adaptation, evaluation, inference, or behavior-change reasoning. If a non-AI software or arbitrary ML answer is equally valid, rewrite or move it.
2. Applied AI coverage begins with whether and how AI produces product behavior. LLM coverage begins after a language-model path is plausible and goes deeper into the model-system evidence.
3. Agentic coverage may include model tool-use behavior, but chapters must stop before generalized planning, authorization, durable state, multi-agent coordination, effects, and recovery become the main subject.
4. Research methods are taught for reproduction, diagnosis, and adoption decisions. Novel contribution and general capability discovery remain outside the reader promise.
5. Evaluation is core as a development/release loop. Independent benchmark governance, psychometrics, measurement science, and cross-system assurance remain AI Evaluation depth.
6. Teach enough MLOps/platform/inference/performance to specify, integrate, diagnose, and validate task behavior. Do not turn the book into a platform, distributed training, kernel, or SRE curriculum.
7. Responsible controls are implemented and tested at the model-system boundary. Never imply engineering evidence grants formal authority.
8. A named tool or provider can illustrate a decision but cannot define a competency.
9. Every tuning or optimization objective must include a baseline, representative data, behavior/regression evidence, operational consequence, and disposition.
10. Every model-change objective must preserve explicit version identity and replayable evidence.

## Boundary verdict

The role remains independently teachable and assessable if it is centered on the language-model behavior lifecycle, supports both managed and open-weight access postures, and enforces the boundaries above. The overlap is real but not fatal: the differentiator is not “uses LLMs”; it is **owns evidence-backed language-model behavior and adaptation decisions**.

All bracketed claims and source limitations resolve to `evidence-register.json`.

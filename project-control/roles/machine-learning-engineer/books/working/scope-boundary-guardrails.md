# Machine Learning Engineer — Scope-Boundary Guardrails

## Purpose and use

This is a scope-neutral acceptance harness for later Machine Learning Engineer
publication proposals. It freezes ownership, originality, authority, and
creative-production tests without choosing a volume count, proposing a volume,
or depending on cluster sizing. A later proposal passes only when every
applicable rule below has a named artifact, decision owner, and observable
test result.

The invariant is the accepted Phase 01 unit of accountability: the **versioned
learning workload and its qualification dossier**. The Machine Learning
Engineer may own workload-specific technical qualification while another role
owns a shared service, scientific claim, product intent, or formal acceptance.
Collaboration never silently transfers authority. [`MLE-CLM-015`,
`MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-020`, `MLE-CLM-021`]

### Guardrail vocabulary

- **Retain** — teach at decision-and-artifact depth because the output qualifies
  or changes a particular learning workload.
- **Support** — teach enough to specify an interface, use a shared capability,
  diagnose a workload interaction, prepare evidence, and route a decision.
- **Exclude** — do not reproduce the adjacent profession's generalized
  curriculum, platform, method authority, or organizational mandate.
- **Authority** — name the person or function that accepts the claim, tradeoff,
  exception, risk, or real-world use. A technical dossier is evidence for that
  decision, not a substitute for it.

## Complete adjacent-role guardrail matrix — 17 of 17

| ID | Adjacent role or authority | Retain in the MLE accountability | Support at interface depth | Exclude from the MLE transformation | Authority that must remain explicit | Later-proposal acceptance test |
|---|---|---|---|---|---|---|
| `BND-01` | Data Scientist | Translate an approved analytical/model candidate into a versioned, served, observable, recoverable workload and preserve the statistical assumptions in its dossier. | Read experiment designs, uncertainty, segment results, and interpretation constraints well enough to implement and challenge handoffs. | General statistical analysis, inference practice, exploratory insight generation, and ownership of analytical conclusions. | Data Science or another qualified statistical reviewer owns interpretation and analytical sign-off. | **Pass only if** the proposed depth ends with workload qualification evidence, not a new analytical conclusion. [`MLE-CLM-015`, `MLE-CLM-021`] |
| `BND-02` | Data Engineer | Define and verify workload-facing snapshots, labels, features, schemas, freshness, provenance, and train/serve conformance. | Consume governed data products; specify workload requirements; diagnose contract, leakage, skew, and availability failures with data owners. | Enterprise ingestion, canonical source modeling, retention systems, generalized transformation estates, and shared data-product operation. | Data Engineering and data governance own source truth, access, retention, and shared pipeline decisions. | **Pass only if** every data topic names a model-workload contract and routes enterprise-data design to its owner. [`MLE-CLM-009`, `MLE-CLM-018`, `MLE-CLM-020`] |
| `BND-03` | Applied Scientist | Reproduce a credible method, bound its assumptions, retain a baseline, and determine whether its implementation qualifies under production constraints. | Understand experimental proof, ablations, and scientific tradeoffs enough to implement and test the method faithfully. | Novel-method research programs, generalized scientific conclusions, and acceptance of novelty or broad empirical claims. | Applied Science owns the scientific claim and novelty judgment. | **Pass only if** the output is an operable workload disposition with limitations, not a claim that the method advances the field. [`MLE-CLM-015`, `MLE-CLM-021`] |
| `BND-04` | AI Research Engineer | Harden a research implementation into repeatable workload code, measured envelopes, release evidence, and a supported recovery path. | Reproduce research artifacts and communicate engineering constraints that affect experimental validity. | Research-agenda selection, frontier-method creation, generalized experiment infrastructure, and research-velocity ownership. | Research leadership owns agenda and experimental-claim acceptance. | **Pass only if** the endpoint is production supportability for a bounded workload rather than research acceleration or novelty. [`MLE-CLM-017`, `MLE-CLM-021`] |
| `BND-05` | AI Evaluation Engineer | Implement measurement hooks, preserve representative slices, diagnose failures, remediate the workload, and replay an approved gate. | Supply workload context and candidate evidence; consume independently designed suites and stop-ship criteria. | Independent evaluation methodology, assurance-program ownership, and sole self-certification of consequential release gates. | Evaluation Engineering owns suite adequacy, measurement validity, and an independent stop-ship voice. | **Pass only if** implementation/remediation is separable from the independent decision that evidence is sufficient. [`MLE-CLM-011`, `MLE-CLM-019`] |
| `BND-06` | Applied AI Engineer | Qualify the model/data/serving release used by an application, including interface limits, monitoring, rollback, and lifecycle evidence. | Understand the user-facing behavior contract, integration boundary, fallback, and product consequence supplied by the application owner. | Complete AI product composition, interaction design, orchestration, product-level evaluation, and user-experience acceptance. | Applied AI and Product owners retain application-behavior and product-integration acceptance. | **Pass only if** the treatment generalizes across learning workloads and does not recreate an end-to-end AI product lifecycle. [`MLE-CLM-015`, `MLE-CLM-021`] |
| `BND-07` | LLM Engineer | Apply the general workload dossier to an LLM component's package, serving envelope, monitoring, recovery, and model-change evidence. | Use supplied language-behavior, context, retrieval, adaptation, and runtime contracts when an LLM is a case. | Prompt/context curricula, retrieval-system depth, grader design, post-training recipes, LLM compression, and LLM-specific behavior intervention as the endpoint. | LLM Engineering plus applicable safety/evaluation owners retain LLM-behavior and specialist release gates. | **Pass only if** an LLM case illuminates a model-family-neutral qualification decision and can be replaced by a non-LLM case without collapsing the concept. [`MLE-CLM-019`, `MLE-CLM-021`] |
| `BND-08` | Agentic AI Engineer | Qualify learned components and model-serving behavior that an action system consumes. | Record state/tool/effect constraints as workload inputs; provide model-specific uncertainty, monitoring, fallback, and release evidence. | Agent loops, tool design, action-state machines, delegation, permission policy, effect recovery, and autonomous workflow operation. | Agentic Engineering owns action execution and recovery; Security and domain owners retain permission and approval. | **Pass only if** no model qualification result is treated as authorization to perform an external action. [`MLE-CLM-018`, `MLE-CLM-020`, `MLE-CLM-021`] |
| `BND-09` | MLOps Engineer | Define one workload's evidence gates, promotion inputs, retraining conditions, rollback target, and correct use of the supported lifecycle path. | Use registries, orchestration, CI/CD/CT, lineage, and control plumbing; report workload requirements and defects. | Generalized golden pipelines, reusable automation services, fleet-wide policy engines, and lifecycle control-plane ownership. | MLOps owns shared automation, supported promotion mechanisms, and platform standards. | **Pass only if** the artifact specifies a workload's required evidence rather than designing the organization-wide delivery system. [`MLE-CLM-016`, `MLE-CLM-018`] |
| `BND-10` | ML Platform Engineer / ML Infrastructure Engineer | Measure the workload's compute, storage, feature, training, serving, observability, compatibility, and capacity envelope. | Select from supported platform capabilities, express requirements, validate tenancy/runtime compatibility, and escalate gaps. | Shared compute/orchestration architecture, multi-tenant services, schedulers, fleet capacity, platform upgrades, and developer-platform operation. | ML Platform/Infrastructure owns shared runtime, fleet, tenancy, capacity, reliability, and upgrade paths. | **Pass only if** implementation stops at measured workload compatibility and does not turn into a reusable platform build. [`MLE-CLM-018`, `MLE-CLM-021`] |
| `BND-11` | Software Engineer | Engineer model-facing software so versions, schemas, failure semantics, data/model uncertainty, skew, drift, and recovery are testable. | Apply ordinary API, service, distributed-systems, testing, and maintainability practices to the workload boundary. | A generalized software-engineering curriculum or ownership of unrelated application/service architecture. | The relevant Software Engineering owner retains non-ML service contracts and application ownership. | **Pass only if** the software depth exists because learned behavior or model/data change creates an additional qualification obligation. [`MLE-CLM-016`, `MLE-CLM-017`, `MLE-CLM-021`] |
| `BND-12` | Platform Engineer / Site Reliability Engineer | Diagnose model/data-specific signals; choose workload degradation, model rollback, feature rollback, or requalification actions; contribute evidence to incidents. | Integrate service telemetry, SLOs, incident procedures, capacity information, and platform mitigations. | Fleet SLO design, incident command, generalized observability platforms, infrastructure remediation, and organization-wide postmortem practice. | Platform/SRE owns incident command, global SLOs, shared capacity, infrastructure mitigation, and fleet rollback. | **Pass only if** the MLE action is a workload-specific recovery/requalification decision under the shared incident process. [`MLE-CLM-016`, `MLE-CLM-018`] |
| `BND-13` | Product | Translate an approved objective, population, consequence model, and tradeoff boundary into measurable technical acceptance evidence and non-goals. | Surface feasibility, uncertainty, segment behavior, operational cost, and residual limitations for product decision-making. | Product discovery, prioritization, roadmap, pricing, commercial strategy, launch intent, and acceptance of business tradeoffs. | Product owns the user promise, priority, commercial decision, and business acceptance. | **Pass only if** the proposal teaches how to test an approved contract, not whether the business should pursue it. [`MLE-CLM-008`, `MLE-CLM-020`] |
| `BND-14` | Security | Implement and test workload-specific access, artifact integrity, pipeline protection, inventory, monitoring, and incident evidence. | Consume the threat model and control requirements; report control performance, gaps, and residual limitations. | Security architecture as a profession, organizational policy, penetration/red-team curricula, exception approval, and security incident command. | Security owns threat/control acceptance, policy, exceptions, sign-off, and security-incident authority. | **Pass only if** the implementation record names the accepting security owner and never self-approves an exception. [`MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-020`] |
| `BND-15` | Safety | Engineer specified mitigations, evaluation hooks, monitoring, escalation, and stop behavior; repair and requalify failures. | Consume harm taxonomies, thresholds, independent evaluations, and escalation requirements. | Defining acceptable harm, claiming independent assurance, setting risk tolerance, or unilaterally releasing a consequential system. | Safety owners retain criterion sufficiency, independent escalation, stop-ship, and risk acceptance. | **Pass only if** mitigation engineering and safety acceptance are visibly separate decisions with separate evidence owners. [`MLE-CLM-019`, `MLE-CLM-020`] |
| `BND-16` | Privacy / AI Governance / Legal | Implement approved constraints through provenance, minimization, access, deletion, retention, documentation, monitoring, and verifiable controls. | Prepare impact evidence and route questions or exceptions to the named authority. | Legal interpretation, lawful-basis decisions, policy creation, formal impact approval, waivers, regulatory advice, and organizational risk acceptance. | Privacy, Governance, Legal, executive, or regulatory authorities retain interpretation and formal accountability. | **Pass only if** every constraint begins with an external decision owner and ends with implementation evidence, not a compliance claim. [`MLE-CLM-014`, `MLE-CLM-020`] |
| `BND-17` | Domain authorities | Encode approved intended-use populations, endpoints, constraints, consequence thresholds, escalation, and monitoring bounds in the workload dossier. | Present model evidence in domain-readable form and collect qualified review. | Clinical, financial, industrial, scientific, operational, or regulatory judgment; claims of real-world validity from technical benchmarks alone. | Qualified domain professionals and regulators retain intended-use validity, sector effectiveness/safety, and sign-off. | **Pass only if** benchmark or technical success cannot become domain authorization without a separately recorded decision. [`MLE-CLM-008`, `MLE-CLM-020`] |

## Scenario enforcement matrix — 10 of 10

These tests exercise combinations of the row rules. A later proposal need not
reuse the scenario as a teaching case, but it must make the listed disposition
possible without moving authority into the MLE role.

| ID | Stress condition | Retain | Support | Exclude | Authority and executable pass condition |
|---|---|---|---|---|---|
| `SCN-01` | A ranker improves average relevance but regresses a protected, high-consequence segment. | Segment diagnosis, candidate repair, evidence replay, and technical requalification. | Evaluation supplies an adequate representative gate and uncertainty treatment. | Product/domain tradeoff acceptance and independent evaluation design. | Product/domain authorities accept or reject residual tradeoffs; **pass if** an aggregate win cannot override the segment gate. [`MLE-CLM-011`, `MLE-CLM-019`, `MLE-CLM-020`] |
| `SCN-02` | A reusable feature platform needs a new online store and tenancy model. | Workload schema, freshness, train/serve skew, compatibility, and measured qualification. | Platform/Data Engineering designs and supplies the shared capability. | Online-store architecture, tenancy policy, and shared platform operation. | Platform/Data owners approve the shared architecture; **pass if** workload evidence does not confer fleet ownership. [`MLE-CLM-009`, `MLE-CLM-018`] |
| `SCN-03` | A training run is not bit-for-bit reproducible across hardware. | A bounded reproducibility statement, recorded identities, variance tests, limitations, and acceptable re-run evidence. | Platform owners define supported hardware/runtime combinations. | Absolute reproducibility promises and generalized runtime support decisions. | Workload qualification records the bounded claim; platform owns support. **Pass if** the limitation remains visible at release. [`MLE-CLM-010`] |
| `SCN-04` | A drift alert fires while outcome labels are delayed. | Investigate proxies, segments, data contracts, serving changes, and controlled dispositions without automatic promotion. | Evaluation defines evidence sufficiency; domain owners define consequence thresholds. | Blind retraining, automatic release, and MLE-defined domain tolerance. | Evaluation/domain owners retain their gates; **pass if** the response can hold, degrade, gather evidence, or roll back without fabricating ground truth. [`MLE-CLM-013`, `MLE-CLM-019`, `MLE-CLM-020`] |
| `SCN-05` | An LLM feature needs prompt, retrieval, and behavior-evaluation changes. | Package, serving-envelope, monitoring, lifecycle, compatibility, and rollback integration for the model workload. | LLM Engineering supplies and validates the language-behavior intervention. | Re-teaching prompting, retrieval, grader calibration, or LLM adaptation as general MLE depth. | LLM/evaluation owners retain specialist gates; **pass if** the MLE artifact records their accepted inputs without absorbing their curriculum. [`MLE-CLM-018`, `MLE-CLM-021`] |
| `SCN-06` | An agent may initiate a refund through a tool. | Model-component qualification, uncertainty, fallback, monitoring, and model-specific release evidence. | Agentic Engineering integrates the model with state/effect recovery; Security/domain owners supply permissions. | Tool authorization, payment authority, agent state-machine ownership, and effect-recovery design. | Agentic, Security, and domain authorities decide action permissions; **pass if** model qualification can never authorize a refund. [`MLE-CLM-020`, `MLE-CLM-021`] |
| `SCN-07` | A serving cluster breaches its fleet SLO during a model rollout. | Model/feature rollback, workload degradation, compatibility diagnosis, and requalification evidence. | SRE/Platform runs incident command and fleet mitigation. | Global SLO ownership, shared-infrastructure rollback, and incident-command replacement. | SRE/Platform directs the incident; **pass if** workload actions are coordinated under that authority and separately recorded. [`MLE-CLM-013`, `MLE-CLM-018`] |
| `SCN-08` | A medical model passes technical tests but its intended-use population changes. | Record the mismatch, block technical disposition, retire invalid evidence, and prepare a new qualification package. | Clinical, regulatory, privacy, safety, and governance reviewers assess the new use. | Medical validity, permissibility, legal interpretation, and risk acceptance. | Named domain/formal authorities decide use; **pass if** the old technical pass is invalidated rather than generalized. [`MLE-CLM-008`, `MLE-CLM-019`, `MLE-CLM-020`] |
| `SCN-09` | An applied scientist proposes a novel architecture with promising offline results. | Preserve a simple baseline; package the candidate; test representative behavior, serving limits, staged release, and recovery. | Applied Science owns the research claim and supplies experimental rationale. | Novelty acceptance, broad scientific conclusions, and promotion based only on offline promise. | Scientific authority owns the research claim; **pass if** the workload is promoted only through independent qualification evidence. [`MLE-CLM-011`, `MLE-CLM-012`, `MLE-CLM-013`, `MLE-CLM-021`] |
| `SCN-10` | Security requires artifact integrity and restricted model access. | Implement signing/integrity checks, scoped access, inventory, monitoring, and workload evidence. | Security defines controls, reviews residual gaps, and handles exceptions. | Security policy, exception approval, and claims of formal assurance. | Security accepts the control posture; **pass if** evidence shows implementation while approval remains externally recorded. [`MLE-CLM-014`, `MLE-CLM-020`] |

## Existing Komal publication inventory — 5 of 5

This inventory uses only each publication's accountable center and observable
reader endpoint. It deliberately does not import its prose, cases, parts,
chapter sequence, page composition, or teaching architecture.

| ID | Existing publication | Accountable center | Reader endpoint that must not be duplicated | Permissible MLE contact |
|---|---|---|---|---|
| `PUB-01` | *Forward Deployed Engineering: From Ambiguous Workflow to Production Outcome* | End-to-end ownership of a customer deployment: workflow discovery, scoped production delivery, adoption, stabilization, handoff, and field-to-product feedback. | The reader can lead an ambiguous customer engagement through a supportable production outcome. | Consume an approved customer/workflow contract or supply model-workload evidence; do not recreate engagement ownership, adoption, commercial scope, or handoff. |
| `PUB-02` | *Applied AI Engineering: From Model Capability to Dependable Product Behavior* | User-facing AI behavior across task framing, mechanism choice, application composition, evaluation, release, fallback, and product change. | The reader can turn uncertain model capability into measurable, controlled application behavior. | Qualify the underlying versioned model/data/serving workload; do not recreate the complete AI product or interaction lifecycle. |
| `PUB-03` | *Agentic AI Engineering: Designing, Evaluating, and Operating Systems That Act* | Bounded action systems across loops, tools, state, delegation, authority, effects, trajectory evaluation, and recovery. | The reader can build, evaluate, release, and recover a controlled agent that acts through tools and systems. | Supply qualified learned components and their evidence; do not teach agent execution, delegated authority, tool effects, or action recovery. |
| `PUB-04` | *LLM Behavior Engineering: Contracts, Context, Retrieval, and Evaluation* | Explicit, grounded, measurable language behavior using contracts, authorized context, retrieval, evaluation, and model-boundary controls without requiring weight access. | The reader can ship dependable, model-change-ready language behavior. | Use an accepted LLM behavior contract as a workload input; do not reproduce language-behavior construction, RAG, prompting, or grader design. |
| `PUB-05` | *LLM Adaptation and Runtime: Data, Post-Training, Inference, and Model Change* | Evidence-controlled change to language-model weights and runtime through adaptation data, training methods, compression, serving, inference, and replay. | The reader can justify, execute, evaluate, serve, and evolve task-specific LLM adaptations. | Demonstrate model-family-neutral lifecycle principles with a bounded LLM example only; do not reproduce post-training recipes or LLM inference specialization. |

### Executable non-duplication tests

Every later structure and every retained learning unit must pass all tests:

1. **`ND-01 — Accountability-center test`:** state its primary engineering
   decision in one sentence. Fail if that decision is already the accountable
   center of `PUB-01` through `PUB-05`.
2. **`ND-02 — Reader-endpoint test`:** name a demonstrable before/after
   capability. Fail if completing an existing publication already produces the
   same endpoint without a new workload-qualification obligation.
3. **`ND-03 — Unit-of-work test`:** the durable output must be a versioned
   learning workload and qualification dossier. Fail if it is principally a
   customer engagement, AI application experience, acting agent, language
   behavior system, or LLM adaptation program.
4. **`ND-04 — Artifact-spine test`:** map each proposed artifact to a new MLE
   disposition. Fail if the artifact chain merely renames an existing book's
   capstone artifacts or repeats them in the same dependency order.
5. **`ND-05 — Replaceability test`:** replace any LLM, agentic, customer, or
   generative-AI example with a classical, statistical, deep-learning, or
   physical/edge workload. Fail if the teaching objective collapses.
6. **`ND-06 — Specialist-depth test`:** apply `BND-01` through `BND-17`. Fail
   if supporting knowledge becomes the adjacent profession's generalized
   curriculum or authority.
7. **`ND-07 — Prose-and-architecture originality test`:** compare proposed
   text, case premises, figures, tables, and content progression against all
   five publications. Fail on copied/paraphrased prose, distinctive case reuse,
   or inherited chapter/part architecture; a shared industry term is not by
   itself duplication.
8. **`ND-08 — Evidence-newness test`:** require MLE claim IDs, workload-specific
   decisions, and current sources for every substantive claim. Fail if an
   existing publication is treated as the technical source or evidence base.
9. **`ND-09 — Outcome-not-topic test`:** overlap in a topic such as evaluation,
   deployment, monitoring, security, or change passes only when the owner,
   evidence, and disposition differ. Fail if the difference is merely a title
   change.
10. **`ND-10 — Merge-or-route test`:** remove or route any unit that fails one
    of the tests above. Do not preserve it for symmetry, marketing coverage, or
    page count.

## Reserved depth for later catalog roles and external authorities

The MLE publication may teach collaboration literacy but may not consume the
professional transformation reserved below. These are depth reservations, not
claims about how every employer staffs a team.

| Reservation family | Named future roles or authorities | Reserved professional depth | MLE support ceiling | Failure signal |
|---|---|---|---|---|
| `RSV-01` Research | AI Research Engineer; Applied Scientist | Research agendas, novel/generalizable capability, experimental claims, research systems, and scientific acceptance. | Reproduce, bound, productionize, and qualify a selected method for one workload. | The endpoint is novelty, publication, or research velocity. |
| `RSV-02` Evaluation | AI Evaluation Engineer | Independent measurement validity, adversarial/representative suite design, assurance practice, and stop-ship authority. | Implement hooks, supply workload context, diagnose, repair, and replay an independently accepted gate. | The workload owner designs and self-certifies every consequential gate. |
| `RSV-03` Data | Data Scientist; Data Engineer; Analytics Engineer; Data Platform Engineer; Data Architect | Statistical conclusions, enterprise truth, governed data products, transformation systems, data platforms, and organization-wide information architecture. | Workload-facing snapshots, labels, feature/data contracts, provenance, skew, and conformance. | The scope owns enterprise data or analytical sign-off. |
| `RSV-04` MLOps | MLOps Engineer | Reusable CI/CD/CT, registry and promotion services, lineage/control plumbing, and organization-wide lifecycle standards. | Specify and correctly use the path for one workload; supply required gates and rollback state. | The deliverable is a generalized golden pipeline. |
| `RSV-05` ML Platform / Infrastructure | Machine Learning Platform Engineer; Machine Learning Infrastructure Engineer | Multi-tenant training/serving platforms, schedulers, feature/model services, fleet capacity, shared runtime, upgrades, and developer experience. | Measure workload requirements, compatibility, utilization, and limits. | The project is a reusable fleet or platform service. |
| `RSV-06` Reliability / Performance | AI Reliability Engineer; AI Performance Engineer | Cross-workload reliability engineering, performance methodology, capacity systems, profiling/optimization depth, and reusable resilience mechanisms. | Measure and improve the workload envelope; integrate supplied mechanisms and provide model-specific incident evidence. | Workload tuning becomes a generalized reliability or performance program. |
| `RSV-07` Security / Safety / Governance | AI Security Engineer; AI Red Team Engineer; AI Safety Engineer; AI Governance Specialist | Threat and adversarial programs, safety criteria, independent assurance, policy, risk acceptance, governance records, and formal approvals. | Implement specified controls, expose residual limitations, prepare evidence, and escalate. | The MLE grants an exception, declares acceptable harm, or claims compliance/assurance. |
| `RSV-08` Architecture | Solutions Architect; AI Solutions Architect; Enterprise Architect; Software Architect; Cloud Architect; Security Architect | Cross-system target architecture, portfolio standards, enterprise tradeoffs, advisory authority, and organization-wide design governance. | Express workload constraints, evaluate fit, implement the accepted boundary, and report incompatibility. | The endpoint is enterprise-wide architecture or advisory sign-off. |
| `RSV-09` Cloud / DevOps / Platform / SRE | Cloud Engineer; DevOps Engineer; Platform Engineer; Site Reliability Engineer | Cloud foundations, deployment platforms, fleet operations, shared observability, incident command, SLO programs, capacity, and infrastructure recovery. | Integrate supported services and own model/data-specific signals, rollback, degradation, and requalification. | The scope owns global SLOs, fleet mitigation, or shared delivery infrastructure. |
| `RSV-10` Product | Product owners and future product-management publications | User problem, value, priority, roadmap, market/commercial choice, launch intent, and acceptable business tradeoffs. | Convert an approved promise into measurable technical evidence and disclose feasibility and limitations. | A technical score decides what should be built or launched. |
| `RSV-11` Domain authority | Clinical, financial, scientific, industrial, operational, regulatory, privacy, and legal professionals | Intended-use validity, consequence models, sector effectiveness/safety, permissibility, interpretation, and formal sign-off. | Encode approved constraints, produce reviewable evidence, block invalid technical disposition, and route decisions. | Benchmark success is presented as real-world authorization. |

The 11 reservations cover all 27 named later catalog roles present in the
approved role registry plus Product and domain/formal authority families. A
later proposal must include a `reservation_result` for `RSV-01` through
`RSV-11`: `NOT TOUCHED`, `SUPPORT ONLY`, or `FAIL — ROUTE/REMOVE`.

## Learning Systems Test Bench creative-production guardrails

The visual system explains retained scope; it cannot manufacture scope or page
count. Every page or figure must improve a specific decision, relationship,
sequence, comparison, failure diagnosis, or evidence trail.

### Permitted explanatory grammar

- **Bench Zero:** ownership boundary, lifecycle, evidence legend, prerequisites,
  routed contents, and case orientation.
- **Bench Setup:** task, data boundary, retained baseline, model family,
  acceptance target, relevant claims, evidence state, and lifecycle position.
- **Bench Sheet:** the smallest useful artifact beside calm sustained reading:
  experiment card, split rail, learning curve, calibration strip, confusion
  tile, lineage tag, serving envelope, drift band, or comparison record.
- **Qualification Gate:** evidence, population/segment, uncertainty, threshold,
  consequence, owner, disposition, rollback target, and next evidence.
- **Closing dossier:** selected model, retained baseline, validation limits,
  monitoring triggers, rollback target, owner, retraining condition, and exact
  release/recovery record.

### Executable creative-policy tests

1. **`CP-01 — Decision job`:** every non-prose element names one learning
   problem and the decision it helps the reader make. Remove it if neither can
   be stated precisely.
2. **`CP-02 — Evidence trace`:** every gate or lab connects input identity,
   measured evidence, limitation, owner, disposition, and next action. Never
   present a score, dashboard, registry entry, or model card as complete
   assurance.
3. **`CP-03 — Semantic color`:** use Instrument Blue for baseline/measured
   evidence, Calibration Lime only for a visibly labeled passed threshold,
   Diagnostic Rose for a labeled regression/invalidation/intervention/rollback,
   and Grid Steel for inactive structure. Color is never the only signal.
4. **`CP-04 — Screen-first legibility`:** use 7 by 10 portrait pages; Archivo
   SemiCondensed for orientation, Source Sans 3 at no less than 11.5pt and
   roughly 1.48 leading for sustained reading, and IBM Plex Mono only for exact
   technical identities. Captions, tables, code, and footnotes must remain
   tablet-readable without zoom-dependent microtype.
5. **`CP-05 — Callout discipline`:** callouts must carry a limitation,
   diagnostic, authority boundary, evidence status, or actionable decision.
   Decorative quotations, generic motivation boxes, and repeated summaries
   fail.
6. **`CP-06 — Lab truth`:** a lab identifies whether its result is executed,
   recorded, illustrative, or synthetic; binds inputs and expected evidence;
   and never implies production, safety, or business performance it did not
   observe.
7. **`CP-07 — Quantitative precision`:** exact plots, tables, axes, thresholds,
   identifiers, and overlays use semantic HTML/CSS so text remains selectable
   and exact. Raster art must not carry paragraphs or irreplaceable numeric
   truth.
8. **`CP-08 — ImageGen threshold`:** commission an original ImageGen image only
   when a colorful, crisp, dimensional conceptual illustration or system
   cutaway materially improves architecture, sequence, causality, comparison,
   hierarchy, troubleshooting, or memory. A decorative image fails.
9. **`CP-09 — Raster integrity`:** canonical publication art is PNG only. Do
   not create or store SVG or WebP publication figures; Astro controls delivery
   optimization. Images must contain no logos, watermarks, fake interfaces, or
   unreviewed embedded text.
10. **`CP-10 — Mascot restraint`:** no generic mascot. Komal's likeness may be
    used only when it performs a pedagogical role, preserves identity from the
    approved local reference set, and is not a repeated page ornament.
11. **`CP-11 — Accessibility and provenance`:** every retained figure binds
    purpose, relationships, facts, sources, short verified labels, caption, alt
    text, long description where needed, prompt, avoid list, dimensions,
    canonical path, and SHA-256 hash.
12. **`CP-12 — Page-inflation test`:** remove an element or page when deleting
    it does not reduce comprehension, decision quality, accessibility, or
    evidence traceability. Extra pages are acceptable only when they make
    difficult material easier to read, not when they simulate richness.
13. **`CP-13 — Visual originality`:** do not copy or paraphrase supplied visual
    references' illustrations, tables, page compositions, branding, or
    distinctive elements. The test-bench grammar and all artifacts must be
    original Komal work.
14. **`CP-14 — Cover truth`:** the Warm Bench Paper cover, Bench Black
    instrument window, three evidence traces, visible gate, bench plate, title,
    and author Komal Nakrani must remain technical and readable; reject neural
    glow, humanoid robots, stock laboratories, generic mascots, fake UI, logos,
    and watermarks.

## Later-proposal acceptance record

A later structure may be evaluated only when its decision record contains:

- `BND-01` through `BND-17`, each with `PASS` or a routed/removed item;
- `SCN-01` through `SCN-10`, each with a disposition and named authority;
- `ND-01` through `ND-10`, with conflicts against all five `PUB-*` records;
- `RSV-01` through `RSV-11`, using the required reservation result vocabulary;
- `CP-01` through `CP-14`, mapped to its production policy;
- no unstated transfer of scientific, evaluation, platform, product, security,
  safety, governance, legal, or domain authority;
- no conclusion based on framework, cloud, model family, trend, inherited
  publication size, or decorative page target.

This file deliberately records **no** volume verdict, proposed title, chapter
list, project structure, page count, or manuscript decision.

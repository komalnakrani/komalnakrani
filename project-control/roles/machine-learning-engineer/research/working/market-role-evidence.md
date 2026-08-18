# Machine Learning Engineer — Market Role Evidence

Access date: **2026-08-18**

Lane: employer title and role-pattern evidence only

Allocated records: `MLE-SRC-001`–`MLE-SRC-012`; `MLE-CLM-001`–`MLE-CLM-007`

## Method and boundary

This lane inspected live official employer career pages and employer-controlled
Greenhouse or Ashby postings. A search result was discovery evidence only. A
source entered the fragment only after its final URL returned a live page with
the matching active job content; Greenhouse records were also checked through
the public board API, and Ashby records through their live `JobPosting`
structured data. Four initially discovered pages were rejected because their
direct URLs returned 404 or no longer exposed the job record.

Postings describe one employer's current hiring need. They are strong evidence
of title usage and recurring work patterns, but weak evidence of universal
organizational design, formal authority, or actual operating maturity. Tool and
vendor names are treated as replaceable examples.

## Source inventory

| ID | Employer and context | Exact live title | Location | Seniority signal | Live source |
|---|---|---|---|---|---|
| `MLE-SRC-001` | Apple — consumer technology / worldwide product marketing | Senior Machine Learning Engineer - Worldwide Product Marketing | Cupertino, California, US | Senior; 8 years minimum, 10 preferred | [Apple role 200657324](https://jobs.apple.com/en-us/details/200657324/senior-machine-learning-engineer-worldwide-product-marketing) |
| `MLE-SRC-002` | IMC — systematic trading | Machine Learning Engineer | Amsterdam, Netherlands; London, UK | Experienced; 5+ years | [IMC Greenhouse role 4567047101](https://job-boards.eu.greenhouse.io/imc/jobs/4567047101) |
| `MLE-SRC-003` | Moloco — advertising technology | Machine Learning Engineer-Technical Research Personnel (머신러닝 엔지니어-전문연구요원) | Seoul, Korea | Unlevelled; MS/PhD and production-system experience | [Moloco Greenhouse role 6245366003](https://job-boards.greenhouse.io/moloco/jobs/6245366003) |
| `MLE-SRC-004` | Human Computer Lab — consumer robotics | ML Engineer | San Francisco, California, US | Unlevelled; 3+ years or equivalent | [Human Computer Lab Ashby role](https://jobs.ashbyhq.com/human-computer-lab/eb62af20-f469-40dc-b0a1-8b7ec59c9225) |
| `MLE-SRC-005` | Bedrock Robotics — construction autonomy | Machine Learning Engineer: Imitation and Reinforcement Learning for Robotics | San Francisco, California, US | Unlevelled specialist; 3+ years applied and production ML | [Bedrock Ashby role](https://jobs.ashbyhq.com/bedrock-robotics/90558d16-8adb-4c62-a0fc-8fdfa809c0ca) |
| `MLE-SRC-006` | Faculty — energy transition consulting | Machine learning Engineer | London, UK | Unlevelled; no numeric threshold stated | [Faculty Ashby role](https://jobs.ashbyhq.com/faculty/27dee06f-ffaa-462e-9b91-888272ba5989) |
| `MLE-SRC-007` | Mariana Minerals — minerals and refining | Machine Learning Engineer | Ann Arbor; Houston; San Francisco, US | Broad entry; 2–8+ years or strong recent graduate | [Mariana Minerals Ashby role](https://jobs.ashbyhq.com/marianaminerals/44c92dd6-55f2-4e44-9360-bf4676466dac) |
| `MLE-SRC-008` | Virtu Financial — systematic trading research technology | Machine Learning Engineer | New York, US | Experienced; 5+ years | [Virtu Greenhouse role 8457186002](https://job-boards.greenhouse.io/virtu/jobs/8457186002) |
| `MLE-SRC-009` | AI Squared — enterprise AI platform | Machine Learning Engineer | Washington, DC, US | Experienced; 5+ years in MLE, MLOps, or similar | [AI Squared Greenhouse role 4604010006](https://job-boards.greenhouse.io/aisquared/jobs/4604010006) |
| `MLE-SRC-010` | Local Infusion — health-care operations | Machine Learning Engineer | Nashville, Tennessee, US | Experienced; 6+ years | [Local Infusion Ashby role](https://jobs.ashbyhq.com/Local%20Infusion/1ae56b4b-4568-48f7-b393-5937c3db64fe/) |
| `MLE-SRC-011` | Lightspeed — construction robotics | AI & Machine Learning Engineer | Northbrook, Illinois, US | Experienced; 4+ years | [Lightspeed Ashby role](https://jobs.ashbyhq.com/lightspeed/0b8bb2c8-8049-4b53-b1d1-74397807ccf2) |
| `MLE-SRC-012` | Tycho.AI — defense and autonomous systems | Machine Learning Engineer - Computer Vision & Robotics | Cambridge, Massachusetts, US | Specialist; no numeric threshold stated | [Tycho.AI Ashby role](https://jobs.ashbyhq.com/tycho-ai/d4dd3f4b-451d-4f60-a2b1-f2368bbd7368) |

The set contains twelve independent employers and more than six industry
contexts. The exact unqualified title appears at IMC, Mariana Minerals, Virtu,
AI Squared, and Local Infusion. The same profession also appears with seniority,
abbreviation, hybrid AI/ML, localization, or domain qualifiers. This supports
**Machine Learning Engineer** as the canonical catalog label while treating
those forms as employer-specific aliases or specializations, not separate
universal professions. [`MLE-CLM-001`, `MLE-CLM-007`]

## Employer role-pattern records

### `MLE-SRC-001` — Apple

- **Daily and implementation work:** benchmark, adapt, and integrate models;
  deploy, monitor, and support AI tools; implement LLM features and agent
  workflows; evaluate output quality, latency, and safety.
- **Strategy and architecture:** design end-to-end solutions for ambiguous
  business problems with feasibility, scalability, performance, and measurable
  impact constraints.
- **Operations, stakeholders, and deliverables:** work cross-functionally from
  research and experimentation through production-grade deployment. The
  deliverable is a supported production AI/ML solution and its evaluation
  evidence, not only a trained model.
- **Qualifications and volatility:** eight years of related production ML or
  high-throughput application experience and a relevant bachelor's degree;
  ten years preferred. The role has substantial current LLM/agent language,
  and official Apple search views showed both April 23 and July 27 labels for
  role 200657324, consistent with a repost or search-index variation.

### `MLE-SRC-002` — IMC

- **Daily and implementation work:** build distributed training and low-latency
  inference pipelines, performance libraries, scalable model frameworks, and
  automated experiment, tuning, and retraining paths.
- **Strategy and architecture:** make GPU, framework, orchestration, and
  third-party-tool decisions that shorten research cycles and satisfy real-time
  trading constraints.
- **Operations, stakeholders, and deliverables:** partner with quantitative
  researchers, hardware experts, software engineers, and HPC specialists. The
  outputs are training/inference systems, optimized workflows, and production
  prediction paths.
- **Qualifications and volatility:** five-plus years focused on training or
  inference systems, with Python/CUDA/C++, frameworks, GPU acceleration, and
  distributed training. This is an infrastructure-heavy trading topology; the
  live API exposed an update time but no publication date.

### `MLE-SRC-003` — Moloco

- **Daily and implementation work:** design large-scale advertising models,
  construct training and serving data pipelines, and develop scalable cloud
  model servers.
- **Strategy and architecture:** choose model and online-service approaches for
  very high-scale prediction and help define future product roadmaps.
- **Operations, stakeholders, and deliverables:** work with product, account,
  and infrastructure engineering. Deliverables include models, pipelines,
  model servers, and product-roadmap input.
- **Qualifications and volatility:** an MS or PhD, ML/deep-learning software
  experience, programming fluency, and production ML-system knowledge. The page
  is an always-open expression of interest for Korean technical research
  personnel rather than proof of an immediate vacancy, and its performance
  figures are unverified employer claims.

### `MLE-SRC-004` — Human Computer Lab

- **Daily and implementation work:** build multimodal vision, audio, language,
  and interaction models; production-quality code; training/deployment
  pipelines; and embedded/hardware integration.
- **Strategy and architecture:** own model architecture work from early
  research to behavior on a physical consumer robot and reason about the whole
  integrated system.
- **Operations, stakeholders, and deliverables:** collaborate with research,
  mechanical, and robotics engineers, iterating on real robot perception and
  responsiveness. The deliverable is deployed robot behavior plus its software
  path.
- **Qualifications and volatility:** three-plus years or equivalent in robotics,
  control, or perception with Python/C++, frameworks, and deployment experience.
  A small lab can combine responsibilities that mature organizations separate.

### `MLE-SRC-005` — Bedrock Robotics

- **Daily and implementation work:** design, train, validate, launch, deploy,
  and debug behavior-cloning and reinforcement-learning models; build ingestion,
  labeling, and management pipelines.
- **Strategy and architecture:** scale learning architectures and the data
  systems required for reliable, reproducible production behavior.
- **Operations, stakeholders, and deliverables:** work with simulation, systems,
  and infrastructure teams; evaluate in open loop, simulation, and the real
  world; handle latency, hardware, and integration constraints. Deliverables
  are launched autonomy models, datasets/pipelines, and evaluation metrics.
- **Qualifications and volatility:** three-plus years applying deep learning and
  three-plus years building, deploying, and maintaining production ML. The
  posting does not specify final safety or field-release authority.

### `MLE-SRC-006` — Faculty

- **Daily and implementation work:** build production ML software, tools, and
  infrastructure; create reusable delivery components; operationalize models.
- **Strategy and architecture:** lead technical scoping and architecture,
  establish deployment standards, and judge feasibility and impact for energy
  and infrastructure clients.
- **Operations, stakeholders, and deliverables:** collaborate with engineers,
  data scientists, commercial leads, customers, and partners; act as a technical
  advisor. Deliverables are production-grade client systems, reusable
  components, architecture decisions, and explained tradeoffs.
- **Qualifications and volatility:** full-lifecycle experience, Python, software
  practice, cloud architecture/security, containers/orchestration, and strong
  communication; no numeric threshold. Consulting topology broadens client and
  commercial work beyond many product-team roles.

### `MLE-SRC-007` — Mariana Minerals

- **Daily and implementation work:** run simulator-based reinforcement-learning
  experiments, build reward/observation/action logic, train and diagnose
  controllers, compare them with real plant data, and contribute tested
  production-service code.
- **Strategy and architecture:** help close the simulation-to-reality gap for
  control models balancing recovery, reagent, energy, and uptime outcomes.
- **Operations, stakeholders, and deliverables:** partner with process and
  chemistry experts. Deliverables include trained controllers, performance
  analysis, simulation-gap findings, and production service changes.
- **Qualifications and volatility:** two-to-eight-plus years, including
  internships/research, or a strong recent graduate; Python, ML fundamentals,
  and willingness to learn industrial chemistry. Live-plant autonomy is a goal,
  not verified performance or proof of delegated process-safety authority.

### `MLE-SRC-008` — Virtu Financial

- **Daily and implementation work:** build experiment tracking, orchestration,
  reproducibility, back-test and monitoring tools, versioned data/feature paths,
  and GPU-cluster visibility; diagnose distributed training bottlenecks.
- **Strategy and architecture:** shape the ML research platform, capacity and
  cloud/on-premise tradeoffs, and tooling choices that improve research output.
- **Operations, stakeholders, and deliverables:** work directly with
  quantitative researchers and infrastructure engineers. Deliverables are a
  recoverable research platform, repeatable runs, reliable data access, and
  production-monitoring capabilities.
- **Qualifications and volatility:** five-plus years in ML engineering,
  research infrastructure, or HPC with strong Python and distributed-system
  literacy. This source shows MLE/platform overlap but little direct model
  selection, so it cannot define the whole role alone.

### `MLE-SRC-009` — AI Squared

- **Daily and implementation work:** implement deployment pipelines, operate
  LLM and other model services, build monitoring/logging/alerts, create ML
  CI/CD, and optimize cloud runtime behavior.
- **Strategy and architecture:** design scalable, available, reproducible
  production paths and transition research prototypes into supported services.
- **Operations, stakeholders, and deliverables:** work with data scientists,
  data engineers, and product teams. Deliverables are deployment automation,
  observable model services, drift signals, and reliable runtime behavior.
- **Qualifications and volatility:** five-plus years as MLE, MLOps Engineer, or
  similar with lifecycle tooling, Python, frameworks, cloud, Docker, and
  Kubernetes. Its older update timestamp and explicit MLOps overlap make it
  strong boundary evidence but weak evidence for model-development scope.

### `MLE-SRC-010` — Local Infusion

- **Daily and implementation work:** build and deploy models for missing data,
  treatment delays, referral triage, and payer/patient friction; maintain LLM
  workflows and collection, cleaning, labeling, storage, and feedback paths.
- **Strategy and architecture:** own the platform's intelligence layer, define
  success measures, and identify high-leverage automation opportunities.
- **Operations, stakeholders, and deliverables:** partner with product,
  engineering, and operations; monitor performance and improve accuracy and
  reliability. Outputs are embedded workflow models, data pipelines, monitoring
  evidence, and improvement loops.
- **Qualifications and volatility:** six-plus years across ML engineering, data
  science, or applied AI; production deployment, cloud, unstructured data, and
  health-data experience. Mention of HIPAA is a desired context, not proof of
  compliance or clinical authority.

### `MLE-SRC-011` — Lightspeed

- **Daily and implementation work:** design, train, and deploy robotics,
  computer-vision, predictive-maintenance, and anomaly models; build sensor-to-
  deployment pipelines; implement labeling, versioning, monitoring, A/B tests,
  experiment tracking, and edge optimization.
- **Strategy and architecture:** integrate models with ROS2 control and choose
  edge/hardware paths under real-time reliability and precision constraints.
- **Operations, stakeholders, and deliverables:** collaborate with robotics
  engineers on sensors and calibration and scale across production cells.
  Deliverables are deployed perception/control models, observable pipelines,
  optimized edge artifacts, and integrated robot behavior.
- **Qualifications and volatility:** four-plus years deploying production
  models, strong vision/robot-learning, Python/C++, infrastructure, and real-time
  inference. The broad hybrid title and startup scope combine work that can
  belong to multiple specialist teams.

### `MLE-SRC-012` — Tycho.AI

- **Daily and implementation work:** build and optimize vision/robotics models,
  training and fine-tuning pipelines, compressed artifacts, embedded inference,
  and latency/throughput/accuracy profiles.
- **Strategy and architecture:** make model-size, compute, memory, accelerator,
  and performance tradeoffs for GPS-denied autonomous systems.
- **Operations, stakeholders, and deliverables:** the posting emphasizes
  collaborative software practice rather than named business stakeholders.
  Outputs are maintainable model code, training pipelines, compressed models,
  and tuned on-device inference.
- **Qualifications and volatility:** relevant degree, applied CV/robotics,
  Python/C++, frameworks, deployment, and collaborative development; no years
  threshold. Defense and autonomy constraints limit generalization, and release,
  field-validation, and monitoring authority are unstated.

## Market synthesis

### Exact title use versus aliases

The unqualified **Machine Learning Engineer** title remains a credible canonical
name: independent employers use it in trading, minerals, enterprise AI,
health-care operations, and other contexts. Current employers also prepend
seniority, abbreviate it to **ML Engineer**, combine it as **AI & Machine
Learning Engineer**, localize it, or append a domain such as computer vision,
robotics, imitation learning, or reinforcement learning. These variants carry
real differences in hiring need, but the repeated center is engineering a
model-dependent system into usable operation. [`MLE-CLM-001`]

The title is not standardized. Mariana permits a strong recent graduate, while
Apple asks for at least eight years; several nominally unlevelled roles ask for
four to six years. An experience threshold or “senior” prefix is therefore a
vacancy-specific signal, not a universal competency grade. [`MLE-CLM-007`]

### Durable convergence

The durable pattern is a path, not a tool list:

1. translate a product, research, or physical-system need into a model-system
   design;
2. build or adapt data, models, training, validation, and integration;
3. make the path reproducible enough to compare and recover changes;
4. deploy or serve under actual latency, reliability, resource, or hardware
   constraints;
5. monitor, diagnose, support, and improve the system with stakeholder and
   domain evidence.

No single source proves all five steps, but the path recurs across independent
employers. Model-product roles emphasize framing, training, evaluation, and
integration; platform-heavy roles emphasize repeatable compute, data,
deployment, and observability. Both are credible MLE patterns when the work is
accountable to a model lifecycle rather than generic infrastructure alone.
[`MLE-CLM-002`, `MLE-CLM-003`, `MLE-CLM-004`, `MLE-CLM-005`]

Stakeholder translation is equally durable. The postings repeatedly connect
MLE work to product, domain, quantitative research, data, infrastructure,
hardware, commercial, operations, or client teams. This evidence supports
collaboration and translation as core work; it does not grant the MLE final
authority over clinical care, trading decisions, chemical-process safety,
security, compliance, product priority, or generalized platform reliability.
[`MLE-CLM-006`]

### Current hiring fashion

The current layer is visible in repeated LLM/agent wording, vector search,
named cloud services, particular framework/tool stacks, GPU accelerator names,
VLA models, and current orchestration products. Robotics and industrial postings
also prominently feature reinforcement learning, edge accelerators, and
simulation-to-real transfer. Those details are valuable examples of 2026 demand,
but they are too volatile to define the profession.

The book-level role definition should therefore preserve the durable decisions:
problem and data boundary, baseline, model/training design, reproducible
evaluation, integration, qualification, serving, monitoring, diagnosis, and
controlled revision. Current products and fashionable model families belong in
replaceable examples.

## Bounded conclusion

This employer lane supports retaining **Machine Learning Engineer** as the
canonical title. It does not by itself decide the Phase 01 verdict, because the
full gate also requires technical-body evidence, failure evidence, and an
adjacent-role boundary. The market evidence specifically supports a
production-oriented model-system accountability while warning that some
employers place most depth in model/product work and others in ML infrastructure.
The coordinator should integrate this lane with the other Phase 01 evidence
before defining non-scope or issuing `PROCEED`.

## Limitations

- Job postings are volatile and may disappear, be edited, or remain live after
  hiring intent changes.
- Greenhouse pages for `MLE-SRC-002`, `MLE-SRC-003`, `MLE-SRC-008`, and
  `MLE-SRC-009` expose update timestamps but no publication date; their JSON
  `publication_date` is therefore `null`, not inferred from indexing time.
- `MLE-SRC-003` is an expression of interest, and `MLE-SRC-009` has an older
  update timestamp despite being live and listed by the employer.
- Employer claims about throughput, scale, impact, production maturity, safety,
  or autonomy were not independently verified and are not repeated as general
  facts.
- The source set is intentionally broad but not a statistically representative
  labor-market sample. It establishes credible use and convergence, not title
  prevalence or geographic distribution.

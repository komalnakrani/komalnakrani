# Forward Deployed Engineering — Visual Forecast

## Visual policy

The manuscript uses figures only when spatial structure improves understanding of a relationship, boundary, sequence, comparison, state change, or diagnostic path. Screenshots and decorative scenes do not count as technical figures.

Every final figure must:

- have a unique ID, descriptive caption, text alternative, and source/provenance record;
- remain legible in grayscale on an A4/Letter print page and at typical web reading width;
- use the book's consistent color, typography, line-weight, icon, and arrow semantics;
- distinguish fact/evidence, decision, assumption, control, risk, system, actor, and outcome consistently;
- avoid embedding essential information only in color;
- use fictional/synthetic data unless a licensed primary source explicitly permits reproduction;
- be checked against the chapter claim and capstone artifact it supports;
- not copy employer diagrams or inherited site assets.

## Visual grammar

- **Actor:** rounded rectangle
- **System/service:** squared rectangle
- **Data store/artifact:** cylinder or document shape
- **Decision:** diamond
- **Outcome/metric:** hexagon
- **Risk/failure:** warning marker plus label
- **Control/gate:** bar or shield marker
- **Observed evidence:** solid line/container
- **Assumption/proposed state:** dashed line/container
- **Ownership boundary:** labeled enclosure
- **Normal flow:** solid arrow
- **Feedback/learning flow:** curved/dotted return arrow

The final design tokens are set during figure production; these semantics are locked.

## Planned figures

| ID | Ch. | Form | Working caption / concept | Decision or understanding enabled | Capstone relationship |
| --- | ---: | --- | --- | --- | --- |
| F01.1 | 1 | boundary map | FDE at the intersection of customer workflow, production engineering, and product learning | Separates the role from software, solutions, account, and strategy work | OA-01 responsibility charter |
| F01.2 | 1 | feedback loop | The deployed-outcome lifecycle and evidence-driven return paths | Shows why deployment is more than a software release and why stages loop | Full dossier chain |
| F02.1 | 2 | stakeholder/evidence map | Access, impact, knowledge, responsibility, and decision authority are different | Prevents stakeholder lists from implying authority | OA-01 stakeholder map |
| F02.2 | 2 | evidence ladder | Reported, observed, measured, reproduced, and production evidence | Calibrates confidence and prevents assumption inflation | OA-01 evidence log |
| F03.1 | 3 | swimlane/state map | Orchid service request from symptom to resolution with hidden loops | Makes handoffs, waiting, decisions, and systems visible | OA-02 workflow |
| F03.2 | 3 | exception topology | Normal path surrounded by data, policy, inventory, connectivity, and human exceptions | Centers exception work instead of drawing an idealized happy path | OA-02 exception taxonomy |
| F04.1 | 4 | metric tree | Outcome, leading, adoption, system, and guardrail metrics | Shows metric relationships and gaming risk | OA-03 metric tree |
| F04.2 | 4 | responsibility matrix | Named decisions mapped to recommend, approve, execute, and inform roles | Prevents FDE overreach and ownerless gates | OA-03 decision rights |
| F05.1 | 5 | scope cone | Request surface narrowed by outcome evidence, risk, dependencies, and reversibility | Explains how a small safe production path is selected | OA-04 scope boundary |
| F05.2 | 5 | dependency network | Milestones, evidence gates, external owners, and critical uncertainty | Separates calendar plans from decision-ready sequencing | OA-04 plan |
| F06.1 | 6 | C4-style context | Orchid Assist actors, customer systems, external dependencies, and trust boundaries | Establishes system and ownership scope | OA-05 architecture |
| F06.2 | 6 | failure/ownership matrix | Failure propagation versus detection, containment, correction, and owner | Connects architecture to operational accountability | OA-05 boundary decisions |
| F07.1 | 7 | sequence diagram | Ticket-to-inventory/manual/equipment integration with retries and reconciliation | Makes ordering, idempotency, and partial failure concrete | OA-05 interface catalog |
| F07.2 | 7 | contract anatomy | Semantic field definition, provenance, quality rule, version, and exception behavior | Distinguishes a data contract from a schema alone | OA-05 data contract |
| F08.1 | 8 | deployment topology | Regional user, edge/network path, customer VPC, services, stores, and external API | Tests connectivity, tenancy, regional, and operating assumptions | OA-05 topology |
| F08.2 | 8 | identity flow | Human and service identity, token exchange, authorization, secrets, and audit | Exposes least-privilege and lifecycle decisions | OA-05 identity/access flow |
| F09.1 | 9 | decision ladder | Deterministic rule, retrieval, model suggestion, constrained action, and human approval | Selects the least uncertain mechanism appropriate to risk | OA-05 AI/control decision |
| F09.2 | 9 | risk/eval matrix | Error type by workflow consequence, detectability, control, and release threshold | Connects AI quality to production decisions | OA-05/OA-07 eval plan |
| F10.1 | 10 | evidence chain | Threat/risk -> control objective -> implementation -> verification -> approval | Prevents checklist-only security claims | OA-05 control matrix |
| F10.2 | 10 | authority map | FDE evidence and recommendation versus security, privacy, legal, and business acceptance | Clarifies collaboration and escalation | OA-05 approval path |
| F11.1 | 11 | vertical-slice trace | One request across UI/API, integrations, policy, AI, approval, audit, and telemetry | Shows “end to end” and where to cut without hiding risk | OA-06 vertical slice |
| F11.2 | 11 | code/supportability map | Runtime components linked to repository owner, test, config, signal, and runbook | Makes production-grade obligations visible | OA-06 repository map |
| F12.1 | 12 | verification stack | Unit, contract, integration, end-to-end, task eval, UAT, and production validation | Assigns each claim to the cheapest credible evidence layer | OA-07 verification matrix |
| F12.2 | 12 | traceability map | Workflow risk and acceptance criterion to test/eval/UAT/limitation | Reveals unsupported release claims | OA-07 evidence packet |
| F13.1 | 13 | signal map | User outcome, workflow adoption, AI quality, service health, dependency, and cost signals | Prevents infrastructure-only observability | OA-08 signal catalog |
| F13.2 | 13 | diagnostic tree | Symptom-to-signal investigation for slow or untrusted recommendations | Teaches layered diagnosis before code changes | OA-08 runbook |
| F14.1 | 14 | release path | Commit through checks, artifact, configuration, migration, cohort release, and evidence | Makes repeatability and gate ownership visible | OA-08 release pipeline |
| F14.2 | 14 | recovery decision tree | Roll back, roll forward, isolate, restore, or stop based on state and consequence | Connects failure type to safe recovery | OA-08 recovery record |
| F15.1 | 15 | readiness gate | Evidence packets entering a go/conditional-go/delay/reduce/stop decision | Prevents readiness from becoming a ceremonial checklist | OA-09 readiness review |
| F15.2 | 15 | rollout comparison | Internal, shadow, canary, cohort, regional, and full rollout tradeoffs | Selects rollout based on blast radius and evidence needs | OA-09 rollout plan |
| F16.1 | 16 | incident timeline | Detection, declaration, containment, communication, correction, and stabilization | Clarifies parallel work and decision records | OA-10 incident log |
| F16.2 | 16 | learning loop | Incident symptom to contributing conditions, corrective action, verification, and system change | Distinguishes durable learning from blame or patching | OA-10 corrective action |
| F17.1 | 17 | adoption-friction map | Capability, workflow fit, trust, access, latency, incentives, support, and skill | Diagnoses non-use without assuming a training problem | OA-10 adoption review |
| F17.2 | 17 | ownership-transfer model | Knowledge, access, telemetry, runbook, release, support, and decision acceptance | Defines evidence for an operable handoff | OA-10 handoff acceptance |
| F18.1 | 18 | reuse ladder | One-off fix to repeated pattern, configurable component, shared service, and platform capability | Sets evidence thresholds for abstraction | OA-11 pattern ledger |
| F18.2 | 18 | field-to-product packet | Observation, frequency, consequence, workaround, evidence, proposal, and uncertainty | Improves the quality of product feedback | OA-11 field memo |
| F19.1 | 19 | portfolio heatmap | Deployments plotted by outcome risk, evidence gap, time pressure, and leverage | Allocates senior attention across engagements | OA-11 portfolio review |
| F19.2 | 19 | capability path | Engineer to autonomous FDE to staff/principal or deployment lead, with evidence at each transition | Makes growth about demonstrated judgment rather than tenure | OA-11 growth plan |

## Figure count and type balance

- 38 planned figures: two per chapter.
- 0 decorative illustrations in the technical body.
- Dominant forms: system/boundary diagrams, flows, matrices, decision trees, timelines, and artifact anatomy.
- At least 12 figures directly depict Orchid Assist; the remainder are reusable professional models instantiated in the capstone text.
- Tables remain tables when exact comparison matters; they are not converted into illustrations for visual variety.

## Creation order

1. Build low-fidelity evidence sketches during chapter research.
2. Validate each sketch against the claim, project artifact, and text outline.
3. Create final vector/source figure after the relevant manuscript section stabilizes.
4. Export web and print variants from one canonical source.
5. Run accessibility, grayscale, small-size, and PDF-render checks.
6. Record source hash and figure manifest entry.

## Phase 10 handoff fields

Each figure manifest record must eventually include:

- figure ID and version
- chapter and insertion anchor
- caption and alt text
- diagram type and dimensions
- canonical editable source path
- web/print export paths and hashes
- claim/artifact IDs supported
- data/source provenance
- reviewer and QA status
- accessibility and grayscale status
- license/status for any non-original input

This forecast plans information design; it does not authorize publishing unverified diagrams before manuscript and source QA.

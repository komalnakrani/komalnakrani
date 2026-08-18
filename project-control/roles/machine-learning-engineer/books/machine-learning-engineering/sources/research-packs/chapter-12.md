# Chapter 12 Research Pack — Issue a Technical Qualification Disposition

- Canonical chapter: `MLE-CH-12`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Combine population, segment, uncertainty, consequence, limitation, owner, and
rollback evidence into PASS, HOLD, or REJECT.

The milestone is `BL-11` — Technical qualification disposition. The incoming
dossier state is `CANDIDATE`; the outgoing state is
`TECHNICALLY-QUALIFIED|HOLD|REJECT`.

## Phase 06 contract coverage

- Exact source research needs: `Model cards`; `Independent evaluation gates`;
  `Release decision records`.
- Exact Phase 06 handoff: `Research technical disposition and independent gate
  evidence.`
- Domain: `PD-07` — Technical Disposition.
- Domain research need: independent gates and decision records.

## Canonical claims

### `MLE-BCLM-034` — technical method

A technical disposition is a structured decision record binding evaluation
procedure, population and segments, thresholds and consequences, uncertainty
and failures, limitations, owners, rollback target, and required next evidence;
it is not a scalar score.

- Sources: `MLE-BSRC-006`, `MLE-BSRC-019`, `MLE-BSRC-028`
- Confidence/durability: high/durable
- Limitation: PASS/HOLD/REJECT is the book's evidence-state vocabulary, not
  terminology imposed by NIST or the model-card paper.

### `MLE-BCLM-035` — technical doctrine

The MLE may compile workload evidence and issue the workload's technical
recommendation, but independent evaluation and named product, domain, safety,
privacy, legal, governance, or regulatory owners retain their stop-ship and
acceptance decisions.

- Sources: `MLE-BSRC-019`, `MLE-BSRC-028`
- Confidence/durability: high/durable
- Limitation: actual authority allocation is organization- and sector-specific;
  independence cannot be certified from a title alone.

### `MLE-BCLM-036` — technical doctrine

When intended use, population, workflow, or relevant operating conditions
change beyond the scope of the accepted evaluation, the existing technical
disposition no longer supports the changed context; the dossier returns to the
book's HOLD state until scoped re-evaluation and required external decisions
are supplied.

- Sources: `MLE-BSRC-025`, `MLE-BSRC-028`
- Confidence/durability: high/durable
- Limitation: the trigger and formal status depend on sector rules and local
  change control; HOLD is the book's technical state.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-006` | Model Cards for Model Reporting, FAT* 2019 final; structured evaluation, intended-use, caveat, limitation, and recommendation fields | `MLE-BCLM-034` |
| `MLE-BSRC-019` | NIST AI RMF Playbook, AI RMF 1.0 web edition accessed 2026-08-18; living suggested actions for tests, limitations, independent audit, and unresolved-risk routing | `MLE-BCLM-034`, `MLE-BCLM-035` |
| `MLE-BSRC-025` | IMDRF/AIML WG/N88 FINAL:2025; intended-use population, independent test, consequence, and uncertainty principles | `MLE-BCLM-036` |
| `MLE-BSRC-028` | NIST AI RMF 1.0, NIST AI 100-1 final (2023); contextual lifecycle risk decisions, actors, metrics, and accountability | `MLE-BCLM-034`, `MLE-BCLM-035`, `MLE-BCLM-036` |

The NIST sources are voluntary and do not certify the workload, prescribe the
book's state names, or allocate local approval rights. IMDRF N88 transfers only
change-of-context and intended-use principles outside medical devices. Model
cards support record fields, not a PASS decision.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-006`, `MLE-CLM-011`, `MLE-CLM-019`,
  `MLE-CLM-020`, `MLE-CLM-022`
- Boundaries: `BND-01`, `BND-05`, `BND-13`, `BND-15`, `BND-16`, `BND-17`
- Scenarios: `SCN-01`, `SCN-08`, `SCN-09`
- Domain: `PD-07`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-05`, `CASE-09`
- Milestone: `BL-11`

The scenario set tests segment regression, changed intended-use population, and
promising scientific results without independent qualification. None permits
the MLE to absorb product, evaluation, domain, safety, privacy, governance,
legal, regulatory, or scientific authority.

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Issue a constructed technical disposition with explicit owners, limits, rollback, and next evidence; no real industrial or safety claim. |
| `CASE-02` Managed demand forecast | `CONSTRUCTED SATELLITE` | Require exportable evidence and external approvals despite provider-managed mechanisms. |
| `CASE-03` Classical credit triage | `CONSTRUCTED SATELLITE` | Force explicit evaluation/domain/legal ownership with synthetic records only; no credit authorization. |
| `CASE-05` Shared ranking platform tenant | `CONSTRUCTED SATELLITE` | Separate workload disposition from shared-platform and fleet acceptance. |
| `CASE-09` Gender Shades intersectional evaluation audit | `PUBLIC REPORTED CASE` | Use the bounded historical audit to demonstrate a segment failure that can block an aggregate winner and require external authority. |

`CASE-09` informs `MLE-BCLM-034` and `MLE-BCLM-035`; it does not independently
support the population-change rule in `MLE-BCLM-036`. The public case reports a
historical audit, not a present qualification, legal determination, fairness
certificate, or universal threshold.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: PASS, HOLD, and REJECT bind evidence, population, owner,
  limitation, rollback, and next evidence.
- Volatile examples: review workflow, approval products, role names, and
  sector-specific processes.
- Current examples as of 2026-08-18: NIST AI RMF Playbook is a living web
  edition and high-volatility mechanism source; AI RMF `1.0` remains final but
  is under announced revision; IMDRF N88 `FINAL:2025` is pinned.
- Conflict to preserve: strong technical metrics can coexist with missing
  authority, unresolved failure, or a changed intended-use context; those
  conditions prevent a valid PASS.
- Recheck trigger: recheck the Playbook at every freeze and AI RMF/IMDRF status
  at blueprint, manuscript, and publication freeze.

## Authority ceiling and misuse prohibitions

- Authority owner: independent evaluation and relevant formal authorities
  retain stop-ship and acceptance decisions.
- MLE ceiling: the MLE issues the workload technical disposition and routes
  external decisions; it cannot self-approve them.
- Do not reduce a disposition to one metric or omit population, segments,
  consequences, failures, owners, limitations, rollback, or next evidence.
- Do not claim NIST, IMDRF, or a model card certifies the workload.
- Do not allow MLE self-approval or infer independence from a job title.
- Do not carry PASS into a materially changed intended use, population,
  workflow, or operating condition.
- Do not progress from HOLD or REJECT without named repair and requalification.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export all disposition evidence and provider limits; provider approval does not replace workload/domain/formal owners. |
| `PORT-CLASSICAL` | Preserve feature/preprocessing, population, calibration/segment, owner, and rollback evidence despite model simplicity. |
| `PORT-DEEP` | Bind disposition to checkpoint, preprocessor, runtime, population, and failure evidence; novelty is not approval. |
| `PORT-EDGE` | Name device/runtime, sensor/environment limits, rollback, operations, safety, and domain owners; no fictional field assurance. |
| `PORT-SHARED` | Keep workload PASS/HOLD/REJECT separate from tenant, platform, SRE, security, or fleet acceptance. |

## Planned evidence artifacts

- `BL-11` technical qualification disposition.
- Executable PASS/HOLD/REJECT schema binding all required evidence and owners.
- Authority matrix whose missing external owner forces HOLD.
- Illegal-transition tests for MLE self-approval and progression from HOLD or
  REJECT.
- Population-change mutation that invalidates PASS and names required
  requalification evidence.
- Hostile review fixture that refuses a technically strong but unauthorized
  candidate.

## Exact Phase 07 handoff

- `MLE-BCLM-034`: Specify an executable disposition schema and
  illegal-transition tests from HOLD or REJECT.
- `MLE-BCLM-035`: Add an authority matrix whose missing external owner forces
  HOLD and whose MLE self-approval path fails validation.
- `MLE-BCLM-036`: Blueprint a population-change mutation that invalidates PASS
  and names the missing requalification evidence and external authority.

Evidence-gap disposition: none release-blocking
Rationale: accepted reporting, regulator, and public-sector framework sources support the structured disposition, authority separation, and requalification trigger while explicitly limiting certification and sector transfer.
Affected claim/source IDs: `MLE-BCLM-034`, `MLE-BCLM-035`, `MLE-BCLM-036`; `MLE-BSRC-006`, `MLE-BSRC-019`, `MLE-BSRC-025`, `MLE-BSRC-028`.

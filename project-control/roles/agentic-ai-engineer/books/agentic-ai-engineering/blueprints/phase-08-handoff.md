# Phase 08 Handoff — Full Manuscript Production

## Entry condition and authority

Start only after issue `#43` is reviewed, committed, and closed. Phase 08 writes
the actual book; an outline or partial chapter does not satisfy it. The 20 titles,
order, six parts, `AGE-K*` mapping, `AR-01`–`AR-14` chain, FieldOps Relay scope,
claim IDs, source limits, case boundaries, and accepted figure IDs are frozen.
Reopen the relevant earlier phase rather than silently changing them.

## Required reading before each chapter

1. `architecture.md`, `project-map.md`, and `visual-forecast.md`.
2. The matching `sources/research-packs/chapter-NN.md`.
3. The matching `blueprints/chapter-NN.md` in full.
4. `source-register.json`, `claim-register.json`, `case-study-register.json`, and
   `sources/verification-report.md` for every cited ID.
5. The immediately preceding completed chapter and current version of the
   FieldOps dossier.

The blueprint controls structure; the research pack controls evidence context;
the registers control claim wording and limitations; the architecture controls
scope and terminology.

## Recommended issue granularity

Keep one Phase 08 root issue open until all manuscript gates pass. Create seven
reviewable child issues:

| Child issue | Chapters | Dossier transition | Blocking review |
| --- | --- | --- | --- |
| Write Part I | 1–3 | none -> `AR-01 v0.2.0` -> `AR-02 v1.0.0` | boundary, autonomy, authority contract |
| Write Part II-A | 4–6 | `AR-02` -> `AR-03` -> `AR-04` -> `AR-05` | loop, capabilities, identity |
| Write Part II-B / III-A | 7–9 | `AR-05` -> `AR-06` -> `AR-07 v1.0.0` | state and topology evidence |
| Write Part III-B / IV-A | 10–12 | `AR-07` -> `AR-08` -> `AR-09 v0.1.0` | durability, checkpoints, environment |
| Write Part IV-B / V-A | 13–15 | `AR-09` -> `AR-10` -> `AR-11 v0.1.0` | evaluation, attacks, traces |
| Write Part V-B / VI-A | 16–18 | `AR-11` -> `AR-12` -> `AR-13 v0.1.0` | budgets, release, adapters |
| Write Part VI-B and defense | 19–20 | `AR-13 v1.0.0` -> `AR-14 v1.0.0` | replay, reuse, final evidence defense |

Do not draft a later chunk against an assumed dossier state if the prior chunk
has not passed continuity review.

## Mandatory chapter production checks

Every manuscript chapter must:

- realize every blueprint section without converting the blueprint itself into
  reader-facing filler;
- teach why, procedure, architecture/implementation, trade-offs, mistakes,
  failure diagnosis, exercises, and assessment evidence at the specified depth;
- map every externally verifiable major claim to its exact `AGE-BCLM-*` and
  `AGE-BSRC-*` records in the production evidence ledger;
- preserve case attribution and prohibited generalization for every
  `AGE-CASE-*` used;
- separate source statement, author inference, synthetic FieldOps decision, and
  normative recommendation;
- use provider-neutral core schemas/pseudocode and isolate dated provider or
  protocol examples in clearly labeled sidebars/adapters;
- advance the exact `AR-*` version, retain superseded assumptions, and give the
  next chapter a usable state;
- keep FieldOps local, deterministic, synthetic, low-stakes, and incapable of
  real equipment control, safety diagnosis, external contact, or real effects;
- state adjacent-role handoffs instead of making product, platform, FDE,
  security/safety, legal/privacy, domain, evaluation-science, or SRE decisions;
- satisfy its blueprint exercise/assessment and figure insertion contract.

## Evidence and currentness gate

Before freezing each manuscript chunk:

- re-open every URL used; record check date and disposition;
- re-check MCP stable/RC/experimental status and pin cited edition;
- pin A2A v1.0.0 specification/protobuf to immutable tag or commit;
- re-check OpenTelemetry attribute stability and NIST AI RMF revision status;
- keep the NIST agent identity document labeled a concept paper;
- date provider SDK/product behavior and parameterize prices, quotas, model
  limits, and costs;
- do not reproduce historical benchmark scores as current model rankings;
- attribute provider outcomes, carry denominators/conditions where used, and
  never invent company, customer, safety, ROI, or production outcomes;
- preserve `AGE-BCLM-004` and `AGE-BCLM-018` as disputed generalizations.

## Visual handoff during manuscript writing

Insert figure callouts by the exact accepted IDs only. Manuscript text supplies
caption, alt text, long description, and accessible table/legend. Do not create
SVG. Later image production uses ImageGen-generated crisp, colorful,
artistic 3D/realistic raster assets; short essential labels must match the
blueprint exactly and pass spelling/placement/legibility QA. Komal appears only
where pedagogically justified and must preserve identity using the canonical
original-photo references. Image art illustrates relationships; it is not
technical or empirical evidence.

## Chunk acceptance and final exit

A child issue passes only when all assigned chapters are complete prose, claims
resolve, code/schema examples are internally consistent, FieldOps artifacts
advance without gaps, exercises have reviewable answer intent, figures have
anchors/accessibility text, and limitations remain visible. The Phase 08 root
issue stays open until all 20 chapters pass cross-chapter terminology,
continuity, evidence, originality, boundary, and no-invented-outcome review.

Phase 08 may create manuscript content only in the eventual accepted publication
source path chosen by root. It must not enter Abhyaas or overwrite inherited
content without explicit issue scope.

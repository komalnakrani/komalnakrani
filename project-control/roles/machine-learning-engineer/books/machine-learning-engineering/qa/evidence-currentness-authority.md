# Machine Learning Engineering — Phase 09 Evidence, Currentness, and Authority Audit

- Audit date: `2026-08-23`
- Producer: `/root/mle_p9_evidence`
- Scope: actual 21-chapter manuscript, furniture, 46-source register and notes,
  63-claim register, 160 source-claim edges, 12-case register, 34 case-source
  uses, and reader-facing case/source treatments
- Entry authority: accepted Phase 08 package and accepted Phase 09 Task 01
  fail/repair/reacceptance chain
- Output authority: findings and proposed repair boundaries only; no canonical
  manuscript, furniture, register, companion, state, validator, review, issue,
  visual, or publication file was changed
- Editorial-freeze result: `CHANGES REQUIRED`

## Executive result

The evidence graph is structurally complete: all `46` sources, `63` claims,
`160` source-to-claim edges, `12` cases, and `34` case-source evidence-role
uses resolve in both directions. Every chapter retains exactly three canonical
claims and one visible primary teaching home per claim. The source set remains
primary, official, regulator/standard, or first-party evidence; no secondary
aggregator is used as technical proof. The prose usually separates source fact,
book synthesis, bounded inference, limitation, and external authority well.

Five defects prevent evidence lock (`2` HIGH, `3` MEDIUM):

1. One of the two sources supporting the opening claim of *current* plural
   employer use is now absent from the employer board: the exact registered
   Ashby record returns `posting: null`. Its earlier `2026-07-16` deadline is
   retained as dated evidence, not current-opening proof.
2. Four living mechanism records do not yet carry an adequate editorial-freeze
   identity: one omits an available official update date, two cite mutable
   `latest` MLflow routes without a concrete release, and one omits an available
   official tutorial update date.
3. Chapter 21 calls the PyTorch Foundation incident advisory an issuer account.
4. Chapter 21 says four constructed cases “prove” cross-port semantics even
   though their registered truth class permits only a synthetic test or
   demonstration.
5. CASE-01 through CASE-05 have correct zero reported facts, attributed
   outcomes, and source uses, but their canonical case records leave allowed
   inference and transfer empty, omit a forbidden-inference field, and disagree
   with the non-empty reader-facing truth boundaries.

`P09-OPEN-05` is preserved and remains open until `P09-EVD-001` and
`P09-EVD-002` are repaired and independently accepted. HTTP reachability was
never used as a proxy for truth: FDA anti-bot redirects, SEC restrictions/large
documents, and Uber command-line restrictions remain access limitations, not
dead-source findings.

## Method and acceptance rules

The audit parsed the canonical JSON/CSV/register bytes; reconstructed forward
and reverse source, claim, chapter, case, and evidence-role edges; inspected all
21 research packs and actual chapter/furniture prose; and re-opened every source
identity on `2026-08-23`. The ten living and two volatile sources received a
deep check of page/version identity, dated meaning, limitation, access status,
affected claims/cases, and next trigger. Durable and versioned records received
an identity/version/official-host recheck; access-restricted official records
were checked through a browser-readable official path where possible.

A source passed only if its current primary record still supports the precise
registered proposition within the registered ceiling. A case passed only if
reported facts, attributed outcomes, allowed inference, forbidden inference,
limitations, transfer, and authority remained separate. Constructed cases were
required to retain zero reported facts, zero attributed outcomes, and zero
public-source evidence uses.

## All-source editorial-freeze inventory

| Source | Frozen identity and current recheck | Editorial-freeze disposition |
|---|---|---|
| [`MLE-BSRC-001`](https://ojs.aaai.org/index.php/AAAI/article/view/16587) | AAAI 2021 35(5); official paper record retrieved `2026-08-23` | Retain; conversion-setting transfer limit remains explicit. |
| [`MLE-BSRC-002`](https://arxiv.org/abs/1803.09010) | arXiv `1803.09010`; author paper record retrieved `2026-08-23` | Retain; documentation proposal is not executable validation. |
| [`MLE-BSRC-003`](https://research.google/pubs/data-cards-purposeful-and-transparent-dataset-documentation-for-responsible-ai/) | ACM FAccT 2022 paper record retrieved `2026-08-23` | Retain; no legal, label-validity, or executable-schema authority. |
| [`MLE-BSRC-004`](https://research.google/pubs/everyone-wants-to-do-the-model-work-not-the-data-work-data-cascades-in-high-stakes-ai/) | ACM CHI 2021 paper record retrieved `2026-08-23` | Retain; sampled empirical findings remain non-universal. |
| [`MLE-BSRC-005`](https://research.google/pubs/hidden-technical-debt-in-machine-learning-systems/) | NIPS 2015 paper record retrieved `2026-08-23` | Retain as durable failure taxonomy, not current product prescription. |
| [`MLE-BSRC-006`](https://research.google/pubs/model-cards-for-model-reporting/) | FAT* 2019 final paper record retrieved `2026-08-23` | Retain; report structure is not qualification or approval. |
| [`MLE-BSRC-007`](https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/) | IEEE Big Data 2017 final record retrieved `2026-08-23` | Retain; rubric remains a dated diagnostic, not certification. |
| [`MLE-BSRC-008`](https://research.google/pubs/the-tail-at-scale/) | CACM 56(2), 2013 record retrieved `2026-08-23` | Retain; no universal percentile or ML-quality threshold. |
| [`MLE-BSRC-009`](https://jmlr.csail.mit.edu/papers/v22/20-303.html) | JMLR 22(164) final record retrieved `2026-08-23` | Retain; no bitwise cross-hardware promise. |
| [`MLE-BSRC-010`](https://www.jmlr.org/papers/v11/cawley10a.html) | JMLR 11(70) final record retrieved `2026-08-23` | Retain; no universally best validation design. |
| [`MLE-BSRC-011`](https://proceedings.mlr.press/v81/buolamwini18a.html) | PMLR 81, 2018 historical audit retrieved `2026-08-23` | Retain with historical systems/groups/results; not current vendor performance. |
| [`MLE-BSRC-012`](https://proceedings.mlr.press/v70/guo17a.html) | PMLR 70 final record retrieved `2026-08-23` | Retain; selected calibration findings do not establish downstream validity. |
| [`MLE-BSRC-013`](https://proceedings.mlr.press/v139/koh21a.html) | PMLR 139 final record retrieved `2026-08-23` | Retain; benchmark shift does not authorize real-world use. |
| [`MLE-BSRC-014`](https://cris.tau.ac.il/en/publications/leakage-in-data-mining-formulation-detection-and-avoidance-2/) | KDD 2011, DOI `10.1145/2020408.2020496`, retrieved `2026-08-23` | Retain; does not enumerate every current leakage mode. |
| [`MLE-BSRC-015`](https://developers.google.com/machine-learning/guides/rules-of-ml/) | Living Google guide, official page last updated `2025-08-25`, retrieved `2026-08-23` | Meaning retained; identity repair required by `P09-EVD-002`. |
| [`MLE-BSRC-016`](https://kubernetes.io/docs/tasks/run-application/update-deployment-rolling/) | Living page last modified `2026-03-15`, retrieved `2026-08-23` | Retain; revisions cover Deployment pod-template state, not whole-workload rollback. |
| [`MLE-BSRC-017`](https://mlflow.org/docs/latest/ml/model/) | Mutable MLflow `latest` Models documentation, MLflow-3-era page retrieved `2026-08-23` | Meaning retained; concrete-release repair required by `P09-EVD-002`. |
| [`MLE-BSRC-018`](https://mlflow.org/docs/latest/ml/tracking/) | Mutable MLflow `latest` Tracking documentation, MLflow 3 mechanisms retrieved `2026-08-23` | Meaning retained; concrete-release repair required by `P09-EVD-002`. |
| [`MLE-BSRC-019`](https://airc.nist.gov/airmf-resources/playbook/) | Living AI RMF 1.0 Playbook retrieved `2026-08-23`; page says revision follows revised AI RMF | Retain as voluntary suggestions, never checklist/certification. |
| [`MLE-BSRC-020`](https://onnx.ai/onnx/repo-docs/Versioning.html) | ONNX `1.23.0` documentation retrieved `2026-08-23` | Retain; checker/version does not prove consumer compatibility. |
| [`MLE-BSRC-021`](https://docs.pytorch.org/docs/2.13/notes/randomness.html) | Pinned PyTorch `2.13` documentation identity rechecked `2026-08-23` | Retain; cross-release/platform identity remains unsupported. |
| [`MLE-BSRC-022`](https://scikit-learn.org/stable/auto_examples/model_selection/plot_nested_cross_validation_iris.html) | scikit-learn `1.9.0` stable example retrieved `2026-08-23` | Retain; Iris example illustrates rather than universally quantifies bias. |
| [`MLE-BSRC-023`](https://scikit-learn.org/stable/modules/calibration.html) | scikit-learn `1.9.0` stable guide retrieved `2026-08-23` | Retain; split, sample, binning, scoring, and output limits remain. |
| [`MLE-BSRC-024`](https://www.tensorflow.org/tfx/tutorials/data_validation/tfdv_basic) | Living TFDV tutorial, official page last updated `2024-04-30`, retrieved `2026-08-23` | Meaning retained; identity repair required by `P09-EVD-002`. |
| [`MLE-BSRC-025`](https://www.fda.gov/medical-devices/software-medical-device-samd/good-machine-learning-practice-medical-device-development-guiding-principles) | FDA browser-readable page confirms January 2025 IMDRF N88 final; direct client hit anti-abuse redirect | Retain; access restriction is not death and medical-device authority does not transfer. |
| [`MLE-BSRC-026`](https://www.sec.gov/Archives/edgar/data/1569391/000119312513153864/d484578ds4a.htm) | SEC accession remains official; direct client `403` and browser extractor reports document over size limit | Retain only registered issuer removal/loss passage and extraction limitation; not terminal-path proof. |
| [`MLE-BSRC-027`](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) | Living AI RMF 1.0 Core excerpt (2023) retrieved `2026-08-23`; revised version still in progress | Retain; voluntary contextual outcomes confer no local authority or certification. |
| [`MLE-BSRC-028`](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10) | NIST AI 100-1, AI RMF 1.0, rechecked `2026-08-23` | Retain explicit `1.0`; do not silently merge an unpublished revision. |
| [`MLE-BSRC-029`](https://csrc.nist.gov/pubs/sp/800/88/r2/final) | SP 800-88 Rev. 2 official record retrieved `2026-08-23` | Retain for media sanitization only, not endpoint/consumer retirement. |
| [`MLE-BSRC-030`](https://csrc.nist.gov/pubs/sp/800/218/final) | SP 800-218, SSDF 1.1 official record retrieved `2026-08-23` | Retain; framework scope grants no security-risk acceptance. |
| [`MLE-BSRC-031`](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) | SP 800-53 Rev. 5 update 1/release 5.2.0 record retrieved `2026-08-23` | Retain; catalog presence is not implemented-control evidence. |
| [`MLE-BSRC-032`](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf) | NIST SP 1270 final PDF rechecked `2026-08-23` | Retain; no universal group list, metric, or threshold. |
| [`MLE-BSRC-033`](https://specs.opencontainers.org/image-spec/?v=v1.1.1) | OCI Image Spec `1.1.1` retrieved `2026-08-23` | Retain; package/digest identity is one release layer only. |
| [`MLE-BSRC-034`](https://semver.org/spec/v2.0.0.html) | SemVer `2.0.0` retrieved `2026-08-23` | Retain; local API and migration policy remain external. |
| [`MLE-BSRC-035`](https://slsa.dev/spec/v1.2/verifying-artifacts) | SLSA `1.2` artifact-verification guidance retrieved `2026-08-23` | Retain; trust roots and authorization remain local. |
| [`MLE-BSRC-036`](https://slsa.dev/spec/v1.2/) | SLSA specification `1.2` retrieved `2026-08-23` | Retain; no model-quality/domain/recovery proof. |
| [`MLE-BSRC-037`](https://spdx.github.io/spdx-spec/v3.0.1/) | SPDX `3.0.1` specification retrieved `2026-08-23` | Retain; BOM relationship must still be bound and verified. |
| [`MLE-BSRC-038`](https://www.fda.gov/media/153486/download) | Official October 2021 joint-regulator PDF browser-readable; direct client anti-abuse redirect | Retain as historical 2021 guidance distinct from N88 FINAL:2025. |
| [`MLE-BSRC-039`](https://www.sec.gov/newsroom/press-releases/2013-222) | SEC release 2013-222 browser-readable `2026-08-23`; direct client `403`; last reviewed `2014-07-28` | Retain as regulator account with non-ML and no-admit/no-deny limits. |
| [`MLE-BSRC-040`](https://sre.google/workbook/canarying-releases/) | SRE Workbook chapter 16 retrieved `2026-08-23` | Retain as first-party method, not workload qualification. |
| [`MLE-BSRC-041`](https://sre.google/workbook/postmortem-culture/) | SRE Workbook chapter 10 retrieved `2026-08-23` | Retain as first-party learning method, not incident-command authority. |
| [`MLE-BSRC-042`](https://pytorch.org/blog/compromised-nightly-dependency/) | Published `2022-12-31`, updated `2024-11-14`, retrieved `2026-08-23` | Retain first-party affected window/mechanism; no population-wide cleanup. |
| [`MLE-BSRC-043`](https://www.uber.com/us/en/blog/michelangelo-machine-learning-platform/) | Dated `2017-09-05` Uber report browser-readable `2026-08-23` | Retain historical first-party description; no independent outcome assurance. |
| [`MLE-BSRC-044`](https://www.uber.com/us/en/blog/raising-the-bar-on-ml-model-deployment-safety/) | Dated `2025-10-30` Uber report browser-readable; command client returned `406` | Retain all quantities/mechanisms as dated first-party claims only. |
| [`MLE-BSRC-045`](https://jobs.ashbyhq.com/blissway/97acd33b-9ce1-4663-b556-917347263bb3/) | Exact registered posting `97acd33b-9ce1-4663-b556-917347263bb3` is absent from the employer board and its Ashby route now exposes `posting: null`, retrieved `2026-08-23`; preserve the earlier observed `2026-07-16` application deadline as dated evidence | Does not support “current” open-posting claim. A separate listing `662f1761-5d28-421d-8b47-605cc910991d` is only a proposed rebind pending identity/duty verification; replace or narrow under `P09-EVD-001`. |
| [`MLE-BSRC-046`](https://jobs.ashbyhq.com/sprinter-health/0469d8f2-4d39-4e36-ab92-5380937efbfd) | Employer-controlled `Machine Learning Engineer (Staff)` page readable `2026-08-23`; duties still include train/deploy/monitor/retrain/serve | Retain as one current dated market signal only. |

## Deep living and volatile recheck

| Source | Current identity and meaning | Limitation and next trigger | Affected graph |
|---|---|---|---|
| `015` | Google guide; official update date `2025-08-25`; 43-rule structure and simple-incumbent/pipeline/skew meaning still present | Google-specific contextual practice. Record update identity now; recheck any page/rule change. | Claims `006,007,014,015,016,018,019`; CASE-07 transfer context |
| `016` | Kubernetes page last modified `2026-03-15`; rolling update, progress, revision history, rollback still present; default retained ReplicaSets `10`, `0` disables rollback | Pod-template mechanism only. Recheck Kubernetes semantics/defaults/commands and selected release. | Claims `037,039,041,047,053,058` |
| `017` | Mutable MLflow Models page in MLflow-3-era docs; MLmodel metadata, dependencies, signature, input example, and `mlflow_version` remain documented | Latest route is not a release identity; pin exact version before relying on fields/APIs. | Claims `038,039,041,042`; CASE-10 transfer context |
| `018` | Mutable MLflow Tracking page; MLflow 3 model IDs, checkpoint/model search, and dataset-linked metrics remain documented | Logging proves only what was recorded; pin exact release before field/API claims. | Claims `020,021,023,026,037`; CASE-07/08 mechanism |
| `019` | AI RMF 1.0 Playbook; still voluntary, not checklist; page says it will update after AI RMF revision | Suggested actions do not allocate authority. Recheck every freeze and any published RMF/Playbook revision. | Claims `034,035` |
| `022` | scikit-learn `1.9.0` stable nested-CV example still states non-nested selection can be optimistic | Iris/API example is illustrative. Recheck stable-version change or code use. | Claim `025` |
| `023` | scikit-learn `1.9.0` stable calibration guide still requires independent calibration data/cross-validation | Binning/sample/split/model constraints remain. Recheck stable-version or executable-example change. | Claims `031,032` |
| `024` | TFDV tutorial officially last updated `2024-04-30`; schema environments and schema/feature/distribution skew mechanisms remain | Detection does not establish semantics, thresholds, causality, or promotion. Record page date; recheck API/tutorial change. | Claims `011,015,018,049,051`; CASE-06 mechanism |
| `027` | AI RMF 1.0 Core excerpt (2023); revised version still in progress; outcomes remain voluntary/contextual | No certification, legal determination, or organization-specific MLE authority. Recheck revision notice/Core change. | Claims `003,005,009,051,052,053,055,056,057,058,059,060,061,062`; CASE-12 transfer context |
| `042` | PyTorch Foundation advisory still shows `2022-12-31` and update `2024-11-14`; affected Linux-nightly/pip window and stable-package exclusion unchanged | First-party report; no universal resolver rule, prevalence, or complete cleanup. Recheck correction/scope/indicator/final report. | Claims `045,052,060`; CASE-11 fact/outcome/limit |
| `045` | The exact registered Blissway ID `97acd33b-9ce1-4663-b556-917347263bb3` is no longer listed and its Ashby route exposes `posting: null`; the earlier observed `2026-07-16` deadline remains dated evidence. The board separately lists `Machine Learning Engineer` ID `662f1761-5d28-421d-8b47-605cc910991d`, but it is not the registered record. | Exact-record access now means absent/unlisted, not dead-host or merely expired. Rebind the separate listing only after exact identity and duty verification plus projection repair; otherwise narrow the claim. Recheck withdrawal, ID, title, duties, deadline, or board-state change. | Claim `001`; Chapter 01 market panel |
| `046` | Sprinter Health exact staff title and broad production-ML duties remain readable; no withdrawal/deadline was exposed | One employer signal, not prevalence, doctrine, or authority. Recheck every freeze/withdrawal/material retitle. | Claim `001`; Chapter 01 market panel |

## Source-to-claim and primary-authority audit

The claim register contains `33` technical-doctrine, `22` technical-method,
`5` technical-mechanism, `2` bounded-case-inference, and `1`
role-market-boundary claim. Durability is `49` durable, `13` contextual, and
`1` volatile. The two explicit case-inference claims are `MLE-BCLM-029` and
`MLE-BCLM-045`; the opening market claim is `MLE-BCLM-001`. All other reader
propositions are visibly presented as bounded doctrine/method/mechanism with
named source anchors, edge-specific ceilings, and an external decision that the
source does not make. No source is presented as qualifying Benchline or
transferring product, domain, evaluation, platform, SRE, security, safety,
privacy, governance, legal, release, operations, or business authority.

| Chapter | Claims | Source edges | Unique source IDs | Edge disposition |
|---|---:|---:|---|---|
| 01 | 3 | 6 | `005,007,027,028,045,046` | Repair current market edge `045`; other five pass. |
| 02 | 3 | 6 | `006,015,027,028,038` | Pass meaning; refresh `015` identity. |
| 03 | 3 | 7 | `006,007,015,027,028,038` | Pass meaning; refresh `015` identity. |
| 04 | 3 | 7 | `002,003,004,007,024,028,038` | Pass meaning; refresh `024` identity. |
| 05 | 3 | 9 | `004,005,015,024,043,044` | Pass meaning; refresh `015/024` identities. |
| 06 | 3 | 7 | `013,014,015,024,025,044` | Pass meaning; refresh `015/024` identities. |
| 07 | 3 | 7 | `007,010,015,018,021,043` | Pass meaning; pin/refresh `015/018`. |
| 08 | 3 | 5 | `009,018,021` | Pass meaning; pin `018`. |
| 09 | 3 | 7 | `006,010,018,022,028` | Pass meaning; pin `018`; `022` remains 1.9.0. |
| 10 | 3 | 7 | `006,011,025,028,032` | Pass; historical Gender Shades fact and transfer remain separated. |
| 11 | 3 | 6 | `006,012,023,025` | Pass; `023` remains 1.9.0 and bounded. |
| 12 | 3 | 7 | `006,019,025,028` | Pass; Playbook is visibly voluntary and non-authorizing. |
| 13 | 3 | 11 | `006,016,017,018,028,033,036,037` | Pass meaning; pin `017/018`. |
| 14 | 3 | 9 | `005,016,017,020,028,034` | Pass meaning; pin `017`; ONNX remains 1.23.0. |
| 15 | 3 | 6 | `030,031,035,036,042` | Pass edges; Chapter 21 case attribution repair still required. |
| 16 | 3 | 7 | `007,008,016,039,040` | Pass; incident remains non-ML and canary remains bounded. |
| 17 | 3 | 7 | `001,005,007,024,027,039` | Pass meaning; refresh `024`; delayed-feedback transfer remains bounded. |
| 18 | 3 | 10 | `007,016,027,030,031,039,040,041,042` | Pass; public incident roles remain separated. |
| 19 | 3 | 9 | `027,030,031,036,039` | Pass; formal authority remains external. |
| 20 | 3 | 11 | `016,026,027,029,031,042` | Pass with registered SEC size/access limitation; no global negative. |
| 21 | 3 | 9 | `005,007,027,030,036,039,041` | Claim edges pass; case prose requires `P09-EVD-003/004`. |

Forward claim edge total is exactly `160`; reverse source `claimIds` total is
exactly `160`, and every pair agrees. Each of the `63` claim IDs appears in its
registered chapter, has exactly one primary teaching treatment, and is listed
in the chapter pack with evidence carried and an authority ceiling. Furniture
routes source and claim IDs without introducing a new technical authority.

## Case truth audit

| Case | Truth/kind | Reported / attributed / allowed / source uses | Audit result |
|---|---|---:|---|
| `CASE-01` Benchline | FICTIONAL SYNTHETIC CAPSTONE | `0 / 0 / 0 / 0` | **FAIL truth projection:** zeros are correct, but canonical allowed/transfer are empty, canonical forbidden is absent, and reader meaning is non-empty. `P09-EVD-005`. |
| `CASE-02` Managed forecast | CONSTRUCTED SATELLITE | `0 / 0 / 0 / 0` | **FAIL truth projection:** same canonical/reader gap; Chapter 21 also says “prove.” `P09-EVD-004/005`. |
| `CASE-03` Credit triage | CONSTRUCTED SATELLITE | `0 / 0 / 0 / 0` | **FAIL truth projection:** same canonical/reader gap; Chapter 21 also says “prove.” `P09-EVD-004/005`. |
| `CASE-04` Acoustic classifier | CONSTRUCTED SATELLITE | `0 / 0 / 0 / 0` | **FAIL truth projection:** same canonical/reader gap; Chapter 21 also says “prove.” `P09-EVD-004/005`. |
| `CASE-05` Ranking tenant | CONSTRUCTED SATELLITE | `0 / 0 / 0 / 0` | **FAIL truth projection:** same canonical/reader gap; Chapter 21 also says “prove.” `P09-EVD-004/005`. |
| `CASE-06` ML Test Score method | PUBLIC REPORTED CASE / public method | `3 / 1 / 3 / 3` | Pass; 28-test report is attributed, not certification/outcome. |
| `CASE-07` Uber Michelangelo | PUBLIC REPORTED CASE / first-party production pattern | `3 / 2 / 3 / 5` | Pass; 2017 and 2025 reports and first-party quantities remain distinct. |
| `CASE-08` PyTorch reproducibility | PUBLIC REPORTED CASE / public method | `2 / 1 / 2 / 4` | Pass; documented mechanism does not become workload outcome. |
| `CASE-09` Gender Shades | PUBLIC REPORTED CASE / public method | `2 / 1 / 2 / 4` | Pass; historical task/groups/numbers do not transfer as thresholds. |
| `CASE-10` ONNX compatibility | PUBLIC REPORTED CASE / public standard | `2 / 1 / 2 / 4` | Pass; normative/recommended policy is not measured compatibility. |
| `CASE-11` PyTorch dependency incident | PUBLIC REPORTED CASE / first-party incident | `4 / 3 / 3 / 5` | Register passes; Chapter 21 reporter identity fails. |
| `CASE-12` Knight Capital | PUBLIC REPORTED CASE / regulator/issuer incident | `5 / 3 / 4 / 9` | Pass; non-ML, settlement, extraction, and terminal-path limits remain visible. |

The public-case source-use total is exactly `34` and equals the reverse
source-register role total. CASE-01 through CASE-05 have no source uses and do
not acquire reported outcomes from their source-backed surrounding doctrine.
Their graph counts and zero reported/outcome/source-use boundary pass, but their
machine truth schema does not: the case register has empty allowed-inference and
transfer arrays and no forbidden-inference field, while reader projections
state non-empty meanings. The registered allowed/forbidden inference,
limitation, transfer, and authority fields remain present for all seven public
cases. The public-case records pass; the constructed-case truth projection must
be repaired without changing its zeros.

## Findings

### P09-EVD-001 — HIGH — absent registered posting cannot support a current plural market claim

- Exact manuscript/register evidence:
  `manuscript/chapter-01.md:39`, `manuscript/chapter-01.md:46`,
  `sources/research-packs/chapter-01.md:28`,
  `sources/research-packs/chapter-01.md:55`,
  `sources/research-packs/chapter-01.md:62`, and
  `sources/source-register.json:1770`-`1791`.
- Source: [`MLE-BSRC-045`](https://jobs.ashbyhq.com/blissway/97acd33b-9ce1-4663-b556-917347263bb3/), exact registered Ashby ID
  `97acd33b-9ce1-4663-b556-917347263bb3`, unversioned employer-controlled
  posting, retrieved `2026-08-23`. Its route now exposes `posting: null`, and
  that ID is absent from the official Blissway board. Preserve the previously
  observed `2026-07-16` application deadline as dated evidence of the former
  record, not evidence that it remains open.
- Primary support/access status: the host and employer board are reachable, but
  the exact registered record is absent/unlisted. This is not a dead-host
  finding and not merely an HTTP test; the returned application state has no
  posting object. The board separately lists a `Machine Learning Engineer`
  posting at ID `662f1761-5d28-421d-8b47-605cc910991d`, but a title match does
  not establish record identity or duty equivalence and cannot silently rebind
  the registered source.
- Affected claim/cases: `MLE-BCLM-001`; its registered applications include
  CASE-01 and CASE-07, though neither case supplies replacement market proof.
- Proposed disposition and repair boundary: either replace/rebind
  `MLE-BSRC-045` with a currently open employer-controlled record that supports
  the bounded duties, or narrow `MLE-BCLM-001` and every Chapter 01 occurrence
  to a dated recent/historical signal without plural-current language. The
  separate ID `662f1761-5d28-421d-8b47-605cc910991d` is only a proposed rebind:
  verify exact posting identity, current open state, duty text, and claim fit
  before updating every affected forward/reverse projection. Preserve the old
  ID, the dated `2026-07-16` evidence, and the `2026-08-23` absent-state
  retrieval in the repair trail. Do not broaden the source into prevalence,
  doctrine, or authority. Repair only the source/claim register projections,
  Chapter 01 pack/prose/furniture projections, and generated bindings; no new
  role definition is authorized.

### P09-EVD-002 — MEDIUM — four living mechanisms lack a complete freeze identity

- Exact register/manuscript evidence:
  `sources/source-register.json:520`-`539` (`MLE-BSRC-015` has `version: null`),
  `sources/source-register.json:607`-`628` (`MLE-BSRC-017` uses mutable
  `latest`), `sources/source-register.json:647`-`668` (`MLE-BSRC-018` names
  MLflow 3 but no concrete release),
  `sources/source-register.json:877`-`898` (`MLE-BSRC-024` omits its available
  page-update identity), plus representative reader projections
  `manuscript/chapter-02.md:52`, `manuscript/chapter-05.md:56`,
  `manuscript/chapter-07.md:58`, `manuscript/chapter-08.md:44`, and
  `manuscript/chapter-14.md:42`/`:50`.
- Sources and current identity, all retrieved `2026-08-23`:
  [`MLE-BSRC-015`](https://developers.google.com/machine-learning/guides/rules-of-ml/), official page last updated `2025-08-25`;
  [`MLE-BSRC-017`](https://mlflow.org/docs/latest/ml/model/), mutable MLflow
  Models `latest` route;
  [`MLE-BSRC-018`](https://mlflow.org/docs/latest/ml/tracking/), mutable MLflow
  Tracking `latest` route with MLflow 3 mechanisms; and
  [`MLE-BSRC-024`](https://www.tensorflow.org/tfx/tutorials/data_validation/tfdv_basic), official tutorial last updated `2024-04-30`.
- Primary support/access status: all four official pages are readable and their
  registered mechanism meaning remains supportable. The defect is identity and
  freeze reproducibility, not dead access. The register itself already requires
  a concrete MLflow version before field/API-level manuscript reliance.
- Affected claims/cases: source 015 claims `006,007,014,015,016,018,019` and
  CASE-07 transfer; source 017 claims `038,039,041,042` and CASE-10 transfer;
  source 018 claims `020,021,023,026,037` and CASE-07/08 mechanism; source 024
  claims `011,015,018,049,051` and CASE-06 mechanism.
- Proposed disposition and repair boundary: record the official update dates
  for 015/024 and the `2026-08-23` retrieval; pin a concrete MLflow release and
  versioned documentation identity for 017/018 before retaining named fields,
  API behavior, or storage semantics. If a pin is unavailable, reduce those
  passages to generic, visibly dated mechanism examples and keep `latest`
  explicitly non-reproducible. Update only affected source records, packs,
  chapter currentness/edge traces, and derived registers. Recheck on page,
  release, API, schema, or tutorial change. This finding keeps
  `P09-OPEN-05` open.

### P09-EVD-003 — MEDIUM — CASE-11 reporter is misidentified as an issuer

- Exact manuscript evidence: `manuscript/chapter-21.md:58` says CASE-11 facts
  preserve “the issuer's” account.
- Source: [`MLE-BSRC-042`](https://pytorch.org/blog/compromised-nightly-dependency/), PyTorch Foundation first-party incident advisory, published
  `2022-12-31`, updated `2024-11-14`, retrieved `2026-08-23`.
- Primary support/access status: accessible; the affected window, dependency
  mechanism, indicator, stable-package exclusion, and project-side response
  remain present. PyTorch Foundation is the project/foundation reporter, not the
  issuer used for Knight Capital's company filing.
- Affected claims/cases: CASE-11 and its claim applications
  `MLE-BCLM-043,044,045,052,055,058,060,061,062`; the direct source claims are
  `045,052,060`.
- Proposed disposition and repair boundary: replace only “issuer's” with
  “PyTorch Foundation's” or “project's first-party” in Chapter 21 and regenerate
  its exact projections. Preserve first-party, affected-window, stable-package,
  and incomplete-cleanup limits; do not alter CASE-12 issuer language.

### P09-EVD-004 — MEDIUM — constructed satellites are described as proof

- Exact manuscript evidence: `manuscript/chapter-21.md:56` says CASE-02 through
  CASE-05 “prove the same review semantics”; `manuscript/chapter-21.md:62`
  correctly limits their inference to a synthetic-deterministic fixture.
- Source/version/date/retrieval: no public source applies. Canonical case
  register, frozen and re-read `2026-08-23`, classifies CASE-02 through CASE-05
  as `CONSTRUCTED SATELLITE`, each with zero reported facts, zero attributed
  outcomes, and zero source uses.
- Primary support/access status: not applicable by design; surrounding primary
  sources support doctrine only and cannot turn a constructed fixture into
  empirical proof.
- Affected claims/cases: CASE-02, CASE-03, CASE-04, CASE-05 and their Chapter 21
  instructional use; no canonical claim statement needs expansion.
- Proposed disposition and repair boundary: change “prove” to “exercise,”
  “test,” or “demonstrate within the fixed fixture.” Retain zero reported facts,
  zero attributed outcomes, and the prohibition on real performance,
  production, fairness, safety, business, governance-adoption, or readiness
  inference. Repair Chapter 21 and derived projections only.

### P09-EVD-005 — HIGH — constructed-case machine truth is empty and disagrees with the reader

- Exact manuscript/register evidence: the canonical case register retains
  correct zero `reportedFacts`/`attributedOutcomes`, but CASE-01 has empty
  `allowedInferences` and `transferRules` at
  `case-studies/case-study-register.json:23`-`:25` and `:97`-`:102`; CASE-02 at
  `:120`-`:122` and `:163`-`:168`; CASE-03 at `:186`-`:188` and `:245`-`:250`;
  CASE-04 at `:268`-`:270` and `:316`-`:321`; and CASE-05 at `:339`-`:341` and
  `:392`-`:397`. Those five objects have limitations and authority owners but
  no canonical `forbiddenInferences` field. Their blueprint projections retain
  the zeros and add only a generic forbidden sentence while leaving allowed
  and transfer empty at `blueprints/blueprint-register.json:4861`-`:4870`,
  `:4998`-`:5007`, `:5172`-`:5181`, `:5321`-`:5330`, and `:5496`-`:5505`.
  Reader projections nevertheless state non-empty allowed, forbidden,
  limitation, transfer, and authority meaning—for example
  `manuscript/chapter-08.md:77`-`:83`, `manuscript/chapter-18.md:68`,
  `manuscript/chapter-20.md:66`, and `manuscript/chapter-21.md:62`.
- Source/version/date/retrieval: no public source applies to CASE-01 through
  CASE-05. The canonical case register, blueprint projection, manuscript,
  manuscript register, research packs, and integration projections were frozen
  and re-read `2026-08-23`. Surrounding sources remain doctrine/mechanism
  anchors only and must not create a reported fact, outcome, or case-source use.
- Primary support/access status: not applicable by construction. This is a
  machine-truth completeness and projection-equality defect, not missing public
  evidence. The reader currently supplies a bounded meaning that canonical
  arrays do not encode, so neither canonical-to-reader derivation nor exact
  reader/register equality is demonstrable.
- Affected claims/cases: CASE-01, CASE-02, CASE-03, CASE-04, and CASE-05; every
  chapter application, research-pack case panel, blueprint case-use record,
  manuscript-register binding, integration projection, and validator assertion
  derived from those five truth records. Existing claim/source graph counts are
  unaffected and must remain `46/63/160/12/34`.
- Proposed disposition and repair boundary: preserve exactly zero reported
  facts, zero attributed outcomes, and zero case-source uses for all five. In
  each canonical case object, encode an explicit, case-bounded allowed
  inference, forbidden inference, transfer rule, limitation, and authority
  owner; do not substitute a shared slogan for case-specific meaning. Project
  those exact values into the blueprint, research packs, manuscript reader,
  manuscript register, integration/derived artifacts, and validator contract,
  with reader/register equality and no semantic expansion. Re-audit every one
  of the 12 cases after repair. P09-EVD-004 remains a separate wording repair:
  fixing “prove” alone does not close this canonical truth gap.

## Passed authority and truth boundaries

- Product/domain owners retain purpose and domain validity; independent
  evaluation retains gate adequacy; platform/SRE retain fleet mechanisms and
  incident command; security/safety/privacy/governance/legal/release/operations/
  business owners retain their formal decisions.
- NIST, FDA/IMDRF, SEC, SLSA, SPDX, OCI, ONNX, SemVer, Kubernetes, PyTorch,
  MLflow, scikit-learn, TensorFlow, Google, and Uber materials remain inside
  their registered sector, mechanism, standard, regulator, or first-party
  ceilings.
- CASE-06 through CASE-12 keep reported facts distinct from attributed outcomes
  and portable inference. CASE-01 through CASE-05 preserve zero reported facts,
  zero attributed outcomes, and zero source uses, but remain pending the bounded
  canonical-truth/equality repair in `P09-EVD-005`. CASE-12 remains explicitly
  non-ML and preserves the no-admit/no-deny and extraction limitations. CASE-07
  retains separate 2017 and 2025 platform states. CASE-09 retains historical
  groups/systems/results.
- No source or case supports a universal threshold, certification, prevalence,
  complete cleanup, global non-serving negative, formal approval, or automatic
  transfer to another port.

## Gate disposition

Task 04 is complete as an audit, but the evidence package is not content-locked.
Freeze these five findings into the independently reviewed Task 06 finding
register. Task 07 may repair only the exact boundaries above and must preserve
the before bytes and graph counts. Re-run all `46/63/160/12/34` forward/reverse
checks, the living/volatile matrix, and all case truth fields after repair.

`P09-OPEN-05`: **PRESERVED — OPEN PENDING ACCEPTED REPAIR OF P09-EVD-001 AND
P09-EVD-002.**

Independent content lock additionally remains blocked by accepted repair of
`P09-EVD-005`; this does not replace or close `P09-OPEN-05`.

CHANGES REQUIRED

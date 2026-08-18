# Machine Learning Engineer Phase 01 — Verification Report

Date: 2026-08-18
Gate: Phase 01 role validation and adjacent-role boundary
Verdict: **PROCEED**
Status: **PASS — ready for hostile Phase 01 acceptance**

## Canonical inventory

| Check | Result |
|---|---:|
| Sources | 36 |
| Unique source URLs | 36 |
| Distinct recorded organizations | 35 |
| Claims | 22 |
| Forward claim-to-source links | 119 |
| Reverse source-to-claim links | 119, exact pair equality |
| Minimum source IDs per claim | 2 |
| Minimum named organizations per claim | 2 |
| Employer-controlled sources | 14 |
| Distinct employer organizations | 14 |
| Official technical, standards, or primary research sources | 21 |
| Canonical adjacent-role rows | 17 |
| Scenario classification tests | 10 |
| Canonical Markdown claim coverage | 22 of 22 |

The register uses exact source IDs `MLE-SRC-001` through `MLE-SRC-036` and
claim IDs `MLE-CLM-001` through `MLE-CLM-022` in numeric order. Every source
records title, author or organization, type, publication date when available,
fixed access date, HTTP URL, role, domains, evidence summary, limitation,
currentness, verification disposition, and reverse claim links. Every claim
records statement, source IDs, evidence strength, volatility, limitation, and
at least two independent named organizations.

## Evidence coverage

### Employer and title evidence

The market lane contains twelve current employers across more than six industry
contexts and adds two later boundary/career employer records. Direct pages or
employer-controlled Greenhouse/Ashby records support exact, abbreviated,
seniority-qualified, hybrid, localized, and domain-qualified title use. The
Apple direct posting date is `2026-07-27`; the earlier April 23 search-view date
is retained only as bounded repost/index ambiguity. Postings remain volatile
hiring evidence, not audited operating practice.

### Technical lifecycle evidence

Twenty-one records satisfy the validator's official technical, standards, or
primary-research classification. The evidence covers problem and baseline
framing, data/feature contracts, experiment identity and bounded
reproducibility, representative evaluation, packaging and lineage, serving and
capacity, staged release and rollback, monitoring and retraining, security,
records, and retirement. Vendor mechanisms illustrate implementation but do not
define the profession.

### Boundary and failure evidence

The canonical matrix resolves Data Scientist, Data Engineer, Applied Scientist,
AI Research Engineer, AI Evaluation Engineer, Applied AI Engineer, LLM
Engineer, Agentic AI Engineer, MLOps Engineer, ML Platform/Infrastructure,
Software Engineer, Platform/SRE, Product, Security, Safety, Privacy/Governance/
Legal, and domain authorities. It uses only `CORE HERE`, `SHARED AT DIFFERENT
DEPTH`, `SUPPORTING`, and `OUT OF SCOPE`, and every row names a distinct decision
and retained authority. Ten scenarios test the classifications.

## Final URL recheck

All 36 canonical URLs were re-opened on 2026-08-18 with redirects enabled and a
bounded range GET. Results:

| Disposition | Count | Meaning |
|---|---:|---|
| HTTP 200 | 18 | Direct live HTML |
| HTTP 206 | 16 | Live range response, including the NIST PDF |
| HTTP 202 | 1 | EUR-Lex JavaScript challenge; official indexed regulation remains identifiable |
| HTTP 403 | 1 | OpenAI bot protection; official page remains browser-readable and independently corroborated |

Per-source final disposition:

An HTTP 200 row is direct-live and an HTTP 206 row is range-live unless a note
below states otherwise. The table therefore records every source's final
status and URL; restriction and redirect exceptions follow the table.

| ID | HTTP | Final URL after redirects |
|---|---:|---|
| `MLE-SRC-001` | 200 | <https://jobs.apple.com/en-us/details/200657324/senior-machine-learning-engineer-worldwide-product-marketing> |
| `MLE-SRC-002` | 200 | <https://job-boards.eu.greenhouse.io/imc/jobs/4567047101> |
| `MLE-SRC-003` | 200 | <https://job-boards.greenhouse.io/moloco/jobs/6245366003> |
| `MLE-SRC-004` | 206 | <https://jobs.ashbyhq.com/human-computer-lab/eb62af20-f469-40dc-b0a1-8b7ec59c9225> |
| `MLE-SRC-005` | 206 | <https://jobs.ashbyhq.com/bedrock-robotics/90558d16-8adb-4c62-a0fc-8fdfa809c0ca> |
| `MLE-SRC-006` | 206 | <https://jobs.ashbyhq.com/faculty/27dee06f-ffaa-462e-9b91-888272ba5989> |
| `MLE-SRC-007` | 206 | <https://jobs.ashbyhq.com/marianaminerals/44c92dd6-55f2-4e44-9360-bf4676466dac> |
| `MLE-SRC-008` | 200 | <https://job-boards.greenhouse.io/virtu/jobs/8457186002> |
| `MLE-SRC-009` | 200 | <https://job-boards.greenhouse.io/aisquared/jobs/4604010006> |
| `MLE-SRC-010` | 206 | <https://jobs.ashbyhq.com/Local%20Infusion/1ae56b4b-4568-48f7-b393-5937c3db64fe/> |
| `MLE-SRC-011` | 206 | <https://jobs.ashbyhq.com/lightspeed/0b8bb2c8-8049-4b53-b1d1-74397807ccf2> |
| `MLE-SRC-012` | 206 | <https://jobs.ashbyhq.com/tycho-ai/d4dd3f4b-451d-4f60-a2b1-f2368bbd7368> |
| `MLE-SRC-013` | 206 | <https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10> |
| `MLE-SRC-014` | 200 | <https://developers.google.com/machine-learning/guides/rules-of-ml?hl=de> |
| `MLE-SRC-015` | 200 | <https://www.tensorflow.org/tfx/data_validation/get_started> |
| `MLE-SRC-016` | 206 | <https://mlflow.org/docs/latest/tracking> |
| `MLE-SRC-017` | 206 | <https://docs.pytorch.org/docs/stable/notes/randomness.html> |
| `MLE-SRC-018` | 206 | <https://scikit-learn.org/stable/modules/calibration.html> |
| `MLE-SRC-019` | 200 | <https://research.google/pubs/model-cards-for-model-reporting/> |
| `MLE-SRC-020` | 200 | <https://docs.cloud.google.com/architecture/framework/security/use-ai-securely-and-responsibly> |
| `MLE-SRC-021` | 206 | <https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/> |
| `MLE-SRC-022` | 206 | <https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails.html> |
| `MLE-SRC-023` | 200 | <https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/machine-learning-operations-v2> |
| `MLE-SRC-024` | 206 | <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf> |
| `MLE-SRC-025` | 200 | <https://research.google/pubs/hidden-technical-debt-in-machine-learning-systems/> |
| `MLE-SRC-026` | 200 | <https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/> |
| `MLE-SRC-027` | 200 | <https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning?hl=de> |
| `MLE-SRC-028` | 206 | <https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/mlops02-bp01.html> |
| `MLE-SRC-029` | 200 | <https://airc.nist.gov/airmf-resources/airmf/5-sec-core/> |
| `MLE-SRC-030` | 200 | <https://learn.microsoft.com/en-us/compliance/assurance/assurance-artificial-intelligence> |
| `MLE-SRC-031` | 200 | <https://www.fda.gov/medical-devices/software-medical-device-samd/good-machine-learning-practice-medical-device-development-guiding-principles> |
| `MLE-SRC-032` | 403 | <https://openai.com/index/expanding-on-sycophancy/> |
| `MLE-SRC-033` | 200 | <https://engineering.atspotify.com/2016/02/spotify-technology-career-steps> |
| `MLE-SRC-034` | 200 | <https://engineering.atspotify.com/jobs> |
| `MLE-SRC-035` | 206 | <https://jobs.ashbyhq.com/sentry/81f09568-da7d-4ed1-8283-614f846c9b00/> |
| `MLE-SRC-036` | 202 | <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689> |

The FDA source returned HTTP 200 in the final range-GET pass. An independent
reviewer's direct curl path previously redirected to FDA Akamai abuse detection
and then returned 404, so the source record conservatively preserves both the
official index/browser availability and that restricted curl disposition.

Restriction and redirect exceptions:

- `MLE-SRC-014` and `MLE-SRC-027` added a `?hl=de` locale query without changing
  the evidence identity.
- `MLE-SRC-031` has the independent FDA curl restriction described above even
  though the final bounded range GET returned 200.
- `MLE-SRC-032` returned 403 bot protection; the official OpenAI postmortem is
  browser-readable and every supported claim is independently corroborated.
- `MLE-SRC-036` returned the expected EUR-Lex 202 JavaScript challenge; the
  official indexed regulation remains identifiable and every supported claim
  is independently corroborated.

No canonical URL was withdrawn. Volatile employer pages and unpinned `latest`
or `stable` documentation require another publication-phase recheck.

## Mechanical validation

Commands:

```bash
jq empty project-control/roles/machine-learning-engineer/research/evidence-register.json
node project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
rg -n 'SOURCE G''AP|T''BD|TO''DO|FIX''ME' project-control/roles/machine-learning-engineer
git diff --check -- project-control/roles/machine-learning-engineer
```

Results:

- canonical validator: `PASS`, 36 sources, 22 claims, zero errors;
- mutation suite: 42 of 42 tests pass;
- JSON parse: pass;
- unresolved-marker scan: zero findings;
- addition-aware whitespace and EOF audit across all ten new files: pass;
- scoped and repository-wide diff hygiene: pass;
- full repository check through the bundled PDF runtime: pass, including all
  validation/test suites, 129 built pages, and 2,341 local references.

The validator rejects under-counted evidence, malformed or duplicate IDs,
duplicate relation edges, unknown or asymmetric links, fewer than two source
organizations per claim, missing source traceability, weak employer/technical
diversity, invalid or non-catalog merge verdicts, inexact Markdown claim
coverage, and incomplete boundary vocabulary.

## Independent task review

| Task | Final spec verdict | Final quality verdict | Repair history |
|---|---|---|---|
| Evidence validator | PASS | APPROVED | Added employer-controlled types, approved merge catalog, exact claim tokens, duplicate-edge rejection, organization independence, and source-field checks |
| Employer/title research | PASS | APPROVED | Corrected Apple publication date from ambiguous search date to direct posting metadata |
| Technical lifecycle research | PASS | APPROVED | No repair; preserve revision/version warnings |
| Boundary/failure research | PASS | APPROVED | Corrected FDA restricted-request provenance |
| Canonical role/boundary drafts | PASS | APPROVED | Added assertion-level claim traceability and exact scenario vocabulary |

## Verdict rationale

`PROCEED` is justified because:

1. current independent employers use the exact title across materially different
   industries;
2. employer and technical evidence converges on a distinct workload-specific
   learning-system lifecycle accountability;
3. the primary decision, unit of accountability, deliverables, failure modes,
   and advanced responsibilities are specific enough for professional depth;
4. adjacent engineering and formal-authority decisions can be separated through
   concrete decision tests; and
5. the intended book can be bounded away from the existing Applied AI, Agentic
   AI, and LLM Engineering editions and from later data, MLOps, platform,
   infrastructure, reliability, security, safety, governance, and architecture
   roles.

## Limitations carried forward

- Employer evidence is volatile and organization-specific.
- NIST AI RMF 1.0 is under revision.
- `latest` and `stable` framework/vendor documentation is not immutable.
- Primary papers and vendor mechanisms do not establish universal thresholds or
  role ownership.
- Calibration, drift, monitoring, reproducibility, safety, fairness, and
  operational evidence remain task- and environment-specific.
- Technical qualification does not confer product, domain, evaluation,
  security, safety, privacy, legal, governance, executive, or regulatory
  authorization.

## Handoff

Phase 01 passes hostile acceptance. The accepted evidence commit must be pushed
and child issue #80 closed before Phase 04 work begins; the Machine Learning
Engineer root issue remains open.

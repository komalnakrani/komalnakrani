# Phase 01 — Validate Machine Learning Engineer Role and Boundary

Parent: [#79 — Machine Learning Engineer publication ecosystem](https://github.com/alpeshznakrani/komalnakrani/issues/79)

## Objective

Prove whether Machine Learning Engineer is a credible standalone professional
role and define a precise, non-overlapping scope suitable for original Komal
book architecture.

## Required evidence

- canonical title and aliases;
- independent employer usage across industries;
- daily, strategic, architecture, implementation, operational,
  security/governance, and stakeholder responsibilities;
- tools and technologies treated as replaceable examples;
- outputs and deliverables;
- recurring failures and advanced responsibilities;
- career adjacency and explicit non-scope;
- a complete adjacent-role matrix using `CORE HERE`, `SHARED AT DIFFERENT
  DEPTH`, `SUPPORTING`, and `OUT OF SCOPE`;
- decision-level differences from Data Scientist, Data Engineer, Applied
  Scientist, AI Research Engineer, AI Evaluation Engineer, Applied AI Engineer,
  LLM Engineer, Agentic AI Engineer, MLOps/ML Platform/ML Infrastructure,
  software engineering, SRE/platform, product, security, safety,
  privacy/governance/legal, and domain authorities.

## Evidence policy

- Prefer live official employer pages, employer-controlled job boards,
  standards bodies, primary papers, official documentation, official
  engineering publications, and public postmortems.
- Do not use job aggregators, anonymous career summaries, or generic
  training-vendor definitions for material claims.
- Treat postings as volatile role-pattern evidence, not universal practice.
- Every material claim must resolve through the structured evidence register in
  both directions and retain an explicit limitation.

## Required verdict

Exactly one: `PROCEED`; `RENAME TO` followed by an evidence-backed canonical
name; `MERGE WITH` followed by an approved role; `KEEP AS SPECIALIZATION`; or
`REJECT`.

## Acceptance criteria

- [x] Current official evidence supports or rejects the exact title.
- [x] Evidence spans independent employers, industries, and technical bodies.
- [x] All responsibility families, deliverables, failures, and advanced work are specific.
- [x] The primary engineering decision and unit of accountability are explicit.
- [x] Adjacent overlap and formal authority boundaries are resolved.
- [x] At least 30 sources and 20 claims pass structured validation.
- [x] All source/claim links are exact and bidirectional.
- [x] URL currentness, redirects, restrictions, and limitations are recorded.
- [x] The verdict is exact and actionable.
- [x] Repository checks and hostile Phase 01 QA pass.

## Outputs

- `project-control/roles/machine-learning-engineer/research/evidence-register.json`
- `project-control/roles/machine-learning-engineer/research/role-validation.md`
- `project-control/roles/machine-learning-engineer/research/adjacent-role-boundary.md`
- `project-control/roles/machine-learning-engineer/research/verification-report.md`

## Handoff

Only an accepted `PROCEED` verdict allows Phase 04. Any other verdict stops the
book pipeline at the catalog decision.

## Integrated evidence checkpoint

- Verdict: `PROCEED`
- Sources: 36
- Claims: 22
- Exact source/claim links: 119 in each direction
- Employer evidence: 14 sources / 14 organizations
- Technical, standards, or primary research: 21 sources
- Adjacent-role rows: 17
- Scenario tests: 10
- Validator: PASS, zero errors
- Mutation suite: 42/42 PASS
- Independent task reviews: all final verdicts PASS / APPROVED
- Durable report: `research/verification-report.md`

## Final acceptance

- Independent Task 6 review: specification PASS / quality APPROVED
- Hostile merge, heading, matrix, scenario, leakage, marker, and addition-aware
  file-hygiene audit: PASS
- Full repository check: PASS with 129 built pages and 2,341 local references
- PDF artifact tests: 3/3 PASS through the bundled document runtime
- Transition: Phase 01 accepted; Phase 04 is the exact next gate

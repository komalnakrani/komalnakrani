# Phase 01 — Validate Agentic AI Engineer Role and Boundary

## Objective

Prove whether Agentic AI Engineer is a credible standalone professional role
and define a precise, non-overlapping scope suitable for original Komal book
architecture.

## Inputs

- approved master catalog position 3 of 32
- repository ownership and Komal-first operating decisions
- current official employer evidence across banking, energy, geospatial,
  biotechnology, consulting, semiconductor, telecommunications, and enterprise
  technology contexts
- authoritative engineering, protocol, identity, evaluation, observability,
  and security sources accessed on 2026-08-16

## Work

- Verify canonical title, aliases, employer usage, and market volatility.
- Define daily, architecture, implementation, operational,
  security/governance, stakeholder, deliverable, failure, and advanced work.
- Identify the role's primary technical decision and unit of accountability.
- Compare Applied AI Engineer, LLM Engineer, Machine Learning Engineer, Forward
  Deployed Engineer, AI Research Engineer, AI Evaluation Engineer,
  MLOps/platform/SRE, software/data engineering, product, solutions architecture,
  and security/safety/privacy/governance/domain roles.
- Issue exactly one allowed verdict and document evidence limitations.

## Evidence policy

- Prefer live official employer pages, official documentation/specifications,
  government/standards sources, and primary engineering publications.
- Use official indexed job records only where the employer's dynamic page is not
  extractable; mark that limitation.
- Treat postings as role-pattern evidence, not universal practice.
- Treat vendor guides and draft protocols as current implementation evidence,
  not standards for the profession.
- Do not import Applied AI or FDE content as a role substitute.

## Required verdict

Exactly one: `PROCEED`, `RENAME TO <name>`, `MERGE WITH <role>`,
`KEEP AS SPECIALIZATION`, or `REJECT`.

## Acceptance criteria

- [ ] Current official evidence supports or rejects the exact title explicitly.
- [ ] Evidence spans independent employers and industries.
- [ ] Responsibilities cover architecture, implementation, evaluation,
  operations, security/governance, stakeholders, deliverables, and failure.
- [ ] Model-directed action, authority, state, trajectory, and recovery form a
  defensible unit of accountability.
- [ ] Adjacent-role overlap and explicit non-scope are resolved at decision and
  evidence depth.
- [ ] Every material claim resolves through a structured source register.
- [ ] Title/tool/protocol volatility and source limitations are explicit.
- [ ] The verdict is exact and actionable.

## Verification

- Validate `evidence-register.json` with `jq` or a JSON parser.
- Confirm every claim's `source_ids` and every source's `claims_supported`
  resolve.
- Check all material role claims in the two markdown outputs carry claim IDs.
- Re-open volatile primary URLs or mark any changed/withdrawn source accurately.
- Run `git diff --check` on accepted files.

## Outputs

- `project-control/roles/agentic-ai-engineer/research/role-validation.md`
- `project-control/roles/agentic-ai-engineer/research/adjacent-role-boundary.md`
- `project-control/roles/agentic-ai-engineer/research/evidence-register.json`
- `project-control/roles/agentic-ai-engineer/research/verification-report.md`
- updated role state after root acceptance

## Dependencies

- Root role issue.
- No Abhyaas execution dependency under the Komal-first decision.

## Handoff

Only an accepted `PROCEED` verdict allows Phase 04. Phase 04 may use provisional
Komal competency clusters while Abhyaas remains deferred, but it must record a
later compatibility gate rather than imply certification scope is complete.

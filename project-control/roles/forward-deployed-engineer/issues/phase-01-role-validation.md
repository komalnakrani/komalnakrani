## Objective

Prove whether Forward Deployed Engineer is a credible standalone professional role and define a precise boundary suitable for original book architecture.

## Inputs

- Approved master role catalog
- Komal root role issue
- Official employer career pages and job descriptions
- Official platform/engineering documentation and engineering publications
- Current adjacent-role evidence

## Work

- Research canonical title, aliases, employer usage, responsibilities, deliverables, stakeholders, tools, operating context, failures, advanced scope, and career adjacency.
- Cover multiple employers and industries using primary sources wherever available.
- Compare Forward Deployed Engineer against Applied AI Engineer, Solutions Architect, AI Solutions Architect, Software Engineer, Machine Learning Engineer, Data Engineer, and Technical Account/Customer Engineering roles.
- Classify overlap as CORE HERE, SHARED AT DIFFERENT DEPTH, SUPPORTING, or OUT OF SCOPE.
- Explain how a learning objective or assessment scenario differs across adjacent roles.
- Maintain structured evidence and claim traceability.
- Deliver exactly one verdict: PROCEED, RENAME, MERGE, KEEP AS SPECIALIZATION, or REJECT.

## Acceptance criteria

- [ ] Role title is supported by current official employer evidence.
- [ ] Responsibilities cover implementation, architecture, deployment, operations, security/governance, stakeholders, and deliverables.
- [ ] Evidence spans multiple employers and industries rather than one company vocabulary.
- [ ] Adjacent-role overlap and explicit non-scope are resolved.
- [ ] Every material claim maps to a structured source record.
- [ ] Research limitations and unstable/tool-specific details are explicit.
- [ ] Verdict is supported and actionable for book-scope work.

## Verification

- Check every source URL and access date.
- Prefer official career pages, documentation, engineering blogs, standards, and papers.
- Reject unsupported or aggregator-only claims.
- Review boundary classifications for internal consistency.
- Run `npm run validate:publications` to ensure factory content remains valid.

## Outputs

- `project-control/roles/forward-deployed-engineer/research/evidence-register.json`
- `project-control/roles/forward-deployed-engineer/research/role-validation.md`
- `project-control/roles/forward-deployed-engineer/research/adjacent-role-boundary.md`
- updated `project-control/roles/forward-deployed-engineer/ROLE-STATE.md`

## Dependencies

- Komal publication foundation issue #2 complete.

## Handoff

Book-scope work can assume a stable role name, explicit boundary, evidence-backed responsibility model, and resolved adjacent-role distinctions.

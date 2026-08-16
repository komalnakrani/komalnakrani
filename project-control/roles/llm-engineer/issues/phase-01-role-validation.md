# [LLM Engineer] Validate the role and adjacent-role boundary

## Objective

Prove whether LLM Engineer is a credible standalone professional role, identify conditional aliases, define its unit of accountability, and resolve overlap with Applied AI, Agentic AI, ML Engineer, AI Research, AI Evaluation, Applied Scientist, data/search, MLOps/platform/infrastructure/performance/reliability, safety/security/governance, FDE, architecture, product, and software roles.

## Inputs

- approved 32-role catalog in the master factory prompt
- current Komal repository ownership and originality rules
- current first-party employer descriptions
- official model/evaluation/tuning documentation
- NIST generative-AI risk guidance
- primary transformer, retrieval, adaptation, preference, quantization, systems, and evaluation research

## Work

- investigate canonical title, aliases, current employer usage, responsibilities, deliverables, stakeholders, tools/technologies as replaceable examples, failures, seniority, and operating contexts;
- define one unit of accountability and primary technical decision;
- classify every adjacent role as CORE HERE, SHARED AT DIFFERENT DEPTH, SUPPORTING, or OUT OF SCOPE;
- show how assessment scenarios differ at each boundary;
- record source-level summaries, limitations, currentness, verification state, and claim mappings;
- issue exactly one verdict.

## Acceptance criteria

- [x] exact-title employer usage is supported by multiple independent first-party sources
- [x] aliases and title instability are explicit
- [x] daily, architecture, implementation, operational, governance/control, stakeholder, advanced, and failure responsibilities are specific
- [x] the unit of accountability is distinguishable from Applied AI and Agentic AI
- [x] Machine Learning, Research, Evaluation, MLOps/platform, performance/reliability, safety/security/governance, FDE, architecture, product, and software overlaps are resolved
- [x] explicit non-scope and authority boundaries exist
- [x] every bracketed claim resolves to the structured evidence register
- [x] source limitations and access date are recorded
- [x] verdict is exactly **PROCEED**

## Verification

```bash
jq empty project-control/roles/llm-engineer/research/evidence-register.json
jq '{sources: (.sources | length), claims: (.claims | length)}' project-control/roles/llm-engineer/research/evidence-register.json
rg -n 'LLME-CLM-[0-9]{3}' project-control/roles/llm-engineer/research/role-validation.md project-control/roles/llm-engineer/research/adjacent-role-boundary.md
rg -n 'PROCEED|CORE HERE|SHARED AT DIFFERENT DEPTH|SUPPORTING|OUT OF SCOPE' project-control/roles/llm-engineer/research
```

Expected structured count at preparation: 23 sources and 18 claims.

## Outputs

- `project-control/roles/llm-engineer/research/role-validation.md`
- `project-control/roles/llm-engineer/research/adjacent-role-boundary.md`
- `project-control/roles/llm-engineer/research/evidence-register.json`

## Dependencies

The Abhyaas-owned independent standard remains deferred. This evidence pack can seed that later work but must not be represented as a completed certification standard.

## Handoff

Phase 04 may assume the canonical role is LLM Engineer; its accountable object is measured language-model behavior and change across task, data, context, adaptation, evaluation, inference, and controls; and deep autonomous effects, generalized ML/platform infrastructure, research novelty, independent assurance, and formal risk authority remain adjacent.

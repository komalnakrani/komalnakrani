# [LLM Engineer] Decide the smallest coherent book structure

## Objective

Choose the minimum number of Komal books that can teach the validated LLM Engineer specialization deeply, preserve coherent reader transformations, support managed and weight-access postures honestly, and avoid duplicating adjacent roles.

## Inputs

- `project-control/roles/llm-engineer/research/role-validation.md`
- `project-control/roles/llm-engineer/research/adjacent-role-boundary.md`
- `project-control/roles/llm-engineer/research/evidence-register.json`
- existing Komal publication architecture and originality boundary
- independent Abhyaas competency work: deferred, therefore not treated as complete input

## Work

- estimate conceptual, practical, prerequisite, architecture, operational, security/reliability, project, and narrative depth for each competency cluster;
- test single-, two-, three-, and four-plus-volume options;
- require a distinct one-sentence thesis and professional reader endpoint for every retained volume;
- define domain ownership, cross-volume dependencies, non-overlap rules, project model, expected size, and deferred work;
- reject market-keyword and tool/framework splits.

## Acceptance criteria

- [x] MLOps's historical volume count did not influence the decision
- [x] one-book feasibility was evaluated and rejected for explicit pedagogical reasons
- [x] each retained volume has a distinct one-sentence thesis
- [x] Volume 1 has a professional endpoint without weight access
- [x] Volume 2 has a distinct data/post-training/inference/change endpoint
- [x] evaluation, controls, and operations are not falsely isolated into a separate volume
- [x] cross-volume artifact dependencies and no-reteaching rules are explicit
- [x] Applied AI, Agentic AI, MLE, Research, Evaluation, platform/performance, assurance, FDE, product, and authority boundaries remain intact
- [x] decision is exactly **2-VOLUME SERIES**

## Verification

```bash
rg -n '2-VOLUME SERIES|Volume 1 thesis|Volume 2 thesis|Cross-volume dependency|Non-overlap rules|Acceptance-test result' project-control/roles/llm-engineer/books/book-scope-decision.md
rg -n 'SINGLE BOOK|2-VOLUME SERIES|3-VOLUME SERIES|4-VOLUME SERIES' project-control/roles/llm-engineer/books/book-scope-decision.md
```

## Outputs

- `project-control/roles/llm-engineer/books/book-scope-decision.md`

## Dependencies

Phase 01 verdict must remain PROCEED. Any later independent Abhyaas standard that materially contradicts the publication clusters triggers a documented Phase 18 reconciliation, not silent rewriting.

## Handoff

Phase 05 must architect:

1. *LLM Behavior Engineering: Contracts, Context, Retrieval, and Evaluation*
2. *LLM Adaptation and Runtime: Data, Post-Training, Inference, and Model Change*

with one evidence spine and the Mosaic Desk series capstone. Volume 2 consumes a frozen Volume 1 behavior/evaluation handoff and does not reteach prompting or retrieval foundations.

# Machine Learning Engineer Phase 01 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the Machine Learning Engineer role workspace and produce an evidence-backed, mechanically validated Phase 01 role and adjacent-boundary verdict.

**Architecture:** The coordinator owns GitHub, role state, the final evidence register, and all integration. Three read/research lanes operate concurrently on disjoint source-ID, claim-ID, and working-file ranges; the coordinator then merges their evidence into canonical Phase 01 outputs and runs hostile validation before closing the phase issue.

**Tech Stack:** Markdown, JSON, Node.js ESM, Node test runner, `gh`, `jq`, `rg`, official/primary web sources, existing Komal publication validation.

**Spec:** `docs/superpowers/specs/2026-08-18-machine-learning-engineer-learning-systems-test-bench-design.md`

## Global Constraints

- Canonical role under evaluation: `Machine Learning Engineer`, catalog position 5 of 32.
- Author for all eventual books: Komal Nakrani.
- This plan is Komal-only; do not mutate Abhyaas, create an exam, question bank, certification, billing flow, or course.
- Phase 01 must issue exactly one allowed verdict: `PROCEED`; `RENAME TO` plus an evidence-backed name; `MERGE WITH` plus an approved catalog role; `KEEP AS SPECIALIZATION`; or `REJECT`.
- Do not start book scope, architecture, manuscript, figures, or publication until the Phase 01 verdict is accepted.
- Use primary or official sources for material claims; job aggregators, anonymous career summaries, and generic training-vendor role definitions are prohibited.
- Treat employer postings as volatile role-pattern evidence, not universal truth.
- Every source and claim must have forward and reverse traceability and an explicit limitation.
- No critical decision may exist only in chat.
- One coordinator is the sole writer of shared state, issue records, and final evidence files.
- Research workers may write only their allocated files and must not commit, push, create issues, or spawn agents.
- Repository root: `/Applications/ServBay/www/komalnakrani`.

---

### Task 1: Bootstrap role state and issue coordination

**Files:**
- Create: `project-control/roles/machine-learning-engineer/ROLE-STATE.md`
- Create: `project-control/roles/machine-learning-engineer/issues/root.md`
- Create: `project-control/roles/machine-learning-engineer/issues/phase-01-role-validation.md`
- Modify: `project-control/role-factory/FACTORY-STATE.md`

**Interfaces:**
- Consumes: approved design spec and catalog position 5.
- Produces: canonical role directory, local root/phase issue bodies, GitHub root and Phase 01 issue URLs, and a resumable active-role pointer.

- [ ] **Step 1: Verify the clean baseline and absence of a competing role issue**

Run:

```bash
cd /Applications/ServBay/www/komalnakrani
git status --short
gh issue list --state open --limit 100 --json number,title,labels,url
test ! -e project-control/roles/machine-learning-engineer/ROLE-STATE.md
```

Expected: clean status, no open Machine Learning Engineer issue, and the final command exits zero.

- [ ] **Step 2: Create the local role state**

Create `ROLE-STATE.md` with these required sections and exact initial values:

```markdown
# ROLE STATE — Machine Learning Engineer

## Identity

- Role: Machine Learning Engineer
- Slug: `machine-learning-engineer`
- Catalog position: 5 of 32
- Current global phase: Phase 01 role validation in progress
- Last updated: 2026-08-18
- Komal root issue: recorded after GitHub creation
- Active child issue: Phase 01 role validation
- Abhyaas: intentionally out of scope for this book-only run

## Locked decisions

- Creative system: Learning Systems Test Bench
- Author: Komal Nakrani
- Final PDF geometry: 7 by 10 inch screen-first
- Image policy: ImageGen conceptual PNGs; semantic HTML/CSS for precise labels and quantitative evidence; no stored SVG or WebP publication figures
- Execution boundary: one active book at a time, with disjoint parallel work inside it

## Current work

Phase 01 must prove the role and its boundary before any book-count or architecture decision.

## Completed gates

- [ ] 01 role validation and boundary
- [ ] 04 book scope and volume decision
- [ ] 05 book or series architecture
- [ ] 06 source and case-study research
- [ ] 07 chapter blueprints
- [ ] 08 manuscript
- [ ] 09 whole-book QA
- [ ] 10 visuals
- [ ] 11 web and screen-first PDF publication
- [ ] 19 hostile final QA

## Exact next action

Complete and accept the Phase 01 evidence register, role validation, adjacent-role boundary, and verification report.

## Resume instructions

Read this file, the approved design spec, root issue, active child issue, git status, and GitHub issue state. Resume the same open issue before creating another.
```

- [ ] **Step 3: Create exact local issue bodies**

The root body must define the role identity, Komal-only objective, phase checklist 01/04/05/06/07/08/09/10/11/19, Learning Systems Test Bench decisions, explicit no-Abhyaas boundary, and Phase 01 as the only executable action.

The Phase 01 body must require canonical-title evidence, aliases, employer use, daily/strategic/architecture/implementation/operations/security-governance/stakeholder responsibilities, deliverables, failures, advanced work, career adjacency, a complete adjacent-role matrix, exact verdict vocabulary, structured traceability, URL recheck, and a stop before Phase 04 unless the verdict is `PROCEED`.

- [ ] **Step 4: Create GitHub labels and issues from the local bodies**

Run:

```bash
cd /Applications/ServBay/www/komalnakrani
gh label create role:machine-learning-engineer --color 1D76DB --description "Machine Learning Engineer role factory" --force
gh label create phase:01-role-validation --color 5319E7 --description "Role validation and boundary" --force
root_url=$(gh issue create --title "Build the Machine Learning Engineer Komal publication ecosystem" --body-file project-control/roles/machine-learning-engineer/issues/root.md --label role:machine-learning-engineer --label status:in-progress)
phase_url=$(gh issue create --title "Validate the Machine Learning Engineer role and adjacent-role boundary" --body-file project-control/roles/machine-learning-engineer/issues/phase-01-role-validation.md --label role:machine-learning-engineer --label phase:01-role-validation --label status:in-progress)
printf '%s\n%s\n' "$root_url" "$phase_url"
```

Expected: two distinct issue URLs in `alpeshznakrani/komalnakrani`.

- [ ] **Step 5: Record the returned issue numbers and activate factory state**

Use `apply_patch` to replace the two initial issue fields in `ROLE-STATE.md` with the exact returned issue links. Update `FACTORY-STATE.md` so Machine Learning Engineer is the only active catalog role, Phase 01 is the current gate, and no second role/book may start.

- [ ] **Step 6: Verify local and GitHub bootstrap**

Run:

```bash
cd /Applications/ServBay/www/komalnakrani
rg -n "Machine Learning Engineer|Learning Systems Test Bench|Phase 01" project-control/roles/machine-learning-engineer project-control/role-factory/FACTORY-STATE.md
gh issue view "$root_url" --json state,labels,url,title
gh issue view "$phase_url" --json state,labels,url,title
git diff --check
```

Expected: both issues open with `status:in-progress`, local paths resolve, and diff check passes.

- [ ] **Step 7: Commit and push the bootstrap**

```bash
git add project-control/roles/machine-learning-engineer project-control/role-factory/FACTORY-STATE.md
git commit -m "chore: bootstrap Machine Learning Engineer role"
git push origin main
```

---

### Task 2: Build the Phase 01 evidence validator with TDD

**Files:**
- Create: `project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs`
- Create: `project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs`

**Interfaces:**
- Consumes: `evidence-register.json`, `role-validation.md`, and `adjacent-role-boundary.md` in the same directory.
- Produces: `validatePhase01({ register, roleValidation, adjacentBoundary }) -> string[]`, where an empty array means PASS; CLI prints a JSON report and exits nonzero on errors.

- [ ] **Step 1: Write failing validator tests**

The test file must import `validatePhase01` and define one valid fixture plus mutations proving rejection of:

```javascript
[
  'wrong role or slug',
  'fewer than 30 sources',
  'fewer than 20 claims',
  'duplicate source or claim IDs',
  'malformed MLE-SRC-### or MLE-CLM-### IDs',
  'source without claims_supported',
  'claim with fewer than two source_ids',
  'unknown forward or reverse references',
  'asymmetric source/claim references',
  'source without limitation or verification status',
  'non-http source identifier',
  'fewer than eight employer-role sources',
  'fewer than six distinct employer organizations',
  'fewer than twelve official technical or standards sources',
  'missing allowed verdict',
  'claim ID absent from both canonical markdown files',
  'missing adjacent-role classification vocabulary'
]
```

The valid fixture must use `role: "Machine Learning Engineer"`, `role_slug: "machine-learning-engineer"`, `phase: "01-role-validation"`, and `access_date: "2026-08-18"`.

- [ ] **Step 2: Run the tests and confirm RED**

Run:

```bash
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
```

Expected: FAIL because `validate-phase-01.mjs` does not exist.

- [ ] **Step 3: Implement the validator**

Export:

```javascript
export function validatePhase01({ register, roleValidation, adjacentBoundary }) {
  const errors = [];
  // Validate identity, counts, ID formats, uniqueness, source quality,
  // exact bidirectional references, markdown claim coverage, verdict,
  // and CORE HERE / SHARED AT DIFFERENT DEPTH / SUPPORTING / OUT OF SCOPE.
  return errors;
}
```

The CLI must read the three canonical files, print:

```json
{"status":"PASS","sources":30,"claims":20,"errors":[]}
```

with actual counts, and exit `1` when `errors.length > 0`.

- [ ] **Step 4: Run the tests and confirm GREEN**

Run:

```bash
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
```

Expected: all validator tests pass.

- [ ] **Step 5: Commit and push the validator**

```bash
git add project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
git commit -m "test: add Machine Learning Engineer role evidence gate"
git push origin main
```

---

### Task 3: Research canonical title and employer role patterns

**Files:**
- Create: `project-control/roles/machine-learning-engineer/research/working/market-role-evidence.md`
- Create: `project-control/roles/machine-learning-engineer/research/working/market-role-fragment.json`

**Interfaces:**
- Consumes: approved role name and source policy.
- Produces: sources `MLE-SRC-001` through `MLE-SRC-012` and claims `MLE-CLM-001` through `MLE-CLM-007`; no other IDs or files.

- [ ] **Step 1: Collect employer-controlled evidence**

Use live official employer career pages or employer-controlled Greenhouse,
Ashby, Lever, or Workday postings. The set must contain at least 12 sources,
six independent employers, and six industry contexts. Record exact title,
aliases, seniority, location, daily work, strategic work, architecture,
implementation, operation, stakeholder work, deliverables, qualifications,
and source volatility.

- [ ] **Step 2: Write the allocated JSON fragment**

Each source record must contain `source_id`, exact `title`, exact
`author_or_org`, accurate `source_type`, `publication_date`, fixed
`access_date` of `2026-08-18`, live `url_or_identifier`, fixed `role` of
`Machine Learning Engineer`, `domains`, `claims_supported`, a bounded
`evidence_summary`, explicit `limitations`, `currentness`, and
`verification_status`. Values must come from the inspected source; fabricated
sample values are prohibited.

Each claim record must contain `claim_id`, `statement`, `source_ids`,
`evidence_strength`, `volatility`, and `limitations`. Every claim uses at least
two independent sources and exact bidirectional references.

- [ ] **Step 3: Write the market synthesis**

The Markdown report must distinguish exact title use from aliases, identify
durable convergence versus current hiring fashion, and cite every allocated
claim ID inline. Do not infer role scope from one employer.

- [ ] **Step 4: Validate the lane**

Run:

```bash
jq empty project-control/roles/machine-learning-engineer/research/working/market-role-fragment.json
rg -o "MLE-CLM-[0-9]{3}" project-control/roles/machine-learning-engineer/research/working/market-role-evidence.md | sort -u
git diff --check -- project-control/roles/machine-learning-engineer/research/working/market-role-evidence.md project-control/roles/machine-learning-engineer/research/working/market-role-fragment.json
```

Expected: valid JSON, claims 001–007 all present, and clean diff.

---

### Task 4: Research technical lifecycle and professional outputs

**Files:**
- Create: `project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-evidence.md`
- Create: `project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-fragment.json`

**Interfaces:**
- Consumes: approved role name and source policy.
- Produces: sources `MLE-SRC-013` through `MLE-SRC-024` and claims `MLE-CLM-008` through `MLE-CLM-014`; no other IDs or files.

- [ ] **Step 1: Collect primary technical evidence**

Use at least 12 current official specifications, standards, primary papers, or
official engineering documentation across at least six organizations. Cover
problem framing, data and feature contracts, baselines, training and experiment
reproducibility, evaluation and uncertainty, packaging, serving, latency and
capacity, monitoring, drift, retraining, rollback, security implementation,
and lifecycle records. Vendor mechanisms may illustrate practice but may not
define the role.

- [ ] **Step 2: Write the allocated JSON fragment**

Use the same source and claim field names as Task 3. Source types must accurately
identify `official-standard`, `primary-paper`, `official-documentation`, or
`official-engineering-publication`. Claims 008–014 each require at least two
independent sources and bidirectional references.

- [ ] **Step 3: Write the lifecycle synthesis**

Organize durable decisions from task definition through retirement. For every
responsibility, name the professional output or artifact and the evidence that
would make the decision reviewable. Cite claims 008–014 inline and preserve
currentness limitations.

- [ ] **Step 4: Validate the lane**

Run:

```bash
jq empty project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-fragment.json
rg -o "MLE-CLM-[0-9]{3}" project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-evidence.md | sort -u
git diff --check -- project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-evidence.md project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-fragment.json
```

Expected: valid JSON, claims 008–014 all present, and clean diff.

---

### Task 5: Research adjacent boundaries, failure patterns, and career depth

**Files:**
- Create: `project-control/roles/machine-learning-engineer/research/working/boundary-failure-evidence.md`
- Create: `project-control/roles/machine-learning-engineer/research/working/boundary-failure-fragment.json`

**Interfaces:**
- Consumes: approved catalog and source policy.
- Produces: sources `MLE-SRC-025` through `MLE-SRC-036` and claims `MLE-CLM-015` through `MLE-CLM-022`; no other IDs or files.

- [ ] **Step 1: Collect boundary and failure evidence**

Use at least 12 official or primary sources across at least six organizations.
Cover failures and ownership boundaries involving Data Scientist, Data Engineer,
Applied Scientist, AI Research Engineer, AI Evaluation Engineer, Applied AI
Engineer, LLM Engineer, Agentic AI Engineer, MLOps Engineer, ML Platform/ML
Infrastructure, software engineering, SRE/platform, product, security, safety,
privacy/governance/legal, and domain authorities. Include lifecycle failures,
operational incidents or postmortems, and advanced/staff-level responsibility.

- [ ] **Step 2: Write the allocated JSON fragment**

Use the Task 3 source and claim field names. Claims 015–022 each require at
least two independent sources and exact bidirectional references.

- [ ] **Step 3: Write the boundary synthesis**

For every adjacent role classify work as `CORE HERE`, `SHARED AT DIFFERENT
DEPTH`, `SUPPORTING`, or `OUT OF SCOPE`. State the adjacent role center, the
Machine Learning Engineer distinction, a concrete decision difference, and the
formal authority retained elsewhere. Cite claims 015–022 inline.

- [ ] **Step 4: Validate the lane**

Run:

```bash
jq empty project-control/roles/machine-learning-engineer/research/working/boundary-failure-fragment.json
rg -o "MLE-CLM-[0-9]{3}" project-control/roles/machine-learning-engineer/research/working/boundary-failure-evidence.md | sort -u
git diff --check -- project-control/roles/machine-learning-engineer/research/working/boundary-failure-evidence.md project-control/roles/machine-learning-engineer/research/working/boundary-failure-fragment.json
```

Expected: valid JSON, claims 015–022 all present, and clean diff.

---

### Task 6: Integrate the canonical Phase 01 evidence and verdict

**Files:**
- Create: `project-control/roles/machine-learning-engineer/research/evidence-register.json`
- Create: `project-control/roles/machine-learning-engineer/research/role-validation.md`
- Create: `project-control/roles/machine-learning-engineer/research/adjacent-role-boundary.md`
- Create: `project-control/roles/machine-learning-engineer/research/verification-report.md`
- Modify: `project-control/roles/machine-learning-engineer/ROLE-STATE.md`
- Modify: `project-control/roles/machine-learning-engineer/issues/phase-01-role-validation.md`

**Interfaces:**
- Consumes: all three validated working fragments and reports from Tasks 3–5 plus the validator from Task 2.
- Produces: one canonical evidence register, exact verdict, canonical definition, complete boundary matrix, and durable QA report. Phase 04 may consume these files only if the verdict is `PROCEED`.

- [ ] **Step 1: Merge and normalize the register**

Create a canonical object with:

```json
{
  "register_version": "1.0.0",
  "role": "Machine Learning Engineer",
  "role_slug": "machine-learning-engineer",
  "phase": "01-role-validation",
  "access_date": "2026-08-18",
  "method": {
    "scope": "Official employer role evidence plus primary technical, standards, engineering, and postmortem sources.",
    "source_policy": "Primary and official sources for all material claims; no aggregators or generic role summaries.",
    "currentness_note": "Employer postings and vendor mechanisms are volatile; durable scope requires cross-source convergence."
  },
  "sources": [],
  "claims": []
}
```

Merge source IDs 001–036 and claim IDs 001–022 in numeric order. Remove only an
unreachable or duplicated source, and only if the final minimums and every claim
still pass. Preserve every limitation.

- [ ] **Step 2: Write role validation**

The report must include the exact verdict, evidence-backed canonical title and
aliases, canonical definition, primary decision, unit of accountability, role
properties, daily/strategic/architecture/implementation/operations/security-
governance/stakeholder responsibilities, deliverables, tools as replaceable
examples, failures, advanced responsibilities, career adjacency, volatility,
explicit non-scope, and inline claim IDs for every material assertion.

- [ ] **Step 3: Write the adjacent-role boundary**

Include the classification vocabulary, complete adjacent-role matrix, at least
eight scenario classification tests, core-here list, supporting list, explicit
out-of-scope authority, and a book-boundary enforcement checklist. Every
material statement must carry an allocated claim ID.

- [ ] **Step 4: Run the canonical validator**

Run:

```bash
node project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
```

Expected: CLI reports `PASS`, at least 30 sources and 20 claims, and all tests pass.

- [ ] **Step 5: Recheck source currentness**

Re-open every final URL. Record final HTTP/browser disposition and any redirects,
access restrictions, withdrawn postings, or content changes in
`verification-report.md`. A restricted official page may remain only when its
identity and limitation are accurately recorded and the supported claim has
independent corroboration.

- [ ] **Step 6: Write durable verification and update local state**

Record exact source/claim counts, distinct employer and organization counts,
URL results, forward/reverse link counts, markdown claim coverage, boundary
matrix coverage, verdict, limitations, test commands, and PASS/blocker status.
Update the Phase 01 issue body acceptance checklist and `ROLE-STATE.md` with the
exact verdict and evidence counts. Do not mark Phase 04 active yet.

- [ ] **Step 7: Run scoped hygiene**

Run:

```bash
jq empty project-control/roles/machine-learning-engineer/research/evidence-register.json
rg -n "SOURCE GAP|T[B]D|TO[D]O|FIX[M]E" project-control/roles/machine-learning-engineer || true
git diff --check -- project-control/roles/machine-learning-engineer
```

Expected: valid JSON, no unresolved temporary marker, and clean diff.

---

### Task 7: Hostile Phase 01 acceptance, commit, and issue closure

**Files:**
- Modify: `project-control/roles/machine-learning-engineer/ROLE-STATE.md`
- Modify: `project-control/roles/machine-learning-engineer/issues/phase-01-role-validation.md`
- Modify: `project-control/role-factory/FACTORY-STATE.md`

**Interfaces:**
- Consumes: canonical Task 6 outputs and verification report.
- Produces: accepted Phase 01 commit, pushed state, closed child issue, open root issue, and a precise Phase 04 handoff only when verdict is `PROCEED`.

- [ ] **Step 1: Independently audit the completed phase**

Confirm exact title evidence, source diversity, role definition, every required
responsibility family, complete adjacent-role matrix, explicit authority
boundaries, claim/source symmetry, currentness limitations, and the absence of
book architecture or certification leakage.

- [ ] **Step 2: Run fresh repository gates**

Run:

```bash
node project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs
node --test project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs
npm run check
git diff --check
```

Expected: all commands pass.

- [ ] **Step 3: Record the accepted transition**

If the verdict is `PROCEED`, mark Phase 01 complete in role state, set the exact
next action to Phase 04 book scope, and update factory state to retain Machine
Learning Engineer as the sole active role. If the verdict is any other allowed
value, record that decision and stop without activating Phase 04.

- [ ] **Step 4: Commit and push accepted Phase 01**

Run:

```bash
git add project-control/roles/machine-learning-engineer project-control/role-factory/FACTORY-STATE.md
git commit -m "feat: validate Machine Learning Engineer role"
git push origin main
```

- [ ] **Step 5: Update and close the Phase 01 issue**

Post the exact verdict, source/claim/link counts, test results, limitations, and
commit hash. Replace `status:in-progress` with `status:done` and close the Phase
01 issue. Keep the Machine Learning Engineer root issue open.

- [ ] **Step 6: Verify final state**

Run:

```bash
git status --short
git rev-parse HEAD
git ls-remote origin refs/heads/main
phase_number=$(gh issue list --state all --search '"Validate the Machine Learning Engineer role and adjacent-role boundary" in:title' --json number --jq '.[0].number')
root_number=$(gh issue list --state all --search '"Build the Machine Learning Engineer Komal publication ecosystem" in:title' --json number --jq '.[0].number')
gh issue view "$phase_number" --json state,labels,closedAt,url
gh issue view "$root_number" --json state,labels,url
```

Expected: clean worktree, local and remote `main` equal, Phase 01 closed with
`status:done`, and the root issue remains open.

# Chapter 11 Blueprint — Build a Production Vertical Slice

## Purpose and exit capability

The reader can implement one reviewable end-to-end path across UI/API, data, integrations, policy/AI, approval, audit, telemetry, configuration, and controlled failure using representative production constraints.

## Prerequisites and non-scope

- Prerequisite: approved `OA-05` design dossier and bounded `OA-04` scope.
- Non-scope: general programming instruction, full product build, provider-only sample, secrets/customer data, or happy-path demo labeled production-grade.

## Concepts, skills, and decision models

- Vertical-slice coverage test; repository/supportability map; safe defaults; feature control; migration seam; debt decision record.
- Code-review lens: contract, failure, security, observability, operation, test evidence, and owner.
- Skill: debug across boundaries and choose debt explicitly against outcome/risk/exit criteria.

## Architecture, implementation, and tools

- Companion: Node/TypeScript (`current LTS/tooling, replaceable`) with a minimal web/API path, synthetic generator, ticket/equipment/inventory/manual stores, adapters, evidence retrieval, deterministic model double, policy gate, approval, audit, and inspectable metrics.
- OpenAPI/JSON Schema and automated tests (`versioned contracts`); local containers optional, not required. Commands must work from a clean clone with no secrets.

## Scenario and artifacts

- Produce `OA-06`: runnable ticket-to-evidence-to-ranked-action path, qualified approval, ERP/inventory adapter, audit event, flags/config, repository map, review record, and debt register.
- Inject upstream “success” followed by downstream rejection and demonstrate safe status/reconciliation.

## Cases and bounded use

- `R06-C002`: frontend behavior causing backend overload.
- `R06-C009`: idempotent intent/retry pattern.
- `R06-C010`: original executable case.

## Failures, mistakes, and tradeoffs

- Mock proves real integration; flag without owner/removal; generated code without review; manual-only setup; hidden failure state.
- Tradeoff: realism versus reproducibility; use controlled doubles with explicit non-proof and later integration/UAT evidence.

## Exercise and completion evidence

Build and review the slice, trigger each adapter failure, and trace one request. Pass with clean setup, tests, no secrets, safe failures, audit/metrics, review evidence, and linked debt.

## Figures

- `F11.1` end-to-end vertical-slice trace.
- `F11.2` component-to-owner/test/config/signal/runbook map.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S017`, `R06-S019`–`R06-S024`, `R06-S027`, `R06-S036`, `R06-S037`, `R06-S041`, `R06-S043`, `R06-S044`, `R06-S051`.
- Domains: primary `FDE-K04`, `FDE-K05`, `FDE-K06`; secondary `FDE-K07`, `FDE-K08`.
- Depth: major implementation chapter; target 13,000–15,000 words plus code companion.
- Handoff: Chapter 12 builds credible evidence for every material behavior/limitation.
- Prohibitions: no secrets, customer data, unreviewed generated code, or production claim from the happy path.

# Appendix C - Provider-Neutral Companion Guide

## Purpose

The companion demonstrates how the chapter decision models compose in one synthetic local path. Node.js built-ins are the default; there are no secrets, customer data, paid services, or provider accounts.

## Commands

```sh
npm run test:companion
npm run demo:companion
npm run rehearse:companion
```

## Module map

- contracts/reconciliation/intent: semantic data and safe external state;
- environment/authorization: deployment configuration and scoped identity;
- model/policy/evaluation: bounded suggestion, deterministic control, segments;
- control-evidence/verification: evidence completeness, authority, graders;
- vertical-slice/synthetic fixture: runnable ticket-to-review path;
- observability: signals, cohorts, privacy, diagnosis;
- release-recovery/readiness: artifact/migration/rehearsal and disposition;
- incident/ownership: stabilization and demonstrated handoff;
- product-leverage/portfolio: reuse and dossier closure.

## Security and failure boundaries

- Configuration rejects embedded secret fields.
- Telemetry/audit use allowlists and exclude raw payload/prompt/document/secret/free text.
- Tenant/region/resource/operation/expiry are evaluated.
- Missing/ambiguous/unknown states remain visible.
- Model output never owns authorization or formal authority.

## What it does not prove

Real adapters, identity, networking, tenancy, regional processing, performance, accessibility/UAT, provider-model behavior, production telemetry, restore/break-glass, customer authority, outcomes, or RTO/SLOs require representative evidence.

## Extension rule

Replace injected boundaries behind the same consequential contracts; preserve tests and add representative integration evidence. Do not silently weaken semantics for provider convenience.

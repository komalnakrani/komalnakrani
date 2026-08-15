# Chapter 08 State - Fit the Customer Environment

## Concepts introduced

- deployment topology and environment-difference matrix
- human/workload identity and IAM record
- network-flow policy, placement patterns, secret/config promotion
- tenant/region isolation, clocks, capacity/connectivity, break-glass

## Terminology locked

- VPC/private/allowlisted are topology facts, not trust conclusions.
- Environment parity is a set of explicit differences/evidence, not a label.
- Secret values never belong in source/config/manuscript/fixtures.
- Break-glass is independent, least, time-bound, audited, rehearsed, reviewed.

## Examples and cases used

- Region West topology and denied East principal
- customer cloud, vendor-managed, and edge placement patterns
- Cloudflare access/rollback postmortem, attributed only
- OAuth 2.0 BCP only where applicable

## Claims not to repeat in full

- Do not re-teach the full environment matrix or IAM record.
- Chapter 9 applies topology/identity/tool boundaries to AI.
- Chapters 14-17 test release/recovery/ownership in customer environment.

## Figures

- `F08.1` deployment topology placeholder present.
- `F08.2` identity flow placeholder present.

## Project and companion progress

- `OA-05` environment section complete.
- Companion adds authorization/environment/config modules and 4 tests; 11 cumulative pass.

## Unresolved gaps

- Production identity/topology/capacity values remain fictional dependencies.
- No blocking source gap.
- Final figures wait for Phase 10.
- Approximately 3,300 manuscript words; accepted without padding, subject to Phase 09 coverage audit.

## Chapter 09 may assume

- model/tools receive only bounded data/permissions/context;
- region/tenant, latency/cost/capacity, configuration/version, and audit are explicit;
- deterministic test double remains the default companion path.

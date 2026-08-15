# Chapter 08 Research — Fit the Customer Environment

## Research question

How should a deployment adapt to cloud, VPC, on-premise, identity, networking, secrets, configuration, tenancy, capacity, and environment constraints without hiding ownership?

## Claim and evidence map

- **C08.1 — Reliability, security, performance, operations, and cost are environment-specific tradeoffs.** `R06-S017`, `R06-S018`, `R06-S019`.
- **C08.2 — Trust should be evaluated per resource and request, not inherited from network location.** `R06-S026`.
- **C08.3 — OAuth 2.0 deployments should follow the current security BCP where OAuth is actually used.** `R06-S027`.
- **C08.4 — Context/container views can be paired with deployment topology, identity flow, and configuration matrices.** `R06-S016` supports the structural view; the paired artifacts are the book’s synthesis.

## Durable principles

Name the control plane, data plane, trust zones, ingress/egress, identity provider, workload identity, secret owner, configuration source, tenancy boundary, capacity assumption, environment difference, deployment owner, and break-glass path. Treat “on-prem,” “private,” and “inside the VPC” as topology facts, not security conclusions.

## Cases

- `R06-C003` demonstrates a recovery path whose access dependency was impaired; use it to examine break-glass design without weakening routine controls.
- `R06-C010` includes regional data boundaries and low-connectivity sites, requiring an environment matrix rather than one “production-like” box.

## Disputes and limits

Perfect environment parity is often impossible. The question is which differences affect behavior and how they are tested or monitored. Identity and secret mechanisms vary; the chapter should teach evaluation questions and one provider-neutral flow, then label examples.

## Remaining gaps

No release blocker. Concrete lab topology must run locally without paid cloud services and represent identity/secret boundaries using safe test doubles.

## Manuscript prohibitions

Do not embed secrets, treat IP allowlists as identity, claim a private network is inherently trusted, or leave capacity and operating ownership implicit.

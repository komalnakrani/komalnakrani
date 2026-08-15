# Chapter 07 Blueprint — Draw the Combined System Boundary

## Purpose and exit capability

Produce a system architecture that separates learned components, deterministic policy, context, application state, interface, tools, humans, infrastructure, trust, failure, ownership, and authority.

## Prerequisites and non-scope

- Prerequisite: behavior contract, mechanism record, and context contract.
- Non-scope: enterprise architecture authority, platform design for every team, or security authorization.

## Concepts, skills, and decision models

- Boundary lenses: responsibility, trust, data, identity, state, runtime, dependency, failure propagation, authority.
- Learned versus deterministic decision placement; validation-before-use; effect/confirmation/recovery boundary.
- Contract, version, registry, and evidence-record distinctions.
- Skill: assign detection, containment, correction, and approval for each failure path.

## Architecture, implementation, and stability

- Companion: stable interfaces for query, candidates, ranked result, explanation, policy, tool proposal, trace, and adapter; context/container and sequence definitions.
- Boundaries/contracts are `durable`; orchestration frameworks, registries, and provider SDKs are `replaceable`.

## Scenario and artifact progression

Create `PF-05` architecture set v0.1. Place compatibility rules outside generated text, define untrusted seller/model inputs, state ownership, trace correlation, provider seam, and a draft-only seller-question tool.

## Cases and bounded use

- `AAE-C002`: representation/index/product layering.
- `AAE-C007`: upstream data responsibility and cascade path.
- `AAE-C009`: typed provider output before application validation/effect.
- `AAE-C012`: constructed trust and authority design.

## Failures, disputes, and tradeoffs

Model box as system; policy in prompt only; diagram without owners; human as unlabeled control; adapter equals portability. More separation aids diagnosis but increases interfaces, latency, and ownership coordination.

## Exercise, companion work, and completion evidence

Draw three boundary views, reject three alternative placements, and trace two failures. Implement interface schemas and adapter/test-double seams. Pass when every effect and high-consequence claim crosses validation and authority.

## Figures

- `F07.1`: combined layered architecture; separates learned and deterministic responsibilities.
- `F07.2`: trust/state/authority boundary; exposes validation and ownership placement.

## Evidence, competencies, depth, and handoff

- Claims: `C07.1`–`C07.5`; sources `AAE-S005`, `AAE-S006`, `AAE-S007`, `AAE-S009`, `AAE-S037`, `AAE-S039`, `AAE-S041`, `AAE-S042`, `AAE-S043`, `AAE-S044`, `AAE-S048`, `AAE-S052`, `AAE-S055`.
- Domains: primary `AAE-K02`, `AAE-K03`, `AAE-K05`, `AAE-K08`.
- Depth: major architecture chapter; target 6,500–8,000 words.
- Handoff: Chapter 8 implements one inspectable path across these contracts.
- Prohibitions: no model-as-system, prompt-only policy, anonymous authority, or behavior portability claim from interface versioning alone.

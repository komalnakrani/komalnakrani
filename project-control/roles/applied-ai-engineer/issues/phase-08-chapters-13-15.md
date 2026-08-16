# [PHASE 08 CHILD] Write Applied AI Engineering chapters 13-15

Parent: #27

Depends on: #31 accepted and closed

## Scope

Write and immediately QA:

1. *Design for Probabilistic Failure*
2. *Budget Latency, Capacity, and Cost*
3. *Observe Behavior Without Betraying Users*

## Required files per chapter

- canonical complete MDX manuscript at approved depth
- learning pack marked `NOT FOR LIVE CERTIFICATION BANK`
- context-resilient chapter state handoff
- immediate QA record
- production source/claim registry entries
- two frozen raster figure anchors, `F13.1` through `F15.2`, using `.png`; no SVG or WebP

## Companion progression

- advance Patchwork failure-mode, fallback, retry/idempotency, circuit, degradation, reconciliation, and recovery artifacts
- add reproducible latency/capacity/cost budgets and experiments that preserve distributions and critical segments
- add privacy-conscious signals, trace schemas, feedback paths, diagnostic views, retention controls, and operational runbook evidence
- preserve explicit owners, authorities, negative evidence, version identity, and safe stop conditions

## Acceptance criteria

- complete original explanatory prose at blueprint depth
- failure propagation and recovery remain bounded across the combined system
- averages cannot conceal tail latency, cost/capacity pressure, or critical segments
- observability distinguishes usefulness, behavior quality, system health, and data/context failure without routine sensitive-content logging
- every material claim resolves through production sources
- full canonical check, companion tests, build, reference check, and `git diff --check` pass
- all figures are PNG anchors; actual artwork is generated only with ImageGen and uses short essential labels where needed
- no mascot unless it materially teaches the concept; any Komal depiction requires authorized original-photo identity references

## Handoff

Only after acceptance, open Chapters 16-18 for release/change, product adoption, and feedback-driven improvement.

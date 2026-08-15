# Chapter 03 Blueprint — Map the Workflow That Actually Exists

## Purpose and exit capability

The reader can model current actors, decisions, states, data, tools, queues, handoffs, incentives, exceptions, and failure costs; test the model with users; and restate the problem independently of the proposed technology.

## Prerequisites and non-scope

- Prerequisite: Chapter 2 discovery/evidence plan and legitimate user access.
- Non-scope: enterprise process transformation, compulsory BPMN, fictional precision, or mapping the desired future as current state.

## Concepts, skills, and decision models

- Coordinated views: service journey, swimlane/state flow, decision/evidence table, system/data inventory, exception taxonomy.
- Observed-versus-reported delta and contradiction register.
- Resolution test: include detail only when it changes scope, risk, design, measurement, or ownership.
- Skills: shadow representative work, probe exceptions, validate with users, quantify only measured ranges, and identify metric/incentive conflicts.

## Architecture, implementation, and tools

- BPMN 2.0.2 (`versioned/optional`) may express formal process flow; Mermaid or diagramming tools (`volatile tooling`) may render examples. The canonical artifact remains notation-neutral Markdown plus editable vector/source.
- No system design yet; record actual interfaces and state without fixing them.

## Scenario and artifacts

- Build `OA-02`: Orchid request-to-resolution swimlane/state map, actor/decision map, system/data inventory, exception topology, observed/reported gaps, failure-cost evidence, and revised problem statement.
- Reveal closure-time versus safe first-visit-success incentive conflict and inconsistent identifiers.

## Cases and bounded use

- `R06-C009`: retry semantics demonstrate that technical behavior can alter the operational workflow.
- `R06-C010`: original case; no frequency or cost values unless explicitly synthetic.

## Failures, mistakes, and tradeoffs

- Happy-path flow, decorative diagram, sponsor narrative as truth, over-modeling, prematurely resolving contradictions.
- Tradeoff: readability versus completeness; use linked views and an exception register rather than one unreadable map.

## Exercise and completion evidence

Reconstruct a workflow from contradictory interview notes and event samples. Pass when normal and exception paths, owners, systems, state, evidence gaps, and validated problem statement are traceable.

## Figures

- `F03.1` Orchid swimlane/state map; reveals waits, loops, decisions, systems.
- `F03.2` exception topology; prevents happy-path bias in `OA-02`.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S006`–`R06-S011`, `R06-S023`, `R06-S024`.
- Domains: primary `FDE-K02`; secondary `FDE-K03`, `FDE-K06`.
- Depth: major analytical-skill chapter; target 10,000–12,000 words.
- Handoff: Chapter 4 contracts measurable outcomes around the verified workflow.
- Prohibitions: no invented measurements, idealized current state, or notation-as-understanding claim.

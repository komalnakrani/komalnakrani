# Chapter 03 Learning Pack - Map the Workflow That Actually Exists

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Why is a polished official-process diagram dangerous when used as a current-state model?
2. What distinct decision does each coordinated view support: journey, swimlane/state, decision/evidence table, system/data inventory, exception topology?
3. How do observed, reported, measured, reproduced, disputed, and proposed flows appear differently?
4. Why should waiting states name evidence and owner rather than use one `pending` state?
5. Explain why technical retry behavior is part of the operational workflow.
6. What does the resolution test add or remove from a model?
7. Why is a rare exception sometimes more important than a common inconvenience?
8. How can metric incentives change the workflow without requiring speculation about motivation?

## Scenario questions

### Ambiguous write

An external reservation request times out. Map the three possible operational states, user-visible state, evidence needed, reconciliation owner, and permitted next actions. Explain why a blind retry is not a complete workflow design.

### Conflicting systems

Ticketing says resolved, inventory says reserved, and the service history lacks completion evidence. Create proposition-specific systems of record and a disagreement state. Who can resolve each claim?

### Official versus observed

The procedure says technicians use the manual portal first. In two observed cases they begin with personal notes because search returns ambiguous records. What may be concluded, what remains unknown, and which next evidence could change scope?

### Metric conflict

Leaders track closure time; technicians prioritize safe first-visit resolution. Describe at least four ways the closure metric can improve while the user outcome worsens. Which transitions/populations must the map expose?

## Applied exercise - `OA-02`

Using a fictional workflow, produce:

- start/end operational result and explicit exclusions;
- whole journey;
- swimlane plus state contracts for at least six states;
- five decision/evidence/authority rows;
- system/data/informal-tool inventory;
- exception topology with at least eight families;
- two waits and two invisible-work paths;
- incentive/metric risks;
- evidence legend and IDs;
- validation walkthrough record;
- revised problem statement and gaps.

Pass only when at least one observed fact changes scope/architecture/verification, at least one contradiction remains visible, and the future design is visually distinct from current state.

## Optional practice MCQs

### 1. Which is the strongest reason to create separate `awaiting-approval` and `awaiting-inventory-confirmation` states?

A. More states always improve analytics.  
B. They have different evidence, owners, allowed actions, timers, and exit conditions.  
C. Ticketing tools require them.  
D. BPMN mandates those names.

Answer: **B**.

### 2. A material exception has unknown frequency and irreversible consequence. What is the best response?

A. Omit it because frequency is unknown.  
B. Invent a conservative percentage.  
C. Preserve the frequency gap, evaluate consequence/detectability/reversibility, and prevent, control, simulate, or explicitly exclude it under accountable authority.  
D. Add an error message and proceed.

Answer: **C**.

### 3. What does a standardized notation prove?

A. The mapped workflow is accurate.  
B. Users validated the model.  
C. The representation follows the notation within its stated use; evidence and workflow truth require separate support.  
D. The process is ready to automate.

Answer: **C**.

## Advanced challenge - map-to-decision trace

Choose four workflow findings. For each, trace the effect on problem definition, outcome/guardrail, scope, architecture, verification, rollout, and ownership. Reject any finding that changes no decision unless it belongs in a clearly separate reference artifact. Identify one future-state preference that currently lacks workflow evidence.

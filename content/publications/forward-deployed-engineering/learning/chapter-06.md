# Chapter 06 Learning Pack - Draw the Real System Boundary

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Why can a structurally accurate diagram conceal the deployment?
2. Distinguish structural, runtime, data, trust, failure, and responsibility boundaries.
3. Why should data authority be assigned by proposition rather than system?
4. What information belongs on a material relationship arrow?
5. Why is network placement insufficient as a trust conclusion?
6. How can configured state and operational state diverge?
7. What makes control-plane/data-plane separation useful but incomplete?
8. Which fields make an architecture decision reviewable and expirable?

## Scenario questions

### Ownerless component

An adapter is labeled “shared” between the FDE team and customer IT. Decompose code, runtime, interface, data, support, control, and decision ownership. Which gap blocks handoff?

### Mixed configuration

A cohort change is accepted but only some runtimes apply it. Trace desired, accepted, applied, observed, and reconciled state. Design independent health and recovery questions.

### Trusted VPC

A reviewer claims that no authorization is needed between two services because both are in the customer VPC. Write the actor/workload/resource/operation/policy/audit/denial questions that remain.

### Failed fallback

The manual fallback uses the same identity/network path as the primary system. Explain the correlated failure and propose a proportionate independent recovery capability.

## Applied exercise - structural `OA-05`

Produce:

- context and container diagrams with stable IDs;
- relationship sentences;
- six-boundary annotations;
- proposition-authority table;
- request/denied/dependency/split-state/ownership/regional walkthroughs;
- failure/ownership matrix;
- correlated-failure map;
- three architecture decision records;
- outcome-to-architecture-to-evidence trace;
- reviewer dispositions and unresolved gaps.

Pass only when every important arrow has semantics/identity/owner/failure, and a reviewer can identify what the user sees and who acts under failure.

## Optional practice MCQs

### 1. Which statement is strongest?

A. “Inventory is the source of truth.”  
B. “ERP owns the defined availability/reservation propositions; Orchid may cache selected evidence with freshness/provenance rules and explicit disagreement behavior.”  
C. “The database is authoritative.”  
D. “The adapter decides inventory state.”

Answer: **B**.

### 2. What does a successful configuration response prove?

A. Every runtime is healthy.  
B. Desired state was accepted by the addressed control interface; applied/observed state needs separate evidence.  
C. Rollback will work.  
D. Users received the change.

Answer: **B**.

### 3. Which is not established by a C4 container diagram alone?

A. Named structural containers/relationships.  
B. Runtime ownership, data authority, trust, failure propagation, and recovery.  
C. A chosen level of structural abstraction.  
D. A communication view of the system.

Answer: **B**.

## Advanced challenge - boundary change

Move evidence caching from customer runtime to a vendor-managed regional service. Update runtime, data, trust, failure, responsibility, identity, retention, support, and recovery boundaries; list formal decisions and tests invalidated. Defend or reject the change at technical, operational, and executive altitudes.

# Chapter 08 Learning Pack - Fit the Customer Environment

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Why does a logical architecture not prove deployability?
2. What belongs in an environment-difference matrix?
3. Distinguish human and workload identity.
4. Why is a valid login insufficient for safety approval?
5. Why do VPC placement and IP allowlisting not prove trust or isolation?
6. What belongs in a secret/configuration lifecycle?
7. How do low connectivity, capacity, clock, DNS, and certificate behavior affect the workflow?
8. What makes break-glass independent without weakening routine controls?

## Scenario questions

### Cross-region request

Trace an East principal requesting a West ticket. Define denial, data non-disclosure, audit, support, and downstream-call behavior.

### Staging success

Staging uses a test administrator, stubs, clean data, and fast network. Production uses customer roles/live dependencies/low connectivity. Build the difference matrix and required evidence.

### Expired certificate

Map user symptom, TLS/network signal, ownership, fallback, rotation, and recovery. Distinguish it from application failure.

### Failed break-glass

Recovery access depends on the impaired identity service. Propose a least, time-bound, audited independent path and rehearsal.

## Applied exercise and lab

1. Run `npm run test:companion`.
2. Add an expired-principal test and one denied tenant case.
3. Build topology, flow, environment, IAM, network, secret/config, capacity, connectivity, clock, and recovery records.
4. Adapt the same logical design to customer-cloud, vendor-managed, and edge patterns.

Pass only when every environment difference has consequence, evidence/control, and owner; no secret enters source.

## Optional practice MCQs

### 1. Which statement is correct?

A. A private network authenticates every workload.  
B. Trust still requires principal/resource/operation/context decisions.  
C. Staging parity is automatic in the same cloud.  
D. IP allowlisting proves tenant isolation.

Answer: **B**.

### 2. A configuration record contains an API key. What is wrong?

A. Nothing if repository is private.  
B. Secret material should use an approved lifecycle/injection mechanism; configuration references it without storing the value.  
C. Rename the field.  
D. Base64 encode it.

Answer: **B**.

### 3. A pilot has few users. Capacity work is unnecessary because:

A. true; small cohorts cannot overload dependencies;  
B. false; fan-out, loops, retries, payloads, and shared limits can still create load.  
C. true if latency is fast;  
D. false only for AI.

Answer: **B**.

## Advanced challenge - environment migration

Move Orchid from customer-managed runtime to vendor-managed regional service. Update data, identity, network, secret/key, observability/support, recovery, tenant isolation, release, exit, and customer authority. Identify which existing evidence becomes invalid.

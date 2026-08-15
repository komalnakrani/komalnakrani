import { requireQualifiedApproval } from "./authorization.mjs";
import { validateEquipmentRecord } from "./contracts.mjs";
import { createAuditEvent } from "./control-evidence.mjs";
import { validateEnvironmentConfig } from "./environment.mjs";
import { runWithBudget } from "./model-interface.mjs";
import { applyControlLadder } from "./policy.mjs";
import { classifyExternalCompletion, reconcileEquipmentCandidates } from "./reconciliation.mjs";

function traceStep(trace, name, result) {
  trace.push(Object.freeze({ name, result }));
}

function finish({ state, reason, correlationId, trace, metrics, audit = null, data = {} }) {
  metrics.push(Object.freeze({
    name: "orchid.slice.completed",
    correlationId,
    state,
    reason,
  }));
  return Object.freeze({ state, reason, correlationId, trace, metrics, audit, ...data });
}

export async function runVerticalSlice({
  ticket,
  config,
  approvalPrincipal,
  evidenceStore,
  inventoryAdapter,
  model,
  now = "2026-08-16T10:00:00.000Z",
}) {
  const trace = [];
  const metrics = [];
  const correlationId = ticket?.correlationId ?? "missing-correlation";

  const environment = validateEnvironmentConfig(config);
  traceStep(trace, "environment", environment.ok ? "accepted" : "rejected");
  if (!environment.ok || config?.features?.boundedSuggestion !== true) {
    return finish({ state: "blocked", reason: "environment-or-feature-disabled", correlationId, trace, metrics });
  }

  const match = reconcileEquipmentCandidates(ticket?.equipmentCandidates ?? []);
  traceStep(trace, "equipment-match", match.state);
  if (match.state !== "confirmed") {
    return finish({ state: "blocked", reason: `equipment-${match.state}`, correlationId, trace, metrics });
  }

  const equipment = match.candidates[0];
  const equipmentValidation = validateEquipmentRecord(equipment);
  traceStep(trace, "equipment-contract", equipmentValidation.ok ? "accepted" : "rejected");
  if (!equipmentValidation.ok) {
    return finish({ state: "blocked", reason: "equipment-contract", correlationId, trace, metrics });
  }

  let evidence;
  try {
    evidence = await evidenceStore.findApproved({
      equipmentId: match.equipmentId,
      region: ticket.region,
    });
  } catch {
    traceStep(trace, "evidence", "dependency-failed");
    return finish({ state: "fallback", reason: "evidence-dependency", correlationId, trace, metrics });
  }
  traceStep(trace, "evidence", evidence.length > 0 ? "found" : "missing");
  if (evidence.length === 0) {
    return finish({ state: "fallback", reason: "approved-evidence-missing", correlationId, trace, metrics });
  }

  let inventory;
  try {
    inventory = await inventoryAdapter.check({
      intentId: ticket.intentId,
      equipmentId: match.equipmentId,
      tenant: equipment.tenant ?? "orchid",
      region: ticket.region,
    });
  } catch {
    traceStep(trace, "inventory", "dependency-failed");
    return finish({ state: "fallback", reason: "inventory-dependency", correlationId, trace, metrics });
  }

  const completion = classifyExternalCompletion(inventory);
  traceStep(trace, "inventory", completion);
  if (completion === "unknown") {
    return finish({
      state: "reconcile",
      reason: "inventory-completion-unknown",
      correlationId,
      trace,
      metrics,
      data: { intentId: ticket.intentId },
    });
  }
  if (completion !== "completed" || inventory.available !== true) {
    return finish({ state: "blocked", reason: "inventory-rejected-or-unavailable", correlationId, trace, metrics });
  }

  const suggestion = await runWithBudget(
    model,
    { caseId: ticket.caseId, evidence: evidence.map((item) => item.evidenceId) },
    config.modelBudget,
  );
  traceStep(trace, "bounded-model", suggestion.state);

  let approval = null;
  if (ticket.safetyRelevant) {
    const decision = requireQualifiedApproval({
      principal: approvalPrincipal,
      ticketRegion: ticket.region,
      safetyRelevant: true,
      now: Date.parse(now),
    });
    approval = decision.allowed ? "approved" : "denied";
    traceStep(trace, "qualified-approval", approval);
  }

  const policy = applyControlLadder({
    suggestion,
    equipmentMatch: match.state,
    safetyRelevant: ticket.safetyRelevant,
    approval,
  });
  traceStep(trace, "policy", policy.action);

  const audit = createAuditEvent({
    eventId: `audit-${ticket.ticketId}`,
    occurredAt: now,
    actorId: approvalPrincipal?.id ?? "system",
    action: "evaluate-ranked-action",
    resourceId: ticket.ticketId,
    result: policy.action,
    correlationId,
    controlId: "CTRL-BOUNDED-SUGGESTION",
  });

  if (policy.action !== "present") {
    return finish({ state: "blocked", reason: policy.reason, correlationId, trace, metrics, audit });
  }

  return finish({
    state: "ready-for-review",
    reason: "bounded-path-complete",
    correlationId,
    trace,
    metrics,
    audit,
    data: {
      equipmentId: match.equipmentId,
      evidenceIds: evidence.map((item) => item.evidenceId),
      suggestions: suggestion.suggestions,
      inventory: { available: inventory.available },
    },
  });
}

import { DeterministicModelDouble } from "./model-interface.mjs";

export function createOrchidFixture({ inventoryMode = "available" } = {}) {
  const equipment = {
    equipmentId: "OES-PUMP7",
    tenant: "orchid",
    region: "west",
    residency: "west",
    status: "active",
    observedAt: "2026-08-16T09:00:00.000Z",
    sourceVersion: "synthetic-registry-v1",
  };

  const ticket = {
    ticketId: "TICKET-SYNTHETIC-7",
    intentId: "INTENT-SYNTHETIC-7",
    correlationId: "CORR-SYNTHETIC-7",
    caseId: "orchid-filter-inspection",
    region: "west",
    safetyRelevant: true,
    equipmentCandidates: [equipment],
  };

  const config = {
    environment: "local",
    tenant: "orchid",
    region: "west",
    dataResidency: "west",
    releaseVersion: "companion-v1",
    features: { boundedSuggestion: true },
    modelBudget: { timeoutMs: 100, maxCostUnits: 3 },
  };

  const approvalPrincipal = {
    id: "qualified-reviewer-synthetic",
    kind: "human",
    tenant: "orchid",
    region: "west",
    permissions: ["safety-approval:approve"],
    expiresAt: "2026-08-17T00:00:00.000Z",
  };

  const evidenceStore = {
    async findApproved({ equipmentId, region }) {
      if (equipmentId !== equipment.equipmentId || region !== equipment.region) return [];
      return [{ evidenceId: "MANUAL-SYNTHETIC-7", version: "v1", approved: true }];
    },
  };

  const inventoryAdapter = {
    async check() {
      if (inventoryMode === "rejected") {
        return { accepted: false, finalState: null, responseReceived: true, available: false };
      }
      if (inventoryMode === "unknown") {
        return { accepted: true, finalState: null, responseReceived: false, available: null };
      }
      return { accepted: true, finalState: "committed", responseReceived: true, available: true };
    },
  };

  const model = new DeterministicModelDouble({
    cases: {
      "orchid-filter-inspection": {
        state: "suggested",
        suggestions: [{ action: "inspect-filter", evidenceIds: ["MANUAL-SYNTHETIC-7"] }],
      },
    },
  });

  return { ticket, config, approvalPrincipal, evidenceStore, inventoryAdapter, model };
}

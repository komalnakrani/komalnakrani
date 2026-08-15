import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  dossierIndex,
  multiAltitudeMemo,
  prioritizePortfolio,
  validateDelegationContract,
} from "../src/portfolio.mjs";

const engagement = (overrides) => ({
  engagementId: "orchid",
  consequence: "high",
  reversibility: "medium",
  evidenceGap: "medium",
  decisionLatency: "high",
  nextDecision: "widen or hold cohort",
  confidence: "bounded",
  owner: "deployment-owner",
  ...overrides,
});

test("portfolio order uses explicit ordinal factors without false risk scores", () => {
  const result = prioritizePortfolio([
    engagement({ engagementId: "loud", consequence: "medium", evidenceGap: "low" }),
    engagement({ engagementId: "migration", consequence: "critical", reversibility: "low" }),
  ]);
  assert.equal(result[0].engagementId, "migration");
  assert.match(result[0].explanation, /no cardinal risk score/);
});

test("delegation without authority, review, and escalation is incomplete", () => {
  const result = validateDelegationContract({ objective: "verify migration", owner: "engineer" });
  assert.equal(result.valid, false);
  assert.ok(result.gaps.includes("authority"));
  assert.ok(result.gaps.includes("reviewPoints"));
  assert.ok(result.gaps.includes("escalation"));
});

test("multi-altitude communication preserves shared facts across versions", () => {
  const result = multiAltitudeMemo({
    executive: "hold expansion pending recovery evidence",
    operational: "maintain non-safety cohort and staff support",
    technical: "restore test lacks current identity dependency evidence",
    sharedFacts: ["customer recovery access unexecuted"],
    authority: "release-owner",
    reviewTrigger: "executed recovery test",
  });
  assert.equal(result.valid, true);
});

test("growth is evidence-based and not implied by title or tenure", () => {
  const contract = validateDelegationContract({
    objective: "lead a bounded readiness review",
    authority: "recommend only; owner decides",
    evidence: ["readiness packet", "decision record"],
    constraints: ["no risk acceptance"],
    reviewPoints: ["before customer meeting", "after disposition"],
    escalation: "security/privacy/safety to designated owner",
    owner: "developing-fde",
  });
  assert.equal(contract.valid, true);
});

test("dossier closure names hashes, issue/risk/reuse state, and next owner", () => {
  const result = dossierIndex({
    sourceHash: "sha256-source",
    buildHash: "sha256-build",
    issueState: "phase-08-complete",
    riskState: "bounded-open-risks-indexed",
    reuseState: "one-defer-one-reject",
    nextOwner: "customer-and-product-owners",
  });
  assert.equal(result.valid, true);
});

test("the committed dossier index carries real SHA-256 hashes and resumable state", async () => {
  const file = new URL("../dossier-index.json", import.meta.url);
  const record = JSON.parse(await readFile(file, "utf8"));
  const result = dossierIndex(record);

  assert.equal(result.valid, true);
  assert.match(record.sourceHash, /^[a-f0-9]{64}$/);
  assert.match(record.buildHash, /^[a-f0-9]{64}$/);
  assert.equal(record.riskState.blockingSourceGaps, 0);
  assert.match(record.issueState.phase08Child, /^#15 OPEN/);
  assert.ok(record.nextOwner.phase09);
});

import test from "node:test";
import assert from "node:assert/strict";

import {
  diagnoseAdoption,
  transferAccess,
  validateOwnershipAcceptance,
} from "../src/ownership.mjs";

test("missing recommendation evidence is diagnosed as trust friction, not user resistance", () => {
  const result = diagnoseAdoption([{
    category: "trust-evidence",
    evidence: "reviewers bypass suggestions without visible source/version",
    nextTest: "show evidence-first review and observe representative task",
    owner: "product-owner",
  }]);
  assert.equal(result[0].userBlame, false);
});

test("documents without demonstrated release and recovery do not prove ownership", () => {
  const result = validateOwnershipAcceptance({
    knowledge: { owner: "customer-owner", demonstratedEvidence: "walkthrough" },
    fdeAccess: { revoked: true },
    customerAuthority: { designated: true },
  });
  assert.equal(result.accepted, false);
  assert.ok(result.gaps.includes("release.demonstratedEvidence"));
  assert.ok(result.gaps.includes("recovery.demonstratedEvidence"));
});

test("access transfer requires customer capability and removal of hidden FDE dependency", () => {
  const result = transferAccess({
    customerPrincipal: { permissions: ["release", "recover", "support"] },
    fdePrincipal: { permissions: [] },
    requiredPermissions: ["release", "recover", "support"],
  });
  assert.equal(result.transferred, true);
});

test("retained privileged FDE access blocks transfer even when the customer has access", () => {
  const result = transferAccess({
    customerPrincipal: { permissions: ["release", "recover"] },
    fdePrincipal: { permissions: ["recover"] },
    requiredPermissions: ["release", "recover"],
  });
  assert.equal(result.transferred, false);
  assert.deepEqual(result.retainedFde, ["recover"]);
});

test("complete ownership covers operation, decisions, risk, change, and revoked FDE access", () => {
  const demonstrated = { owner: "customer-owner", demonstratedEvidence: "supervised-task-pass" };
  const result = validateOwnershipAcceptance({
    knowledge: demonstrated,
    access: demonstrated,
    telemetry: demonstrated,
    runbook: demonstrated,
    release: demonstrated,
    recovery: demonstrated,
    support: demonstrated,
    decisions: demonstrated,
    openRisk: demonstrated,
    changePath: demonstrated,
    fdeAccess: { revoked: true },
    customerAuthority: { designated: true },
  });
  assert.equal(result.accepted, true);
});

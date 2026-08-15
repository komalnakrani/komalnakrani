import test from "node:test";
import assert from "node:assert/strict";
import { authorizeRequest, requireQualifiedApproval } from "../src/authorization.mjs";
import { compareEnvironments, validateEnvironmentConfig } from "../src/environment.mjs";

const principal = {
  id: "synthetic-user-7",
  kind: "human",
  tenant: "orchid",
  region: "west",
  permissions: ["ticket:read", "safety-approval:approve"],
  expiresAt: "2030-01-01T00:00:00.000Z"
};

test("authorization evaluates principal, resource, operation, tenant, region, and expiry", () => {
  assert.equal(authorizeRequest({ principal, resource: { tenant: "orchid", region: "west", type: "ticket" }, operation: "read" }).allowed, true);
  const denied = authorizeRequest({ principal, resource: { tenant: "orchid", region: "east", type: "ticket" }, operation: "read" });
  assert.equal(denied.allowed, false);
  assert.match(denied.reasons.join(" "), /region mismatch/);
});

test("safety-relevant approval requires a qualified region-scoped permission", () => {
  assert.equal(requireQualifiedApproval({ principal, ticketRegion: "west", safetyRelevant: true }).allowed, true);
  assert.equal(requireQualifiedApproval({ principal: { ...principal, permissions: ["ticket:read"] }, ticketRegion: "west", safetyRelevant: true }).allowed, false);
});

test("configuration rejects embedded secrets and wrong regional residency", () => {
  const result = validateEnvironmentConfig({ environment: "staging", tenant: "orchid", region: "west", releaseVersion: "1.0.0", dataResidency: "east", apiKey: "not-a-real-secret" });
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /secret material/);
  assert.match(result.errors.join(" "), /west data residency/);
});

test("environment differences remain explicit", () => {
  const differences = compareEnvironments(
    { environment: "staging", region: "west", identityMode: "test-token", dependencyMode: "stub" },
    { environment: "production", region: "west", identityMode: "customer-idp", dependencyMode: "live" }
  );
  assert.deepEqual(differences.map((item) => item.key), ["dependencyMode", "environment", "identityMode"]);
});

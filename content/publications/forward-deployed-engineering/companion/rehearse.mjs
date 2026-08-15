import { recoveryRehearsal, simulateMigration } from "./src/release-recovery.mjs";

const initial = { records: [{ id: "synthetic-a", schemaVersion: 1 }, { id: "synthetic-b", schemaVersion: 1 }] };
const failed = simulateMigration({ state: initial, requestedConnections: 2, capacityLimit: 4, failAfter: 1 });
const recovered = simulateMigration({ state: failed.state, requestedConnections: 2, capacityLimit: 4 });
const record = recoveryRehearsal({
  scenario: "synthetic partial migration",
  initialState: failed.status,
  action: "roll-forward",
  expectedState: "completed",
  actualState: recovered.status,
  observedMs: 42,
  targetMs: 100,
  evidence: "deterministic local fixture",
  owner: "recovery-owner",
  limitation: "local in-memory timing; not a production RTO claim",
});

process.stdout.write(`${JSON.stringify({ failed, recovered, record }, null, 2)}\n`);

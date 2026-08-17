import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import test from "node:test";

const productionDir = path.dirname(fileURLToPath(import.meta.url));
const auditPath = path.join(productionDir, "audit-traceability.mjs");

test("Volume 2 traceability requires all 34 exact chapter figure bindings", () => {
  const result = spawnSync(process.execPath, [auditPath], {
    cwd: path.resolve(productionDir, "../../../.."),
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(result.stdout);
  assert.equal(report.figures, 34);
  assert.equal(report.figureBindings, 34);
});

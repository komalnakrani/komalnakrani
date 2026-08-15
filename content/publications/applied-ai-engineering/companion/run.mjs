import { readFile } from "node:fs/promises";
import { validateContract } from "./lib/validate-contract.mjs";

const url = new URL("./contracts/patchwork-behavior-contract.json", import.meta.url);
const contract = JSON.parse(await readFile(url, "utf8"));
const errors = validateContract(contract);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`PASS ${contract.contractId} v${contract.version}: ${contract.clauses.length} clauses, local synthetic validation only`);
}

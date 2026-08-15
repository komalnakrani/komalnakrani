import { readFile } from "node:fs/promises";
import { validateContract } from "./lib/validate-contract.mjs";
import { generateDataset } from "./data/generate-dataset.mjs";
import { dataFitnessReport } from "./lib/validate-data.mjs";
import { retrieve } from "./lib/retrieval.mjs";

const url = new URL("./contracts/patchwork-behavior-contract.json", import.meta.url);
const contract = JSON.parse(await readFile(url, "utf8"));
const errors = validateContract(contract);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`PASS ${contract.contractId} v${contract.version}: ${contract.clauses.length} clauses, local synthetic validation only`);
}

const dataset = generateDataset();
const dataReport = dataFitnessReport(dataset);
if (dataReport.structuralErrors.length || dataReport.cleanLeakage.length) {
  console.error("Synthetic data validation failed");
  process.exitCode = 1;
} else {
  const query = dataset.queries.find((item) => item.id === "PW-Q001");
  const retrieval = retrieve(query, dataset.records, "hybrid");
  console.log(`PASS ${dataset.version}: ${dataset.records.length} fictional records, naive leakage detected and grouped split clean`);
  console.log(`PASS retrieval: ${retrieval.state}, ${retrieval.candidates.length} deduplicated candidates, generation=${retrieval.trace.generatedFallback}`);
}

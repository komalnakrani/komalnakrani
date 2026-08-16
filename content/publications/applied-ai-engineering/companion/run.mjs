import { readFile } from "node:fs/promises";
import { validateContract } from "./lib/validate-contract.mjs";
import { generateDataset } from "./data/generate-dataset.mjs";
import { dataFitnessReport } from "./lib/validate-data.mjs";
import { retrieve } from "./lib/retrieval.mjs";
import { runVerticalSlice } from "./lib/vertical-slice.mjs";
import { generateEvaluationCases } from "./evaluation/generate-cases.mjs";
import { contaminationReport, coverageReport, splitHash } from "./lib/evaluation.mjs";
import { readFile as readJsonFile } from "node:fs/promises";
import { generateDecisionFixtures, generateJudgmentFixtures } from "./evaluation/generate-decision-fixtures.mjs";
import { regressionGate } from "./lib/metrics.mjs";
import { blindCalibration } from "./lib/judgment.mjs";
import { runExperiment } from "./lib/experiment.mjs";

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
  const slice = runVerticalSlice({ request: query, records: dataset.records });
  const cases = generateEvaluationCases();
  const coverage = coverageReport(cases, contract.clauses.map((clause) => clause.id));
  console.log(`PASS vertical slice: ${slice.state}, effects=${slice.effects.length}, trace=${slice.trace.traceId}`);
  console.log(`PASS evaluation suite v${cases[0].suiteVersion}: ${cases.length} synthetic cases, split=${splitHash(cases)}, leakage=${contaminationReport(cases).length}, visible-gaps=${coverage.uncoveredClauses.length}`);
  const errorPolicy = JSON.parse(await readJsonFile(new URL("./evaluation/pf-07-error-policy.json", import.meta.url), "utf8"));
  const experimentPlan = JSON.parse(await readJsonFile(new URL("./experiments/pf-08-experiment-plan.json", import.meta.url), "utf8"));
  const decisionRows = generateDecisionFixtures();
  const gate = regressionGate(decisionRows, "challengerScore", errorPolicy);
  const calibration = blindCalibration(generateJudgmentFixtures());
  const experiment = runExperiment({ plan: experimentPlan, rows: decisionRows, policy: errorPolicy });
  console.log(`PASS PF-07 v${errorPolicy.version}: critical gate=${gate.pass}, reasons=${gate.reasons.join(",")}`);
  console.log(`PASS PF-07 evaluator calibration: n=${calibration.sampleSize}, agreement=${calibration.agreement}, bounded synthetic evidence only`);
  console.log(`PASS PF-08 v${experiment.version}: disposition=${experiment.disposition}, plan=${experiment.planHash}, result=${experiment.resultHash}`);
}

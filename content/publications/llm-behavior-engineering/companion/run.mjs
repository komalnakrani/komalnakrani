import { readFile } from "node:fs/promises";
import { validateCharter } from "./lib/validate-charter.mjs";
import { validateLanguageTaskContract } from "./lib/validate-contract.mjs";
import { traceMessage } from "./lib/token-trace.mjs";
import { eligibleCandidates, validateAccessDecision } from "./lib/access-decision.mjs";
import { baselineIdentity, validateBaseline } from "./lib/baseline.mjs";
import { messageIdentity, renderSemanticBundle, validateMessageBoundary } from "./lib/message-boundary.mjs";
import { validateProposal } from "./lib/proposal-validator.mjs";
import { packContext } from "./lib/context-packer.mjs";
import { eligibleUnits, validateRetrievalQuestion } from "./lib/retrieval-question.mjs";
import { runRetrievalPipeline, validateRetrievalPipeline } from "./lib/retrieval-pipeline.mjs";
import { assembleProvenance, validateProvenanceFixture } from "./lib/provenance-assembler.mjs";
import { evaluateJointFixture, validateJointFixture } from "./lib/joint-evaluation.mjs";
import { coverageGaps, splitLeakage, validateEvaluationSet } from "./lib/evaluation-cases.mjs";
import { calibrationResults, validateErrorAndJudgeSystem } from "./lib/judge-calibration.mjs";
import { confoundedChanges, experimentSummary, planIdentity, validateExperiment } from "./lib/isolated-experiment.mjs";
import { adaptationDisposition, migrationSummary, privacyUnsafeSignals, validateMigrationHandoff, validateReleaseDossier, validateServiceAdapter } from "./lib/release-change.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const charter = await load("./contracts/mosaic-responsibility-charter.json");
const contract = await load("./contracts/mosaic-language-task-contract.json");
const fixtures = await load("./mechanics/mosaic-token-fixtures.json");
const access = await load("./selection/mosaic-access-candidates.json");
const baseline = await load("./baseline/mosaic-baseline-manifest.json");
const results = await load("./baseline/mosaic-result-fixtures.json");
const messages = await load("./messages/mosaic-message-contract.json");
const messageFixture = await load("./messages/mosaic-message-fixture.json");
const proposalSchema = await load("./output/mosaic-proposal-schema.json");
const outputFixtures = await load("./output/mosaic-output-fixtures.json");
const contextLedger = await load("./context/mosaic-context-ledger.json");
const retrievalQuestion = await load("./retrieval/mosaic-retrieval-question.json");
const retrievalPipeline = await load("./retrieval/mosaic-retrieval-pipeline.json");
const provenanceAssembly = await load("./context/mosaic-provenance-assembly.json");
const jointEvaluation = await load("./evaluation/mosaic-joint-evaluation.json");
const evaluationSet = await load("./evaluation/mosaic-evaluation-set.json");
const errorTaxonomy = await load("./evaluation/mosaic-error-taxonomy.json");
const isolatedExperiment = await load("./experiments/mosaic-isolated-experiment.json");
const serviceAdapter = await load("./release/mosaic-service-adapter.json");
const releaseDossier = await load("./release/mosaic-release-dossier.json");
const migrationHandoff = await load("./release/mosaic-migration-handoff.json");

console.log(JSON.stringify({
  charterErrors: validateCharter(charter),
  contractErrors: validateLanguageTaskContract(contract),
  traces: fixtures.messages.map((message) => traceMessage(message, fixtures.template)),
  access: {
    errors: validateAccessDecision(access),
    eligibleCandidateIds: eligibleCandidates(access).map((candidate) => candidate.id),
    decision: access.decision
  },
  baseline: {
    errors: validateBaseline(baseline, results),
    identity: baselineIdentity(baseline),
    resultStates: results.results.map((result) => result.status)
  },
  messages: {
    errors: validateMessageBoundary(messages, messageFixture),
    identity: messageIdentity(messages, messageFixture),
    managed: renderSemanticBundle(messages, messageFixture, "managed-0.1.0"),
    openWeight: renderSemanticBundle(messages, messageFixture, "open-template-0.1.0")
  },
  output: outputFixtures.fixtures.map((fixture) => ({id:fixture.id,...validateProposal(fixture.raw,proposalSchema,outputFixtures,fixture.repairAttempts??0)})),
  context: packContext(contextLedger),
  retrieval: {errors:validateRetrievalQuestion(retrievalQuestion),eligibleUnitIds:eligibleUnits(retrievalQuestion).map((unit)=>unit.id)},
  retrievalPipeline: { errors: validateRetrievalPipeline(retrievalPipeline), result: runRetrievalPipeline(retrievalPipeline) },
  provenanceAssembly: {
    errors: validateProvenanceFixture(provenanceAssembly),
    scenarios: provenanceAssembly.scenarios.map((scenario) => assembleProvenance(provenanceAssembly, scenario.id))
  },
  jointEvaluation: { errors: validateJointFixture(jointEvaluation), cases: evaluateJointFixture(jointEvaluation) },
  evaluationSet: {
    errors: validateEvaluationSet(evaluationSet),
    rawLeakage: splitLeakage(evaluationSet.cases, "rawSplit"),
    repairedLeakage: splitLeakage(evaluationSet.cases),
    gaps: coverageGaps(evaluationSet)
  },
  judgment: { errors: validateErrorAndJudgeSystem(errorTaxonomy), calibration: calibrationResults(errorTaxonomy) },
  experiment: {
    errors: validateExperiment(isolatedExperiment),
    planIdentity: planIdentity(isolatedExperiment.plan),
    summary: experimentSummary(isolatedExperiment),
    confoundedChanges: confoundedChanges(isolatedExperiment)
  },
  release: {
    adapterErrors: validateServiceAdapter(serviceAdapter),
    dossierErrors: validateReleaseDossier(releaseDossier),
    privacyUnsafeSignalIds: privacyUnsafeSignals(releaseDossier).map((signal) => signal.id),
    releaseDisposition: releaseDossier.releaseDisposition
  },
  migration: {
    errors: validateMigrationHandoff(migrationHandoff),
    summary: migrationSummary(migrationHandoff),
    failureLayers: migrationHandoff.failureInjections.map((item) => item.layer),
    adaptationDisposition: adaptationDisposition(migrationHandoff.adaptationReferral),
    volume2Status: migrationHandoff.volume2Handoff.status
  }
}, null, 2));

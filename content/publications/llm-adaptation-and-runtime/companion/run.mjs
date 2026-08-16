import {readFile} from "node:fs/promises";
import {auditFrozenBaseline} from "./lib/frozen-baseline.mjs";
import {inspectModelBoundary} from "./lib/model-boundary.mjs";
import {evaluateAdaptationLadder} from "./lib/adaptation-ladder.mjs";
import {validateDataRecipe} from "./lib/data-recipe.mjs";
import {auditCuration} from "./lib/curate-separate.mjs";
import {auditInstructionData} from "./lib/instruction-data.mjs";
import {auditPreferenceData} from "./lib/preference-data.mjs";
import {auditRetentionControl} from "./lib/retention-control.mjs";
import {auditTrainingExperiment} from "./lib/training-experiment.mjs";
async function load(path){return JSON.parse(await readFile(new URL(path,import.meta.url)));}
const result = {
  baseline:auditFrozenBaseline(await load("./md09/mosaic-frozen-adaptation-baseline.json")),
  inspection:inspectModelBoundary(await load("./md09/mosaic-model-tokenizer-inspection.json")),
  ladder:evaluateAdaptationLadder(await load("./md09/mosaic-adaptation-ladder.json")),
  dataRecipe:validateDataRecipe(await load("./md10/mosaic-data-recipe.json")),
  curation:auditCuration(await load("./md10/mosaic-curation-manifest.json")),
  instructionData:auditInstructionData(await load("./md11/mosaic-instruction-data.json")),
  preferenceData:auditPreferenceData(await load("./md11/mosaic-preference-data.json")),
  retentionControl:auditRetentionControl(await load("./md11/mosaic-retention-control-suite.json")),
  trainingExperiment:auditTrainingExperiment(await load("./md12/mosaic-training-experiment.json"))
};
console.log(JSON.stringify(result,null,2));
if (Object.values(result).some((part)=>part.errors.length)) process.exitCode=1;

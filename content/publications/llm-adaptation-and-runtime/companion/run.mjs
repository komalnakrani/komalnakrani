import {readFile} from "node:fs/promises";
import {auditFrozenBaseline} from "./lib/frozen-baseline.mjs";
import {inspectModelBoundary} from "./lib/model-boundary.mjs";
import {evaluateAdaptationLadder} from "./lib/adaptation-ladder.mjs";
async function load(path){return JSON.parse(await readFile(new URL(path,import.meta.url)));}
const result = {
  baseline:auditFrozenBaseline(await load("./md09/mosaic-frozen-adaptation-baseline.json")),
  inspection:inspectModelBoundary(await load("./md09/mosaic-model-tokenizer-inspection.json")),
  ladder:evaluateAdaptationLadder(await load("./md09/mosaic-adaptation-ladder.json"))
};
console.log(JSON.stringify(result,null,2));
if (Object.values(result).some((part)=>part.errors.length)) process.exitCode=1;

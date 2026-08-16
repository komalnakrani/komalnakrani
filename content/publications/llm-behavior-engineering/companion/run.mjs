import { readFile } from "node:fs/promises";
import { validateCharter } from "./lib/validate-charter.mjs";
import { validateLanguageTaskContract } from "./lib/validate-contract.mjs";
import { traceMessage } from "./lib/token-trace.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const charter = await load("./contracts/mosaic-responsibility-charter.json");
const contract = await load("./contracts/mosaic-language-task-contract.json");
const fixtures = await load("./mechanics/mosaic-token-fixtures.json");

console.log(JSON.stringify({
  charterErrors: validateCharter(charter),
  contractErrors: validateLanguageTaskContract(contract),
  traces: fixtures.messages.map((message) => traceMessage(message, fixtures.template))
}, null, 2));

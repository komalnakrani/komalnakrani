import { readFile } from "node:fs/promises";
import { validateCharter } from "./lib/validate-charter.mjs";
import { validateLanguageTaskContract } from "./lib/validate-contract.mjs";
import { traceMessage } from "./lib/token-trace.mjs";
import { eligibleCandidates, validateAccessDecision } from "./lib/access-decision.mjs";
import { baselineIdentity, validateBaseline } from "./lib/baseline.mjs";
import { messageIdentity, renderSemanticBundle, validateMessageBoundary } from "./lib/message-boundary.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const charter = await load("./contracts/mosaic-responsibility-charter.json");
const contract = await load("./contracts/mosaic-language-task-contract.json");
const fixtures = await load("./mechanics/mosaic-token-fixtures.json");
const access = await load("./selection/mosaic-access-candidates.json");
const baseline = await load("./baseline/mosaic-baseline-manifest.json");
const results = await load("./baseline/mosaic-result-fixtures.json");
const messages = await load("./messages/mosaic-message-contract.json");
const messageFixture = await load("./messages/mosaic-message-fixture.json");

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
  }
}, null, 2));

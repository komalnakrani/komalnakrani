import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderAppliedAiHtml } from './render-applied-ai.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));

const visibleReplacements = Object.freeze([
  ['BEHAVIOR SYSTEMS / ATLAS 01', 'CONTROL PLANE / ROOM 01'],
  ['KOMAL NAKRANI / APPLIED INTELLIGENCE SERIES', 'KOMAL NAKRANI / AUTONOMOUS SYSTEMS SERIES'],
  ['Read the product as a behavior system', 'Read every action as an authorized trajectory'],
  ['Move from task and contract through mechanism, evidence, operation, and controlled change without mistaking capability for dependable behavior.', 'Move from delegated intent through bounded action, durable state, human authority, evidence, recovery, and controlled change without mistaking motion for permission.'],
  ['Name the task, consequence, and behavior contract before choosing a mechanism.', 'Name the delegated goal, prohibited effects, and authority boundary before enabling action.'],
  ['Follow evidence across data, context, system boundaries, evaluation, and operation.', 'Trace intent, state, tool calls, approvals, effects, recovery, and residual uncertainty.'],
  ['Use consequence coral only where judgment changes exposure, authority, or the next experiment.', 'Use alert amber only where consequence changes authority, exposure, interruption, or recovery.'],
  ['BEHAVIOR SYSTEMS ATLAS / 01', 'AUTONOMY CONTROL ROOM / 01'],
  ['How to use this atlas', 'How to use this control room'],
  [' build one connected layer of the product behavior system.', ' secure one connected layer of the action system.'],
  ['Behavior system map', 'Autonomy control map'],
  ['BEHAVIOR STATE', 'RUN STATE'],
  ['The current required, allowed, uncertain, degraded, or prohibited state.', 'The current proposed, authorized, active, interrupted, recovered, or prohibited state.'],
  ['BEHAVIOR LAB ', 'TRAJECTORY LAB '],
  ['NEXT SYSTEM STATE', 'NEXT CONTROL STATE'],
  ['MODELS', 'CONTROL MAPS'],
  ['MODEL READING', 'TRAJECTORY READING'],
  ['This explanatory model supports the chapter argument. It does not replace observed behavior, evaluation evidence, named authority, or the operating record.', 'This explanatory control map supports the chapter argument. It does not grant authority, prove containment, confirm an external effect, or replace a run record.'],
  ['BEHAVIOR ASSERTION', 'CONTROL ASSERTION'],
  ['SYSTEM ARTIFACT', 'RUN ARTIFACT'],
  ['Use this module with the relevant behavior clause, evidence record, named owner, explicit authority, and current limitation.', 'Use this module with the relevant action contract, run record, named owner, explicit authority, recovery path, and current limitation.'],
  ['Sources, claims, models, and edition records', 'Sources, claims, control maps, and edition records'],
  ['These records preserve what supports each statement, where every explanatory model belongs, and which limitations travel with the edition.', 'These records preserve what supports each statement, where every explanatory control map belongs, and which limitations travel with the edition.'],
  ['MODEL AND ACCESSIBILITY REGISTER', 'CONTROL-MAP AND ACCESSIBILITY REGISTER'],
  ['Every explanatory visual has a reading alternative', 'Every control-room visual has a reading alternative'],
  ['This edition is built to help practicing and aspiring technical professionals reason from user task through dependable combined-system behavior.', 'This edition is built to help practicing and aspiring technical professionals reason from delegated intent through bounded action, evidence, interruption, recovery, and accountable change.'],
  ['END OF ATLAS / RETURN TO THE BEHAVIOR CONTRACT', 'END OF RUN / RETURN AUTHORITY TO ITS OWNER'],
  ['An applied AI product earns trust when its behavior, evidence, limitations, authority, operation, and change history remain visible after the demo is over.', 'An agentic system earns trust only when intent, authority, actions, effects, interruption, recovery, and residual uncertainty remain visible after the run is over.'],
]);

export function renderAgenticAiHtml(contract) {
  const theme = readFileSync(path.join(here, 'books/agentic-ai-engineering.css'), 'utf8');
  let html = renderAppliedAiHtml(contract).replace('</style>', `\n${theme}</style>`);
  for (const [source, replacement] of visibleReplacements) html = html.replaceAll(source, replacement);
  return html;
}

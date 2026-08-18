import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderAppliedAiHtml } from './render-applied-ai.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));

const visibleReplacements = Object.freeze([
  ['BEHAVIOR SYSTEMS / ATLAS 01', 'LANGUAGE SYSTEMS / STUDIO 01'],
  ['KOMAL NAKRANI / APPLIED INTELLIGENCE SERIES', 'KOMAL NAKRANI / LANGUAGE SYSTEMS SERIES'],
  ['Read the product as a behavior system', 'Read language behavior as a designed interface'],
  ['Move from task and contract through mechanism, evidence, operation, and controlled change without mistaking capability for dependable behavior.', 'Move from language-task contract through messages, context, retrieval, evaluation, release, and controlled change without mistaking fluency for dependable behavior.'],
  ['Name the task, consequence, and behavior contract before choosing a mechanism.', 'Name the language task, acceptable variation, consequence, and authority before choosing a model.'],
  ['Follow evidence across data, context, system boundaries, evaluation, and operation.', 'Follow meaning through tokens, messages, context, sources, generated output, evaluation, and operation.'],
  ['Use consequence coral only where judgment changes exposure, authority, or the next experiment.', 'Use warm apricot where a judgment changes exposure, authority, abstention, or the next experiment.'],
  ['BEHAVIOR SYSTEMS ATLAS / 01', 'LANGUAGE SYSTEMS STUDIO / 01'],
  ['How to use this atlas', 'How to use this studio'],
  [' build one connected layer of the product behavior system.', ' build one testable layer of the language interface.'],
  ['Behavior system map', 'Language system map'],
  ['BEHAVIOR STATE', 'INTERFACE STATE'],
  ['The current required, allowed, uncertain, degraded, or prohibited state.', 'The current specified, evidenced, uncertain, abstaining, degraded, or prohibited state.'],
  ['BEHAVIOR LAB ', 'STUDIO LAB '],
  ['NEXT SYSTEM STATE', 'NEXT INTERFACE STATE'],
  ['MODELS', 'STUDIO PLATES'],
  ['MODEL READING', 'INTERFACE READING'],
  ['This explanatory model supports the chapter argument. It does not replace observed behavior, evaluation evidence, named authority, or the operating record.', 'This explanatory studio plate supports the chapter argument. It does not prove model behavior, source authority, evaluator validity, release readiness, or a production outcome.'],
  ['BEHAVIOR ASSERTION', 'CONTRACT ASSERTION'],
  ['SYSTEM ARTIFACT', 'INTERFACE ARTIFACT'],
  ['Use this module with the relevant behavior clause, evidence record, named owner, explicit authority, and current limitation.', 'Use this module with the relevant language-task contract, evidence record, named owner, explicit authority, and current limitation.'],
  ['Sources, claims, models, and edition records', 'Sources, claims, studio plates, and edition records'],
  ['These records preserve what supports each statement, where every explanatory model belongs, and which limitations travel with the edition.', 'These records preserve what supports each statement, where every explanatory studio plate belongs, and which limitations travel with the edition.'],
  ['MODEL AND ACCESSIBILITY REGISTER', 'STUDIO-PLATE AND ACCESSIBILITY REGISTER'],
  ['Every explanatory visual has a reading alternative', 'Every studio plate has a reading alternative'],
  ['This edition is built to help practicing and aspiring technical professionals reason from user task through dependable combined-system behavior.', 'This edition is built to help practicing and aspiring technical professionals design, test, and operate dependable language behavior across model and system boundaries.'],
  ['END OF ATLAS / RETURN TO THE BEHAVIOR CONTRACT', 'END OF STUDIO / RETURN TO THE LANGUAGE-TASK CONTRACT'],
  ['An applied AI product earns trust when its behavior, evidence, limitations, authority, operation, and change history remain visible after the demo is over.', 'A language system earns trust when its contract, evidence, context, sources, abstention, evaluation, authority, and change history remain visible after the fluent answer is over.'],
]);

export function renderLlmBehaviorHtml(contract) {
  const theme = readFileSync(path.join(here, 'books/llm-behavior-engineering.css'), 'utf8');
  let html = renderAppliedAiHtml(contract).replace('</style>', `\n${theme}</style>`);
  for (const [source, replacement] of visibleReplacements) html = html.replaceAll(source, replacement);
  return html;
}

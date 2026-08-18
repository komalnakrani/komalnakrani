import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLlmBehaviorHtml } from './render-llm-behavior.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const replacements = Object.freeze([
  ['LANGUAGE SYSTEMS / STUDIO 01', 'MODEL ADAPTATION / FOUNDRY 02'],
  ['KOMAL NAKRANI / LANGUAGE SYSTEMS SERIES', 'KOMAL NAKRANI / MODEL SYSTEMS SERIES'],
  ['Read language behavior as a designed interface', 'Treat every model change as a controlled transformation'],
  ['Move from language-task contract through messages, context, retrieval, evaluation, release, and controlled change without mistaking fluency for dependable behavior.', 'Move from a frozen behavior baseline through learning data, post-training, packaging, runtime qualification, release, and change without mistaking a checkpoint for a deployable system.'],
  ['Name the language task, acceptable variation, consequence, and authority before choosing a model.', 'Freeze the residual, retained behavior, artifact identity, resource envelope, and stop rule before changing weights.'],
  ['Follow meaning through tokens, messages, context, sources, generated output, evaluation, and operation.', 'Trace data lineage, transformations, objectives, checkpoints, runtime state, protected behavior, and release evidence.'],
  ['Use warm apricot where a judgment changes exposure, authority, abstention, or the next experiment.', 'Use copper only where a judgment changes method, promotion, exposure, rollback, or specialist authority.'],
  ['LANGUAGE SYSTEMS STUDIO / 01', 'MODEL ADAPTATION FOUNDRY / 02'],
  ['How to use this studio', 'How to use this foundry'],
  [' build one testable layer of the language interface.', ' qualify one transformation stage of the model system.'],
  ['Language system map', 'Adaptation pipeline map'],
  ['INTERFACE STATE', 'TRANSFORMATION STATE'],
  ['The current specified, evidenced, uncertain, abstaining, degraded, or prohibited state.', 'The current frozen, authorized, running, rejected, qualified, held, or rolled-back state.'],
  ['STUDIO LAB ', 'FOUNDRY RUN '],
  ['NEXT INTERFACE STATE', 'NEXT QUALIFIED STATE'],
  ['STUDIO PLATES', 'PROCESS PLATES'],
  ['INTERFACE READING', 'PROCESS READING'],
  ['This explanatory studio plate supports the chapter argument. It does not prove model behavior, source authority, evaluator validity, release readiness, or a production outcome.', 'This explanatory process plate supports the chapter argument. It does not prove training success, artifact compatibility, runtime capacity, release readiness, or a production outcome.'],
  ['CONTRACT ASSERTION', 'EXPERIMENT ASSERTION'],
  ['INTERFACE ARTIFACT', 'MODEL-SYSTEM ARTIFACT'],
  ['Use this module with the relevant language-task contract, evidence record, named owner, explicit authority, and current limitation.', 'Use this module with the frozen behavior contract, artifact identities, evidence record, named owner, explicit authority, and current limitation.'],
  ['Sources, claims, studio plates, and edition records', 'Sources, claims, process plates, and edition records'],
  ['These records preserve what supports each statement, where every explanatory studio plate belongs, and which limitations travel with the edition.', 'These records preserve what supports each statement, where every explanatory process plate belongs, and which limitations travel with the edition.'],
  ['STUDIO-PLATE AND ACCESSIBILITY REGISTER', 'PROCESS-PLATE AND ACCESSIBILITY REGISTER'],
  ['Every studio plate has a reading alternative', 'Every process plate has a reading alternative'],
  ['This edition is built to help practicing and aspiring technical professionals design, test, and operate dependable language behavior across model and system boundaries.', 'This edition is built to help practicing and aspiring technical professionals qualify learning data, post-training evidence, model-system identity, runtime behavior, and controlled change.'],
  ['END OF STUDIO / RETURN TO THE LANGUAGE-TASK CONTRACT', 'END OF FOUNDRY / RETURN TO THE FROZEN BEHAVIOR CONTRACT'],
  ['A language system earns trust when its contract, evidence, context, sources, abstention, evaluation, authority, and change history remain visible after the fluent answer is over.', 'An adapted model earns trust only when its baseline, data, objective, artifact identity, protected behavior, runtime envelope, authority, and change history remain visible after training is over.'],
]);

export function renderLlmAdaptationHtml(contract) {
  const theme = readFileSync(path.join(here, 'books/llm-adaptation-and-runtime.css'), 'utf8');
  let html = renderLlmBehaviorHtml(contract).replace('</style>', `\n${theme}</style>`);
  for (const [source, replacement] of replacements) html = html.replaceAll(source, replacement);
  return html;
}

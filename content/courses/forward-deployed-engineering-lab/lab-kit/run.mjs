#!/usr/bin/env node
import { runAllModules, runModule } from './scenarios.mjs';

function option(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? null : process.argv[index + 1];
}

const requested = option('--module');
const result = requested ? await runModule(requested) : await runAllModules();
console.log(JSON.stringify(result, null, 2));

#!/usr/bin/env node
import { validateWorkspace } from './lib/publication-validator.mjs';

const result = await validateWorkspace();
if (!result.ok) {
  console.error(`Publication validation failed with ${result.errors.length} error(s):`);
  for (const error of result.errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Publication validation PASS: ${result.roles.length} role record(s), ${result.publications.length} publication record(s).`,
);

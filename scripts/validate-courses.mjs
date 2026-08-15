#!/usr/bin/env node
import { validateCourses } from './lib/course-validator.mjs';

const result = await validateCourses();
if (!result.ok) {
  console.error(`Course validation failed with ${result.errors.length} error(s):`);
  for (const error of result.errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Course validation PASS: ${result.courses.length} course record(s).`);

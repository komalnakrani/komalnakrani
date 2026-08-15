import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import { validateCourses } from '../scripts/lib/course-validator.mjs';

test('published courses pass schema, module, lab-kit, and boundary validation', async () => {
  const result = await validateCourses();
  assert.equal(result.ok, true, result.errors.join('\n'));
  assert.equal(result.courses.length, 1);
});

test('the FDE course provides every required active-learning modality', async () => {
  const manifest = JSON.parse(await readFile('content/courses/forward-deployed-engineering-lab/course.json', 'utf8'));
  const modalities = new Set(manifest.modules.flatMap((module) => module.modalities));
  for (const required of ['demonstration', 'guided-lab', 'debugging', 'scenario-walkthrough', 'project-checkpoint', 'capstone']) {
    assert.equal(modalities.has(required), true, `missing ${required}`);
  }
  assert.equal(manifest.optional, true);
  assert.match(manifest.certificationPolicy, /Not required by Abhyaas/);
});

test('every module maps to a unique deterministic lab command', async () => {
  const manifestFile = path.resolve('content/courses/forward-deployed-engineering-lab/course.json');
  const manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
  assert.equal(new Set(manifest.modules.map((module) => module.labId)).size, manifest.modules.length);
  assert.equal(new Set(manifest.modules.map((module) => module.labCommand)).size, manifest.modules.length);
  for (const module of manifest.modules) assert.match(module.labCommand, /--module \d{2}$/);
});

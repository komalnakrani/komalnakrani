export function splitLeakage(cases, splitField = "split") {
  const families = new Map();
  for (const item of cases) {
    const splits = families.get(item.familyId) ?? new Set();
    splits.add(item[splitField]);
    families.set(item.familyId, splits);
  }
  return [...families.entries()].filter(([, splits]) => splits.size > 1).map(([familyId, splits]) => ({ familyId, splits: [...splits].sort() }));
}

export function coverageGaps(fixture) {
  const observed = new Set(fixture.cases.map((item) => `${item.language}|${item.evidenceState}`));
  const gaps = [];
  for (const language of fixture.population.languages) for (const evidenceState of fixture.population.evidenceStates) if (!observed.has(`${language}|${evidenceState}`)) gaps.push({ language, evidenceState });
  return gaps;
}

export function validateEvaluationSet(fixture) {
  const errors = [];
  if (fixture.fictional !== true) errors.push("evaluation set must be fictional");
  if ((fixture.effects ?? []).length) errors.push("evaluation set must expose no effects");
  for (const item of fixture.cases ?? []) for (const field of fixture.schemaRequired ?? []) if (item[field] === undefined) errors.push(`${item.id} lacks ${field}`);
  if (fixture.splitPolicy?.trainingUse !== false) errors.push("evaluation cases must not silently become training data");
  if (splitLeakage(fixture.cases).length) errors.push("repaired split still leaks a family");
  const declared = new Set((fixture.declaredGaps ?? []).map((item) => `${item.language}|${item.evidenceState}`));
  for (const gap of coverageGaps(fixture)) if (!declared.has(`${gap.language}|${gap.evidenceState}`)) errors.push(`undeclared gap ${gap.language}/${gap.evidenceState}`);
  return errors;
}

export async function evaluateCases({ model, cases, grader }) {
  const results = [];
  for (const testCase of cases) {
    const output = await model.suggest(testCase.input);
    const grade = grader({ testCase, output });
    results.push({ caseId: testCase.id, segment: testCase.segment, output, grade });
  }
  const segments = {};
  for (const result of results) {
    segments[result.segment] ??= { passed: 0, failed: 0 };
    segments[result.segment][result.grade.pass ? "passed" : "failed"] += 1;
  }
  return { results, segments };
}

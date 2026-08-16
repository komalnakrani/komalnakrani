export function biasedJudge(pair, order, mode) {
  const byId = new Map(pair.candidates.map((item) => [item.id, item]));
  const ordered = order.map((id) => byId.get(id));
  if (mode === "position") return ordered[0].id;
  if (mode === "verbosity") return [...ordered].sort((a, b) => b.words - a.words)[0].id;
  throw new Error(`unknown judge mode ${mode}`);
}

export function calibrationResults(fixture) {
  return fixture.calibration.orderRuns.map((run) => ({ ...run, actualWinner: biasedJudge(fixture.calibration.pair, run.order, run.mode), agreesWithAnchor: false }));
}

export function validateErrorAndJudgeSystem(fixture) {
  const errors = [];
  if (fixture.fictional !== true) errors.push("judge fixture must be fictional");
  if ((fixture.effects ?? []).length) errors.push("judge fixture must expose no effects");
  for (const specimen of fixture.specimens ?? []) for (const field of fixture.requiredErrorFields ?? []) if (specimen[field] === undefined) errors.push(`${specimen.id} lacks ${field}`);
  for (const run of calibrationResults(fixture)) if (run.actualWinner !== run.observedWinner) errors.push(`${run.mode}/${run.order.join("-")} does not reproduce`);
  if (fixture.authority?.modelGrader !== false) errors.push("model grader must have no authority");
  if (!(fixture.calibration?.disagreements ?? []).every((item) => item.status === "retained")) errors.push("disagreement must be retained");
  return errors;
}

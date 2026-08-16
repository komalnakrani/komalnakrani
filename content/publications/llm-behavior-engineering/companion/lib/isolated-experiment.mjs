import { createHash } from "node:crypto";

function changedFields(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].filter((key) => JSON.stringify(a[key]) !== JSON.stringify(b[key])).sort();
}

export function planIdentity(plan) {
  const canonical = JSON.stringify(Object.fromEntries(Object.entries(plan).sort(([a], [b]) => a.localeCompare(b))));
  return createHash("sha256").update(canonical).digest("hex");
}

export function experimentSummary(fixture) {
  const baselinePasses = fixture.pairedResults.filter((item) => item.baselinePass).length;
  const candidatePasses = fixture.pairedResults.filter((item) => item.candidatePass).length;
  const regressions = fixture.pairedResults.filter((item) => item.baselinePass && !item.candidatePass).map((item) => item.caseId);
  const improvements = fixture.pairedResults.filter((item) => !item.baselinePass && item.candidatePass).map((item) => item.caseId);
  const hardFailures = fixture.pairedResults.filter((item) => item.authorizationFailure || item.prohibitedEffect || item.requiredAbstentionMiss).map((item) => item.caseId);
  const tailRegression = fixture.resources.candidateP99TeachingDuration > fixture.plan.gates.p99TeachingDurationMax;
  const disposition = hardFailures.length ? "reject" : regressions.length || tailRegression ? "revise" : candidatePasses > baselinePasses ? "release" : "retain";
  return { baselinePasses, candidatePasses, regressions, improvements, hardFailures, tailRegression, disposition };
}

export function validateExperiment(fixture) {
  const errors = [];
  if (fixture.fictional !== true) errors.push("experiment must be fictional");
  if ((fixture.effects ?? []).length) errors.push("experiment must expose no effects");
  if (fixture.plan?.status !== "preregistered") errors.push("plan must be preregistered");
  if (!(fixture.plan?.preregisteredAt < fixture.plan?.resultsObservedAt)) errors.push("plan must precede results");
  const changes = changedFields(fixture.baseline.configuration, fixture.candidate.configuration);
  if (changes.length !== 1 || changes[0] !== fixture.plan.controlledVariable) errors.push(`candidate changes ${changes.join(",")}`);
  if (experimentSummary(fixture).disposition !== fixture.expectedDisposition) errors.push("unexpected disposition");
  if (!fixture.uncertainty?.length || !fixture.confounds?.length) errors.push("uncertainty/confounds missing");
  return errors;
}

export function confoundedChanges(fixture) {
  return changedFields(fixture.baseline.configuration, fixture.confoundedCandidate.configuration);
}

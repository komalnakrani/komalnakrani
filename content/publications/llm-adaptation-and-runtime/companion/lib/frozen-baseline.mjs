export function auditFrozenBaseline(record) {
  const errors = [];
  if (record?.inheritedHandoff?.adaptation !== "not-justified") errors.push("inherited adaptation disposition changed");
  if (record?.inheritedHandoff?.volume2Entry !== "audit-required-no-adaptation-approved") errors.push("Volume 2 entry boundary changed");
  if (!/^[a-f0-9]{64}$/.test(record?.inheritedHandoff?.sha256 ?? "")) errors.push("handoff digest is not SHA-256 shaped");
  if ((record?.criteria?.retention ?? []).length < 6) errors.push("retention gates incomplete");
  if ((record?.confoundedCandidate?.changes ?? []).length !== 3 || record?.confoundedCandidate?.disposition !== "rejected-confounded") errors.push("confounded candidate not rejected");
  const apparent = (record?.failureLedger ?? []).filter((row) => row.cause === "malformed-upstream-language-code");
  if (apparent.length * 2 !== (record?.failureLedger ?? []).length) errors.push("failure injection must make half the apparent failures upstream");
  if (record?.status !== "eligible-for-method-selection-not-training") errors.push("baseline grants excess authority");
  return {errors, upstreamFailures: apparent.map((row) => row.id), adaptationCandidates: (record?.failureLedger ?? []).filter((row) => row.adaptationEligible).map((row) => row.id)};
}

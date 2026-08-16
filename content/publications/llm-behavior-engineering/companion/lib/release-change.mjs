const allowedTerminalStates = ["success", "abstain", "degraded", "fail-closed", "escalate"];

export function validateServiceAdapter(adapter) {
  const errors = [];
  if (adapter.fictional !== true) errors.push("adapter must be fictional");
  if ((adapter.effects ?? []).length) errors.push("adapter must expose no effects");
  if (adapter.semanticContract?.outputAuthority !== "proposal-only") errors.push("output must remain proposal-only");
  if (JSON.stringify(adapter.semanticContract?.terminalStates) !== JSON.stringify(allowedTerminalStates)) errors.push("terminal states incomplete");
  if (adapter.implementations?.length !== 2) errors.push("managed and open-weight implementations required");
  const shared = adapter.implementations?.map((item) => JSON.stringify(item.sharedResponsibilities)) ?? [];
  if (new Set(shared).size !== 1) errors.push("semantic responsibilities diverge");
  if (!adapter.authorities?.release || adapter.authorities.release.includes("llmEngineering")) errors.push("release authority missing or self-assigned");
  return errors;
}

export function privacyUnsafeSignals(dossier) {
  return (dossier.signals ?? []).filter((signal) => signal.rawContent || signal.directIdentifier || !signal.purpose || !signal.owner || !signal.decision || !signal.retention);
}

export function validateReleaseDossier(dossier) {
  const errors = [];
  if (dossier.fictional !== true || dossier.productionOutcomeClaim !== false) errors.push("release dossier must remain synthetic");
  if ((dossier.effects ?? []).length || dossier.fallback?.effect !== null) errors.push("release dossier must expose no effects");
  if (privacyUnsafeSignals(dossier).length) errors.push("signals are not privacy minimized");
  const orders = dossier.stages?.map((stage) => stage.order) ?? [];
  if (JSON.stringify(orders) !== JSON.stringify([1, 2, 3, 4])) errors.push("release stages are not ordered");
  if (dossier.stages?.some((stage) => stage.effectAllowed)) errors.push("teaching stages cannot authorize effects");
  if (!dossier.rollbackTriggers?.length || !dossier.fallback?.preserveAbstention || !dossier.fallback?.preserveEscalation) errors.push("rollback or fallback incomplete");
  if (dossier.releaseDisposition !== "hold-for-authority-review") errors.push("synthetic dossier cannot self-release");
  return errors;
}

export function migrationSummary(handoff) {
  const results = handoff.migration.replayResults;
  const regressions = results.filter((item) => item.currentPass && !item.candidatePass).map((item) => item.caseId);
  const improvements = results.filter((item) => !item.currentPass && item.candidatePass).map((item) => item.caseId);
  const tailRegression = handoff.migration.resources.candidateP99TeachingDuration > handoff.migration.resources.hardGate;
  const disposition = regressions.length || tailRegression ? "hold-and-keep-current-fallback" : "eligible-for-authority-review";
  return { regressions, improvements, tailRegression, disposition };
}

export function adaptationDisposition(referral) {
  const valuable = referral.valuableForApprovedScope === true;
  const cleared = referral.stableAcrossRuns && valuable && referral.dataSupported && referral.adaptationSensitive && referral.simplerRepairsRemaining.length === 0;
  return cleared ? "eligible-for-volume-2-investigation" : "not-justified";
}

export function validateMigrationHandoff(handoff) {
  const errors = [];
  if (handoff.fictional !== true || handoff.productionOutcomeClaim !== false) errors.push("migration handoff must remain synthetic");
  if ((handoff.effects ?? []).length) errors.push("migration handoff must expose no effects");
  if (!handoff.migration?.shadowOnly || !handoff.migration?.rollbackTarget) errors.push("shadow or rollback path missing");
  if (migrationSummary(handoff).disposition !== handoff.migration?.expectedDisposition) errors.push("unexpected migration disposition");
  const layers = new Set((handoff.failureInjections ?? []).map((item) => item.layer));
  if (!layers.has("model-provider-adapter") || !layers.has("retrieval-authorization")) errors.push("failure layers collapsed");
  if (adaptationDisposition(handoff.adaptationReferral) !== handoff.adaptationReferral?.disposition) errors.push("unexpected adaptation disposition");
  if (handoff.volume2Handoff?.status !== "audit-required-no-adaptation-approved") errors.push("Volume 2 boundary missing");
  return errors;
}

function exclusionReason(unit, request) {
  if (unit.tenant !== request.tenant) return "unauthorized";
  if (!unit.purpose.includes(request.purpose)) return "unauthorized";
  if (!request.allowedSourceFamilies.includes(unit.sourceFamily)) return "source-family";
  if (unit.revoked) return "revoked";
  if (!unit.applicableModels.includes(request.model)) return "not-applicable";
  return null;
}

export function runRetrievalPipeline(fixture) {
  const byId = new Map(fixture.units.map((unit) => [unit.id, unit]));
  const candidateIds = fixture.candidateStages.hybrid;
  const eligible = [];
  const excluded = [];
  for (const id of candidateIds) {
    const unit = byId.get(id);
    const reason = exclusionReason(unit, fixture.request);
    if (reason) excluded.push({ id, reason });
    else eligible.push(unit);
  }
  const seenDigests = new Set();
  const rerankable = [];
  for (const unit of eligible) {
    if (seenDigests.has(unit.digest)) excluded.push({ id: unit.id, reason: "duplicate" });
    else {
      seenDigests.add(unit.digest);
      rerankable.push(unit);
    }
  }
  const position = new Map(fixture.rerankOrder.map((id, index) => [id, index]));
  rerankable.sort((a, b) => (position.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (position.get(b.id) ?? Number.MAX_SAFE_INTEGER));
  const selected = rerankable.slice(0, 1);
  return {
    corpusId: fixture.corpus.id,
    queryId: fixture.request.id,
    candidateIds,
    eligibleIds: eligible.map((unit) => unit.id),
    excluded,
    rerankableIds: rerankable.map((unit) => unit.id),
    selected: selected.map((unit) => ({ id: unit.id, parentId: unit.parentId, revision: unit.revision, span: unit.span, digest: unit.digest })),
    terminal: selected.length ? "selected-evidence" : "no-evidence",
    effect: null
  };
}

export function validateRetrievalPipeline(fixture) {
  const errors = [];
  if (fixture.fictional !== true) errors.push("pipeline must be fictional");
  if ((fixture.effects ?? []).length) errors.push("pipeline must expose no effects");
  for (const field of ["id", "digest", "snapshotAt", "ingestionVersion", "chunkPolicyVersion", "labelVersion"]) if (!fixture.corpus?.[field]) errors.push(`corpus lacks ${field}`);
  for (const unit of fixture.units ?? []) for (const field of ["parentId", "revision", "span", "digest", "tenant", "purpose", "sourceFamily", "applicableModels", "label"]) if (unit[field] === undefined) errors.push(`${unit.id} lacks ${field}`);
  for (const stage of ["lexical", "dense", "hybrid"]) if (!fixture.candidateStages?.[stage]?.length) errors.push(`${stage} candidates missing`);
  if (fixture.hypotheticalDocument?.citeable !== false || fixture.hypotheticalDocument?.authority !== false) errors.push("hypothetical document must remain non-evidence");
  return errors;
}

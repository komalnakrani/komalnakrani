export function inspectModelBoundary(record) {
  const errors = [];
  const candidate = record?.openWeightCandidate ?? {};
  for (const value of [candidate.weights?.sha256, candidate.config?.sha256, candidate.tokenizer?.sha256, candidate.template?.sha256]) {
    if (!/^[a-f0-9]{64}$/.test(value ?? "")) errors.push("invalid artifact digest");
  }
  const blockers = (record?.checks ?? []).filter((check) => check.status === "block").map((check) => check.id);
  if (candidate.tokenizer?.padTokenId === candidate.tokenizer?.eosTokenId && !blockers.includes("pad-eos-serving-assumption")) errors.push("pad/EOS mismatch not blocked");
  if (candidate.template?.expectedFamily !== candidate.template?.id && !blockers.includes("template-family")) errors.push("template mismatch not blocked");
  if (record?.managedComparator?.fabricatedInternals !== false) errors.push("managed internals fabricated");
  if ((record?.tokenizerContrast ?? []).some((row) => row.winner !== null)) errors.push("token count incorrectly treated as quality winner");
  if (blockers.length && record?.status !== "inspection-blocked") errors.push("blocked inspection has permissive status");
  return {errors, blockers, tokenizerLengths:(record?.tokenizerContrast ?? []).map((row) => ({textId:row.textId,a:row.tokenizerA.length,b:row.tokenizerB.length}))};
}

export function auditCuration(manifest) {
  const errors = [];
  if (manifest?.trainingAuthorized !== false) errors.push("curation grants training authority");
  const records = manifest?.records ?? [];
  if (records.some((record)=>record.rawDigest && !/^[a-f0-9]{64}$/.test(record.rawDigest))) errors.push("invalid raw digest");
  const vaultEntries = Object.entries(manifest?.vaults ?? {});
  if (vaultEntries.length !== 5) errors.push("five purpose vaults required");
  const familyPurpose = new Map();
  for (const [purpose,vault] of vaultEntries) for (const id of vault.recordIds ?? []) {
    const record=records.find((row)=>row.id===id);
    if (!record) errors.push(`missing vault record ${id}`);
    if (record && familyPurpose.has(record.family) && familyPurpose.get(record.family)!==purpose) errors.push(`family crosses vaults ${record.family}`);
    if (record) familyPurpose.set(record.family,purpose);
  }
  if (manifest?.duplicateAudit?.signatureFalsePositive?.repairedDecision !== "distinct-task-bearing-content") errors.push("signature false positive not repaired");
  if (manifest?.duplicateAudit?.indirectLeakage?.repairedDecision !== "reject-REC-007") errors.push("indirect leakage not rejected");
  if (manifest?.crossVaultAudit?.knownFamilyCrossings !== 0) errors.push("known family crossing remains");
  if (manifest?.status !== "md10-data-gate-complete-synthetic-only") errors.push("curation status exceeds evidence");
  return {errors, vaultCounts:Object.fromEntries(vaultEntries.map(([name,vault])=>[name,vault.recordIds.length])), rejected:(manifest?.rejectionLedger ?? []).map((row)=>({recordId:row.recordId,reason:row.reason}))};
}

import { createHash } from "node:crypto";
import { stableValue } from "./baseline.mjs";

export function renderSemanticBundle(contract, fixture, adapterId) {
  const adapter = contract.adapters.find((item) => item.id === adapterId);
  if (!adapter) throw new Error(`unknown adapter ${adapterId}`);
  return fixture.blocks.map((block) => ({
    id: block.id,
    zone: block.zone,
    trust: block.trust,
    renderedRole: adapter.mapping[block.zone],
    content: block.content
  }));
}

export function messageIdentity(contract, fixture) {
  return createHash("sha256").update(JSON.stringify(stableValue({contractVersion:contract.version, blocks:fixture.blocks, modules:fixture.ablation.candidateModules}))).digest("hex");
}

export function validateMessageBoundary(contract, fixture) {
  const errors = [];
  if (contract.fictional !== true || fixture.fictional !== true) errors.push("message artifacts must be fictional");
  const zones = new Map(contract.semanticZones.map((zone) => [zone.id, zone]));
  for (const block of fixture.blocks ?? []) {
    if (!zones.has(block.zone)) errors.push(`${block.id} uses unknown zone`);
    if (zones.get(block.zone)?.trust !== block.trust) errors.push(`${block.id} changes trust class`);
  }
  for (const adapter of contract.adapters ?? []) {
    for (const block of fixture.blocks ?? []) if (!adapter.mapping[block.zone]) errors.push(`${adapter.id} does not map ${block.zone}`);
    const rendered = renderSemanticBundle(contract, fixture, adapter.id);
    for (const block of rendered.filter((item) => item.trust === "untrusted-data")) {
      if (/instruction|system-token-block|application-metadata/.test(block.renderedRole)) errors.push(`${adapter.id} promotes ${block.id} to control`);
    }
  }
  if (contract.authorization?.performedBeforeAssembly !== true || contract.authorization?.modelMayExpandScope !== false) errors.push("authorization boundary is invalid");
  if (contract.output?.allowedEffects?.length !== 0) errors.push("generated output must remain effect-free");
  const removed = fixture.ablation?.removed ?? [];
  if (removed.length !== 1 || fixture.ablation?.allOtherBaselineFieldsFixed !== true) errors.push("ablation must remove exactly one module and preserve baseline fields");
  return errors;
}

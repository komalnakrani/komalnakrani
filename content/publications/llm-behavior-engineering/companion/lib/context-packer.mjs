import { createHash } from "node:crypto";
import { stableValue } from "./baseline.mjs";

const order = {mandatory:0, conditional:1, optional:2};

export function packContext(ledger) {
  const available = ledger.budget.nominalCapacity - ledger.budget.reservedOutput - ledger.budget.safetyMargin;
  const selected = [];
  const omitted = [];
  let used = 0;
  let terminal = "valid";
  for (const record of [...ledger.records].sort((a,b) => order[a.priority] - order[b.priority])) {
    if (!record.present) {
      omitted.push({id:record.id, reason:"absent", priority:record.priority});
      if (record.priority === "mandatory") terminal = "abstain";
      continue;
    }
    if (!record.permission) { omitted.push({id:record.id, reason:"unauthorized", priority:record.priority}); continue; }
    if (!record.fresh) {
      omitted.push({id:record.id, reason:"stale", priority:record.priority});
      if (record.priority === "mandatory") terminal = "abstain";
      continue;
    }
    if (record.conflict === true) {
      omitted.push({id:record.id, reason:"conflict", priority:record.priority});
      if (record.priority === "mandatory") terminal = "escalate";
      continue;
    }
    if (used + record.units > available) {
      omitted.push({id:record.id, reason:"oversized", priority:record.priority});
      if (record.priority === "mandatory") terminal = "abstain";
      else if (terminal === "valid") terminal = "degraded";
      continue;
    }
    selected.push({id:record.id, units:record.units, trust:record.trust, priority:record.priority});
    used += record.units;
  }
  const result = {available, used, reservedOutput:ledger.budget.reservedOutput, selected, omitted, terminal, effect:null};
  result.ledgerIdentity = createHash("sha256").update(JSON.stringify(stableValue({ledger,result}))).digest("hex");
  return result;
}

export function withRecord(ledger, id, patch) {
  return {...ledger, records:ledger.records.map((record) => record.id === id ? {...record, ...patch} : record)};
}

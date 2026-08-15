export class IntentConflictError extends Error {
  constructor(intentId) {
    super(`intent ${intentId} was reused with different semantics`);
    this.name = "IntentConflictError";
  }
}

export class IntentLedger {
  #records = new Map();

  begin({ intentId, fingerprint, now = new Date().toISOString() }) {
    if (!intentId || !fingerprint) throw new TypeError("intentId and fingerprint are required");
    const existing = this.#records.get(intentId);
    if (existing) {
      if (existing.fingerprint !== fingerprint) throw new IntentConflictError(intentId);
      return { replay: true, record: structuredClone(existing) };
    }
    const record = { intentId, fingerprint, state: "pending", startedAt: now, result: null };
    this.#records.set(intentId, record);
    return { replay: false, record: structuredClone(record) };
  }

  complete(intentId, result, now = new Date().toISOString()) {
    const record = this.#required(intentId);
    if (record.state === "completed") return structuredClone(record);
    if (record.state !== "pending") throw new Error(`cannot complete intent in ${record.state} state`);
    record.state = "completed";
    record.completedAt = now;
    record.result = structuredClone(result);
    return structuredClone(record);
  }

  markUnknown(intentId, reason, now = new Date().toISOString()) {
    const record = this.#required(intentId);
    if (record.state === "completed") return structuredClone(record);
    record.state = "unknown";
    record.unknownAt = now;
    record.reason = reason;
    return structuredClone(record);
  }

  reconcile(intentId, result, now = new Date().toISOString()) {
    const record = this.#required(intentId);
    record.state = "completed";
    record.reconciledAt = now;
    record.result = structuredClone(result);
    return structuredClone(record);
  }

  get(intentId) {
    const record = this.#records.get(intentId);
    return record ? structuredClone(record) : null;
  }

  #required(intentId) {
    const record = this.#records.get(intentId);
    if (!record) throw new Error(`unknown intent ${intentId}`);
    return record;
  }
}

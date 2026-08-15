const EQUIPMENT_ID = /^OES-[A-Z0-9]{3,12}$/;
const REGIONS = new Set(["west", "central", "east"]);
const STATUSES = new Set(["active", "retired", "unknown"]);

function isTimestamp(value) {
  return typeof value === "string" && !Number.isNaN(Date.parse(value));
}

export function validateEquipmentRecord(record) {
  const errors = [];
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    return { ok: false, errors: ["record must be an object"] };
  }
  if (!EQUIPMENT_ID.test(record.equipmentId ?? "")) {
    errors.push("equipmentId must match OES-[A-Z0-9]{3,12}");
  }
  if (!REGIONS.has(record.region)) errors.push("region is not supported");
  if (!STATUSES.has(record.status)) errors.push("status is not supported");
  if (!isTimestamp(record.observedAt)) errors.push("observedAt must be a valid timestamp");
  if (typeof record.sourceVersion !== "string" || record.sourceVersion.length < 1) {
    errors.push("sourceVersion is required for provenance");
  }
  if (record.region === "west" && record.residency !== "west") {
    errors.push("west records must remain in west residency");
  }
  return { ok: errors.length === 0, errors };
}

export function equipmentFingerprint(record) {
  const validation = validateEquipmentRecord(record);
  if (!validation.ok) throw new TypeError(validation.errors.join("; "));
  return [record.equipmentId, record.region, record.status, record.sourceVersion].join("|");
}

import { createHash } from 'node:crypto';

function normalize(value, seen) {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw Object.assign(new TypeError('canonical JSON rejects non-finite numbers'), { code: 'CANONICAL_INVALID' });
    return value;
  }
  if (typeof value !== 'object') throw Object.assign(new TypeError(`canonical JSON rejects ${typeof value}`), { code: 'CANONICAL_INVALID' });
  if (seen.has(value)) throw Object.assign(new TypeError('canonical JSON rejects cycles'), { code: 'CANONICAL_INVALID' });
  seen.add(value);
  try {
    if (Array.isArray(value)) return value.map((item) => normalize(item, seen));
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) {
      throw Object.assign(new TypeError('canonical JSON accepts only plain objects and arrays'), { code: 'CANONICAL_INVALID' });
    }
    const result = {};
    for (const key of Object.keys(value).sort()) result[key] = normalize(value[key], seen);
    return result;
  } finally {
    seen.delete(value);
  }
}

export function canonicalJson(value) {
  return `${JSON.stringify(normalize(value, new Set()))}\n`;
}

export function sha256Bytes(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

export function deepFreeze(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    for (const child of Object.values(value)) deepFreeze(child);
    Object.freeze(value);
  }
  return value;
}

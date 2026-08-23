import { deepFreeze } from './canonical-json.mjs';

export const PORTS = deepFreeze(['PORT-MANAGED', 'PORT-CLASSICAL', 'PORT-DEEP', 'PORT-EDGE', 'PORT-SHARED']);

const MECHANICS = deepFreeze({
  'PORT-MANAGED': 'provider-managed mechanical adapter',
  'PORT-CLASSICAL': 'local classical mechanical adapter',
  'PORT-DEEP': 'parameterized deep mechanical adapter',
  'PORT-EDGE': 'constrained edge mechanical adapter',
  'PORT-SHARED': 'shared multi-tenant mechanical adapter',
});

function clone(value) {
  if (Array.isArray(value)) return value.map(clone);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, clone(child)]));
  return value;
}

export function runThroughPort(port, envelope) {
  if (!PORTS.includes(port)) throw Object.assign(new Error(`unknown port: ${port}`), { code: 'PORT_UNKNOWN' });
  const result = clone(envelope);
  Object.defineProperties(result, {
    port: { value: port, enumerable: false, configurable: false, writable: false },
    adapterMechanism: { value: MECHANICS[port], enumerable: false, configurable: false, writable: false },
  });
  return deepFreeze(result);
}

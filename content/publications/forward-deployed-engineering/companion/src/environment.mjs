const REQUIRED = ["environment", "tenant", "region", "releaseVersion"];

export function validateEnvironmentConfig(config) {
  const errors = [];
  for (const key of REQUIRED) if (typeof config?.[key] !== "string" || !config[key]) errors.push(`${key} is required`);
  if (!new Set(["local", "test", "staging", "production"]).has(config?.environment)) errors.push("unsupported environment");
  if (config?.secret || config?.apiKey || config?.password) errors.push("secret material must not be stored in configuration records");
  if (config?.region === "west" && config?.dataResidency !== "west") errors.push("west environment requires west data residency");
  return { ok: errors.length === 0, errors };
}

export function compareEnvironments(reference, candidate) {
  const keys = new Set([...Object.keys(reference ?? {}), ...Object.keys(candidate ?? {})]);
  return [...keys]
    .filter((key) => reference?.[key] !== candidate?.[key])
    .sort()
    .map((key) => ({ key, reference: reference?.[key] ?? null, candidate: candidate?.[key] ?? null }));
}

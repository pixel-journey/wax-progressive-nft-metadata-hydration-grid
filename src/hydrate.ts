/**
 * Which required keys are missing or blank. Nothing is fetched.
 */

const KEY = /^[a-z][a-z0-9_]{0,31}$/;

export function missing(required: readonly string[], have: Readonly<Record<string, string>>): { ok: false; reason: string } | { ok: true; missing: string[] } {
  if (required.length < 1 || required.length > 20) return { ok: false, reason: "pass 1 to 20 keys" };
  const seen = new Set<string>();
  for (const key of required) {
    if (!KEY.test(key)) return { ok: false, reason: `${key} is not a field name` };
    if (seen.has(key)) return { ok: false, reason: `${key} is repeated` };
    seen.add(key);
  }
  const absent = required.filter((key) => {
    const value = have[key];
    return typeof value !== "string" || value.trim() === "";
  });
  return { ok: true, missing: absent };
}

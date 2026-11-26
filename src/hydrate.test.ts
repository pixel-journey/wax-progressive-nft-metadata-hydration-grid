import { describe, expect, it } from "vitest";
import { missing } from "./hydrate";

describe("missing fields", () => {
  it("treats a blank string as missing", () => {
    expect(missing(["name", "image"], { name: "Oak", image: "  " })).toEqual({
      ok: true,
      missing: ["image"],
    });
    expect(missing(["name", "image"], { name: "Oak" })).toEqual({
      ok: true,
      missing: ["image"],
    });
    const filled = missing(["name"], { name: "Oak" });
    expect(filled.ok && filled.missing).toEqual([]);
  });

  it("refuses empty or overlong required lists", () => {
    expect(missing([], {}).ok).toBe(false);
    const twentyOne = Array.from({ length: 21 }, (_, i) => `k${i}`);
    expect(missing(twentyOne, {}).ok).toBe(false);
  });

  it("refuses bad key shape", () => {
    expect(missing(["Name"], {}).ok).toBe(false);
    expect(missing(["1bad"], {}).ok).toBe(false);
    expect(missing([""], {}).ok).toBe(false);
  });

  it("refuses repeated required keys", () => {
    const dup = missing(["name", "name"], { name: "Oak" });
    expect(dup.ok).toBe(false);
    if (dup.ok) return;
    expect(dup.reason).toMatch(/repeated/);
  });

  it("lists every blank required key", () => {
    const result = missing(["name", "image", "rarity"], {
      name: "Oak",
      image: "",
      rarity: "   ",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.missing).toEqual(["image", "rarity"]);
  });
});

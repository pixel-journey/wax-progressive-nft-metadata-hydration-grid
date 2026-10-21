import { describe, expect, it } from "vitest";
import { missing } from "./hydrate";

describe("missing fields", () => {
  it("treats a blank string as missing", () => {
    expect(missing(["name", "image"], { name: "Oak", image: "  " })).toEqual({ ok: true, missing: ["image"] });
    const filled = missing(["name"], { name: "Oak" });
    expect(filled.ok && filled.missing).toEqual([]);
  });
});

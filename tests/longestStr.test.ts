import { longestStr } from "../src/longestStr";
import { describe, test, expect } from "vitest"

describe("Testing longestStr", () => {
  test("babad", () => {
    const result = longestStr("babad");

    expect(result).toBe("bab")
  })
})
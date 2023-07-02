import { longestStr } from "../src/longestStr";

describe("Testing longestStr", () => {
  test("babad", () => {
    const result = longestStr("babad");

    expect(result).toBe("bab")
  })
})
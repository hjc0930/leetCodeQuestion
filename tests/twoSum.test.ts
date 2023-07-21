import { twoSum } from "../src/twoSum";
import { describe, test, expect } from "vitest"

describe("Two number add", () => {

  test('right', () => {
    expect(twoSum([1, 2, 3], 5)).toEqual([1, 2]);
  });

  test("empty", () => {
    expect(twoSum([], 5)).toEqual([])
  })
})

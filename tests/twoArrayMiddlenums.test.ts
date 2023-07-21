import { twoArrayMiddleNums } from "../src/twoArrayMiddleNums";
import { describe, test, expect } from "vitest"

describe("Test twoArrayMiddlenums", () => {
  test("[1, 2], [3]", () => {
    const result = twoArrayMiddleNums([1, 2], [3]);

    expect(result).toBe(2);
  });

  test("[1, 2], [3, 4]", () => {
    const result = twoArrayMiddleNums([1, 2], [3, 4]);

    expect(result).toBe(2.5);
  });

  test("[1], []", () => {
    const result = twoArrayMiddleNums([1], []);

    expect(result).toBe(1);
  })
})
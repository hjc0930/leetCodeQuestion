import { noRepeatNums } from "../src/noRepeatNums";
import { describe, test, expect } from "vitest"

describe("NoRepeatNums", () => {
  test("Empty str", () => {
    const result = noRepeatNums("");
    expect(result).toBe(0);
  });

  test("Three str", () => {
    const result = noRepeatNums("abcabcbb");
    expect(result).toBe(3);
  });
});
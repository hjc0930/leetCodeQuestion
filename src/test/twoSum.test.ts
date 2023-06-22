import { twoSum } from "../twoSum";

describe("两数之和", () => {

  test('正确的情况', () => {
    expect(twoSum([1, 2, 3], 5)).toEqual([1, 2]);
  });

  test("空情况", () => {
    expect(twoSum([], 5)).toEqual([])
  })
})

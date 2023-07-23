import { describe, test, expect, beforeAll } from "vitest"
import runTask from "../src/runTask";

const task = (result: unknown, wait = 200) => () => new Promise(resolve => {
  setTimeout(() => {
    resolve(result)
  }, wait)
})

describe("runTask", () => {
  test("run", async () => {
    const taskRes = runTask(...[task(1), task(2), task(3)]);

    const result = await taskRes.run();

    expect(result).toEqual([1, 2, 3])
  })
})
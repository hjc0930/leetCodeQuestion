import { ListNode } from "../src/utils/listNode";
import { addTwoNumbers } from "../src/twoAdd";
import { describe, test, expect } from "vitest"

describe("Two numbers add testing", () => {
  test("utils function testing", () => {
    const listNode = new ListNode(3);

    expect(listNode.toString()).toBe(`ListNode{value=3, next=null}`)
  })
  test("function testing", () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(7);

    const l2 = new ListNode(2);
    l2.next = new ListNode(3);

    const result = addTwoNumbers(l1, l2);

    const expectResult = new ListNode(3);
    expectResult.next = new ListNode(1);

    expect(result).toEqual(expectResult);
  })
})
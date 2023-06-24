import { ListNode } from "../utils/listNode";
import { addTwoNumbers } from "../twoAdd";

test("两数相加", () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);

  const l2 = new ListNode(2);
  l2.next = new ListNode(3);

  const result = addTwoNumbers(l1, l2);

  const expectResult = new ListNode(3);
  expectResult.next = new ListNode(5);

  expect(result).toEqual(expectResult);
})
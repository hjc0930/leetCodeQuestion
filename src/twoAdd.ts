/** 两数相加(中等) */

import { ListNode } from "./utils/listNode";

export const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  let head: ListNode | null = null, tail: ListNode | null = null;

  let carry = 0;

  while (l1 != null || l2 != null) {
      let n1 = l1 != null ? l1.value : 0;
      let n2 = l2 != null ? l2.value : 0;
      let sum = n1 + n2 + carry;

    if (head === null) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail!.next = new ListNode(sum % 10);
    }
    carry = sum > 9 ? 1 : 0;

    if (l1 !== null) {
      l1 = l1.next!;
    }

    if (l2 !== null) {
      l2 = l2.next!;
    }
  }

  if (carry > 0) {
    tail!.next = new ListNode(carry);
  }

  return head!;
}
/** 两数相加(中等) */

import { ListNode } from "./utils/listNode";

export const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  const dummy = new ListNode(0);
  let tmp = dummy;
  let t = 0;

  while (l1 !== null || l2 !== null) {
    const a = l1 !== null ? l1.value : 0;
    const b = l2 !== null ? l2.value : 0;

    t = a + b + t;

    tmp.next = new ListNode(t % 10);

    t /= 10;

    tmp = tmp.next;

    if(l1 !== null) l1 = l1.next!;
    if(l2 !== null) l2 = l2.next!;
  }

  if(t > 0) tmp.next = new ListNode(t);
  return dummy.next!;
}
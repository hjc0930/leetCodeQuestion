export class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value =value;
    this.next = null;
  }
}
export class ListNode<T = any> {
  public value: T;
  public next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  public toString() {
    return `ListNode{value=${this.value}, next=${this.next}}`
  }
}
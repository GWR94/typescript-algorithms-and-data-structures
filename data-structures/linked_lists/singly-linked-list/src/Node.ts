/**
 * Node class for use in a singly linked list
 */
export default class Node {
  public val: any;
  public next: Node;

  public constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

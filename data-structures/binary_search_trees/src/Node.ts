export default class Node {
  public value: any;
  public left: Node;
  public right: Node;
  public count: number;

  public constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 0;
  }
}

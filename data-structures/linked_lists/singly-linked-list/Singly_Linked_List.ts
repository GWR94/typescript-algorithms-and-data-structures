import Node from "./Node";

export default class SinglyLinkedList {
  public head: Node;
  public tail: Node;
  public length: number;

  public constructor(data?: any[]) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (data && Array.isArray(data)) {
      data.forEach((item): SinglyLinkedList => this.push(item));
    }
  }

  /**
   * pushing a node to the end of the linked list
   * @param val: value to add to the node
   */
  public push(val: any): SinglyLinkedList {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * popping a node off of the end of the link list
   */
  public pop(): Node {
    if (!this.head) return undefined;
    let current: Node = this.head;
    let prev: Node = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
   * shifting (removing) a node from the start of the linked list
   */
  public shift(): Node {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  /**
   * unshifting (inserting) a node to the start of
   * the linked list.
   * @param val: value which we add to the node
   */
  public unshift(val: any): SinglyLinkedList {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  /**
   * finding a node at the index provided
   * @param index: the index to find the node at
   */
  public get(index: number): Node {
    if (this.length < index || index < 0) return null;
    let count = 0;
    let current: Node = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  /**
   * replacing a nodes value with the input value (val)
   * from the given index.
   * @param val: the value to replace the found nodes val
   * property with
   * @param index: the index to find the node at.
   */
  public set(val: any, index: number): boolean {
    const prevNode: Node = this.get(index);
    if (prevNode) {
      prevNode.val = val;
      return true;
    }
    return false;
  }

  /**
   * insert a new node at the given index, with the given
   * value (val) as the val property on the node.
   * @param val: the value to add to the val property of
   * the new node
   * @param index: the index which to add the new node to
   * in the linked list.
   */
  public insert(val: any, index: number): boolean {
    if (this.length < index || index < 0) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  /**
   * removing a node from the given index in the linked
   * list.
   * @param index: the index to remove the node from
   */
  public remove(index: number): Node {
    if (this.length < index || index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  /**
   * reverse the whole linked list.
   */
  public reverse(): SinglyLinkedList {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next, prev;
    let count = 0;
    while (count < this.length) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    return this;
  }

  /**
   * print all of the values from each node in the
   * order which they are currently in.
   */
  public print(): any[] {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
}

const list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.unshift(50);
list.print();
list.reverse();
list.print();

class Node {
  public val: any;
  public next: Node;
  public constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  public head: Node;
  public tail: Node;
  public constructor() {
    this.head = null;
    this.tail = null;
  }

  public push(val): SinglyLinkedList {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  public pop(): Node {
    if (!this.head) return null;
    let current = this.head;
    let prev;
    while (current) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    return current;
  }

  public unshift(val): SinglyLinkedList {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    return this;
  }

  public shift(): Node {
    if (!this.head) return null;
    const prevHead = this.head;
    if (!this.head) this.tail = null;
    this.head = this.head.next;
    return prevHead;
  }

  public get(index): Node {
    let count = 0;
    let current = this.head;
    while (count < index && current) {
      current = current.next;
      count++;
    }
    return current;
  }

  public set(index, val): SinglyLinkedList {
    if (index < 0) return null;
    const node = this.get(index);
    if (!node) return null;
    node.val = val;
    return this;
  }

  public insert(index, val): SinglyLinkedList {
    if (index < 0) return null;
    const node = new Node(val);
    const prev = this.get(index - 1);
    if (!prev.next) return null;
    node.next = prev.next;
    prev.next = node;
    return this;
  }

  public remove(index): Node {
    const prev = this.get(index - 1);
    const removed = prev.next;
    removed.next ? (prev.next = removed.next) : (prev.next = null);
    return removed;
  }

  public reverse(): SinglyLinkedList {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  public print(): void {
    if (!this.head) return console.log(`Empty List ${this.head}, ${this.tail}`);
    let str = "";
    let current = this.head;
    while (current) {
      str += current.val;
      current.next ? (str += " -> ") : (str += "");
      current = current.next;
    }
    console.log(`HEAD: ${this.head.val}
${str}
TAIL: ${this.tail.val}`);
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.unshift(0);
// list.shift();
list.reverse();
list.remove(1);
list.unshift(4);
list.insert(1, 3);
list.set(3, 1);
console.log(list.get(0));

list.print();

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
  public length: number;
  public constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    this.length++;
    return this;
  }

  public pop(): Node {
    const { tail } = this;
    if (this.length === 0) return null;
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
    return tail;
  }

  public get(index: number): Node {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(current.val);
    return current;
  }

  public insert(index: number, val: any): SinglyLinkedList {
    const node = new Node(val);
    const prev = this.get(index - 1);
    const current = prev.next;
    prev.next = node;
    node.next = current;
    return this;
  }

  public rotate(num): SinglyLinkedList {
    let count = 1;
    let current = this.head;
    while (count < num) {
      current = current.next;
      count++;
    }
    console.log(current.val);
    let temp = current;
    while
    return this;
  }

  public print(): void {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current.val} ${current.next ? "--> " : ""}`;
      current = current.next;
    }
    console.log(str);
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.get(0);
list.insert(2, 2.5);
list.rotate(1);
list.print();

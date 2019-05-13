export default class Node {
	public val: any;
	public next: Node;
	public prev: Node;

	constructor(val: any) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	public head: Node;
	public tail: Node;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	public push(val: any) {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	public pop() {
		if (!this.head) return undefined;
		const popped: Node = this.tail;
		this.tail = this.tail.prev;
		this.tail.next = null;
		this.length--;
		return popped;
	}

	public shift() {
		if (!this.head) return undefined;
		const shifted = this.head;
		this.head = shifted.next;
		this.head.prev = null;
		this.length--;
		return shifted;
	}

	public unshift(val: any) {
		if (!this.head) return undefined;
		const node = new Node(val);
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
		this.length++;
		return this;
	}

	public get(index: number) {
		if (this.length <= index || index < 0) return undefined;
		let count: number;
		let current: Node;
		if (index < Math.floor(this.length / 2)) {
			count = 0;
			current = this.head;
			while (count < index) {
				current = current.next;
				count++;
			}
			return current;
		}
		count = this.length;
		current = this.tail;
		while (index <= count) {
			current = current.prev;
			count--;
		}
		return current;
	}

	public set(val: any, index: number) {
		const current = this.get(index);
		console.log(current);
		if (current) {
			current.val = val;
			return true;
		}
		return false;
	}

	public print() {
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push({
				value: current.val,
				next: current.next ? current.next.val : null,
				prev: current.prev ? current.prev.val : null
			});
			current = current.next;
		}
		console.log(arr, "length:", this.length);
	}
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.set("Four", 4);
list.set("Eight", 8);
list.print();

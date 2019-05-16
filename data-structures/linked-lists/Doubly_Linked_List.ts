import Node from "../nodes/Double_Node";

export default class DoublyLinkedList {
	public head: Node;
	public tail: Node;
	public length: number;

	constructor(data?: any[]) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		if (data && Array.isArray(data)) {
			data.forEach(item => this.push(item));
		}
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
		this.length--;
		if (this.length === 0) this.tail = null;
		return shifted;
	}

	public unshift(val: any) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	}

	public get(index: number) {
		if (this.length <= index || index < 0) return undefined;
		let count: number;
		let current: Node;
		if (index < this.length / 2) {
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (index !== count) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	public set(val: any, index: number) {
		const current = this.get(index);
		if (current !== null) {
			current.val = val;
			return true;
		}
		return false;
	}

	public insert(val: any, index: number) {
		if (this.length <= index || index < 0) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);
		const newNode = new Node(val);
		const prevNode = this.get(index - 1);
		const nextNode = prevNode.next;
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		newNode.prev = prevNode;
		nextNode.prev = newNode;
		this.length++;
		return true;
	}

	public remove(index: number) {
		const current = this.get(index);
		if (current) {
			if (index === 0) return !!this.shift();
			if (index === this.length - 1) return !!this.pop();
			const prevNode = current.prev;
			const nextNode = current.next;
			prevNode.next = nextNode;
			nextNode.prev = current.prev;
			this.length--;
			return true;
		}
		return false;
	}

	public print() {
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

const list = new DoublyLinkedList([100, 200, 300, 400, 500]);
list.push(600);
list.set("ONE HUNDRED", 0);
list.set("FIVE HUNDRED", 4);
list.insert(550, 4);
list.insert(250, 2);
list.remove(2);
list.remove(4);
list.print();

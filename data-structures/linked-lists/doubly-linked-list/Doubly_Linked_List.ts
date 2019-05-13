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
		if (current) {
			current.val = val;
			return true;
		}
		return false;
	}

	public insert(val: any, index: number) {
		const current = this.get(index);
		if (current) {
			if (index === 0) return !!this.unshift(val);
			if (index === this.length - 1) return !!this.push(val)
			const node = new Node(val);
			const prevNode = current.prev;
			const nextNode = current.next;
			prevNode.next = node;
			node.next = current;
			nextNode.prev = node;
			node.prev = current.prev;
			this.length++; 
			return true;
		}
	}

	public remove(index: number) {
		const current = this.get(index);
		if (current) {
			if (index === 0) return !!this.shift();
			if (index === this.length - 1) return !!this.pop();
			const current = this.get(index);
			const prevNode = current.prev;
			prevNode.next = current.next;
			current.prev = prevNode.prev;
			this.length--;
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

const list = new DoublyLinkedList([100, 200, 300, 400, 500]);
list.push(600);
list.set("ONE HUNDRED", 0);
list.insert(250, 2);
list.remove(2);
list.print();

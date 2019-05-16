import Node from "../nodes/Node";

/**
 * TODO
 * [ ] Fix push and/or pop
 * [ ] Rename push/pop
 */

class Queue {
	public first: Node;
	public last: Node;
	public size: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.size = null;
	}

	public push(val: any) {
		const node = new Node(val);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.first.next = node;
		}
		this.size++;
		return this;
	}

	public pop() {
		if (!this.first) return undefined;
		const currentFirst = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = currentFirst.next;
		this.size--;
		console.log(currentFirst.val);
		return currentFirst;
	}

	public print() {
		const arr = [];
		let current = this.first;
		while (current) {
			arr.push({
				value: current.val,
				next: current.next ? current.next.val : null
			});
			current = current.next;
		}
		console.log(arr);
	}
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.print();

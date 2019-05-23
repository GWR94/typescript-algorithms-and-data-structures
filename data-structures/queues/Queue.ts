import Node from "../linked_lists/singly-linked-list/Node";

class Queue {
	public first: Node;
	public last: Node;
	public size: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.size = null;
	}

	public enqueue(val: any) {
		const node = new Node(val);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		return ++this.size;
	}

	public dequeue() {
		if (!this.first) return null;
		const currentFirst = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = currentFirst.next;
		this.size--;
		console.log(currentFirst.val);
		return currentFirst.val;
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
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

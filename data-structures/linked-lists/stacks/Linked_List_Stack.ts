import Node from "./Node";

class Stack {
	public first: Node;
	public last: Node;
	public size: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	public push(value: any) {
		const node = new Node(value);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}
		this.size++;
		return this;
	}

	public pop() {
		if (!this.first) return null;
		const currentFirst = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = currentFirst.next;
		this.size--;
		return currentFirst.value;
	}

	public print() {
		const arr = [];
		let current = this.first;
		while (current) {
			arr.push({
				value: current.value,
				next: current.next ? current.next.value : null
			});
			current = current.next;
		}
		console.log(arr);
	}
}

const stack = new Stack();
stack.push("Google");
stack.push("Facebook");
stack.push("YouTube");
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();

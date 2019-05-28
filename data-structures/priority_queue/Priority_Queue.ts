class Node {
	constructor(public value: any, public priority: number) {
		this.value = value;
		this.priority = priority;
	}
}

export default class PriorityQueue {
	private values: Node[];
	constructor(data?: object[]) {
		this.values = [];
		if (data) data.forEach(node => this.enqueue(node.value, node.priority));
	}

	public enqueue = (value: any, priority: number) => {
		const node = new Node(value, priority);
		this.values.push(node);
		this.bubbleUp();
	};

	public dequeue = (): Node => {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	};

	public printQueue = (): void => {
		return console.log(this.values, "length", this.values.length);
	};

	/**
	 * Method to swap the two values in the values array
	 * @param idx1 - the index of the first value to swap
	 * @param idx2 - the index of the second value to swap
	 */
	protected swap = (idx1: number, idx2: number): void => {
		const arr = this.values;
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	private bubbleUp = (): void => {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			const parentIdx: number = Math.floor((idx - 1) / 2);
			const parent: Node = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.swap(idx, parentIdx);
			idx = parentIdx;
		}
	};

	private sinkDown = (): void => {
		let idx: number = 0;
		const element: Node = this.values[0];
		const length: number = this.values.length;
		while (true) {
			const leftIdx = 2 * idx + 1;
			const rightIdx = 2 * idx + 2;
			let leftChild: Node, rightChild: Node;
			let swap = null;
			if (leftIdx < length) {
				leftChild = this.values[leftIdx];
				if (leftChild.priority < element.priority) {
					swap = leftIdx;
				}
			}
			if (rightIdx < length) {
				rightChild = this.values[rightIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightIdx;
				}
			}
			if (swap === null) break;
			this.swap(swap, idx);
			idx = swap;
		}
	};
}

const queue = new PriorityQueue([
	{
		value: "Not Important",
		priority: 4
	},
	{
		value: "Important",
		priority: 1
	},
	{
		value: "Pretty Important",
		priority: 2
	},
	{
		value: "Important",
		priority: 1
	},
	{
		value: "Incredibly Important",
		priority: 0
	},
	{
		value: "Incredibly Important",
		priority: 0
	},
	{
		value: "Incredibly Important",
		priority: 0
	},
	{
		value: "Important",
		priority: 1
	}
]);
queue.printQueue();
/**
 *            0
 *         1     0
 *       1  1  2   0
 *     4
 */
queue.dequeue();
queue.printQueue();
/**
 *            0
 *         1     0
 *       1  1  2   4
 */
queue.dequeue();
queue.printQueue();
/**
 *            0
 *         1     2
 *       1  1  4
 */
queue.dequeue();
queue.printQueue();
/**
 *            1
 *         1     2
 *       4  1
 */

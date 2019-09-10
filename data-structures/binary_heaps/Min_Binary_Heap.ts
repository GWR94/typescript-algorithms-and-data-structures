class MinBinaryHeap {
	private values: any[];
	constructor(data?: any[]) {
		this.values = [];
		if (data) data.forEach(item => this.insert(item));
	}

	public insert = (value: any): void => {
		this.values.push(value);
		this.bubbleUp();
	};

	public printHeap = (): void => {
		return console.log(this.values);
	};

	public remove = (): any => {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	};

	protected sinkDown = (): void => {
		let idx: number = 0;
		const element: any = this.values[0];
		const length: number = this.values.length;
		while (true) {
			const leftIdx: number = 2 * idx + 1;
			const rightIdx: number = 2 * idx + 2;
			let leftChild: number, rightChild: number;
			let swap: number = null;
			if (leftIdx < length) {
				leftChild = this.values[leftIdx];
				if (leftChild < element) {
					swap = leftIdx;
				}
			}
			if (rightIdx < length) {
				rightChild = this.values[rightIdx];
				if (
					(swap === null && rightChild < element) ||
					(swap !== null && rightChild < leftChild)
				) {
					swap = rightIdx;
				}
			}
			if (swap === null) break;
			this.swap(swap, idx);
			idx = swap;
		}
	};

	protected bubbleUp = () => {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.values[parentIdx];
			if (parent < element) break;
			this.swap(parentIdx, idx);
			idx = parentIdx;
		}
	};

	protected swap = (idx1: number, idx2: number) => {
		const arr = this.values;
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
}

const minHeap = new MinBinaryHeap([0, 2, 3, 4, 2, 6, 5, 1, 11]);
minHeap.printHeap();
minHeap.remove();
minHeap.printHeap();
minHeap.remove();
minHeap.printHeap();
minHeap.remove();
minHeap.printHeap();
minHeap.remove();
minHeap.printHeap();
minHeap.remove();
minHeap.printHeap();
minHeap.remove();
minHeap.printHeap();

// import swap from "../../algorithms/sorting-algorithms/utils/swap";
/**
 * TODO
 * [ ] Fix insert method
 */
export default class MaxBinaryHeap {
	public values: any[];
	constructor(data?: any[]) {
		this.values = [39, 41, 18, 27, 12, 33];
	}

	public insert(value: any) {
		const swap = (arr: any[], idx1: number, idx2: number): void => {
			[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
		};
		this.values.push(value);
		let child: any = this.values.length - 1;
		let parent: any = Math.floor(child / 2);
		while (this.values[parent] < value) {
			console.log(this.values);
			swap(this.values, parent, child);
			child = parent;
			parent = Math.floor(child / 2);
		}
	}
}

const heap = new MaxBinaryHeap();

heap.insert(55);
console.log(heap.values);

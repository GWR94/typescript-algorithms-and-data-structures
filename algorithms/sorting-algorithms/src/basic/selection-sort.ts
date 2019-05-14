import swap from "../utils/swap";

export default function selectionSort(arr: any[]) {
	for (let i = 0; i < arr.length; i++) {
		let smallest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[smallest] > arr[j]) {
				smallest = j;
			}
		}
		if (i !== smallest) {
			swap(arr, i, smallest);
		}
	}
	return arr;
}

console.log(selectionSort(["e", "g", "c", "d", "b", "a", "f"]));

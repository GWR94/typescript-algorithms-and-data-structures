import swap from "../../utils/swap";

export default function bubbleSort(arr: any[]) {
	let noSwaps: boolean;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
				console.log(arr);
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort(["c", "d", "b", "a"]));

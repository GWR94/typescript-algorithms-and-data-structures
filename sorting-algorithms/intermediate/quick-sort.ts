import pivot from "../utils/pivot";

function quickSort(
	arr: number[],
	left: number = 0,
	right: number = arr.length - 1
) {
	if (left < right) {
		const pivotIdx = pivot(arr, left, right);
		console.log(pivotIdx);
		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

console.log(quickSort([3, 2, 65, 6, 32, 2, 4, 24, 52]));

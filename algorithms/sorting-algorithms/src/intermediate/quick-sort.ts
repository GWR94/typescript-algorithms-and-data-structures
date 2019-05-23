import pivot from "../../utils/pivot";

export default function quickSort(
	arr: any[],
	left: number = 0,
	right: number = arr.length - 1
): any[] {
	if (left < right) {
		const pivotIdx = pivot(arr, left, right);
		console.log(pivotIdx);
		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

console.log(quickSort([3, 2, 65, 6, 32, 2, 4, 24, 52]));

import merge from "../utils/merge";

function mergeSort(arr: any[]) {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log([1, 3, 54, 1, 2, 4, 2, 211, 25, 15, 2]);

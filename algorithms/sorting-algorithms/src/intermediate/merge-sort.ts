import merge from "../utils/merge";

function mergeSort(arr: any[]) {
	/**
	 * Return the array if it is equal to or less than 1, because the
	 * array is obviously sorted at these lengths.
	 */
	if (arr.length <= 1) {
		return arr;
	}
	/**
	 * Set mid point to set the point to determine the left and right
	 * side of the array.
	 */
	const mid = Math.floor(arr.length / 2);
	/**
	 * Run merge sort recursively on the left and right sides of the
	 * array
	 */
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort([1, 3, 54, 1, 2, 4, 2, 211, 25, 15, 2]));

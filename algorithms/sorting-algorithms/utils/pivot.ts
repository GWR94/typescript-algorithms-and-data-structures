import swap from "./swap";

function pivot(
	arr: number[],
	start: number = 0,
	end: number = arr.length - 1
): number {
	let piv: number = start;
	const val = arr[piv];
	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < val) {
			piv++;
			swap(arr, i, piv);
		}
	}
	swap(arr, start, piv);
	return piv;
}

export default pivot;

import states from "./data/states";

function binarySearch(arr: any[], val: any) {
	let left: number = 0;
	let right: number = arr.length - 1;
	let mid: number = Math.floor((left + right) / 2);
	let count: number = 1;

	while (left < right) {
		arr[mid] > val ? (right = mid - 1) : (left = mid + 1);
		mid = Math.floor((left + right) / 2);
		if (arr[mid] === val) {
			return console.log(
				`${val} found at index ${mid}, and took ${count} iterations`
			);
		}
		count++;
	}
	return console.log(`${val} not found in array`);
}

binarySearch([1, 2, 3, 4, 5, 6], 4);
binarySearch(states, "Indiana");
binarySearch(states, "Alabama");

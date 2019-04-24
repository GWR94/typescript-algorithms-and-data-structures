function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	while (left < right) {
		arr[mid] > val ? (right = mid - 1) : (left = mid + 1);
		mid = Math.floor((left + right) / 2);
		if (arr[mid] === val) return mid;
	}
	return -1;
}

const x = [1, 2, 3, 4, 5, 6];

console.log(binarySearch(x, 4));

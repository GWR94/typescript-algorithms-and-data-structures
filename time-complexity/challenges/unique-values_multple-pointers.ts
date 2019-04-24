function countUniqueValues(arr: Array<any>) {
	if (arr.length === 0) return 0;
	let i: number = 0;
	for (let j: number = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 2, 2]));

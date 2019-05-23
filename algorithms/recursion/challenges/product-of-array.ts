function productOfArray(array: number[]): number {
	const index: number = 0;
	let sum: number = array[0];
	function helper(i: number, arr: number[]) {
		if (i === arr.length) {
			return sum;
		}
		sum *= arr[i];
		return helper(i + 1, arr);
	}
	helper(index, array);
	return sum;
}

console.log(productOfArray([1, 2, 3, 4, 5]));

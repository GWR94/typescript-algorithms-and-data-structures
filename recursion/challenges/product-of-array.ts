function productOfArray(arr: Array<number>) {
	let index: number = 0;
	let sum: number = arr[0];
	function helper(index: number, arr: number[]) {
		if (index === arr.length) return sum;
		sum *= arr[index];
		return helper(index + 1, arr);
	}
	helper(index, arr);
	return sum;
}

console.log(productOfArray([1, 2, 3, 4, 5]));

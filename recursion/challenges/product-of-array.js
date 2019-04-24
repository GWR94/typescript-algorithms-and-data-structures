function productOfArray(arr) {
	let index = 0;
	let sum = arr[0];
	function helper(index, arr) {
		if (index === arr.length) return sum;
		sum *= arr[index];
		return helper(index + 1, arr);
	}
	helper(index, arr);
	return sum;
}

console.log(productOfArray([1, 2, 3]));

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;
	let max = 0;
	let temp = 0;
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
	temp = max;
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max);
	}
	console.log(max);
	return max;
}

maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

function maxSubarraySum(arr: number[], num: number) {
	if (arr.length < num) return null;
	let max: number = 0;
	let temp: number = 0;
	for (let i: number = 0; i < num; i++) {
		max += arr[i];
	}
	temp = max;
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max);
	}
	return max;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

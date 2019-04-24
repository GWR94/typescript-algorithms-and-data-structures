function maxSubArray(arr: Array<number>, num: number) {
	/**
	 * If the length of arr is smaller than num, then we should
	 * return null, as it would be impossible to get a subarray
	 * with the length of num.
	 */
	if (num > arr.length) {
		return null;
	}
	/**
	 * Set the max variable to the smallest it can be, so any sum
	 * is larger than it. Set the temp variable to 0 so that the
	 * sum can be added up and compared to the max variable.
	 */
	let max: number = -Infinity;
	let temp: number = 0;
	/**
	 * Loop through the first n (num) numbers and add the index of
	 * i to temp to find the base for the sliding window. Then set
	 * max to temp, as this the current maximum subarray.
	 */
	for (let i = 0; i < num; i++) {
		temp += arr[i];
	}
	max = temp;
	/**
	 * Loop through from num to the length of arr (because num is where
	 * the previous loop stopped), and every time use the previous
	 * value of temp, and subtract the first index of the old subarray
	 * (i - num), and add the next value from the next index (i). Every
	 * time there is an iteration in the loop, the window will be moved
	 * one further up, but the subarray will still stay the size of num.
	 * max is then set to the largest out of temp and max, then returned
	 * after the loop is finished executing.
	 */
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max);
	}
	max;
	return max;
}

maxSubArray([1, 2, 3], 3);

function maxSubArrayQuad(arr: number[], num: number) {
	/**
	 * If the number is larger than the array length, there can be
	 * no subarray that would fit, so return null
	 */
	if (num > arr.length) return null;
	/**
	 * Set max to -Infinity so any sum will always be larger than it
	 */
	let max: number = -Infinity;
	/**
	 * Loop through all elements n (num) times, up to the array length -
	 * num + 1, so the loop doesn't extend past the size of the array to
	 * cause an out of bounds error.
	 */
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp: number = 0;
		/**
		 * Loop through the array and add the number from index j to temp
		 * up until num. This loop will run again every time the above loop
		 * iterates
		 */
		for (let j = 0; j < num; j++) {
			temp += arr[j];
		}
		/**
		 * Set the max variable to be the larger value between temp and max
		 */
		max = Math.max(temp, max);
	}
	/**
	 * Once both loops are completed, return the max value
	 */
	return max;
}

maxSubArrayQuad([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

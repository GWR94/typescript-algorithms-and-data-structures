function sumZero(arr: Array<number>) {
	/**
	 * Set the left variable to 0 (for first index), and set
	 * right to the length of array - 1 (the last index).
	 */
	let left: number = 0;
	let right: number = arr.length - 1;
	/**
	 * Create a while loop that runs while right is larger than
	 * left, because we cannot overlap the variables as we would
	 * be left with a false positive.
	 */
	while (left < right) {
		/**
		 * Add the values of arr with the indices of left and right
		 * and store it in a variable. If it equals 0, then return
		 * the numbers in an array as the operation is complete. If
		 * the sum is larger than 0, we need to add one to right, to
		 * move the index further up the array and therefore making
		 * the sum larger (because the array is sorted). If the sum is
		 * smaller than zero, then we need to subtract one from left,
		 * to make the sum smaller.
		 */

		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
	/**
	 * If there was no sum to equal zero after the loop is finished,
	 * return null.
	 */
	return null;
}

console.log(sumZero([-4, -3, -2, -1, 0, 9, 5, 5, 10]));

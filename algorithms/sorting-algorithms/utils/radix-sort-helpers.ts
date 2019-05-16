function getDigit(num: number, i: number) {
	/**
	 * Returns the digit at the index of i, when i starts from
	 * the last digit on the number
	 */
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number) {
	/**
	 * Returns the amount of numbers in any given number
	 */
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr: number[]) {
	/**
	 * Returns the amount of the largest length of the number in
	 * an array.
	 */
	let max: number = 0;
	for (const num of arr) {
		max = Math.max(max, digitCount(num));
	}
	return max;
}

export { getDigit, digitCount, mostDigits };

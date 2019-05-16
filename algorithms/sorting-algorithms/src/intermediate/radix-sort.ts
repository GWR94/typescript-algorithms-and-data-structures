import { getDigit, mostDigits } from "../../utils/radix-sort-helpers";

export default function radixSortHelper(arr: number[]) {
	const positive: number[] = [];
	const negative: number[] = [];
	for (const num of arr) {
		if (num < 0) {
			negative.push(num);
		} else {
			positive.push(num);
		}
	}
	return radixSort(negative)
		.reverse()
		.concat(radixSort(positive));
}

function radixSort(arr: number[]) {
	/**
	 * Find the number with the largest amount of digits and return
	 * the count, so we know what to loop up until for each number.
	 */
	const max = mostDigits(arr);
	/**
	 * Loop through each number to get each digit from the index at k,
	 * so it can then be pooled into its own "digitBucket" based on the
	 * current digit. k takes the digit at the end of the number, so
	 * if k was 0 and the number was 321, 1 would be the result of
	 * getting the current digit based on k. 5498 would be based on
	 * getting the current digit based on k being 2.
	 */
	for (let k = 0; k < max; k++) {
		/**
		 * Create an array of 10 arrays, so the current digit from
		 * the number is the index of the digitBucket, while the whole
		 * number is pushed to the array. For example, if k was 2, and
		 * the number was 12422, we would push 12422 to digitBuckets[4],
		 * because the current digit is 4 if k is 2.
		 */
		const digitBuckets = Array.from({ length: 10 }, () => []);
		for (const num of arr) {
			const digit = getDigit(num, k);
			/**
			 * push the full number to the digitBuckets array at the index
			 * of digit.
			 */
			digitBuckets[digit].push(num);
		}
		/**
		 * We need to reassign the arr variable to the order of the digitBuckets
		 * arrays, starting for 0 and placing them back in order all the way to 9,
		 * otherwise no order would be changed through each loop. The easiest way
		 * to do this is concatenating the result of spreading the values in
		 * digitBuckets.
		 */
		arr = [].concat(...digitBuckets);
	}
	console.log(arr);
	return arr;
}

radixSort([-20, 74, 22, 11, 1]);

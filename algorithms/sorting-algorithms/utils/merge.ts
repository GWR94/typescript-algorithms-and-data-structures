function merge(arr1: any[], arr2: any[]): any[] {
	/**
	 * Create a const to store the sorted array in, along
	 * with an i and j let to create counters for the checked
	 * indices in each array.
	 */
	const results: any[] = [];
	let i: number = 0;
	let j: number = 0;
	/**
	 * Create a while loop that continues looping until either
	 * i reaches arr1's length, or j reaches arr2's length.
	 */
	while (i < arr1.length && j < arr2.length) {
		/**
		 * If arr1's i index is smaller than arr2's j index,
		 * or arr1's i index is alphabetically ordered before
		 * arr2's j index, then we need push it to the results
		 * array and add 1 to i. If arr2's j index is smaller
		 * than or equal to arr1's i index, then we push it to
		 * the results array and add 1 to j;
		 */
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	/**
	 * If when we break out of the previous while loop by
	 * finishing the end of one array, and there are still
	 * values in the other array, then we need to loop through
	 * the other values and insert them into the results array.
	 * The values will already be sorted.
	 */
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

export default merge;

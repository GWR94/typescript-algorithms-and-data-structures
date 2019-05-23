export default function insertionSort(arr: any[]) {
	/**
	 * We set i to be 1 because we are using 0 to be the
	 * baseline for the sorted array.
	 */
	for (let i = 1; i < arr.length; i++) {
		/**
		 * We need to store the index of i from the arr to
		 * save it for when we find the position of where it
		 * should be once the array is sorted.
		 */
		const current = arr[i];
		/**
		 * We need to do a backwards loop from j being i-1 all
		 * the time that j is larger or equal to zero. We also
		 * only want to loop if the value return from arr in the
		 * index of j is larger than the value in current. The
		 * reason for this is so we break out of the loop if the
		 * value is higher than current so we can place "current"
		 * in its correct index.
		 */
		let j: number;
		for (j = i - 1; j >= 0 && current < arr[j]; j--) {
			/**
			 * If current is a smaller value than the value which
			 * is returned from the index of j in arr, then we need
			 * bring that value forward:
			 */
			arr[j + 1] = arr[j];
		}
		/**
		 * After the loop has finished executing, we have the index
		 * which is the correct place for current to be placed in, so
		 * we do that below. It is j + 1 because we arr using j to
		 * compare the smallest of the 2 values, so j + 1 returns the
		 * correct index as we would want to replace the larger of
		 * the two values.
		 */
		arr[j + 1] = current;
	}
	console.log(arr);
	return arr;
}

insertionSort([6, 3, 2, 1, 111, 25, 45]);

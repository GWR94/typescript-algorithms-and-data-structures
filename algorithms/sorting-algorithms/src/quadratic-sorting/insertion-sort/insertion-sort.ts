/**
 * A sorting function which takes a (possibly) unsorted array, and returns
 * a sorted array.
 * @param arr - the unsorted array which will become sorted.
 */
const insertionSort = (arr: any[]): any[] => {
  /**
   * Create a for loop and begin with index 1, because we are using index 0
   * as the base for the sorted portion. Loop through while i is smaller than
   * arr.length, and add 1 to i through each iteration.
   */
  for (let i = 1; i < arr.length; i++) {
    /**
     * Store the arr's value of index i to a variable, so it can be referenced
     * to other values later to find it's correct position in the array.
     */
    const current = arr[i];
    /**
     * Initialise the j variable outside of the inner loops' scope so it can be
     * referenced after the loop has finished executing.
     */
    let j: number;
    /**
     * Create a second loop which searches all of the values below the index of i
     * (i - 1). It should continue the loop while j is equal to or larger than
     * 0 and arr[j] is larger than the current value.
     */
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      /**
       * If the value after j is greater than j, set the value of j to be j + 1.
       */
      arr[j + 1] = arr[j];
    }
    /**
     * After the loop has finished executing, arr's j+1 index needs to be set
     * to current value because it would have been removed within the arr[j+1] =
     * arr[j] call. All of the preceding values will be sorted correctly.
     */
    arr[j + 1] = current;
  }
  return arr;
};

export default insertionSort;

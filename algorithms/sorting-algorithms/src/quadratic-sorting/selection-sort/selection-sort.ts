import swap from "../../../utils/swap";

/**
 * A selection sort implementation which will take a (possibly) unsorted array,
 * which will be sorted and returned.
 * @param arr - the unsorted array which will be sorted and returned.
 */
export default function selectionSort(arr: any[]): any[] {
  /**
   * Loop through each element in the array until i is equal to arr's length
   */
  for (let i = 0; i < arr.length; i++) {
    /**
     * Initialise the smallest variable to be the i, so it can either be changed or
     * swapped later in the loop.
     */
    let smallest = i;
    /**
     * Create a nested loop which begins at i + 1 and ends when j is equal to arr's
     * length. It's set as i + 1 so i can be compared to all elements passed i. All
     * of the elements before i will already be sorted, so there's no value in iterating
     * through those values.
     */
    for (let j = i + 1; j < arr.length; j++) {
      /**
       * If arr[j] is smaller than arr[smallest], then the smallest value needs to be
       * changed to j.
       */
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    /**
     * If i is different to smallest, then the values need to be swapped.
     */
    if (i !== smallest) {
      swap(arr, i, smallest);
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));

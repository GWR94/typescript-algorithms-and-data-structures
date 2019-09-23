/* eslint-disable @typescript-eslint/no-explicit-any */
import { es5Swap as swap } from "../../../utils/swap";

/**
 * A sorting function which takes an unsorted array as a parameter, and returns
 * a sorted implementation of it.
 * @param arr - the unsorted array, which will be sorted and returned
 */
function bubbleSort(arr: any[]): any[] {
  /**
   * Initialise the variable which will be later used to determine if there has been
   * any swaps in the current iteration of the array.
   */
  let noSwaps;
  /**
   * Loop from the end of the array backwards, so you don't have to unnecessarily
   * loop through all of the sorted values at the end of the array (because the final
   * element through each iteration of the first loop sets one sorted value to the end
   * of the array).
   */
  for (let i = arr.length; i > 0; i--) {
    /**
     * Set the value of noSwaps to be true, so it can be either returned if there were no
     * swaps, or changed to false if there has been swaps.
     */
    noSwaps = true;
    /**
     * Starting from the first element, loop through each element checking to see if current
     * element (arr[j]) is larger than its adjacent element (arr[j+1]`). If it is, then swap
     * the elements. The loop needs to stop when j is equal to i-1, as all elements after this
     * are already sorted so there's no value in continuing.
     */
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    /**
     * If there has been no swaps throughout the entire outer loop, the array must be sorted,
     * so break from the loop.
     */
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2]));

export default bubbleSort;

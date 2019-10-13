// import pivot from "../../../utils/pivot";
import swap from "../../../utils/swap";

/**
 * A function which picks a pivot (first in this case) and places all of the elements
 * which are smaller than the pivot before it, then puts the pivot element in it's
 * correct sorted index, and leaves the other elements in it's natural position.
 * @param arr - the unsorted array which will then be changed to have the first index
 * in it's correct sorted position
 * @param start - the start point for the sub-array to be checked.
 * @param end - the end point for the sub-array to be checked.
 */
function pivot(arr, start = 0, end = arr.length - 1): number {
  /**
   * Store the value of the pivot to a constant for comparisons in the loop.
   */
  const pivot = arr[start];
  /**
   * Create a variable to count how many elements in the (sub)array are smaller than the
   * pivot variable.
   */
  let swapIdx = start;
  /**
   * Loop through from start + 1 (as there's no benefit of searching from the pivot/start),
   * and loop through while end is larger than i.
   */
  for (let i = start + 1; i < end; i++) {
    /**
     * If the i's index of array is smaller than the pivot variable, add 1 to swapIdx as it
     * shows there is one more elements smaller than pivot, then swap the value of i with swapIdx
     * as this will eventually mean the elements to the left of pivot are all smaller than it.
     */
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  /**
   * Finally, swap the starting value with the swapIdx, so that the pivot is in its correct sorted
   * spot in the full array, and return the swapIdx quickSort so it can recursively run quickSort
   * on the left and right sub-arrays either side of the pivot.
   */
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
 * A sorting function which takes a (possibly) unsorted array, and returns a sorted array using the
 * quick sort algorithm.
 * @param arr - the full unsorted array which will be sorted and return
 * @param left - the start point of the subarray which will be changed based on the pivot index and
 * the recursive quickSort calls.
 * @param right - the end point of the subarray which will be changed based on the pivot index and
 * recursive quickSort calls.
 */
export default function quickSort(arr, left = 0, right = arr.length - 1): any[] {
  /**
   * Get the pivot index from the pivot helper function, which will also place all of the elements
   * smaller than the pivot to the left, and larger elements to the right.
   */
  const pivotIdx = pivot(arr, left, right);
  /**
   * If left is the same as right, that must mean that the sub-arrays length is 0 or 1, so keep
   * recursively calling quickSort until the base case is met (left is the same as right).
   */
  if (left < right) {
    /**
     * Call quickSort on all of the elements from the left variable until the element before pivot.
     */
    quickSort(arr, left, pivotIdx - 1);
    /**
     * Call quickSort on all of the elements from the pivot + 1 until the right variable.
     */
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

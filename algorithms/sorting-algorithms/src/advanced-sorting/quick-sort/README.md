# Quick Sort

Much like merge sort, quick sort exploits the fact that arrays with a length of zero
or one are always sorted.

It works by selecting one element (called the pivot), and finding the index where the
pivot should end up in the sorted array. Once the pivot is positioned appropriately,
quick sort can be applied on either side of the pivot.

## How does it work?
If we had an array to sort (`[5,2,1,8,4,7,6,3]`), we need to take an element as a pivot -
index 0 in this case (`5`). All of the sub-arrays are created from the left and right
variables inside the quickSort function, so when the arrays are split into smaller sub-arrays
it doesn't actually split them physically, it does all of the modifications in place.

We then place all of the elements which are smaller to the left and place the chosen index
where it should be in sorted array; with the other elements in another sub-array. So what's
left after this `[3,2,1,4]`, `[5]` & `[7,6,8]`.

The process needs to be completed again, so we take the first element from the left sub-array
(`3`), and move all the elements smaller than it to the left, and put the chosen element in its 
correct index. The left array would now be `[2,1]`, and the right sub-array is `[4]`, so nothing
more needs to be done to it. The original "left" side is now `[2, 1]`, `[3]`, `[4]`

The process is completed again on the `[2,1]` sub-array, which then returns two 1 elements arrays
of `[1]` and `[2]`, so the original left side is now all one element arrays - `[1]`, `[2]`, `[3]`,
`[4]`, with the original pivot after of `[5]`.

The right side (`[7,6,8]`) needs to be sorted now, so the pivot is taken (`7`), and the elements
which is smaller than it are placed to the left - which is only one element (`6`), and the elements to the right
are moved to the right, which is also only one element (`8`). There are now 3 individual arrays.
The whole array is now sorted and can be returned.

## Pivot Helper Method

Before you can implement quickSort it's best to create a pivot helper, which will place
the pivot (first element) in its correct spot, and move all of the elements smaller to the
left of the pivot, and the larger elements will be kept to the right.

```typescript
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
```

## Merge Sort Implementation

```typescript

/**
 * A sorting function which takes a (possibly) unsorted array, and returns a sorted array using the
 * quick sort algorithm.
 * @param arr - the full unsorted array which will be sorted and return
 * @param left - the start point of the subarray which will be changed based on the pivot index and
 * the recursive quickSort calls.
 * @param right - the end point of the subarray which will be changed based on the pivot index and
 * recursive quickSort calls.
 */
function quickSort(arr, left = 0, right = arr.length - 1): any[] {
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
```

## Big O of Quick Sort

The best and average case for quick sort is $O(n^{log_n})$, however the worst case is 
$O(n^2)$/quadratic time complexity. The worst case for the *current* implementation of quick sort would be if
the input array was already sorted. This would mean that through every decomposition
we would be going through each **all** of the elements to check any are smaller
values, even though there are none. This would have to be done through every element, thus
making it quadratic time complexity.

### Why $O(n ^{log_n})$?
If there was an array of 8 elements, then it would take 3 operations until all sub-arrays
are of 0 or 1 length. If there was an array of 32 elements, it would have to do 5
decompositions until the sub-arrays are of 0 or 1 length. This relationship relates to
$O(^{log_n})$, because this is saying 2 to the power of what makes n. For 8, it's 3; for 32
its 5.

The first $n$ from $O(n^{log_n})$ comes from the fact that we have to do $O(n)$ comparisons
per decomposition. If we have an array of 8 elements, every time the
function is executed, all 8 elements will eventually be checked. No matter the size of the 
array, all of the elements need to be compared. 
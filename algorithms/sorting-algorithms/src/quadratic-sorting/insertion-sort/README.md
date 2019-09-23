# Insertion Sort

Insertion sort is a sorting algorithm which works by building up the sort by gradually creating
a larger left portion, which is always sorted. An example follows with an original unsorted array
of `[5, 3, 4, 1, 2]`.

Through the first iteration we are testing to see where the second value goes compared to the first.
`3` is obviously smaller than `5` so the array is changed to `[3, 5, 4, 1, 2]`. Through
the second iteration you need to find out where `4` should go in the array. `4` is larger
than `3` and smaller then `5`, so it must go in between them to make the new array
`[3, 4, 5, 1, 2]`. The next number to check is `1`, which obviously goes at the start of the
array, and then `2` is set to second value. The end result is `[1, 2, 3, 4, 5]`.

## Implementation

```typescript
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
```

## Big O of Insertion Sort

The worst (and average) case scenario for insertion sort is quadratic / $O(n^2)$ time complexity,
because of the nested loops it's essentially n * n operations, where n is the length of the array.
The best case scenario is linear / $O(n)$ time complexity, which will occur if there is only one or
zero changes to be made in the array.

Insertion sort can excel in online algorithms. Online algorithms are algorithms that work as it
receives data (it doesn't have to have the full array at once). Insertion sort also works
fairly well with an almost sorted data set.
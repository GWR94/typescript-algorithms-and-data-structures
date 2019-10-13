# Merge Sort

Merge sort, like the name suggests, is a combination of two things - merging and sorting.
It exploits the fact that arrays with a length or zero or one will always be sorted. It works
by decomposing an array into smaller arrays of zero or one elements, then building up a newly
sorted array, in a divide and conquer approach:

Starting array: `[8, 3, 5, 4, 7, 6, 1, 2]`

**Splitting**
1. `[8, 3, 5, 4]`, `[7, 6, 1, 2]`
2. `[8, 3]`, `[5, 4]`, `[7, 6]`, `[1, 2]`
3. `[8]`, `[3]`, `[5]`, `[4]`, `[7]`, `[6]`, `[1]`, `[2]`

**Merging**
1. `[3, 8]`, `[4, 5]`, `[6, 7]`, `[1, 2]`
2. `[3, 4, 5, 8]`, `[1, 2, 6, 7]`
3. `[1, 2, 3, 4, 5, 6, 7, 8]`

In order to implement merge sort it can be useful to create a helper function which
returns a single merged sorted array from two sorted arrays. The function should run
in $O(n + m)$ time **and** space complexity, where n is the length of the first array,
and m is the the length of the second array. The function should not alter the
parameters passed to it, it should return a newly created array.

## Implementing `merge()`
```typescript
/**
 * A helper function for mergeSort() which merges two sorted arrays into
 * one larger sorted array
 * @param arr1 - a sorted array to be merged with arr2.
 * @param arr2 - a sorted array to be merged with arr1.
 */
const merge = (arr1, arr2): any[] => {
  /**
   * Initiate an array to contain the newly sorted values in.
   */
  const res = [];
  /**
   * Initiate values i and j to zero to keep track of how many elements have
   * been pushed in from each array. i will count how many values have been
   * pushed from arr1, and j will count how many values have been pushed from
   * arr2.
   */
  let i = 0;
  let j = 0;
  /**
   * Loop while i is smaller than arr1.length and j is smaller than
   * arr2.length
   */
  while (i < arr1.length && j < arr2.length) {
    /**
     * If the value of index i in arr1 is larger than the value of index j
     * in arr2, push arr1[i] to the res array, and add 1 to i.
     */
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      /**
       * Else push the arr2[j] into the res array, and add 1 to j.
       */
      res.push(arr2[j]);
      j++;
    }
  }
  /**
   * Push the remaining values into the array if there are any
   */
  while (i !== arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j !== arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};
```

## Implementing `mergeSort()`
```typescript
const mergeSort = (arr): any[] => {
  /**
   * Base case - if the arrays length is 1 or 0, it must be sorted, so
   * return the array
   */
  if (arr.length <= 1) return arr;
  /**
   * Store the middle index of the array in a variable so we can create
   * left and right portions of the array to recursively run mergeSort()
   * on.
   */
  const mid = arr.length / 2;
  /**
   * Split the array in half, and run mergeSort on the left and right until
   * the base case is met.
   */
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  /**
   * Use the merge function defined earlier to merge each of the mergeSort
   * instances until the call stack is empty, and one fully merged and sorted
   * array is returned.
   */
  return merge(left, right);
};

console.log(mergeSort([9, 4, 5, 6, 1, 2, 3, 8, 7]));
```

## Big O of Merge Sort

The best, worst and average case for mergeSort is $O(n ^{\log_n})$. Unlike all of the
quadratic algorithms, there are no edge cases which affect different scenarios. Whatever
happens, the algorithm will always split the array into two halved sub-arrays until all of
the arrays are of 0 or 1 length.

The space complexity for `mergeSort()` is $O(n)$/ linear space complexity, because the size
of the array directly effects the amount of smaller sub-arrays that need to be created. This
means that the space complexity must be linear, rather than const as all of the previous
sorting algorithms have been.


### Why $O(n ^{log_n})$?

If there was an array of 8 elements, then it would take 3 operations until all sub-arrays
are of 0 or 1 length. If there was an array of 32 elements, it would have to do 5
decompositions until the sub-arrays are of 0 or 1 length. This relationship relates to
$O(^{log_n})$, because this is saying 2 to the power of what makes n. For 8, it's 3; for 32
its 5.

The first $n$ from $O(n^{log_n})$ comes from the fact that we have to do $O(n)$ comparisons
per decomposition - when we do the merge. If we have an array of 8 elements, every time the
function is executed, all 8 elements will eventually be checked. No matter the size of the 
array, all of the elements need to be compared. 

$O(n^{log_n})$ is the best general time complexity for sorting algorithms, baring special
requirements for things like radix sort.

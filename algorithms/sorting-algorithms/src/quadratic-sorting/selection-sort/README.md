# Selection Sort

Selection sort is similar to bubble sort, however instead of first placing large values
into sorted positions, it places the smallest value into its sorted position.

For example, if the input array was `[5, 3, 4, 1, 2]`, then through the first round
we would be swapping index 0 with index 3 as 1 is the smallest value in the array, so
should therefore be swapped with the first element (5). The array is now `[1, 3, 4, 5, 2]`.

Through the second iteration of the loop, 2 is the smallest value at index 4, and the 
current value of i would be index 1 (3). Once these values are swapped `[1, 2, 4, 5, 3]` 
would be the current array.

The third iteration of the loop shows that the smallest value in the array is 3, at index
4, and the value of `arr[i]` is now 4. Once these values are swapped the current array is 
`[1, 2, 3, 5, 4]`.

In the final iteration of the loop there are only two values to check, the smallest is 4
(which is found at index 4), and the current value of i is 3, so `arr[i]` is 5. Once these
values are swapped the fully sorted array can be returned: `[1, 2, 3, 4, 5]`.

```typescript
/**
 * A selection sort implementation which will take a (possibly) unsorted array,
 * which will be sorted and returned.
 * @param arr - the unsorted array which will be sorted and returned.
 */
function selectionSort(arr): any[] {
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

console.log(selectionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
```

## Big O of Selection Sort

The worst & average "Big O" of selection sort is the same as bubble sort & insertion sort - quadratic / $O(n^2)$ time
complexity, due to the nested loops which are involved to achieve a sorted array. The only difference with
selection sort is that the best case scenario is quadratic time complexity too.

Insertion sort runs especially poorly when sorting an almost sorted data set, due to it
having to check all of the elements to find the smallest, then swapping, and repeating.
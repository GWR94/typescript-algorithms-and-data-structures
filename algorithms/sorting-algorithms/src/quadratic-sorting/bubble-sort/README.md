# Bubble Sort

Bubble sort is one of the simplest sorting algorithms. It works by repeatedly swapping
the adjacent elements if they are in the wrong order. It is one of the least efficient
methods of sorting, because you have to go through each of the values in the array multiple
times before, inside multiple loops to gain a sorted array. Bubble sort works by "bubbling up"
the largest value to the end of the array. 

Through the first iteration of a loop in bubble sort you get one completely sorted value.
For example, if input an array of `[5, 3, 4, 2, 1]`, then these changes will occur:
1. `[*5*, *3*, 4, 2, 1]` - 5 is larger than 3, so the values are swapped.
2. `[3, *5*, *4*, 2, 1]` - 5 is larger than 4, so the values are swapped.
3. `[3, 4, *5*, *2*, 1]` - 5 is larger than 2, so the values are swapped.
4. `[3, 4, 2, *5*, *1*]` - 5 is larger than 1, so the values are swapped.

After the first loop of `bubbleSort()`, we now have an array with **one** sorted element -
the last one (5). The current array is now `[3, 4, 2, 1, 5]`.

## Swapping

To swap the two elements in the array, the easiest (and most legible) way is to create
a helper function to swap these two elements, and return the modified array. Swapping
can be achieved through ES5 or ES6+ methods:

**ES5**
```typescript
/**
 * ES6 way of swapping the indices of idx1 and idx2, then
 * returning it.
 */
const swap = (arr: any[], idx1: number, idx2: number): void => {
  /**
   * swaps the values and returns the modified array.
   */
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

**ES6+**
```typescript
/**
 * ES5 way of swapping the indices of idx1 and idx2, then
 * returning it
 */
function es5Swap(arr: any[], idx1: number, idx2: number): any[] {
  const temp = arr[idx1]; // store arr's value of idx1 into a variable to use later
  arr[idx1] = arr[idx2]; // set arr's idx1 value to be arr's idx2 value
  arr[idx2] = temp; // set arr's idx2 value to be the temp value created earlier.
  return arr;
}
```

Once there is a functioning `swap` method, a bubble sort function can be created. There
are a couple of ways to implement a bubble sort function, however one can be considerably
more efficient by just changing a few things from one to another:

**Naive Bubble Sort**
```typescript
function naiveBubbleSort(arr: number[]): number[] {
  /**
   * Loop though every element until i is the same as arr.length
   */
  for(let i = 0; i < arr.length; i++) {
    /**
     * Check each individual element from 0 until j is the same as arr.length
     */
    for(let j = 0; j < arr.length; j++) {
      /**
       * If arr[j] is larger than arr[j+1], swap the values.
       */
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

console.log(bubbleSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
```

Although this is a working bubble sort implementation, it isn't optimised to the best
it can be. The reason for this is that the inner loop is looping through to the end of
the array, rather than what is necessary. To resolve this you can reverse the outer loop
(so it loops from the end to the start of the array), then changing the inner loop to be
run up until `j` is equal to `i - 1` - because anything from `i` onwards will definitely 
be sorted, and we need it to be `i - 1` so we can compare `j` with `j + 1`, to avoid comparing
with an undefined value.

Another possible further optimisation that can be made is checking to see if there has been
any swaps in the loop, because if there hasn't been any swaps then there is no reason to 
continue with the sorting, as it will obviously be sorted already. An example where this would
be particularly useful would be if we had an array like `[8, 1, 2, 3, 4, 5, 6 , 7]`. If we
used the "naive" solution, then after the first iteration of loop, the array would be sorted,
however it wouldn't stop the function and would needlessly loop through all of the other values
in the array, even though it's already sorted.

To avoid this, a boolean can be created to determine if there has been any swaps during any
one iteration. It should be set to true before every loop iteration, and will change to false
if there are any changes. After every **outer** loop iteration, we should break the loop if the
value is true.

**Optimised Bubble Sort**
```typescript
/**
 * A sorting function which takes an unsorted array as a parameter, and returns
 * a sorted implementation of it.
 * @param arr - the unsorted array, which will be sorted and returned
 */
function bubbleSort(arr: number[]): number[] {
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

console.log(bubbleSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
```

## Big O of Bubble Sort

The best case scenario (though unlikely) is linear / $O(n)$ time complexity. This will
occur when the sort is completed through one iteration of the loop. The average time
complexity is quadratic / $O(n^2)$, as there are nested loops, which would essentially
mean we have to run n * n computations to get a result.

Bubble sort performs well when you have a data set that is *almost* sorted. It doesn't
perform particularly well through many other data sets.
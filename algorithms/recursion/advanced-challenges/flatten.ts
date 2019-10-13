/**
 * A recursive function which transforms one input array (arr) with an unknown amount of
 * nested arrays into one single array and returns it.
 * @param arr - the input array which may contain nested arrays which need to be flattened.
 */
function flatten1(arr: any[]): any[] {
  if (arr.length === 0) return arr; // base case - if array is empty, return it.
  let flat = []; // initialise array to place flattened arrays in.
  if (Array.isArray(arr[0])) {
    // if the first value arr is an array, flatten it by executing flatten() on that sub-array
    flat = flat.concat(flatten1(arr[0]));
  } else {
    // if it's just a value, push it into the array.
    flat.push(arr[0]);
  }
  /**
   * remove the first element, as it's been pushed into the flat array, and
   * continue through the rest of the array until the base case is met (arr is empty).
   */
  flat = flat.concat(flatten1(arr.slice(1)));
  return flat;
}

/**
 * A recursive function which flattens nested arrays and returns one flattened array. Using
 * a for loop to iterate through the items this time, although recursion is still used to
 * flatten arrays when needed.
 * @param arr - the input array which may contain nested arrays which need to be flattened
 */
function flatten2(arr: any[]): any[] {
  let flat = []; // initialise flat array to contain all flattened values.
  // loop through all elements
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      /**
       * if the current iteration is an array, run flatten() on that array to flatten it,
       * and set the flat array to be the concatenation of the result of flatten with flat
       */
      flat = flat.concat(flatten2(arr[i]));
    } else {
      // if the current value is not an array, push it to the flat array
      flat.push(arr[i]);
    }
  }
  return flat;
}

function flatten3(arr: any[]): any[] {
  /**
   * @param flat - the array to push flattened values into
   * @param toFlatten - the current value in the array
   */
  return arr.reduce((flat, toFlatten): any[] => {
    /**
     * Concatenate the result of the ternary operator to flat. If toFlatten is an
     * array, then run flatten() to get the flattened values from it. If its
     * not an array, just return toFlatten to concat it to the flat array.
     * An empty array at the end of the reduce function is used to set the initial
     * value to [].
     */
    return flat.concat(Array.isArray(toFlatten) ? flatten3(toFlatten) : toFlatten);
  }, []);
}
console.log(
  flatten1([[1], 2, 3, [4, [5]]]), // [1, 2, 3, 4, 5]
  flatten2([[1], 2, 3, [4, [5]]]), // [1, 2, 3, 4, 5]
  flatten3([[1], 2, 3, [4, [5]]]), // [1, 2, 3, 4, 5]
);

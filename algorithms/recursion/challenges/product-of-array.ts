/**
 * A recursive function that returns the total sum of all
 * numbers in the array.
 * @param arr - Numeric array to add all values from.
 */
export function productOfArray(arr: number[], sum = 0): number {
  /**
   * If an incorrect value is input (null or undefined), return null.
   */
  if (!arr) return null;
  /**
   * Base case - if the array is empty, return the sum
   */
  if (arr.length === 0) return sum;
  /**
   * Add the first number in the array to sum
   */
  sum += arr[0];
  /**
   * Remove the first element and run productOfArray() on it
   * until the base case is met (arr is empty).
   */
  sum = productOfArray(arr.slice(1), sum);
  return sum;
}

console.log(productOfArray([1, 2, 3, 4, 5]));

/**
 * An iterative function which adds all of the values in the input array and
 * returns it.
 * @param arr - the numeric array which values will be combined to return
 * the sum
 */
export function productOfArrayIterative(arr: number[]): number {
  /**
   * Check for invalid inputs such as undefined and null, return null if true.
   */
  if (!arr) return null;
  /**
   * Initialise the sum variable to accumulate all of the additions in the
   * loop.
   */
  let sum = 0;
  /**
   * Loop through each element in the array
   */
  for (const num of arr) {
    /**
     * Add the current value to the sum variable through each iteration
     */
    sum += num;
  }
  return sum;
}

/**
 * Recursive function which creates an array from the numbers in between the min
 * and max values.
 * @param min - the minimum value for the range, i.e. if min is 3, the returned
 * range would begin at 4.
 * @param max - the maximum value for the range, i.e if max is 9, then the array
 * would end at 8.
 */
export function range(min: number, max: number): number[] {
  /**
   * Catch unwanted errors
   */
  if ((min !== 0 && !min) || (max !== 0 && !max) || min >= max) {
    return null;
  }
  /**
   * initialise an array to place the range into.
   */
  let arr = [];
  /**
   * Base case - when min is equal to max - 1, return the array.
   */
  if (min === max - 1) return arr;
  /**
   * Push the value of min + 1 into the array.
   */
  arr.push(min + 1);
  /**
   * Concatenate the results of range being run on all numbers up until max
   * until the base case is met (min is max - 1).
   */
  arr = arr.concat(range(min + 1, max));
  return arr;
}
console.log(range(1, 8));

/**
 * An iterative function which returns an array of numbers in between the
 * min and max values.
 * @param min - the start point of the range
 * @param max - the end point of the range
 */
export function rangeIterative(min: number, max: number): number[] {
  /**
   * Check for invalid inputs such as null or undefined, and check if min
   * is greater or equal to min, and return null if any of the cases are
   * true.
   */
  if (min >= max || (!min && min !== 0) || (!max && max !== 0)) return null;
  /**
   * Initialise an array to contain the values of the range
   */
  const arr: number[] = [];
  /**
   * Loop through each number, starting from min + 1, until i is equal to
   * max, and add 1 to i through each iteration.
   */
  for (let i = min + 1; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(rangeIterative(1, 8));

/**
 * A recursive function which adds up all the numbers in a sequence from 0
 * to n, where n is the num value input into the function.
 * @param num - the final number in the range which will be added to previous
 * numbers. i.e if num is 5, 1 + 2 + 3 + 4 + 5 will be added together to return
 * the result.
 */
export function sumRange(num: number): number {
  /**
   * Check for invalid input, such as a negative number, or null or undefined.
   * Return null if any of the conditions are met.
   */
  if (num < 0 || (num !== 0 && !num)) {
    return null;
  }
  /**
   * Base case - if num is zero, all addition is completed, so return num.
   */
  if (num === 0) {
    return num;
  }
  /**
   * Start at the original num, and recursively add the result of num +
   * sumRange(num-1) until the base case is met (num is zero).
   */
  return num + sumRange(num - 1);
}

console.log(sumRange(6));

/**
 * An iterative function which adds all of the numbers in a sequence from
 * 0 to n, where n is the input value (num) in the function.
 * @param num - the maximum number in the range from 0 to num.
 */
export function sumRangeIterative(num: number): number {
  if (!num || num <= 0) {
    return null;
  }
  /**
   * Initialise a variable to store the current value of the sum of the
   * values in the array
   */
  let sum = 0;
  /**
   * Start the loop at 0 and iterate through while num is greater or equal
   * to i.
   */
  for (let i = 0; i <= num; i++) {
    /**
     * Add the current value of the loop (i) to sum
     */
    sum += i;
  }
  return sum;
}

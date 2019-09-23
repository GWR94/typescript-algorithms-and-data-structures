/**
 * A function which returns the nth fibonacci number, where n is the input parameter
 * (num).
 * @param num - the fibonacci number to return from the series.
 */
export function fibonacci(num: number): number {
  /**
   * Check for invalid inputs, i.e null or undefined, and return null if one is
   * present.
   */
  if (num < 0 || (!num && num !== 0)) {
    return null;
  }
  /**
   * Base case - if num is less or equal to 2 and greater or equal to zero, return 1
   * because the fib(2), fib(1) and fib(0) are all equal to 1.
   */
  if (num <= 2 && num >= 0) {
    return 1;
  }
  // different inputs. fibonacci numbers are numbers which add the two previous values.
  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(0));

export function fibonacciIterative(num: number): number {
  if ((!num && num !== 0) || num < 0) {
    return null;
  }
  /**
   * Initialise an array with the first two fibonacci numbers included.
   */
  const arr: number[] = [0, 1];
  /**
   * Start the for loop at 2, because the first two numbers are already set
   * in the array. Iterate through until i is greater than num + 1, so we can
   * still have access to arr[i-1] and arr[i-2] in the loop, and increment by
   * 1 each time.
   */
  for (let i = 2; i < num + 1; i++) {
    /**
     * Push the value of arr[i-2] + arr[i-1] into the end of the array
     */
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  /**
   * Return the number at index num.
   */
  return arr[num];
}

console.log(fibonacciIterative(1));

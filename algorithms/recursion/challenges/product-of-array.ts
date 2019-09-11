/**
 * A recursive function that returns the total sum of all
 * numbers in the array.
 * @param arr - Numeric array to add all values from.
 */
export default function productOfArray(arr: number[], sum = 0): number {
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

/**
 * A recursive function which capitalises the first letter in of each string in the
 * given arr array.
 * @param arr - the array which will contain string to transform.
 */
function capitaliseFirst(arr: string[]): string[] {
  /**
   * Base case - if the array is empty, return it.
   */
  if (arr.length === 0) {
    return arr;
  }
  /**
   * Initialise empty array to store the capitalised strings in.
   */
  const res = [];
  /**
   * Push the string with the first letter capitalised, and the rest of the string
   * as normal to the res array.
   */
  res.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  /**
   * Concatenate the result of capitaliseFirst() on all items in the array by removing
   * the first element from the array until the base case is met (arr is empty).
   */
  return res.concat(capitaliseFirst(arr.slice(1)));
}

console.log(capitaliseFirst(["hello", "abc"]));

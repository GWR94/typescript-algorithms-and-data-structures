/**
 * A recursive function which capitalises the first letter in of each string in the
 * given arr array.
 * @param arr - the array which will contain string to transform.
 */
export function capitaliseFirst(arr: string[]): string[] {
  /**
   * Check for incorrect values and return null if one is present.
   */
  if (!arr) return null;
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
   * Create a variable to store the current string in.
   */
  const current = arr[0];
  /**
   * If the first letter of the string is not a number, return null as it cannot
   * be capitalised.
   */
  if (!current[0].match(/[a-zA-Z]/)) {
    return null;
  }
  /**
   * Push the current string with the first letter capitalised, and the rest of the string
   * as normal to the res array.
   */
  res.push(current[0].toUpperCase() + current.slice(1));
  /**
   * Concatenate the result of capitaliseFirst() on all items in the array by removing
   * the first element from the array until the base case is met (arr is empty).
   */
  return res.concat(capitaliseFirst(arr.slice(1)));
}

/**
 * An iterative function which takes an array of strings and returns a new array
 * with the same values but the first letter on the string is capitalised.
 * @param arr - the array of strings which is going to have it's first letter
 * capitalised.
 */
export function capitaliseFirstIterative(arr: string[]): string[] {
  /**
   * Catch unwanted values such as undefined or null
   */
  if (!arr) {
    return null;
  }
  /**
   * Initialise an empty array to store the capitalised strings in.
   */
  const res: string[] = [];
  /**
   * Loop through all strings in the array
   */
  for (const string of arr) {
    if (!string[0].match(/[a-zA-Z]/)) {
      return null;
    }
    /**
     * Capitalise the first letter in the current string, and concatenate it with
     * the rest of the string. Push the result into the res array.
     */
    res.push(string[0].toUpperCase() + string.slice(1));
  }
  return res;
}

console.log(capitaliseFirstIterative(["hello", "abc"]));

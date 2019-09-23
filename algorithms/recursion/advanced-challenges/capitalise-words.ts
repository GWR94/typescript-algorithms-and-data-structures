/**
 * A recursive function which takes an array of string as a parameter, and transforms
 * the strings into all upper case, and returns it.
 * @param arr - the array of string which are going to be transformed into upper case
 */
export function capitaliseWords(arr: string[]): string[] {
  /**
   * Initalise an array to store the capitalised strings in
   */
  const caps: string[] = [];
  /**
   * Check for unwanted inputs such as null or undefined
   */
  if (!arr) {
    return null;
  }
  /**
   * Base case - if the array is empty, return it.
   */
  if (arr.length === 0) {
    return arr;
  }
  /**
   * Push the capitalised string to the caps array so it can be returned later
   */
  caps.push(arr[0].toUpperCase());
  /**
   * concatenate the result of capitaliseWords() with arr.slice(1), so it removes the
   * first element, and continues executing capitaliseWords() on all elements until the
   * base case is met (arr is empty).
   */
  return caps.concat(capitaliseWords(arr.slice(1)));
}
console.log(capitaliseWords(["test", "caps", "words"])); // ["TEST", "CAPS", "WORDS"]

/**
 * An iterative function which returns an array of capitalised strings from a (possibly)
 * lower case array of strings from the input (arr).
 * @param arr - the array of (possibly) lower case strings
 */
export function capitaliseWordsIterative(arr: string[]): string[] {
  /**
   * Check for invalid inputs, such as undefined or null, and return null if one is
   * present.
   */
  if (!arr) {
    return null;
  }
  /**
   * Initialise array to contain the capitalised strings.
   */
  const caps: string[] = [];
  /**
   * Loop through all strings in the array.
   */
  for (const string of arr) {
    /**
     * Push the capitalised strings to the caps array
     */
    caps.push(string.toUpperCase());
  }
  return caps;
}

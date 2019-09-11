/**
 * A recursive function which takes an array of string as a parameter, and transforms
 * the strings into all upper case, and returns it.
 * @param arr - the array of string which are going to be transformed into upper case
 */
function capitaliseWords(arr: string[]): string[] {
  /**
   * Initalise an array to store the capitalised strings in
   */
  const caps = [];
  if (arr.length === 0) {
    /**
     * Base case - if the array is empty, return it.
     */
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

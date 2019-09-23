/**
 * A recursive function to check if the input string parameter is a palindrome.
 * A palindrome is where a word is exactly the same letters from front-to-back
 * and back-to-front.
 * @param str - the string to check and see if it's a palindrome
 */
function isPalindrome(str: string): boolean {
  /**
   * Remove all non-word characters from the string, such as punctuation and/or
   * whitespace.
   */
  str = str.toLowerCase().replace(/[\W]/g, "");
  /**
   * If the first letter doesn't match the last element in the string,
   * then the string obviously isn't a palindrome, so return false
   */
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
  /**
   * Base case - if the string has a length of 1 or 0 then it must be
   * a palindrome as all of the other letters must have been matched as
   * the same.
   */
  if (str.length <= 1) return true;
  /**
   * Remove the first and last letters of the string into isPalindrome until
   * the base case is met, or we know it's not a palindrome.
   */
  return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("sabcddcbas"));

function isPalindromeIterative(str: string): boolean {
  /**
   * Remove all non-word characters from the string, such as punctuation and/or
   * whitespace.
   */
  const s = str.toLowerCase().replace(/[\W_]/g, "");
  /**
   * Place s into an array using the spread (...) operator, reverse it, and join
   * it back together with join(""). If the strings are the same, then str is a
   * palindrome, so true will be returned. If it's different, then str is not
   * a palindrome, so it will return false.
   */
  return s === [...s].reverse().join("");
}

console.log(isPalindromeIterative("race!! car!!???"));

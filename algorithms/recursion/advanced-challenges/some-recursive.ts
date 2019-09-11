/**
 * A recursive function which takes an array to check, and a function to execute on each
 * item in the array. If any one of the function calls return true, then the function will
 * return true, otherwise it will return false.
 * @param arr - the array to run the function (fun) on.
 * @param func - the function to execute on each element in arr, must return boolean
 */
function someRecursive(arr: any[], func: Function): boolean {
  /**
   * Base case - if array is empty, return false as all other elements (if present)
   * have no returned true from running func on it.
   */
  if (arr.length === 0) return false;
  /**
   * if the first item in arr returns true when executed in function, return true
   */
  if (func(arr[0])) return true;
  /**
   * Remove the first element in the array, and run someRecursive() on the rest
   * until either the func returns true once, or the base case is met (the array
   * is empty).
   */
  return someRecursive(arr.slice(1), func);
}

const isOdd = (num): boolean => {
  return num % 2 !== 0;
};

const isEven = (num): boolean => {
  return num % 2 === 0;
};

const isPrime = (num): boolean => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

console.log(
  someRecursive([2, 4, 6], isOdd), // false - no odd numbers
  someRecursive([2, 4, 6], isEven), // true - all numbers even
  someRecursive([1, 3, 4], isEven), // true - 4 is even
  someRecursive([1, 2, 4, 6], isOdd), // true 1 is odd
  someRecursive([1, 2, 4, 6, 7], isPrime), // true - 7 is prime
);

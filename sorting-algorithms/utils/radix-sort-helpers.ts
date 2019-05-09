function getDigit(num: number, i: number) {
  /**
   * Returns the digit at the index of i, when i starts from
   * the last digit on the number
   */
  const arr = num.toString().split("");
  return arr[arr.length - 1 - i] || 0;
}

function digitCount(num: number) {
  /**
   * Returns the amount of numbers in any given number
   */
  return num.toString().split("").length;
}

function mostDigits(arr: number[]) {
  /**
   * Returns the amount of the largest length of the number in
   * an array.
   */
  let max: number = 0;
  for (const num of arr) {
    max = Math.max(max, digitCount(num));
  }
  return max;
}

export { getDigit, digitCount, mostDigits };


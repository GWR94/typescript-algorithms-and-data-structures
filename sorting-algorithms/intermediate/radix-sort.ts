import { mostDigits, getDigit } from "../utils/radix-sort-helpers";

/**
 * 
 * @param arr 
 */
function radixSort(arr: number[]) {
  /**
   * Find the number with the largest amount of digits, so we
   * know what to loop through for each number.
   */
  const max = mostDigits(arr);
  /**
   * Loop through each number to get each digit from it so it
   * can then be pooled into its own "digitBucket" based on the
   * current digit, from 0-9. k takes the digit at the end of the
   * number, so if k was 0 and the number was 321, 1 would be the
   * result of getting the current digit based on k. 5498 would be
   * 4 based on getting the current digit based on k being 2.
   */
  for (let k = 0; k < max; k++) {
      /**
       * Create an array of 10 arrays, so the current digit from
       * the number is the index of the digitBucket, while the whole
       * number is pushed to the array. For example, if k was 2, and 
       * the number was 12422, we would push 12422 to digitBuckets[4],
       * because the current digit is 4 if k is 2.
       */
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let num = getDigit(arr[i], k);
      digitBuckets[num].push(arr[i]);
    }
    /**
     * We need to reassign the arr variable to the order of the digitBuckets
     * array, otherwise no order would be changed through each loop. The 
     * easiest way to do this is concatenating the result of spreading the
     * values in digitBuckets.  
     */
    arr = [].concat(...digitBuckets);
  }
  console.log(arr);
  return arr;
}

radixSort([123, 22, 44, 555, 2112, 4112, 222, 125, 1, 23]);

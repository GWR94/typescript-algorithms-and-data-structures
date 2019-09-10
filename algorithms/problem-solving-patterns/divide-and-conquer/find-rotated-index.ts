/**
 * A function which accepts a rotated array of sorted numbers and an integer to
 * find in the array. The function should return an index of the integer in the
 * array. If the value is not found, return -1.
 * @param arr: sorted array, which has been rotated an unknown amount of times
 * @param num: the value to find the index of in arr.
 */
function findRotatedIndexIterative(arr, num): number {
  let min = 0;
  let max = arr.length - 1;
  /**
   * If the first or last item in the array is the value that needs to be found,
   * return the index.
   */
  while (min <= max) {
    /**
     * Create a variable called mid and store the value of the min value + max value
     * divided by 2. If that value is the target num, then return the index (min value).
     */
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === num) return mid;
    /**
     * if the value of the index of mid is greater or equal to the value of the
     * min index, then the values from min to mid must be sorted, so you can try
     * and find num in that sub array.
     */
    if (arr[mid] <= arr[max]) {
      /**
       * If the value at index max of arr is larger or equal to the value at index
       * mid, then the right side of the array is sorted, so you try and find the
       * value in this sub-array.
       */
      if (num < arr[mid] || num > arr[max]) {
        /**
         * If the value at index mid of arr is larger than the target number, or the
         * target number is larger than the index max or arr, then the max value needs
         * to have 1 taken from it to search the smaller left sub-array on the next
         * iteration of the while loop (from min to mid - 1).
         */
        max = mid - 1;
      } else {
        /**
         * If the else block is triggered, it means the target num is smaller than the
         * value of index mid of arr, or the target num is larger than the value of index
         * max in arr. This means that the value of min should be set to mid + 1, so the
         * sub-array from mid + 1 to max can be be searched on the next iteration of the
         * while loop.
         */
        min = mid + 1;
      }
    } else {
      /**
       * If the else block is executed it means the right side of the array is sorted,
       * so you need to check if the target num is in that array.
       */
      if (num > arr[mid] || num < arr[min]) {
        /**
         * If the target num is higher than the value of index mid of arr, or the
         * value of index min is greater than the target number, then the value of
         * min needs to be set to mid + 1 so the right side of the sub-array can be
         * searched through the next iteration of the while loop.
         */
        min = mid + 1;
      } else {
        /**
         * If the else block is executed it means that the value is either in the left
         * part of the array, or not at all. To find out which, the value of max needs
         * to be set to mid + 1 so the left sub-array can be searched through the next
         * iteration of the while loop.
         */
        max = mid - 1;
      }
    }
  }
  /**
   * If the target num is not found in the array, return -1 as there is no valid index to
   * return.
   */
  return -1;
}

function findRotatedIndexRecursive(
  arr: number[],
  num: number,
  min: number = 0,
  max: number = arr.length - 1,
): number {
  if (min > max) return 0;
  const mid = Math.floor((min + max) / 2);
  if (arr[mid] === num) return mid;
  if (arr[mid] < arr[max]) {
    // right sub-array is sorted
    if (num < arr[mid] || num > arr[max]) {
      return findRotatedIndexRecursive(arr, num, min, mid - 1);
    } else {
      return findRotatedIndexRecursive(arr, num, mid + 1, max);
    }
  } else {
    // left sub-array is sorted
    if (num > arr[mid] || num < arr[min]) {
      return findRotatedIndexRecursive(arr, num, mid + 1, max);
    } else {
      return findRotatedIndexRecursive(arr, num, min, mid - 1);
    }
  }
}

console.log(findRotatedIndexRecursive([3, 4, 5, 6, 1, 2], 5));

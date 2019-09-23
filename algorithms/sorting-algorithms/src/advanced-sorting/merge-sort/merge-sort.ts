import merge from "../../../utils/merge";

export default function mergeSort(arr: any[]): any[] {
  /**
   * Return the array if it is equal to or less than 1, because the
   * array is obviously sorted at these lengths.
   */
  if (arr.length <= 1) {
    return arr;
  }
  /**
   * Set mid point to set the point to determine the left and right
   * side of the array.
   */
  const mid = Math.floor(arr.length / 2);
  /**
   * Run merge sort recursively on the left and right sides of the
   * array, until we have left and right values to merge together to
   * form the sorted array.
   */
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([23423, 222, 123, 7654, 2211, -2000]));
